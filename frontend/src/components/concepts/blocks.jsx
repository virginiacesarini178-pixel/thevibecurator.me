import { Link } from "react-router-dom";
import { Reveal, Eyebrow } from "../Reveal";

export const CaseHero = ({ concept }) => (
  <header className="relative bg-ink pt-36 pb-20 sm:pb-28 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(92,19,29,0.45),transparent_55%)]" />
    <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Link
          data-testid="back-to-concepts"
          to="/#vibe-studies"
          className="font-sans text-[11px] uppercase tracking-[0.25em] text-cream/45 hover:text-gold transition-colors duration-500"
        >
          ← All concepts
        </Link>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 flex items-center gap-4">
          <span className="font-serif italic text-4xl text-gold/50">{concept.number}</span>
          <span className="rounded-full border border-gold/40 text-gold font-sans text-[10px] font-semibold uppercase tracking-[0.25em] px-4 py-1.5">
            {concept.label}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.18}>
        <h1 className="mt-8 font-display uppercase text-cream text-4xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-wide">
          {concept.title}
        </h1>
      </Reveal>
      <Reveal delay={0.26}>
        <p className="mt-6 font-serif italic text-goldlight text-xl sm:text-3xl">
          {concept.subtitle}
        </p>
      </Reveal>
      <Reveal delay={0.34}>
        <p className="mt-10 max-w-2xl font-sans font-light text-cream/70 text-base sm:text-lg leading-relaxed">
          {concept.hero.intro}
        </p>
      </Reveal>
      <Reveal delay={0.15} className="mt-16">
        <div className="rounded-[2rem] border border-gold/20 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          <img
            src={concept.hero.image}
            alt={concept.hero.imageAlt}
            className="w-full h-[320px] sm:h-[540px] object-cover"
          />
        </div>
      </Reveal>
    </div>
  </header>
);

export const Statement = ({ eyebrow, text }) => (
  <section className="bg-burgundy py-28 sm:py-36">
    <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-8 font-serif italic font-light text-2xl sm:text-4xl lg:text-[2.75rem] text-cream leading-relaxed">
          {text}
        </p>
      </Reveal>
    </div>
  </section>
);

export const Principles = ({ items, closing }) => (
  <section className="bg-ink py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center">
      <Reveal>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {items.map((p) => (
            <span
              key={p}
              data-cursor
              className="rounded-full border border-goldlight/25 px-6 py-3 font-display uppercase text-sm sm:text-lg tracking-[0.15em] text-cream/85 hover:text-gold hover:border-gold/60 transition-colors duration-500"
            >
              {p}
            </span>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-14 max-w-2xl mx-auto font-sans font-light text-cream/65 text-lg leading-relaxed">
          {closing}
        </p>
      </Reveal>
    </div>
  </section>
);

export const ImageBreak = ({ src, alt, caption }) => (
  <section className="bg-burgundy py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-6 sm:px-10">
      <Reveal>
        <div
          data-cursor
          className="group rounded-[2rem] border border-gold/20 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-[300px] sm:h-[500px] object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
          />
        </div>
        {caption && (
          <p className="mt-5 text-center font-sans text-[11px] uppercase tracking-[0.3em] text-cream/40">
            {caption}
          </p>
        )}
      </Reveal>
    </div>
  </section>
);

export const Features = ({ eyebrow, heading, items }) => (
  <section className="bg-ink py-24 sm:py-36">
    <div className="max-w-6xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-serif font-light text-3xl sm:text-5xl text-cream">{heading}</h2>
      </Reveal>
      <div className="mt-16">
        {items.map((f, i) => (
          <Reveal key={f.title} delay={0.05 * i}>
            <div
              data-testid={`feature-${i + 1}`}
              data-cursor
              className="group grid md:grid-cols-[80px_1fr_auto] gap-5 md:gap-10 items-center border-t border-goldlight/15 py-10 sm:py-12"
            >
              <span className="font-sans text-xs tracking-[0.25em] text-gold/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="max-w-2xl">
                <h3 className="font-serif text-2xl sm:text-4xl text-cream group-hover:text-gold group-hover:translate-x-2 transition-all duration-700">
                  {f.title}
                </h3>
                <p className="mt-4 font-sans font-light text-cream/60 group-hover:text-cream/85 transition-colors duration-700 leading-relaxed">
                  {f.text}
                </p>
              </div>
              {f.image && (
                <div className="hidden md:block w-40 h-28 rounded-xl border border-gold/20 overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                  <img src={f.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const Senses = ({ eyebrow, heading, items }) => (
  <section className="bg-espresso py-24 sm:py-36">
    <div className="max-w-6xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-display uppercase text-3xl sm:text-5xl tracking-wide text-cream">
          {heading}
        </h2>
      </Reveal>
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/15 rounded-3xl overflow-hidden">
        {items.map((s, i) => (
          <Reveal key={s.name} delay={0.05 * i} className="h-full">
            <div
              data-testid={`sense-${s.name.toLowerCase()}`}
              data-cursor
              className="group relative h-full bg-espresso p-8 sm:p-10 overflow-hidden hover:bg-burgundy/70 transition-colors duration-700"
            >
              {s.image && (
                <img
                  src={s.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-15 transition-opacity duration-1000"
                />
              )}
              <div className="relative z-10">
                <h3 className="font-display uppercase text-xl sm:text-2xl tracking-wide text-cream group-hover:text-goldlight transition-colors duration-700">
                  {s.name}
                </h3>
                <p className="mt-3 font-serif italic text-lg text-gold/90">{s.tagline}</p>
                <p className="mt-5 font-sans font-light text-sm sm:text-base text-cream/60 group-hover:text-cream/85 transition-colors duration-700 leading-relaxed">
                  {s.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const Sequence = ({ eyebrow, heading, steps, closing }) => (
  <section className="bg-ink py-24 sm:py-36">
    <div className="max-w-4xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-serif font-light text-3xl sm:text-5xl text-cream">{heading}</h2>
      </Reveal>
      <div className="mt-16 relative">
        <div className="absolute left-[22px] sm:left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={0.07 * i}>
            <div data-testid={`sequence-step-${i + 1}`} className="relative flex gap-7 sm:gap-10 pb-16 sm:pb-20 last:pb-0">
              <span className="relative z-10 flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-gold/40 bg-ink flex items-center justify-center font-serif italic text-lg sm:text-xl text-gold">
                {i + 1}
              </span>
              <div className="pt-2">
                <h3 className="font-display uppercase text-xl sm:text-2xl tracking-wide text-cream">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xl font-sans font-light text-cream/65 leading-relaxed">
                  {s.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {closing && (
        <Reveal delay={0.2}>
          <p className="mt-16 font-serif italic text-xl sm:text-2xl text-goldlight leading-relaxed border-l-2 border-gold/50 pl-8">
            {closing}
          </p>
        </Reveal>
      )}
    </div>
  </section>
);

export const Editorial = ({ eyebrow, heading, paragraphs, image, imageAlt }) => (
  <section className="bg-ink py-24 sm:py-36">
    <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif italic font-light text-3xl sm:text-5xl text-cream leading-tight">
            {heading}
          </h2>
        </Reveal>
        {paragraphs.map((p, i) => (
          <Reveal key={i} delay={0.15 + 0.08 * i}>
            <p className="mt-7 font-sans font-light text-cream/70 text-base sm:text-lg leading-relaxed">
              {p}
            </p>
          </Reveal>
        ))}
      </div>
      {image && (
        <Reveal delay={0.15}>
          <div className="rounded-[2rem] border border-gold/20 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <img src={image} alt={imageAlt} className="w-full h-[320px] sm:h-[460px] object-cover" />
          </div>
        </Reveal>
      )}
    </div>
  </section>
);

export const Vision = ({ eyebrow, questions, closing }) => (
  <section className="bg-burgundy py-28 sm:py-40">
    <div className="max-w-5xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      {questions.map((q, i) => (
        <Reveal key={i} delay={0.1 + 0.12 * i}>
          <p className="mt-10 font-serif italic font-light text-3xl sm:text-5xl lg:text-6xl text-cream leading-tight">
            {q}
          </p>
        </Reveal>
      ))}
      <Reveal delay={0.3}>
        <p className="mt-14 font-sans text-sm sm:text-base uppercase tracking-[0.25em] text-gold/80">
          {closing}
        </p>
      </Reveal>
    </div>
  </section>
);

export const Flow = ({ eyebrow, heading, steps, note }) => (
  <section className="bg-ink py-24 sm:py-36">
    <div className="max-w-6xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-serif font-light text-3xl sm:text-5xl text-cream max-w-3xl">
          {heading}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <div
          data-testid="strategy-flow"
          className="mt-14 flex flex-wrap items-center gap-y-4"
        >
          {steps.map((s, i) => (
            <span key={s} className="flex items-center">
              <span
                data-cursor
                className="rounded-full border border-gold/35 bg-burgundy/50 px-5 py-3 font-sans text-xs sm:text-sm uppercase tracking-[0.18em] text-cream/85 hover:text-goldlight hover:border-gold transition-colors duration-500"
              >
                {s}
              </span>
              {i < steps.length - 1 && (
                <span className="mx-2 sm:mx-3 text-gold/50 font-light">↓</span>
              )}
            </span>
          ))}
        </div>
      </Reveal>
      {note && (
        <Reveal delay={0.25}>
          <p className="mt-12 max-w-2xl font-sans font-light text-cream/60 leading-relaxed">
            {note}
          </p>
        </Reveal>
      )}
    </div>
  </section>
);

export const Modules = ({ eyebrow, heading, items }) => (
  <section className="bg-espresso py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-serif font-light text-3xl sm:text-4xl text-cream">{heading}</h2>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {items.map((m, i) => (
          <Reveal key={m.title} delay={0.08 * i} className="h-full">
            <div
              data-testid={`module-${i + 1}`}
              data-cursor
              className="group h-full rounded-2xl border border-goldlight/15 bg-ink/40 p-8 hover:border-gold/45 transition-colors duration-700"
            >
              <span className="font-sans text-xs tracking-[0.25em] text-gold/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display uppercase text-lg sm:text-xl tracking-wide text-cream group-hover:text-goldlight transition-colors duration-700">
                {m.title}
              </h3>
              <p className="mt-4 font-sans font-light text-sm text-cream/60 leading-relaxed">
                {m.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const Impact = ({ eyebrow, heading, stats, summary, disclaimer }) => (
  <section className="bg-burgundy py-24 sm:py-36">
    <div className="max-w-6xl mx-auto px-6 sm:px-10">
      <Reveal>
        <div className="flex flex-wrap items-center gap-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <span className="rounded-full border border-gold/40 text-gold font-sans text-[10px] font-semibold uppercase tracking-[0.22em] px-4 py-1.5">
            Illustrative impact model
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-serif font-light text-3xl sm:text-5xl text-cream">{heading}</h2>
      </Reveal>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.07 * i} className="h-full">
            <div
              data-testid={`impact-stat-${i + 1}`}
              className="h-full rounded-2xl border border-goldlight/20 bg-ink/50 p-8"
            >
              <p className="font-display text-4xl sm:text-5xl text-gold">{s.value}</p>
              <p className="mt-3 font-sans text-xs uppercase tracking-[0.22em] text-cream/85">
                {s.label}
              </p>
              <p className="mt-4 font-sans font-light text-sm text-cream/60 leading-relaxed">
                {s.detail}
              </p>
              <p className="mt-4 font-sans text-[11px] text-gold/70 leading-relaxed">
                Key driver: {s.driver}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="mt-10 rounded-2xl border border-goldlight/15 bg-ink/40 p-8 grid sm:grid-cols-3 gap-8">
          {summary.map((s) => (
            <div key={s.label}>
              <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-cream/50">
                {s.label}
              </p>
              <p className="mt-2 font-serif italic text-xl text-goldlight">{s.value}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.25}>
        <p
          data-testid="impact-disclaimer"
          className="mt-10 text-center font-sans text-sm font-medium uppercase tracking-[0.2em] text-gold border border-gold/40 rounded-full px-6 py-4 max-w-2xl mx-auto"
        >
          {disclaimer}
        </p>
      </Reveal>
    </div>
  </section>
);

export const Opportunities = ({ eyebrow, heading, items, note }) => (
  <section className="bg-espresso py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-serif font-light text-3xl sm:text-5xl text-cream">{heading}</h2>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-12 flex flex-wrap gap-3">
          {items.map((o) => (
            <span
              key={o}
              data-cursor
              className="rounded-full border border-goldlight/20 px-6 py-3 font-sans text-sm font-light text-cream/75 hover:text-goldlight hover:border-gold/50 transition-colors duration-500"
            >
              {o}
            </span>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.25}>
        <p className="mt-12 max-w-2xl font-sans font-light text-cream/55 text-sm leading-relaxed border-l-2 border-gold/40 pl-6">
          {note}
        </p>
      </Reveal>
    </div>
  </section>
);

export const NextConcept = ({ next }) => (
  <section className="bg-ink py-24 sm:py-32 border-t border-gold/10">
    <div className="max-w-6xl mx-auto px-6 sm:px-10">
      <Reveal>
        <Link
          data-testid="next-concept-link"
          to={`/concepts/${next.slug}`}
          data-cursor
          className="group grid lg:grid-cols-[1fr_380px] gap-10 items-center"
        >
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold/70">
              Next concept
            </p>
            <h3 className="mt-6 font-display uppercase text-3xl sm:text-5xl tracking-wide text-cream group-hover:text-gold transition-colors duration-700">
              {next.title}
            </h3>
            <p className="mt-4 font-serif italic text-xl sm:text-2xl text-cream/60">
              {next.subtitle}
            </p>
            <p className="mt-8 font-sans text-xs uppercase tracking-[0.25em] text-gold group-hover:translate-x-2 transition-transform duration-700 inline-block">
              Explore concept →
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-gold/20 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            <img
              src={next.cardImage}
              alt={next.title}
              className="w-full h-56 lg:h-64 object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
          </div>
        </Link>
      </Reveal>
    </div>
  </section>
);

export const ConceptCTA = () => (
  <section className="bg-burgundy py-24 sm:py-32">
    <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
      <Reveal>
        <h2 className="font-display uppercase text-3xl sm:text-5xl tracking-wide text-cream leading-tight">
          Bring me something <span className="text-gold">you’re building</span>.
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-8 font-sans font-light text-cream/65 text-base sm:text-lg leading-relaxed">
          Have a space, concept, launch or experience you’re thinking about?
          Tell me a little about it. Let’s see what it could feel like.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <Link
          data-testid="concept-cta-button"
          to="/#contact"
          className="mt-10 inline-block rounded-full bg-gold text-ink font-sans text-xs font-semibold uppercase tracking-[0.22em] px-10 py-5 hover:bg-goldlight transition-colors duration-500"
        >
          Start a conversation →
        </Link>
      </Reveal>
    </div>
  </section>
);
