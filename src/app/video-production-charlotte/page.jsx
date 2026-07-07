import AreaVideoPage from "@/components/services/AreaVideoPage";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/11/2bd1fc48b0c646bc91d7c1a0450f56ac60767345-2001x1577-1.png";

const { metadata, jsonLd } = buildPageSeo({
  slug: "video-production-charlotte",
  title: "Charlotte, NC Video Production & Photography Services | Corporate & Event Films | Final Cut Multimedia",
  ogTitle: "Charlotte Video Company",
  description:
    "Final Cut Multimedia delivers high-quality video production, professional photography, and corporate event coverage in Charlotte, NC. We specialize in cinematic storytelling and customized visual content that inspires and engages your audience.",
  datePublished: "2025-10-10T15:16:46+00:00",
  dateModified: "2026-01-05T20:14:17+00:00",
  breadcrumbName: "Charlotte Video Company",
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
      <AreaVideoPage city="Charlotte" state="NC" image={OG_IMAGE} />
    </>
  );
}
