import { control } from "@/content/home";
import { Container } from "@/components/Container";

/** Control (spec section 4): you stay in charge, and it stays simple. */
export function Control() {
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="max-w-[20ch] font-serif text-[clamp(2rem,3.5vw+0.5rem,3rem)] font-normal leading-[1.06] tracking-[-0.035em] text-ink">
          {control.heading}
        </h2>
        <p className="mt-8 max-w-[60ch] text-[1.125rem] leading-relaxed text-muted">
          {control.body}
        </p>
      </Container>
    </section>
  );
}
