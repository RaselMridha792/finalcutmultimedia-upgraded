import Link from "next/link";

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "We create corporate videos, event coverage, brand storytelling, photography, drone footage, monthly content, headshots, and livestream content for businesses and organizations.",
  },
  {
    question: "Do you work with clients outside Charlotte?",
    answer:
      "Yes. We regularly work with clients throughout North Carolina and the surrounding region, and we can also coordinate projects beyond the local area depending on scope.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "You can book a discovery call directly through our contact form or reach out by email or phone and we will help you choose the right production plan.",
  },
  {
    question: "Can you help with ongoing content creation?",
    answer:
      "Absolutely. We offer monthly content planning and production support for businesses that want a consistent content pipeline.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.18),_transparent_45%)]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto w-full max-w-none px-5 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-600">Frequently asked questions</p>
          <h1 className="max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
            Questions about our process and services
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Here are some of the most common questions we receive from clients planning video, photography, or recurring content projects.
          </p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-5 py-20">
        <div className="mx-auto w-full max-w-none space-y-6">
          {faqs.map((item) => (
            <div key={item.question} className="rounded border border-white/10 bg-[#111111] p-8">
              <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-white">{item.question}</h2>
              <p className="mt-4 text-base leading-8 text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#060606] px-5 py-20">
        <div className="mx-auto w-full max-w-none border border-white/10 bg-[#111111] p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Still have questions?</p>
          <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">Let&apos;s talk through your project goals.</h2>
          <p className="mt-6 text-base leading-8 text-gray-400">
            Reach out and we will help you choose the right production approach for your brand, audience, and timeline.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
