"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const usefulPages = [
    { name: "HOME", url: "/" },
    { name: "VIDEO PRODUCTION AGENCY", url: "/video-production-company-in-charlotte-nc" },
    { name: "PORTFOLIO", url: "/gallery" },
    { name: "BLOGS", url: "/blogs" },
    { name: "ABOUT US", url: "/about-us" },
    { name: "FAQ'S", url: "/faqs" },
  ];

  // মেনুতে না থাকা সার্ভিস পেজগুলো ক্যাটাগরি অনুযায়ী (৪ কলামে ভরে যায়)
  const serviceCategories = [
    {
      heading: "Video Production",
      items: [
        { name: "Video Production", url: "/video-production" },
        { name: "Video Production Company", url: "/video-production-company-in-charlotte-nc" },
        { name: "Corporate Video Production", url: "/corporate-video-production" },
        { name: "Video Agency in Charlotte", url: "/video-agency-in-charlotte-nc" },
      ],
    },
    {
      heading: "Editing & Content",
      items: [
        { name: "Video Editing", url: "/video-editing-in-charlotte-nc" },
        { name: "Documentary Video Production", url: "/documentary-video-production" },
        { name: "Content for Social Media", url: "/content-for-social-media" },
        { name: "Testimonial Videos", url: "/testimonial-videos" },
      ],
    },
    {
      heading: "Photography",
      items: [
        { name: "Photography", url: "/photography-services-charlotte-nc" },
        { name: "Event Photography & Video", url: "/event-photography-charlotte-nc" },
        { name: "Headshot Photography", url: "/headshot-photography" },
        { name: "High School Photography", url: "/high-school-photography" },
      ],
    },
    {
      heading: "Specialized Services",
      items: [
        { name: "Drone Video Production", url: "/drone-video-production-in-charlotte-nc" },
        { name: "Car Dealership Videos", url: "/car-dealership-videos" },
        { name: "Safety & Training Videos", url: "/safety-and-training-videos" },
        { name: "Live Stream Service", url: "/live-stream" },
        { name: "Additional Production Services", url: "/additional-production-services" },
      ],
    },
  ];

  // এলাকা পেজ (Areas We Serve) — ২ কলামে
  const areas = [
    { name: "CHARLOTTE, NC", url: "/video-production-charlotte" },
    { name: "GASTONIA, NC", url: "/video-production-gastonia" },
    { name: "CONCORD, NC", url: "/video-production-concord" },
    { name: "KANNAPOLIS, NC", url: "/video-production-kannapolis" },
    { name: "HUNTERSVILLE, NC", url: "/video-production-huntersville-nc" },
    { name: "MOORESVILLE, NC", url: "/video-production-mooresville-nc" },
    { name: "ROCK HILL, SC", url: "/video-production-rock-hill-nc" },
    { name: "MINT HILL, NC", url: "/video-production-mint-hill-nc" },
  ];

  return (
    <footer className="relative w-full bg-[#0A0A0A] px-5 pt-[10vh] pb-[4vh] border-t border-white/10 overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none z-0">
        <div className="relative w-[90vw] h-[90vw] md:w-[55vw] md:h-[55vw]">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
            alt="Final Cut Multimedia Background Watermark"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[85vw] mx-auto">
        
       

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[7vh] lg:gap-[4vw] mb-[8vh]">
          
          {/* About */}
          <div className="flex flex-col">
            <div className="relative w-[170px] h-[80px] mb-[3vh]">
              <Image
                src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
                alt="Final Cut Multimedia Logo"
                fill
                className="object-contain object-left"
                unoptimized
              />
            </div>

            <h3 className="text-white text-[4.5vw] md:text-[1.2vw] lg:text-[1vw] font-bold uppercase tracking-widest mb-[2vh]">
              About Company
            </h3>

            <p className="text-gray-400 text-[3.5vw] md:text-[1vw] lg:text-[0.9vw] leading-relaxed">
              Final Cut Multimedia is a creative production company specializing in video, photography, and digital content. We capture stories that inspire, events that matter, and visuals that connect. Our mission: transforming ideas into impactful content that lasts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white text-[4.5vw] md:text-[1.2vw] lg:text-[1vw] font-bold uppercase tracking-widest mb-[3vh]">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-[1.8vh]">
              {usefulPages.map((page, index) => (
                <li key={index}>
                  <Link
                    href={page.url}
                    className="inline-block text-gray-400 text-[3.5vw] md:text-[1vw] lg:text-[0.9vw] font-medium tracking-wider hover:text-red-600 hover:translate-x-1 transition-all duration-300 uppercase"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="text-white text-[4.5vw] md:text-[1.2vw] lg:text-[1vw] font-bold uppercase tracking-widest mb-[3vh]">
              Contact Us
            </h3>

            <div className="flex flex-col gap-[2vh] mb-[4vh]">
              <a
                href="mailto:info@finalcutmultimedia.com"
                className="flex items-center gap-3 text-gray-400 text-[3.5vw] md:text-[1vw] lg:text-[0.9vw] hover:text-red-600 transition-colors break-all"
              >
                <svg
                  className="w-5 h-5 shrink-0 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@finalcutmultimedia.com
              </a>

              <a
                href="tel:+17044911283"
                className="flex items-center gap-3 text-gray-400 text-[3.5vw] md:text-[1vw] lg:text-[0.9vw] hover:text-red-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 shrink-0 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +704 491 1283
              </a>
            </div>

            <Link
              href="/privacy-policy"
              className="inline-block text-white text-[3.8vw] md:text-[1vw] lg:text-[0.9vw] font-bold uppercase tracking-wider hover:text-red-600 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Our Services — ক্যাটাগরি অনুযায়ী ৪ কলাম */}
        <div className="w-full border-t border-white/10 pt-[5vh] mb-[6vh]">
          <h3 className="text-white text-[4.5vw] md:text-[1.2vw] lg:text-[1vw] font-bold uppercase tracking-widest mb-[4vh]">
            Our Services
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[4vw] gap-y-[5vh] lg:gap-x-[3vw]">
            {serviceCategories.map((cat, index) => (
              <div key={index} className="flex flex-col">
                <h4 className="text-red-600 text-[3.5vw] md:text-[1vw] lg:text-[0.85vw] font-bold uppercase tracking-[0.15em] mb-[2.5vh]">
                  {cat.heading}
                </h4>
                <ul className="flex flex-col gap-[1.6vh]">
                  {cat.items.map((service, i) => (
                    <li key={i}>
                      <Link
                        href={service.url}
                        className="inline-block text-gray-400 text-[3.3vw] md:text-[0.95vw] lg:text-[0.85vw] font-medium tracking-wider hover:text-red-600 hover:translate-x-1 transition-all duration-300 uppercase"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Areas We Serve — ২ রো (wrap) */}
        <div className="w-full border-t border-white/10 pt-[5vh] mb-[6vh]">
          <h3 className="text-white text-[4.5vw] md:text-[1.2vw] lg:text-[1vw] font-bold uppercase tracking-widest mb-[3vh]">
            Areas We Serve
          </h3>
          <div className="flex flex-wrap gap-x-[3vw] gap-y-[1.6vh] md:gap-x-[2vw]">
            {areas.map((area, index) => (
              <Link
                key={index}
                href={area.url}
                className="text-gray-400 text-[3.3vw] md:text-[0.95vw] lg:text-[0.85vw] font-medium tracking-wider hover:text-red-600 transition-colors uppercase whitespace-nowrap"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left pt-[4vh] border-t border-white/10">
          <p className="text-gray-500 text-[3vw] md:text-[0.85vw] tracking-wider uppercase">
            © 2025 All Rights Reserved.
          </p>

          <p className="text-gray-500 text-[3vw] md:text-[0.85vw] tracking-wider uppercase">
            Design &amp; Develop By{" "}
            <span className="text-white font-semibold">Final Cut Multimedia</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
