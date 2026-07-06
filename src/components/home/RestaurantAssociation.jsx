"use client";

import Image from "next/image";

export default function RestaurantAssociation() {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-[12vh] px-5 overflow-hidden border-y border-white/10">

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-[6vh] lg:gap-[4vw] items-center">

        {/* RA লোগো */}
        <div className="w-full flex items-center justify-center">
          <div className="relative w-[70vw] h-[35vw] md:w-[30vw] md:h-[16vw]">
            <Image
              src="https://finalcutmultimedia.com/wp-content/uploads/2025/11/RA_White_Text_Logo-1-1.png"
              alt="The Restaurant Association Logo"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* টেক্সট */}
        <div className="flex flex-col">
          <div className="flex items-start gap-[3vw] md:gap-[1vw] mb-[3vh]">
            <div className="w-[0.8vw] md:w-[0.2vw] h-[8vh] md:h-[10vh] bg-red-600 shrink-0"></div>
            <h2 className="text-white text-[6vw] md:text-[2.2vw] font-black uppercase tracking-wide leading-tight">
              The Restaurant Association &amp; Final Cut Multimedia Are Trusted Partners
            </h2>
          </div>

          <p className="text-gray-400 text-[3.8vw] md:text-[1vw] leading-relaxed mb-[3vh]">
            The Restaurant Association is a leading organization that supports and promotes restaurants and food service professionals through advocacy, education, and marketing. Final Cut Multimedia is a trusted member and partner of the Restaurant Association. Together we produce restaurant videos that highlight signature dishes, showcase the people and atmosphere, and help bring more guests through the door.
          </p>

          <div className="flex flex-col gap-[1.5vh]">
            <a
              href="https://www.restaurantassociation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 text-[3.8vw] md:text-[1vw] font-bold tracking-wide hover:text-white transition-colors"
            >
              www.restaurantassociation.com
            </a>
            <span className="text-gray-500 text-[3.2vw] md:text-[0.85vw] uppercase tracking-[0.15em]">
              Filmed, Edited, and Directed By Final Cut Multimedia
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
