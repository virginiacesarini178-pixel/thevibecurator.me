export const LogoMark = ({ className = "w-8 h-8", color = "text-gold" }) => (
  <svg
    viewBox="0 0 100 100"
    className={`${className} ${color} fill-none stroke-current`}
    strokeWidth="3"
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="42" strokeOpacity="0.35" />
    <circle cx="50" cy="50" r="27" strokeDasharray="5 4" />
    <circle cx="50" cy="50" r="7" className="fill-current" stroke="none" />
  </svg>
);
