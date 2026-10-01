const ITEMS = [
  "FASHION",
  "BEAUTY",
  "FRAGRANCE",
  "RETAIL",
  "BOOKS",
  "CULTURE",
  "THEATRE",
  "HOSPITALITY",
  "HOME",
  "LIFESTYLE",
];

export const Marquee = () => (
  <div
    data-testid="sector-marquee"
    className="relative bg-ink border-y border-gold/15 py-7 overflow-hidden"
  >
    <div className="marquee-track flex w-max items-center">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="font-serif italic text-2xl sm:text-3xl text-cream/35 px-8 whitespace-nowrap">
            {item}
          </span>
          <span className="text-gold/50 text-xs">✦</span>
        </span>
      ))}
    </div>
  </div>
);
