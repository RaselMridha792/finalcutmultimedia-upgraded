"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const scrollContainerRef = useRef(null);

  // ডানে-বামে স্ক্রল করার ফাংশন
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.4;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // ভিডিও ডেটাতে কাস্টম থাম্বনেইল
  const videos = [
    { id: 1, title: "TMP 3D Printing Process", location: "CORPORATE VIDEO", url: "https://player.vimeo.com/video/1204810197?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/2173238621-32f318d3a88169d3caab849add7f6561f1476a6f36e5f852ab66ef0187a485db-d_1280?region=us" },
    { id: 2, title: "Brand Film", location: "FILMED & EDITED BY FCM", url: "https://player.vimeo.com/video/1205871706?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/2174567149-c286532092fdcc0d43a037378f20a85986a975cc9e95eb2ee763ff5b53c2359b-d_1280?region=us" },
    { id: 3, title: "Brand Story", location: "FILMED & EDITED BY FCM", url: "https://player.vimeo.com/video/1205946765?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/2174666848-fea743b70194887c218258ac8907dc9d7baefdc222f35a9783fdabb9d83d0a66-d_1280?region=us" },
    { id: 4, title: "Hackathon Event", location: "EVENT COVERAGE", url: "https://player.vimeo.com/video/1206157382?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/2174928930-1e03a828aa96b9a3ab09c8c876cf7871d08525ad308b888c99bd73833f3455ba-d_1280?region=us" },
    { id: 5, title: "John Amato", location: "AUTOMOTIVE", url: "https://player.vimeo.com/video/299709535?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/737888531-cd37140dedbcbae9737149e94a6c06b68ca42c944f17b815199130af799807ad-d_1280?region=us" },
    { id: 6, title: "JR Amato", location: "AUTOMOTIVE", url: "https://player.vimeo.com/video/299709658?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/737888717-147ec96d2fff1d2b2a5bc2a43339cca2dbd5431c4ad50264c1f3f2748520ad83-d_1280?region=us" },
    { id: 7, title: "Employment", location: "CORPORATE VIDEO", url: "https://player.vimeo.com/video/299711230?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/737890788-50e3069c1d1bb488205bdd8d66fb7dbd87778bb32630996b1a9c2f711a8bba44-d_1280?region=us" },
    { id: 8, title: "John Amato Chrysler Dodge Jeep Ram Promo", location: "AUTOMOTIVE", url: "https://player.vimeo.com/video/299711587?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/2077007196-6e8418fa630a9951e02aaecaa25a07d1c565a5bd30495be5b127043cd0f8507a-d_1280?region=us" },
    { id: 9, title: "Why Buy at Amato — The Amato Advantage", location: "AUTOMOTIVE", url: "https://player.vimeo.com/video/299713372?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/737893519-e65252f92fec4a72885dc7d090a6c4314e2583eb35fe8be812a5b693ecc122bf-d_1280?region=us" },
    { id: 10, title: "Crown Auto — Meet the Owner", location: "AUTOMOTIVE", url: "https://player.vimeo.com/video/322030118?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/764877615-f98763d5c74eae055852df5961560f177a9c2802581732ee3a1889384d8227f8-d_1280?region=us" },
    { id: 11, title: "Charlotte NC Raw & Uncut Commercial", location: "COMMERCIAL", url: "https://player.vimeo.com/video/347653169?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/798779624-d6c69f8634be0df57ce10d279c12e426e32180ebb77ace9c259ea376677e8158-d_1280?region=us" },
    { id: 12, title: "Charlotte Raw & Uncut — 1st Show", location: "COMMERCIAL", url: "https://player.vimeo.com/video/347653197?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/798044448-f50ce72b6a0bca625b15248435e068e8f784964286ff90d6a0a6fa7ace584fe2-d_1280?region=us" },
    { id: 13, title: "Matt", location: "TESTIMONIAL", url: "https://player.vimeo.com/video/390883821?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/855221693-97b63b3e1acea562b7e9b0b0cb981f81ed5878986accc3c57247b50dae544568-d_1280?region=us" },
    { id: 14, title: "Paris", location: "TESTIMONIAL", url: "https://player.vimeo.com/video/391904507?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/856778522-334e848dfe76cba7f95a8a78751bbf9d4fd505cad978a7428c4ee6552a69d9ee-d_1280?region=us" },
    { id: 15, title: "Cinematic Reel", location: "CINEMATIC", url: "https://player.vimeo.com/video/581678702?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/1203721993-2115c74fde5465fb002c6919762ea5b4d303f865e6ce1449ce1fb6cfc4f1c086-d_1280?region=us" },
    { id: 16, title: "Testimonial Video", location: "TESTIMONIAL", url: "https://player.vimeo.com/video/659551134?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/1332160407-350b95ee5371d2612e1eeffb950960d88b375abaafdb07fc4e7f5193a6991f9f-d_1280?region=us" },
    { id: 17, title: "PeriOp", location: "TRAINING VIDEO", url: "https://player.vimeo.com/video/670200023?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/1368122247-1c261761bdd9ac4be553febe3123b08fef41d852fd5623387e529956041dc36d-d_1280?region=us" },
    { id: 18, title: "Ted Wilson Jr.", location: "TESTIMONIAL", url: "https://player.vimeo.com/video/694443460?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/1405000745-e4947d60f8e624006363d77b91295e6667d78541073f2c87111b054ec7d5160b-d_1280?region=us" },
    { id: 19, title: "Race Day at Sam's Club 2022", location: "EVENT COVERAGE", url: "https://player.vimeo.com/video/729037812?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/1468462692-c172085ef7daf062eaa328e5b41065be114d2c6278fdaf79a7c2e28d04000c45-d_1280?region=us" },
    { id: 20, title: "Final Draft", location: "CINEMATIC", url: "https://player.vimeo.com/video/752557257?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/1512541404-ae707720f7bf9325ee620a04cdec919ca45606381235704514838bcc7ba3fe66-d_1280?region=us" },
    { id: 21, title: "2024 Fair Lending Forum", location: "EVENT COVERAGE", url: "https://player.vimeo.com/video/984427815?title=0&byline=0&portrait=0", thumbnail: "https://i.vimeocdn.com/video/1899872758-31b0f62ca7516771ca8cd125bb134c33be663d6062becdabfc767a98b864657c-d_1280?region=us" },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] py-[8vh] overflow-hidden">
      
      {/* হেডার সেকশন */}
      <div className="flex flex-col px-5 mb-[4vh]">
        <span className="text-gray-400 text-[3vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium">
          Cinematic Experience
        </span>
        <div className="flex items-center gap-[1.5vw] mt-[1vh]">
          {/* লাল অ্যাকসেন্ট */}
          <div className="w-[0.6vw] md:w-[0.2vw] h-[4vh] bg-red-600"></div>
          {/* EXCLUSIVE পরিবর্তন করে FEATURED করা হয়েছে */}
          <h2 className="text-white text-[6vw] md:text-[3vw] font-bold tracking-wide uppercase leading-none">
            FEATURED PRODUCTIONS
          </h2>
        </div>
      </div>

      {/* গ্যালারি স্লাইডার এরিয়া */}
      <div className="relative w-full group/slider">
        
        {/* লেফট অ্যারো */}
        <button 
          onClick={() => scroll("left")}
          className="absolute left-[1vw] top-1/2 -translate-y-1/2 z-30 text-white opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 bg-black/50 p-[1vw] rounded-full hover:bg-red-600 hover:text-white"
        >
          <svg className="w-[5vw] h-[5vw] md:w-[2.5vw] md:h-[2.5vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* রাইট অ্যারো */}
        <button 
          onClick={() => scroll("right")}
          className="absolute right-[1vw] top-1/2 -translate-y-1/2 z-30 text-white opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 bg-black/50 p-[1vw] rounded-full hover:bg-red-600 hover:text-white"
        >
          <svg className="w-[5vw] h-[5vw] md:w-[2.5vw] md:h-[2.5vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* ২-রো ভিডিও কার্ড কন্টেইনার */}
        <div 
          ref={scrollContainerRef}
          className="grid grid-rows-1 md:grid-rows-2 grid-flow-col auto-cols-[85vw] md:auto-cols-[40vw] lg:auto-cols-[32vw] gap-[4vw] md:gap-[2vw] px-5 pb-[2vh] overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth"
        >
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="relative w-full h-[35vh] md:h-[35vh] group cursor-pointer overflow-hidden bg-black snap-center flex-shrink-0"
              onClick={() => setSelectedVideo(video.url)}
            >
              <Image 
                src={video.thumbnail} 
                alt={video.title}
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-[800ms] ease-out"
                unoptimized
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* স্মুথ অ্যানিমেটেড বর্ডার (রেড থিম) */}
              <div className="absolute top-0 left-0 h-[0.5vw] md:h-[0.2vw] w-0 bg-red-600 transition-all duration-[600ms] ease-in-out group-hover:w-full z-20"></div>
              <div className="absolute top-0 right-0 w-[0.5vw] md:w-[0.2vw] h-0 bg-red-600 transition-all duration-[600ms] ease-in-out group-hover:h-full z-20"></div>
              <div className="absolute bottom-0 right-0 h-[0.5vw] md:h-[0.2vw] w-0 bg-red-600 transition-all duration-[600ms] ease-in-out group-hover:w-full z-20"></div>
              <div className="absolute bottom-0 left-0 w-[0.5vw] md:w-[0.2vw] h-0 bg-red-600 transition-all duration-[600ms] ease-in-out group-hover:h-full z-20"></div>

              {/* ডিফল্ট টেক্সট */}
              <div className="absolute bottom-[3vh] left-[2vw] transition-all duration-[500ms] group-hover:opacity-0 group-hover:translate-y-[2vh]">
                <h3 className="text-white text-[4vw] md:text-[1.5vw] font-medium uppercase tracking-wider">
                  {video.title}
                </h3>
                <p className="text-gray-300 text-[2.5vw] md:text-[0.8vw] tracking-widest mt-[0.5vh]">
                  {video.location}
                </p>
              </div>

              {/* হোভার ইফেক্ট (স্মুথ টেক্সট ফেড-ইন, রেড থিম) */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] ease-in-out flex flex-col justify-between p-[2vw] z-10">
                
                <div className="flex gap-[1vw] items-center translate-y-[2vh] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[700ms] ease-out delay-[100ms]">
                  <span className="text-white text-[2vw] md:text-[0.8vw] tracking-widest uppercase">FEATURED</span>
                  <div className="w-[0.2vw] md:w-[0.1vw] h-[2vh] bg-red-600"></div>
                  <span className="text-gray-300 text-[2vw] md:text-[0.8vw] tracking-widest uppercase">PRODUCTION</span>
                </div>

                <div className="mt-auto mb-[2vh] translate-y-[2vh] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[700ms] ease-out delay-[200ms]">
                  <h3 className="text-white text-[5vw] md:text-[2vw] font-bold uppercase leading-tight">
                    {video.title}
                  </h3>
                  <p className="text-red-500 text-[3vw] md:text-[0.9vw] mt-[1vh] font-medium tracking-wider">
                    {video.location}
                  </p>
                </div>

                <div className="bg-red-600 text-white self-end px-[3vw] py-[1.5vh] md:px-[1.5vw] md:py-[1vh] text-[2.5vw] md:text-[0.7vw] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-red-600 transition-colors translate-y-[2vh] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-[700ms] ease-out delay-[300ms]">
                  WATCH VIDEO
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ভিডিও প্লেয়ার Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-[5vh] right-[5vw] text-white hover:text-red-500 transition-colors flex items-center gap-[1vw]"
          >
            <span className="text-[3.5vw] md:text-[1vw] uppercase tracking-widest">Close</span>
            <svg className="w-[8vw] h-[8vw] md:w-[3vw] md:h-[3vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="w-[95vw] h-[35vh] md:w-[75vw] md:h-[75vh] border-[0.2vw] border-red-600 bg-black relative shadow-2xl">
            <iframe 
              src={`${selectedVideo}&autoplay=1`} 
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* গ্লোবাল CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
