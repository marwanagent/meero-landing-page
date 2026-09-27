import { hero } from "@/content/home";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { TaskVisual } from "@/components/TaskVisual";

const bulletColors = ["tomato", "peacock", "banana", "tangerine"];

export function Hero() {
  return (
    <section id="top" className="hero-atmosphere relative py-10 sm:py-14">
      <Container className="hero-container">
        <div className="hero-layout">
          <div className="min-w-0">
            <p className="text-xs font-medium tracking-[0.18em] text-muted">{hero.eyebrow}</p>
            <h1 className="mt-5 max-w-[19ch] font-heading font-bold text-[clamp(2.5rem,3.8vw,3.5rem)] leading-[1.04] tracking-[-0.025em] text-ink">
              {hero.headline}
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
            <Cta className="mt-4" location="hero" sublabel={hero.ctaUnder} />
          </div>
          <ul className="grid min-w-0 gap-3 sm:grid-cols-3">
            {hero.taskCards.map((item, index) => (
              <li
                key={item}
                className="grid min-w-0 grid-cols-2 items-center overflow-hidden rounded-2xl border border-ink/10 bg-card sm:block"
              >
                <TaskVisual task={index} />
                <p className="p-4 text-sm font-semibold leading-snug text-ink sm:text-base">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
