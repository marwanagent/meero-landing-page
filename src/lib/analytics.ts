/**
 * Privacy-friendly analytics helper (spec section 7 + 9).
 *
 * Analytics is NEVER in the critical path. Every call here is a guarded no-op
 * when no provider is loaded, so a blocked or missing script can never break
 * the page or a CTA.
 *
 * Returns a structured string so a caller could log exactly what happened.
 */

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number | boolean> },
    ) => void;
  }
}

export type TrackResult = `OK: ${string}` | `SKIP: ${string}` | `FAIL: ${string}`;

export function track(
  event: string,
  props?: Record<string, string | number | boolean>,
): TrackResult {
  if (typeof window === "undefined") return "SKIP: not in browser";
  try {
    if (typeof window.plausible === "function") {
      window.plausible(event, props ? { props } : undefined);
      return `OK: sent ${event}`;
    }
    return `SKIP: no analytics provider for ${event}`;
  } catch (err) {
    return `FAIL: ${event} threw ${(err as Error).message}`;
  }
}

export const ANALYTICS_EVENTS = {
  ctaClick: "CTA click",
  bookingCompleted: "Booking completed",
} as const;
