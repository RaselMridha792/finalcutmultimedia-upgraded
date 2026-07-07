import Image from "next/image";
import Link from "next/link";
import { buildPageSeo } from "@/lib/seo";

const OG_IMAGE =
  "https://finalcutmultimedia.com/wp-content/uploads/2025/11/final-cut-multimedia-recognized-for-impactful-community-storytelling.jpg";

const { metadata, jsonLd } = buildPageSeo({
  slug: "final-cut-multimedia-recognized-for-impactful-community-storytelling",
  title:
    "Final Cut Multimedia Recognized For Impactful Community Storytelling - Final Cut Multimedia",
  ogTitle: "Final Cut Multimedia Recognized For Impactful Community Storytelling",
  description:
    "Final Cut Multimedia, a video company in Charlotte, NC, was honored by the Mecklenburg Council of Elders for crime prevention in the media — recognition of honest, community-driven storytelling.",
  datePublished: "2025-11-05T15:36:03+00:00",
  dateModified: "2025-11-05T16:15:36+00:00",
  breadcrumbName: "Final Cut Multimedia Recognized For Impactful Community Storytelling",
  readingTime: "3 minutes",
  image: OG_IMAGE,
  imageW: 1152,
  imageH: 1440,
  imageType: "image/jpeg",
});

export { metadata };

const sections = [
  {
    h: "Honored For Real-World Impact",
    p: [
      "Being recognized by the Mecklenburg Council of Elders means our work is making a real difference. Our videos inspire people to take action and care about what happens in their own communities. Each project we create shows how storytelling can spark awareness and lasting change.",
      "This award celebrates years of dedication to meaningful media. Our team focuses on stories that bring people together and encourage safer, stronger neighborhoods. Every video reminds us that creativity can move hearts and build trust in places that need it most.",
    ],
  },
  {
    h: "Redefining Crime Prevention",
    p: [
      "Our video company in Charlotte, NC, focuses on people whose stories deserve to be seen and heard. We look past crime statistics and spotlight real experiences that reveal both struggle and strength. Viewers connect with the heart of each story and gain a clearer sense of what their communities face.",
      "Every project aims to turn understanding into action. We believe that open conversation can replace fear with trust. When storytelling feels authentic and personal, it helps communities come together to create lasting change.",
    ],
  },
  {
    h: "Trust Earned Through Honest Storytelling",
    p: [
      "Final Cut Multimedia creates stories grounded in truth and respect. Each project highlights voices that deserve to be heard and experiences that shape real understanding. Viewers recognize the sincerity in our work and connect with it on a deeper level.",
      "Our team works hard to earn trust through every detail. We honor the people who share their stories and the communities that welcome them. Honest storytelling builds lasting connections that continue long after the cameras stop rolling.",
    ],
  },
  {
    h: "Creativity In Service Of The Community",
    p: [
      "Video production carries meaning beyond the screen. Our team uses creativity to highlight voices that deserve attention and stories that bring people together. Each project is designed to teach, uplift, and inspire change within the community.",
      "This recognition reminds us why storytelling matters. Every video reflects care for the people we serve and pride in the place we call home. Our work continues to show that creativity can protect, connect, and celebrate communities in lasting ways.",
    ],
  },
  {
    h: "Inspiring Future Voices In Media",
    p: [
      "Young creators have the power to shape how stories are told. Our team hopes that they will see how purpose and creativity can create a real impact. Every new idea can open minds and move communities forward.",
      "This recognition reminds us that progress starts with shared inspiration. We want the next generation to use media as a tool for unity and understanding. Strong stories come from curiosity, care, and heart.",
    ],
  },
  {
    h: "Final Cut Multimedia is Making a Difference",
    p: [
      "Final Cut Multimedia is proud to be recognized for using storytelling to help our community. This award reminds us why honest, local stories matter. We'll continue to create videos that connect people and inspire positive change.",
    ],
  },
];

export default function RecognitionPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto w-full max-w-[900px] px-5 pt-32 pb-20 lg:pb-28">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#DB0909]">Community &amp; Recognition</p>
        <h1 className="mt-5 text-3xl font-black uppercase leading-[1.05] sm:text-5xl">
          Final Cut Multimedia Recognized For Impactful Community Storytelling
        </h1>

        <div className="relative mt-10 aspect-[4/5] w-full overflow-hidden border border-white/10 sm:aspect-[16/12]">
          <Image
            src={OG_IMAGE}
            alt="Final Cut Multimedia recognized for impactful community storytelling"
            fill
            unoptimized
            priority
            sizes="(max-width: 900px) 100vw, 900px"
            className="object-cover object-center"
          />
        </div>

        <div className="mt-10 space-y-6 text-lg leading-9 text-white/75">
          <p>
            Getting recognized by community leaders means a lot when your work comes from local stories. Our video company in Charlotte, NC, Final Cut Multimedia, was honored by the Mecklenburg Council of Elders for crime prevention in the media. The award shows how creative videos can connect people and inspire understanding.
          </p>
          <p>
            This recognition supports what we believe. Video can change how people see the world. Every story we share is built on honesty, respect, and care for our community. We use creativity to give real people and real issues the attention they deserve.
          </p>
          <p>This moment reminds us why we do what we do and why every story matters.</p>
        </div>

        {sections.map((s) => (
          <section key={s.h} className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">{s.h}</h2>
            <div className="mt-5 space-y-6 text-base leading-8 text-white/70 sm:text-lg">
              {s.p.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-16 border-t border-white/10 pt-10 text-center">
          <Link
            href="/contact-us-2#project-form"
            className="inline-flex items-center gap-3 bg-[#DB0909] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
          >
            Work With Final Cut Multimedia
          </Link>
        </div>
      </article>
    </main>
  );
}
