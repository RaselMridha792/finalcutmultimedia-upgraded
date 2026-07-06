import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blogPosts";

const bookingUrl =
  "https://charlotte.finalcutmultimedia.com/public/form/view/615ca7817e143cd0e3e7e381";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return { title: `${post.title} | Final Cut Multimedia`, description: post.excerpt };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((item) => item.slug === post.slug);
  const related = [
    blogPosts[(currentIndex + 1) % blogPosts.length],
    blogPosts[(currentIndex + 2) % blogPosts.length],
  ];

  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <article>
        <header className="px-5 pb-14 pt-36 lg:pb-20">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 transition hover:text-white">
            <ArrowLeft size={16} aria-hidden="true" />
            All Articles
          </Link>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">{post.category}</p>
              <h1 className="mt-5 max-w-6xl text-4xl font-black uppercase leading-[1.08] sm:text-6xl">{post.title}</h1>
            </div>
            <div className="border-l border-white/15 pl-6">
              <p className="text-base leading-8 text-gray-400">{post.excerpt}</p>
              <div className="mt-5 flex items-center gap-5 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                <time>{post.date}</time>
                <span className="inline-flex items-center gap-2"><Clock size={15} aria-hidden="true" />{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="relative mx-5 min-h-[380px] overflow-hidden lg:min-h-[680px]">
          <Image src={post.image} alt={post.title} fill priority unoptimized sizes="100vw" className="object-cover object-center" />
        </div>

        <div className="grid gap-12 px-5 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:py-28">
          <aside>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Final Cut Multimedia</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500">
              Practical production guidance for businesses that want clearer communication and more useful content.
            </p>
          </aside>
          <div className="max-w-4xl">
            {post.sections.map(([heading, body], index) => (
              <section key={heading} className={`py-10 ${index === 0 ? "pt-0" : "border-t border-white/15"}`}>
                <p className="text-xs font-bold text-[#DB0909]">0{index + 1}</p>
                <h2 className="mt-4 text-2xl font-black uppercase leading-tight sm:text-3xl">{heading}</h2>
                <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">{body}</p>
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="border-y border-white/10 bg-[#0a0a0a] px-5 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DB0909]">Keep Reading</p>
            <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">Related Articles</h2>
          </div>
          <Link href="/blogs" className="hidden text-xs font-bold uppercase tracking-[0.2em] sm:block">View All</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {related.map((item) => (
            <Link key={item.slug} href={`/blogs/${item.slug}`} className="group grid border border-white/10 bg-[#060606] sm:grid-cols-[0.42fr_0.58fr]">
              <div className="relative min-h-56 overflow-hidden">
                <Image src={item.image} alt="" fill unoptimized sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-col justify-between p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#DB0909]">{item.category}</p>
                <h3 className="mt-6 text-xl font-black uppercase leading-snug">{item.title}</h3>
                <ArrowUpRight className="mt-8 transition group-hover:text-[#DB0909]" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-black">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">Ready to turn your next idea into useful business content?</h2>
          <div>
            <p className="text-base leading-8 text-gray-600">Tell us what your business needs to communicate, and we&apos;ll recommend the right production approach.</p>
            <a href={bookingUrl} className="mt-7 inline-flex items-center gap-3 bg-black px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#DB0909]">
              Book a Call
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
