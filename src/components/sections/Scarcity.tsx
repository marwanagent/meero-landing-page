import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

/**
 * Scarcity + primary CTA (spec section 4). Honest scarcity, then the booking
 * action itself. This is the bottom of the three CTA depths: the inline embed
 * is present here (id="book"), which the hero and mid-page CTAs scroll to.
 */
export function Scarcity() {
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
          {site.scarcity.heading}
        </h2>
        <p className="mt-8 max-w-[60ch] text-[1.125rem] leading-relaxed text-muted">
          {site.scarcity.body}
        </p>
        <p className="mt-6 text-sm text-muted">{site.cta.micro}</p>

        <div id="book" className="mt-12 scroll-mt-8">
          <CalendlyEmbed />
        </div>
      </Container>
    </section>
  );
}
