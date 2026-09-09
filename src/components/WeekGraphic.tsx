import { weekGraphic } from "@/content/home";

/**
 * Graphic A (spec section 6): the same week, before and after, as a small
 * side card beside the shift copy rather than a section of its own.
 *
 * Crowded chips on top, the same chips crossed out below, and the hours they
 * took given back as solid chips. Each half carries its own text alternative,
 * so the contrast is available to a screen reader too.
 */
const { now, after } = weekGraphic;

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.7rem] font-medium tracking-[0.14em] text-muted">
      {children}
    </p>
  );
}

export function WeekGraphic() {
  return (
    <figure className="card-raised rounded-2xl bg-card p-5 sm:p-6">
      <div role="img" aria-label={now.alt}>
        <Label>{now.label}</Label>
        <div aria-hidden="true" className="mt-3 flex flex-wrap gap-1.5">
          {now.tasks.map((task, i) => (
            <span
              key={`${task}-${i}`}
              className="rounded-md border border-hairline bg-paper px-2 py-1 text-[0.7rem] text-ink"
            >
              {task}
            </span>
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="my-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-hairline" />
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="none">
          <path
            d="M12 5v14M6 13l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="h-px flex-1 bg-hairline" />
      </div>

      <div role="img" aria-label={after.alt}>
        <Label>{after.label}</Label>
        <div aria-hidden="true" className="mt-3 flex flex-wrap gap-1.5">
          {after.handled.map((task) => (
            <span
              key={task}
              className="rounded-md border border-hairline bg-paper px-2 py-1 text-[0.7rem] text-muted line-through"
            >
              {task}
            </span>
          ))}
        </div>
        <div aria-hidden="true" className="mt-2.5 flex flex-wrap gap-1.5">
          {after.freed.map((task) => (
            <span
              key={task}
              className="rounded-md bg-ink px-2.5 py-1 text-[0.7rem] font-medium text-paper"
            >
              {task}
            </span>
          ))}
        </div>
      </div>
    </figure>
  );
}
