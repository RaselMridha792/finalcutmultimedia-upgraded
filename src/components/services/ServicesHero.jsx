"use client";

import Link from "next/link";
import { FiArrowDown } from "react-icons/fi";

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* ব্যাকগ্রাউন্ড ভিডিও */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source 
          src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/2512877-hd_1920_1080_30fps.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* ডার্ক ওভারলে (টেক্সট পরিষ্কার দেখার জন্য) */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50 z-0"></div>
      
      {/* নিচের সেকশনের সাথে স্মুথলি মিক্স হওয়ার জন্য বটম গ্রেডিয়েন্ট */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0"></div>

      {/* কন্টেন্ট */}
      <div className="relative z-10 mx-auto mt-[10vh] flex w-full max-w-none flex-col items-center px-5 text-center">
        
        <span className="text-red-600 text-[3.5vw] md:text-[1.2vw] font-bold tracking-[0.3em] uppercase mb-[2vh] animate-fade-in-up">
          Final Cut Multimedia
        </span>
        
        <h1 className="text-white text-[9vw] md:text-[5vw] font-black uppercase leading-tight tracking-wide mb-[3vh] drop-shadow-lg">
          OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">SERVICES</span>
        </h1>
        
        <p className="text-gray-300 text-[4vw] md:text-[1.2vw] max-w-[90vw] md:max-w-[50vw] leading-relaxed font-medium mb-[6vh] drop-shadow-md">
          From cinematic storytelling to high-flying drone footage, we offer a comprehensive suite of video production services tailored to bring your vision to life.
        </p>

        {/* স্ক্রল ডাউন বাটন */}
        <Link 
          href="#explore-services" 
          className="group inline-flex items-center justify-center gap-[1vw] px-[8vw] py-[2vh] md:px-[3vw] md:py-[1.5vh] bg-red-600 text-white text-[3.5vw] md:text-[1vw] font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-red-700 rounded-[4px] shadow-[0_0_15px_rgba(220,38,38,0.4)]"
        >
          EXPLORE SERVICES
          <FiArrowDown className="text-[4vw] md:text-[1.2vw] transition-transform duration-300 group-hover:translate-y-[0.5vw]" />
        </Link>
      </div>

    </section>
  );
}
