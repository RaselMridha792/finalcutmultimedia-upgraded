"use client";

export default function DroneContent() {
  const sections = [
    {
      title: "WHY DRONE VIDEO MATTERS FOR BUSINESSES",
      content: [
        "Most people decide whether to keep watching a video within seconds. Drone footage helps capture attention and provides context immediately.",
        "Drone video allows businesses to:",
        "• Show the full scale of a property or location",
        "• Improve website engagement and visual quality",
        "• Strengthen marketing and promotional videos",
        "• Present a more professional brand image",
        "Good drone video supports the message instead of distracting from it."
      ]
    },
    {
      title: "DRONE VIDEO PRODUCTION SERVICES IN CHARLOTTE NC",
      content: [
        "We provide drone video production services designed for real business needs, not hobby use.",
        "Commercial drone video: Professional aerial footage for branding, marketing, and advertising. Clean shots that integrate smoothly into edited videos.",
        "Real estate drone video: Drone video that shows property layout, access points, and surrounding areas so buyers understand the space quickly.",
        "Construction drone video: Aerial footage for documenting progress, tracking development, and capturing overhead views of job sites.",
        "Event and venue drone video: Professional drone coverage that captures the size and layout of venues and events while maintaining safety and control."
      ]
    },
    {
      title: "LICENSED AND INSURED DRONE OPERATIONS",
      content: [
        "Drone video production requires proper licensing and careful planning.",
        "All drone flights are handled by FAA licensed pilots and follow airspace and safety regulations. We carry insurance and manage flight planning to ensure every project stays compliant and protected.",
        "This approach reduces risk and ensures professional results."
      ]
    },
    {
      title: "WHY PROFESSIONAL DRONE VIDEO MAKES A DIFFERENCE",
      content: [
        "Many businesses end up with drone footage that never gets used. This usually happens when shots are captured without a clear purpose.",
        "Professional drone video production ensures:",
        "• Footage is planned for specific uses",
        "• Shots fit naturally into marketing and edited videos",
        "• Visuals stay consistent with your brand",
        "• Time and budget are used efficiently",
        "Planning leads to better results and stronger content."
      ]
    },
    {
      title: "DRONE VIDEO AS PART OF A FULL VIDEO PRODUCTION STRATEGY",
      content: [
        "Drone video works best when it supports a larger video plan.",
        "We integrate aerial footage with our Video Production Services in Charlotte NC so your content looks consistent across websites, social media, and marketing materials.",
        "This creates a unified look and stronger long-term value."
      ]
    }
  ];

  return (
    <section className="w-full bg-[#0A0A0A] py-[12vh] px-5 text-gray-300 font-['Segoe_UI',Arial,sans-serif]">
      <div className="mx-auto w-full max-w-none">
        
        {/* Intro Header */}
        <div className="mb-[10vh] border-l-4 border-red-600 pl-[2vw]">
          <span className="text-red-600 font-bold uppercase tracking-widest text-[3.5vw] md:text-[0.9vw]">Marketing-Driven Video</span>
          <h1 className="text-white text-[7vw] md:text-[2.5vw] font-black uppercase mt-[1vh]">
            PROFESSIONAL COMMERCIAL DRONE VIDEOGRAPHY SERVICES
          </h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-[8vh]">
          {sections.map((sec, index) => (
            <div key={index} className="border-b border-white/10 pb-[6vh]">
              <h2 className="text-white text-[5vw] md:text-[1.8vw] font-bold uppercase tracking-wide mb-[3vh] flex items-center gap-[1vw]">
                <span className="w-[1vw] h-[1vw] bg-red-600"></span> {sec.title}
              </h2>
              <div className="space-y-[2vh]">
                {sec.content.map((line, i) => (
                  <p key={i} className={`text-[3.8vw] md:text-[1.05vw] leading-relaxed ${line.startsWith('•') ? 'pl-[2vw] text-white font-semibold' : ''}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Cta */}
        <div className="mt-[10vh] p-[5vw] bg-[#121212] border border-white/5 rounded-[8px]">
          <h3 className="text-white text-[5vw] md:text-[1.5vw] font-bold uppercase mb-[2vh]">Serving Charlotte NC and surrounding areas</h3>
          <p className="mb-[4vh] text-[3.8vw] md:text-[1.05vw]">Final Cut Multimedia provides drone video production services throughout Charlotte NC and nearby areas. We work with businesses, organizations, and property owners who need professional aerial video done the right way.</p>
          
          <h4 className="text-white text-[4vw] md:text-[1.2vw] font-bold uppercase mb-[2vh]">Request Drone Video Production in Charlotte NC</h4>
          <p className="text-[3.8vw] md:text-[1.05vw] mb-[3vh]">If you need drone video that is professional, reliable, and built for real business use, we are ready to help.</p>
          <p className="text-white font-semibold text-[3.8vw] md:text-[1.05vw]">Tell us what you are promoting, where the video will be used, and what you want it to accomplish. We will guide the process and deliver aerial footage that fits your goals.</p>
        </div>

      </div>
    </section>
  );
}
