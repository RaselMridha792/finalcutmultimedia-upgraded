"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      subtitle: "PROFESSIONAL",
      title: "VIDEO PRODUCTION",
      desc: "Commercials, interviews, brand stories, promotional videos.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/11/pbokepuiqgmlaczczfmx1.jpg",
      link: "/video-production-company-in-charlotte-nc",
    },
    {
      id: 2,
      subtitle: "CREATIVE",
      title: "PHOTOGRAPHY",
      desc: "Corporate headshots, event coverage, product photography, lifestyle.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/ebe708e3-7864-45f8-b7c6-4efaec1b19371.jpg",
      link: "/photography-services-charlotte-nc",
    },
    {
      id: 3,
      subtitle: "CINEMATIC",
      title: "VIDEO EDITING",
      desc: "Post-production, color grading, sound design, visual effects.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/Mac-Two-Computers-Display.jpg",
      link: "/video-editing-in-charlotte-nc",
    },
    {
      id: 4,
      subtitle: "DYNAMIC",
      title: "CONTENT FOR SOCIAL MEDIA",
      desc: "A consistent library of professional content for web, social, and campaigns.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/1000_F_85861337_0ZeiHG0IC2vPZrQd26KT9SDj4LU9O4fF-1.webp",
      link: "/content-for-social-media",
    },
    {
      id: 5,
      subtitle: "MEMORABLE",
      title: "EVENT COVERAGE",
      desc: "High-quality video and photo coverage for corporate events, conferences, and live shows.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg",
      link: "/event-photography-charlotte-nc",
    },
  ];

  const industries = [
    "Corporate", "Construction", "Healthcare", "Manufacturing", "Automotive",
    "Education", "Nonprofits", "Financial Services", "Professional Services", "Technology",
    "Hospitality", "Legal", "Real Estate", "Government", "Retail"
  ];

  const areas = [
    { name: "Charlotte, NC", url: "/video-production-charlotte" },
    { name: "Gastonia, NC", url: "/video-production-gastonia" },
    { name: "Kannapolis, NC", url: "/video-production-kannapolis" },
    { name: "Concord, NC", url: "/video-production-concord" },
    { name: "Huntersville, NC", url: "/video-production-huntersville-nc" },
    { name: "Mooresville, NC", url: "/video-production-mooresville-nc" },
    { name: "Rock Hill, SC", url: "/video-production-rock-hill-nc" },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] py-[10vh] px-5">
      
      {/* সেকশন হেডার */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-[4vh] mb-[8vh]">
        <div className="w-full md:w-1/2">
          <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium block mb-[2vh]">
            Our Creative Services
          </span>
          <h2 className="text-white text-[7vw] md:text-[3vw] font-bold uppercase leading-tight">
            Tailored Multimedia Solutions To Bring Your Vision To Life
          </h2>
        </div>
        
        <div className="w-full md:w-1/2 flex md:justify-end">
          <Link 
            href="/video-production-our-services"
            className="flex items-center gap-[1vw] text-white text-[3.5vw] md:text-[1vw] font-bold tracking-[0.2em] uppercase hover:text-red-600 transition-colors"
          >
            MORE SERVICES 
            <svg className="w-[4vw] h-[4vw] md:w-[1.2vw] md:h-[1.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Responsive two-column service grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vh] md:gap-[1.5vw]">
        {services.map((item, index) => (
          <Link
            href={item.link}
            key={item.id}
            className={`relative block h-[40vh] w-full overflow-hidden bg-black group md:h-[50vh] ${
              services.length % 2 === 1 && index === services.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            {/* ব্যাকগ্রাউন্ড ইমেজ */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[800ms] ease-in-out group-hover:scale-[1.02]"
              unoptimized
            />

            {/* ডিফল্ট ডার্ক ওভারলে */}
            <div className="absolute inset-0 bg-black/60 group-hover:opacity-0 transition-opacity duration-500 z-0"></div>

            {/* ৪. রেড থিম - হোভার ওভারলে (গোল্ডের বদলে লাল) */}
            <div className="absolute inset-0 bg-red-700/85 opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] ease-in-out z-0"></div>

            {/* অ্যানিমেটেড ফ্রেম এবং টেক্সট কনটেইনার */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              
              <div className="relative flex flex-col items-center justify-center w-[85%] h-[55%] md:h-[50%]">
                
                {/* অ্যানিমেটেড বর্ডার লাইনগুলো (গোল্ডের বদলে লাল থেকে সাদা হবে) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[0.4vh] md:h-[0.2vh] w-[40%] bg-red-600 group-hover:bg-white/90 group-hover:w-full transition-all duration-[400ms] ease-in-out"></div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.4vh] md:h-[0.2vh] w-[40%] bg-red-600 group-hover:bg-white/90 group-hover:w-full transition-all duration-[400ms] ease-in-out"></div>

                <div className="absolute top-0 left-0 w-[0.4vw] md:w-[0.15vw] h-0 bg-white/90 group-hover:h-full transition-all duration-[400ms] ease-in-out delay-[300ms]"></div>

                <div className="absolute top-0 right-0 w-[0.4vw] md:w-[0.15vw] h-0 bg-white/90 group-hover:h-full transition-all duration-[400ms] ease-in-out delay-[300ms]"></div>

                {/* ভেতরের টেক্সট */}
                <span className="text-white text-[3vw] md:text-[1vw] font-medium tracking-[0.3em] uppercase mb-[1.5vh] drop-shadow-md z-10 transition-transform duration-[400ms] group-hover:-translate-y-[2vh]">
                  {item.subtitle}
                </span>
                <h3 className="text-white text-[6vw] md:text-[2.2vw] font-bold tracking-wider uppercase text-center px-[2vw] drop-shadow-lg leading-tight z-10 transition-transform duration-[400ms] group-hover:-translate-y-[2vh]">
                  {item.title}
                </h3>

                {/* ২. হোভার ডেসক্রিপশন (Hover Reveal) */}
                <p className="absolute top-[65%] w-full text-white/90 text-center text-[3.5vw] md:text-[0.9vw] font-medium px-[4vw] md:px-[6vw] opacity-0 group-hover:opacity-100 transition-all duration-[500ms] delay-[200ms] translate-y-[2vh] group-hover:translate-y-0">
                  {item.desc}
                </p>

              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ৩. নতুন "Industries We Serve" সেকশন */}
      <div className="mt-[12vh] flex flex-col items-center">
        <div className="flex items-center gap-[1vw] mb-[4vh]">
          <div className="w-[1.5vw] h-[0.2vw] bg-red-600 hidden md:block"></div>
          <h3 className="text-white text-[4vw] md:text-[1.2vw] tracking-[0.2em] uppercase font-bold text-center">
            Industries We Serve
          </h3>
          <div className="w-[1.5vw] h-[0.2vw] bg-red-600 hidden md:block"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-[3vw] md:gap-[1.5vw] w-full max-w-none">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="border border-white/20 px-[5vw] py-[1.5vh] md:px-[2.5vw] md:py-[1vh] rounded-full text-gray-300 text-[3vw] md:text-[0.85vw] uppercase tracking-wider hover:border-red-600 hover:text-white hover:bg-red-600/10 transition-colors cursor-default"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[8vh] flex flex-col items-center">
        <div className="flex items-center gap-[1vw] mb-[4vh]">
          <div className="w-[1.5vw] h-[0.2vw] bg-red-600 hidden md:block"></div>
          <h3 className="text-white text-[4vw] md:text-[1.2vw] tracking-[0.2em] uppercase font-bold text-center">
            Areas We Serve
          </h3>
          <div className="w-[1.5vw] h-[0.2vw] bg-red-600 hidden md:block"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-[3vw] md:gap-[1.5vw] w-full max-w-none">
          {areas.map((area, index) => (
            <Link
              key={index}
              href={area.url}
              className="border border-white/20 px-[5vw] py-[1.5vh] md:px-[2.5vw] md:py-[1vh] rounded-full text-gray-300 text-[3vw] md:text-[0.85vw] uppercase tracking-wider hover:border-red-600 hover:text-white hover:bg-red-600/10 transition-colors"
            >
              {area.name}
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
