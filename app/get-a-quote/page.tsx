import type { Metadata } from 'next';
import { getOpenGraph } from '@/lib/og';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import { PHONE, PHONE_RAW, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: { absolute: 'Get a Free Pest Control Quote | Middlesex County, NJ' },
  description:
    'Free pest control estimate for Middlesex County homes & businesses. Licensed exterminator \u2014 same-day service in Edison, Woodbridge, New Brunswick & more.',
  alternates: { canonical: `${DOMAIN}/get-a-quote` },
  openGraph: getOpenGraph(
    '/get-a-quote',
    'Get a Free Pest Control Quote | Middlesex County, NJ',
    'Free pest control estimate for Middlesex County homes & businesses. Licensed exterminator \u2014 same-day service in Edison, Woodbridge, New Brunswick & more.',
  ),
};

const WHY_US = [
  { icon: '\u26a1', title: 'Same-Day Service', body: 'Many jobs booked and treated the same day you call \u2014 no waiting around for a pest problem to get worse.' },
  { icon: '\u2705', title: 'Licensed & Insured', body: 'Fully licensed in New Jersey. Every technician is background-checked and trained for safe, effective treatments.' },
  { icon: '\uD83D\uDD12', title: 'Discreet Visits', body: "Unmarked vehicles available on request. We respect your privacy and your neighbors' curiosity." },
  { icon: '\uD83D\uDCAF', title: 'Satisfaction Guarantee', body: 'If pests come back between scheduled visits, so do we \u2014 at no extra charge.' },
  { icon: '\uD83D\uDCDE', title: 'Real People Answer', body: 'Call or submit this form and a real person follows up \u2014 usually within minutes during business hours.' },
];

const COMMON_PESTS = [
  { name: 'Ants', link: '/services/ants', icon: '\uD83D\uDC1C' },
  { name: 'Bed Bugs', link: '/services/bed-bugs', icon: '\uD83D\uDECF\uFE0F' },
  { name: 'Cockroaches', link: '/services/cockroaches', icon: '\uD83E\uDEB3' },
  { name: 'Mice & Rats', link: '/services/rodents', icon: '\uD83D\uDC00' },
  { name: 'Mosquitoes', link: '/services/mosquitoes', icon: '\uD83E\uDD9F' },
  { name: 'Termites', link: '/services/termites', icon: '\uD83E\uDEB5' },
  { name: 'Wasps & Hornets', link: '/services/wasps', icon: '\uD83D\uDC1D' },
  { name: 'Fleas', link: '/services/fleas', icon: '\uD83E\uDD97' },
  { name: 'Ticks', link: '/services/ticks', icon: '\uD83D\uDD77\uFE0F' },
  { name: 'Wildlife', link: '/wildlife', icon: '\uD83E\uDD9D' },
];

const SERVICE_AREAS = [
  'Carteret', 'Cranbury', 'Dunellen', 'East Brunswick', 'Edison',
  'Helmetta', 'Highland Park', 'Jamesburg', 'Metuchen', 'Middlesex',
  'Milltown', 'Monroe', 'New Brunswick', 'North Brunswick', 'Old Bridge',
  'Perth Amboy', 'Piscataway', 'Plainsboro', 'Sayreville', 'South Amboy',
  'South Brunswick', 'South Plainfield', 'South River', 'Spotswood', 'Woodbridge',
];

const FAQS = [
  {
    q: 'How quickly can you come out?',
    a: `In most cases we can schedule same-day or next-day service throughout Middlesex County. Call us at ${PHONE} for the fastest response.`,
  },
  {
    q: 'Do I need to leave my home during treatment?',
    a: "It depends on the treatment type. For most general pest control visits, you can stay home. For bed bug heat treatments or heavy chemical applications, we'll let you know in advance what's needed.",
  },
  {
    q: 'Is the quote really free?',
    a: "Yes \u2014 100% free with no obligation. We'll assess your situation and give you a clear, upfront price before any work begins.",
  },
  {
    q: 'Are your treatments safe for kids and pets?',
    a: 'We use EPA-registered products and follow all label safety guidelines. Our technicians will advise you on any precautions specific to your treatment.',
  },
  {
    q: 'Do you serve all of Middlesex County?',
    a: 'Yes \u2014 we cover all municipalities including Edison, Woodbridge, New Brunswick, Old Bridge, Piscataway, and every community in between.',
  },
];

export default function GetAQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get a Free Middlesex County Pest Control Quote
              </h1>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Licensed, insured exterminators serving all of Middlesex County, NJ.
                Same-day service available &mdash; call{' '}
                <a href={`tel:${PHONE_RAW}`} className="text-yellow-300 font-semibold hover:underline">
                  {PHONE}
                </a>{' '}
                or fill out the form and we&apos;ll call you.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>&#10004; Free estimate, no obligation</li>
                <li>&#10004; Response within minutes during business hours</li>
                <li>&#10004; Serving Edison, Woodbridge, New Brunswick &amp; all of Middlesex County</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-dark mb-6 text-center">Request Your Free Quote</h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Why Middlesex County Chooses Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_US.map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pest Types */}
      <section className="section-light">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-4">Pests We Treat in Middlesex County</h2>
          <p className="text-center text-gray-600 mb-10">
            From bed bugs in New Brunswick apartments to termites in Edison homes &mdash; we handle them all.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {COMMON_PESTS.map((pest) => (
              <Link
                key={pest.name}
                href={pest.link}
                className="flex flex-col items-center gap-2 bg-lightgray hover:bg-navy hover:text-white text-dark rounded-lg p-4 text-center transition-colors"
              >
                <span className="text-3xl">{pest.icon}</span>
                <span className="text-sm font-semibold">{pest.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-4">Service Areas</h2>
          <p className="text-center text-gray-600 mb-8">
            We cover all municipalities in Middlesex County, NJ.{' '}
            <Link href="/locations" className="text-primary hover:underline">View all service areas &rarr;</Link>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SERVICE_AREAS.map((area) => (
              <div key={area} className="bg-white rounded px-3 py-2 text-sm text-center text-dark font-medium border border-gray-200">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light">
        <div className="container-main max-w-3xl">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Frequently Asked Questions</h2>
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

      {/* Bottom CTA */}
      <section className="bg-primary py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8">
            Call us now for same-day service across Middlesex County, NJ.
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
