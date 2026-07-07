import ServicePage from "@/components/services/ServicePage";

const PAGE_URL = "https://finalcutmultimedia.com/event-photography-charlotte-nc/";
const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/10/i-5.webp";
const META_DESC =
  "Searching for professional event photography in Charlotte, NC? Final Cut Multimedia captures corporate events, galas, trade shows, and private celebrations with high-resolution images. Get fully edited photos delivered in a fast 48-hour turnaround.";

// ================= লাইভ সাইটের হুবহু ১০০% SEO =================
export const metadata = {
  title: {
    absolute:
      "Charlotte, NC Event Photography & Video | Fast 48-Hour Turnaround | Final Cut Multimedia",
  },
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "Event photography & Video",
    description: META_DESC,
    url: PAGE_URL,
    siteName: "Final Cut Multimedia",
    modifiedTime: "2026-01-05T20:12:12+00:00",
    images: [{ url: OG_IMAGE, width: 480, height: 289, type: "image/webp" }],
  },
  twitter: { card: "summary_large_image", site: "@fc__multimedia" },
  other: {
    "article:publisher": "https://www.facebook.com/finalcutphoto/",
    "article:modified_time": "2026-01-05T20:12:12+00:00",
    "twitter:label1": "Est. reading time",
    "twitter:data1": "1 minute",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Charlotte, NC Event Photography & Video | Fast 48-Hour Turnaround | Final Cut Multimedia",
      isPartOf: { "@id": "https://finalcutmultimedia.com/#website" },
      primaryImageOfPage: { "@id": `${PAGE_URL}#primaryimage` },
      image: { "@id": `${PAGE_URL}#primaryimage` },
      thumbnailUrl: OG_IMAGE,
      datePublished: "2025-10-09T20:07:48+00:00",
      dateModified: "2026-01-05T20:12:12+00:00",
      description: META_DESC,
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en-US",
      potentialAction: [{ "@type": "ReadAction", target: [PAGE_URL] }],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": `${PAGE_URL}#primaryimage`,
      url: OG_IMAGE,
      contentUrl: OG_IMAGE,
      width: 480,
      height: 289,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://finalcutmultimedia.com/" },
        { "@type": "ListItem", position: 2, name: "Event photography & Video" },
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

export default function EventPhotographyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="Event Photography & Video in Charlotte, NC"
        title="Event Photography and Event Video Coverage"
        heroText="At Final Cut Multimedia, we believe every event deserves to be remembered — not just experienced. Our event photography and video coverage services capture the energy, emotion, and essence of your special moments with creativity and precision. Fully edited photos delivered in a fast 48-hour turnaround."
        image={OG_IMAGE}
        introTitle="Event Photography & Video Coverage by Final Cut Multimedia"
        introParagraphs={[
          "At Final Cut Multimedia, we believe every event deserves to be remembered — not just experienced. Our event photography and video coverage services capture the energy, emotion, and essence of your special moments with creativity and precision.",
          "We're a top-rated event photography team in Charlotte, trusted by businesses, organizations, and individuals for delivering premier photography services that capture every important moment with precision and creativity.",
        ]}
        servicesTitle="Event Coverage Services"
        services={[
          "Corporate Events",
          "Conferences",
          "Galas",
          "Trade Shows",
          "Award Ceremonies",
          "Fundraisers and Nonprofit Events",
          "Product Launches",
          "Company Celebrations",
          "Private Celebrations",
          "Networking Events",
          "Speaker Sessions",
          "On-Site and Live Event Coverage",
        ]}
        secondarySections={[
          {
            title: "Key Points",
            items: [
              "Our in-house editors refine every photo and video to deliver polished, professional-quality content quickly.",
              "Whether formal or festive, we adapt our style to match the mood and purpose of your occasion.",
              "Our team blends creative angles, lighting mastery, and storytelling to produce visually captivating results.",
              "From preparation to final moments, we capture every part of your event in stunning detail.",
            ],
          },
          {
            title: "The Impact of Professional Event Photography",
            items: [
              { label: "Boost Your Brand", desc: "High-quality event photos enhance your company's online presence, social media engagement, and marketing materials." },
              { label: "Drive Event Promotion", desc: "Stunning images help you attract sponsors, increase attendance, and build anticipation for future events." },
              { label: "Create Lasting Memories", desc: "Preserve every detail of your event with crisp, professional photography that tells your unique story." },
            ],
          },
          {
            title: "Deliverables May Include",
            items: [
              "Event Highlight Videos",
              "Social Media Clips",
              "Speaker Recordings",
              "High-Resolution Photography Galleries",
              "Testimonial Videos",
              "Promotional Recap Videos",
              "Branded Marketing Content",
            ],
          },
        ]}
        whyTitle="Why Choose Final Cut Multimedia for Event Photography?"
        why={[
          "Top-Rated Event Photography Team in Charlotte",
          "Fast 48-Hour Turnaround on Fully Edited Photos",
          "High-Resolution Images for Marketing, Social, and Print",
          "Both Candid and Posed Photography",
          "Professional Multi-Camera Video Coverage",
          "On-Site and Live Event Coverage",
        ]}
        faqs={[
          { q: "What quality of images can I expect?", a: "We provide high-resolution, professional images that are perfect for marketing materials, social media content, and print publications, ensuring your event looks stunning across every platform." },
          { q: "How fast will I receive my photos?", a: "We offer a fast 48-hour turnaround, delivering fully edited, high-quality images so you can share your event highlights quickly and professionally." },
          { q: "Do you capture both candid and posed shots?", a: "Yes, we specialize in both candid and posed photography — capturing authentic moments as well as professional group shots for a complete, well-balanced event gallery." },
          { q: "Are your packages customizable?", a: "Absolutely. We offer custom event photography packages designed to fit your event's size, duration, and specific needs, providing flexibility and great value." },
          { q: "Do you offer on-site and live event coverage?", a: "Yes, our team provides on-site and live event photography, enabling real-time image sharing for social media and marketing use while your event is still in progress." },
        ]}
        ctaTitle="Let's Capture Your Next Event"
        ctaText="Tell us about your event and we'll build a coverage plan that fits your goals, with fully edited photos delivered in a fast 48-hour turnaround."
      />
    </>
  );
}
