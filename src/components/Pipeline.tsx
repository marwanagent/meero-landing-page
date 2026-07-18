import { site } from "@/content/site";

/**
 * Graphic 1: the animated pipeline (spec section 6). The one bold, memorable
 * thing on the page; everything else stays quiet.
 *
 * One token calmly completes a five-step journey, then the finished pipeline
 * rests. Built as CSS keyframes over inline SVG (see globals.css). No JS, no
 * library, nothing that blocks first paint. The default (and reduced-motion,
 * and no-CSS-animation) state is the fully completed pipeline, held static.
 *
 * On mobile the connector line and token are hidden and the stages wrap into
 * a simple grid.
 */
function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M5 12.5l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Pipeline() {
  const stages = site.pipeline.stages;

  return (
    <figure
      role="img"
      aria-label={site.pipeline.ariaLabel}
      className="relative w-full rounded-xl border border-hairline bg-card px-6 py-10 sm:px-10 sm:py-12"
    >
      <div className="relative">
        {/* Connector line: only on >= sm, where the stages sit in one row.
            Spans exactly from the first node center (10%) to the last (90%). */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute hidden sm:block"
          style={{ left: "10%", right: "10%", top: "22px" }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-hairline" />
          <div className="pipe-connector-fill absolute inset-x-0 top-0 h-px bg-ink/45" />
          <div
            className="pipe-token absolute z-0 h-3 w-3 rounded-full bg-ink"
            style={{ top: 0, left: 0, transform: "translate(-50%, -50%)" }}
          />
        </div>

        <ul className="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-5 sm:gap-0">
          {stages.map((label, i) => {
            const n = i + 1;
            return (
              <li key={label} className="flex flex-col items-center">
                <span
                  className={`pipe-dot pipe-dot-${n} relative z-10 flex h-11 w-11 items-center justify-center rounded-full border bg-card text-ink`}
                >
                  <span className={`pipe-check pipe-check-${n} inline-flex`}>
                    <Check />
                  </span>
                </span>
                <span className="mt-3 text-sm font-medium text-ink">{label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </figure>
  );
}
