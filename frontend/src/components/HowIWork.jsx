import { Reveal, Eyebrow, GoldRule } from "./Reveal";

const SERVICES = [
  {
    step: "01",
    name: "The Vibe Audit",
    badge: "Diagnose",
    question: "What is happening now?",
    desc: "A strategic investigation into how an existing physical experience is currently being lived.",
  },
  {
    step: "02",
    name: "The Vibe Blueprint",
    badge: "Define",
    question: "How should your brand be felt?",
    desc: "Translates brand identity into an experiential direction: emotional territory, atmosphere, sensory language, customer journey, rituals and signature moments.",
  },
  {
    step: "03",
    name: "Experience Design",
    badge: "Design",
    question: "How do we make it happen?",
    desc: "Translates strategy into a lived physical experience through concepts, journeys, zones, sensory touchpoints, interactions, rituals and signature moments.",
  },
];

export const HowIWork = () => (
  <section
    id="how-i-work"
    data-testid="how-i-work-section"
    className="relative bg-creammute text-ink py-28 sm:py-40"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow dark>How I work</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-8 font-display uppercase text-4xl sm:text-6xl tracking-wide text-ink">
          Three ways in.
        </h2>
      </Reveal>
      <Reveal delay={0.18}>
        <p className="mt-8 max-w-xl font-sans font-light text-ink/65 text-lg leading-relaxed">
          A clear progression — diagnose, define, design. You don’t need all
          three. Each one stands alone: start where your brand is.
        </p>
      </Reveal>

      <div className="mt-20 space-y-0">
        {SERVICES.map((s, i) => (
          <Reveal key={s.step} delay={0.08 * i}>
            <div
              data-testid={`service-${s.badge.toLowerCase()}`}
              data-cursor
              className="group grid md:grid-cols-[120px_1fr_auto] gap-6 md:gap-12 items-start border-t border-ink/15 py-12 sm:py-16"
            >
              <span className="font-serif italic text-5xl sm:text-6xl text-ink/20 group-hover:text-wine/40 transition-colors duration-700">
                {s.step}
              </span>
              <div>
                <span className="inline-block rounded-full border border-wine/30 text-wine font-sans text-[10px] font-semibold uppercase tracking-[0.28em] px-4 py-1.5">
                  {s.badge}
                </span>
                <h3 className="mt-5 font-display uppercase text-2xl sm:text-4xl tracking-wide text-ink group-hover:text-wine transition-colors duration-700">
                  {s.name}
                </h3>
                <p className="mt-4 font-serif italic text-xl sm:text-2xl text-wine/80">
                  “{s.question}”
                </p>
                <p className="mt-5 max-w-2xl font-sans font-light text-ink/70 text-base sm:text-lg leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <span className="hidden md:block font-sans text-xs uppercase tracking-[0.25em] text-ink/30 group-hover:text-wine group-hover:translate-x-1 transition-all duration-700 pt-2">
                Explore →
              </span>
            </div>
          </Reveal>
        ))}
      </div>
      <GoldRule className="opacity-60" />
    </div>
  </section>
);
