import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { Pipeline } from "@/components/Pipeline";

/**
 * Hero (spec section 4 + 5), with restrained composition upgrades:
 * brand wordmark, italic emphasis in the headline, tighter pipeline proximity,
 * a single hairline above the signature graphic, and quiet paper atmosphere.
 * Pipeline remains the only animated element on the page.
 */
export function Hero() {
  const { wordmark, eyebrow, headlineBefore, headlineEmphasis, headlineAfter, subhead } =
    site.hero;

  return (
    <section className="hero-atmosphere relative pt-16 sm:pt-24 lg:pt-28">
      <Container>
        <p className="font-serif text-2xl font-medium tracking-[-0.02em] text-ink sm:text-[1.75rem]">
          {wordmark}
        </p>

        <p className="mt-10 text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {eyebrow}
        </p>

        <h1 className="mt-6 max-w-[15ch] font-serif text-[clamp(2.75rem,5vw+1rem,4.5rem)] font-medium leading-[1.05] tracking-[-0.01em] text-ink">
          {headlineBefore}
          <em className="font-medium italic">{headlineEmphasis}</em>
          {headlineAfter}
        </h1>

        <p className="mt-6 max-w-[48ch] text-[1.125rem] leading-relaxed text-muted">
          {subhead}
        </p>

        <Cta className="mt-8" location="hero" />
      </Container>

      {/* Structural hairline: editorial divider, not decoration. */}
      <Container className="mt-12 sm:mt-14">
        <div className="h-px w-full bg-hairline" aria-hidden="true" />
      </Container>

      <Container className="mt-10 sm:mt-12">
        <Pipeline />
      </Container>
    </section>
  );
}
