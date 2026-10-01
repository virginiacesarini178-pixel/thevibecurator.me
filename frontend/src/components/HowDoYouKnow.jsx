import { Reveal, Eyebrow } from "./Reveal";

const LAYERS = [
  {
    title: "What people do",
    desc: "Movement, dwell, interaction, participation and return behaviour.",
  },
  {
    title: "What people experience",
    desc: "Observation, feedback, interviews, reviews and staff insight.",
  },
  {
    title: "What the brand intends",
    desc: "Identity, positioning, desired feeling and business objectives.",
  },
  {
    title: "Where they meet",
    desc: "And where they don’t.",
  },
];

export const HowDoYouKnow = () => (
  <section
    id="how-do-you-know"
    data-testid="how-do-you-know-section"
    className="relative bg-espresso py-28 sm:py-40"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow>How do you know it works?</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-8 font-serif italic font-light text-4xl sm:text-6xl lg:text-7xl text-cream leading-tight">
          But how do you <span className="text-goldlight">know</span>?
        </h2>
      </Reveal>
      <Reveal delay={0.18}>
        <p className="mt-10 max-w-2xl font-sans font-light text-cream/65 text-lg sm:text-xl leading-relaxed">
          Not everything that matters can be reduced to a single metric. But an
          experience can be observed, investigated and evaluated.
        </p>
      </Reveal>

      <div className="mt-20 grid sm:grid-cols-2 gap-px bg-gold/15 border border-gold/15 rounded-3xl overflow-hidden">
        {LAYERS.map((l, i) => (
          <Reveal key={l.title} delay={0.08 * i} className="h-full">
            <div
              data-testid={`evidence-layer-${i + 1}`}
              data-cursor
              className="group h-full bg-espresso p-10 sm:p-14 hover:bg-burgundy/60 transition-colors duration-700"
            >
              <span className="font-sans text-xs tracking-[0.3em] text-gold/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display uppercase text-xl sm:text-2xl tracking-wide text-cream group-hover:text-goldlight transition-colors duration-700">
                {l.title}
              </h3>
              <p className="mt-5 font-sans font-light text-cream/60 group-hover:text-cream/85 transition-colors duration-700 leading-relaxed">
                {l.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <p
            data-testid="evidence-closing"
            className="font-serif italic font-light text-2xl sm:text-3xl lg:text-4xl text-cream/90 leading-relaxed"
          >
            “You don’t measure ‘vibe’. You define what the experience is
            supposed to do, identify the signals that matter, and look for
            evidence that it is doing it.”
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
