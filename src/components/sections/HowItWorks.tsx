import { site } from "@/content/site";
import { Container } from "@/components/Container";

/** How it works (spec section 4): a real three-step sequence, so numbered. */
export function HowItWorks() {
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
          {site.howItWorks.heading}
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {site.howItWorks.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col">
              <span
                aria-hidden="true"
                className="font-serif text-4xl font-medium text-ink/25"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
