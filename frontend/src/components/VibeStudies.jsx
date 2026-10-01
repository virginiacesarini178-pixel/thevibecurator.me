import { Link } from "react-router-dom";
import { Reveal, Eyebrow } from "./Reveal";
import { CONCEPTS } from "../data/concepts";

export const VibeStudies = () => (
  <section
    id="vibe-studies"
    data-testid="vibe-studies-section"
    className="relative bg-cream text-ink py-28 sm:py-40"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow dark>Vibe Studies</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-8 font-display uppercase text-4xl sm:text-6xl tracking-wide">
          Vibe Studies
        </h2>
      </Reveal>
      <Reveal delay={0.18}>
        <p className="mt-8 max-w-2xl font-sans font-light text-ink/65 text-lg leading-relaxed">
          Independent concepts exploring how physical experiences can be
          designed. Speculative studies — not client work.
        </p>
      </Reveal>

      <div className="mt-20 grid lg:grid-cols-2 gap-10">
        {CONCEPTS.map((c, i) => (
          <Reveal key={c.slug} delay={0.1 * i} className="h-full">
            <Link
              data-testid={`concept-card-${c.slug}`}
              to={`/concepts/${c.slug}`}
              data-cursor
              className="group flex flex-col h-full rounded-[1.75rem] border border-ink/10 bg-creammute overflow-hidden shadow-[0_25px_60px_rgba(36,7,10,0.12)] hover:shadow-[0_35px_80px_rgba(36,7,10,0.22)] transition-shadow duration-700"
            >
              <div className="overflow-hidden">
                <img
                  src={c.cardImage}
                  alt={c.title}
                  className="w-full h-[280px] sm:h-[360px] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-8 sm:p-12 flex flex-col flex-1">
                <div className="flex items-center gap-4">
                  <span className="font-serif italic text-3xl text-wine/30">{c.number}</span>
                  <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-wine/70">
                    {c.label}
                  </p>
                </div>
                <h3 className="mt-6 font-display uppercase text-2xl sm:text-4xl tracking-wide text-ink group-hover:text-wine transition-colors duration-700">
                  {c.title}
                </h3>
                <p className="mt-3 font-serif italic text-lg sm:text-xl text-wine/80">
                  {c.subtitle}
                </p>
                <p className="mt-5 font-sans font-light text-ink/65 leading-relaxed flex-1">
                  {c.cardText}
                </p>
                <span className="mt-8 inline-block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-wine group-hover:translate-x-2 transition-transform duration-700">
                  Explore concept →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
