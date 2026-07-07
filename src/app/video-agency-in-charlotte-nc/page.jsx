import ServicePage from "@/components/services/ServicePage";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/11/A-high-quality-video-marketing-agency-consultation-in-a-modern-North-Carolina-office.-The-scene.jpeg";

const { metadata, jsonLd } = buildPageSeo({
  slug: "video-agency-in-charlotte-nc",
  title: "Learn Why We’re the Best Video Agency in Charlotte, NC - Final Cut Multimedia",
  ogTitle: "Learn Why We’re the Best Video Agency in Charlotte, NC",
  description:
    "A good video should do more than look nice. It should help people understand your business faster, trust you sooner, and know what to do next. As a video agency in Charlotte, NC, Final Cut Multimedia creates videos with a clear job.",
  datePublished: "2026-05-15T14:52:42+00:00",
  dateModified: "2026-05-15T14:52:43+00:00",
  breadcrumbName: "Learn Why We’re the Best Video Agency in Charlotte, NC",
  readingTime: "6 minutes",
  image: OG_IMAGE,
  imageW: 1344,
  imageH: 768,
  imageType: "image/jpeg",
});

export { metadata };

export default function VideoAgencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="Video Agency in Charlotte, NC"
        title="Learn Why We're the Best Video Agency in Charlotte, NC"
        heroText="A good video should do more than look nice. It should help people understand your business faster, trust you sooner, and know what to do next. As a video agency in Charlotte, NC, Final Cut Multimedia creates videos with a clear job, not random clips that sit on a hard drive."
        image={OG_IMAGE}
        introTitle="Your Business Deserves Video That Works Hard"
        introParagraphs={[
          "We help businesses plan, film, edit, stream, and share content that fits real goals. Your video may need to train a team, promote an event, explain a service, show a property, or make your brand look more credible online. We keep the process clear, so you are not stuck trying to manage five different people just to get one strong video.",
          "Your business deserves video content that works hard after the camera turns off.",
        ]}
        servicesTitle="What Our Video Agency Delivers"
        services={[
          "Strategy-First Video Planning",
          "Corporate and Brand Videos",
          "Event Coverage",
          "Training Videos",
          "Drone Footage",
          "Professional Editing",
          "Live Streaming",
          "Social Media Content",
        ]}
        secondarySections={[
          {
            title: "How We Help Your Business",
            items: [
              { label: "Strategy Comes Before Every Shot", desc: "We start with the real goal first, because a training video should feel different from an event promo or a service video. Once the purpose is clear, the shots, script, pacing, and edits all have something to follow." },
              { label: "Corporate Videos Make Brands Easier to Trust", desc: "A corporate video gives people a quick look at your team, your work, and the way your business shows up — clear, warm, and worth remembering — so they have a better reason to trust you." },
              { label: "Event Coverage Keeps Moments Working Longer", desc: "One event can support recap videos, social clips, email follow-ups, sponsor updates, and future promos, helping your team get more value from work already done." },
              { label: "Training Videos Help Teams Learn the Same Way", desc: "Training videos give everyone one clear lesson they can watch, pause, and come back to later, making onboarding smoother and saving managers time." },
              { label: "Drone Footage Adds Scale and Visual Impact", desc: "Drone footage shows the size, layout, movement, and setting of a property, project, venue, or event in seconds, giving your brand a shot that feels open and polished." },
              { label: "Editing Turns Raw Clips Into Finished Content", desc: "We turn loose clips into finished videos that feel smooth and focused — the story gets easier to follow, the pace matches the purpose, and the final video feels ready." },
              { label: "Live Streaming Connects in Real Time", desc: "Live streaming lets people join events, meetings, panels, and presentations without being in the same room, with clean sound and steady video they can trust." },
            ],
          },
        ]}
        whyTitle="Why We're the Best Video Agency in Charlotte, NC"
        why={[
          "Videos With a Clear Job, Not Random Clips",
          "Strategy Before Every Shot",
          "One Team Instead of Five Different People",
          "Content That Works Hard After the Camera Turns Off",
          "Plan, Film, Edit, Stream, and Share Under One Roof",
          "Charlotte, NC Based Video Agency",
        ]}
        ctaTitle="Contact Our Video Agency in Charlotte, NC"
        ctaText="Your business already has strong stories, real people, and useful proof. Let us turn those pieces into clear video content for sales, training, events, social media, and brand trust."
      />
    </>
  );
}
