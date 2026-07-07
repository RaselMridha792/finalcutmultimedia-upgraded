import AreaVideoPage from "@/components/services/AreaVideoPage";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/11/2bd1fc48b0c646bc91d7c1a0450f56ac60767345-2001x1577-1.png";

const { metadata, jsonLd } = buildPageSeo({
  slug: "video-production-huntersville-nc",
  title: "Huntersville, NC Video Production & Photography | Corporate & Event Coverage | Final Cut Multimedia",
  ogTitle: "Huntersville Video Company",
  description:
    "Final Cut Multimedia delivers high-quality video production, professional photography, and corporate event coverage in Huntersville, NC. We craft customized, cinematic visual stories that inspire and engage your audience.",
  datePublished: "2025-10-10T15:19:54+00:00",
  dateModified: "2026-01-05T20:16:10+00:00",
  breadcrumbName: "Huntersville Video Company",
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
      <AreaVideoPage city="Huntersville" state="NC" image={OG_IMAGE} />
    </>
  );
}
