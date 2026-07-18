"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative w-full grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] bg-[#0A0A0A] overflow-hidden lg:items-center py-12 lg:py-20">
      
      <div className="relative w-full flex flex-col justify-center px-5 py-8 z-10">
        
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 w-[120%] h-[120%] opacity-[0.03] pointer-events-none z-0">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
            alt="Final Cut Background Watermark"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        <div className="relative z-10 space-y-6">
          <div>
            <span className="text-gray-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold">
              About Us
            </span>
            
            <div className="flex items-stretch gap-4 mt-3">
              
              <div className="w-1 bg-red-600 my-1"></div>
              <h2 className="text-white text-3xl sm:text-4xl xl:text-5xl font-black tracking-wide uppercase leading-tight">
                Final Cut <br /> Multimedia
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed max-w-none">
            <p>
              Final Cut Multimedia is a Charlotte based video production agency helping businesses, brands, and organizations create professional video content that supports real business goals. We specialize in corporate videos, commercials, event coverage, customer testimonials, training videos, and brand storytelling that engage audiences and elevate brands.
            </p>
            <p>
              With more than 20 years of production experience, we combine cinematic visuals, strategic storytelling, and a seamless production process to deliver content that looks exceptional and drives results. From planning and filming to editing and final delivery, our focus is on creating videos that help businesses stand out and make a lasting impact.
            </p>
          </div>

          <div className="pt-4">
            <Link 
              href="/about-us" 
              className="inline-flex items-center justify-center px-8 py-3
                         border border-white/30 text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase 
                         transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-auto px-5 flex items-center justify-center">
        <div className="relative w-full aspect-[4/3] min-h-[360px] lg:min-h-[620px]">
          <Image
            src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781697016/Use_this_picture_k9euqa.jpg"
            alt="Final Cut Multimedia Team"
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </div>
      </div>

    </section>
  );
}
