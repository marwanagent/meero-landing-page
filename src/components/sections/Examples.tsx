import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { SampleOutputs } from "@/components/SampleOutputs";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
      {children}
    </p>
  );
}

/** What we've built (spec section 4): real custom systems, get-clients / get-paid / protect-attention. */
export function Examples() {
  const { heading, intro, featured, others, closing } = site.examples;
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
          {heading}
        </h2>
        <p className="mt-6 max-w-[60ch] text-[1.125rem] leading-relaxed text-muted">
          {intro}
        </p>

        {/* Featured example, with a light illustrative sample beside it. */}
        <div className="mt-12 grid gap-8 rounded-xl border border-hairline bg-card p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>{featured.eyebrow}</Eyebrow>
            <h3 className="mt-3 font-serif text-2xl font-medium leading-snug text-ink">
              {featured.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">{featured.body}</p>
            <p className="mt-4 text-base italic leading-relaxed text-muted">
              {featured.alsoBuilt}
            </p>
          </div>
          <SampleOutputs variant="light" />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {others.map((ex) => (
            <div key={ex.title} className="rounded-xl border border-hairline bg-card p-6 sm:p-8">
              <Eyebrow>{ex.eyebrow}</Eyebrow>
              <h3 className="mt-3 font-serif text-xl font-medium leading-snug text-ink">
                {ex.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">{ex.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[60ch] text-base leading-relaxed text-ink">{closing}</p>
      </Container>
    </section>
  );
}
