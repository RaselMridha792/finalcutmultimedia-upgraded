import Link from "next/link";
import { FiFilm, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white px-5 overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ডে হালকা লাল গ্লো (Cinematic Glow Effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-red-600/10 blur-[10vw] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* ফিল্ম আইকন */}
        <FiFilm className="text-red-600 text-[12vw] md:text-[4vw] mb-[2vh] opacity-80 animate-pulse" />

        {/* 404 টেক্সট (গ্রেডিয়েন্ট ইফেক্ট সহ) */}
        <h1 className="text-[30vw] md:text-[15vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700 drop-shadow-2xl select-none">
          404
        </h1>

        {/* ক্রিয়েটিভ টাইটেল */}
        <h2 className="text-[6vw] md:text-[2.5vw] font-black uppercase tracking-[0.2em] mt-[2vh] mb-[3vh]">
          SCENE NOT FOUND
        </h2>

        {/* ডেসক্রিপশন */}
        <p className="text-gray-400 text-[4vw] md:text-[1.1vw] w-full max-w-none leading-relaxed mb-[6vh]">
          Looks like the page you are looking for ended up on the cutting room floor. Do not worry, let is get you back to the main feature.
        </p>

        {/* হোম বাটন */}
        <Link 
          href="/"
          className="group inline-flex items-center justify-center gap-[1vw] px-[8vw] py-[2vh] md:px-[3vw] md:py-[1.5vh] bg-red-600 text-white font-bold text-[3.5vw] md:text-[1vw] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-red-700 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] rounded-[4px]"
        >
          <FiHome className="text-[4.5vw] md:text-[1.2vw] transition-transform duration-300 group-hover:-translate-y-1" />
          BACK TO HOME
        </Link>
        
      </div>
    </section>
  );
}
