import { proof } from "@/content/home";
import { Container } from "@/components/Container";
import { TaskVisual } from "@/components/TaskVisual";
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
    lead,
    supporting,
    supportingDisclaimer,
    takenOffIntro,
    takenOff,
    clientProofLabel,
    quote,
  } = proof;

  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(2rem,3.5vw+0.5rem,3rem)] font-normal leading-[1.06] tracking-[-0.035em] text-ink">
          {heading}
        </h2>

        <ul className="mt-8 list-disc space-y-4 pl-5 text-xl">
          <li>{lead}</li>
          <li>{supporting}</li>
        </ul>
        <p className="mt-2 max-w-[60ch] text-base leading-relaxed text-ink">
          {supportingDisclaimer}
        </p>

        <p className="mt-10 text-lg font-semibold text-ink">
          {takenOffIntro}
        </p>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {takenOff.map((item, index) => (
            <li
              key={item}
              className="min-w-0 overflow-hidden rounded-2xl border border-ink/10 bg-card"
            >
              <TaskVisual task={index} />
              <p className="p-6 text-lg font-semibold leading-snug text-ink">{item}</p>
            </li>
          ))}
        </ul>

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
