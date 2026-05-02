import type { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/og';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import { PHONE, PHONE_RAW, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: { absolute: "Free Bed Bug Treatment Quote | Middlesex County, NJ" },
  description:
    "Licensed bed bug exterminators in Middlesex County. Heat treatment & chemical options. Free inspection quote — same-day service available.",
  alternates: { canonical: `${DOMAIN}/get-a-quote/bed-bug-treatment` },
  openGraph: {
    title: "Free Bed Bug Treatment Quote | Middlesex County, NJ",
    description: "Licensed bed bug exterminators in Middlesex County. Heat treatment & chemical options. Free inspection quote — same-day service available.",
    url: `${DOMAIN}/get-a-quote/bed-bug-treatment`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Middlesex County pest control' }],
  },
};

const FAQS = [
  {
    q: "What's the difference between heat and chemical treatment?",
    a: "Heat treatment raises room temperature to 120°F+, killing all life stages in one visit with no chemical residue. Chemical treatment uses EPA-registered pesticides applied over 1–2 visits. We'll recommend the best option based on your infestation.",
  },
  {
    q: "How much does bed bug treatment cost in Middlesex County?",
    a: "Bed bug treatment in Middlesex County ranges from $1,200–$4,500 depending on your home's size and treatment method. We provide a detailed quote after a free inspection — no surprises.",
  },
  {
    q: "How long does treatment take?",
    a: "Heat treatments typically take 6–8 hours for a standard home. Chemical treatments take 2–4 hours per visit, with a follow-up 2 weeks later.",
  },
  {
    q: "Do I need to prepare my home before treatment?",
    a: "Yes — we provide a detailed prep checklist before your appointment. Proper preparation is essential for effective treatment. Our team will walk you through everything in advance.",
  },
  {
    q: "Do you guarantee bed bugs won't come back?",
    a: "We offer a re-service guarantee on our bed bug treatments. If bed bugs are detected within the warranty period, we return at no additional charge.",
  },
];

export default function BedBugTreatmentQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get a Free Bed Bug Treatment Quote in Middlesex County, NJ
              </h1>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Bed bugs are one of the most stressful pest infestations — but they&rsquo;re 100% treatable. Our licensed technicians offer both heat treatment and chemical treatment for Middlesex County homes, hotels, and apartments.
              </p>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20 mb-6">
                <p className="text-yellow-300 font-semibold text-sm mb-1">Typical Cost</p>
                <p className="text-2xl font-bold text-white">$1,200–$4,500</p>
                <p className="text-gray-300 text-sm">heat or chemical treatment &middot; free estimate before any work</p>
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
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Common Questions About Bed Bug Treatment</h2>
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
          <Link href="/get-a-quote" className="text-primary font-semibold hover:underline text-sm">
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
