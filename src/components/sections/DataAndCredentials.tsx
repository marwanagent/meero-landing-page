import { Container } from "@/components/Container";
import { dataAndCredentials } from "@/content/home";

export function DataAndCredentials() {
  return (
    <section className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <h2 className="font-serif text-[clamp(2rem,3.5vw+0.5rem,3rem)] font-normal leading-[1.06] tracking-[-0.035em] text-ink">
          {dataAndCredentials.heading}
        </h2>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">
          {dataAndCredentials.intro}
        </p>
        <ul className="mt-10 max-w-[70ch] divide-y divide-hairline border-t border-hairline">
          {dataAndCredentials.items.map((item) => (
            <li key={item.lead} className="py-5 text-base leading-relaxed text-muted">
              <strong className="text-ink">{item.lead}</strong>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
