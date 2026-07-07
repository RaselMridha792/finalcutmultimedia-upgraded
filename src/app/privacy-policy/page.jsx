import Link from "next/link";

const PAGE_URL = "https://finalcutmultimedia.com/privacy-policy/";
const META_DESC =
  "Learn how Final Cut Multimedia collects, uses, and protects your personal information. We respect your privacy and are committed to safeguarding your data when you visit our website or work with us for video and photography services.";

// ================= লাইভ সাইটের হুবহু ১০০% SEO =================
export const metadata = {
  title: { absolute: "Privacy Policy - Final Cut Multimedia" },
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "Privacy Policy",
    description: META_DESC,
    url: PAGE_URL,
    siteName: "Final Cut Multimedia",
    modifiedTime: "2026-01-05T19:31:54+00:00",
  },
  twitter: { card: "summary_large_image", site: "@fc__multimedia" },
  other: {
    "article:publisher": "https://www.facebook.com/finalcutphoto/",
    "article:modified_time": "2026-01-05T19:31:54+00:00",
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
      name: "Privacy Policy - Final Cut Multimedia",
      isPartOf: { "@id": "https://finalcutmultimedia.com/#website" },
      datePublished: "2025-11-05T01:00:29+00:00",
      dateModified: "2026-01-05T19:31:54+00:00",
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
        { "@type": "ListItem", position: 2, name: "Privacy Policy" },
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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.18),_transparent_45%)]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto w-full max-w-none px-5 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-600">Privacy policy</p>
          <h1 className="max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
            How we collect and use information
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            We value your privacy and want to be transparent about the information we collect and how it is used.
          </p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-5 py-20">
        <div className="mx-auto w-full max-w-none space-y-8 text-base leading-8 text-gray-400">
          <div className="rounded border border-white/10 bg-[#111111] p-8">
            <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-white">Information we collect</h2>
            <p className="mt-4">
              When you contact us, request a quote, or book a consultation, we may collect your name, email address, phone number, and details about your project so we can respond appropriately.
            </p>
          </div>

          <div className="rounded border border-white/10 bg-[#111111] p-8">
            <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-white">How we use it</h2>
            <p className="mt-4">
              We use your information to respond to inquiries, discuss production needs, schedule consultations, and provide the services you request.
            </p>
          </div>

          <div className="rounded border border-white/10 bg-[#111111] p-8">
            <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-white">Contact</h2>
            <p className="mt-4">
              If you have questions about this privacy policy or how your information is handled, please contact us directly through our contact page.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#060606] px-5 py-20">
        <div className="mx-auto w-full max-w-none border border-white/10 bg-[#111111] p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Need help?</p>
          <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">We’re happy to answer any questions about our approach.</h2>
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
