import ServicePage from "@/components/services/ServicePage";

const PAGE_URL =
  "https://finalcutmultimedia.com/video-production-company-in-charlotte-nc/";
const OG_IMAGE =
  "https://finalcutmultimedia.com/wp-content/uploads/2026/01/Branded-content-video-production-for-a-Charlotte-NC-business.jpeg";
const META_DESC =
  "Charlotte NC video production company specializing in corporate video production and photography services for local businesses.";
const OG_TITLE =
  "Video Production Company in Charlotte NC Video production company Charlotte NC";

// ================= লাইভ সাইটের হুবহু ১০০% SEO =================
export const metadata = {
  title: "Video Production Company in Charlotte NC",
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: OG_TITLE,
    description: META_DESC,
    url: PAGE_URL,
    siteName: "Final Cut Multimedia",
    modifiedTime: "2026-06-15T13:29:28+00:00",
    images: [{ url: OG_IMAGE, width: 1024, height: 768, type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    site: "@fc__multimedia",
  },
  other: {
    "article:publisher": "https://www.facebook.com/finalcutphoto/",
    "article:modified_time": "2026-06-15T13:29:28+00:00",
    "twitter:label1": "Est. reading time",
    "twitter:data1": "3 minutes",
  },
};

// লাইভ সাইটের Yoast JSON-LD @graph হুবহু
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Video Production Company in Charlotte NC | Final Cut Multimedia",
      isPartOf: { "@id": "https://finalcutmultimedia.com/#website" },
      primaryImageOfPage: { "@id": `${PAGE_URL}#primaryimage` },
      image: { "@id": `${PAGE_URL}#primaryimage` },
      thumbnailUrl: OG_IMAGE,
      datePublished: "2025-12-24T20:54:04+00:00",
      dateModified: "2026-06-15T13:29:28+00:00",
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
      width: 1024,
      height: 768,
      caption: "Branded content video production for a Charlotte NC business",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://finalcutmultimedia.com/" },
        { "@type": "ListItem", position: 2, name: "Video Production Company in Charlotte NC" },
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

export default function VideoProductionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage
        eyebrow="Video Production Company in Charlotte, NC"
        title="Video Production Company in Charlotte NC"
        heroText="Get free drone service from one of our certified licensed pilots when you book with us — because every project deserves a cinematic view from above. From concept to creation, Final Cut Multimedia is committed to delivering visuals that inspire, engage, and leave a lasting impact. Film packages as low as $599."
        image={OG_IMAGE}
        introTitle="We Create Marketing Videos That Boost Your Online Presence"
        introParagraphs={[
          "At Final Cut Multimedia we create marketing videos that boost your online presence. Whether it's for your website, social media, or content strategy. We handle everything from start to finish, making sure your business stands out and attracts more customers.",
          "Final Cut Multimedia is Charlotte's leading video production and photography company, crafting cinematic visuals that help businesses capture attention, build trust, and grow their brand. We combine creativity with cutting-edge technology to deliver professional-grade results, from 4K video production to crystal clear sound.",
        ]}
        servicesTitle="Our Creative Services"
        services={[
          "Corporate Video Production",
          "Photography",
          "Video Editing",
          "Corporate Events",
          "Car Dealership Videos",
          "Content for Social Media",
          "Event Photography & Video Coverage",
          "Safety & Training Videos",
          "Drone Videography",
          "Live Stream Service in Charlotte NC",
          "Documentary Video Production",
          "Headshot Photography",
        ]}
        secondarySections={[
          {
            title: "Drone Video Production Services",
            items: [
              "FAA Compliant Commercial Drone Operations",
              "Aerial Video for Events, Real Estate, and Construction",
              "Certified Licensed Drone Pilots",
              "Cinematic Aerial Footage for Marketing and Documentation",
            ],
          },
        ]}
        whyTitle="Why Businesses Choose Final Cut Multimedia"
        why={[
          "Experienced Charlotte Based Team",
          "Professional Production and Editing Workflow",
          "Consistent Quality and Reliable Delivery",
          "Local Professionals With Cross-Industry Experience",
          "Structured Workflows for Quality and Consistency",
          "Dependable Timelines and Quality Standards",
        ]}
        ctaTitle="Request a Video Production Consultation"
        ctaText="If you're planning a video project and want professional guidance, we're here to help you explore the best approach."
      />
    </>
  );
}
