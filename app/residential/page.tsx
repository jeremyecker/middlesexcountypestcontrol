import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: `Residential Pest Control in Middlesex County, NJ | ${SITE_NAME}`,
  description: `Expert home pest control for Middlesex County, NJ homeowners. Bed bugs, rodents, termites, mosquitoes, ants, and more. Licensed and insured. Call ${PHONE}.`,
  alternates: { canonical: `${DOMAIN}/residential` },
};

const TOWNS = [
  'Carteret', 'Cranbury', 'Dunellen', 'East Brunswick', 'Edison', 'Helmetta',
  'Highland Park', 'Jamesburg', 'Middlesex', 'Milltown', 'Monroe', 'New Brunswick',
  'North Brunswick', 'Old Bridge', 'Perth Amboy', 'Piscataway', 'Plainsboro',
  'Sayreville', 'South Amboy', 'South Brunswick', 'South Plainfield', 'South River',
  'Spotswood', 'Woodbridge',
];

export default function ResidentialPage() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Residential</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Pest Control in Middlesex County, NJ</h1>
          <p className="text-blue-100 text-xl max-w-2xl mb-8">Expert pest management for Middlesex County homeowners. Licensed, insured, and serving all 25 municipalities since 2018.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-ctahover transition-colors text-center">Book Now</Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold text-center">{PHONE}</a>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Residential Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { emoji: '🛏️', name: 'Bed Bug Extermination', slug: 'bed-bugs' },
              { emoji: '🐀', name: 'Rodent Control', slug: 'rodents' },
              { emoji: '🪳', name: 'Cockroach Extermination', slug: 'cockroaches' },
              { emoji: '🐜', name: 'Ant Control', slug: 'ants' },
              { emoji: '🪵', name: 'Termite Treatment', slug: 'termites' },
              { emoji: '🦟', name: 'Mosquito Control', slug: 'mosquitoes' },
              { emoji: '🐝', name: 'Wasp & Bee Removal', slug: 'wasps' },
              { emoji: '🕷️', name: 'Tick Control', slug: 'ticks' },
              { emoji: '🦗', name: 'Flea Extermination', slug: 'fleas' },
            ].map(svc => (
              <Link key={svc.slug} href={`/services/${svc.slug}`} className="flex items-center gap-4 bg-white rounded-lg p-5 shadow-sm hover:shadow-md border border-gray-100 transition-all group">
                <span className="text-4xl">{svc.emoji}</span>
                <span className="font-semibold text-dark group-hover:text-primary transition-colors">{svc.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-4">Serving All 25 Middlesex County Municipalities</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {TOWNS.map(town => (
              <span key={town} className="bg-white text-dark text-sm border border-gray-200 px-3 py-1 rounded-full">{town}</span>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-ctahover transition-colors">Book a Home Inspection</Link>
          </div>
        </div>
      </section>
    </>
  );
}
