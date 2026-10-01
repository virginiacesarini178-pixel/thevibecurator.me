import { Reveal, Eyebrow } from "./Reveal";

const QUESTIONS = [
  "What do people notice?",
  "What do they feel?",
  "What do they do?",
  "What do they remember?",
  "What makes them stay?",
  "Why do they come back?",
];

export const TheQuestion = () => (
  <section
    id="the-question"
    data-testid="the-question-section"
    className="relative bg-cream text-ink py-28 sm:py-40"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow dark>The Question</Eyebrow>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-8 font-serif italic font-light text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl">
          What does your brand{" "}
          <span className="text-wine">feel</span> like?
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-10 max-w-2xl font-sans font-light text-ink/70 text-lg sm:text-xl leading-relaxed">
          Your brand already tells a story.
          <br />
          But what does it feel like to actually live it?
        </p>
      </Reveal>

      <div className="mt-20 grid sm:grid-cols-2 gap-x-16">
        {QUESTIONS.map((q, i) => (
          <Reveal key={q} delay={0.08 * i}>
            <div
              data-testid={`question-${i + 1}`}
              data-cursor
              className="group border-t border-ink/15 py-8 sm:py-10 flex items-baseline gap-6"
            >
              <span className="font-sans text-xs tracking-[0.25em] text-wine/50 group-hover:text-wine transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink/85 group-hover:text-wine group-hover:translate-x-2 transition-all duration-700">
                {q}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
