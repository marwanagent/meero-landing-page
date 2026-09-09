import { proof } from "@/content/home";
import { Container } from "@/components/Container";
import { EmailCard } from "@/components/mockups/EmailCard";
import { InvoiceCard } from "@/components/mockups/InvoiceCard";
import { MessageThread } from "@/components/mockups/MessageThread";
import { EMAIL_MOCKUPS, MESSAGE_THREADS } from "@/content/mockups";
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
    ownResultsLabel,
    lead,
    supporting,
    supportingDisclaimer,
    takenOffIntro,
    takenOff,
    clientProofLabel,
    quote,
    authority,
  } = proof;

  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(2rem,3.5vw+0.5rem,3rem)] font-normal leading-[1.06] tracking-[-0.035em] text-ink">
          {heading}
        </h2>

        <p className="mt-8 text-xs font-medium tracking-[0.14em] text-muted">
          {ownResultsLabel}
        </p>
        <ul className="mt-4 list-disc space-y-4 pl-5 text-xl">
          <li>{lead}</li>
          <li>{supporting}</li>
        </ul>
        <p className="mt-2 max-w-[60ch] text-base leading-relaxed text-ink">
          {supportingDisclaimer}
        </p>

        <p className="mt-10 text-xs font-medium tracking-[0.14em] text-muted">
          {takenOffIntro}
        </p>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {takenOff.map((item) => (
            <li
              key={item}
              className="border-t border-ink/15 pt-4 text-base leading-relaxed text-muted"
            >
              {item}
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

        <p className="mt-12 max-w-[60ch] text-base leading-relaxed text-muted">
          {authority}
        </p>

        <div className="mt-12">
          <div className="grid items-start gap-6 md:grid-cols-2">
            {EMAIL_MOCKUPS.map((email) => (
              <EmailCard key={email.id} email={email} state={email.state} />
            ))}
            <InvoiceCard />
          </div>
          <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
            {MESSAGE_THREADS.slice(2).map((thread) => (
              <MessageThread key={thread.id} thread={thread} />
            ))}
          </div>
        </div>

        {/* Mid-page CTA (spec section 4), previously carried by the cut section. */}
        <Cta className="mt-14" align="center" location="mid-page" />
      </Container>
    </section>
  );
}
