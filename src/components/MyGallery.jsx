"use client";

import { useState } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function MyGallery() {
  const images = [
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/496857656_2510228855980777_2259413147144370187_n.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/496844314_2510228925980770_7814908319192677181_n.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/C8120B90-0EBC-4602-98A8-4E7300316DA5-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/E8D4179E-7B88-4704-900F-A1D83B47BC86-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/955F7A7B-57A1-4184-8C37-9A412CA7F515-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/BEB0E30D-2371-4152-9A01-756D0182060C-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/a18d6f40-8c96-48f3-96a5-755fc26faeeb.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/487687200_2469551286715201_4647725941950816530_n.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_28201-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/492938573_2539452473058415_7828940050462539546_n.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/FCM_1535-scaled.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/openart-image__TppSKgk_1759689640429_raw.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/488528975_2472962053040791_5356663683752375839_n.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/openart-image_t8vy9ESm_1760035589171_raw.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/professional-video-production-for-car-dealers-1-768x439-1.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/508210860_2540904452913217_1003757841160592830_n-1.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/523447700_2574633039540358_7209740393799444155_n.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2836-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-1-1-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_1970.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_1972-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_0540-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/openart-image_4ldH5uBH_1757378030422_raw.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/openart-image_7HLeygA4_1757381102747_raw.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/openart-image_8xbdXJr1_1759437901847_raw.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/openart-image_TqnE_k4M_1757437194190_raw.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12); // শুরুতে ১২টি ছবি দেখাবে

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const loadMore = () => {
    setVisibleCount(images.length); // সব ছবি দেখাবে
  };

  return (
    <section className="bg-[#0A0A0A] py-[10vh] px-5">
      {/* হেডার */}
      <div className="text-center mb-[8vh]">
        <h2 className="text-white text-[8vw] md:text-[3vw] font-black uppercase tracking-widest mb-2">My Gallery</h2>
        <p className="text-gray-400 text-[3.5vw] md:text-[1vw] uppercase tracking-[0.2em]">Capturing life is moments through my lens</p>
      </div>

      {/* গ্যালারি গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw]">
        {images.slice(0, visibleCount).map((src, index) => (
          <div 
            key={index} 
            className="relative w-full h-[400px] overflow-hidden cursor-pointer group border border-white/10"
            onClick={() => setCurrentIndex(index)}
          >
            <Image 
              src={src} 
              alt={`Gallery ${index}`} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Load More বাটন */}
      {visibleCount < images.length && (
        <div className="flex justify-center mt-[8vh]">
          <button 
            onClick={loadMore}
            className="bg-red-600 text-white px-[6vw] py-[2vh] md:px-[3vw] md:py-[1.5vh] font-bold text-[3.5vw] md:text-[1vw] uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-600/30"
          >
            LOAD MORE
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95">
          <button className="absolute top-5 right-5 text-white text-3xl hover:text-red-600" onClick={() => setCurrentIndex(null)}>
            <FiX />
          </button>
          
          <button className="absolute left-5 text-white text-4xl hover:text-red-600" onClick={prevImg}>
            <FiChevronLeft />
          </button>
          
          <div className="relative w-[85vw] h-[80vh]">
            <Image 
              src={images[currentIndex]} 
              alt="Full" 
              fill 
              className="object-contain" 
            />
          </div>

          <button className="absolute right-5 text-white text-4xl hover:text-red-600" onClick={nextImg}>
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}