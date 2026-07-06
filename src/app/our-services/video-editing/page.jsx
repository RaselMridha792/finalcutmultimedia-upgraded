import ServicePage from "@/components/services/ServicePage";

export const metadata = { title: "Video Editing | Final Cut Multimedia" };

export default function VideoEditingPage() {
  return <ServicePage
    eyebrow="Professional Post Production"
    title="Professional Video Editing Services for Businesses"
    heroText="Great content does not happen in the camera alone. Editing is where footage becomes a compelling story, a clear message, and a polished final product."
    image="https://finalcutmultimedia.com/wp-content/uploads/2025/10/Mac-Two-Computers-Display.jpg"
    introTitle="Turn Raw Footage Into Professional Content"
    introParagraphs={[
      "We provide video editing for businesses, agencies, production companies, marketing teams, and content creators. Whether the footage was captured by our team or yours, we transform raw files into professional content ready for distribution.",
      "Our editing team handles post production from start to finish, allowing your team to focus on strategy, marketing, and business operations.",
    ]}
    servicesTitle="Video Editing Services"
    services={["Corporate Video Editing", "Event Highlight Videos", "Customer Testimonial Videos", "Training Videos", "Promotional Videos", "YouTube Videos", "Social Media Videos", "Podcast Editing", "Interview Editing", "Construction and Development Content", "Automotive Video Content", "Multi-Camera Editing"]}
    secondarySections={[
      { title: "What's Included", items: ["Footage Organization", "Professional Editing", "Color Correction", "Audio Cleanup", "Licensed Music", "Text Overlays", "Basic Motion Graphics", "Captioning Options", "Multiple Format Deliverables", "Review and Revision Process"] },
      { title: "Who We Work With", items: ["Businesses and Brands", "Marketing Agencies", "Production Companies", "Corporate Teams", "Event Organizers", "Construction Companies", "Automotive Businesses", "Nonprofits", "Content Creators"] },
    ]}
    why={["Business-Focused Storytelling", "Fast and Reliable Turnaround", "Professional Post Production Workflow", "Consistent Communication", "Scalable Editing Support", "High-Quality Deliverables"]}
    ctaTitle="Need Help With Editing?"
    ctaText="Whether you need support for a single project or ongoing post production assistance, we're ready to help."
  />;
}
