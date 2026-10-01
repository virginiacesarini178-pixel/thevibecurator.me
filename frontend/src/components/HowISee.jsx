import { Reveal, Eyebrow } from "./Reveal";

const DETAILS = [
  "The moment someone enters a space",
  "Music",
  "Light",
  "Scent",
  "Materials",
  "Movement",
  "Pauses",
  "Rituals",
  "Moments of friction",
];

export const HowISee = () => (
  <section
    id="how-i-see"
    data-testid="how-i-see-section"
    className="relative bg-ink py-28 sm:py-40"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow>How I see</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-8 font-display uppercase text-4xl sm:text-6xl lg:text-7xl tracking-wide text-cream leading-tight max-w-5xl">
          I notice what others <span className="text-gold">miss</span>.
        </h2>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-16 flex flex-wrap gap-3 max-w-3xl">
          {DETAILS.map((d, i) => (
            <span
              key={d}
              data-testid={`detail-tag-${i + 1}`}
              data-cursor
              className="rounded-full border border-goldlight/20 px-5 py-2.5 font-sans text-sm font-light text-cream/65 hover:text-goldlight hover:border-gold/50 transition-colors duration-500"
            >
              {d}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <blockquote
          data-testid="how-i-see-quote"
          className="mt-24 max-w-3xl border-l-2 border-gold/50 pl-8 sm:pl-12"
        >
          <p className="font-serif italic font-light text-2xl sm:text-4xl text-cream/90 leading-relaxed">
            “I don’t believe every brand needs more ‘experience’. Sometimes it
            needs more intention. Sometimes less. Sometimes the most
            interesting experience is already hiding inside the brand.”
          </p>
        </blockquote>
      </Reveal>
    </div>
  </section>
);
