import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import { PHONE, PHONE_RAW, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: { absolute: "Free Termite Treatment Quote | Middlesex County, NJ" },
  description:
    "Licensed termite exterminators in Middlesex County, NJ. Liquid barrier & bait station options. Free inspection — same-day service available.",
  alternates: { canonical: `${DOMAIN}/get-a-quote/termite-treatment/` },
  openGraph: {
    title: "Free Termite Treatment Quote | Middlesex County, NJ",
    description: "Licensed termite exterminators in Middlesex County, NJ. Liquid barrier & bait station options. Free inspection — same-day service available.",
    url: `${DOMAIN}/get-a-quote/termite-treatment/`,
  },
};

const FAQS = [
  {
    q: "What types of termite treatment do you offer?",
    a: "We offer liquid barrier treatment (Termidor® or equivalent) which creates a protection zone around your home's foundation, and bait station systems which eliminate the colony over time. We'll recommend the best option after a free inspection.",
  },
  {
    q: "How much does termite treatment cost in Middlesex County?",
    a: "Termite treatment in Middlesex County typically costs $800–$2,500 depending on your home's size, construction type, and infestation severity. We provide a free inspection and detailed quote before any work begins.",
  },
  {
    q: "Do I need to leave my home during termite treatment?",
    a: "For most liquid termite treatments, you do not need to vacate. Treatment is applied to the soil around your foundation. We'll advise you of any specific requirements for your situation.",
  },
  {
    q: "How long does termite treatment last?",
    a: "Liquid barrier treatments like Termidor® remain effective for 5+ years. Bait station systems provide ongoing protection with annual monitoring. We recommend annual inspections regardless of treatment type.",
  },
  {
    q: "Does homeowner's insurance cover termite damage?",
    a: "Most standard homeowner's policies do NOT cover termite damage — it's considered a preventable pest issue. This is why early treatment and annual inspections are so important. We can provide documentation for your records.",
  },
];

export default function TermiteTreatmentQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get a Free Termite Treatment Quote in Middlesex County, NJ
              </h1>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Termites cause billions of dollars in structural damage every year — and most homeowners don&rsquo;t realize they have an infestation until it&rsquo;s already serious. Our licensed technicians offer both liquid barrier treatment and bait station systems for Middlesex County homes.
              </p>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20 mb-6">
                <p className="text-yellow-300 font-semibold text-sm mb-1">Typical Cost</p>
                <p className="text-2xl font-bold text-white">$800–$2,500</p>
                <p className="text-gray-300 text-sm">free inspection before any quote &middot; free estimate before any work</p>
              </div>
              <p className="text-gray-200 text-sm">
                Call us: <a href={`tel:${PHONE_RAW}`} className="text-yellow-300 font-semibold hover:underline">{PHONE}</a>
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-dark mb-6 text-center">Request Your Free Quote</h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light">
        <div className="container-main max-w-3xl">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Common Questions About Termite Treatment</h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to hub */}
      <section className="section-gray">
        <div className="container-main text-center py-8">
          <Link href="/get-a-quote/" className="text-primary font-semibold hover:underline text-sm">
            &larr; Back to all pest control services
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8">
            Same-day service available throughout Middlesex County, NJ.
          </p>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors"
          >
            &#128222; {PHONE}
          </a>
        </div>
      </section>
    </>
  );
}
