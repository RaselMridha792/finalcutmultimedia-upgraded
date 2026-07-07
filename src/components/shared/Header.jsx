"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHeaderClasses = () => {
    if (scrollY <= 150) {
      return "absolute top-0 left-0 py-6 bg-transparent";
    } else if (scrollY > 150 && scrollY <= 400) {
      return "fixed top-0 left-0 py-4 bg-transparent -translate-y-full transition-none";
    } else {
      return "fixed top-0 left-0 py-4 bg-black/80 backdrop-blur-md translate-y-0 transition-transform duration-700 ease-in-out shadow-xl border-b border-white/10";
    }
  };

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "VIDEO PRODUCTION COMPANY IN CHARLOTTE NC", href: "/video-production-company-in-charlotte-nc" },
    {
      label: "OUR SERVICES",
      href: "/video-production-our-services",
      subMenuItems: [
        { label: "Drone Video Production in Charlotte, NC", href: "/drone-video-production-in-charlotte-nc" },
        { label: "Photography", href: "/photography-services-charlotte-nc" },
        { label: "Event Photography & Video", href: "/event-photography-charlotte-nc" },
        { label: "Headshot Photography", href: "/headshot-photography" },
        { label: "High School Photography", href: "/high-school-photography" },
        { label: "Video Production", href: "/video-production" },
        { label: "Video Editing in Charlotte NC", href: "/video-editing-in-charlotte-nc" },
        { label: "Corporate Video Production", href: "/corporate-video-production" },
        { label: "Car Dealership Videos", href: "/car-dealership-videos" },
        { label: "Content for Social Media", href: "/content-for-social-media" },
        { label: "Testimonial Videos", href: "/testimonial-videos" },
        { label: "Safety and Training Videos", href: "/safety-and-training-videos" },
        { label: "Live Stream Service in Charlotte NC", href: "/live-stream" },
        { label: "Documentary Video Production", href: "/documentary-video-production" },
        { label: "Video Agency in Charlotte, NC", href: "/video-agency-in-charlotte-nc" },
      ],
    },
    {
      label: "AREAS WE SERVE",
      href: "/video-production-charlotte",
      subMenuItems: [
        { label: "Charlotte Video Company", href: "/video-production-charlotte" },
        { label: "Gastonia Video Company", href: "/video-production-gastonia" },
        { label: "Kannapolis Video Company", href: "/video-production-kannapolis" },
        { label: "Concord Video Company", href: "/video-production-concord" },
        { label: "Huntersville Video Company", href: "/video-production-huntersville-nc" },
        { label: "Mooresville Video Company", href: "/video-production-mooresville-nc" },
        { label: "Rock Hill Video Company", href: "/video-production-rock-hill-nc" },
        { label: "Mint Hill Video Company", href: "/video-production-mint-hill-nc" },
      ],
    },
    { label: "BLOGS", href: "/blogs" },
    { label: "CONTACT US", href: "/contact-us-2" },
    {
      label: "ABOUT US",
      href: "/about-us",
      subMenuItems: [
        { label: "FAQs", href: "/faqs" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Gallery", href: "/gallery" },
      ],
    },
  ];

  return (
    <>
      <header className={`w-full z-50 ${getHeaderClasses()}`}>
        <div className="w-full max-w-none flex items-center justify-between px-5">

          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="https://i.ibb.co/wN4mFjvG/FINALCUT-LOGO-23582.png"
                alt="Final Cut Multimedia"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-white text-base md:text-lg font-bold leading-none tracking-wide whitespace-nowrap">
                FINAL CUT
              </span>
              <span className="text-white text-[9px] md:text-[10px] tracking-[0.2em] leading-none mt-1 whitespace-nowrap">
                MULTIMEDIA
              </span>
            </div>
          </Link>


          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group py-4">
                <Link
                  href={item.href}
                  className="text-white/90 text-[10px] 2xl:text-[11px] font-medium tracking-widest uppercase flex items-center gap-1 transition-colors duration-300 hover:text-red-600"
                >
                  {item.label}
                  {item.subMenuItems && (
                    <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>


                {item.subMenuItems && (
                  <div

                    className={`absolute top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${index === menuItems.length - 1 ? "right-0" : "left-0"
                      }`}
                  >
                    <div className="bg-[#0f0f0f] relative pl-6 pr-8 py-6 flex flex-col gap-5 min-w-[280px]">

                      <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-red-600"></div>

                      {item.subMenuItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="text-white/90 text-[11px] font-medium tracking-widest uppercase hover:text-red-600 pl-4 transition-colors duration-300"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="xl:hidden text-white flex items-center gap-2 hover:text-red-600 transition-colors"
          >
            <span className="text-xs font-semibold tracking-widest uppercase">Menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </header>

      <div
        className={`fixed inset-0 bg-[#0A0A0A] z-[60] overflow-y-auto px-5 py-10 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-8"
          }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white flex items-center gap-2 hover:text-red-600"
        >
          <span className="text-xs font-semibold tracking-widest uppercase">Close</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col gap-8 mt-12">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <Link
                href={item.href}
                onClick={() => !item.subMenuItems && setIsMobileMenuOpen(false)}
                className="text-white text-lg font-bold tracking-widest uppercase hover:text-red-600"
              >
                {item.label}
              </Link>

              {item.subMenuItems && (
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-red-600 mt-2">
                  {item.subMenuItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/70 text-xs tracking-wider uppercase hover:text-red-600"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
