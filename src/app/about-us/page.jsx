import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata = {
  title: "About Final Cut Multimedia | Charlotte Video Production Agency",
  description: "Meet the Charlotte-based production team helping businesses communicate clearly through professional video and photography.",
};

const bookingUrl = "/contact-us-2#project-form";

const strengths = [
  "20+ years of production experience",
  "Business-focused creative approach",
  "Professional cinema cameras and production equipment",
  "Reliable communication throughout every project",
  "Full-service production from planning to delivery",
  "Long-term partnership mindset",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#080808] pt-28 lg:min-h-[92vh] lg:pt-0">
        <div className="mx-auto grid min-h-[inherit] max-w-[1600px] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 lg:py-36">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#DB0909]">About Us</p>
            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.98] sm:text-6xl lg:text-7xl">
              Final Cut Multimedia
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-9 text-white/70">
              A Charlotte-based video production agency helping businesses communicate clearly, build trust, and grow through purposeful visual content.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/50">
              With more than 20 years of production experience, we combine cinematic visuals, strategic storytelling, and a seamless process from planning through final delivery.
            </p>
            <a
              href={bookingUrl}
              className="mt-8 inline-flex w-fit items-center gap-3 border border-white/35 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] transition hover:border-[#DB0909] hover:bg-[#DB0909]"
            >
              Book a Call
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="relative flex min-h-[430px] items-end justify-center overflow-hidden bg-[#0d0d0d] lg:min-h-[92vh]">
            <Image
              src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781697016/Use_this_picture_k9euqa.jpg"
              alt="The Final Cut Multimedia team"
              width={1600}
              height={1200}
              priority
              unoptimized
              className="h-auto max-h-[92vh] w-full object-contain object-bottom"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080808]/35 via-transparent to-transparent lg:from-[#080808]/55" />
            <p className="absolute bottom-5 right-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/55 sm:bottom-8 sm:right-8">
              Charlotte, North Carolina
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#060606] px-5 py-20 lg:py-28">
        <div className="grid w-full gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Who We Are</p>
            <h2 className="mt-5 text-3xl font-black uppercase leading-tight sm:text-5xl">
              Great content should do more than look impressive.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-gray-400 sm:text-lg">
            <p>
              It should communicate clearly, build trust, strengthen your brand, and support your business goals.
              That belief shapes every project we produce.
            </p>
            <p>
              We partner with businesses, organizations, agencies, and nonprofits to create professional video and
              photography that helps them connect with their audience and stand out in a competitive market.
            </p>
            <p>
              From promotional videos and corporate events to recurring content and post-production, we manage the
              creative process from the first conversation through final delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-5 py-20 lg:py-28">
        <div className="relative min-h-[440px] overflow-hidden bg-black lg:min-h-[680px]">
          <Image
            src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781697016/Use_this_picture_k9euqa.jpg"
            alt="Tyrell Scott and the Final Cut Multimedia team"
            fill
            unoptimized
            sizes="100vw"
            className="object-contain object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Charlotte-Based. Nationwide Reach.</p>
            <p className="mt-3 max-w-2xl text-xl font-bold uppercase leading-snug sm:text-3xl">
              A dependable creative team behind every frame.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#060606] px-5 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">More Than a Production Company</p>
            <h2 className="mt-5 text-3xl font-black uppercase leading-tight sm:text-5xl">
              We&apos;re not simply a camera crew hired for the day.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-gray-400 sm:text-lg">
            <p>
              We help clients develop content strategies, simplify production, and build a useful library of assets
              for websites, social media, presentations, internal communication, recruiting, and marketing campaigns.
            </p>
            <p>
              Whether we are producing a single project or providing ongoing monthly content, our goal is always the
              same: create content with purpose and deliver an experience our clients can rely on.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 border-b border-[#DB0909] pb-1 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:text-[#DB0909]"
            >
              Explore Our Work
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a0a0a] px-5 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Why Businesses Choose Us</p>
            <h2 className="mt-5 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Clarity, quality, and trust at every stage.
            </h2>
          </div>
          <div className="grid border-t border-white/15 sm:grid-cols-2">
            {strengths.map((strength, index) => (
              <div
                key={strength}
                className={`flex min-h-28 items-start gap-4 border-b border-white/15 py-6 sm:px-6 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                }`}
              >
                <Check className="mt-1 shrink-0 text-[#DB0909]" size={19} strokeWidth={2.5} aria-hidden="true" />
                <p className="text-sm font-semibold uppercase leading-6 tracking-[0.08em] text-gray-200">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-black lg:py-28">
        <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Our Mission</p>
            <h2 className="mt-5 max-w-5xl text-3xl font-black uppercase leading-tight sm:text-5xl">
              Help businesses tell their story through professional content that inspires confidence and creates lasting value.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-gray-600">
              Planning your first project or looking for a long-term production partner? We&apos;d love to learn about your business and goals.
            </p>
            <a
              href={bookingUrl}
              className="mt-7 inline-flex items-center gap-3 bg-black px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#DB0909]"
            >
              Let&apos;s Create Something Meaningful
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
