// Media-outlet credibility strip shown right after the hero (matches live tyrellscott design).
// Self-hosted black wordmarks in /public/media-logos, shown on a white background so they stand out.

const MEDIA_LOGOS = [
  { src: "/media-logos/LAT_black-1.png", alt: "Los Angeles Times" },
  { src: "/media-logos/TMZ_black-1.png", alt: "TMZ" },
  { src: "/media-logos/WSJ_Black-1.png", alt: "The Wall Street Journal" },
  { src: "/media-logos/Variety_Black-1-1.png", alt: "Variety" },
  { src: "/media-logos/HR_Black-2.png", alt: "The Hollywood Reporter" },
  { src: "/media-logos/E-Online_Black-1.png", alt: "E! Online" },
  { src: "/media-logos/NBC_Black.png", alt: "NBC" },
  { src: "/media-logos/Today_Black.png", alt: "Today" },
  { src: "/media-logos/Business-Insider_Black.png", alt: "Business Insider" },
  { src: "/media-logos/The-Real-Deal_Black.png", alt: "The Real Deal" },
];

export default function MediaLogos() {
  // Duplicate the set so the marquee loops seamlessly (track animates 0 -> -50%).
  const track = [...MEDIA_LOGOS, ...MEDIA_LOGOS];

  return (
    <section className="w-full overflow-hidden border-y border-black/10 bg-white py-10 sm:py-12">
      <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-black/45 sm:text-xs">
        As Featured In
      </p>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#fff_8%,#fff_92%,transparent)]">
        <ul className="flex w-max shrink-0 animate-[fcm-logo-marquee_45s_linear_infinite] items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
          {track.map((logo, i) => (
            <li key={`${logo.alt}-${i}`} className="flex items-center">
              <img
                src={logo.src}
                alt={i < MEDIA_LOGOS.length ? logo.alt : ""}
                aria-hidden={i >= MEDIA_LOGOS.length}
                loading="lazy"
                className="h-12 w-auto max-w-[280px] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-16 lg:h-20"
              />
            </li>
          ))}
        </ul>
      </div>

      <style>{`@keyframes fcm-logo-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
