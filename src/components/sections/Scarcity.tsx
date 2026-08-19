import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

/**
 * Scarcity + primary CTA (spec section 4). Honest scarcity, then the booking
 * action itself. This is the bottom of the three CTA depths: the inline embed
 * is present here (id="book"), which the header and hero CTAs scroll to.
 */
export function Scarcity() {
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(2rem,3.5vw+0.5rem,3rem)] font-normal leading-[1.06] tracking-[-0.035em] text-ink">
          {site.scarcity.heading}
        </h2>
        <p className="mt-8 max-w-[60ch] text-[1.125rem] leading-relaxed text-muted">
          {site.scarcity.body}
        </p>

        <div id="book" className="mt-12 scroll-mt-24">
          <CalendlyEmbed />
        </div>
      </Container>
    </section>
  );
}
