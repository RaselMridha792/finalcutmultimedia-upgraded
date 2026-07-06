"use client";

import Link from "next/link";

export default function ServicesShowcase() {
  const whyChooseUs = [
    {
      title: "EXPERIENCED CHARLOTTE BASED TEAM",
      desc: "Local professionals with experience across industries, production styles, and project scopes.",
    },
    {
      title: "PROFESSIONAL PRODUCTION AND EDITING WORKFLOW",
      desc: "Structured workflows that ensure quality, consistency, and efficient project delivery.",
    },
    {
      title: "CONSISTENT QUALITY AND RELIABLE DELIVERY",
      desc: "A dependable production process focused on quality standards and dependable timelines.",
    },
  ];

  const droneServices = [
    {
      title: "FAA COMPLIANT COMMERCIAL DRONE OPERATIONS",
      desc: "All aerial work is conducted in accordance with FAA regulations, prioritizing safety, professionalism, and compliance.",
    },
    {
      title: "AERIAL VIDEO FOR EVENTS, REAL ESTATE, AND CONSTRUCTION",
      desc: "High-quality aerial footage supporting marketing, documentation, and visual storytelling across industries.",
    },
  ];

  return (
    <section className="w-full bg-black py-[10vh] px-5">
      {/* WHY CHOOSE US SECTION */}
      <div className="mb-[15vh]">
        <h2 className="text-white text-[7vw] md:text-[2.5vw] font-black uppercase tracking-wider mb-[8vh]">
          WHY BUSINESSES CHOOSE FINAL CUT MULTIMEDIA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2vw]">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="bg-[#3d3d3d] p-[3vw] flex flex-col justify-between group shadow-lg border border-white/5 transition-all duration-300">
              <div className="mb-[4vh]">
                <h3 className="text-white text-[4.5vw] md:text-[1.2vw] font-bold uppercase mb-[2vh]">{item.title}</h3>
                <p className="text-gray-400 text-[3.5vw] md:text-[0.9vw] leading-relaxed">{item.desc}</p>
              </div>
              <Link href="#" className="w-full bg-black text-white text-center py-[2vh] font-bold text-[3vw] md:text-[0.9vw] uppercase tracking-widest hover:bg-red-600 transition-colors border border-white/10">
                READ MORE
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* DRONE VIDEO PRODUCTION SERVICES SECTION */}
      <div>
        <h2 className="text-white text-[7vw] md:text-[2.5vw] font-black uppercase tracking-wider mb-[8vh]">
          DRONE VIDEO PRODUCTION SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw]">
          {droneServices.map((item, index) => (
            <div key={index} className="bg-[#3d3d3d] p-[3vw] flex flex-col justify-between group shadow-lg border border-white/5 transition-all duration-300">
              <div className="mb-[4vh]">
                <h3 className="text-white text-[4.5vw] md:text-[1.2vw] font-bold uppercase mb-[2vh]">{item.title}</h3>
                <p className="text-gray-400 text-[3.5vw] md:text-[0.9vw] leading-relaxed">{item.desc}</p>
              </div>
              <Link href="#" className="w-full bg-black text-white text-center py-[2vh] font-bold text-[3vw] md:text-[0.9vw] uppercase tracking-widest hover:bg-red-600 transition-colors border border-white/10">
                READ MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}