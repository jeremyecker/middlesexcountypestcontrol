import type { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/og';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import { PHONE, PHONE_RAW, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: { absolute: "Free Cockroach Treatment Quote | Middlesex County, NJ" },
  description:
    "Licensed cockroach exterminators in Middlesex County, NJ. Same-day service for German roaches, American cockroaches & more. Free quote.",
  alternates: { canonical: `${DOMAIN}/get-a-quote/cockroach-treatment` },
  openGraph: {
    title: "Free Cockroach Treatment Quote | Middlesex County, NJ",
    description: "Licensed cockroach exterminators in Middlesex County, NJ. Same-day service for German roaches, American cockroaches & more. Free quote.",
    url: `${DOMAIN}/get-a-quote/cockroach-treatment`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Middlesex County pest control' }],
  },
};

const FAQS = [
  {
    q: "What types of cockroaches are common in Middlesex County?",
    a: "German cockroaches are by far the most common in kitchens and apartments. American cockroaches (sewer roaches) are larger and often enter through drains. We treat all species effectively.",
  },
  {
    q: "How much does cockroach treatment cost in Middlesex County?",
    a: "Cockroach treatment costs depend on severity and species. Severe German cockroach infestations may require multiple visits. Call for a free phone assessment.",
  },
  {
    q: "How many treatments will I need?",
    a: "German cockroaches typically need 2–3 treatments spaced 2–3 weeks apart. American cockroaches often respond to a single treatment plus drain maintenance.",
  },
  {
    q: "Do I need to leave my home during treatment?",
    a: "For gel bait treatments, no — you can stay home. For spray applications, we recommend staying out for 2–4 hours until surfaces dry. We'll let you know what to expect in advance.",
  },
  {
    q: "Why do cockroaches keep coming back after store-bought spray?",
    a: "Store-bought sprays repel cockroaches into hiding but don't eliminate the colony. Professional gel baits and IGRs kill the whole population including eggs — that's why professional treatment is so much more effective.",
  },
];

export default function CockroachTreatmentQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get a Free Cockroach Treatment Quote in Middlesex County, NJ
              </h1>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Cockroaches are a serious health hazard — they contaminate food, trigger asthma, and spread bacteria. Our licensed technicians use targeted gel baits, IGRs, and crack & crevice treatments to eliminate infestations fast in Middlesex County homes and businesses.
              </p>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20 mb-6">
                <p className="text-yellow-300 font-semibold text-sm mb-1">Free Estimate</p>
                <p className="text-2xl font-bold text-white">Call for Pricing</p>
                <p className="text-gray-300 text-sm">per treatment &middot; free estimate before any work</p>
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
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Common Questions About Cockroach Treatment</h2>
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
