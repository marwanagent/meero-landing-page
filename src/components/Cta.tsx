"use client";

import { site } from "@/content/site";
import { track, ANALYTICS_EVENTS } from "@/lib/analytics";

/**
 * The single call to action, reused verbatim at three scroll depths (hero,
 * mid-page, bottom). It is a real anchor to the booking embed (#book), so it
 * works with JavaScript disabled and always leads somewhere (spec section 9).
 * The warm accent appears here and nowhere else, as the CTA underline.
 */
export function Cta({
  className = "",
  align = "left",
  location,
}: {
  className?: string;
  align?: "left" | "center";
  location: string;
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      <a
        href="#book"
        onClick={() => track(ANALYTICS_EVENTS.ctaClick, { location })}
        className="cta-button"
      >
        {site.cta.label}
      </a>
      <p className="text-sm text-muted">
        {location === "hero" ? site.cta.heroMicro : site.cta.micro}
      </p>
    </div>
  );
}
