import { hero } from "@/content/home";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { TaskVisual } from "@/components/TaskVisual";

const bulletColors = ["tomato", "peacock", "banana", "tangerine"];

export function Hero() {
  return (
    <section id="top" className="hero-atmosphere relative py-10 sm:py-14">
      <Container className="hero-container">
        <div className="grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p className="text-xs font-medium tracking-[0.18em] text-muted">{hero.eyebrow}</p>
            <h1 className="mt-5 max-w-[19ch] font-heading font-bold text-[clamp(2.5rem,4.2vw,4rem)] leading-[1.04] tracking-[-0.025em] text-ink">
              {hero.headline}
            </h1>
          </div>
          <div className="min-w-0 lg:pt-10">
            <div className="max-w-[58ch] space-y-4 text-base leading-relaxed text-muted">
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
        </div>
        <ul className="mt-12 grid min-w-0 gap-4 md:grid-cols-3 lg:mt-14 lg:gap-5">
          {hero.taskCards.map((item, index) => (
            <li
              key={item}
              className="grid min-w-0 grid-cols-2 items-center overflow-hidden rounded-2xl border border-ink/10 bg-card md:block"
            >
              <TaskVisual task={index} />
              <p className="p-4 text-base font-semibold leading-snug text-ink md:p-6 md:text-lg">{item}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
