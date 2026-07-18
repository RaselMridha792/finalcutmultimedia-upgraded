// Media-outlet credibility strip shown right after the hero (matches live tyrellscott design).
// Logos are the client's "As Featured In" media outlets. Source images are the black wordmarks
// (hosted on tyrellscott.pronizam.com/wp-content) — inverted to white for the dark background.
// NOTE: swap these URLs for finalcutmultimedia.com-hosted copies when the client provides them.

const MEDIA_LOGOS = [
  { src: "https://tyrellscott.pronizam.com/wp-content/uploads/2026/06/LAT_black-1.png", alt: "Los Angeles Times" },
  { src: "https://tyrellscott.pronizam.com/wp-content/uploads/2026/06/TMZ_black-1.png", alt: "TMZ" },
  { src: "https://tyrellscott.pronizam.com/wp-content/uploads/2026/06/WSJ_Black-1.png", alt: "The Wall Street Journal" },
  { src: "https://tyrellscott.pronizam.com/wp-content/uploads/2026/06/Variety_Black-1-1.png", alt: "Variety" },
  { src: "https://tyrellscott.pronizam.com/wp-content/uploads/2026/06/HR_Black-2.png", alt: "The Hollywood Reporter" },
  { src: "https://tyrellscott.pronizam.com/wp-content/uploads/2026/06/E-Online_Black-1.png", alt: "E! Online" },
  { src: "https://tyrellscott.pronizam.com/wp-content/uploads/2026/06/NBC_Black.png", alt: "NBC" },
  { src: "https://tyrellscott.pronizam.com/wp-content/uploads/2026/06/Today_Black.png", alt: "Today" },
  { src: "https://tyrellscott.pronizam.com/wp-content/uploads/2026/06/Business-Insider_Black.png", alt: "Business Insider" },
  { src: "https://tyrellscott.pronizam.com/wp-content/uploads/2026/06/The-Real-Deal_Black.png", alt: "The Real Deal" },
];

export default function MediaLogos() {
  // Duplicate the set so the marquee loops seamlessly (track animates 0 -> -50%).
  const track = [...MEDIA_LOGOS, ...MEDIA_LOGOS];

  return (
    <section className="w-full overflow-hidden border-y border-white/10 bg-[#0A0A0A] py-10 sm:py-12">
      <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40 sm:text-xs">
        As Featured In
      </p>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="flex w-max shrink-0 animate-[fcm-logo-marquee_45s_linear_infinite] items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
          {track.map((logo, i) => (
            <li key={`${logo.alt}-${i}`} className="flex items-center">
              {/* plain img: these hosts aren't in next.config remotePatterns, and they're decorative */}
              <img
                src={logo.src}
                alt={i < MEDIA_LOGOS.length ? logo.alt : ""}
                aria-hidden={i >= MEDIA_LOGOS.length}
                loading="lazy"
                className="h-9 w-auto max-w-[200px] object-contain opacity-90 brightness-0 invert transition-opacity duration-300 hover:opacity-100 sm:h-12 lg:h-14"
              />
            </li>
          ))}
        </ul>
      </div>

      <style>{`@keyframes fcm-logo-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
