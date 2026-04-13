import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import { PHONE, PHONE_RAW, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: { absolute: "Free Rodent Control Quote | Middlesex County, NJ" },
  description:
    "Licensed rodent exterminators in Middlesex County, NJ. Mice & rat removal plus exclusion work. Free quote — same-day service available.",
  alternates: { canonical: `${DOMAIN}/get-a-quote/rodent-control/` },
  openGraph: {
    title: "Free Rodent Control Quote | Middlesex County, NJ",
    description: "Licensed rodent exterminators in Middlesex County, NJ. Mice & rat removal plus exclusion work. Free quote — same-day service available.",
    url: `${DOMAIN}/get-a-quote/rodent-control/`,
  },
};

const FAQS = [
  {
    q: "How do I know if I have mice or rats?",
    a: "Mice leave small, dark droppings (about the size of a grain of rice) and stay close to walls. Rat droppings are larger and capsule-shaped. Both chew wires and leave grease marks along baseboards. If you're unsure, call us — we'll identify the pest and recommend the right treatment.",
  },
  {
    q: "How much does rodent control cost in Middlesex County?",
    a: "Most rodent control programs in Middlesex County cost $300–$450 and include both extermination and basic exclusion work to seal entry points. Larger properties or severe infestations may cost more.",
  },
  {
    q: "What does exclusion work mean?",
    a: "Exclusion means sealing the gaps, cracks, and entry points that rodents use to enter your home — around pipes, vents, the foundation, and gaps under doors. Without exclusion, new rodents will eventually find their way back in.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most customers see a dramatic reduction in activity within 7–14 days. Complete elimination typically takes 2–3 visits over 3–4 weeks.",
  },
  {
    q: "Do you use poison bait stations?",
    a: "We use a combination of tamper-resistant bait stations, snap traps, and exclusion depending on your situation. We discuss all options with you so you're comfortable with the approach, especially if you have pets or small children.",
  },
];

export default function RodentControlQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get a Free Rodent Control Quote in Middlesex County, NJ
              </h1>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Mice and rats don&rsquo;t just cause property damage — they spread diseases and contaminate food. Our licensed technicians identify entry points, eliminate active infestations, and seal up your home so rodents can&rsquo;t return.
              </p>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20 mb-6">
                <p className="text-yellow-300 font-semibold text-sm mb-1">Typical Cost</p>
                <p className="text-2xl font-bold text-white">$300–$450</p>
                <p className="text-gray-300 text-sm">includes basic exclusion &middot; free estimate before any work</p>
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
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Common Questions About Rodent Control</h2>
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
