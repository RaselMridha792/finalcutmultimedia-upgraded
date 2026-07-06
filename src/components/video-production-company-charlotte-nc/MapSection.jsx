"use client";

import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function MapSection() {
  return (
    <section className="w-full bg-black py-[10vh] px-5">
      <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-2 gap-[4vw] items-center">

        {/* বাম পাশ: কন্টাক্ট ইনফো */}
        <div className="flex flex-col gap-[3vh]">
          <h2 className="text-white text-[7vw] md:text-[2.5vw] font-black uppercase tracking-wider">
            SERVING THE <span className="text-red-600">CHARLOTTE</span> AREA
          </h2>
          <p className="text-gray-400 text-[3.5vw] md:text-[1vw] leading-relaxed">
            We are proud to be your local video production partner in Charlotte, NC. From corporate events to drone photography, we cover the entire region with precision and creativity.
          </p>

          <div className="flex flex-col gap-[2vh] mt-[2vh]">
            <div className="flex items-center gap-[1vw] text-white">
              <FiMapPin className="text-red-600 text-[5vw] md:text-[1.5vw]" />
              <span className="text-[3.5vw] md:text-[1vw]">Charlotte, North Carolina, USA</span>
            </div>
            <div className="flex items-center gap-[1vw] text-white">
              <FiPhone className="text-red-600 text-[5vw] md:text-[1.5vw]" />
              <span className="text-[3.5vw] md:text-[1vw]">+704 491 1283</span>
            </div>
            <div className="flex items-center gap-[1vw] text-white">
              <FiMail className="text-red-600 text-[5vw] md:text-[1.5vw]" />
              <span className="text-[3.5vw] md:text-[1vw]">info@finalcutmultimedia.com</span>
            </div>
          </div>
        </div>


        <div className="w-full h-[50vh] md:h-[60vh] border-[0.2vw] border-white/10 overflow-hidden relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208225.8601550993!2d-80.99312353120611!3d35.20311796590214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a319d640b64d%3A0x701b97950c05763!2sCharlotte%2C%2C%20NC%2C%20USA!5e0!3m2!1sen!2sbd!4v1719062328000!5m2!1sen!2sbd" 
            className="w-full h-full"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Charlotte Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}