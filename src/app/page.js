import AboutSection from "@/components/home/About";
import ClientMarquee from "@/components/home/ClientMarquee";
import ContactSection from "@/components/home/ContactSection";
import DriveResults from "@/components/home/DriveResults";
import FilmPackages from "@/components/home/FilmPackages";
import HeroSection from "@/components/home/Hero";
import KeyPoints from "@/components/home/KeyPoints";
import ProcessSection from "@/components/home/ProcessSection";
import RecentPostsSection from "@/components/home/RecentPost";
import RestaurantAssociation from "@/components/home/RestaurantAssociation";
import ServicesGrid from "@/components/home/ServicesGrid";
import SocialGallery from "@/components/home/SocialGallery";
import StatsCounter from "@/components/home/StatsCounter";
import TestimonialSection from "@/components/home/TestimonialSection";
import VideoGallery from "@/components/home/VideoGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const OG_IMAGE =
  "https://finalcutmultimedia.com/wp-content/uploads/2025/11/2bd1fc48b0c646bc91d7c1a0450f56ac60767345-2001x1577-1.png";
const FAVICON =
  "https://finalcutmultimedia.com/wp-content/uploads/2025/10/favicon-32x32-1.png";
const META_DESC =
  "At Final Cut Multimedia we do photography & film commercials for social media & websites. Market your brand to its fullest potential & get seen, heard & paid!";

// ================= হোমপেজের ১০০% SEO (লাইভ সাইটের হুবহু ট্যাগ) =================
export const metadata = {
  metadataBase: new URL("https://finalcutmultimedia.com"),
  title: {
    absolute: "Video Production Company in Charlotte NC | Final Cut Multimedia",
  },
  description: META_DESC,
  alternates: {
    canonical: "https://finalcutmultimedia.com/",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Home",
    description: META_DESC,
    url: "https://finalcutmultimedia.com/",
    siteName: "Final Cut Multimedia",
    images: [
      {
        url: OG_IMAGE,
        width: 2001,
        height: 1577,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fc__multimedia",
  },
  icons: {
    icon: [
      { url: FAVICON, sizes: "32x32" },
      { url: FAVICON, sizes: "192x192" },
    ],
    apple: FAVICON,
  },
  other: {
    "article:publisher": "https://www.facebook.com/finalcutphoto/",
    "article:modified_time": "2026-07-01T13:58:23+00:00",
    "msapplication-TileImage": FAVICON,
  },
};

export const viewport = {
  themeColor: "#000000",
};

// লাইভ সাইটের Yoast JSON-LD @graph হুবহু (WebPage / ImageObject / BreadcrumbList / WebSite / Organization)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://finalcutmultimedia.com/",
      url: "https://finalcutmultimedia.com/",
      name: "Video Production Company in Charlotte NC | Final Cut Multimedia",
      isPartOf: { "@id": "https://finalcutmultimedia.com/#website" },
      about: { "@id": "https://finalcutmultimedia.com/#organization" },
      primaryImageOfPage: { "@id": "https://finalcutmultimedia.com/#primaryimage" },
      image: { "@id": "https://finalcutmultimedia.com/#primaryimage" },
      thumbnailUrl:
        "https://finalcutmultimedia.com/wp-content/uploads/2025/11/2bd1fc48b0c646bc91d7c1a0450f56ac60767345-2001x1577-1-1536x1211.png",
      datePublished: "2025-10-03T20:36:19+00:00",
      dateModified: "2026-07-01T13:58:23+00:00",
      description: META_DESC,
      breadcrumb: { "@id": "https://finalcutmultimedia.com/#breadcrumb" },
      inLanguage: "en-US",
      potentialAction: [
        { "@type": "ReadAction", target: ["https://finalcutmultimedia.com/"] },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://finalcutmultimedia.com/#primaryimage",
      url: OG_IMAGE,
      contentUrl: OG_IMAGE,
      width: 2001,
      height: 1577,
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://finalcutmultimedia.com/#breadcrumb",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home" }],
    },
    {
      "@type": "WebSite",
      "@id": "https://finalcutmultimedia.com/#website",
      url: "https://finalcutmultimedia.com/",
      name: "Final Cut Multimedia",
      description: "",
      publisher: { "@id": "https://finalcutmultimedia.com/#organization" },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://finalcutmultimedia.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://finalcutmultimedia.com/#organization",
      name: "Final Cut Multimedia",
      url: "https://finalcutmultimedia.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://finalcutmultimedia.com/#/schema/logo/image/",
        url: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png",
        contentUrl:
          "https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png",
        width: 690,
        height: 706,
        caption: "Final Cut Multimedia",
      },
      image: { "@id": "https://finalcutmultimedia.com/#/schema/logo/image/" },
      sameAs: [
        "https://www.facebook.com/finalcutphoto/",
        "https://x.com/fc__multimedia",
        "https://www.linkedin.com/company/final-cut-multimedia/",
        "https://www.instagram.com/fcmultimedia/",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* লাইভ সাইটের হুবহু structured data (schema.org @graph) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <VideoGallery />
        <WhyChooseUs />
        <StatsCounter />
        <KeyPoints />
        <RestaurantAssociation />
        <ServicesGrid />
        <FilmPackages />
        <DriveResults />
        <TestimonialSection />
        <ProcessSection />
        <ClientMarquee />
        <SocialGallery />
        <RecentPostsSection />
        <ContactSection />
      </main>
    </>
  );
}
