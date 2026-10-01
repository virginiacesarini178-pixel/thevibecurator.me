import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Eyebrow, GoldRule, EASE } from "./Reveal";
import { scrollToId } from "../lib/scroll";

const SERVICES = [
  {
    id: "audit",
    step: "01",
    descriptor: "Understand",
    name: "The Vibe Audit",
    tagline: "See what your experience is actually saying.",
    desc: "A strategic investigation into how an existing physical experience is currently being lived. I look at how your brand is translated through space, senses, atmosphere and customer journey, and where the experience feels coherent, loses impact or leaves potential unexplored.",
    receive: [
      "Experience Diagnosis",
      "Brand Experience Analysis",
      "Customer Journey Review",
      "Sensory & Atmosphere Analysis",
      "Behaviour & Experience Observations",
      "Experience Gaps",
      "Priority Opportunities",
      "Vibe Direction",
    ],
    format: "Remote",
    timeline: "Remote · 2–3 weeks",
    bestFor:
      "Brands with an existing physical experience that want to understand what is happening before deciding what to change.",
  },
  {
    id: "blueprint",
    step: "02",
    descriptor: "Define",
    name: "The Vibe Blueprint",
    tagline: "Define how your brand should be felt.",
    desc: "A strategic foundation for creating a physical experience that feels unmistakably yours. The Vibe Blueprint translates brand identity into an experiential direction, defining the emotional territory, atmosphere, sensory language, customer journey, rituals and signature moments that should shape the experience.",
    receive: [
      "Experience Vision",
      "Emotional & Vibe Direction",
      "Sensory Strategy",
      "Customer Journey",
      "Experience Principles",
      "Ritual & Interaction Direction",
      "Signature Moments",
      "Spatial & Environmental Direction",
      "Experience North Star",
    ],
    format: "Remote",
    timeline: "Remote · 3–5 weeks",
    bestFor:
      "Brands creating something new, evolving their physical presence, or needing a clear experiential direction before design begins.",
  },
  {
    id: "design",
    step: "03",
    descriptor: "Design",
    name: "Experience Design",
    tagline: "Turn the strategy into something people can actually feel.",
    desc: "The strategy is defined. Now it becomes tangible. Experience Design translates the Vibe Blueprint into a lived physical experience, developing the concept, journey, zones, sensory touchpoints, rituals, interactions and signature moments that bring the brand world to life.",
    receive: [
      "Experience Concept",
      "Experience Journey & Zones",
      "Sensory Touchpoints",
      "Interaction & Ritual Concepts",
      "Spatial Experience Direction",
      "Sound, Scent & Lighting Direction",
      "Specialist Briefs",
      "Implementation Priorities",
    ],
    format: "Remote",
    timeline: "Remote · 6–10 weeks",
    bestFor:
      "Brands that already know the direction and are ready to translate it into a tangible experience.",
  },
];

const ServiceCard = ({ s, open, onToggle, index }) => (
  <Reveal delay={0.08 * index}>
    <div
      data-testid={`service-${s.id}`}
      className="group border-t border-ink/15 py-12 sm:py-16"
    >
      <div className="grid md:grid-cols-[110px_1fr] gap-6 md:gap-12">
        <div className="flex md:flex-col items-baseline md:items-start gap-4">
          <span className="font-serif italic text-5xl sm:text-6xl text-ink/20 group-hover:text-wine/40 transition-colors duration-700">
            {s.step}
          </span>
          <span className="rounded-full border border-wine/30 text-wine font-sans text-[10px] font-semibold uppercase tracking-[0.28em] px-4 py-1.5">
            {s.descriptor}
          </span>
        </div>

        <div>
          <h3 className="font-display uppercase text-2xl sm:text-4xl tracking-wide text-ink group-hover:text-wine transition-colors duration-700">
            {s.name}
          </h3>
          <p className="mt-3 font-serif italic text-xl sm:text-2xl text-wine/80">
            {s.tagline}
          </p>
          <p className="mt-5 max-w-2xl font-sans font-light text-ink/70 text-base sm:text-lg leading-relaxed">
            {s.desc}
          </p>

          <button
            data-testid={`explore-${s.id}`}
            onClick={onToggle}
            aria-expanded={open}
            className="mt-7 inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-wine hover:text-ink transition-colors duration-500"
          >
            <span>{open ? "Close" : "Explore"}</span>
            <motion.span
              animate={{ rotate: open ? -90 : 0, x: open ? 0 : [0, 4, 0] }}
              transition={
                open
                  ? { duration: 0.5, ease: EASE }
                  : { x: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 0.5 } }
              }
              className="text-base leading-none"
            >
              →
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="detail"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="overflow-hidden"
              >
                <div
                  data-testid={`service-detail-${s.id}`}
                  className="mt-10 rounded-[1.5rem] bg-ink text-cream p-8 sm:p-12 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(92,19,29,0.5),transparent_60%)]" />
                  <div className="relative z-10">
                    <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold/80">
                      You receive
                    </p>
                    <div className="mt-6 grid sm:grid-cols-2 gap-x-10">
                      {s.receive.map((r, i) => (
                        <motion.div
                          key={r}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: EASE }}
                          className="flex items-baseline gap-3 border-b border-goldlight/10 py-3.5"
                        >
                          <span className="text-gold text-[9px]">✦</span>
                          <span className="font-sans font-light text-cream/85 text-sm sm:text-base">
                            {r}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-10 grid sm:grid-cols-3 gap-8">
                      <div>
                        <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-gold/60">
                          Format
                        </p>
                        <p className="mt-2 font-serif italic text-xl text-cream">{s.format}</p>
                      </div>
                      <div>
                        <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-gold/60">
                          Timeline
                        </p>
                        <p className="mt-2 font-serif italic text-xl text-cream">{s.timeline}</p>
                      </div>
                      <div>
                        <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-gold/60">
                          Best for
                        </p>
                        <p className="mt-2 font-sans font-light text-sm text-cream/75 leading-relaxed">
                          {s.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  </Reveal>
);

export const HowIWork = () => {
  const [openId, setOpenId] = useState(null);

  return (
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
          <div data-testid="service-journey" className="mt-12">
            <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-ink">
              Audit <span className="text-wine mx-1">→</span> Blueprint{" "}
              <span className="text-wine mx-1">→</span> Design
            </p>
            <div className="mt-4 flex flex-col sm:flex-row sm:gap-10 gap-1 font-serif italic text-lg sm:text-xl text-wine/75">
              <span>“What is happening?”</span>
              <span>“What should happen?”</span>
              <span>“How do we make it happen?”</span>
            </div>
            <p className="mt-6 max-w-xl font-sans font-light text-ink/60 text-base leading-relaxed">
              A connected progression, not a package. Each service stands
              alone: start where your brand is.
            </p>
          </div>
        </Reveal>

        <div className="mt-16">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.id}
              s={s}
              index={i}
              open={openId === s.id}
              onToggle={() => setOpenId(openId === s.id ? null : s.id)}
            />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div data-testid="services-soft-cta" className="border-t border-ink/15 pt-16 mt-4 text-center">
            <p className="font-serif italic font-light text-2xl sm:text-4xl text-ink">
              Not sure where to start?
            </p>
            <p className="mt-5 font-sans font-light text-ink/65 text-base sm:text-lg leading-relaxed">
              Tell me what you’re building.
              <br />
              We’ll figure out what needs to happen next.
            </p>
            <button
              data-testid="services-cta-button"
              onClick={() => scrollToId("#contact")}
              className="mt-9 rounded-full bg-ink text-cream font-sans text-xs font-semibold uppercase tracking-[0.22em] px-10 py-5 hover:bg-wine transition-colors duration-500"
            >
              Start a conversation →
            </button>
          </div>
        </Reveal>

        <GoldRule className="mt-16 opacity-60" />
      </div>
    </section>
  );
};
