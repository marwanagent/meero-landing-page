import { faq } from "@/content/home";
import { Container } from "@/components/Container";

function Answer({ item }: { item: (typeof faq.items)[number] }) {
  if (!("link" in item)) {
    return item.a;
  }

  const parts = item.a.split(item.link.text);
  if (parts.length !== 2) {
    throw new Error(`FAQ link text must occur exactly once: ${item.q}`);
  }

  return (
    <>
      {parts[0]}
      <a href={item.link.href} className="underline underline-offset-4">
        {item.link.text}
      </a>
      {parts[1]}
    </>
  );
}

/**
 * FAQ (spec section 4). Native <details> accordion: accessible and fully
 * functional with JavaScript disabled.
 */
export function Faq() {
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-heading font-bold text-[clamp(2rem,3.5vw+0.5rem,3rem)] leading-[1.06] tracking-[-0.02em] text-ink">
          {faq.heading}
        </h2>
        <div className="mt-10 divide-y divide-hairline border-t border-hairline">
          {faq.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-ink [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl leading-none text-muted transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-muted">
                <Answer item={item} />
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
