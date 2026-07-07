import ServicePage from "@/components/services/ServicePage";

export const metadata = {
  title: "Additional Production Services | Final Cut Multimedia",
  description:
    "Specialized production services from Final Cut Multimedia in Charlotte, NC — executive headshots, live streaming, drone and aerial footage, training videos, and documentary storytelling for businesses and organizations.",
};

export default function AdditionalProductionServicesPage() {
  return <ServicePage
    eyebrow="Specialized Production"
    title="Specialized Production Services for Unique Projects"
    heroText="From executive headshots and live event streaming to aerial footage, training content, and documentary storytelling, we provide professional support tailored to your goals."
    image="https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-1-1-scaled.jpeg"
    introTitle="More Ways to Communicate, Educate, Document, and Engage"
    introParagraphs={[
      "Some projects require more than traditional video production or event coverage. Our specialized services help businesses, organizations, and agencies engage audiences in meaningful ways.",
      "We bring the same reliable planning, professional equipment, and story-driven approach to every specialized production.",
    ]}
    servicesTitle="Headshots"
    services={["Executive Headshots", "Team Photography", "Staff Portraits", "Branding Imagery", "Corporate Teams", "Healthcare Organizations", "Sales Teams", "Recruiting and Hiring Initiatives"]}
    secondarySections={[
      { title: "Live Streaming Solutions", items: ["Conferences", "Webinars", "Panel Discussions", "Training Sessions", "Community Events", "Fundraisers", "Special Presentations"] },
      { title: "Drone Applications", items: ["Construction Progress Tracking", "Land Development Projects", "Commercial Properties", "Corporate Marketing Videos", "Event Coverage", "Promotional Content", "Aerial Photography", "Project Documentation"] },
      { title: "Training Video Solutions", items: ["Employee Onboarding", "Safety Training", "Operational Procedures", "Software Training", "Leadership Development", "Customer Service Training", "Internal Communications", "Educational Content"] },
      { title: "Documentary Projects", items: ["Company Stories", "Nonprofit Campaigns", "Community Initiatives", "Historical Projects", "Mission-Driven Organizations", "Personal and Family Documentaries", "Educational Films", "Cause Awareness Campaigns"] },
    ]}
    showProcess={false}
    why={["20+ Years of Production Experience", "Professional Cinema Cameras and Audio", "Experienced Production Team", "Story-Driven Approach", "Corporate and Commercial Expertise", "Reliable Communication and Delivery", "Full Service Production Support"]}
    ctaTitle="Let's Discuss Your Project"
    ctaText="Tell us about your goals and we'll help determine the best production approach for your project."
  />;
}
