import AreaVideoPage from "@/components/services/AreaVideoPage";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/11/2bd1fc48b0c646bc91d7c1a0450f56ac60767345-2001x1577-1.png";

const { metadata, jsonLd } = buildPageSeo({
  slug: "video-production-rock-hill-nc",
  title: "Rock Hill SC Video Production Company | Final Cut Multimedia",
  ogTitle: "Rock Hill Video Company",
  description:
    "Boost your brand with professional video production in Rock Hill SC by Final Cut Multimedia. Capture attention, tell your story, and turn viewers into customers.",
  datePublished: "2025-11-05T04:23:56+00:00",
  dateModified: "2026-01-05T20:12:16+00:00",
  breadcrumbName: "Rock Hill Video Company",
  readingTime: "4 minutes",
  image: OG_IMAGE,
  imageW: 2001,
  imageH: 1577,
  imageType: "image/png",
});

export { metadata };

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AreaVideoPage city="Rock Hill" state="SC" image={OG_IMAGE} />
    </>
  );
}
