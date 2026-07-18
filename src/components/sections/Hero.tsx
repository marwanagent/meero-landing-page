import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { Pipeline } from "@/components/Pipeline";

/**
 * Hero (spec section 4 + 5). Left-aligned, large editorial serif headline that
 * owns the first viewport, one muted subhead, one CTA with a warm underline,
 * and the calm pipeline band directly beneath the copy.
 */
export function Hero() {
  return (
    <section className="pt-20 sm:pt-28 lg:pt-32">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {site.hero.eyebrow}
        </p>

        <h1 className="mt-6 max-w-[15ch] font-serif text-[clamp(2.75rem,5vw+1rem,4.5rem)] font-medium leading-[1.05] tracking-[-0.01em] text-ink">
          {site.hero.headline}
        </h1>

        <p className="mt-6 max-w-[48ch] text-[1.125rem] leading-relaxed text-muted">
          {site.hero.subhead}
        </p>

        <Cta className="mt-8" location="hero" />
      </Container>

      <Container className="mt-16 sm:mt-20">
        <Pipeline />
      </Container>
    </section>
  );
}
