import { MessageThread } from "@/components/mockups/MessageThread";
import { MESSAGE_THREADS } from "@/content/mockups";
import { howItWorks } from "@/content/home";
import { Container } from "@/components/Container";

/** How it works (spec section 4): a real three-step sequence, so numbered. */
export function HowItWorks() {
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(2rem,3.5vw+0.5rem,3rem)] font-normal leading-[1.06] tracking-[-0.035em] text-ink">
          {howItWorks.heading}
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {howItWorks.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col">
              <span
                aria-hidden="true"
                className="font-serif text-4xl text-ink/25"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {MESSAGE_THREADS.slice(0, 2).map((thread) => (
            <MessageThread key={thread.id} thread={thread} />
          ))}
        </div>
      </Container>
    </section>
  );
}
