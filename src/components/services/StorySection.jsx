"use client";

import { useState } from "react";
import Image from "next/image";

export default function StorySection() {
  // Accordion data
  const faqs = [
    {
      id: 1,
      question: "WHAT SETS FINAL CUT MULTIMEDIA APART IN THE INDUSTRY?",
      answer:
        "Our strength lies in combining cinematic production quality with personalized storytelling. Every project is tailored to reflect your unique brand, event, or vision.",
    },
    {
      id: 2,
      question: "HOW DO WE CAPTURE THE ESSENCE OF SPECIAL MOMENTS?",
      answer:
        "We focus on authentic interactions, candid emotions, and the subtle details that make your event unique, ensuring the true atmosphere is preserved forever.",
    },
    {
      id: 3,
      question: "WHY SHOULD BUSINESSES CHOOSE US FOR CORPORATE CONTENT?",
      answer:
        "We understand corporate branding. Our visuals are designed to elevate your professional image, engage your target audience, and drive your business objectives forward.",
    },
  ];

  // Default first accordion open
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="w-full bg-black py-[12vh] px-5 font-['Segoe_UI',Arial,sans-serif]">
      <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-2 gap-[8vh] lg:gap-[5vh] items-center">

        {/* Left Column: Image */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="relative w-full lg:w-[80%] aspect-[4/5] overflow-hidden bg-[#111]">
            <Image
              src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/Untitled-3.jpg"
              alt="Final Cut Multimedia Setup"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              unoptimized
            />
          </div>
        </div>

        {/* Right Column: Text & Accordion */}
        <div className="w-full flex flex-col justify-center text-white">

          {/* Subtitle */}
          <span className="text-gray-400 text-sm md:text-base uppercase tracking-widest font-bold mb-[2vh]">
            CRAFTING VISUALS THAT SPEAK LOUDER THAN WORDS
          </span>

          {/* Main Heading */}
          <h2 className="text-white text-3xl md:text-4xl font-black uppercase leading-[1.2] mb-[3vh]">
            YOUR STORY DESERVES MORE THAN JUST A CAMERA — IT DESERVES CREATIVITY, PRECISION, AND PASSION.
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-[6vh]">
            At Final Cut Multimedia, we blend artistry with technology to deliver photography and videography that stands out. From dynamic corporate films to emotional event coverage, our team is dedicated to creating visuals that resonate long after the moment has passed.
          </p>

          {/* Accordion Section */}
          <div className="border-t border-gray-700/80">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-700/80">
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-[3vh] text-left flex justify-between items-center focus:outline-none group"
                >
                  <h3
                    className={`text-lg md:text-xl font-bold uppercase tracking-wide transition-colors duration-300 ${
                      openIndex === faq.id ? "text-white" : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </button>

                {/* Accordion Content with smooth height transition */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === faq.id ? "max-h-[500px] opacity-100 pb-[3vh]" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 text-base md:text-[1.05rem] leading-relaxed pr-[2vw]">
                    {faq.answer}
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
