import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Eyebrow } from "./Reveal";
import { IMAGES } from "../data/images";

const DIMENSIONS = [
  { name: "SPACE", desc: "Where people move, pause, discover and stay.", img: IMAGES.lounge },
  { name: "SENSES", desc: "What they see, hear, touch, smell and experience.", img: IMAGES.fragrance },
  { name: "ATMOSPHERE", desc: "The emotional and sensory character of the space.", img: IMAGES.velvet },
  { name: "JOURNEY", desc: "What happens from arrival to departure.", img: IMAGES.bookshop },
  { name: "INTERACTION", desc: "What people are invited to do.", img: IMAGES.fragrance },
  { name: "MEMORY", desc: "What remains when they leave.", img: IMAGES.velvet },
];

export const WhatIDo = () => {
  const [active, setActive] = useState(null);

  return (
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
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:block pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-0 w-[300px]"
              >
                <div className="rounded-2xl border border-gold/25 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
                  <img
                    src={DIMENSIONS[active].img}
                    alt=""
                    className="w-full h-[380px] object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative z-10">
            {DIMENSIONS.map((d, i) => (
              <Reveal key={d.name} delay={0.05 * i}>
                <div
                  data-testid={`dimension-${d.name.toLowerCase()}`}
                  data-cursor
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className="group border-t border-goldlight/15 py-8 sm:py-10 lg:max-w-[70%]"
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
};
