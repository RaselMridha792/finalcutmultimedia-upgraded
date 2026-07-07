import MyGallery from '@/components/MyGallery'
import DroneContent from '@/components/services/drone-video-production-in-charlotte-nc/DroneContent'
import DroneDetails from '@/components/services/drone-video-production-in-charlotte-nc/DroneDetails'
import DroneRequestForm from '@/components/services/drone-video-production-in-charlotte-nc/DroneRequestForm'
import DroneServiceHero from '@/components/services/drone-video-production-in-charlotte-nc/DroneServiceHero'
import DroneUseCases from '@/components/services/drone-video-production-in-charlotte-nc/DroneUseCases'
import Map from '@/components/services/drone-video-production-in-charlotte-nc/Map'
import React from 'react'

const PAGE_URL = "https://finalcutmultimedia.com/drone-video-production-in-charlotte-nc/";
const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/11/2bd1fc48b0c646bc91d7c1a0450f56ac60767345-2001x1577-1.png";
const META_DESC = "High-quality drone video production in Charlotte, NC. We provide cinematic aerial footage for marketing, corporate, and commercial projects.";

// ================= লাইভ সাইটের হুবহু ১০০% SEO =================
export const metadata = {
  title: { absolute: "Drone Video Production in Charlotte NC Aerial Video Services" },
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: "Drone Video Production in Charlotte, NC",
    description: META_DESC,
    url: PAGE_URL,
    siteName: "Final Cut Multimedia",
    modifiedTime: "2026-01-03T05:14:33+00:00",
    images: [{ url: OG_IMAGE, width: 2001, height: 1577, type: "image/png" }],
  },
  twitter: { card: "summary_large_image", site: "@fc__multimedia" },
  other: {
    "article:publisher": "https://www.facebook.com/finalcutphoto/",
    "article:modified_time": "2026-01-03T05:14:33+00:00",
    "twitter:label1": "Est. reading time",
    "twitter:data1": "5 minutes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Drone Video Production in Charlotte NC Aerial Video Services",
      isPartOf: { "@id": "https://finalcutmultimedia.com/#website" },
      primaryImageOfPage: { "@id": `${PAGE_URL}#primaryimage` },
      image: { "@id": `${PAGE_URL}#primaryimage` },
      thumbnailUrl: OG_IMAGE,
      datePublished: "2025-12-24T12:40:17+00:00",
      dateModified: "2026-01-03T05:14:33+00:00",
      description: META_DESC,
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en-US",
      potentialAction: [{ "@type": "ReadAction", target: [PAGE_URL] }],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": `${PAGE_URL}#primaryimage`,
      url: OG_IMAGE,
      contentUrl: OG_IMAGE,
      width: 2001,
      height: 1577,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://finalcutmultimedia.com/" },
        { "@type": "ListItem", position: 2, name: "Drone Video Production in Charlotte, NC" },
      ],
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
          target: { "@type": "EntryPoint", urlTemplate: "https://finalcutmultimedia.com/?s={search_term_string}" },
          "query-input": { "@type": "PropertyValueSpecification", valueRequired: true, valueName: "search_term_string" },
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
        contentUrl: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png",
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

export default function page() {
  return (
    <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <DroneServiceHero></DroneServiceHero>
        <DroneDetails></DroneDetails>
        <DroneContent></DroneContent>

        <DroneUseCases></DroneUseCases>
        <MyGallery></MyGallery>
        <DroneRequestForm></DroneRequestForm>
        <Map></Map>
    </div>
  )
}
