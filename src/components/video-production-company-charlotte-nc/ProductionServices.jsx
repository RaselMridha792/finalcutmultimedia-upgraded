"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function VideoProductionServices() {
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

  const videos = [
    "https://player.vimeo.com/video/347653169?h=62ae825ca0",
    "https://player.vimeo.com/video/322030118?h=1243cbc3be",
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] py-[15vh] px-5 overflow-hidden">
      
      {/* হেডার */}
      <div className="max-w-[85vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[5vw] mb-[10vh]">
        <h2 className="text-white text-[8vw] md:text-[3vw] font-black uppercase leading-tight">
          WE HAVE FILM PACKAGES AS LOW AS $599
        </h2>
        <p className="text-gray-400 text-[4vw] md:text-[1.1vw] leading-relaxed">
          At Final Cut Multimedia we create marketing videos that boost your online presence. Whether it is for your website, social media, or content strategy, we handle everything from start to finish, making sure your business stands out and attracts more customers.
        </p>
      </div>

      {/* মেইন গ্রিড */}
      <div className="max-w-[85vw] mx-auto space-y-[10vh]">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vw]">
          <div className="w-full aspect-video bg-black border-[0.2vw] border-white/10 shadow-2xl">
            <iframe className="w-full h-full" src={videos[0]} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw]">
            {cards.slice(0, 2).map((card, i) => (
              <div key={i} className="flex flex-col bg-[#111] p-[3vw] border border-white/10 group hover:border-red-600 transition-colors duration-500">
                <h3 className="text-white text-[5vw] md:text-[1.5vw] font-bold mb-[2vh]">{card.title}</h3>
                <p className="text-gray-400 text-[3.5vw] md:text-[0.9vw] leading-relaxed mb-[3vh] flex-grow">{card.desc}</p>
                <Link href="#" className="text-red-600 text-[3.5vw] md:text-[0.9vw] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors">
                  READ MORE <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vw]">
           <div className="w-full aspect-video bg-black border-[0.2vw] border-white/10 shadow-2xl lg:order-2">
            <iframe className="w-full h-full" src={videos[1]} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] lg:order-1">
            {cards.slice(2, 4).map((card, i) => (
              <div key={i} className="flex flex-col bg-[#111] p-[3vw] border border-white/10 group hover:border-red-600 transition-colors duration-500">
                <h3 className="text-white text-[5vw] md:text-[1.5vw] font-bold mb-[2vh]">{card.title}</h3>
                <p className="text-gray-400 text-[3.5vw] md:text-[0.9vw] leading-relaxed mb-[3vh] flex-grow">{card.desc}</p>
                <Link href="#" className="text-red-600 text-[3.5vw] md:text-[0.9vw] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors">
                  READ MORE <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}