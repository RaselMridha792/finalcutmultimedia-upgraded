

"use client";

import Link from "next/link";

export default function PhotoHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://finalcutmultimedia.com/wp-content/uploads/2025/10/photographer-pictures-a29ufnfq2cr48cu0.jpg')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[85vw] mx-auto text-center md:text-left flex flex-col items-center md:items-start">
        
        <h1 className="text-[7vw] md:text-[2.5vw] font-black uppercase text-white leading-tight mb-[2vh] max-w-[900px]">
          Professional Photography Services in Charlotte, NC
        </h1>
        
        <h3 className="text-red-600 text-[5vw] md:text-[1.5vw] font-bold uppercase tracking-widest mb-[3vh]">
          Capturing Perfection, One Frame at a Time
        </h3>
        
        <p className="text-gray-300 text-[4vw] md:text-[1.1vw] leading-relaxed mb-[6vh] max-w-[600px]">
          Expert photography solutions for corporate, real estate, events, and branding. We transform your vision into timeless visual assets that leave a lasting impact.
        </p>

        <div className="flex gap-[2vw]">
          <Link 
            href="#contact" 
            className="bg-red-600 text-white px-[8vw] py-[2vh] md:px-[3vw] md:py-[1.5vh] font-bold text-[3.5vw] md:text-[1vw] uppercase tracking-widest hover:bg-red-700 transition-colors rounded-[4px]"
          >
            Request a Session
          </Link>
          <Link 
            href="/gallery" 
            className="border border-white text-white px-[8vw] py-[2vh] md:px-[3vw] md:py-[1.5vh] font-bold text-[3.5vw] md:text-[1vw] uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-[4px]"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}