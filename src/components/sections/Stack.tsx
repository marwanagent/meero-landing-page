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
            <li
              key={tool.slug}
              className="text-lg font-semibold tracking-tight"
            >
              {tool.name}
            </li>
          ))}
        </ul>
        <p className="max-w-3xl text-sm text-muted">{stack.disclaimer}</p>
      </Container>
    </section>
  );
}
