// পুরনো লাইভ সাইটের Yoast-স্টাইল SEO (metadata + JSON-LD) হুবহু তৈরির হেল্পার
const SITE = "https://finalcutmultimedia.com";

const WEBSITE_NODE = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: `${SITE}/`,
  name: "Final Cut Multimedia",
  description: "",
  publisher: { "@id": `${SITE}/#organization` },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE}/?s={search_term_string}` },
      "query-input": { "@type": "PropertyValueSpecification", valueRequired: true, valueName: "search_term_string" },
    },
  ],
  inLanguage: "en-US",
};

const ORG_NODE = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "Final Cut Multimedia",
  url: `${SITE}/`,
  logo: {
    "@type": "ImageObject",
    inLanguage: "en-US",
    "@id": `${SITE}/#/schema/logo/image/`,
    url: `${SITE}/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png`,
    contentUrl: `${SITE}/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png`,
    width: 690,
    height: 706,
    caption: "Final Cut Multimedia",
  },
  image: { "@id": `${SITE}/#/schema/logo/image/` },
  sameAs: [
    "https://www.facebook.com/finalcutphoto/",
    "https://x.com/fc__multimedia",
    "https://www.linkedin.com/company/final-cut-multimedia/",
    "https://www.instagram.com/fcmultimedia/",
  ],
};

// একটি পেজের সম্পূর্ণ SEO (metadata object + JSON-LD graph) তৈরি করে
export function buildPageSeo({
  slug,
  title,          // exact <title> (absolute)
  ogTitle,        // og:title / twitter:title
  description,
  datePublished,
  dateModified,
  breadcrumbName,
  readingTime,    // e.g. "2 minutes"
  image,          // og:image url (optional)
  imageW,
  imageH,
  imageType,      // e.g. "image/jpeg"
}) {
  const url = `${SITE}/${slug}/`;

  const metadata = {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_US",
      title: ogTitle,
      description,
      url,
      siteName: "Final Cut Multimedia",
      modifiedTime: dateModified,
      ...(image
        ? { images: [{ url: image, ...(imageW ? { width: imageW, height: imageH, type: imageType } : {}) }] }
        : {}),
    },
    twitter: { card: "summary_large_image", title: ogTitle, site: "@fc__multimedia" },
    other: {
      "article:publisher": "https://www.facebook.com/finalcutphoto/",
      "article:modified_time": dateModified,
      "twitter:label1": "Est. reading time",
      "twitter:data1": readingTime,
    },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": url,
    url,
    name: title,
    isPartOf: { "@id": `${SITE}/#website` },
    ...(image
      ? {
          primaryImageOfPage: { "@id": `${url}#primaryimage` },
          image: { "@id": `${url}#primaryimage` },
          thumbnailUrl: image,
        }
      : {}),
    datePublished,
    dateModified,
    description,
    breadcrumb: { "@id": `${url}#breadcrumb` },
    inLanguage: "en-US",
    potentialAction: [{ "@type": "ReadAction", target: [url] }],
  };

  const graph = [webPage];
  if (image) {
    graph.push({
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": `${url}#primaryimage`,
      url: image,
      contentUrl: image,
      ...(imageW ? { width: imageW, height: imageH } : {}),
    });
  }
  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: breadcrumbName },
    ],
  });
  graph.push(WEBSITE_NODE, ORG_NODE);

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };
  return { metadata, jsonLd };
}

const PERSON_ID = `${SITE}/#/schema/person/finalcut-author`;

// ব্লগ পোস্টের (Article) SEO — লাইভ সাইটের Yoast @graph অনুযায়ী
export function buildArticleSeo({
  path,            // e.g. "2026/07/05/why-fresh-video-content-matters-for-business"
  title,
  description,
  image,
  imageW,
  imageH,
  imageType,
  publishedTime,
  modifiedTime,
  author = "Tyrell",
  readingTime,
  breadcrumbName,
}) {
  const url = `${SITE}/${path}/`;
  const mod = modifiedTime || publishedTime;

  const metadata = {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_US",
      title,
      description,
      url,
      siteName: "Final Cut Multimedia",
      publishedTime,
      modifiedTime: mod,
      authors: [author],
      ...(image ? { images: [{ url: image, ...(imageW ? { width: imageW, height: imageH, type: imageType } : {}) }] } : {}),
    },
    twitter: { card: "summary_large_image", title, site: "@fc__multimedia" },
    other: {
      "article:publisher": "https://www.facebook.com/finalcutphoto/",
      "article:published_time": publishedTime,
      "article:modified_time": mod,
      "twitter:label1": "Est. reading time",
      "twitter:data1": readingTime,
      "twitter:label2": "Written by",
      "twitter:data2": author,
    },
  };

  const graph = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      isPartOf: { "@id": url },
      author: { "@id": PERSON_ID },
      headline: title,
      datePublished: publishedTime,
      dateModified: mod,
      mainEntityOfPage: { "@id": url },
      publisher: { "@id": `${SITE}/#organization` },
      image: { "@id": `${url}#primaryimage` },
      thumbnailUrl: image,
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": url,
      url,
      name: title,
      isPartOf: { "@id": `${SITE}/#website` },
      ...(image ? { primaryImageOfPage: { "@id": `${url}#primaryimage` }, image: { "@id": `${url}#primaryimage` }, thumbnailUrl: image } : {}),
      datePublished: publishedTime,
      dateModified: mod,
      description,
      breadcrumb: { "@id": `${url}#breadcrumb` },
      inLanguage: "en-US",
      potentialAction: [{ "@type": "ReadAction", target: [url] }],
    },
    ...(image
      ? [{ "@type": "ImageObject", inLanguage: "en-US", "@id": `${url}#primaryimage`, url: image, contentUrl: image, ...(imageW ? { width: imageW, height: imageH } : {}) }]
      : []),
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: breadcrumbName || title },
      ],
    },
    WEBSITE_NODE,
    ORG_NODE,
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: author,
      url: `${SITE}/`,
    },
  ];

  return { metadata, jsonLd: { "@context": "https://schema.org", "@graph": graph } };
}
