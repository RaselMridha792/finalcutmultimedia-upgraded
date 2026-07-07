import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.18),_transparent_45%)]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto w-full max-w-none px-5 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-600">Privacy policy</p>
          <h1 className="max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
            How we collect and use information
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            We value your privacy and want to be transparent about the information we collect and how it is used.
          </p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-5 py-20">
        <div className="mx-auto w-full max-w-none space-y-8 text-base leading-8 text-gray-400">
          <div className="rounded border border-white/10 bg-[#111111] p-8">
            <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-white">Information we collect</h2>
            <p className="mt-4">
              When you contact us, request a quote, or book a consultation, we may collect your name, email address, phone number, and details about your project so we can respond appropriately.
            </p>
          </div>

          <div className="rounded border border-white/10 bg-[#111111] p-8">
            <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-white">How we use it</h2>
            <p className="mt-4">
              We use your information to respond to inquiries, discuss production needs, schedule consultations, and provide the services you request.
            </p>
          </div>

          <div className="rounded border border-white/10 bg-[#111111] p-8">
            <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-white">Contact</h2>
            <p className="mt-4">
              If you have questions about this privacy policy or how your information is handled, please contact us directly through our contact page.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#060606] px-5 py-20">
        <div className="mx-auto w-full max-w-none border border-white/10 bg-[#111111] p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Need help?</p>
          <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">We’re happy to answer any questions about our approach.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact-us-2" className="rounded bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
