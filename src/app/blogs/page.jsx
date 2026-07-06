import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export const metadata = {
  title: "Blogs | Final Cut Multimedia",
  description: "Video production, content strategy, and business storytelling insights from Final Cut Multimedia.",
};

export default function BlogsPage() {
  const [featured, ...posts] = blogPosts;

  return (
    <main className="min-h-screen bg-[#060606] pt-36 text-white">
      <section className="px-5 pb-16">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Blog &amp; News</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h1 className="text-4xl font-black uppercase leading-tight sm:text-6xl">Ideas for Better Business Content</h1>
          <p className="text-base leading-8 text-gray-400">
            Practical guidance on video production, content planning, brand storytelling, and creating media that supports real business goals.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a0a0a] px-5 py-16">
        <Link href={`/blogs/${featured.slug}`} className="group grid overflow-hidden border border-white/10 bg-[#060606] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[600px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-between p-7 sm:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.16em]">
                <span className="text-[#DB0909]">{featured.category}</span>
                <time className="text-gray-500">{featured.date}</time>
              </div>
              <h2 className="mt-8 text-3xl font-black uppercase leading-tight sm:text-4xl">{featured.title}</h2>
              <p className="mt-6 text-base leading-8 text-gray-400">{featured.excerpt}</p>
            </div>
            <div className="mt-12 flex items-center justify-between border-t border-white/15 pt-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                <Clock size={15} aria-hidden="true" />
                {featured.readTime}
              </span>
              <ArrowUpRight className="transition group-hover:text-[#DB0909]" aria-hidden="true" />
            </div>
          </div>
        </Link>
      </section>

      <section className="px-5 py-20">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Latest Insights</p>
          <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">Explore the Journal</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="group flex min-h-full flex-col border border-white/10 bg-[#0a0a0a]">
              <Link href={`/blogs/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.14em]">
                  <span className="text-[#DB0909]">{post.category}</span>
                  <time className="text-gray-500">{post.date}</time>
                </div>
                <h3 className="mt-5 text-xl font-black uppercase leading-snug">{post.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">{post.excerpt}</p>
                <Link href={`/blogs/${post.slug}`} className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] transition group-hover:text-[#DB0909]">
                  Read Article
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
