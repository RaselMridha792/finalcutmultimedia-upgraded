import ServicePage from "@/components/services/ServicePage";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE = "https://finalcutmultimedia.com/wp-content/uploads/2025/10/i-5.webp";

const { metadata, jsonLd } = buildPageSeo({
  slug: "testimonial-videos",
  title: "Testimonial Videos in Charlotte, NC - Final Cut Multimedia",
  ogTitle: "Testimonial Videos in Charlotte, NC",
  description:
    "Testimonial videos in Charlotte, NC by Final Cut Multimedia — let your clients do the talking. We film and produce professional testimonial videos that showcase real customer experiences and build trust with your audience.",
  datePublished: "2025-10-18T17:47:34+00:00",
  dateModified: "2026-01-05T20:14:19+00:00",
  breadcrumbName: "Testimonial Videos in Charlotte, NC",
  readingTime: "1 minute",
  image: OG_IMAGE,
  imageW: 480,
  imageH: 289,
  imageType: "image/webp",
});

export { metadata };

export default function TestimonialVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage
        eyebrow="Testimonial Videos in Charlotte, NC"
        title="Testimonial Videos That Let Your Clients Do the Talking"
        heroText="Testimonial videos are a way for your business to let clients do the talking. Here at Final Cut Multimedia, located in Charlotte, NC, we offer the best services at filming and producing a testimonial video."
        image={OG_IMAGE}
        introTitle="Let Your Clients Do the Talking"
        introParagraphs={[
          "These videos showcase customers describing the experience of using your products or services. They also offer a chance for the thoughts and feelings of your client about your product to be broadcast to everyone.",
          "Through these videos, we can build each customer's individual and unique story to share with a broader audience. By using this method you can effectively convince people to try your product — particularly because the audience has already seen success stories of your product.",
        ]}
        servicesTitle="What Testimonial Videos Do for Your Business"
        services={[
          "Let Your Clients Do the Talking",
          "Showcase Real Customer Experiences",
          "Build Trust With Authentic Social Proof",
          "Broadcast Client Thoughts and Feelings",
          "Share Unique Customer Success Stories",
          "Convert Viewers Into Future Customers",
        ]}
        secondarySections={[
          {
            title: "Why Do You Need Them?",
            items: [
              "Testimonial videos are a uniquely effective marketing method — you can share your success at providing your product or service through these videos.",
              "Consumers are more likely to believe what other consumers say. Previous or current customers discuss why they purchased your product, helping create future customers.",
              "These people can attest to the high quality of your service, creating confidence within the audience that you are a tried and tested company.",
              "Any concerns in a customer's mind will be cleared up right from the get-go, giving your products and services a competitive edge.",
            ],
          },
          {
            title: "Why Choose Us?",
            items: [
              "At Final Cut Multimedia, you get a cut that is complete. Time is money, and we understand that better than anyone in the business.",
              "You want a no-fuss service that delivers your product on time and requires minimal overhead after the work begins — that is exactly the formula we follow.",
              "Our team is bursting at the seams with talented videographers, editors, and producers, backed up with best-in-class equipment.",
              "We believe the customer is king, so we go to every length possible to meet any deadlines or requirements that you have.",
            ],
          },
        ]}
        whyTitle="Why Charlotte Businesses Trust Us"
        why={[
          "Best-in-Class Cameras and Equipment",
          "Talented Videographers, Editors, and Producers",
          "On-Time Delivery With Minimal Overhead",
          "Authentic, Trust-Building Social Proof",
          "Charlotte, NC Based Production Team",
          "Customer-First Approach on Every Project",
        ]}
        ctaTitle="Let's Film Your Testimonial Videos"
        ctaText="Let your happy clients do the talking. We'll film and produce testimonial videos that build trust and turn success stories into new customers."
      />
    </>
  );
}
