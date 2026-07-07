"use client";

import Image from "next/image";
import { useState } from "react";

const filters = ["All Projects", "Video Production", "Event Coverage", "Video Editing", "Photography", "Monthly Content Creation", "Additional Production Services"];
const projects = [
  { title: "Brand Commercial", service: "Video Production", deliverables: "Campaign film, web cut, social edits", image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/87d2047b-a769-426a-8539-3d0b3f8f7a01-scaled.jpeg" },
  { title: "Client Testimonials", service: "Video Editing", deliverables: "Interview edit, captions, campaign clips", image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/Mac-Two-Computers-Display.jpg" },
  { title: "Event Highlights", service: "Event Coverage", deliverables: "Event recap, speaker clips, photography", image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/a8b00388-72df-4154-ac5b-e469b6968b84.jpeg" },
  { title: "Monthly Content Creation", service: "Monthly Content Creation", deliverables: "Interviews, short-form edits, web assets", image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg" },
  { title: "Training Videos", service: "Additional Production Services", deliverables: "Training modules, graphics, captions", image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-1-1-scaled.jpeg" },
  { title: "Corporate Interviews", service: "Photography", deliverables: "Executive portraits, interviews, social cutdowns", image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/ebe708e3-7864-45f8-b7c6-4efaec1b19371.jpg" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All Projects");
  const visible = active === "All Projects" ? projects : projects.filter((project) => project.service === active);

  return (
    <main className="min-h-screen bg-[#060606] pt-32 text-white">
      <section className="px-5 pb-14">
        <div className="mx-auto w-full max-w-none">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Featured Productions</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase sm:text-6xl">See How We Help Businesses Tell Their Story</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400">Every project has a purpose. Browse our work by service to see how we create professional, results-driven content for organizations across a variety of industries.</p>
        </div>
      </section>
      <section className="px-5 pb-20">
        <div className="mx-auto w-full max-w-none">
          <div className="mb-10 flex gap-2 overflow-x-auto border-b border-white/10 pb-4">
            {filters.map((filter) => (
              <button key={filter} onClick={() => setActive(filter)} className={`shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${active === filter ? "bg-[#DB0909] text-white" : "bg-[#111] text-gray-400 hover:text-white"}`}>
                {filter}
              </button>
            ))}
          </div>
          {visible.length ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((project) => (
                <article key={project.title} className="group relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:opacity-0" />
                  <div className="absolute inset-0 bg-[#DB0909]/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-[8%] flex flex-col items-center justify-center text-center">
                    <div className="absolute left-1/2 top-0 h-0.5 w-2/5 -translate-x-1/2 bg-[#DB0909] transition-all duration-500 group-hover:w-full group-hover:bg-white" />
                    <div className="absolute bottom-0 left-1/2 h-0.5 w-2/5 -translate-x-1/2 bg-[#DB0909] transition-all duration-500 group-hover:w-full group-hover:bg-white" />
                    <div className="absolute left-0 top-0 h-0 w-0.5 bg-white transition-all delay-300 duration-300 group-hover:h-full" />
                    <div className="absolute right-0 top-0 h-0 w-0.5 bg-white transition-all delay-300 duration-300 group-hover:h-full" />

                    <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-7">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">{project.service}</p>
                      <h2 className="mt-4 text-2xl font-black uppercase leading-tight sm:text-3xl">{project.title}</h2>
                    </div>
                    <p className="absolute top-[66%] z-10 max-w-sm translate-y-4 px-5 text-sm font-medium leading-6 text-white/90 opacity-0 transition-all delay-150 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {project.deliverables}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : <p className="border border-white/10 bg-[#0a0a0a] p-8 text-gray-400">More work in this category is being prepared for publication.</p>}
        </div>
      </section>
      <section className="border-t border-white/10 px-5 py-20 text-center">
        <h2 className="text-3xl font-black uppercase sm:text-5xl">Ready to Create Your Own Success Story?</h2>
        <p className="mt-5 text-gray-400">Let&apos;s talk about your goals and build content that works for your business.</p>
        <a href="/contact-us-2#project-form" className="mt-8 inline-flex bg-[#DB0909] px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black">Book a Call</a>
      </section>
    </main>
  );
}
