import ServicePage from "./ServicePage";

// এলাকা-ভিত্তিক ভিডিও প্রোডাকশন পেজ (city অনুযায়ী প্যারামিটারাইজড) — লাইভ সাইটের হুবহু কন্টেন্ট
export default function AreaVideoPage({ city, state = "NC", image }) {
  return (
    <ServicePage
      eyebrow={`${city} Video Company`}
      title={`${city} Video Production That Brings Your Brand to Life`}
      heroText={`At Final Cut Multimedia, we help ${city} businesses grow through powerful storytelling and strategic video content. From corporate videos to social media campaigns, we create visuals that inspire action, attract attention, and build lasting connections. Get free drone service from one of our certified licensed pilots when you book with us.`}
      image={image || "https://finalcutmultimedia.com/wp-content/uploads/2025/11/2bd1fc48b0c646bc91d7c1a0450f56ac60767345-2001x1577-1.png"}
      introTitle={`Professional Video Production in ${city}, ${state}`}
      introParagraphs={[
        `At Final Cut Multimedia, we help ${city} businesses grow through powerful storytelling and strategic video content. Our team of producers, videographers, and editors delivers cinematic video production designed to help your business stand out in a crowded market.`,
        `At Final Cut Multimedia we create marketing videos that boost your online presence. Whether it's for your website, social media, or content strategy. We handle everything from start to finish, making sure your business stands out and attracts more customers.`,
      ]}
      servicesTitle={`Our ${city} Video Services`}
      services={[
        { label: "Corporate Video Production", desc: "Create professional videos that communicate your brand message and boost visibility online." },
        { label: "Event Videography and Photography", desc: "Capture every key moment from conferences, trade shows, and community events." },
        { label: `Drone Videography in ${city}`, desc: "Showcase your business from above with FAA-licensed aerial footage that highlights your space and brand." },
        { label: "Social Media Videos", desc: "Short-form content crafted to stop the scroll and drive engagement on platforms like Instagram, TikTok, and YouTube." },
        { label: "Training and Internal Videos", desc: "Deliver clear, engaging visuals that make onboarding and education simple." },
      ]}
      secondarySections={[
        {
          title: "Why Businesses Choose Final Cut Multimedia",
          items: [
            { label: "Local Expertise", desc: `Based in ${city}, we understand the local business landscape and what it takes to grab attention.` },
            { label: "Creative Direction", desc: "Every project starts with a solid concept and ends with a cinematic finish that tells your story with purpose." },
            { label: "Professional Production", desc: "High-end cameras, lighting, and post-production that ensure broadcast-quality results every time." },
            { label: "Fast Turnaround", desc: "We respect your timeline and deliver quality videos that are ready when you need them." },
          ],
        },
        {
          title: "Key Points",
          items: [
            "We use top-of-the-line cameras, lenses, and lighting to ensure every image meets professional standards.",
            "We don't just take pictures, we craft visual stories that represent your brand, personality, or event theme.",
            "Expect quick turnaround times without compromising on quality. We value your time as much as your memories.",
            "From professional headshots and event coverage to product shoots and lifestyle portraits, we cover it all.",
          ],
        },
      ]}
      whyTitle="What Sets Us Apart"
      why={[
        "Expert Storytelling That Connects",
        "High-Quality 4K Production Standards",
        "Tailored Solutions for Every Client",
        "Reliable, Efficient, and Passionate Team",
        "Free Drone Service From a Certified Licensed Pilot",
        "Film Packages as Low as $599",
      ]}
      ctaTitle="Your Vision. Our Lens. Let's Create Something Unforgettable."
      ctaText={`If you're ready to bring your story to life with professional video production in ${city}, Final Cut Multimedia is your creative partner. Proudly serving Charlotte, Concord, Gastonia, Rock Hill, and the surrounding region.`}
    />
  );
}
