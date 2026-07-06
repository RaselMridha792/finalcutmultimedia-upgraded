"use client";

import { useState } from "react";
import Image from "next/image";

export default function DriveResults() {
  const [open, setOpen] = useState(0);

  // লাইভ সাইটের হুবহু FAQ
  const faqs = [
    {
      q: "What sets Final Cut Multimedia apart from other video production companies in Charlotte NC",
      a: "Our ability to blend cinematic film quality with strategic brand storytelling. Every video, photo, and marketing project we produce is custom crafted to capture your brand’s identity, your event’s emotion, and your vision’s purpose. We don’t believe in one-size-fits-all content; we create professional corporate videos, promotional films, and photography that connect, inspire, and drive measurable results.",
    },
    {
      q: "How do we transform a simple idea into powerful visual storytelling?",
      a: "At Final Cut Multimedia, we focus on real emotion, creative storytelling, and professional videography that highlight your brand’s truth. Every frame is designed to be authentic, cinematic, and powerful, helping your business stand out in Charlotte NC and beyond.",
    },
    {
      q: "Why should businesses choose us for corporate content?",
      a: "We understand business communication. From training videos to social media campaigns, our productions are designed to inform, inspire, and engage your audience effectively.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] py-[12vh] px-5 overflow-hidden">

      {/* হেডার */}
      <div className="flex flex-col items-center text-center mb-[8vh]">
        <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium mb-[1.5vh]">
          Crafting Visuals That Speak Louder Than Words
        </span>
        <h2 className="text-white text-[6.5vw] md:text-[3vw] font-black uppercase tracking-tight leading-tight max-w-none md:max-w-[70vw]">
          Corporate Video Production and Event Photography That Drive Results
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[6vh] lg:gap-[3vw] items-start">

        {/* বাম: ইমেজ */}
        <div className="relative w-full aspect-[4/3] min-h-[320px] lg:min-h-[520px]">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/professional-video-production-for-car-dealers-1-768x439-1.jpeg"
            alt="Corporate video production in Charlotte NC by Final Cut Multimedia"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* ডান: টেক্সট + FAQ */}
        <div className="flex flex-col">
          <h3 className="text-white text-[5vw] md:text-[1.6vw] font-bold uppercase leading-tight mb-[3vh]">
            High Quality Video Production Services in Charlotte NC for Businesses That Demand Results.
          </h3>

          <p className="text-gray-400 text-[3.8vw] md:text-[1vw] leading-relaxed mb-[5vh]">
            At Final Cut Multimedia, we deliver professional video production and photography services in Charlotte NC that help businesses stand out, attract clients, and increase revenue. Our award-winning team blends creative storytelling with advanced film production and editing technology to craft visuals that command attention. From corporate videography and promotional brand videos to event coverage and social media content creation, we produce cinematic marketing that drives engagement and converts viewers into customers. When you work with Final Cut Multimedia, you&apos;re not just getting a video, you&apos;re getting a partner dedicated to growing your brand.
          </p>

          {/* FAQ অ্যাকর্ডিয়ন */}
          <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
            {faqs.map((item, index) => (
              <div key={index} className="py-[2.5vh]">
                <button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="w-full flex items-start justify-between gap-[3vw] md:gap-[1.5vw] text-left group"
                >
                  <span className="text-white text-[4vw] md:text-[1.05vw] font-bold leading-snug group-hover:text-red-500 transition-colors">
                    {item.q}
                  </span>
                  <svg
                    className={`w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw] shrink-0 text-red-600 transition-transform duration-300 ${open === index ? "rotate-45" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${open === index ? "max-h-[80vh] mt-[2vh] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-gray-400 text-[3.6vw] md:text-[0.95vw] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
