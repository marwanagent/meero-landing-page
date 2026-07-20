import { site } from "@/content/site";
import { Container } from "@/components/Container";

/** The shift (spec section 4): name the pain, separate loved work from chore work. */
export function Shift() {
  const { headingBefore, headingEmphasis, headingAfter, body } = site.shift;

  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="max-w-[22ch] font-serif text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
          {headingBefore}
          <em className="font-medium italic">{headingEmphasis}</em>
          {headingAfter}
        </h2>
        <div className="mt-8 max-w-[60ch] space-y-5 text-[1.125rem] leading-relaxed text-muted">
          {body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
