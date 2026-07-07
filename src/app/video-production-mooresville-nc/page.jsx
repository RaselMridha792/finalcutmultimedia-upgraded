import AreaVideoPage from "@/components/services/AreaVideoPage";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/11/openart-image_Weu5kWm-_1757381529355_raw.jpg";

const { metadata, jsonLd } = buildPageSeo({
  slug: "video-production-mooresville-nc",
  title: "Professional Video Production in Mooresville NC | Final Cut Multimedia",
  ogTitle: "Mooresville Video Company",
  description:
    "Bring your brand to life with cinematic storytelling and professional video production in Mooresville, NC. Final Cut Multimedia creates videos that attract attention, build trust, and grow your business.",
  datePublished: "2025-11-05T03:46:44+00:00",
  dateModified: "2026-01-05T20:12:18+00:00",
  breadcrumbName: "Mooresville Video Company",
  readingTime: "4 minutes",
  image: OG_IMAGE,
  imageW: 1024,
  imageH: 1024,
  imageType: "image/jpeg",
});

export { metadata };

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AreaVideoPage city="Mooresville" state="NC" image={OG_IMAGE} />
    </>
  );
}
