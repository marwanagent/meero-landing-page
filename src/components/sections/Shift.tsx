import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { WeekGraphic } from "@/components/WeekGraphic";

/**
 * The shift (spec section 4): name the ceiling, then say what one conversation
 * gives them. The week card sits beside the copy as a side piece, so the
 * contrast is felt without spending a whole section on it.
 */
export function Shift() {
  const { headingBefore, headingEmphasis, headingAfter, body } = site.shift;

  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-start lg:gap-14">
          <div>
            <h2 className="max-w-[24ch] font-serif text-[clamp(2rem,3.5vw+0.5rem,3rem)] font-normal leading-[1.06] tracking-[-0.035em] text-ink">
              {headingBefore}
              <em className="italic">{headingEmphasis}</em>
              {headingAfter}
            </h2>
            <div className="mt-8 max-w-[60ch] space-y-5 text-[1.125rem] leading-relaxed text-muted">
              {body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:pt-3">
            <WeekGraphic />
          </div>
        </div>
      </Container>
    </section>
  );
}
