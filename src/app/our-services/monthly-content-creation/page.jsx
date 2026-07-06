import ServicePage from "@/components/services/ServicePage";

export const metadata = { title: "Monthly Content Creation | Final Cut Multimedia" };

export default function MonthlyContentCreationPage() {
  return <ServicePage
    eyebrow="Recurring Content Production"
    title="Consistent Content Without Starting From Scratch Every Month"
    heroText="We help businesses create a steady stream of professional video content through an efficient production system designed for long-term growth and visibility."
    image="https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-1-1-scaled.jpeg"
    introTitle="Stay Visible. Stay Relevant. Stay Consistent."
    introParagraphs={[
      "Instead of producing one video at a time, we help you build a content library that supports your marketing throughout the month.",
      "During a single production session, we capture multiple pieces of content that become a variety of finished deliverables, helping your business maintain a consistent presence without constantly planning new productions.",
    ]}
    servicesTitle="What Monthly Content Creation May Include"
    services={["Educational Videos", "Promotional Videos", "Customer Testimonials", "Behind the Scenes Content", "Company Updates", "Recruitment Videos", "Project Highlights", "Interview Videos", "Short Form Videos", "Content for YouTube, LinkedIn, and Websites"]}
    secondarySections={[
      { title: "How It Works", items: ["Planning: identify opportunities aligned with your goals and audience", "Scheduled Production Day: capture multiple pieces of content", "Editing and Content Creation: create varied deliverables throughout the month", "Delivery: receive content ready for your marketing channels", "Repeat and Scale: grow visibility, authority, and consistency"] },
      { title: "Who Is This For?", items: ["Construction Companies", "Land Development Firms", "Automotive Businesses", "Corporate Organizations", "Professional Service Providers", "Healthcare Organizations", "Manufacturers", "Nonprofits", "Growing Brands", "Businesses Looking to Stay Visible Year Round"] },
      { title: "Frequently Asked Question", items: ["Is this social media management? No. We create the professional assets your team can publish, but we do not manage accounts or provide social media management services."] },
    ]}
    showProcess={false}
    whyTitle="Why Businesses Choose Monthly Content Creation"
    why={["Consistent Professional Content", "Efficient Content Production", "Better Return on Filming Days", "Stronger Brand Visibility", "Ongoing Marketing Assets", "Scalable Content Strategy", "Dedicated Production Partner", "No Need to Start From Scratch Every Month"]}
    ctaTitle="Build a Content Engine for Your Business"
    ctaText="If you're tired of scrambling for content every month, let's create a system that keeps your business visible year round."
  />;
}
