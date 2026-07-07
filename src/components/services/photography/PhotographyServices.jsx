"use client";

import Link from "next/link";
import { FiCheckCircle, FiCamera } from "react-icons/fi";

export default function PhotographyServices() {
  const services = [
    {
      title: "Corporate Photography",
      desc: "Showcase your team and company with high-quality professional portraits and lifestyle imagery.",
    },
    {
      title: "Event Photography",
      desc: "Capture every highlight from corporate gatherings, community events, and private celebrations.",
    },
    {
      title: "Product Photography",
      desc: "Bring your products to life with clean, well-lit photos that attract attention and increase sales.",
    },
    {
      title: "Real Estate Photography",
      desc: "Present properties in their best light with sharp, magazine-style imagery that sells faster.",
    },
    {
      title: "Headshots & Branding",
      desc: "Give your brand a professional image that builds trust online and in person.",
    },
    {
      title: "Automotive Photography",
      desc: "Perfect for dealerships and auto groups who want to feature their inventory with clarity and style.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Local Expertise",
      desc: "Based in Charlotte, NC, we understand how to highlight what makes your business and brand unique.",
    },
    {
      title: "Professional Quality",
      desc: "Every image is captured with precision lighting, composition, and color accuracy for maximum impact.",
    },
    {
      title: "Creative Direction",
      desc: "We help you plan the perfect look, from wardrobe to background, ensuring every detail reflects your vision.",
    },
    {
      title: "Fast Turnaround",
      desc: "You get professional results quickly, so you can start using your images to promote your business right away.",
    },
  ];

  return (
    <section className="w-full bg-[#0A0A0A] py-[12vh] px-5 text-white font-['Segoe_UI',Arial,sans-serif]">
      <div className="max-w-[85vw] mx-auto">
        
        {/* Intro Section */}
        <div className="text-center max-w-[75vw] md:max-w-[60vw] mx-auto mb-[12vh]">
          <h2 className="text-white text-[5vw] md:text-[2.5vw] font-black uppercase leading-[1.2] mb-[2vh]">
            Get the photos your brand deserves, <br className="hidden md:block"/> and your customers remember
          </h2>
          <h3 className="text-red-600 text-[4.5vw] md:text-[1.5vw] font-bold uppercase tracking-widest mb-[4vh]">
            Capture the Moment. Tell the Story. Inspire Action.
          </h3>
          <p className="text-gray-400 text-[3.8vw] md:text-[1.1vw] leading-relaxed mb-[2vh]">
            At Final Cut Multimedia, we specialize in professional photography services in Charlotte NC that help your brand stand out and your story shine. Whether you need event photography, corporate headshots, or marketing visuals, we deliver crisp, creative, and compelling images that elevate your business.
          </p>
          <p className="text-gray-300 font-semibold text-[3.8vw] md:text-[1.1vw] leading-relaxed">
            We know every photo matters. Each shot is designed to connect with your audience, capture emotion, and communicate your brand message with power and precision.
          </p>
        </div>

        {/* Our Services Grid */}
        <div className="mb-[12vh]">
          <h3 className="text-white text-[6vw] md:text-[2.2vw] font-black uppercase tracking-wide mb-[6vh] border-l-4 border-red-600 pl-[1.5vw]">
            Our Photography Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.5vw]">
            {services.map((service, index) => (
              <div key={index} className="bg-[#121212] p-[5vw] md:p-[2.5vw] border border-white/5 hover:border-red-600 transition-colors duration-300 group">
                <FiCamera className="text-red-600 text-[6vw] md:text-[2vw] mb-[2vh] group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-white text-[4.5vw] md:text-[1.2vw] font-bold uppercase mb-[1.5vh] tracking-wide">{service.title}</h4>
                <p className="text-gray-400 text-[3.8vw] md:text-[1vw] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="mb-[12vh]">
          <h3 className="text-white text-[6vw] md:text-[2.2vw] font-black uppercase tracking-wide mb-[6vh] border-l-4 border-red-600 pl-[1.5vw]">
            Why Choose Final Cut Multimedia Photography
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vw] md:gap-[3vw]">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start gap-[2vw] md:gap-[1.5vw] bg-[#121212] p-[4vw] md:p-[2vw] rounded-[4px]">
                <FiCheckCircle className="text-red-600 text-[6vw] md:text-[1.8vw] flex-shrink-0 mt-[0.5vh]" />
                <div>
                  <h4 className="text-white text-[4.5vw] md:text-[1.3vw] font-bold uppercase mb-[1vh] tracking-wide">{reason.title}</h4>
                  <p className="text-gray-400 text-[3.8vw] md:text-[1vw] leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA / Info Box */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-red-600/30 p-[6vw] md:p-[4vw] text-center rounded-[8px] relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-red-600 text-[5vw] md:text-[1.8vw] font-black uppercase mb-[2vh] tracking-widest">
              Photography That Works For You
            </h3>
            <p className="text-gray-300 text-[3.8vw] md:text-[1.1vw] leading-relaxed max-w-[60vw] mx-auto mb-[6vh]">
              Your photos should do more than look good. They should represent your brand, attract your audience, and tell your story in one frame. At Final Cut Multimedia, we create photography that captures the professionalism, energy, and personality behind every project.
            </p>
            
            <h2 className="text-white text-[6vw] md:text-[2.5vw] font-black uppercase mb-[2vh]">
              Book Your Photography Session Today
            </h2>
            <p className="text-gray-400 text-[3.8vw] md:text-[1.1vw] mb-[4vh]">
              Let’s create visuals that help your business grow and get noticed.
            </p>
            
            <Link 
              href="/contact-us-2" 
              className="inline-block bg-red-600 text-white px-[8vw] py-[2vh] md:px-[3vw] md:py-[1.5vh] font-bold text-[3.5vw] md:text-[1vw] uppercase tracking-widest hover:bg-red-700 transition-colors rounded-[4px] shadow-[0_0_15px_rgba(220,38,38,0.3)] mb-[4vh]"
            >
              Contact Us Now
            </Link>
            
            <div className="border-t border-white/10 pt-[3vh] mt-[2vh]">
              <p className="text-gray-500 text-[3.2vw] md:text-[0.9vw] uppercase tracking-widest font-semibold">
                Serving Charlotte, NC; Concord; Gastonia; Kannapolis; Huntersville; and surrounding areas
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}