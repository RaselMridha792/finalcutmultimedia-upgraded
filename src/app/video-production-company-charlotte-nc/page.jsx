import ServicePage from "@/components/services/ServicePage";

export const metadata = { title: "Video Production Agency | Final Cut Multimedia" };

export default function VideoProductionPage() {
  return <ServicePage
    eyebrow="Video Production Agency"
    title="Professional Video Production Services for Businesses"
    heroText="Professional video production is about more than beautiful visuals. It is about content that helps your business communicate clearly, build trust, and achieve specific goals."
    image="https://finalcutmultimedia.com/wp-content/uploads/2025/11/pbokepuiqgmlaczczfmx1.jpg"
    introTitle="Most Businesses Need Video. Few Have Time to Create It."
    introParagraphs={[
      "We create strategic video content for businesses looking to strengthen marketing, sales, recruiting, training, and communication efforts.",
      "We simplify the process by managing every stage, from concept development and filming to editing and delivery, so your team can stay focused on running the business.",
    ]}
    servicesTitle="Video Production Services"
    services={["Corporate Videos", "Promotional Videos", "Customer Testimonial Videos", "Training Videos", "Recruitment Videos", "Brand Story Videos", "Product Videos", "Executive Interviews", "Internal Communication Videos", "Construction and Development Videos", "Automotive Video Content"]}
    secondarySections={[{ title: "Industries We Serve", items: ["Corporate Organizations", "Construction Companies", "Land Development Firms", "Healthcare Organizations", "Manufacturers", "Professional Service Providers", "Automotive Businesses", "Nonprofits", "Local Businesses"] }]}
    why={["20+ Years of Production Experience", "Corporate and Commercial Focus", "Professional Cinema Cameras and Audio", "Full Service Production Support", "Strategic Content Planning", "Reliable Communication and Delivery", "Charlotte-Based Team Serving Businesses Nationwide"]}
    ctaTitle="Ready to Start Your Project?"
    ctaText="Let's discuss your goals and build a video strategy that supports your business."
  />;
}
