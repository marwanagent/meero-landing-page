import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { SampleOutputs } from "@/components/SampleOutputs";
import { Cta } from "@/components/Cta";

/**
 * Proof (spec section 4): lead with the verified outcome, then support it.
 *
 * This section also absorbs what used to be a separate "what we've built"
 * section: the capability lines sit underneath the result they produced, so the
 * page never reads as a product tour.
 */
export function Proof() {
  const { heading, lead, supporting, supportingDisclaimer, takenOffIntro, takenOff, quote, authority } =
    site.proof;

  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(2rem,3.5vw+0.5rem,3rem)] font-normal leading-[1.06] tracking-[-0.035em] text-ink">
          {heading}
        </h2>

        <p className="mt-8 max-w-[52ch] font-serif text-[clamp(1.5rem,2.2vw+0.5rem,2.125rem)] font-normal leading-[1.15] tracking-[-0.03em] text-ink">
          {lead}
        </p>
        <p className="mt-6 max-w-[60ch] text-[1.125rem] leading-relaxed text-muted">
          {supporting}
        </p>
        <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted/70">
          {supportingDisclaimer}
        </p>

        <p className="mt-10 text-xs font-medium uppercase tracking-[0.14em] text-muted">
          {takenOffIntro}
        </p>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {takenOff.map((item) => (
            <li
              key={item}
              className="border-t border-ink/15 pt-4 text-base leading-relaxed text-muted"
            >
              {item}
            </li>
          ))}
        </ul>

        <figure className="mt-14 max-w-[60ch] border-l-2 border-accent pl-6">
          <blockquote className="text-lg leading-relaxed text-ink">
            {quote.text}
          </blockquote>
          <figcaption className="mt-3 text-sm text-muted">{quote.attribution}</figcaption>
        </figure>

        <p className="mt-12 max-w-[60ch] text-base leading-relaxed text-muted">
          {authority}
        </p>

        <div className="mt-12">
          <SampleOutputs />
        </div>

        {/* Mid-page CTA (spec section 4), previously carried by the cut section. */}
        <Cta className="mt-14" align="center" location="mid-page" />
      </Container>
    </section>
  );
}
