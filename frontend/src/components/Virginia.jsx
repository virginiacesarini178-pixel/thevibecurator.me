import { Reveal, Eyebrow } from "./Reveal";
import { IMAGES } from "../data/images";

export const Virginia = () => (
  <section
    id="the-person"
    data-testid="the-person-section"
    className="relative bg-creammute text-ink py-28 sm:py-40"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
        <Reveal className="lg:sticky lg:top-32">
          <div
            data-cursor
            className="group relative rounded-[2rem] border border-ink/10 overflow-hidden shadow-[0_30px_70px_rgba(36,7,10,0.22)]"
          >
            <img
              data-testid="virginia-portrait"
              src={IMAGES.portrait}
              alt="Virginia Cesarini, founder of The Vibe Curator"
              className="w-full h-[420px] sm:h-[560px] object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/70 to-transparent p-8">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-goldlight">
                Founder
              </p>
              <p className="font-serif italic text-cream text-2xl mt-1">
                Virginia Cesarini
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow dark>The person behind the vibe</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 font-serif font-light text-2xl sm:text-3xl lg:text-[2.6rem] leading-[1.35] text-ink/90 space-y-8">
              <p>
                I’ve always been interested in the{" "}
                <em className="text-wine">feeling</em> of a place.
              </p>
              <p className="text-ink/70 text-xl sm:text-2xl lg:text-3xl">
                The moment you walk through a door. The music you didn’t
                consciously notice. The light that made you stay a little
                longer. The scent you remember weeks later.
              </p>
              <p>I notice these things.</p>
              <p className="text-ink/70 text-xl sm:text-2xl lg:text-3xl">
                And somewhere along the way, I realised they weren’t just
                details.
              </p>
              <p className="text-wine italic">They were the experience.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-14 font-sans text-sm uppercase tracking-[0.3em] text-ink/50">
              I’m the person behind The Vibe Curator.
            </p>
            <p className="mt-4 font-serif italic text-4xl sm:text-5xl text-ink">
              Virginia Cesarini
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
