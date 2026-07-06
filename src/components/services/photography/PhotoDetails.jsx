"use client";

import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

export default function PhotoDetails() {
  const keyPoints = [
    "We use top-of-the-line cameras, lenses, and lighting to ensure every image meets professional standards.",
    "We don’t just take pictures; we craft visual stories that represent your brand, personality, or event theme.",
    "Expect quick turnaround times without compromising on quality. We value your time as much as your memories.",
    "From professional headshots and event coverage to product shoots and lifestyle portraits, we cover it all.",
  ];

  return (
    <section className="w-full bg-[#0A0A0A] py-[12vh] px-5 text-white font-['Segoe_UI',Arial,sans-serif]">
      <div className="max-w-[85vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[6vw] lg:gap-[8vw] items-center">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-[4vh]">
          
          <h2 className="text-white text-[7vw] md:text-[2.5vw] font-black uppercase leading-[1.2] tracking-wide border-l-4 border-red-600 pl-[2vw]">
            Capture Every Moment with Final Cut Multimedia Photography
          </h2>
          
          <p className="text-gray-400 text-[4vw] md:text-[1.1vw] leading-relaxed">
            At Final Cut Multimedia, we believe that every photograph tells a story worth remembering. Our professional photography services are designed to turn fleeting moments into timeless memories. Whether it’s a personal milestone, corporate event, or creative project, we bring your vision to life through artistic precision, lighting expertise, and an eye for authentic emotion.
          </p>

          <div className="mt-[2vh] space-y-[2.5vh]">
            <h3 className="text-white text-[5vw] md:text-[1.5vw] font-bold uppercase mb-[1vh]">Key Points:</h3>
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-[1.5vw] md:gap-[1vw]">
                <FiCheckCircle className="text-red-600 text-[5vw] md:text-[1.5vw] flex-shrink-0 mt-[0.5vh]" />
                <p className="text-gray-300 text-[3.8vw] md:text-[1.05vw] leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
          
        </div>

        {/* Right Side: Masonry Image Grid */}
        <div className="grid grid-cols-2 gap-[2vw] lg:gap-[1.5vw]">
          
          {/* Main Tall Image */}
          <div className="relative w-full aspect-[3/4] col-span-1 row-span-2 rounded-[4px] overflow-hidden group">
            <Image
              src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/167843eff548ede1860fbce34be2a0e3.jpg"
              alt="Professional Photography Session"
              fill
              className="object-cover transition-transform duration-[800ms] group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Top Square Image */}
          <div className="relative w-full aspect-square col-span-1 rounded-[4px] overflow-hidden group translate-y-[4vh]">
            <Image
              src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/i-2025-10-09T131430.855.webp"
              alt="Event Photography"
              fill
              className="object-cover transition-transform duration-[800ms] group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Bottom Square Image */}
          <div className="relative w-full aspect-square col-span-1 rounded-[4px] overflow-hidden group translate-y-[4vh]">
            <Image
              src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/Street-photographer-Street-Photography-Ausrustung.webp"
              alt="Street Photography Gear"
              fill
              className="object-cover transition-transform duration-[800ms] group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

        </div>

      </div>
    </section>
  );
}