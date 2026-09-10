import { MessageThread } from "@/components/mockups/MessageThread";
import { MESSAGE_THREADS } from "@/content/mockups";
import { howItWorks } from "@/content/home";
import { Container } from "@/components/Container";

/** How it works (spec section 4): a real three-step sequence, so numbered. */
export function HowItWorks() {
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(2.5rem,4.5vw+0.5rem,3.75rem)] font-normal leading-[1.06] tracking-[-0.035em] text-ink">
          {howItWorks.heading}
        </h2>
        <ol role="list" className="mt-12">
          {howItWorks.steps.map((step, i) => (
            <li key={step.title} className="grid items-center gap-7 border-hairline py-7 first:pt-0 last:pb-0 not-first:border-t md:grid-cols-2 md:gap-16 md:py-10">
              <div className={i === 1 ? "min-w-0 md:col-start-2 md:row-start-1" : "min-w-0"}>
                <span aria-hidden="true" className="inline-flex size-11 items-center justify-center rounded-full bg-ink font-serif text-2xl text-paper">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
              <div className={i === 1 ? "min-w-0 md:col-start-1 md:row-start-1" : "min-w-0"}>
                <MessageThread thread={MESSAGE_THREADS[i]} />
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
