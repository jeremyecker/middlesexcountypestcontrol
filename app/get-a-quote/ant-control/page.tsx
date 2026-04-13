import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import { PHONE, PHONE_RAW, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: { absolute: "Free Ant Control Quote | Middlesex County, NJ" },
  description:
    "Licensed ant exterminators serving Middlesex County. Free same-day quote for carpenter ants, pavement ants, odorous house ants & more.",
  alternates: { canonical: `${DOMAIN}/get-a-quote/ant-control/` },
  openGraph: {
    title: "Free Ant Control Quote | Middlesex County, NJ",
    description: "Licensed ant exterminators serving Middlesex County. Free same-day quote for carpenter ants, pavement ants, odorous house ants & more.",
    url: `${DOMAIN}/get-a-quote/ant-control/`,
  },
};

const FAQS = [
  {
    q: "What types of ants do you treat in Middlesex County?",
    a: "We treat all common species including carpenter ants, odorous house ants, pavement ants, and fire ants. Carpenter ants are the most destructive — if you see large black ants in or around wood structures, call us right away.",
  },
  {
    q: "How much does ant control cost in Middlesex County?",
    a: "Most ant treatments in Middlesex County run $300–$450 depending on the species, infestation size, and number of entry points. We always give you a firm price before starting — no surprises.",
  },
  {
    q: "Will one treatment get rid of ants permanently?",
    a: "For most ant species, one treatment plus exclusion recommendations does the job. Carpenter ants may require a follow-up. We stand behind our work with a re-service guarantee.",
  },
  {
    q: "Do I need to leave my home during ant treatment?",
    a: "No — for most ant treatments you can stay home. We use targeted applications that are safe once dry. Our technicians will advise you on any specific precautions.",
  },
  {
    q: "How do I prevent ants from coming back?",
    a: "We'll identify and seal entry points as part of your service. Storing food in sealed containers and fixing moisture issues also help. We'll walk you through prevention steps after treatment.",
  },
];

export default function AntControlQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get a Free Ant Control Quote in Middlesex County, NJ
              </h1>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Whether you&rsquo;re dealing with carpenter ants damaging wood, odorous house ants in your kitchen, or pavement ants invading outside — our licensed technicians identify the species and eliminate the colony, not just the ants you see.
              </p>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20 mb-6">
                <p className="text-yellow-300 font-semibold text-sm mb-1">Typical Cost</p>
                <p className="text-2xl font-bold text-white">$300–$450</p>
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
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Common Questions About Ant Control</h2>
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
