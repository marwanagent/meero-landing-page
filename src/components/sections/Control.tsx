import { site } from "@/content/site";
import { Container } from "@/components/Container";

/** Control (spec section 4): you are always in control, and control is simple. */
export function Control() {
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="max-w-[20ch] font-serif text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
          {site.control.heading}
        </h2>
        <p className="mt-8 max-w-[60ch] text-[1.125rem] leading-relaxed text-muted">
          {site.control.body}
        </p>
      </Container>
    </section>
  );
}
