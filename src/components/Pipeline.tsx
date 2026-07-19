import { site } from "@/content/site";

/**
 * Graphic 1: the animated pipeline (spec section 6). The one bold, memorable
 * thing on the page; everything else stays quiet.
 *
 * One token calmly completes a five-step journey, then the finished pipeline
 * rests. Built as CSS keyframes (see globals.css). No JS, no library.
 * On mobile the stages stay in one calm horizontal row (smaller type); the
 * connector and token remain desktop-only.
 */
function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" aria-hidden="true">
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
      className="relative w-full rounded-xl border border-hairline bg-card px-4 py-8 sm:px-10 sm:py-14"
    >
      <figcaption className="mb-8 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted">
        {site.pipeline.caption}
      </figcaption>

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

        <ul className="grid grid-cols-5 gap-1 sm:gap-0">
          {stages.map((label, i) => {
            const n = i + 1;
            return (
              <li key={label} className="flex min-w-0 flex-col items-center">
                <span
                  className={`pipe-dot pipe-dot-${n} relative z-10 flex h-9 w-9 items-center justify-center rounded-full border bg-card text-ink sm:h-11 sm:w-11`}
                >
                  <span className={`pipe-check pipe-check-${n} inline-flex`}>
                    <Check />
                  </span>
                </span>
                <span className="mt-2 text-center text-[0.65rem] font-medium leading-tight text-ink sm:mt-3 sm:text-sm">
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </figure>
  );
}
