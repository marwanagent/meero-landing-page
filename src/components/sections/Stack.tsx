import { stack } from "@/content/home";
import { STACK_TOOLS } from "@/content/stack";
import { Container } from "@/components/Container";
import { stackIcons } from "./stackIcons";
export function Stack() {
  return (
    <section className="border-t border-hairline py-16">
      <Container>
        <h2 className="font-serif text-4xl">{stack.heading}</h2>
        <p className="mt-4 text-muted">{stack.body}</p>
        <ul className="my-9 flex flex-wrap items-center gap-x-8 gap-y-6">
          {STACK_TOOLS.map((tool) => {
            const icon = stackIcons[tool.slug];
            return (
              <li
                key={tool.slug}
                className="text-lg font-semibold tracking-tight"
              >
                {icon ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="img"
                    className="h-7 w-auto"
                  >
                    <title>{tool.name}</title>
                    <path d={icon.path} />
                  </svg>
                ) : (
                  tool.name
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
