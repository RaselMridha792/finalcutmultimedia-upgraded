import ServicePage from "@/components/services/ServicePage";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2026/03/FCM_0064-scaled.jpg";

const { metadata, jsonLd } = buildPageSeo({
  slug: "headshot-photography",
  title: "Corporate Headshot Photography in Charlotte, NC | On-Location Services",
  ogTitle: "Headshot Photography",
  description:
    "Get professional corporate headshots in Charlotte, NC. We offer convenient on-location photography, expert lighting/posing, and fast delivery to ensure your team's professional image stands out on your website, social media, and business materials.",
  datePublished: "2025-10-18T16:18:03+00:00",
  dateModified: "2026-03-19T02:14:19+00:00",
  breadcrumbName: "Headshot Photography",
  readingTime: "1 minute",
  image: OG_IMAGE,
  imageW: 2560,
  imageH: 1315,
  imageType: "image/jpeg",
});

export { metadata };

export default function HeadshotPhotographyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="Headshot Photography in Charlotte, NC"
        title="Corporate Headshot Photography in Charlotte, NC"
        heroText="Professional headshot photography in Charlotte, NC, focused on building credibility, trust, and a strong first impression across LinkedIn, websites, and marketing platforms. A strong image positions the brand before a conversation ever begins."
        image={OG_IMAGE}
        introTitle="Why Professional Headshots Matter"
        introParagraphs={[
          "Most professionals are judged before they ever speak. Low-quality images weaken brand perception and poor presentation loses attention instantly. Professional headshots increase engagement on LinkedIn and social media and position authority within your industry.",
          "Final Cut Multimedia provides professional headshots in Charlotte NC with a focus on results, not just images. This is not just photography — it is part of a larger content strategy. Serving Charlotte, NC; Concord, NC; Huntersville, NC; and surrounding areas.",
        ]}
        servicesTitle="Professional Headshot Photography Services"
        services={[
          { label: "Wardrobe Guidance", desc: "Wardrobe guidance based on your industry and audience." },
          { label: "Guided Posing and Direction", desc: "Guided posing and direction throughout the entire session." },
          { label: "Professional Lighting Setup", desc: "A professional lighting setup for polished, consistent results." },
          { label: "Multiple Looks", desc: "Multiple looks for versatility across platforms." },
          { label: "High-End Retouching", desc: "High end retouching for a clean, natural finish." },
          { label: "Platform-Optimized Images", desc: "Images optimized for LinkedIn, websites, and marketing." },
          { label: "On-Location Team Headshots", desc: "On-location headshot photography for teams, wherever you are." },
        ]}
        secondarySections={[
          {
            title: "Where Professional Headshots Are Used",
            items: [
              "Corporate directories and internal branding",
              "Social media platforms and digital campaigns",
              "LinkedIn profiles and company websites",
              "Marketing materials and business presentations",
            ],
          },
          {
            title: "Our Approach to Headshot Photography",
            items: [
              { label: "Intentional, Not Rushed", desc: "This is not a quick photoshoot. Everything is intentional." },
              { label: "Controlled for Real Business Use", desc: "Every detail is controlled to ensure the final image works in real business environments." },
            ],
          },
        ]}
        whyTitle="Charlotte's #1 Headshot Photography Service"
        why={[
          "Focused on Results, Not Just Images",
          "Convenient On-Location Photography",
          "Expert Lighting and Posing",
          "Fast Delivery and High-End Retouching",
          "Optimized for LinkedIn, Websites, and Marketing",
          "Part of a Larger Content Strategy",
        ]}
        ctaTitle="Book Professional Headshots Charlotte NC"
        ctaText="Schedule a session and get professional headshots that represent your brand the right way — across LinkedIn, your website, and every marketing platform."
      />
    </>
  );
}
