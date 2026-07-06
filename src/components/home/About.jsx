"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  // পুরনো লাইভ সাইটের হুবহু value proposition কন্টেন্ট
  const valueProps = [
    {
      title: "Expert Storytelling That Connects",
      desc: "At Final Cut Multimedia, we believe every project has a story worth telling. Our team of skilled videographers and photographers bring your vision to life.",
    },
    {
      title: "High-Quality Production Standards",
      desc: "From 4K video production to crystal clear sound, every detail is handled with care.",
    },
    {
      title: "Tailored Solutions for Every Client",
      desc: "No two brands are the same, nor are our projects. We take the time to understand your goals for each production to fit your message, audience, and platform needs.",
    },
    {
      title: "Reliable, Efficient, and Passionate Team",
      desc: "Our clients choose us for our dedication and dependability. We meet deadlines without compromising quality and treat every project with care, professionalism, and attention to detail.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] overflow-hidden py-12 lg:py-20 px-5">

      <div className="relative w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[6vh] lg:gap-[3vw] lg:items-center">

        <div className="relative w-full flex flex-col justify-center z-10">

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 w-[120%] h-[120%] opacity-[0.03] pointer-events-none z-0">
            <Image
              src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
              alt="Final Cut Background Watermark"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="relative z-10 space-y-6">
            <div>
              <span className="text-gray-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold">
                About Us
              </span>

              <div className="flex items-stretch gap-4 mt-3">
                <div className="w-1 bg-red-600 my-1"></div>
                <h2 className="text-white text-3xl sm:text-4xl xl:text-5xl font-black tracking-wide uppercase leading-tight">
                  The Most Trusted Video Production Company in North Carolina
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed max-w-none">
              <p>
                At Final Cut Multimedia we create marketing videos that boost your online presence. Whether it&apos;s for your website, social media, or content strategy. We handle everything from start to finish, making sure your business stands out and attracts more customers.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center px-8 py-3
                           border border-white/30 text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase
                           transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] min-h-[360px] lg:min-h-[560px]">
            <Image
              src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781697016/Use_this_picture_k9euqa.jpg"
              alt="Final Cut Multimedia Team"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>

      </div>

      {/* ৪টি ভ্যালু প্রপ (লাইভ সাইটের হুবহু) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3vh] md:gap-[1.5vw] mt-[8vh]">
        {valueProps.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col bg-[#111] border-l-[3px] border-red-600 p-[6vw] md:p-[1.8vw] hover:bg-[#161616] transition-colors duration-500"
          >
            <h3 className="text-white text-[4.5vw] md:text-[1.05vw] font-bold uppercase tracking-wide leading-tight mb-[1.5vh]">
              {item.title}
            </h3>
            <p className="text-gray-400 text-[3.5vw] md:text-[0.9vw] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
