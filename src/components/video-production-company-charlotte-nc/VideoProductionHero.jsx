"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function VideoProductionHero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] px-5">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://finalcutmultimedia.com/wp-content/uploads/2025/12/corporate-videography-in-gastonia-nc.jpeg"
          alt="Corporate Videography in Charlotte, NC"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />

        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-0"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[85vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-[8vw] md:gap-[4vw] pt-[15vh]">
        
        {/* Left Content */}
        <div className="w-full md:w-[55%] flex flex-col mt-[5vh] md:mt-0">
          
          <span className="text-red-600 text-[3.5vw] md:text-[1vw] font-bold tracking-[0.3em] uppercase mb-[2vh]">
            Final Cut Multimedia
          </span>
          
          <h1 className="text-white text-[9vw] md:text-[4.5vw] font-black uppercase leading-[1.1] tracking-tight mb-[4vh]">
            Video Production <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Agency in Charlotte, NC
            </span>
          </h1>
          
          <div className="relative pl-[4vw] md:pl-[1.5vw] border-l-[0.3vw] md:border-l-[0.2vw] border-red-600 mb-[6vh]">
            <p className="text-gray-300 text-[4vw] md:text-[1.2vw] leading-relaxed font-medium">
              Free drone service from one of our certified licensed pilots when you book with us. Because every project deserves a cinematic view from above.
            </p>
          </div>

          <Link 
            href="/about-us" 
            className="group inline-flex items-center justify-center gap-[1vw] w-fit px-[8vw] py-[2vh] md:px-[3vw] md:py-[1.5vh] bg-red-600 border-[0.2vw] md:border-[0.1vw] border-red-600 text-white text-[3.5vw] md:text-[1vw] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-transparent hover:text-red-500"
          >
            READ MORE
            <FiArrowRight className="text-[4vw] md:text-[1.2vw] transition-transform duration-300 group-hover:translate-x-[0.5vw]" />
          </Link>
        </div>

        {/* Right Drone Image */}
        <div className="w-full md:w-[45%] relative flex justify-center items-center mt-[8vh] md:mt-0 mb-[5vh] md:mb-0">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[30vw] h-[60vw] md:h-[30vw] bg-red-600/20 blur-[8vw] rounded-full z-0"></div>
          
          <div className="relative w-[80vw] h-[60vw] md:w-[40vw] md:h-[30vw] z-10 animate-floating drop-shadow-[0_2vw_2vw_rgba(0,0,0,0.8)]">
            <Image
              src="https://finalcutmultimedia.com/wp-content/uploads/2025/11/2bd1fc48b0c646bc91d7c1a0450f56ac60767345-2001x1577-1-1024x807.png"
              alt="Cinematic Drone Service"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floating {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-2vh) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .animate-floating {
          animation: floating 6s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
