"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ClientAndVlogSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (!selectedVideo) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedVideo]);

  const clientLogos = [
    "https://i.ibb.co/rKm8pyR3/OFFSITEK-variation-logos-Photoroom.png",
    "https://i.ibb.co/Kj4CDyy9/nissan-logo-png-seeklogo-99770-Photoroom.png",
    "https://i.ibb.co/JRjqjw0q/nammba-logo-no-tag-2x-Photoroom.png",
    "https://i.ibb.co/k2Y6XZcB/logo-nike-jpg.png",
    "https://i.ibb.co/XfHT7h4W/KS-Logo-with-Tortoise-RGB-NO-BG-FULLY-TRANSPARENT-1-Photoroom.png",
    "https://i.ibb.co/Y4tYsQ67/IPC-Logo-Photoroom.png",
    "https://i.ibb.co/YBVBYd9q/IGM-Resins-Logo-PNG-Photoroom.png",
    "https://i.ibb.co/HkK0Bkm/200-2002024-sams-club-cyber-security-logo-vector-1-Photoroom.png",
    "https://i.ibb.co/Q79snZ8R/20200911061024-FP5bm-K-Photoroom.png",
    "https://i.ibb.co/WW8dtcgM/A-New-41-year-logo-1-Photoroom.png",
    "https://i.ibb.co/CKR1Y7mD/A0-Koi-Hw-W-400x400.png",
    "https://i.ibb.co/HLJckc0C/Atrium-logo-vertical-teal-RGB.png",
    "https://i.ibb.co/60k8mNZn/Carolina-Panthers-logo-svg.png",
    "https://i.ibb.co/KxmB5RXc/CMS-logo-blue.png",
    "https://i.ibb.co/tw5LGZnN/download.png",
    "https://i.ibb.co/mCMpjLFs/FLF-Logo-768x242.png",
    "https://i.ibb.co/MDK9N9h6/s-l500.png",
    "https://i.ibb.co/Mxpv1LG1/mountain-dew-logo.jpg",
    "https://i.ibb.co/7t514bm0/m-m-PNG4.png",
    "https://i.ibb.co/QFsrGGhX/goodyear-logo-01.jpg",
    "https://i.ibb.co/S46MqGm6/ecd72e6b5bb7d50bc7555184c4179e45.jpg",
    "https://i.ibb.co/gZpXSLc0/d2690240f160492e3d6f36eff5f44704.jpg",
    "https://i.ibb.co/hxhwZKht/RA-Black-Text-Logo.png",
    "https://i.ibb.co/gM9c4ssm/purepng-com-tyson-foods-logologobrand-logoiconslogos-251519939554n5c8x-Photoroom.png",
  ];

  const youtubeVideos = [
    {
      id: 1,
      title: "ENCINO LUXURY PROMO",
      embedId: "34jHRvrtEbE",
      thumbnail: "https://img.youtube.com/vi/34jHRvrtEbE/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "BRENTWOOD EXCLUSIVE TOUR",
      embedId: "TehKGf4gX94",
      thumbnail: "https://img.youtube.com/vi/TehKGf4gX94/hqdefault.jpg",
    },
    {
      id: 3,
      title: "PREMIUM CINEMATIC PRODUCTION",
      embedId: "dDv0YyVOpeI",
      thumbnail: "https://img.youtube.com/vi/dDv0YyVOpeI/hqdefault.jpg",
    },
    {
      id: 4,
      title: "BEHIND THE SCENES",
      embedId: "TehKGf4gX94",
      thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg",
    },
  ];

  return (
    <section className="relative w-full bg-white text-black flex flex-col overflow-hidden py-12 md:py-16">
      
      {/* Background logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
        <div className="relative w-[80vw] h-[80vh]">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
            alt="Final Cut Multimedia Background Watermark"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full flex flex-col">
        
        {/* YouTube channel promotion bar (client-logo marquee removed — media-logo strip now lives after the hero) */}
        <div className="w-full py-12 px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <span className="text-gray-400 text-xs sm:text-sm md:text-base tracking-[0.15em] uppercase font-bold block">
              WATCH THE LATEST
            </span>
            <div className="hidden md:block w-1 h-8 bg-red-600 rounded-full"></div>
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase">
              LATEST FROM OUR <span className="text-red-600">CHANNEL</span>
            </h2>
          </div>
          
          <a 
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white font-bold text-xs sm:text-sm md:text-base tracking-[0.1em] uppercase px-8 py-4 rounded-sm transition-all duration-300 hover:bg-black hover:shadow-lg"
          >
            SUBSCRIBE
          </a>
        </div>

        {/* YouTube Video Grid */}
        <div className="w-full p-6 sm:p-10 bg-gray-50 border-t border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {youtubeVideos.map((video) => (
              <button
                type="button"
                key={video.id}
                className="relative w-full aspect-video group cursor-pointer overflow-hidden rounded-sm bg-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                onClick={() => setSelectedVideo(video.embedId)}
                aria-label={`Play ${video.title}`}
              >
                <Image 
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                  <div className="relative w-14 h-10 sm:w-16 sm:h-12 transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 68 48" className="w-full h-full fill-red-600 group-hover:fill-red-700 transition-colors drop-shadow-md">
                      <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0,34,0,34,0S12.21,0,6.9,1.55 c-2.93,0.78-4.64,3.26-5.42,6.19C0,13.06,0,24,0,24s0,10.94,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,48,34,48,34,48s21.79,0,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C68,34.94,68,24,68,24S68,13.06,66.52,7.74z" />
                      <polygon points="27,33 45,24 27,15" className="fill-white" />
                    </svg>
                  </div>
                </div>

                {/* Video Title Overlay on hover */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 opacity-90 transition-opacity duration-300">
                  <p className="text-white text-xs sm:text-sm font-semibold tracking-wide truncate">{video.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* YouTube video player Modal */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300 p-4 sm:p-6 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors flex items-center gap-2 z-10"
            aria-label="Close Modal"
          >
            <span className="text-xs sm:text-sm uppercase tracking-widest font-bold">Close</span>
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-5xl aspect-video border-2 border-red-600 bg-black relative shadow-2xl rounded-sm overflow-hidden"
          >
            <iframe 
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube Video Player"
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Pure CSS Animation keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes clientLogoLoop {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 200ms ease-out;
        }

        .client-logo-marquee::before,
        .client-logo-marquee::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 20;
          width: clamp(2.5rem, 9vw, 9rem);
          pointer-events: none;
        }

        .client-logo-marquee::before {
          left: 0;
          background: linear-gradient(to right, #ffffff 5%, transparent);
        }

        .client-logo-marquee::after {
          right: 0;
          background: linear-gradient(to left, #ffffff 5%, transparent);
        }

        .client-logo-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: clientLogoLoop 32s linear infinite;
        }

        .client-logo-group {
          display: flex;
          flex: none;
          align-items: center;
          gap: clamp(1.5rem, 3vw, 3.5rem);
          padding-right: clamp(1.5rem, 3vw, 3.5rem);
        }

        .client-logo-card {
          width: clamp(9rem, 12vw, 13rem);
          height: clamp(5rem, 7vw, 7rem);
        }

        .client-logo-marquee:hover .client-logo-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .client-logo-track {
            animation-play-state: paused;
          }
        }
      `}} />

    </section>
  );
}
