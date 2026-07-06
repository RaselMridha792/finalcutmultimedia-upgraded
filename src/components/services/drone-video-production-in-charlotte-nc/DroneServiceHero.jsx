"use client";

import Image from "next/image";
import Link from "next/link";

export default function DroneServiceHero() {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://finalcutmultimedia.com/wp-content/uploads/2025/11/Drone-flying-over-Charlotte-skyline-offering-free-service.jpeg"
          alt="Drone flying over Charlotte skyline"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-none grid-cols-1 items-center gap-[5vw] py-[10vh] lg:grid-cols-2">
        
        {/* Left Side: Text */}
        <div className="text-white">
          <h1 className="text-[7vw] md:text-[3vw] font-black uppercase leading-tight mb-[2vh]">
            Drone Video Production in Charlotte, NC
          </h1>
          <h3 className="text-red-600 text-[4vw] md:text-[1.2vw] font-bold uppercase tracking-widest mb-[3vh]">
            Capturing Stories Beyond the Frame
          </h3>
          <p className="text-gray-300 text-[3.5vw] md:text-[1vw] leading-relaxed mb-[5vh] max-w-[600px]">
            Professional drone video production designed for marketing, documentation, and visual storytelling. We provide reliable, business-focused aerial content for companies across Charlotte NC.
          </p>
          <Link 
            href="#" 
            className="inline-block bg-red-600 text-white px-[6vw] py-[1.8vh] md:px-[2.5vw] md:py-[1.2vh] font-bold text-[3.5vw] md:text-[0.9vw] uppercase tracking-widest hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.4)] rounded-[4px]"
          >
            READ MORE
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="hidden lg:flex justify-end">
          <div className="relative w-[70%] aspect-square">
            <Image
              src="https://finalcutmultimedia.com/wp-content/uploads/2025/11/2bd1fc48b0c646bc91d7c1a0450f56ac60767345-2001x1577-1-1024x807.png"
              alt="Drone Production"
              fill
              className="object-contain drop-shadow-2xl"
              unoptimized
            />
          </div>
        </div>

      </div>
    </section>
  );
}
