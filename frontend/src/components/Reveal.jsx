import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export const Reveal = ({ children, delay = 0, className = "", y = 40 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 1, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block"
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

export const Eyebrow = ({ children, dark = false, className = "" }) => (
  <p
    className={`font-sans text-[11px] sm:text-xs uppercase tracking-[0.3em] font-medium ${
      dark ? "text-wine/70" : "text-gold/70"
    } ${className}`}
  >
    {children}
  </p>
);

export const GoldRule = ({ className = "" }) => (
  <div
    className={`h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent ${className}`}
  />
);
