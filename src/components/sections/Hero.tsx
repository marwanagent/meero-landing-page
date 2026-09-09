import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";

/**
 * Hero (spec section 4 + 5): text only, left-aligned, sized so the headline
 * owns the first viewport. The wordmark lives in the sticky header, and there
 * is deliberately no graphic here.
 */
export function Hero() {
  const { eyebrow, headlineBefore, headlineEmphasis, headlineAfter, body, ctaLead } = site.hero;

  return (
    <section id="top" className="hero-atmosphere relative pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {eyebrow}
        </p>

        <h1 className="mt-6 max-w-[15ch] font-serif text-[clamp(2.75rem,5vw+1rem,4.5rem)] font-normal leading-[1.0] tracking-[-0.04em] text-ink">
          {headlineBefore}
          <em className="italic">{headlineEmphasis}</em>
          {headlineAfter}
        </h1>

        <div className="mt-7 max-w-[48ch] space-y-5 text-[1.125rem] leading-relaxed text-muted">
          {body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <p className="mt-7 max-w-[48ch] text-[1.125rem] leading-relaxed text-ink">{ctaLead}</p>

        <Cta className="mt-5" location="hero" />
      </Container>
    </section>
  );
}
