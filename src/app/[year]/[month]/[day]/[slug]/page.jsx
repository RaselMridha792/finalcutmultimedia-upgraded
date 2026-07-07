import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { datedPosts, getDatedPost } from "@/data/datedPosts";
import { buildArticleSeo } from "@/lib/seo";

export function generateStaticParams() {
  return datedPosts.map((p) => ({ year: p.year, month: p.month, day: p.day, slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { year, month, day, slug } = await params;
  const post = getDatedPost(year, month, day, slug);
  if (!post) return {};
  const { metadata } = buildArticleSeo({
    path: `${year}/${month}/${day}/${slug}`,
    title: post.title,
    description: post.description,
    image: post.image,
    publishedTime: post.publishedTime,
    modifiedTime: post.modifiedTime,
    readingTime: post.readingTime,
  });
  return metadata;
}

export default async function DatedPostPage({ params }) {
  const { year, month, day, slug } = await params;
  const post = getDatedPost(year, month, day, slug);
  if (!post) notFound();

  const { jsonLd } = buildArticleSeo({
    path: `${year}/${month}/${day}/${slug}`,
    title: post.title,
    description: post.description,
    image: post.image,
    publishedTime: post.publishedTime,
    modifiedTime: post.modifiedTime,
    readingTime: post.readingTime,
  });

  const dateLabel = new Date(post.publishedTime).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto w-full max-w-[860px] px-5 pt-32 pb-20 lg:pb-28">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#DB0909]">Blog &amp; News</p>
        <h1 className="mt-5 text-3xl font-black uppercase leading-[1.08] sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
          {dateLabel} · By Tyrell Scott · {post.readingTime} read
        </p>

        <div className="relative mt-9 aspect-[16/9] w-full overflow-hidden border border-white/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            unoptimized
            priority
            sizes="(max-width: 860px) 100vw, 860px"
            className="object-cover object-center"
          />
        </div>

        <div className="mt-10 space-y-6 text-lg leading-9 text-white/75">
          {post.intro.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {post.keyTakeaways?.length ? (
          <div className="mt-10 border-l-4 border-[#DB0909] bg-[#111] p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white">Key Takeaways</p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-white/70">
              {post.keyTakeaways.map((t, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#DB0909]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {post.sections.map((s) => (
          <section key={s.h} className="mt-12 border-t border-white/10 pt-9">
            <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">{s.h}</h2>
            <div className="mt-5 space-y-6 text-base leading-8 text-white/70 sm:text-lg">
              {s.p.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-16 border-t border-white/10 pt-10 text-center">
          <p className="text-lg text-white/70">Ready to keep your brand visible with fresh content?</p>
          <Link
            href="/contact-us-2#project-form"
            className="mt-6 inline-flex items-center gap-3 bg-[#DB0909] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
          >
            Book a Call
          </Link>
        </div>
      </article>
    </main>
  );
}
