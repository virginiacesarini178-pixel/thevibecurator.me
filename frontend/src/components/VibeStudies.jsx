import { Reveal, Eyebrow } from "./Reveal";
import { IMAGES } from "../data/images";

const STUDIES = [
  {
    title: "The Perfumer’s Sanctuary",
    sector: "Fragrance & Beauty",
    concept:
      "A darkened, sound-dampened velvet chamber where scents are experienced through warm vapour columns, in sync with slowly shifting atmospheric light.",
    img: IMAGES.fragrance,
  },
  {
    title: "Late Night at the Dramatist",
    sector: "Theatre & Hospitality",
    concept:
      "A hidden lounge behind stage curtains — ambient warmth, brass detailing, low light and the feeling of arriving after the show has ended.",
    img: IMAGES.lounge,
  },
  {
    title: "The Archive Bookshop",
    sector: "Books & Culture",
    concept:
      "A high-ceilinged literary haven with dark shelving, warm reading alcoves and a quiet ritual of tea — designed for losing track of time.",
    img: IMAGES.bookshop,
  },
];

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

      <div className="mt-24 space-y-28">
        {STUDIES.map((s, i) => (
          <Reveal key={s.title} delay={0.05}>
            <article
              data-testid={`vibe-study-${i + 1}`}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                data-cursor
                className="group rounded-[1.75rem] border border-ink/10 overflow-hidden shadow-[0_25px_60px_rgba(36,7,10,0.18)]"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-[320px] sm:h-[440px] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-serif italic text-5xl text-wine/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-wine/70">
                      {s.sector}
                    </p>
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink/40 mt-1">
                      Speculative study
                    </p>
                  </div>
                </div>
                <h3 className="mt-8 font-serif text-3xl sm:text-5xl leading-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-6 max-w-lg font-sans font-light text-ink/70 text-base sm:text-lg leading-relaxed">
                  {s.concept}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
