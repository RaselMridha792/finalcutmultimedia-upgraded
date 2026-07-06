import ServicePage from "@/components/services/ServicePage";

export const metadata = { title: "Event Coverage | Final Cut Multimedia" };

export default function EventCoveragePage() {
  return <ServicePage
    eyebrow="Professional Event Coverage"
    title="Event Coverage That Extends the Life of Your Event"
    heroText="Your event may last a day, but the content it generates can create value for months to come."
    image="https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg"
    introTitle="More Than Event Videography"
    introParagraphs={[
      "We provide professional coverage for conferences, corporate meetings, trade shows, nonprofit events, product launches, company celebrations, and live experiences.",
      "Our team works professionally and discreetly while capturing keynote presentations, attendee engagement, interviews, networking opportunities, sponsor visibility, and branded experiences.",
    ]}
    servicesTitle="Event Coverage Services"
    services={["Conference Coverage", "Corporate Events", "Trade Shows", "Award Ceremonies", "Fundraisers and Nonprofit Events", "Product Launches", "Company Celebrations", "Networking Events", "Speaker Sessions", "Testimonial Interviews", "Photography Add-On Services"]}
    secondarySections={[{ title: "Deliverables May Include", items: ["Event Highlight Videos", "Social Media Clips", "Speaker Recordings", "Session Coverage", "Testimonial Videos", "Photography Galleries", "Promotional Recap Videos", "Branded Marketing Content"] }]}
    whyTitle="Why Businesses Choose Final Cut Multimedia"
    why={["Experienced Event Production Team", "Professional Audio and Multi-Camera Coverage", "Corporate Event Experience", "Video and Photography Solutions", "Reliable Communication from Start to Finish"]}
    ctaTitle="Let's Capture Your Next Event"
    ctaText="Tell us about your event and we'll build a coverage plan that fits your goals."
  />;
}
