import { proof } from "@/content/home";
import { Container } from "@/components/Container";
import { WeekGraphic } from "@/components/WeekGraphic";
import { Cta } from "@/components/Cta";

/**
 * Proof (spec section 4): lead with the verified outcome, then support it.
 *
 * This section also absorbs what used to be a separate "what we've built"
 * section: the capability lines sit underneath the result they produced, so the
 * page never reads as a product tour.
 */
export function Proof() {
  const {
    heading,
    body,
    clientProofLabel,
    quote,
  } = proof;

  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-heading font-bold text-[clamp(2rem,3.5vw+0.5rem,3rem)] leading-[1.06] tracking-[-0.02em] text-ink">
          {heading}
        </h2>
        <div className="mt-8 rounded-xl border border-hairline bg-card p-6">
          <p className="text-lg">{body}</p>
        </div>

        <div className="mt-10 max-w-3xl">
          <WeekGraphic />
        </div>

        <div className="mt-16 border-t border-hairline pt-10">
          <p className="text-xs font-medium tracking-[0.14em] text-muted">
            {clientProofLabel}
          </p>
          <figure className="mt-5 max-w-[60ch] border-l-2 border-accent pl-6">
            <blockquote className="text-lg leading-relaxed text-ink">
              {quote.text}
            </blockquote>
            <figcaption className="mt-3 text-sm text-muted">
              {quote.attribution}
            </figcaption>
          </figure>
        </div>

        {/* Mid-page CTA (spec section 4), previously carried by the cut section. */}
        <Cta className="mt-14" align="center" location="mid-page" />
      </Container>
    </section>
  );
}
