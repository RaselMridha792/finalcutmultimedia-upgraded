"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function DroneUseCases() {
  const gridItems = [
    {
      title: "AERIAL VIDEO FOR COMMERCIAL MARKETING",
      desc: "Drone footage adds scale, movement, and visual impact to marketing campaigns, helping brands stand out and communicate their message more effectively.",
    },
    {
      title: "REAL ESTATE AND PROPERTY AERIAL VIDEO",
      desc: "Aerial perspectives showcase property layout, surroundings, and scale, helping viewers understand location and value at a glance.",
    },
    {
      title: "CONSTRUCTION PROGRESS AND SITE DOCUMENTATION",
      desc: "Drone video allows for consistent documentation of construction progress, site planning, and ongoing project updates.",
    },
    {
      title: "EVENT AND VENUE AERIAL COVERAGE",
      desc: "Planned aerial coverage captures the scale and atmosphere of large venues and events while maintaining safety and professionalism.",
    },
  ];

  const infoSections = [
    {
      title: "FAA LICENSED AND INSURED DRONE OPERATIONS",
      desc: "All drone operations are conducted in compliance with FAA regulations and safety standards. Our professional approach ensures responsible flight planning, airspace awareness, and insured operations for every project.",
    },
    {
      title: "WHY CHOOSE PROFESSIONAL DRONE VIDEO PRODUCTION",
      desc: "Professional drone video production delivers consistent quality, operational safety, and dependable results. Working with experienced operators ensures your aerial content meets professional standards while protecting your project, property, and brand.",
    },
    {
      title: "SERVING CHARLOTTE NC AND SURROUNDING AREAS",
      desc: "We provide drone video production services throughout Charlotte NC and surrounding areas, supporting businesses, developers, and organizations with reliable aerial content.",
    },
  ];

  return (
    <section className="w-full bg-[#0A0A0A] py-[12vh] px-5 text-white font-['Segoe_UI',Arial,sans-serif]">
      <div className="mx-auto w-full max-w-none">
        
        {/* Section Heading */}
        <h2 className="text-white text-[7vw] md:text-[2.5vw] font-black uppercase tracking-widest mb-[8vh] text-center">
          HOW BUSINESSES USE DRONE VIDEO PRODUCTION
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] mb-[10vh]">
          {gridItems.map((item, index) => (
            <div key={index} className="bg-[#121212] p-[6vw] md:p-[3vw] flex flex-col justify-between border border-white/5 hover:border-red-600 transition-colors duration-300">
              <div className="mb-[4vh]">
                <h3 className="text-white text-[4.5vw] md:text-[1.3vw] font-bold uppercase mb-[2vh] tracking-wide">{item.title}</h3>
                <p className="text-gray-400 text-[3.8vw] md:text-[1vw] leading-relaxed">{item.desc}</p>
              </div>
              <Link href="#" className="inline-block bg-transparent border border-gray-700 text-white px-[4vw] py-[1.5vh] md:px-[2vw] md:py-[1vh] font-bold text-[3.5vw] md:text-[0.9vw] uppercase hover:bg-red-600 hover:border-red-600 transition-colors w-max">
                READ MORE
              </Link>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mb-[12vh] text-[3.5vw] md:text-[1.1vw] font-medium border-t border-b border-white/10 py-[4vh]">
          From concept to creation, Final Cut Multimedia is committed to delivering visuals that inspire, engage, and leave a lasting impact. 
          <Link href="/contact" className="text-red-600 ml-[1vw] font-bold uppercase hover:underline inline-flex items-center gap-[0.5vw]">
             CONTACT US <FiArrowRight />
          </Link>
        </div>

        {/* Info Sections - New Design */}
        <div className="max-w-[70vw] mx-auto space-y-[4vh]">
          {infoSections.map((info, index) => (
            <div key={index} className="bg-[#121212] p-[4vw] md:p-[2.5vw] border-l-4 border-red-600 hover:bg-[#1a1a1a] transition-colors duration-300">
              <h3 className="text-white text-[4.5vw] md:text-[1.4vw] font-bold uppercase mb-[2vh] tracking-wide">{info.title}</h3>
              <p className="text-gray-400 text-[3.8vw] md:text-[1vw] leading-relaxed">
                {info.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
