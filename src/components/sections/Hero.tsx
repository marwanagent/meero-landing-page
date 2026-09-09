import { hero } from "@/content/home";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { WeekGraphic } from "@/components/WeekGraphic";

const bulletColors = ["tomato", "peacock", "banana", "tangerine"];

export function Hero() {
  return (
    <section id="top" className="hero-atmosphere relative py-10 sm:py-14">
      <Container className="hero-container">
        <div className="hero-layout">
          <div className="min-w-0">
            <p className="text-xs font-medium tracking-[0.18em] text-muted">{hero.eyebrow}</p>
            <h1 className="mt-5 max-w-[19ch] font-serif text-[clamp(2.5rem,3.8vw,3.5rem)] font-normal leading-[1.04] tracking-[-0.04em] text-ink">
              {hero.headlineBefore}<em className="text-message-blue italic">{hero.headlineEmphasis}</em>{hero.headlineAfter}
            </h1>
            <div className="mt-5 max-w-[58ch] space-y-4 text-base leading-relaxed text-muted">
              <p>{hero.body[0]}</p>
              <ul className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
                {hero.bullets.map((item, index) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className={`hero-marker task-${bulletColors[index]}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>{hero.body[1]}</p>
            </div>
            <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-ink">{hero.ctaLead}</p>
            <Cta className="mt-4" location="hero" />
          </div>
          <WeekGraphic />
        </div>
      </Container>
    </section>
  );
}
