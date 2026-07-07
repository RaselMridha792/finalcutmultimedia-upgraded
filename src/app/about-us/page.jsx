import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const PAGE_URL = "https://finalcutmultimedia.com/about-us/";
const META_DESC =
  "Final Cut Multimedia offers high-quality video production, professional photography, and digital content creation. We craft stories that engage audiences and deliver impactful results. Serving Charlotte, NC and surrounding areas.";

// ================= লাইভ সাইটের হুবহু ১০০% SEO =================
export const metadata = {
  title: {
    absolute:
      "Final Cut Multimedia | Expert Video Production, Photography & Digital Content",
  },
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "About Us",
    description: META_DESC,
    url: PAGE_URL,
    siteName: "Final Cut Multimedia",
    modifiedTime: "2026-01-05T19:31:53+00:00",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fc__multimedia",
  },
  other: {
    "article:publisher": "https://www.facebook.com/finalcutphoto/",
    "article:modified_time": "2026-01-05T19:31:53+00:00",
    "twitter:label1": "Est. reading time",
    "twitter:data1": "4 minutes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Final Cut Multimedia | Expert Video Production, Photography & Digital Content",
      isPartOf: { "@id": "https://finalcutmultimedia.com/#website" },
      datePublished: "2025-10-08T18:04:23+00:00",
      dateModified: "2026-01-05T19:31:53+00:00",
      description: META_DESC,
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en-US",
      potentialAction: [{ "@type": "ReadAction", target: [PAGE_URL] }],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://finalcutmultimedia.com/" },
        { "@type": "ListItem", position: 2, name: "About Us" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://finalcutmultimedia.com/#website",
      url: "https://finalcutmultimedia.com/",
      name: "Final Cut Multimedia",
      description: "",
      publisher: { "@id": "https://finalcutmultimedia.com/#organization" },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://finalcutmultimedia.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://finalcutmultimedia.com/#organization",
      name: "Final Cut Multimedia",
      url: "https://finalcutmultimedia.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://finalcutmultimedia.com/#/schema/logo/image/",
        url: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png",
        contentUrl: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png",
        width: 690,
        height: 706,
        caption: "Final Cut Multimedia",
      },
      image: { "@id": "https://finalcutmultimedia.com/#/schema/logo/image/" },
      sameAs: [
        "https://www.facebook.com/finalcutphoto/",
        "https://x.com/fc__multimedia",
        "https://www.linkedin.com/company/final-cut-multimedia/",
        "https://www.instagram.com/fcmultimedia/",
      ],
    },
  ],
};

const bookingUrl = "/contact-us-2#project-form";

// "What We Do" — লাইভ সাইটের হুবহু
const whatWeDo = [
  ["Corporate Video Production", "Strengthens brand presence and inspires confidence."],
  ["Event Videography and Photography", "Capture the energy and emotion of every moment."],
  ["Drone Videography Services", "Showcase your business from a stunning aerial view."],
  ["Promotional and Commercial Videos", "Drive engagement and sales."],
  ["Brand Storytelling and Visual Marketing", "Build long-term recognition and trust."],
];

// "Why Businesses Choose Final Cut Multimedia" — লাইভ সাইটের হুবহু
const whyChoose = [
  "Proven results in video marketing and brand visibility",
  "Experienced team using professional equipment and industry-standard production methods",
  "Fast turnaround with precision editing and high-quality post-production",
  "Local experts serving Charlotte, Rock Hill, and surrounding areas",
  "A creative partnership focused on results, not just content",
];

// শেয়ারড ভ্যালু প্রপ (হোমপেজের হুবহু)
const valueProps = [
  ["Expert Storytelling That Connects", "At Final Cut Multimedia, we believe every project has a story worth telling. Our team of skilled videographers and photographers bring your vision to life."],
  ["High-Quality Production Standards", "We combine creativity with cutting-edge technology to deliver professional-grade results. From 4K video production to crystal clear sound."],
  ["Tailored Solutions for Every Client", "No two brands are the same, nor are our projects. We take the time to understand your goals for each production to fit your message, audience, and platform needs."],
  ["Reliable, Efficient, and Passionate Team", "Our clients choose us for our dedication and dependability. We meet deadlines without compromising quality and treat every project with care."],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#080808] pt-28 lg:min-h-[92vh] lg:pt-0">
        <div className="mx-auto grid min-h-[inherit] max-w-[1600px] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 lg:py-36">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#DB0909]">About Us</p>
            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.98] sm:text-6xl lg:text-7xl">
              Capturing Stories Beyond the Frame
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-9 text-white/70">
              Every photo and video we create is more than just content, it&apos;s a story crafted with vision, passion, and artistry.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/50">
              At Final Cut Multimedia we create marketing videos that boost your online presence. Whether it&apos;s for your website, social media, or content strategy. We handle everything from start to finish, making sure your business stands out and attracts more customers.
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
              alt="The Final Cut Multimedia team in Charlotte, North Carolina"
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

      {/* We Create Results */}
      <section className="border-b border-white/10 bg-[#060606] px-5 py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Charlotte&apos;s Leader in Video Production and Photography</p>
            <h2 className="mt-5 text-3xl font-black uppercase leading-tight sm:text-5xl">
              We Don&apos;t Just Create Videos. We Create Results.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-gray-400 sm:text-lg">
            <p>
              At Final Cut Multimedia, we specialize in high-quality video production, photography, and drone videography that help businesses in Charlotte, North Carolina, increase visibility, grow their audience, and boost revenue.
            </p>
            <p>
              We believe every brand deserves cinematic storytelling that connects with people and converts attention into results. Whether it is a corporate video, promotional commercials, or event photography, our mission is to bring your vision to life with precision and creativity.
            </p>
            <p>
              Our team combines the art of filmmaking with the strategy of marketing. Every project is built to strengthen your brand identity, improve your online presence, and set you apart from competitors.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[#0a0a0a] px-5 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-h-[400px] overflow-hidden border border-white/15 bg-black lg:min-h-[560px]">
            <Image
              src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781697016/Use_this_picture_k9euqa.jpg"
              alt="Tyrell Scott, founder of Final Cut Multimedia"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-xs font-bold uppercase tracking-[0.3em] text-white/80">
              Founded by Tyrell Scott
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-6 text-base leading-8 text-gray-400 sm:text-lg">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Our Story</p>
            <p>
              Founded by Tyrell Scott, Final Cut Multimedia began with a single focus: to raise the standard for video production in Charlotte. Over the years, we have become a trusted partner for businesses, schools, and organizations that need professional visuals that perform.
            </p>
            <p>
              We have worked with corporate clients, community leaders, and local entrepreneurs to create content that tells their story, builds trust, and drives measurable growth. From drone cinematography and event coverage to business marketing videos, we deliver excellence from the first idea to the final edit.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-y border-white/10 bg-[#060606] px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">What We Do</p>
          <h2 className="mt-5 max-w-4xl text-3xl font-black uppercase leading-tight sm:text-5xl">
            A Full Suite of Creative Production Services
          </h2>
          <div className="mt-12 grid gap-px border border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map(([title, desc]) => (
              <div key={title} className="bg-[#060606] p-7 sm:p-8">
                <h3 className="text-lg font-black uppercase leading-tight text-white">{title}</h3>
                <p className="mt-3 text-base leading-7 text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose */}
      <section className="bg-[#0a0a0a] px-5 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Why Businesses Choose Us</p>
            <h2 className="mt-5 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Why Businesses Choose Final Cut Multimedia
            </h2>
          </div>
          <div className="grid border-t border-white/15 sm:grid-cols-2">
            {whyChoose.map((item, index) => (
              <div
                key={item}
                className={`flex min-h-28 items-start gap-4 border-b border-white/15 py-6 sm:px-6 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                }`}
              >
                <Check className="mt-1 shrink-0 text-[#DB0909]" size={19} strokeWidth={2.5} aria-hidden="true" />
                <p className="text-sm font-semibold uppercase leading-6 tracking-[0.08em] text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose (value props) */}
      <section className="border-y border-white/10 bg-[#060606] px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">The Final Cut Difference</p>
          <h2 className="mt-5 text-3xl font-black uppercase leading-tight sm:text-5xl">
            Why Choose Final Cut Multimedia?
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            At Final Cut Multimedia, we go beyond capturing footage, we craft stories that inspire, engage, and deliver results. Whether it&apos;s a corporate video, social media content, or event coverage, our focus is on producing visuals that make a lasting impression.
          </p>
          <div className="mt-12 grid gap-px border border-white/15 bg-white/10 sm:grid-cols-2">
            {valueProps.map(([title, desc]) => (
              <div key={title} className="bg-[#060606] p-7 sm:p-9">
                <h3 className="text-lg font-black uppercase leading-tight text-white">{title}</h3>
                <p className="mt-3 text-base leading-7 text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Story Deserves the Final Cut */}
      <section className="bg-white px-5 py-20 text-black lg:py-28">
        <div className="mx-auto grid max-w-[1440px] items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Your Story Deserves the Final Cut</p>
            <h2 className="mt-5 max-w-5xl text-3xl font-black uppercase leading-tight sm:text-5xl">
              Your business has a story that deserves to be seen.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
              Let us help you share it through powerful visuals that attract customers, inspire loyalty, and grow your brand.
            </p>
          </div>
          <div>
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
