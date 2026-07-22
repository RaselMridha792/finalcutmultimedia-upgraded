// Client / partner brand logos shown in the strip right after the hero.
// Self-hosted in /public/media-logos, on a white background so they stand out.

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
  { src: "/media-logos/ipc.png", alt: "IPC" },
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
    <section className="w-full overflow-hidden border-y border-black/10 bg-white py-10 sm:py-12">
      <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-black/45 sm:text-xs">
        Trusted By
      </p>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#fff_8%,#fff_92%,transparent)]">
        <ul className="flex w-max shrink-0 animate-[fcm-logo-marquee_60s_linear_infinite] items-center gap-10 pr-10 sm:gap-16 sm:pr-16">
          {track.map((logo, i) => (
            <li key={`${logo.alt}-${i}`} className="flex shrink-0 items-center">
              <img
                src={logo.src}
                alt={i < CLIENT_LOGOS.length ? logo.alt : ""}
                aria-hidden={i >= CLIENT_LOGOS.length}
                loading="lazy"
                className="h-10 w-auto max-w-[170px] object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14 sm:max-w-[200px] lg:h-16"
              />
            </li>
          ))}
        </ul>
      </div>

      <style>{`@keyframes fcm-logo-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
