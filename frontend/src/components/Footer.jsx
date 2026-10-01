import { LogoMark } from "./LogoMark";

export const Footer = () => (
  <footer
    data-testid="footer"
    className="bg-espresso border-t border-gold/10 py-12"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <LogoMark className="w-6 h-6" />
        <span className="font-display text-xs tracking-[0.2em] text-cream/70">
          THE VIBE CURATOR
        </span>
      </div>
      <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-cream/35">
        Sensory Experience Design · London · UK &amp; International
      </p>
      <p className="font-sans text-[11px] text-cream/30">
        © {new Date().getFullYear()} Virginia Cesarini
      </p>
    </div>
  </footer>
);
