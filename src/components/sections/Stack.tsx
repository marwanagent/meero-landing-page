import { stack } from "@/content/home";
import { STACK_TOOLS } from "@/content/stack";
import { Container } from "@/components/Container";
export function Stack() {
  return (
    <section className="border-t border-hairline py-16">
      <Container>
        <h2 className="font-serif text-4xl">{stack.heading}</h2>
        <p className="mt-4 text-muted">{stack.body}</p>
        <ul className="my-9 flex flex-wrap items-center gap-x-8 gap-y-6">
          {STACK_TOOLS.map((tool) => (
            <li key={tool.slug} className="flex h-8 shrink-0 items-center">
              {/* Self-hosted SVGs are served directly by the static export. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/logos/${tool.slug}.svg`}
                alt={tool.name}
                className={
                  tool.slug === "hubspot" || tool.slug === "zoom"
                    ? "h-6 w-auto"
                    : "h-8 w-auto"
                }
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
