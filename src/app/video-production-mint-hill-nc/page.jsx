import AreaVideoPage from "@/components/services/AreaVideoPage";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/11/2bd1fc48b0c646bc91d7c1a0450f56ac60767345-2001x1577-1-1024x807.png";

const { metadata, jsonLd } = buildPageSeo({
  slug: "video-production-mint-hill-nc",
  title: "Video Production Company in Mint Hill NC | Corporate & Commercial Video",
  ogTitle: "Mint Hill",
  description:
    "Professional video production in Mint Hill NC for businesses, brands, and organizations. Corporate video, promotional content, and event coverage. Call 704-491-1283",
  datePublished: "2026-01-05T04:00:11+00:00",
  dateModified: "2026-01-05T20:12:20+00:00",
  breadcrumbName: "Mint Hill",
  readingTime: "4 minutes",
  image: OG_IMAGE,
});

export { metadata };

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AreaVideoPage city="Mint Hill" state="NC" image={OG_IMAGE} />
    </>
  );
}
