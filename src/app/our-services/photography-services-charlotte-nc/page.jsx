import ServicePage from "@/components/services/ServicePage";

export const metadata = { title: "Business Photography | Final Cut Multimedia" };

export default function PhotographyPage() {
  return <ServicePage
    eyebrow="Business Photography"
    title="Professional Photography for Businesses, Brands, and Events"
    heroText="Strong visuals help businesses build trust, strengthen their brand, and create a professional first impression."
    image="https://finalcutmultimedia.com/wp-content/uploads/2025/10/ebe708e3-7864-45f8-b7c6-4efaec1b19371.jpg"
    introTitle="Photography That Supports Your Business Goals"
    introParagraphs={[
      "Our photography services provide high-quality imagery for marketing, events, websites, social media, and internal communications.",
      "Today's businesses need authentic visuals that represent their people, culture, products, projects, and services. We help create a professional image library that works across multiple marketing channels.",
    ]}
    servicesTitle="Photography Services"
    services={["Corporate Event Photography", "Conference Photography", "Executive Headshots", "Team Headshots", "Brand Photography", "Marketing Photography", "Construction Progress Photography", "Project Documentation", "Automotive Photography", "Product Photography", "Business Lifestyle Photography", "Community and Nonprofit Events"]}
    secondarySections={[{ title: "Ideal For", items: ["Corporate Organizations", "Construction Companies", "Professional Service Providers", "Healthcare Organizations", "Manufacturers", "Automotive Businesses", "Nonprofits", "Local Businesses", "Growing Brands"] }]}
    why={["Professional and Consistent Quality", "Business-Focused Approach", "Photography and Video Under One Roof", "Fast Delivery Options", "Experienced Event Coverage Team", "Professional Editing and Retouching"]}
    ctaTitle="Let's Capture Your Brand Professionally"
    ctaText="Whether you need event photography, headshots, or marketing imagery, we'll create visuals that represent your business at its best."
  />;
}
