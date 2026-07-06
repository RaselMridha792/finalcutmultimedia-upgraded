"use client";

import { useState } from "react";
import Image from "next/image";

export default function DroneRequestForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    project: "",
    referral: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="w-full bg-[#0A0A0A] py-[10vh] px-5 text-white font-['Segoe_UI',Arial,sans-serif]">
      <div className="mx-auto w-full max-w-none">
        
        {/* Header Section */}
        <div className="text-center mb-[8vh] border-b border-white/10 pb-[6vh]">
          <h2 className="text-white text-[7vw] md:text-[2.5vw] font-black uppercase tracking-widest mb-[2vh]">
            REQUEST DRONE VIDEO PRODUCTION SERVICES
          </h2>
          <p className="text-gray-400 text-[3.5vw] md:text-[1vw] mb-[4vh]">
            Contact us to discuss your drone video production needs and learn how professional aerial content can support your project.
          </p>
          <button className="border border-white/30 px-[6vw] py-[2vh] md:px-[3vw] md:py-[1.5vh] text-[3.5vw] md:text-[0.9vw] font-bold uppercase hover:bg-white hover:text-black transition-colors">
            REQUEST INFORMATION
          </button>
        </div>

        {/* Logo Section */}
       <div className="flex justify-center mb-[6vh]">
  <div className="relative w-[120px] h-[120px] md:w-[80px] md:h-[80px]">
    <Image
      src="https://res.cloudinary.com/dubsado/image/upload/v1650672421/wtiijcvrtjhstvdkntnm.png"
      alt="Final Cut Multimedia Logo"
      fill
      sizes="(max-width: 768px) 120px, 80px"
      className="object-contain"
      priority
    />
  </div>
</div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-[3vh]">
          
          <div className="grid grid-cols-1 gap-[2vh]">
            <input type="text" name="companyName" placeholder="Company Name?" onChange={handleChange} className="w-full bg-[#121212] border border-white/10 p-[3vw] md:p-[1vw] text-white focus:border-red-600 outline-none transition-colors" />
            
            <input type="text" name="firstName" placeholder="Your First Name*" required onChange={handleChange} className="w-full bg-[#121212] border border-white/10 p-[3vw] md:p-[1vw] text-white focus:border-red-600 outline-none transition-colors" />
            
            <input type="text" name="lastName" placeholder="Your Last Name*" required onChange={handleChange} className="w-full bg-[#121212] border border-white/10 p-[3vw] md:p-[1vw] text-white focus:border-red-600 outline-none transition-colors" />
            
            <input type="tel" name="phone" placeholder="Phone*" required onChange={handleChange} className="w-full bg-[#121212] border border-white/10 p-[3vw] md:p-[1vw] text-white focus:border-red-600 outline-none transition-colors" />
            
            <input type="email" name="email" placeholder="Email*" required onChange={handleChange} className="w-full bg-[#121212] border border-white/10 p-[3vw] md:p-[1vw] text-white focus:border-red-600 outline-none transition-colors" />
            
            <textarea name="project" placeholder="Tell us a little about this project*" required onChange={handleChange} className="w-full h-[20vh] bg-[#121212] border border-white/10 p-[3vw] md:p-[1vw] text-white focus:border-red-600 outline-none transition-colors" />
            
            {/* Dropdown - Referencing image_0b6d36.png for options */}
            <select name="referral" onChange={handleChange} className="w-full bg-[#121212] border border-white/10 p-[3vw] md:p-[1vw] text-white focus:border-red-600 outline-none transition-colors cursor-pointer">
              <option value="">How did you hear about us?*</option>
              <option value="google">Google</option>
              <option value="social-media">Social Media</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex justify-end pt-[2vh]">
            <button type="submit" className="bg-red-600 text-white px-[8vw] py-[2vh] md:px-[3vw] md:py-[1.5vh] font-bold text-[3.5vw] md:text-[0.9vw] uppercase hover:bg-red-700 transition-colors">
              BOOK MEETING
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}
