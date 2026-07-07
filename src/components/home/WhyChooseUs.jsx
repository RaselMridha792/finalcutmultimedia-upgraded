"use client";

import Link from "next/link";

export default function WhyChooseUs() {
  // "Our Professional Services" — লাইভ সাইটের হুবহু
  const professionalServices = [
    ["Corporate Video Production", "Tell your brand’s story with clarity, confidence, and creativity."],
    ["Event Videography and Photography", "Capture unforgettable moments from your conferences, banquets, and community events."],
    ["Drone Videography", "Get breathtaking aerial views that elevate your content and set you apart from competitors."],
    ["Training and Educational Videos", "Make learning easy with clear, engaging visuals that keep your team aligned."],
    ["Social Media Content Creation", "Short form, high-impact videos built for engagement and conversions."],
  ];

  // "Why Businesses Choose Final Cut Multimedia" — লাইভ সাইটের হুবহু
  const whyChoose = [
    ["Results-Driven Creativity", "Every frame we shoot has a purpose, to grow your business."],
    ["Local Expertise", "Based in Charlotte, NC, we understand how to position your brand for maximum visibility in the Carolinas."],
    ["Full Service Production", "From scriptwriting and storyboarding to filming and post-production, we handle everything with precision."],
    ["Fast Turnaround", "On time, on budget, and on point for every project we produce."],
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] py-[12vh] px-5 overflow-hidden">

      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-red-600/5 rounded-full blur-[10vw] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

      <div className="relative z-10 w-full flex flex-col">

        {/* হেডার + ইন্ট্রো */}
        <div className="flex flex-col items-center text-center mb-[10vh]">
          <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium mb-[1.5vh]">
            Final Cut Multimedia
          </span>
          <div className="flex items-center gap-[1.5vw]">
            <div className="w-[0.8vw] md:w-[0.2vw] h-[5vh] bg-red-600"></div>
            <h2 className="text-white text-[6vw] md:text-[3vw] font-black tracking-wide uppercase leading-none">
              We Turn Vision Into Cinematic Reality
            </h2>
          </div>
          <p className="text-gray-400 text-[3.5vw] md:text-[1vw] w-full max-w-none md:max-w-[70vw] mt-[3vh] leading-relaxed">
            Welcome to Final Cut Multimedia, the creative powerhouse helping businesses across Charlotte, NC and beyond stand out through professional video production, photography, and drone cinematography. We do more than record video. We craft stories that make people feel, think, and take action. Every project is designed to attract attention, build trust, and help your brand grow. Whether you are a corporation, small business, or entrepreneur ready to dominate your market, we bring your vision to life with cinematic precision.
          </p>
        </div>

        {/* দুই কলাম: Professional Services | Why Businesses Choose */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vh] lg:gap-[3vw] mb-[10vh]">

          {/* Our Professional Services */}
          <div className="flex flex-col">
            <div className="flex items-center gap-[1vw] mb-[4vh]">
              <div className="w-[1.5vw] h-[0.2vw] bg-red-600 hidden md:block"></div>
              <h3 className="text-white text-[5vw] md:text-[1.4vw] tracking-[0.15em] uppercase font-bold">
                Our Professional Services
              </h3>
            </div>
            <div className="flex flex-col gap-[2.5vh]">
              {professionalServices.map(([title, desc], i) => (
                <div key={i} className="border-l-[3px] border-red-600 pl-[4vw] md:pl-[1.2vw]">
                  <h4 className="text-white text-[4vw] md:text-[1.05vw] font-bold mb-[0.5vh]">{title}</h4>
                  <p className="text-gray-400 text-[3.5vw] md:text-[0.9vw] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Businesses Choose Final Cut Multimedia */}
          <div className="flex flex-col">
            <div className="flex items-center gap-[1vw] mb-[4vh]">
              <div className="w-[1.5vw] h-[0.2vw] bg-red-600 hidden md:block"></div>
              <h3 className="text-white text-[5vw] md:text-[1.4vw] tracking-[0.15em] uppercase font-bold">
                Why Businesses Choose Final Cut Multimedia
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2.5vh] md:gap-[1.2vw]">
              {whyChoose.map(([title, desc], i) => (
                <div key={i} className="bg-[#111] border border-white/5 hover:border-red-600 transition-colors duration-500 p-[5vw] md:p-[1.5vw]">
                  <h4 className="text-red-500 text-[4vw] md:text-[1.05vw] font-bold mb-[1vh]">{title}</h4>
                  <p className="text-gray-400 text-[3.5vw] md:text-[0.9vw] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By Charlotte's Leading Brands */}
        <div className="bg-[#111] border border-white/10 p-[7vw] md:p-[3vw] mb-[8vh] text-center">
          <h3 className="text-white text-[5vw] md:text-[1.8vw] font-black uppercase tracking-wide mb-[2.5vh]">
            Trusted By Charlotte&apos;s Leading Brands
          </h3>
          <p className="text-gray-300 text-[3.5vw] md:text-[1vw] leading-relaxed max-w-none md:max-w-[65vw] mx-auto mb-[2vh]">
            From Crown Auto Group to local restaurants, schools, and corporations, our productions help businesses boost their visibility and connect with their audiences in powerful new ways.
          </p>
          <p className="text-gray-400 text-[3.5vw] md:text-[1vw] leading-relaxed italic">
            Your brand deserves more than just another video. It deserves a cinematic story that converts.
          </p>
        </div>

        {/* Let's Bring Your Vision to Life + serving areas */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-white text-[6vw] md:text-[2.5vw] font-black uppercase tracking-tight mb-[2.5vh]">
            Let&apos;s Bring Your Vision to Life
          </h3>
          <p className="text-gray-400 text-[3.5vw] md:text-[1vw] leading-relaxed max-w-none md:max-w-[60vw] mb-[2vh]">
            Do not stay invisible. Partner with Final Cut Multimedia, Charlotte&apos;s trusted video production company, and start transforming your ideas into professional content that works.
          </p>
          <p className="text-gray-500 text-[3vw] md:text-[0.9vw] tracking-wide mb-[5vh]">
            Serving Charlotte, NC; Concord; Gastonia; Kannapolis; Huntersville; Mooresville; and Rock Hill, SC.
          </p>
          <Link
            href="/contact-us-2#project-form"
            className="bg-red-600 border-[0.2vw] md:border-[0.1vw] border-red-600 text-white font-bold text-[3.5vw] md:text-[1vw] tracking-[0.15em] uppercase px-[10vw] py-[2vh] md:px-[4vw] md:py-[1.5vh] hover:bg-transparent hover:text-red-500 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}
