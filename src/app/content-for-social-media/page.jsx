import ServicePage from "@/components/services/ServicePage";

const PAGE_URL = "https://finalcutmultimedia.com/content-for-social-media/";
const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/11/girl-video-blogging-in-kitchen-seen-through-camera-2024-10-19-08-11-24-utc-scaled.jpg";
const META_DESC =
  "Connect with your audience using tailored social media marketing videos. Stand out with the help of our business video services in Charlotte, NC!";

// ================= লাইভ সাইটের হুবহু ১০০% SEO =================
export const metadata = {
  title: { absolute: "Social Media | Business Video Services" },
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "Content for Social Media",
    description: META_DESC,
    url: PAGE_URL,
    siteName: "Final Cut Multimedia",
    modifiedTime: "2025-11-12T16:45:48+00:00",
    images: [{ url: OG_IMAGE, width: 2560, height: 1707, type: "image/jpeg" }],
  },
  twitter: { card: "summary_large_image", site: "@fc__multimedia" },
  other: {
    "article:publisher": "https://www.facebook.com/finalcutphoto/",
    "article:modified_time": "2025-11-12T16:45:48+00:00",
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
      name: "Social Media | Business Video Services",
      isPartOf: { "@id": "https://finalcutmultimedia.com/#website" },
      primaryImageOfPage: { "@id": `${PAGE_URL}#primaryimage` },
      image: { "@id": `${PAGE_URL}#primaryimage` },
      thumbnailUrl: OG_IMAGE,
      datePublished: "2025-10-09T20:31:29+00:00",
      dateModified: "2025-11-12T16:45:48+00:00",
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
      width: 2560,
      height: 1707,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://finalcutmultimedia.com/" },
        { "@type": "ListItem", position: 2, name: "Content for Social Media" },
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

export default function ContentForSocialMediaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="Content for Social Media"
        title="Engaging Social Media Content by Final Cut Multimedia"
        heroText="We help brands stand out in the fast-paced world of social media through visually stunning and strategically crafted content — from short-form videos and creative reels to branded photos and promotional campaigns that capture attention and drive engagement."
        image={OG_IMAGE}
        introTitle="Content That Connects, Inspires, and Converts"
        introParagraphs={[
          "At Final Cut Multimedia, we help brands stand out in the fast-paced world of social media through visually stunning and strategically crafted content. From short-form videos and creative reels to branded photos and promotional campaigns, our team designs content that captures attention and drives engagement.",
          "We understand that every platform — whether it's Instagram, Facebook, TikTok, YouTube, or LinkedIn — demands a unique storytelling approach. That's why our experts plan, shoot, and edit content tailored to your audience and business goals. Whether you're looking to grow your brand, boost sales, or increase visibility, Final Cut Multimedia delivers content that connects, inspires, and converts.",
          "Your story deserves more than just a camera — it deserves creativity, precision, and passion. We blend artistry with technology to deliver photography and videography that stands out and resonates long after the moment has passed.",
        ]}
        servicesTitle="What Social Media Content May Include"
        services={[
          "Short-Form Videos and Reels",
          "Promotional Videos",
          "Branded Photos",
          "Customer Testimonials",
          "Behind the Scenes Content",
          "Company Updates",
          "Highlight Videos and Ads",
          "Content for Instagram, Facebook, TikTok, YouTube, and LinkedIn",
        ]}
        secondarySections={[
          {
            title: "Key Points",
            items: [
              "We ensure every piece of content aligns with your business tone, color palette, and messaging.",
              "Every post we deliver is sharp, professional, and designed to reflect your brand's identity and values.",
              "Our team produces scroll-stopping reels, ads, and highlight videos that make your brand memorable.",
              "We create content customized for each social platform to maximize reach and engagement.",
            ],
          },
          {
            title: "How It Works",
            items: [
              "Planning: identify content opportunities aligned with your goals and audience",
              "Scheduled Production Day: capture multiple pieces of content in one session",
              "Editing and Content Creation: create varied deliverables throughout the month",
              "Delivery: receive content ready for your social media channels",
              "Repeat and Scale: grow visibility, authority, and consistency",
            ],
          },
        ]}
        showProcess={false}
        whyTitle="Why Businesses Choose Final Cut Multimedia"
        why={[
          "Consistent Professional Content",
          "Platform-Optimized Storytelling",
          "Scroll-Stopping Reels and Ads",
          "Stronger Brand Visibility",
          "Ongoing Marketing Assets",
          "Content That Connects, Inspires, and Converts",
        ]}
        faqs={[
          { q: "What sets Final Cut Multimedia apart in the industry?", a: "Our strength lies in combining cinematic production quality with personalized storytelling. Every project is tailored to reflect your unique brand, event, or vision." },
          { q: "How do we capture the essence of special moments?", a: "We focus on authentic emotions, candid interactions, and meticulous detail — ensuring each frame feels natural yet impactful." },
          { q: "Why should businesses choose us for corporate content?", a: "We understand business communication. From training videos to social media campaigns, our productions are designed to inform, inspire, and engage your audience effectively." },
        ]}
        ctaTitle="Let's Create Content That Connects"
        ctaText="From dynamic corporate films to emotional event coverage, our team is dedicated to creating visuals that resonate. Let's build social media content that connects, inspires, and converts."
      />
    </>
  );
}
