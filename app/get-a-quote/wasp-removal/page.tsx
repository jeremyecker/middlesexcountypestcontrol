import type { Metadata } from 'next';
import { OG_IMAGE } from '@/lib/og';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import { PHONE, PHONE_RAW, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: { absolute: "Free Wasp & Hornet Removal Quote | Middlesex County, NJ" },
  description:
    "Licensed wasp & hornet exterminators in Middlesex County, NJ. Safe nest removal — same-day service available. Free quote.",
  alternates: { canonical: `${DOMAIN}/get-a-quote/wasp-removal` },
  openGraph: {
    title: "Free Wasp & Hornet Removal Quote | Middlesex County, NJ",
    description: "Licensed wasp & hornet exterminators in Middlesex County, NJ. Safe nest removal — same-day service available. Free quote.",
    url: `${DOMAIN}/get-a-quote/wasp-removal`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Middlesex County pest control' }],
  },
};

const FAQS = [
  {
    q: "Is same-day wasp removal available in Middlesex County?",
    a: "Yes — wasp and hornet nest removal is typically available same-day or next-day throughout Middlesex County. We know it's urgent and prioritize stinging insect calls.",
  },
  {
    q: "How much does wasp and hornet removal cost in Middlesex County?",
    a: "Wasp and hornet removal costs depend on nest size, location, and species. Ground nests (yellow jackets) may cost more due to treatment complexity. Call for a free phone assessment.",
  },
  {
    q: "Do you remove the nest after treatment?",
    a: "We treat the nest first, then remove it once the colony is eliminated. If the nest is in an inaccessible location (inside walls, high eaves), we treat it in place and it will naturally decompose over time.",
  },
  {
    q: "Will wasps rebuild in the same spot?",
    a: "Wasps typically won't rebuild in an exact treated location, but they may build nearby. We can apply deterrents to reduce the likelihood. We recommend monitoring the area for a few weeks after treatment.",
  },
  {
    q: "Can I treat a wasp nest myself?",
    a: "We strongly advise against it. Yellow jackets can attack in large numbers if disturbed, and bald-faced hornets are extremely aggressive when defending their nest. Professional treatment is much safer and more effective.",
  },
];

export default function WaspRemovalQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get a Free Wasp & Hornet Removal Quote in Middlesex County, NJ
              </h1>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Don&rsquo;t risk getting stung — wasp and hornet nests need professional treatment. Our licensed technicians handle paper wasps, yellow jackets, bald-faced hornets, and European hornets safely throughout Middlesex County.
              </p>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20 mb-6">
                <p className="text-yellow-300 font-semibold text-sm mb-1">Free Estimate</p>
                <p className="text-2xl font-bold text-white">Call for Pricing</p>
                <p className="text-gray-300 text-sm">per nest removal &middot; free estimate before any work</p>
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
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Common Questions About Wasp & Hornet Removal</h2>
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
