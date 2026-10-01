import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskedLine } from "./Reveal";
import { IMAGES } from "../data/images";
import { scrollToId } from "../lib/scroll";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen bg-ink overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(92,19,29,0.5),transparent_55%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-20 grid lg:grid-cols-[1.25fr_1fr] gap-16 items-center">
        <motion.div style={{ opacity: fade }}>
          <MaskedLine delay={0.2}>
            <p
              data-testid="hero-descriptor"
              className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.35em] text-gold/80 mb-8"
            >
              Sensory Experience Designer · Vibe Curator
            </p>
          </MaskedLine>

          <h1 className="font-display uppercase leading-[0.95] tracking-wide text-cream text-[clamp(2.6rem,8.5vw,7.5rem)]">
            <MaskedLine delay={0.35}>The Vibe</MaskedLine>
            <MaskedLine delay={0.5}>
              <span className="text-gold">Curator</span>
            </MaskedLine>
          </h1>

          <div className="mt-10 max-w-xl">
            <MaskedLine delay={0.7}>
              <p
                data-testid="hero-headline"
                className="font-serif italic font-light text-cream text-2xl sm:text-4xl leading-snug"
              >
                “I design experiences people come back for.”
              </p>
            </MaskedLine>
            <MaskedLine delay={0.85}>
              <p className="mt-6 font-sans font-light text-cream/70 text-base sm:text-lg leading-relaxed">
                You already have the story.{" "}
                <span className="text-cream">I help people feel it.</span>
              </p>
            </MaskedLine>
            <MaskedLine delay={1}>
              <p className="mt-8 font-serif text-goldlight/90 text-lg sm:text-xl italic">
                The world’s a stage, but does yours feel right?
              </p>
            </MaskedLine>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <button
              data-testid="hero-cta-button"
              onClick={() => scrollToId("#contact")}
              className="rounded-full border border-gold/50 text-gold font-sans text-xs uppercase tracking-[0.22em] px-8 py-4 hover:bg-gold hover:text-ink transition-colors duration-500"
            >
              Start a conversation →
            </button>
            <button
              data-testid="hero-explore-button"
              onClick={() => scrollToId("#the-question")}
              className="font-sans text-xs uppercase tracking-[0.22em] text-cream/50 hover:text-cream transition-colors duration-500"
            >
              Step inside ↓
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="rounded-[2rem] border border-gold/20 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <img
              src={IMAGES.velvet}
              alt="Deep burgundy velvet in warm theatrical light"
              className="w-full h-[560px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-burgundy/80 border border-goldlight/15 rounded-2xl px-6 py-4 shadow-2xl">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold/80">
              Act I
            </p>
            <p className="font-serif italic text-cream/90 text-lg mt-1">
              Atmosphere is everything.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-cream/40">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-10 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};
