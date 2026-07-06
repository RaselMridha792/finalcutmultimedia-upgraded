"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const TIMEZONES = [
  { label: "Asia/Dhaka (UTC+6)", value: "Asia/Dhaka", offset: 6 },
  { label: "America/New_York (UTC-4)", value: "America/New_York", offset: -4 },
  { label: "America/Los_Angeles (UTC-7)", value: "America/Los_Angeles", offset: -7 },
  { label: "Europe/London (UTC+1)", value: "Europe/London", offset: 1 },
  { label: "Europe/Paris (UTC+2)", value: "Europe/Paris", offset: 2 },
  { label: "Asia/Tokyo (UTC+9)", value: "Asia/Tokyo", offset: 9 },
  { label: "Asia/Dubai (UTC+4)", value: "Asia/Dubai", offset: 4 },
  { label: "Australia/Sydney (UTC+10)", value: "Australia/Sydney", offset: 10 },
  { label: "UTC (UTC+0)", value: "UTC", offset: 0 },
];

const HOURS = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM",
];

const HOW_DID_YOU_HEAR = ["Google", "Social Media", "Referral", "Other"];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function ConsultationSection() {
  const [activeTab, setActiveTab] = useState("availability");
  const [selectedTimezone, setSelectedTimezone] = useState(TIMEZONES[0]);
  const [showTzDropdown, setShowTzDropdown] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentTimeString, setCurrentTimeString] = useState("");
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    company: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    projectDetails: "",
    howHeard: "",
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setCurrentDate(now);
      const opts = {
        timeZone: selectedTimezone.value,
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: true, day: "2-digit", month: "long", year: "numeric",
        weekday: "long",
      };
      setCurrentTimeString(now.toLocaleString("en-US", opts));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [selectedTimezone]);

  const today = new Date();
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const selectedDateObj = selectedDay ? new Date(year, month, selectedDay) : null;
  const dayName = selectedDateObj ? selectedDateObj.toLocaleDateString("en-US", { weekday: "long" }) : "";
  const fullDateStr = selectedDateObj ? selectedDateObj.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "";

  const isPastDate = (day) => {
    const d = new Date(year, month, day);
    return d < today && d.toDateString() !== today.toDateString();
  };

  const handleDayClick = (day) => {
    if (isPastDate(day)) return;
    setSelectedDay(day);
    setSelectedTime(null);
  };

  const prevMonth = () => {
    setCalendarDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCalendarDate(new Date(year, month + 1, 1));
  };

  const validateForm = () => {
    const e = {};
    if (!form.company || !form.company.trim()) e.company = "Required";
    if (!form.firstName || !form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName || !form.lastName.trim()) e.lastName = "Required";
    if (!form.phone || !form.phone.trim()) e.phone = "Required";
    if (!form.email || !form.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.projectDetails || !form.projectDetails.trim()) e.projectDetails = "Required";
    if (!form.howHeard) e.howHeard = "Required";
    return e;
  };

  const handleBookMeeting = () => {
    const e = validateForm();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    alert(`Meeting booked successfully!

Date: ${fullDateStr}
Time: ${selectedTime}
Timezone: ${selectedTimezone.label}`);
  };

  const handleSubmitNext = () => {
    if (!selectedDay || !selectedTime) {
      alert("Please select a date and time first.");
      return;
    }
    setActiveTab("form");
  };

  const handleInput = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => { const n = { ...err }; delete n[field]; return n; });
  };

  const isPrevMonthDisabled = () => {
    return year === today.getFullYear() && month === today.getMonth();
  };

  return (
    <section className="font-['Segoe_UI',Arial,sans-serif] bg-[#0a0a0a] text-white py-[8vh] px-5">
      {/* Top Banner */}
      <div className="max-w-[85vw] mx-auto bg-[#111] text-center py-[6vh] px-5 border border-white/10 border-b-2 border-b-[#cc0000] rounded-t-xl">
        <h1 className="text-[clamp(18px,3vmin,28px)] font-black tracking-[0.05em] text-white mb-3 uppercase">
          REQUEST A VIDEO PRODUCTION CONSULTATION
        </h1>
        <p className="text-[#aaa] text-sm mb-6">
          If you&apos;re planning a video project and want professional guidance, we&apos;re here to help you explore the best approach.
        </p>
        <button
          className="bg-transparent border-2 border-[#cc0000] text-white py-2.5 px-7 text-[13px] font-bold tracking-[0.08em] cursor-pointer uppercase transition-colors duration-200 hover:bg-[#cc0000]/10"
          onClick={() => document.getElementById("booking-widget").scrollIntoView({ behavior: "smooth" })}
        >
          REQUEST A CONSULTATION
        </button>
      </div>

      {/* Real-time clock bar */}
      <div className="max-w-[85vw] mx-auto bg-[#1a1a1a] border-x border-b border-white/10 py-3 px-6 flex items-center gap-2 text-[13px] text-[#ccc]">
        <span className="text-base">🕐</span>
        <span className="font-semibold text-white">{currentTimeString}</span>
        <span className="text-[#cc0000] font-medium"> — {selectedTimezone.label}</span>
      </div>

      {/* Booking Widget */}
      <div id="booking-widget" className="w-full max-w-[85vw] mx-auto bg-white rounded-b-xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        {/* Tabs */}
        <div className="flex border-b-2 border-[#eee]">
          <button
            className={`flex-1 p-4 bg-none border-none text-[15px] font-semibold cursor-pointer border-b-[3px] transition-all duration-200 ${activeTab === "availability" ? "text-[#cc0000] border-b-[#cc0000]" : "text-[#555] border-b-transparent"
              }`}
            onClick={() => setActiveTab("availability")}
          >
            Availability
          </button>
          <button
            className={`flex-1 p-4 bg-none border-none text-[15px] font-semibold cursor-pointer border-b-[3px] transition-all duration-200 ${activeTab === "form" ? "text-[#cc0000] border-b-[#cc0000]" : "text-[#555] border-b-transparent"
              }`}
            onClick={() => setActiveTab("form")}
          >
            Form
          </button>
        </div>

        {/* AVAILABILITY TAB */}
        {activeTab === "availability" && (
          <div className="flex flex-col lg:flex-row gap-0 min-h-[520px]">
            {/* Left: Calendar */}
            <div className="w-full lg:w-[55%] py-8 px-6 md:px-8 border-b lg:border-b-0 lg:border-r border-[#eee]">
              <h2 className="text-[20px] font-extrabold text-[#111] mb-1">Book a Zoom Meeting</h2>
              <p className="text-[#cc0000] font-bold text-sm mb-1">Final Cut Multimedia</p>
              <p className="text-xs text-[#888] mb-4">⏱ Appointment Duration: 15 minutes</p>

              {/* Timezone selector */}
              <div className="relative mb-5">
                <button className="bg-[#f5f5f5] border border-[#ddd] py-[7px] px-3.5 rounded-[4px] text-xs font-semibold cursor-pointer text-[#333] whitespace-nowrap overflow-hidden text-ellipsis w-full text-left" onClick={() => setShowTzDropdown(!showTzDropdown)}>
                  🌐 {selectedTimezone.label} ▾
                </button>
                {showTzDropdown && (
                  <div className="absolute top-[calc(100%+4px)] left-0 z-[100] bg-white border border-[#ddd] rounded-md shadow-sm w-[240px] max-h-[220px] overflow-y-auto">
                    {TIMEZONES.map((tz) => (
                      <div
                        key={tz.value}
                        className={`py-2.5 px-3.5 text-[13px] cursor-pointer text-[#333] transition-colors duration-150 hover:bg-gray-100 ${tz.value === selectedTimezone.value ? "bg-[#fff0f0] text-[#cc0000] font-bold" : ""
                          }`}
                        onClick={() => { setSelectedTimezone(tz); setShowTzDropdown(false); }}
                      >
                        {tz.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Calendar header */}
              <div className="flex items-center justify-between mb-3">
                <button
                  className={`bg-none border border-[#ddd] w-8 h-8 rounded-full text-[18px] flex items-center justify-center text-[#333] leading-none ${isPrevMonthDisabled() ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                    }`}
                  onClick={prevMonth}
                  disabled={isPrevMonthDisabled()}
                >
                  ‹
                </button>
                <span className="font-bold text-[15px] text-[#111]">{MONTHS[month]} {year}</span>
                <button className="bg-none border border-[#ddd] w-8 h-8 rounded-full text-[18px] cursor-pointer flex items-center justify-center text-[#333] leading-none" onClick={nextMonth}>›</button>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1">
                {DAYS.map((d) => (
                  <div key={d} className="text-center text-[11px] font-bold text-[#999] py-1">{d}</div>
                ))}
                {/* Empty cells */}
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={"empty-" + i} />
                ))}
                {/* Day cells */}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                  const past = isPastDate(day);
                  const isSelected = selectedDay === day;
                  return (
                    <div
                      key={day}
                      className={`text-center py-2 px-1 rounded-full text-[13px] cursor-pointer font-medium transition-all duration-150 select-none ${past ? "text-[#ccc] cursor-not-allowed" : isSelected ? "bg-[#cc0000] text-white font-bold" : "text-[#111] font-bold hover:bg-gray-100"
                        }`}
                      onClick={() => handleDayClick(day)}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Time Slots */}
            {selectedDay && (
              <div className="w-full lg:w-[45%] py-8 px-6 flex flex-col gap-3 bg-[#fafafa]">
                <div className="mb-2">
                  <p className="font-extrabold text-base text-[#111] mb-0">{dayName}</p>
                  <p className="text-xs text-[#888] mb-0">{fullDateStr}</p>
                </div>
                <div className="flex-1 overflow-y-auto flex flex-col gap-1.5 h-[320px] pr-[2px]">
                  {HOURS.map((h) => (
                    <button
                      key={h}
                      className={`bg-white border-[1.5px] border-[#ddd] rounded-[4px] py-[9px] px-2 text-[13px] font-semibold cursor-pointer text-[#333] transition-all duration-150 text-center ${selectedTime === h ? "bg-[#cc0000] border-[#cc0000] text-white" : "hover:border-[#cc0000]"
                        }`}
                      onClick={() => setSelectedTime(h)}
                    >
                      {h}
                    </button>
                  ))}
                </div>
                <button
                  className={`border-none rounded-[4px] py-3 px-2 font-bold text-[13px] tracking-wide ${!selectedTime ? "bg-[#e8b4b4] cursor-not-allowed text-white" : "bg-[#cc0000] text-white cursor-pointer"
                    }`}
                  onClick={handleSubmitNext}
                >
                  Submit and Next →
                </button>
              </div>
            )}

            {!selectedDay && (
              <div className="w-full lg:w-[45%] flex items-center justify-center text-[#999] text-sm p-8 bg-[#fafafa]">
                <div className="text-center">
                  <p className="text-[40px] mb-3">📅</p>
                  <p className="font-semibold text-[#777]">Select a date to see available times</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* FORM TAB */}
        {activeTab === "form" && (
          <div className="pt-7 px-8 pb-8 text-[#111]">
            {/* Logo area */}
            <div className="text-center mb-5">
              <div className="inline-flex items-center justify-center mb-2">
                <Image
                  src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
                  alt="Final Cut Multimedia"
                  width={120}
                  height={60}
                  unoptimized
                  className="w-[120px] h-auto object-contain"
                />
              </div>
            </div>

            {/* Selected slot summary */}
            {selectedDay && selectedTime && (
              <div className="bg-[#fff8f8] border border-[#f5c6c6] rounded-md py-2.5 px-4 text-[13px] text-[#cc0000] font-semibold mb-5 text-center">
                📅 {fullDateStr} &nbsp;|&nbsp; ⏰ {selectedTime} &nbsp;|&nbsp; 🌐 {selectedTimezone.label}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#333] tracking-wide">Company Name*</label>
                <input
                  className={`border-[1.5px] border-[#ddd] rounded-[4px] py-2.5 px-3 text-[13px] text-[#111] bg-[#fafafa] outline-none transition-colors duration-150 font-inherit ${errors.company ? "border-[#cc0000] bg-[#fff8f8]" : "focus:border-gray-400"
                    }`}
                  value={form.company} onChange={handleInput("company")} placeholder="Your Company"
                />
                {errors.company && <span className="text-[11px] text-[#cc0000] font-semibold">{errors.company}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#333] tracking-wide">Your First Name*</label>
                <input
                  className={`border-[1.5px] border-[#ddd] rounded-[4px] py-2.5 px-3 text-[13px] text-[#111] bg-[#fafafa] outline-none transition-colors duration-150 font-inherit ${errors.firstName ? "border-[#cc0000] bg-[#fff8f8]" : "focus:border-gray-400"
                    }`}
                  value={form.firstName} onChange={handleInput("firstName")} placeholder="First Name"
                />
                {errors.firstName && <span className="text-[11px] text-[#cc0000] font-semibold">{errors.firstName}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#333] tracking-wide">Your Last Name*</label>
                <input
                  className={`border-[1.5px] border-[#ddd] rounded-[4px] py-2.5 px-3 text-[13px] text-[#111] bg-[#fafafa] outline-none transition-colors duration-150 font-inherit ${errors.lastName ? "border-[#cc0000] bg-[#fff8f8]" : "focus:border-gray-400"
                    }`}
                  value={form.lastName} onChange={handleInput("lastName")} placeholder="Last Name"
                />
                {errors.lastName && <span className="text-[11px] text-[#cc0000] font-semibold">{errors.lastName}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#333] tracking-wide">Phone*</label>
                <input
                  className={`border-[1.5px] border-[#ddd] rounded-[4px] py-2.5 px-3 text-[13px] text-[#111] bg-[#fafafa] outline-none transition-colors duration-150 font-inherit ${errors.phone ? "border-[#cc0000] bg-[#fff8f8]" : "focus:border-gray-400"
                    }`}
                  value={form.phone} onChange={handleInput("phone")} placeholder="+1 234 567 890" type="tel"
                />
                {errors.phone && <span className="text-[11px] text-[#cc0000] font-semibold">{errors.phone}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#333] tracking-wide">Email*</label>
                <input
                  className={`border-[1.5px] border-[#ddd] rounded-[4px] py-2.5 px-3 text-[13px] text-[#111] bg-[#fafafa] outline-none transition-colors duration-150 font-inherit ${errors.email ? "border-[#cc0000] bg-[#fff8f8]" : "focus:border-gray-400"
                    }`}
                  value={form.email} onChange={handleInput("email")} placeholder="you@email.com" type="email"
                />
                {errors.email && <span className="text-[11px] text-[#cc0000] font-semibold">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
                <label className="text-xs font-bold text-[#333] tracking-wide">Tell us a little about this project:*</label>
                <textarea
                  className={`border-[1.5px] border-[#ddd] rounded-[4px] py-2.5 px-3 text-[13px] text-[#111] bg-[#fafafa] outline-none transition-colors duration-150 font-inherit resize-y min-h-[90px] ${errors.projectDetails ? "border-[#cc0000] bg-[#fff8f8]" : "focus:border-gray-400"
                    }`}
                  value={form.projectDetails}
                  onChange={handleInput("projectDetails")}
                  placeholder="Describe your video project..."
                  rows={4}
                />
                {errors.projectDetails && <span className="text-[11px] text-[#cc0000] font-semibold">{errors.projectDetails}</span>}
              </div>

              <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
                <label className="text-xs font-bold text-[#333] tracking-wide">How did you hear about us?*</label>
                <select
                  className={`border-[1.5px] border-[#ddd] rounded-[4px] py-2.5 px-3 text-[13px] text-[#111] bg-[#fafafa] outline-none transition-colors duration-150 font-inherit appearance-auto cursor-pointer ${errors.howHeard ? "border-[#cc0000] bg-[#fff8f8]" : "focus:border-gray-400"
                    }`}
                  value={form.howHeard}
                  onChange={handleInput("howHeard")}
                >
                  <option value="">Select</option>
                  {HOW_DID_YOU_HEAR.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                {errors.howHeard && <span className="text-[11px] text-[#cc0000] font-semibold">{errors.howHeard}</span>}
              </div>
            </div>

            <div className="flex justify-between items-center mt-7 pt-5 border-t border-[#eee]">
              <button className="bg-none border-[1.5px] border-[#ddd] py-2.5 px-5 rounded-[4px] font-bold text-[13px] cursor-pointer text-[#555] hover:bg-gray-50" onClick={() => setActiveTab("availability")}>
                &larr; Back
              </button>
              <button className="bg-[#cc0000] text-white border-none rounded-[4px] py-3 px-8 font-extrabold text-sm tracking-[0.12em] cursor-pointer uppercase hover:bg-[#b30000]" onClick={handleBookMeeting}>
                BOOK MEETING
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
