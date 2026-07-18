import { site } from "@/content/site";
import { Container } from "@/components/Container";

/**
 * FAQ (spec section 4). Native <details> accordion: accessible and fully
 * functional with JavaScript disabled.
 */
export function Faq() {
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
          {site.faq.heading}
        </h2>
        <dl className="mt-10 divide-y divide-hairline border-t border-hairline">
          {site.faq.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-ink [&::-webkit-details-marker]:hidden">
                <dt>{item.q}</dt>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl leading-none text-muted transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <dd className="mt-3 max-w-[62ch] text-base leading-relaxed text-muted">
                {item.a}
              </dd>
            </details>
          ))}
        </dl>
      </Container>
    </section>
  );
}
