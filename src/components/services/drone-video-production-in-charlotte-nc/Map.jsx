"use client";

export default function Map() {
  return (
    <section className="w-full bg-[#0A0A0A] py-[12vh] px-5 text-white font-['Segoe_UI',Arial,sans-serif]">
      <div className="mx-auto w-full max-w-none">
        
        {/* Section Heading */}
        <div className="text-center mb-[8vh]">
          <h2 className="text-white text-[7vw] md:text-[2.5vw] font-black uppercase tracking-widest mb-[2vh]">
            SERVING CHARLOTTE, NC
          </h2>
          <p className="text-gray-400 text-[3.5vw] md:text-[1.1vw]">
            Proudly providing professional drone video production across the Charlotte, NC area.
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full h-[50vh] md:h-[60vh] border border-white/10 p-[0.5vw] bg-[#121212] rounded-[8px] overflow-hidden shadow-2xl">
          <iframe
            title="Charlotte, NC Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208226.70327339898!2d-80.97022068069502!3d35.203126955364176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a028014526d5%3A0x6335118742e2760a!2sCharlotte%2C%20NC%2C%20USA!5e0!3m2!1sen!2sbd!4v1719143391295!5m2!1sen!2sbd"
            className="w-full h-full grayscale-[50%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
