import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import { PHONE, PHONE_RAW, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: { absolute: "Free Mosquito Treatment Quote | Middlesex County, NJ" },
  description:
    "Licensed mosquito control in Middlesex County, NJ. Seasonal yard treatments from $125–$150/visit. Free quote — same-day service available.",
  alternates: { canonical: `${DOMAIN}/get-a-quote/mosquito-treatment` },
  openGraph: {
    title: "Free Mosquito Treatment Quote | Middlesex County, NJ",
    description: "Licensed mosquito control in Middlesex County, NJ. Seasonal yard treatments from $125–$150/visit. Free quote — same-day service available.",
    url: `${DOMAIN}/get-a-quote/mosquito-treatment`,
  },
};

const FAQS = [
  {
    q: "How often do I need mosquito treatments?",
    a: "We recommend treatments every 21 days throughout the season (May through October) for consistent protection. One-time treatments are available but provide only temporary relief.",
  },
  {
    q: "How much does mosquito treatment cost in Middlesex County?",
    a: "Individual treatments cost $125–$150/visit. Many customers opt for seasonal programs for the best value and consistent protection throughout the summer.",
  },
  {
    q: "Is the mosquito spray safe for kids and pets?",
    a: "Yes — once the spray has dried (typically 30–45 minutes), treated areas are safe for children and pets. We use EPA-registered products applied by licensed technicians.",
  },
  {
    q: "What does your mosquito treatment cover?",
    a: "We treat all resting areas on your property — shrubs, ground cover, woodlines, and shaded areas where mosquitoes shelter during the day. We also advise on eliminating standing water sources.",
  },
  {
    q: "When does mosquito season start in Middlesex County?",
    a: "Mosquito season typically runs May through October in Middlesex County. We recommend your first treatment in early May before populations peak. We can schedule seasonal visits in advance so you're protected all summer.",
  },
];

export default function MosquitoTreatmentQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get a Free Mosquito Treatment Quote in Middlesex County, NJ
              </h1>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Take back your yard this season. Our licensed technicians provide barrier spray treatments that dramatically reduce mosquito populations on your property throughout the summer.
              </p>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20 mb-6">
                <p className="text-yellow-300 font-semibold text-sm mb-1">Typical Cost</p>
                <p className="text-2xl font-bold text-white">$125–$150/visit</p>
                <p className="text-gray-300 text-sm">seasonal, per visit &middot; free estimate before any work</p>
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
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Common Questions About Mosquito Treatment</h2>
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
