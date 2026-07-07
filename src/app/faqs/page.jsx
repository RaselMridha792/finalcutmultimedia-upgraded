import Link from "next/link";

const PAGE_URL = "https://finalcutmultimedia.com/faqs/";
const META_DESC =
  "Get answers to common questions about working with Final Cut Multimedia, including video project timelines (1-6 weeks), content ownership, custom pricing, aerial videography, and creative concept development.";

// ================= লাইভ সাইটের হুবহু ১০০% SEO =================
export const metadata = {
  title: {
    absolute:
      "FAQs | Video Production Timelines, Content Rights & Drone Services | Final Cut Multimedia",
  },
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "FAQs",
    description: META_DESC,
    url: PAGE_URL,
    siteName: "Final Cut Multimedia",
    modifiedTime: "2025-10-28T19:12:43+00:00",
  },
  twitter: { card: "summary_large_image", site: "@fc__multimedia" },
  other: {
    "article:publisher": "https://www.facebook.com/finalcutphoto/",
    "article:modified_time": "2025-10-28T19:12:43+00:00",
    "twitter:label1": "Est. reading time",
    "twitter:data1": "3 minutes",
  },
};

// পুরনো লাইভ সাইটের হুবহু FAQ
const faqs = [
  { question: "What sets Final Cut Multimedia apart in the industry?", answer: "Our strength lies in combining cinematic production quality with personalized storytelling. Every project is tailored to reflect your unique brand, event, or vision." },
  { question: "How do we capture the essence of special moments?", answer: "We focus on authentic emotions, candid interactions, and meticulous detail — ensuring each frame feels natural yet impactful." },
  { question: "Why should businesses choose us for corporate content?", answer: "We understand business communication. From training videos to social media campaigns, our productions are designed to inform, inspire, and engage your audience effectively." },
  { question: "How long does it take to complete a video project?", answer: "Production time depends on project size and complexity. Smaller projects may take 1–2 weeks, while large commercial or corporate videos can take 4–6 weeks. We always provide a detailed timeline during consultation." },
  { question: "Do you provide drone or aerial videography services?", answer: "Yes! Our certified drone pilots capture high-quality aerial footage for real estate, events, and cinematic productions. We also follow all FAA and local drone regulations to ensure safe and compliant operation." },
  { question: "Can you help with video scripts or creative ideas?", answer: "Absolutely. Our creative team can assist with storyboarding, scripting, and concept development. Whether you have a rough idea or no concept at all, we'll help craft a story that perfectly represents your brand or event." },
  { question: "What are your pricing and payment terms?", answer: "Pricing depends on project length, complexity, and production requirements. We offer custom quotes after discussing your goals. A deposit is typically required to begin production, with the balance due upon final delivery." },
  { question: "Do I own the rights to the final video?", answer: "Yes — once the project is paid in full, you own the rights to the final edited version. We retain the right to use portions of the work for our portfolio unless otherwise agreed upon in writing." },
  { question: "How do I book a consultation?", answer: "Simply contact our team through our website or by phone to schedule a free consultation. We'll discuss your goals, ideas, and budget to create a plan that fits your needs and timeline." },
  { question: "Do you offer on-site production across different locations?", answer: "Yes. We're available for on-site shoots nationwide and can travel internationally depending on project scope. Travel costs and logistics are discussed during pre-production." },
  { question: "Can you deliver videos in different formats or aspect ratios?", answer: "Yes. We provide videos optimized for YouTube, Instagram, Facebook, and other platforms, ensuring they meet each platform's technical standards and visual requirements." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "FAQs | Video Production Timelines, Content Rights & Drone Services | Final Cut Multimedia",
      isPartOf: { "@id": "https://finalcutmultimedia.com/#website" },
      datePublished: "2025-10-13T16:26:27+00:00",
      dateModified: "2025-10-28T19:12:43+00:00",
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
        { "@type": "ListItem", position: 2, name: "FAQs" },
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
          target: { "@type": "EntryPoint", urlTemplate: "https://finalcutmultimedia.com/?s={search_term_string}" },
          "query-input": { "@type": "PropertyValueSpecification", valueRequired: true, valueName: "search_term_string" },
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

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.18),_transparent_45%)]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto w-full max-w-none px-5 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-600">Frequently asked questions</p>
          <h1 className="max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
            FAQs
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Here are some of the most common questions we receive from clients planning video, photography, or recurring content projects.
          </p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-5 py-20">
        <div className="mx-auto w-full max-w-none space-y-6">
          {faqs.map((item) => (
            <div key={item.question} className="rounded border border-white/10 bg-[#111111] p-8">
              <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-white">{item.question}</h2>
              <p className="mt-4 text-base leading-8 text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#060606] px-5 py-20">
        <div className="mx-auto w-full max-w-none border border-white/10 bg-[#111111] p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Still have questions?</p>
          <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">Let&apos;s talk through your project goals.</h2>
          <p className="mt-6 text-base leading-8 text-gray-400">
            Reach out and we will help you choose the right production approach for your brand, audience, and timeline.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact-us-2" className="rounded bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
