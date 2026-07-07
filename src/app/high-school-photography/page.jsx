import ServicePage from "@/components/services/ServicePage";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/10/image17-1.jpg";

const { metadata, jsonLd } = buildPageSeo({
  slug: "high-school-photography",
  title: "High School Senior Portraits & Prom Photography in Charlotte, NC | $150 Packages",
  ogTitle: "High School Photography",
  description:
    "Specializing in high school senior photography in Charlotte, NC. We offer graduation portraits, prom coverage, and yearbook-ready digital pictures starting at $150. Choose studio or on-location sessions tailored to reflect your personality.",
  datePublished: "2025-10-18T16:20:43+00:00",
  dateModified: "2025-10-28T19:15:30+00:00",
  breadcrumbName: "High School Photography",
  readingTime: "5 minutes",
  image: OG_IMAGE,
  imageW: 1024,
  imageH: 726,
  imageType: "image/jpeg",
});

export { metadata };

export default function HighSchoolPhotographyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="High School Senior Photography in Charlotte, NC"
        title="High School Senior Portraits & Prom Photography in Charlotte, NC"
        heroText="Welcome to Final Cut Multimedia, where we capture your senior year with creativity and professionalism. Whether in our studio or at your favorite outdoor spot, our photographers ensure your portraits highlight your individuality and confidence. Packages starting as low as $150."
        image={OG_IMAGE}
        introTitle="Graduation Portraits for High School Seniors"
        introParagraphs={[
          "Whether in our studio or at your favorite outdoor spot, our photographers ensure your portraits highlight your individuality and confidence. We travel up to 15 miles (or further for a small fee) to find the perfect setting that tells your story.",
          "At Final Cut Multimedia, we specialize in high school senior portraits and proms. As one of the top senior portrait studios located in Charlotte, NC, we take photos both inside the studio and even travel to your location. We have over 15 years of professional experience photographing high school seniors.",
        ]}
        servicesTitle="Key Points"
        services={[
          { label: "In-Studio or On-Location", desc: "Choose between our fully equipped studio or scenic outdoor locations for portraits that reflect your style and personality." },
          { label: "Show Your Style", desc: "Bring 2–3 outfit choices — casual, formal, or creative — to showcase different looks and expressions." },
          { label: "Add a Personal Touch", desc: "Include props like instruments, sports gear, or your vehicle to make your portraits unique and meaningful." },
        ]}
        secondarySections={[
          {
            title: "We Are the Best High School Senior Photography Company in Charlotte, NC",
            items: [
              "Over 15 years of professional experience photographing high school seniors",
              "Attention to detail at every stage — lighting, posing, styling, and editing",
              "We capture the emotion behind every photo so every student looks their very best",
              "Affordable packages starting as low as $150, depending on outfits and locations",
            ],
          },
          {
            title: "Digital Pictures Submitted for Yearbook With Ease",
            items: [
              "We immediately send your photographs so you can submit them for school publications with ease",
              "Yearbook-ready, polished, and professional cap and gown senior pictures",
              "Prompt digital delivery to your school's yearbook coordinator",
              "Prom photography at your home, in a park, or at our studio",
            ],
          },
        ]}
        whyTitle="Why Choose Final Cut Multimedia for High School Photography?"
        why={[
          "Over 15 Years of Senior Portrait Experience",
          "One of Charlotte's Most Trusted Senior Portrait Studios",
          "Studio or Natural-Light Outdoor Sessions",
          "Packages Starting as Low as $150",
          "Yearbook-Ready Digital Pictures Delivered Fast",
          "Prom Coverage With Candid and Posed Moments",
        ]}
        faqs={[
          { q: "How much does a high school senior photography session cost?", a: "Our prices start at $150, which includes the session, editing, and all your digital photos. You'll receive every image we capture — no hidden fees, no limits." },
          { q: "Where do the photography sessions take place?", a: "You can choose between our professional studio or a location of your choice. We travel up to 15 miles from Charlotte (and beyond for a small additional fee) to create a personalized photography experience." },
          { q: "What should I wear or bring for my senior portraits?", a: "Bring 2–3 outfit options to capture different looks — formal, casual, or themed. You can also include personal items like instruments, sports gear, or vehicles to make your portraits uniquely yours." },
          { q: "Will my photos be ready for the school yearbook?", a: "Yes! We ensure your yearbook photos look polished and professional. We also deliver digital copies promptly so you can easily submit them to your school's yearbook coordinator." },
          { q: "Do you offer prom photography?", a: "Absolutely! Our team covers prom photography at your home, in a park, or at our studio. We capture both candid and posed moments to preserve the excitement of your special night." },
        ]}
        ctaTitle="Capture Your Senior Year With Final Cut Multimedia"
        ctaText="Book a studio or outdoor senior session in Charlotte, NC. Packages start as low as $150 — including the session, editing, and all your digital photos, ready for your yearbook."
      />
    </>
  );
}
