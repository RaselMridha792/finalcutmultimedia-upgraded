import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

const defaultProcess = [
  ["01", "Discovery Call", "We start by understanding your vision, goals, audience, and project requirements."],
  ["02", "Pre-Production", "We plan the creative direction, script, schedule, locations, and production details."],
  ["03", "Production", "Our team captures professional footage and audio with cinema-grade equipment."],
  ["04", "Post-Production", "We shape the story through editing, color, sound, graphics, and a collaborative review."],
  ["05", "Delivery", "We deliver polished, optimized files ready for your website, campaigns, and internal channels."],
];

function ItemGrid({ title, items, sectionNumber, light = false }) {
  if (!items?.length) return null;

  return (
    <section className={light ? "bg-[#111]" : "bg-[#070707]"}>
      <div className="mx-auto w-full max-w-[2160px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 border-b border-white/15 pb-7 sm:flex-row sm:items-end sm:gap-8 lg:mb-14">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#DB0909]">
              {sectionNumber}
            </p>
            <h2 className="max-w-4xl text-3xl font-black uppercase leading-[1.05] sm:text-5xl">
              {title}
            </h2>
          </div>
          <p className="hidden text-xs font-semibold uppercase tracking-[0.3em] text-white/35 lg:block">
            Final Cut Multimedia
          </p>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const label = typeof item === "string" ? item : item.label;
            const desc = typeof item === "string" ? null : item.desc;
            return (
              <article
                key={label}
                className="group relative min-h-36 overflow-hidden border-b border-r border-white/15 bg-black/20 p-6 transition-colors duration-500 hover:bg-[#DB0909] sm:min-h-44 sm:p-8"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-[#DB0909] transition-colors group-hover:text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-8 max-w-sm text-base font-bold uppercase leading-7 tracking-[0.06em] text-white sm:text-lg">
                  {label}
                </p>
                {desc && (
                  <p className="mt-3 max-w-md text-sm font-normal leading-6 text-white/60 transition-colors group-hover:text-white/85">
                    {desc}
                  </p>
                )}
                <ArrowUpRight
                  className="absolute bottom-6 right-6 translate-y-3 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  size={21}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ServicePage({
  eyebrow,
  title,
  heroText,
  image,
  introTitle,
  introParagraphs,
  servicesTitle,
  services,
  secondarySections = [],
  showProcess = true,
  whyTitle = "Why Choose Final Cut Multimedia?",
  why,
  faqs = [],
  ctaTitle,
  ctaText,
}) {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <Image
          src={image}
          alt={`${eyebrow} by Final Cut Multimedia`}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center scale-[1.01]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/40" />
        <div className="absolute inset-5 border border-white/15 sm:inset-8" />

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[2160px] px-6 pb-16 pt-36 sm:px-14 sm:pt-40 lg:px-12 lg:pb-24 xl:px-16">
          <div className="max-w-6xl">
            <p className="mb-5 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.35em] text-[#ff3131] sm:text-sm">
              <span className="h-px w-10 bg-[#DB0909]" />
              {eyebrow}
            </p>
            <h1 className="text-[2rem] font-black uppercase leading-none tracking-[-0.03em] wrap-break-word hyphens-none sm:text-6xl sm:leading-[0.96] lg:text-7xl xl:text-8xl">
              {title}
            </h1>
            <div className="mt-8 grid grid-cols-1 max-w-5xl gap-7 border-t border-white/30 pt-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <p className="min-w-0 text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">{heroText}</p>
              <Link
                href="/contact-us-2#project-form"
                className="group inline-flex w-fit items-center gap-3 bg-[#DB0909] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
              >
                Start a Project
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <ArrowDown className="absolute bottom-7 right-8 z-10 hidden animate-bounce text-white/60 sm:block" size={22} aria-hidden="true" />
      </section>

      <section className="bg-[#070707]">
        <div className="mx-auto grid w-full max-w-[2160px] grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
          <div className="relative min-h-[380px] overflow-hidden border border-white/15 lg:min-h-[600px]">
            <Image
              src={image}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-xs font-bold uppercase tracking-[0.3em] text-white/80">
              Strategy · Story · Craft
            </p>
          </div>

          <div className="flex flex-col justify-center lg:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#DB0909]">The Opportunity</p>
            <h2 className="mt-5 text-3xl font-black uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
              {introTitle}
            </h2>
            <div className="mt-8 space-y-6 border-l border-[#DB0909] pl-6 text-lg leading-9 text-white/65 sm:pl-8 sm:text-xl sm:leading-10">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ItemGrid title={servicesTitle} items={services} sectionNumber="Capabilities / 01" light />
      {secondarySections.map((section, index) => (
        <ItemGrid
          key={section.title}
          title={section.title}
          items={section.items}
          sectionNumber={`Details / ${String(index + 2).padStart(2, "0")}`}
          light={index % 2 !== 0}
        />
      ))}

      {showProcess && (
        <section className="relative overflow-hidden bg-white text-black">
          <div className="absolute -right-20 top-0 select-none text-[18rem] font-black leading-none text-black/[0.025]" aria-hidden="true">
            FCM
          </div>
          <div className="relative mx-auto w-full max-w-[2160px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#DB0909]">Our Process</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-none sm:text-6xl">
              From first idea to final delivery.
            </h2>
            <div className="mt-14 grid grid-cols-1 border-l border-t border-black/20 md:grid-cols-5">
              {defaultProcess.map(([number, step, text]) => (
                <article key={step} className="border-b border-r border-black/20 p-6 lg:p-8">
                  <span className="text-sm font-black text-[#DB0909]">{number}</span>
                  <h3 className="mt-10 text-lg font-black uppercase">{step}</h3>
                  <p className="mt-4 text-base leading-7 text-black/60">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#070707]">
        <div className="mx-auto grid w-full max-w-[2160px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#DB0909]">The Final Cut Difference</p>
            <h2 className="mt-5 text-3xl font-black uppercase leading-[1.05] sm:text-5xl">{whyTitle}</h2>
          </div>
          <div className="grid grid-cols-1 border-t border-white/15 sm:grid-cols-2">
            {why.map((item, index) => (
              <div
                key={item}
                className={`flex min-h-28 gap-4 border-b border-white/15 py-6 sm:px-6 ${index % 2 === 0 ? "sm:border-r" : ""}`}
              >
                <Check className="mt-1 shrink-0 text-[#DB0909]" size={20} strokeWidth={2.5} aria-hidden="true" />
                <p className="text-base font-semibold uppercase leading-7 tracking-[0.05em] text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="bg-[#0a0a0a]">
          <div className="mx-auto w-full max-w-[2160px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#DB0909]">FAQ</p>
            <h2 className="mb-12 max-w-3xl text-3xl font-black uppercase leading-[1.05] sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {faqs.map(({ q, a }) => (
                <div key={q} className="py-8">
                  <h3 className="text-lg font-bold text-white sm:text-xl">{q}</h3>
                  <p className="mt-3 max-w-4xl text-base leading-8 text-white/60">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-[#DB0909] text-white">
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(135deg,transparent_45%,#000_45%,#000_55%,transparent_55%)] [background-size:18px_18px]" />
        <div className="relative mx-auto flex w-full max-w-[2160px] flex-col items-start justify-between gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:px-12 lg:py-24 xl:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/70">Have a project in mind?</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.98] sm:text-6xl">{ctaTitle}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{ctaText}</p>
          </div>
          <Link
            href="/contact-us-2#project-form"
            className="group inline-flex shrink-0 items-center gap-4 bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
          >
            Book a Discovery Call
            <ArrowUpRight size={19} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
