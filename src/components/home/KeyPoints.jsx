"use client";

export default function KeyPoints() {
  // লাইভ সাইটের হুবহু "Key Points" (ফটোগ্রাফি)
  const points = [
    "We use top-of-the-line cameras, lenses, and lighting to ensure every image meets professional standards.",
    "We don’t just take pictures, we craft visual stories that represent your brand, personality, or event theme.",
    "Expect quick turnaround times without compromising on quality. We value your time as much as your memories.",
    "From professional headshots and event coverage to product shoots and lifestyle portraits, we cover it all.",
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] py-[12vh] px-5 overflow-hidden">
      <div className="relative z-10 w-full flex flex-col">

        <div className="flex flex-col items-center text-center mb-[8vh]">
          <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium mb-[1.5vh]">
            Photography &amp; Production
          </span>
          <div className="flex items-center gap-[1.5vw]">
            <div className="w-[0.8vw] md:w-[0.2vw] h-[5vh] bg-red-600"></div>
            <h2 className="text-white text-[7vw] md:text-[3.5vw] font-black tracking-widest uppercase leading-none">
              Key Points
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vh] md:gap-[1.5vw]">
          {points.map((point, index) => (
            <div
              key={index}
              className="group flex items-start gap-[4vw] md:gap-[1.2vw] bg-[#111] border border-white/5 hover:border-red-600 transition-colors duration-500 p-[6vw] md:p-[2vw]"
            >
              <span className="text-red-600 text-[6vw] md:text-[2vw] font-black leading-none shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-gray-300 text-[3.8vw] md:text-[1vw] leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
