import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { SampleOutputs } from "@/components/SampleOutputs";

/** Proof (spec section 4): lead with the verified outcome, then support. */
export function Proof() {
  const { heading, lead, supporting, quote, authority } = site.proof;
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
          {heading}
        </h2>

        <p className="mt-8 max-w-[52ch] font-serif text-[clamp(1.4rem,2.2vw+0.5rem,2rem)] font-medium leading-[1.25] text-ink">
          {lead}
        </p>
        <p className="mt-6 max-w-[60ch] text-[1.125rem] leading-relaxed text-muted">
          {supporting}
        </p>

        <figure className="mt-12 max-w-[60ch] border-l-2 border-ink/20 pl-6">
          <blockquote className="text-lg leading-relaxed text-ink">
            {quote.text}
          </blockquote>
          <figcaption className="mt-3 text-sm text-muted">{quote.attribution}</figcaption>
        </figure>

        <p className="mt-12 max-w-[60ch] text-base leading-relaxed text-muted">
          {authority}
        </p>

        <div className="mt-14">
          <SampleOutputs variant="full" />
        </div>
      </Container>
    </section>
  );
}
