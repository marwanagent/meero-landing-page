"use client";

import { CTA_LABEL, CTA_SUBLABEL, BOOKING_URL } from "@/content/site";
import { track, ANALYTICS_EVENTS } from "@/lib/analytics";

export function Cta({
  className = "",
  align = "left",
  location,
}: {
  className?: string;
  align?: "left" | "center";
  location: string;
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      <a
        href={BOOKING_URL}
        onClick={() => track(ANALYTICS_EVENTS.ctaClick, { location })}
        className="cta-button"
      >
        {CTA_LABEL}
      </a>
      <p className="text-sm text-muted">{CTA_SUBLABEL}</p>
    </div>
  );
}

export function CtaCompact() {
  return (
    <a
      href={BOOKING_URL}
      onClick={() => track(ANALYTICS_EVENTS.ctaClick, { location: "header" })}
      className="cta-button cta-button-compact"
    >
      {CTA_LABEL}
    </a>
  );
}
