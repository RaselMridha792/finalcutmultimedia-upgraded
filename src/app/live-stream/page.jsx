import ServicePage from "@/components/services/ServicePage";
import { buildPageSeo } from "@/lib/seo";

const { metadata, jsonLd } = buildPageSeo({
  slug: "live-stream",
  title: "Live Stream Service in Charlotte NC | Business Video Production",
  ogTitle: "Live Stream Service in Charlotte NC",
  description:
    "Expand your event's reach globally with our high-quality live-streaming services. Contact us to invest in professional video production in Charlotte, NC!",
  datePublished: "2025-10-18T17:34:16+00:00",
  dateModified: "2025-11-09T22:09:25+00:00",
  breadcrumbName: "Live Stream Service in Charlotte NC",
  readingTime: "1 minute",
});

export { metadata };

export default function LiveStreamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="Live Streaming in Charlotte, NC"
        title="Event & Corporate Live Streaming in Charlotte NC"
        heroText="Elevate your event, stream with confidence. At Final Cut Multimedia, we deliver high quality live streaming in Charlotte NC that brings your message directly to the audience and makes them stay."
        image="https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg"
        introTitle="Live Streaming in Charlotte, NC"
        introParagraphs={[
          "At Final Cut Multimedia, we deliver high quality live streaming in Charlotte NC that brings your message directly to the audience and makes them stay. Whether you're broadcasting a corporate conference, a product launch, a panel discussion, or a live community event, our expert crew ensures every moment is captured, every shot is compelling, and the stream performs seamlessly.",
          "We handle end-to-end production. From setting up multi-camera rigs and professional audio capture to deploying secure streaming platforms and delivering interactive live experiences — your Charlotte audience gets premium production that looks broadcast level and drives real engagement.",
        ]}
        servicesTitle="Our Live Streaming Service Packages in Charlotte"
        services={[
          { label: "Corporate Live Streaming", desc: "Perfect for executive messages, board meetings, live demos, and stakeholder briefings." },
          { label: "Event Live Stream Production", desc: "Conferences, trade shows, product launches, and charity events in Charlotte — bring your event to a virtual audience." },
          { label: "Hybrid Streaming Solutions", desc: "Combine onsite capture in Charlotte with remote guests and virtual attendees, professionally managed end-to-end." },
          { label: "Live Training & Webinar Streaming", desc: "Deliver high-impact training sessions, webinars, or internal broadcasts with studio-level production values." },
          { label: "24/7 Streaming & Multi-Day Broadcasts", desc: "Need marathon coverage or continuous streaming? We've got the infrastructure for long-form live events." },
        ]}
        secondarySections={[
          {
            title: "Why Choose Us for Live Streaming in Charlotte",
            items: [
              { label: "Local Expertise", desc: "Based in the greater Charlotte region, we know the logistics, venues, internet infrastructure, and audience behavior specific to the area." },
              { label: "Cutting-Edge Production Gear", desc: "We use professional cameras, high fidelity audio, multi-angle switching, live graphics, and dedicated uplinks so your live stream looks polished and reliable." },
              { label: "Seamless Multi-Platform Delivery", desc: "Whether Facebook Live, YouTube Live, Zoom Webinar, private corporate streaming, or hybrid in-person/virtual events — we integrate the right platform strategy." },
              { label: "Real-Time Engagement & Analytics", desc: "We equip you with live chat moderation, guest switching, branded graphics, and post-event analytics so you can measure impact and follow up with your viewers." },
              { label: "Full Support from Concept to Broadcast", desc: "From pre-production planning (site recce, bandwidth test, script timing) to post-event recording and repurposing highlights — we cover it all." },
            ],
          },
          {
            title: "How We Make It Work",
            items: [
              { label: "Pre-Production & Planning", desc: "We assess venue internet, camera positions, lighting, audio, and graphics set, and pre-test everything." },
              { label: "Production Crew On-Site in Charlotte", desc: "Experienced technicians, switching engineers, live graphics, audio operators, and camera operators handle every detail." },
              { label: "Stream Delivery & Monitoring", desc: "We broadcast to one or multiple platforms, monitor latency, manage viewer experience, and ensure stream stability." },
              { label: "Post-Event Delivery", desc: "We provide full event recording, highlight clips, an analytics dashboard, and an optional distribution strategy." },
            ],
          },
        ]}
        whyTitle="Your Live Stream Should Look As Good As Your Brand"
        why={[
          "Broadcast-Level Multi-Camera Production",
          "Facebook Live, YouTube Live, and Zoom Delivery",
          "Church Services, Weddings, Concerts, and Conferences",
          "We Bring All Cameras, Microphones, and Streaming Gear",
          "Every Event Recorded and Shareable for Later",
          "Serving Charlotte, Concord, Gastonia, and Huntersville NC",
        ]}
        faqs={[
          { q: "What types of events can you live stream?", a: "We can stream a wide range of events including church services, weddings, concerts, conferences, and corporate gatherings." },
          { q: "Do I need to provide my own equipment?", a: "No — we handle everything. Our team brings all the professional cameras, microphones, and streaming gear needed for a seamless broadcast." },
          { q: "Will my live stream be saved for later viewing?", a: "Yes! Every event can be recorded and shared across social media platforms like Facebook and YouTube, or saved for future use and promotion." },
        ]}
        ctaTitle="Stream Your Next Event With Confidence"
        ctaText="Don't settle for basic webcam streaming. Give your audience a premium experience with our Charlotte-based production team. Serving Charlotte NC, Concord NC, Gastonia NC, Huntersville NC, and surrounding areas."
      />
    </>
  );
}
