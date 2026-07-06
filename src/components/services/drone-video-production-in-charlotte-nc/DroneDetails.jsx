"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function DroneDetails() {
  const cards = [
    {
      title: "Expert Storytelling That Connects",
      desc: "At Final Cut Multimedia, we believe every project has a story worth telling. Our team of skilled videographers and photographers bring your vision to life.",
    },
    {
      title: "High-Quality Production Standards",
      desc: "We combine creativity with cutting-edge technology to deliver professional-grade results. From 4K video production to crystal clear.",
    },
    {
      title: "Tailored Solutions for Every Client",
      desc: "No two brands are the same, nor are our projects. We take the time to understand your goals for each production to fit your message, audience, and platform needs.",
    },
    {
      title: "Reliable, Efficient, and Passionate Team",
      desc: "Our clients choose us for our dedication and dependability. We meet deadlines without compromising quality and treat every project.",
    },
  ];

  return (
    <section className="w-full bg-[#0A0A0A] py-[12vh] px-5 text-white font-['Segoe_UI',Arial,sans-serif]">
      <div className="mx-auto w-full max-w-none">
        
        {/* Section Header */}
        <h2 className="text-white text-[7vw] md:text-[2.5vw] font-black uppercase tracking-widest mb-[8vh] text-center lg:text-left border-l-4 border-red-600 pl-[2vw]">
          DRONE VIDEO PRODUCTION IN CHARLOTTE NC
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vw]">
          
          {/* Left Side: Videos */}
          <div className="flex flex-col gap-[6vh]">
            <h3 className="text-[5vw] md:text-[1.5vw] font-bold uppercase tracking-wide text-red-500">
              FAA LICENSED AND INSURED DRONE SERVICES
            </h3>
            <div className="w-full aspect-video border border-white/10 shadow-2xl">
              <iframe className="w-full h-full" src="https://player.vimeo.com/video/659551134?h=981ca1e9a1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="w-full aspect-video border border-white/10 shadow-2xl">
              <iframe className="w-full h-full" src="https://player.vimeo.com/video/817227760?h=ed3ad73e11" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>

          {/* Right Side: Text & Cards */}
          <div className="flex flex-col gap-[5vh]">
            <div className="text-gray-400 text-[3.5vw] md:text-[1vw] leading-relaxed space-y-[2vh]">
              <p>Professional drone video production in Charlotte NC for businesses that need clear, high-quality aerial footage for marketing, websites, and commercial use.</p>
              <p>Drone video helps people understand your business faster. It shows location, size, and surroundings in a way ground cameras cannot. When planned correctly, it improves first impressions and makes your business look more established and professional.</p>
              <p className="text-white font-semibold">At Final Cut Multimedia, drone video is planned with purpose and handled correctly from start to finish.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw]">
              {cards.map((card, index) => (
                <div key={index} className="bg-[#121212] border border-white/5 p-[4vw] md:p-[2vw] flex flex-col justify-between hover:border-red-600/50 transition-colors duration-300">
                  <div className="mb-[4vh]">
                    <h4 className="text-[4vw] md:text-[1.1vw] font-bold mb-[2vh] uppercase text-white tracking-wide">{card.title}</h4>
                    <p className="text-[3.5vw] md:text-[0.9vw] text-gray-400 leading-relaxed">{card.desc}</p>
                  </div>
                  <Link href="#" className="text-red-600 font-bold text-[3vw] md:text-[0.9vw] uppercase flex items-center gap-[0.5vw] hover:text-white transition-colors">
                    READ MORE <FiArrowRight />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
