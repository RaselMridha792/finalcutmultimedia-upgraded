"use client";
import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const expectations = [
    { title: '15-minute consultation', text: 'A focused introduction to your goals, budget, and timeline.' },
    { title: 'Discuss your goals and budget', text: 'We’ll align on the message, audience, and creative direction.' },
    { title: 'Review creative ideas', text: 'Together we’ll shape the production approach and visual strategy.' },
    { title: 'Receive recommendations', text: 'You’ll leave with clear next steps and thoughtful, no-pressure recommendations.' },
  ];

  return (
    <main className="min-h-screen bg-[#060606] text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[72vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg"
            alt="Final Cut Multimedia team discussing a project"
            className="h-full w-full object-cover"
            fill
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-none px-5 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-600">Contact us</p>
          <h1 className="max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Whether you&apos;re planning a corporate video, event coverage, recurring monthly content, or another production project, we&apos;re here to help.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#project-form"
              className="rounded bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700"
            >
              Book My Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Main Intro & Photo Section */}
      <section className="bg-[#0a0a0a] px-5 py-20">
        <div className="mx-auto grid w-full max-w-none gap-12 lg:grid-cols-2 lg:items-center">

          {/* বাম পাশ: কন্টেন্ট */}
          <div className="space-y-6 flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Ready to talk?</p>
              <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                Tell us about your goals, and our team will guide you through the next steps.
              </h2>
              <p className="text-base leading-8 text-gray-400">
                We&apos;ll discuss your vision, answer your questions, and recommend the best production approach based on your needs. No matter where you are in the planning process, we&apos;d love to hear about your project.
              </p>
            </div>

            <div className="rounded border border-white/10 bg-[#111111] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">What happens next</p>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                When you book a call, you&apos;ll meet directly with Tyrell Scott, Owner of Final Cut Multimedia, and Jane, our Operations Coordinator. We&apos;ll learn about your goals, answer your questions, and recommend the best video solution for your business.
              </p>
            </div>
          </div>

          {/* ডান পাশ: ইমেজ কন্টেইনার (কোনো ব্যাকগ্রাউন্ড বা ফিক্সড বর্ডার ছাড়া যাতে ছবি না কাটে) */}
          <div className="w-full flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781697016/Use_this_picture_k9euqa.jpg"
              alt="Tyrell Scott and Jane of Final Cut Multimedia"
              width={800}
              height={600}
              className="w-full h-auto object-contain rounded border border-white/10"
              unoptimized
            />
          </div>

        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[#060606] px-5 py-20">
        <div className="mx-auto w-full max-w-none">
          <div className="mb-10 flex flex-col gap-3 border-l-4 border-red-600 pl-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">What to expect</p>
            <h2 className="text-3xl font-black uppercase sm:text-4xl">A clear, thoughtful first conversation.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {expectations.map((item) => (
              <div key={item.title} className="flex flex-col justify-between rounded border border-white/10 bg-[#0a0a0a] p-6">
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-[0.15em] text-white leading-snug">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form / Get Started Section */}
      <section id="project-form" className="scroll-mt-24 border-t border-white/10 bg-[#0a0a0a] px-5 py-20">
        <div className="mx-auto w-full max-w-none">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Ready to get started?</p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Let&apos;s create professional video content that helps your business grow.</h2>
          </div>

          <div className="rounded border border-white/10 bg-[#111111] p-4 sm:p-8">
            <iframe
              src="https://hello.dubsado.com/public/form/view/615ca7817e143cd0e3e7e381"
              frameBorder="0"
              style={{ width: '100%', minWidth: '100%', overflow: 'hidden', height: '1560px' }}
              scrolling="no"
              title="Dubsado contact form"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
