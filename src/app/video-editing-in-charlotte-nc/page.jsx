import ServicePage from "@/components/services/ServicePage";

const PAGE_URL = "https://finalcutmultimedia.com/video-editing-in-charlotte-nc/";
const OG_IMAGE = "https://s.w.org/images/core/emoji/16.0.1/svg/1f4cd.svg";
const META_DESC =
  "Bring your vision to life with professional video editing services. Enhance storytelling and add impact with our video production services in Charlotte, NC!";

// ================= লাইভ সাইটের হুবহু ১০০% SEO =================
export const metadata = {
  title: { absolute: "Video Editing Charlotte NC | Video Production" },
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "Video Editing in Charlotte NC",
    description: META_DESC,
    url: PAGE_URL,
    siteName: "Final Cut Multimedia",
    modifiedTime: "2025-11-09T22:20:38+00:00",
    images: [{ url: OG_IMAGE }],
  },
  twitter: { card: "summary_large_image", site: "@fc__multimedia" },
  other: {
    "article:publisher": "https://www.facebook.com/finalcutphoto/",
    "article:modified_time": "2025-11-09T22:20:38+00:00",
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
      name: "Video Editing Charlotte NC | Video Production",
      isPartOf: { "@id": "https://finalcutmultimedia.com/#website" },
      primaryImageOfPage: { "@id": `${PAGE_URL}#primaryimage` },
      image: { "@id": `${PAGE_URL}#primaryimage` },
      thumbnailUrl: OG_IMAGE,
      datePublished: "2025-10-09T20:05:36+00:00",
      dateModified: "2025-11-09T22:20:38+00:00",
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
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://finalcutmultimedia.com/" },
        { "@type": "ListItem", position: 2, name: "Video Editing in Charlotte NC" },
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

export default function VideoEditingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="Video Editing in Charlotte NC"
        title="Video Editing in Charlotte NC That Turns Content Into Revenue"
        heroText="Expert video editing services by Final Cut Multimedia in Charlotte NC. We do more than edit videos; we build visual assets that grow your business — polished, professional, on-brand content that performs."
        image="https://finalcutmultimedia.com/wp-content/uploads/2025/10/Mac-Two-Computers-Display.jpg"
        introTitle="Professional Editing That Drives Business Results"
        introParagraphs={[
          "At Final Cut Multimedia, we do more than edit videos; we build visual assets that grow your business. Our video editing services in Charlotte NC are designed for companies that want polished, professional, on-brand content that performs.",
          "We transform your raw footage into high-impact videos that elevate your image, strengthen your marketing, and move customers to action. Whether you are promoting a product, training your team, or recapping an event, our editors create the kind of content that keeps your brand top of mind and ahead of the competition.",
        ]}
        servicesTitle="Business-Focused Video Editing Services"
        services={[
          { label: "Corporate & Brand Video Editing", desc: "Present your company with confidence. We edit interviews, brand stories, and marketing videos that position your business as a leader in your field." },
          { label: "Event Highlights & Recaps", desc: "Turn your live events into promotional content that continues to generate awareness and sales long after the event ends." },
          { label: "Social Media Editing", desc: "Stop the scroll. We create short-form videos optimized for engagement on Instagram, TikTok, LinkedIn, and YouTube." },
          { label: "Training & Internal Communications", desc: "Strengthen your culture and streamline communication with clear, concise, visually engaging training videos." },
          { label: "Commercial Editing & Product Features", desc: "Showcase your products or services with cinematic clarity and persuasive storytelling that drives conversions." },
        ]}
        secondarySections={[
          {
            title: "Why Charlotte Businesses Choose Final Cut Multimedia",
            items: [
              { label: "Return on Investment", desc: "Every edit is made with purpose, to help your video earn attention, engagement, and measurable business growth." },
              { label: "Professional Quality", desc: "From sound design to color grading, our edits meet broadcast-level standards that reflect your brand's excellence." },
              { label: "Local Understanding", desc: "Based in Charlotte, NC, we understand how to create content that connects with your local market and regional audience." },
              { label: "Efficient Turnaround", desc: "We meet your deadlines without sacrificing quality, helping you keep your marketing timelines on track." },
              { label: "Strategic Collaboration", desc: "We work closely with your marketing team to align visuals with goals, brand voice, and audience intent." },
            ],
          },
          {
            title: "Our Comprehensive Video Editing Process",
            items: [
              { label: "1. Footage Review and Organization", desc: "Initial assessment of your footage to highlight key moments, with an organized workflow so every shot is used effectively." },
              { label: "2. Trimming and Transitions", desc: "Precise trimming to remove unnecessary segments while maintaining a natural flow, plus seamless transitions that keep the video cohesive and professional." },
              { label: "3. Audio Editing and Sound Design", desc: "Audio levels balancing, noise reduction, voice enhancement, and royalty-free background music synced perfectly to set the mood." },
              { label: "4. Color Correction and Grading", desc: "Exposure, contrast, and white balance correction plus cinematic color grading, stabilization, and detail refinement for crystal-clear visuals." },
              { label: "5. Motion Graphics and Effects", desc: "Custom motion graphics, on-screen text, logo animations, special effects like speed ramping and slow motion, and green screen (chroma key) integration." },
              { label: "6. B-Roll Integration", desc: "Creative B-roll added to complement your main footage, strategically placed to enhance storytelling and keep viewers engaged." },
              { label: "7. Subtitles, Quality Check and Export", desc: "Optional subtitles and captions, a full quality check, and export in multiple horizontal and vertical formats for YouTube, Instagram, TikTok, and more." },
              { label: "8. Revisions and Delivery", desc: "One free revision after the initial cut and fast turnaround so your final videos are delivered promptly to meet your deadlines." },
            ],
          },
        ]}
        whyTitle="Key Points"
        why={[
          "Our professionals bring years of experience in both photo and video editing across various industries.",
          "We understand deadlines — our efficient workflow guarantees timely delivery without sacrificing quality.",
          "Each project is tailored to your vision, whether it's cinematic storytelling, brand marketing, or event documentation.",
          "We use top-tier software like Adobe Premiere Pro, After Effects, and Photoshop to ensure premium quality.",
        ]}
        faqs={[
          { q: "What sets Final Cut Multimedia apart in the industry?", a: "Our strength lies in combining cinematic production quality with personalized storytelling. Every project is tailored to reflect your unique brand, event, or vision." },
          { q: "How do we capture the essence of special moments?", a: "We focus on authentic emotions, candid interactions, and meticulous detail — ensuring each frame feels natural yet impactful." },
          { q: "Why should businesses choose us for corporate content?", a: "We understand business communication. From training videos to social media campaigns, our productions are designed to inform, inspire, and engage your audience effectively." },
        ]}
        ctaTitle="Editing That Converts Views Into Value"
        ctaText="Your video deserves more than simple cuts and transitions; it deserves a professional touch that builds credibility, trust, and results. Serving Charlotte, NC; Concord, NC; Gastonia, NC; Rock Hill, SC; and surrounding areas."
      />
    </>
  );
}
