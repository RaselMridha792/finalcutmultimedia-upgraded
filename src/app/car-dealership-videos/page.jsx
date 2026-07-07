import ServicePage from "@/components/services/ServicePage";
import { buildPageSeo } from "@/lib/seo";

const { metadata, jsonLd } = buildPageSeo({
  slug: "car-dealership-videos",
  title: "Car Dealership Videos in Charlotte, NC | Final Cut Multimedia",
  ogTitle: "Car Dealership Videos",
  description:
    "Showcase your inventory with stunning car dealership videos in Charlotte, NC. We use cinematic quality and drone footage to highlight vehicle details, drive engagement, and convert viewers into buyers.",
  datePublished: "2025-10-09T20:06:04+00:00",
  dateModified: "2026-04-15T18:23:46+00:00",
  breadcrumbName: "Car Dealership Videos",
  readingTime: "1 minute",
});

export { metadata };

export default function CarDealershipVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="Car Dealership Videos"
        title="Showcase Your Dealership With Dynamic Car Videos"
        heroText="At Final Cut Multimedia, we help car dealerships capture attention and drive sales through high-quality, cinematic videos designed to highlight every detail — from sleek exteriors and luxurious interiors to engine performance and brand personality."
        image="https://finalcutmultimedia.com/wp-content/uploads/2025/10/professional-video-production-for-car-dealers-1-768x439-1.jpeg"
        introTitle="Car Dealership Video Production in Charlotte, NC"
        introParagraphs={[
          "At Final Cut Multimedia, we help car dealerships capture attention and drive sales through high-quality, cinematic videos. Our car dealership video production services are designed to highlight every detail — from sleek exteriors and luxurious interiors to engine performance and brand personality.",
          "We understand that today's customers connect visually before they step into a showroom. That's why our team creates stunning, story-driven videos that bring your vehicles — and your dealership — to life. Whether you're promoting a single model, highlighting special offers, or showcasing your entire inventory, our videos are crafted to attract, engage, and convert viewers into buyers.",
        ]}
        servicesTitle="Car Dealership Video Services"
        services={[
          "Inventory Showcase Videos",
          "Single Model Spotlights",
          "Special Offer and Promotion Videos",
          "Dealership Brand Videos",
          "Drone and Aerial Footage",
          "Walkaround and Feature Videos",
          "Social Media and Advertising Content",
          "Test Drive and Lifestyle Videos",
        ]}
        secondarySections={[
          {
            title: "Key Points",
            items: [
              "We specialize in car dealership videography, knowing exactly how to capture angles and features that sell.",
              "Our videos are optimized for websites, social media, and advertising platforms — helping you reach more customers.",
              "From pre-production planning and shooting to editing and post-production, we handle everything start to finish.",
              "Using cinematic cameras and drone footage, we deliver visually stunning, professional-grade videos.",
            ],
          },
        ]}
        whyTitle="Why Choose Final Cut Multimedia?"
        why={[
          "Car Dealership Videography Specialists",
          "Cinematic Cameras and Drone Footage",
          "Optimized for Web, Social, and Advertising",
          "Full Service From Pre-Production to Delivery",
          "Story-Driven Videos That Convert Buyers",
          "Charlotte, NC Based Automotive Video Team",
        ]}
        faqs={[
          { q: "What sets Final Cut Multimedia apart in the industry?", a: "Our strength lies in combining cinematic production quality with personalized storytelling. Every project is tailored to reflect your unique brand, event, or vision." },
          { q: "How do we capture the essence of special moments?", a: "We focus on authentic emotions, candid interactions, and meticulous detail — ensuring each frame feels natural yet impactful." },
          { q: "Why should businesses choose us for corporate content?", a: "We understand business communication. From training videos to social media campaigns, our productions are designed to inform, inspire, and engage your audience effectively." },
        ]}
        ctaTitle="Let's Showcase Your Inventory"
        ctaText="From single model spotlights to full inventory showcases, we create cinematic car dealership videos that attract, engage, and convert viewers into buyers."
      />
    </>
  );
}
