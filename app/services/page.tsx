import type { Metadata } from 'next';
import { getOpenGraph } from '@/lib/og';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services, wildlifeServices, PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Pest Control Services | Middlesex County, NJ',
  description: `Middlesex County, NJ pest control: bed bugs, rodents, cockroaches, ants, termites, mosquitoes, wasps, ticks, fleas. Licensed & insured. Call ${PHONE}`,
  alternates: { canonical: `${DOMAIN}/services` },
  openGraph: getOpenGraph('/services'),
};

const serviceEmojiMap: Record<string, string> = {
  'bed-bugs':    '🛏️',
  'rodents':     '🐀',
  'cockroaches': '🪳',
  'ants':        '🐜',
  'termites':    '🪵',
  'mosquitoes':  '🦟',
  'wasps':       '🐝',
  'ticks':       '🕷️',
  'fleas':       '🦗',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-dark text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pest Control Services in Middlesex County, NJ</h1>
          <p className="text-gray-300 text-xl max-w-2xl">Expert pest management for homes and businesses throughout Middlesex County. Licensed, insured, and serving all 25 municipalities since 2018.</p>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Residential & Commercial Pest Control</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => {
              const emoji = serviceEmojiMap[service.slug] ?? '🐛';
              return (
                <div key={service.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="bg-navy flex items-center justify-center h-28">
                    <span className="text-6xl" role="img" aria-label={service.title}>{emoji}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Wildlife Removal Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wildlifeServices.map(service => (
              <div key={service.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="bg-navy flex items-center justify-center h-24">
                  <span className="text-5xl">🦝</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                  <Link
                    href={`/wildlife/${service.slug}`}
                    className="text-primary font-semibold text-sm flex items-center gap-1"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Solve Your Pest Problem?</h2>
          <p className="text-gray-200 text-lg mb-8">Same-day service available throughout Middlesex County, NJ.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-ctahover transition-colors">Book Now</Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-navyhover transition-colors">Call {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
