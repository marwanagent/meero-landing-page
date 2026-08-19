"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { track, ANALYTICS_EVENTS } from "@/lib/analytics";

const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";
const READY_TIMEOUT_MS = 10000;

type Status = "loading" | "ready" | "failed";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

/**
 * Inline Calendly embed (spec section 7), preferred over a popup so the action
 * is always visible.
 *
 * Failure modes handled explicitly (spec section 9):
 *  - Script fails to load: status -> failed, prominent fallback link shown.
 *  - Script loads but no iframe ever mounts (blocked / slow): 10s timeout ->
 *    failed, fallback shown.
 *  - JavaScript disabled: the <noscript> fallback link renders.
 *  - Regardless of state, a persistent plain link to the booking URL is shown,
 *    so the action is never a dead button or blank space.
 *
 * Fires the booking-completion analytics event when Calendly reports a
 * scheduled event. Analytics failing never affects booking.
 */
export function CalendlyEmbed() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    let settled = false;
    const markReady = () => {
      if (settled) return;
      settled = true;
      setStatus("ready");
    };
    const markFailed = () => {
      if (settled) return;
      settled = true;
      setStatus("failed");
    };

    // Detect the widget actually mounting its iframe.
    const observer = new MutationObserver(() => {
      if (parent.querySelector("iframe")) markReady();
    });
    observer.observe(parent, { childList: true, subtree: true });

    const timeout = window.setTimeout(() => {
      if (!parent.querySelector("iframe")) markFailed();
    }, READY_TIMEOUT_MS);

    const init = () => {
      try {
        window.Calendly?.initInlineWidget({ url: site.calendly.url, parentElement: parent });
      } catch {
        markFailed();
      }
    };

    // Reuse the script if it is already on the page; otherwise inject it.
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${WIDGET_SRC}"]`,
    );
    let script = existing;
    if (existing && window.Calendly) {
      init();
    } else if (existing) {
      existing.addEventListener("load", init, { once: true });
      existing.addEventListener("error", markFailed, { once: true });
    } else {
      script = document.createElement("script");
      script.src = WIDGET_SRC;
      script.async = true;
      script.addEventListener("load", init, { once: true });
      script.addEventListener("error", markFailed, { once: true });
      document.body.appendChild(script);
    }

    const onMessage = (e: MessageEvent) => {
      if (
        e.origin === "https://calendly.com" &&
        typeof e.data === "object" &&
        e.data?.event === "calendly.event_scheduled"
      ) {
        track(ANALYTICS_EVENTS.bookingCompleted);
      }
    };
    window.addEventListener("message", onMessage);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
      window.removeEventListener("message", onMessage);
      script?.removeEventListener("load", init);
    };
  }, []);

  return (
    <div>
      {status === "failed" ? (
        <div className="card-raised flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl bg-card px-6 py-10 text-center">
          <p className="text-muted">{site.booking.failed}</p>
          <a
            href={site.calendly.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track(ANALYTICS_EVENTS.ctaClick, { location: "embed-fallback" })}
            className="cta-button"
          >
            {site.cta.label}
          </a>
        </div>
      ) : (
        <div className="relative">
          {status === "loading" && (
            <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-sm text-muted">
              {site.booking.loading}
            </p>
          )}
          {/*
            Deliberately NOT using Calendly's `calendly-inline-widget` class.
            That class triggers Calendly's auto-init scan, which calls
            .split() on the element's `data-url`; with no data-url it throws
            ("Cannot read properties of null") and aborts widget.js before it
            defines window.Calendly, so nothing ever loads. We initialize
            explicitly via initInlineWidget({ url, parentElement }) instead.
          */}
          <div
            ref={parentRef}
            className="rounded-2xl"
            style={{ minWidth: "280px", height: "700px" }}
            aria-label={site.booking.calendarLabel}
          />
        </div>
      )}

      <p className="mt-4 text-center text-sm text-muted">
        {site.booking.troublePrefix}{" "}
        <a
          href={site.calendly.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track(ANALYTICS_EVENTS.ctaClick, { location: "embed-plain-link" })}
          className="font-medium text-ink underline decoration-2 underline-offset-4"
        >
          {site.booking.troubleLink}
        </a>
        .
      </p>

      <noscript>
        <p className="mt-4 text-center text-sm text-muted">
          <a href={site.calendly.url} className="font-medium text-ink underline">
            {site.booking.noscript}
          </a>
          .
        </p>
      </noscript>
    </div>
  );
}
