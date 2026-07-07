import ServicePage from "@/components/services/ServicePage";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/10/2.ServiceEventmarketing-min-1-scaled.jpg";

const { metadata, jsonLd } = buildPageSeo({
  slug: "corporate-video-production",
  title: "Corporate | Business Video Services | Corporate Event Photography",
  ogTitle: "Corporate Video Production",
  description:
    "We provide professional video production services for all commercial needs, from small business to corporate. We will tell your story from concept to completion!",
  datePublished: "2025-10-09T20:05:47+00:00",
  dateModified: "2025-10-28T18:38:46+00:00",
  breadcrumbName: "Corporate Video Production",
  readingTime: "3 minutes",
  image: OG_IMAGE,
  imageW: 2560,
  imageH: 1751,
  imageType: "image/jpeg",
});

export { metadata };

export default function CorporateVideoProductionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="Corporate Video Production"
        title="Transform Your Brand With High Quality Corporate Video Production"
        heroText="In today's digital world, video is the most powerful tool for business growth. At Final Cut Multimedia, we specialize in corporate video production that helps businesses increase engagement, build trust, and drive sales."
        image={OG_IMAGE}
        introTitle="Corporate Video Production | Professional Business Video Services"
        introParagraphs={[
          "At Final Cut Multimedia, we specialize in corporate video production that helps businesses increase engagement, build trust, and drive sales. Whether you need a brand video, product demo, training video, or corporate event coverage, we deliver cinematic, high-quality video content tailored to your business goals.",
          "We provide professional video production services for all commercial needs, from small business to corporate. We will tell your story from concept to completion.",
        ]}
        servicesTitle="Corporate Video Services"
        services={[
          "Brand Videos",
          "Product Demos",
          "Training Videos",
          "Corporate Event Coverage",
          "Company Culture Videos",
          "Recruitment Videos",
          "Executive Interviews",
          "Customer Testimonial Videos",
          "Promotional and Commercial Videos",
          "Internal Communications Videos",
        ]}
        secondarySections={[
          {
            title: "Key Points",
            items: [
              "We capture images that enhance your company's image and align with your marketing and branding goals.",
              "We deliver punctual, organized, and discreet service — ensuring your event runs smoothly without interruption.",
              "Using top-tier cameras and editing tools, we produce stunning photos and videos that highlight your event's success.",
              "From half-day shoots to multi-day coverage, we tailor our services to fit your event needs and budget.",
            ],
          },
        ]}
        whyTitle="Why Choose Final Cut Multimedia?"
        why={[
          "Cinematic, High-Quality Corporate Video Content",
          "Business-Focused Storytelling That Drives Sales",
          "Professional Cameras and Editing Tools",
          "Punctual, Organized, and Discreet Service",
          "Full Service From Concept to Completion",
          "Flexible Coverage to Fit Your Budget",
        ]}
        faqs={[
          { q: "What sets Final Cut Multimedia apart in the industry?", a: "Our strength lies in combining cinematic production quality with personalized storytelling. Every project is tailored to reflect your unique brand, event, or vision." },
          { q: "How do we capture the essence of special moments?", a: "We focus on authentic emotions, candid interactions, and meticulous detail — ensuring each frame feels natural yet impactful." },
          { q: "Why should businesses choose us for corporate content?", a: "We understand business communication. From training videos to social media campaigns, our productions are designed to inform, inspire, and engage your audience effectively." },
        ]}
        ctaTitle="Let's Produce Your Next Corporate Video"
        ctaText="From concept to completion, we deliver cinematic corporate video content that helps your business increase engagement, build trust, and drive sales."
      />
    </>
  );
}
