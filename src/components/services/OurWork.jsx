"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurWork() {
  const works = [
    {
      id: 1,
      title: "Nostalgic workspace captured beautifully",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/Untitled-3.jpg",
    },
    {
      id: 2,
      title: "Curiosity Unleashed: Capturing Adventures",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/openart-image_7HLeygA4_1757381102747_raw.jpg",
    },
    {
      id: 3,
      title: "Love's ascending embrace captured",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/FCM_1679.jpg",
    },
    {
      id: 4,
      title: "Events",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/FCM_1756-scaled.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#0A0A0A] py-[12vh] px-5 font-['Segoe_UI',Arial,sans-serif]">
      
      {/* Header Section */}
      <div className="text-center mb-[8vh] max-w-[80vw] md:max-w-[50vw] mx-auto">
        <h2 className="text-white text-[8vw] md:text-[3.5vw] font-black uppercase tracking-widest mb-[2vh]">
          My Works
        </h2>
        <p className="text-red-600 text-[4vw] md:text-[1.2vw] font-bold uppercase tracking-[0.2em]">
          Crafting moments, weaving memories <br className="hidden md:block" /> your story, our lens
        </p>
      </div>

      {/* Works Grid */}
      <div className="mx-auto grid w-full max-w-none grid-cols-1 gap-[4vw] md:grid-cols-2 md:gap-[2.5vw]">
        {works.map((work) => (
          <Link 
            href="/gallery"
            key={work.id} 
            className="relative w-full aspect-[4/3] md:aspect-video group overflow-hidden rounded-[8px] cursor-pointer shadow-lg block bg-[#111]"
          >
            {/* Background Image */}
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-105"
              unoptimized
            />

            {/* Dark Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            {/* Text Content with Glassmorphism Effect */}
            <div className="absolute bottom-[2vh] left-[2vw] right-[2vw] z-10 overflow-hidden rounded-[6px]">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-[4vw] md:p-[1.5vw]">
                {/* Fixed Red Line (No Hover Effect) */}
                <div className="w-[8vw] md:w-[3vw] h-[0.3vh] bg-red-600 mb-[2vh]"></div>
                <h3 className="text-white text-[4.5vw] md:text-[1.5vw] font-bold uppercase tracking-wide leading-snug drop-shadow-md">
                  {work.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View More Button Section */}
      <div className="text-center mt-[6vh] md:mt-[8vh]">
        <Link 
          href="/gallery"
          className="inline-block bg-transparent border-[2px] border-red-600 text-white py-3 px-10 text-[13px] font-bold tracking-widest uppercase rounded-[4px] transition-all duration-300 hover:bg-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]"
        >
          View More
        </Link>
      </div>

    </section>
  );
}
