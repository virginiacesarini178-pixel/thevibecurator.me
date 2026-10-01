import { Reveal, Eyebrow } from "./Reveal";

const DIMENSIONS = [
  { name: "SPACE", desc: "Where people move, pause, discover and stay." },
  { name: "SENSES", desc: "What they see, hear, touch, smell and experience." },
  { name: "ATMOSPHERE", desc: "The emotional and sensory character of the space." },
  { name: "JOURNEY", desc: "What happens from arrival to departure." },
  { name: "INTERACTION", desc: "What people are invited to do." },
  { name: "MEMORY", desc: "What remains when they leave." },
];

export const WhatIDo = () => (
  <section
    id="what-i-do"
    data-testid="what-i-do-section"
    className="relative bg-burgundy py-28 sm:py-40 overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow>What I actually do</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-8 font-display uppercase text-cream text-3xl sm:text-5xl lg:text-6xl leading-tight tracking-wide max-w-5xl">
          I turn brand worlds into experiences people can{" "}
          <span className="text-gold">enter</span>.
        </h2>
      </Reveal>

      <div className="mt-24 relative">
        <div className="relative z-10">
          {DIMENSIONS.map((d, i) => (
            <Reveal key={d.name} delay={0.05 * i}>
              <div
                data-testid={`dimension-${d.name.toLowerCase()}`}
                data-cursor
                className="group border-t border-goldlight/15 py-8 sm:py-10"
              >
                <div className="flex items-baseline gap-5 sm:gap-8">
                  <span className="font-sans text-xs tracking-[0.25em] text-gold/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream group-hover:text-gold group-hover:translate-x-2 transition-all duration-700">
                    {d.name}
                  </h3>
                </div>
                <p className="mt-3 ml-10 sm:ml-16 max-w-lg font-sans font-light text-cream/55 group-hover:text-cream/85 transition-colors duration-700 text-base sm:text-lg">
                  {d.desc}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div
              data-testid="dimension-return"
              className="border-t border-goldlight/15 pt-12 mt-4"
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold/70">
                Return
              </p>
              <p className="mt-4 font-serif italic text-2xl sm:text-4xl text-goldlight max-w-2xl leading-snug">
                “The experience people want to come back to.”
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
