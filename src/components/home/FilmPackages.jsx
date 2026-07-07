"use client";

import Link from "next/link";

export default function FilmPackages() {
  return (
    <section className="w-full bg-white py-[10vh] md:py-[9vh] px-5 flex flex-col items-center justify-center text-center">
      <h2 className="text-black text-[7vw] md:text-[3.2vw] font-black uppercase tracking-tight leading-tight mb-[4vh]">
        We Have Film Packages As Low As <span className="text-red-600">$599</span>
      </h2>
      <Link
        href="/contact-us-2#project-form"
        className="bg-red-600 border-[0.2vw] md:border-[0.1vw] border-red-600 text-white font-bold text-[3.5vw] md:text-[1vw] tracking-[0.15em] uppercase px-[12vw] py-[2vh] md:px-[4vw] md:py-[1.5vh] hover:bg-black hover:border-black transition-all duration-300"
      >
        Contact Us
      </Link>
    </section>
  );
}
