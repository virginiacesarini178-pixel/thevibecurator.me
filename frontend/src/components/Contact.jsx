import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { Reveal, Eyebrow, EASE } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const WORKING_ON = [
  "An existing space",
  "A new space or concept",
  "A retail experience",
  "An event or activation",
  "Something else",
];

const EXPLORE = [
  "I’d like to understand the experience better",
  "I’m developing a new concept",
  "I’m looking for experience strategy",
  "I’m not sure yet",
];

const Choice = ({ label, selected, onClick, testid }) => (
  <button
    type="button"
    data-testid={testid}
    onClick={onClick}
    className={`rounded-full border px-6 py-3.5 font-sans text-sm sm:text-base font-light text-left transition-colors duration-500 ${
      selected
        ? "border-gold bg-gold/15 text-goldlight"
        : "border-goldlight/20 text-cream/70 hover:border-gold/60 hover:text-cream"
    }`}
  >
    {label}
  </button>
);

const stepMotion = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -28 },
  transition: { duration: 0.6, ease: EASE },
};

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    working_on: "",
    about: "",
    explore: "",
    name: "",
    company: "",
    email: "",
  });

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const canContinue =
    step === 0
      ? !!form.working_on
      : step === 1
        ? form.about.trim().length > 1
        : step === 2
          ? !!form.explore
          : form.name.trim().length > 1 && /.+@.+\..+/.test(form.email);

  const submit = async () => {
    if (!canContinue || sending) return;
    setSending(true);
    setError("");
    try {
      await axios.post(`${API}/contact`, form);
      setDone(true);
    } catch (e) {
      setError("Something didn’t go through. You can also write to hello@thevibecurator.me");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-ink py-32 sm:py-44 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(92,19,29,0.55),transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">
        <Reveal>
          <p
            data-testid="final-statement"
            className="font-serif italic font-light text-3xl sm:text-5xl lg:text-6xl text-cream leading-tight text-center"
          >
            The world’s a stage.
            <br />
            <span className="text-goldlight">But does yours feel right?</span>
          </p>
        </Reveal>

        <div className="mt-24 sm:mt-32">
          <Reveal>
            <Eyebrow className="text-center">Bring me something you’re building</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display uppercase text-3xl sm:text-5xl lg:text-6xl tracking-wide text-cream text-center leading-tight">
              Bring me something <span className="text-gold">you’re building</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["An existing space", "A new concept", "A store", "A hotel", "A theatre", "A brand world you want people to actually feel"].map(
                (t) => (
                  <span
                    key={t}
                    className="font-serif italic text-lg sm:text-xl text-cream/60 border-b border-gold/25 pb-1"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-12 text-center max-w-xl mx-auto font-sans font-light text-cream/65 text-base sm:text-lg leading-relaxed">
              Have a space, concept, launch or experience you’re thinking
              about? Tell me a little about it. Let’s see what it could feel
              like.
            </p>
          </Reveal>

          <AnimatePresence mode="wait">
            {!open && (
              <motion.div key="cta" {...stepMotion} className="mt-14 text-center">
                <button
                  data-testid="contact-cta-button"
                  onClick={() => setOpen(true)}
                  className="rounded-full bg-gold text-ink font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] px-10 py-5 hover:bg-goldlight transition-colors duration-500 shadow-[0_15px_45px_rgba(197,160,89,0.25)]"
                >
                  Start a conversation →
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {open && !done && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: EASE }}
                data-testid="conversational-form"
                className="mt-14 max-w-2xl mx-auto backdrop-blur-xl bg-burgundy/60 border border-goldlight/15 rounded-[2rem] p-8 sm:p-14 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-12">
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold/70">
                    {String(step + 1).padStart(2, "0")} — 04
                  </span>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className={`h-1 rounded-full transition-all duration-700 ${
                          i <= step ? "w-8 bg-gold" : "w-4 bg-cream/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div key="s0" {...stepMotion}>
                      <h3 className="font-serif italic text-2xl sm:text-4xl text-cream">
                        What are you working on?
                      </h3>
                      <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                        {WORKING_ON.map((o) => (
                          <Choice
                            key={o}
                            label={o}
                            testid={`choice-working-${o.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                            selected={form.working_on === o}
                            onClick={() => set("working_on", o)}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div key="s1" {...stepMotion}>
                      <h3 className="font-serif italic text-2xl sm:text-4xl text-cream">
                        Tell me a little about it
                      </h3>
                      <textarea
                        data-testid="about-textarea"
                        value={form.about}
                        onChange={(e) => set("about", e.target.value)}
                        rows={6}
                        placeholder="The space, the idea, the feeling you’re after — in your own words."
                        className="mt-8 w-full bg-ink/50 border border-goldlight/20 rounded-2xl p-6 font-sans font-light text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/60 transition-colors duration-500 resize-none"
                      />
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="s2" {...stepMotion}>
                      <h3 className="font-serif italic text-2xl sm:text-4xl text-cream">
                        What would you like to explore?
                      </h3>
                      <div className="mt-8 flex flex-col gap-3">
                        {EXPLORE.map((o) => (
                          <Choice
                            key={o}
                            label={o}
                            testid={`choice-explore-${o.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                            selected={form.explore === o}
                            onClick={() => set("explore", o)}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="s3" {...stepMotion}>
                      <h3 className="font-serif italic text-2xl sm:text-4xl text-cream">
                        Your details
                      </h3>
                      <div className="mt-8 space-y-5">
                        <input
                          data-testid="name-input"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          placeholder="Name"
                          className="w-full bg-ink/50 border border-goldlight/20 rounded-full px-6 py-4 font-sans font-light text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/60 transition-colors duration-500"
                        />
                        <input
                          data-testid="company-input"
                          value={form.company}
                          onChange={(e) => set("company", e.target.value)}
                          placeholder="Company (optional)"
                          className="w-full bg-ink/50 border border-goldlight/20 rounded-full px-6 py-4 font-sans font-light text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/60 transition-colors duration-500"
                        />
                        <input
                          data-testid="email-input"
                          type="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="Email"
                          className="w-full bg-ink/50 border border-goldlight/20 rounded-full px-6 py-4 font-sans font-light text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/60 transition-colors duration-500"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {error && (
                  <p data-testid="form-error" className="mt-6 font-sans text-sm text-goldlight">
                    {error}
                  </p>
                )}

                <div className="mt-12 flex items-center justify-between">
                  {step > 0 ? (
                    <button
                      data-testid="form-back-button"
                      onClick={() => setStep((s) => s - 1)}
                      className="font-sans text-xs uppercase tracking-[0.22em] text-cream/45 hover:text-cream transition-colors duration-500"
                    >
                      ← Back
                    </button>
                  ) : (
                    <span />
                  )}
                  {step < 3 ? (
                    <button
                      data-testid="form-continue-button"
                      onClick={() => canContinue && setStep((s) => s + 1)}
                      disabled={!canContinue}
                      className={`rounded-full font-sans text-xs font-semibold uppercase tracking-[0.22em] px-8 py-4 transition-colors duration-500 ${
                        canContinue
                          ? "bg-gold text-ink hover:bg-goldlight"
                          : "bg-cream/10 text-cream/30 cursor-not-allowed"
                      }`}
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      data-testid="contact-submit-button"
                      onClick={submit}
                      disabled={!canContinue || sending}
                      className={`rounded-full font-sans text-xs font-semibold uppercase tracking-[0.22em] px-8 py-4 transition-colors duration-500 ${
                        canContinue && !sending
                          ? "bg-gold text-ink hover:bg-goldlight"
                          : "bg-cream/10 text-cream/30 cursor-not-allowed"
                      }`}
                    >
                      {sending ? "Sending…" : "Let’s talk →"}
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {open && done && (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE }}
                data-testid="form-confirmation"
                className="mt-14 max-w-2xl mx-auto text-center backdrop-blur-xl bg-burgundy/60 border border-gold/25 rounded-[2rem] p-14 sm:p-20 shadow-2xl"
              >
                <p className="font-serif italic font-light text-3xl sm:text-5xl text-cream leading-tight">
                  Something interesting starts here.
                </p>
                <p className="mt-6 font-sans font-light text-cream/75 text-lg">
                  I’ll be in touch soon.
                </p>
                <p className="mt-10 font-sans text-[11px] uppercase tracking-[0.3em] text-gold/60">
                  London · UK &amp; International
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <Reveal delay={0.1}>
            <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <a
                data-testid="contact-email-link"
                href="mailto:hello@thevibecurator.me"
                className="font-serif italic text-xl sm:text-2xl text-cream/80 hover:text-gold transition-colors duration-500"
              >
                hello@thevibecurator.me
              </a>
              <span className="hidden sm:block w-px h-6 bg-gold/25" />
              <a
                data-testid="contact-linkedin-link"
                href="https://www.linkedin.com/in/thevibecurator"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs uppercase tracking-[0.25em] text-cream/50 hover:text-gold transition-colors duration-500"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
