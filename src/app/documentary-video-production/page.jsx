import ServicePage from "@/components/services/ServicePage";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/11/508210860_2540904452913217_1003757841160592830_n.jpg";

const { metadata, jsonLd } = buildPageSeo({
  slug: "documentary-video-production",
  title: "Documentary Video Production in Charlotte North Carolina",
  ogTitle: "Documentary Video Production",
  description:
    "Documentaries in Charlotte, North Carolina, that show real people, real moments, and real impact for your business or nonprofit.",
  datePublished: "2025-11-29T00:41:18+00:00",
  dateModified: "2026-01-05T20:14:22+00:00",
  breadcrumbName: "Documentary Video Production",
  readingTime: "7 minutes",
  image: OG_IMAGE,
  imageW: 2048,
  imageH: 1152,
  imageType: "image/jpeg",
});

export { metadata };

export default function DocumentaryVideoProductionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="Documentary Video Production"
        title="Documentary Video Production in Charlotte North Carolina"
        heroText="Documentary video production in Charlotte North Carolina is one of the strongest ways to show people who you really are. We create documentary style videos for businesses, nonprofits, schools, churches, and personal brands that want real stories, not staged lines."
        image={OG_IMAGE}
        introTitle="Documentary Video Production in Charlotte North Carolina"
        introParagraphs={[
          "Documentary video production in Charlotte North Carolina is one of the strongest ways to show people who you really are. At Final Cut Multimedia we create documentary style videos for businesses, nonprofits, schools, churches, and personal brands that want real stories, not staged lines.",
          "From planning and interviews to B roll and final editing, our documentary video production team in Charlotte North Carolina handles the complete process so you walk away with a film that builds trust and supports your marketing for years. Our focus is simple: real people, real moments, filmed with care.",
        ]}
        servicesTitle="Documentary Video Production Services in Charlotte North Carolina"
        services={[
          "Strategy and Story Development",
          "Filming Interviews on Location in Charlotte",
          "B-Roll Filming That Strengthens Your Story",
          "Professional Editing, Color Correction, Music, and Graphics",
          "Multiple Versions for Web and Social Media",
          "Brand Story and Mission Documentaries",
        ]}
        secondarySections={[
          {
            title: "Why Your Brand Needs Documentary Video Production",
            items: [
              "Build trust by letting viewers hear from real customers and real team members",
              "Show your story, your process, and your impact in a natural way",
              "Turn your company history or mission into a clear brand story documentary",
              "Help donors, clients, and partners feel confident choosing you",
              "Stand out from competitors who rely on short clips with no depth",
            ],
          },
          {
            title: "Our Documentary Video Production Process",
            items: [
              { label: "Discovery and Story Call", desc: "We start with a clear conversation about your goals, your audience, and your story, and where the video will be used." },
              { label: "Pre-Production Planning", desc: "We prepare interview questions that pull out real stories and confirm locations in Charlotte North Carolina or nearby areas." },
              { label: "Filming Interviews and B-Roll", desc: "Our crew sets up cameras, lighting, and professional audio, directs relaxed interviews, and captures B-roll that matches the story." },
              { label: "Editing and Story Shaping", desc: "We select the strongest soundbites, build a clear story structure, color correct for a cinematic look, and add titles and graphics." },
              { label: "Delivery for Web and Social", desc: "We export a main full-length documentary for your website plus clips and cutdowns for email marketing and presentations." },
            ],
          },
          {
            title: "Types of Documentary Videos We Produce",
            items: [
              "Customer and client testimonial documentaries",
              "Educational and training documentaries for staff and students",
              "Event recap videos with a documentary-style approach",
              "Brand story and company history documentaries",
            ],
          },
        ]}
        whyTitle="Why Work With Final Cut Multimedia for Documentary Video Production"
        why={[
          "Real People, Real Moments, Filmed With Care",
          "Clear Communication Before, During, and After Filming",
          "Honest Guidance on What Will Work and What Will Not",
          "A Finished Documentary That Reflects Well on Your Brand",
          "A Charlotte, North Carolina Video Production Company",
          "Respect the Client, the Schedule, and the Story",
        ]}
        faqs={[
          { q: "What sets Final Cut Multimedia apart in the industry?", a: "Our strength lies in combining cinematic production quality with personalized storytelling. Every project is tailored to reflect your unique brand, event, or vision." },
          { q: "How do we capture the essence of special moments?", a: "We focus on authentic emotions, candid interactions, and meticulous detail — ensuring each frame feels natural yet impactful." },
          { q: "Why should businesses choose us for corporate content?", a: "We understand business communication. From training videos to social media campaigns, our productions are designed to inform, inspire, and engage your audience effectively." },
        ]}
        ctaTitle="Start Your Documentary Video Production in Charlotte North Carolina"
        ctaText="If you are serious about telling your story the right way, a professionally produced documentary video is worth the investment. Reach out today and let us turn your real story into a film that works for your business, your organization, and your audience."
      />
    </>
  );
}
