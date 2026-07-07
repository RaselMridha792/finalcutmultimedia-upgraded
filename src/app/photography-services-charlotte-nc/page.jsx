import ServicePage from "@/components/services/ServicePage";

const PAGE_URL = "https://finalcutmultimedia.com/photography-services-charlotte-nc/";
const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/10/i-2025-10-09T131430.855.webp";
const META_DESC =
  "Searching for the best photography company in Charlotte, NC? We offer high-quality event photography, corporate headshots, and high school senior portraits with professional editing and exceptional customer service.";

// ================= লাইভ সাইটের হুবহু ১০০% SEO =================
export const metadata = {
  title: {
    absolute:
      "Professional Photography Services in Charlotte, NC | Event, Headshot & Senior Portraits",
  },
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "Photography",
    description: META_DESC,
    url: PAGE_URL,
    siteName: "Final Cut Multimedia",
    modifiedTime: "2025-11-04T19:17:40+00:00",
    images: [{ url: OG_IMAGE, width: 480, height: 320, type: "image/webp" }],
  },
  twitter: { card: "summary_large_image", title: "Photography", site: "@fc__multimedia" },
  other: {
    "article:publisher": "https://www.facebook.com/finalcutphoto/",
    "article:modified_time": "2025-11-04T19:17:40+00:00",
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
      name: "Professional Photography Services in Charlotte, NC | Event, Headshot & Senior Portraits",
      isPartOf: { "@id": "https://finalcutmultimedia.com/#website" },
      primaryImageOfPage: { "@id": `${PAGE_URL}#primaryimage` },
      image: { "@id": `${PAGE_URL}#primaryimage` },
      thumbnailUrl: OG_IMAGE,
      datePublished: "2025-10-09T20:03:13+00:00",
      dateModified: "2025-11-04T19:17:40+00:00",
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
      height: 320,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://finalcutmultimedia.com/" },
        { "@type": "ListItem", position: 2, name: "Photography" },
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

export default function PhotographyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="Photography Services in Charlotte, NC"
        title="Professional Photography in Charlotte, NC"
        heroText="Capture every moment with Final Cut Multimedia photography. Whether it's a personal milestone, corporate event, or creative project, we bring your vision to life through artistic precision, lighting expertise, and an eye for authentic emotion. Get the photos your brand deserves, and your customers remember."
        image={OG_IMAGE}
        introTitle="Capture the Moment. Tell the Story. Inspire Action."
        introParagraphs={[
          "At Final Cut Multimedia, we specialize in professional photography services in Charlotte NC that help your brand stand out and your story shine. Whether you need event photography, corporate headshots, or marketing visuals, we deliver crisp, creative, and compelling images that elevate your business.",
          "We know every photo matters. Each shot is designed to connect with your audience, capture emotion, and communicate your brand message with power and precision.",
          "Your photos should do more than look good. They should represent your brand, attract your audience, and tell your story in one frame. We create photography that captures the professionalism, energy, and personality behind every project.",
        ]}
        servicesTitle="Our Photography Services"
        services={[
          { label: "Corporate Photography", desc: "Showcase your team and company with high-quality professional portraits and lifestyle imagery." },
          { label: "Event Photography", desc: "Capture every highlight from corporate gatherings, community events, and private celebrations." },
          { label: "Product Photography", desc: "Bring your products to life with clean, well-lit photos that attract attention and increase sales." },
          { label: "Real Estate Photography", desc: "Present properties in their best light with sharp, magazine-style imagery that sells faster." },
          { label: "Headshots and Branding Photos", desc: "Give your brand a professional image that builds trust online and in person." },
          { label: "Automotive Photography", desc: "Perfect for dealerships and auto groups who want to feature their inventory with clarity and style." },
          { label: "High School Senior Portraits", desc: "Timeless senior portraits that celebrate this milestone with creativity and personality." },
        ]}
        secondarySections={[
          {
            title: "Why Choose Final Cut Multimedia Photography",
            items: [
              { label: "Local Expertise", desc: "Based in Charlotte, NC, we understand how to highlight what makes your business and brand unique." },
              { label: "Professional Quality", desc: "Every image is captured with precision lighting, composition, and color accuracy for maximum impact." },
              { label: "Creative Direction", desc: "We help you plan the perfect look, from wardrobe to background, ensuring every detail reflects your vision." },
              { label: "Fast Turnaround", desc: "You get professional results quickly, so you can start using your images to promote your business right away." },
            ],
          },
          {
            title: "Key Points",
            items: [
              "We use top-of-the-line cameras, lenses, and lighting to ensure every image meets professional standards.",
              "We don't just take pictures; we craft visual stories that represent your brand, personality, or event theme.",
              "Expect quick turnaround times without compromising on quality. We value your time as much as your memories.",
              "From professional headshots and event coverage to product shoots and lifestyle portraits, we cover it all.",
            ],
          },
        ]}
        whyTitle="Photography That Works For You"
        why={[
          "Professional photos that make your business impossible to ignore",
          "Photography that sells your vision and builds your brand",
          "The best photography studio in Charlotte, NC",
          "Event Photography, Corporate Headshots, and High School Senior Portraits",
          "Precision lighting, composition, and color accuracy in every image",
          "Serving Charlotte, Concord, Gastonia, Kannapolis, and Huntersville",
        ]}
        faqs={[
          {
            q: "How does high-quality equipment make a difference?",
            a: "Bring perfection to your photography projects by seeking the help of professionals. As the quality of photography only goes up, you wouldn't want to be left behind. With better equipment comes the best images. Ensure you have the best equipment on your side to showcase your project — hiring a professional service guarantees that you do.",
          },
          {
            q: "Why should I hire professionals to get the best shots?",
            a: "Only a team of skilled photographers can get you the best angles of what you choose to photograph. Make your subject look more dynamic and attractive to viewers with creative angles and exciting shots.",
          },
          {
            q: "Why is professional editing important?",
            a: "Perfect your images and give them the style that suits you best. Doing so yourself can end up being a tedious and challenging task. In the hands of a professional, achieve flawless, well-styled images that reflect your vision perfectly.",
          },
        ]}
        ctaTitle="Book Your Photography Session Today"
        ctaText="Let's create visuals that help your business grow and get noticed. Serving Charlotte, NC; Concord; Gastonia; Kannapolis; Huntersville; and surrounding areas."
      />
    </>
  );
}
