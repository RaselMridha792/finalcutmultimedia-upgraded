// Client / partner brand logos shown in the strip right after the hero.
// Each logo sits in a uniform (same-size) white card so different logo
// dimensions read consistently. Self-hosted in /public/media-logos.

const CLIENT_LOGOS = [
  { src: "/media-logos/nissan.png", alt: "Nissan" },
  { src: "/media-logos/nike.png", alt: "Nike" },
  { src: "/media-logos/carolina-panthers.png", alt: "Carolina Panthers" },
  { src: "/media-logos/sams-club.png", alt: "Sam's Club" },
  { src: "/media-logos/tyson-foods.png", alt: "Tyson Foods" },
  { src: "/media-logos/goodyear.jpg", alt: "Goodyear" },
  { src: "/media-logos/mountain-dew.jpg", alt: "Mountain Dew" },
  { src: "/media-logos/mms.png", alt: "M&M's" },
  { src: "/media-logos/atrium.png", alt: "Atrium" },
  { src: "/media-logos/cms.png", alt: "CMS" },
  { src: "/media-logos/restaurant-association.png", alt: "Restaurant Association" },
  { src: "/media-logos/nammba.png", alt: "NAMMBA" },
  { src: "/media-logos/igm-resins.png", alt: "IGM Resins" },
  { src: "/media-logos/ipc.png", alt: "Independent Pharmacy Cooperative" },
  { src: "/media-logos/keystone.png", alt: "Keystone" },
  { src: "/media-logos/offsitek.png", alt: "OffSiteK" },
  { src: "/media-logos/flf.png", alt: "FLF" },
  { src: "/media-logos/brand-01.png", alt: "Client brand" },
  { src: "/media-logos/brand-02.png", alt: "Client brand" },
  { src: "/media-logos/brand-03.png", alt: "Client brand" },
  { src: "/media-logos/brand-04.jpeg", alt: "Client brand" },
  { src: "/media-logos/brand-05.png", alt: "Client brand" },
  { src: "/media-logos/brand-06.jpg", alt: "Client brand" },
  { src: "/media-logos/brand-07.png", alt: "Client brand" },
];

export default function MediaLogos() {
  // Duplicate the set so the marquee loops seamlessly (track animates 0 -> -50%).
  const track = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-14">
      <div className="mb-10 flex items-center justify-center gap-4">
        <span className="h-[3px] w-8 rounded-full bg-red-600" />
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-black/80 sm:text-base">
          Trusted By Industry Leaders
        </p>
        <span className="h-[3px] w-8 rounded-full bg-red-600" />
      </div>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#fff_5%,#fff_95%,transparent)]">
        <ul className="flex w-max shrink-0 animate-[fcm-logo-marquee_60s_linear_infinite] items-center gap-5 pr-5 sm:gap-6 sm:pr-6">
          {track.map((logo, i) => (
            <li key={`${logo.alt}-${i}`} className="shrink-0">
              <div className="flex h-24 w-40 items-center justify-center rounded-lg border border-black/[0.06] bg-white p-5 shadow-[0_6px_22px_rgba(0,0,0,0.07)] sm:h-28 sm:w-48">
                <img
                  src={logo.src}
                  alt={i < CLIENT_LOGOS.length ? logo.alt : ""}
                  aria-hidden={i >= CLIENT_LOGOS.length}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`@keyframes fcm-logo-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
