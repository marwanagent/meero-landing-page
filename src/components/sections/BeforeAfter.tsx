import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";

/**
 * What changes for you (spec section 4) + Graphic 2: before/after "your week".
 * Left is heavy and crowded, right is open. Stacks vertically on mobile with a
 * clear divider and label. Each panel carries a text alternative.
 */
export function BeforeAfter() {
  const { heading, now, after } = site.whatChanges;

  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
          {heading}
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2">
          {/* Now: crowded */}
          <div role="img" aria-label={now.alt} className="bg-card p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              {now.label}
            </p>
            <div aria-hidden="true" className="mt-5 flex flex-wrap gap-2">
              {now.tasks.map((task, i) => (
                <span
                  key={`${task}-${i}`}
                  className="rounded-md border border-hairline bg-paper px-3 py-2 text-sm text-ink"
                >
                  {task}
                </span>
              ))}
            </div>
          </div>

          {/* With Seknd: handled + freed */}
          <div role="img" aria-label={after.alt} className="bg-card p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              {after.label}
            </p>
            <div aria-hidden="true" className="mt-5 flex flex-wrap gap-2">
              {after.handled.map((task) => (
                <span
                  key={task}
                  className="rounded-md border border-hairline bg-paper px-3 py-2 text-sm text-muted/60 line-through"
                >
                  {task}
                </span>
              ))}
            </div>
            <div aria-hidden="true" className="mt-4 flex flex-wrap gap-2">
              {after.freed.map((task) => (
                <span
                  key={task}
                  className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper"
                >
                  {task}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mid-page CTA (spec section 4). */}
        <Cta className="mt-14" align="center" location="mid-page" />
      </Container>
    </section>
  );
}
