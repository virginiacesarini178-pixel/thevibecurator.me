import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoMark } from "./LogoMark";
import { scrollToId, scrollToTop } from "../lib/scroll";

const LINKS = [
  { label: "The Question", href: "#the-question" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "Vibe Studies", href: "#vibe-studies" },
  { label: "Virginia", href: "#the-person" },
];

export const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const go = (hash) => {
    if (pathname === "/") {
      scrollToId(hash);
    } else {
      navigate(`/${hash}`);
    }
  };

  const goHome = () => {
    if (pathname === "/") {
      scrollToTop();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6">
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl"
        data-testid="navbar"
      >
        <div className="backdrop-blur-xl bg-ink/75 border border-goldlight/15 rounded-full pl-5 pr-2 py-2 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
          <button
            data-testid="nav-logo"
            onClick={goHome}
            className="flex items-center gap-3 group"
          >
            <LogoMark className="w-7 h-7 transition-transform duration-700 group-hover:rotate-180" />
            <span className="font-display text-[13px] sm:text-sm tracking-[0.18em] text-cream whitespace-nowrap">
              THE VIBE CURATOR
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <button
                key={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => go(l.href)}
                className="font-sans text-[11px] uppercase tracking-[0.2em] text-cream/60 hover:text-gold transition-colors duration-500"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            data-testid="nav-cta-button"
            onClick={() => go("#contact")}
            className="hidden sm:block ml-4 rounded-full bg-gold text-ink font-sans text-[11px] font-semibold uppercase tracking-[0.18em] px-5 py-2.5 hover:bg-goldlight transition-colors duration-500 whitespace-nowrap"
          >
            Start a conversation
          </button>
        </div>
      </motion.header>
    </div>
  );
};
