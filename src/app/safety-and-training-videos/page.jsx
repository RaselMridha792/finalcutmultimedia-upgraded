import ServicePage from "@/components/services/ServicePage";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/10/10-hr-Safety-Training-Construction-scaled-1.jpeg";

const { metadata, jsonLd } = buildPageSeo({
  slug: "safety-and-training-videos",
  title: "Safety and Training Videos - Final Cut Multimedia",
  ogTitle: "Safety and Training Videos",
  description:
    "Final Cut Multimedia is a Charlotte, NC, video production company helping businesses grow with commercials, corporate videos, event coverage, training videos, drone footage, and photography.",
  datePublished: "2025-10-09T20:06:33+00:00",
  dateModified: "2026-06-03T01:42:03+00:00",
  breadcrumbName: "Safety and Training Videos",
  readingTime: "1 minute",
  image: OG_IMAGE,
  imageW: 2560,
  imageH: 1440,
  imageType: "image/jpeg",
});

export { metadata };

export default function SafetyTrainingVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="Safety & Training Videos"
        title="Professional Safety & Training Videos"
        heroText="We specialize in creating clear, informative, and visually engaging safety and training videos that help organizations educate their teams effectively — simplifying complex information, improving retention, and ensuring compliance with workplace standards."
        image={OG_IMAGE}
        introTitle="Professional Safety & Training Videos by Final Cut Multimedia"
        introParagraphs={[
          "At Final Cut Multimedia, we specialize in creating clear, informative, and visually engaging safety and training videos that help organizations educate their teams effectively. Our videos are designed to simplify complex information, improve retention, and ensure compliance with workplace standards.",
          "Whether you're training new employees, demonstrating safety protocols, or introducing operational procedures, our production team brings clarity and creativity to every project. Using a mix of professional narration, high-quality visuals, motion graphics, and real-life demonstrations, we make training engaging, easy to understand, and impactful.",
        ]}
        servicesTitle="Safety & Training Video Services"
        services={[
          "Employee Onboarding Videos",
          "Safety Protocol Videos",
          "Operational Procedure Videos",
          "Compliance Training Videos",
          "Construction Safety Videos",
          "Healthcare Training Videos",
          "Manufacturing Training Videos",
          "Corporate Training Videos",
        ]}
        secondarySections={[
          {
            title: "Key Points",
            items: [
              "Our videos are structured for clarity, ensuring your staff easily understands and retains critical information.",
              "From scripting and filming to voiceover and editing, every detail is handled with precision and professionalism.",
              "Our team creates customized videos tailored to your field — whether it's construction, healthcare, manufacturing, or corporate training.",
              "We turn complex topics into simple, engaging visuals that enhance learning and compliance.",
            ],
          },
        ]}
        whyTitle="Why Choose Final Cut Multimedia?"
        why={[
          "Clear, Structured Videos Built for Retention",
          "Professional Narration and Motion Graphics",
          "Customized to Your Industry",
          "Full Service From Scripting to Editing",
          "Improved Learning and Workplace Compliance",
          "Charlotte, NC Based Production Team",
        ]}
        faqs={[
          { q: "What sets Final Cut Multimedia apart in the industry?", a: "Our strength lies in combining cinematic production quality with personalized storytelling. Every project is tailored to reflect your unique brand, event, or vision." },
          { q: "How do we capture the essence of special moments?", a: "We focus on authentic emotions, candid interactions, and meticulous detail — ensuring each frame feels natural yet impactful." },
          { q: "Why should businesses choose us for corporate content?", a: "We understand business communication. From training videos to social media campaigns, our productions are designed to inform, inspire, and engage your audience effectively." },
        ]}
        ctaTitle="Let's Create Your Training Video"
        ctaText="From safety protocols to operational procedures, we produce clear, engaging training videos that improve retention and ensure workplace compliance."
      />
    </>
  );
}
