import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { towns, PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: `Pest Control Locations in Middlesex County, NJ | ${SITE_NAME}`,
  description: `Middlesex County Pest Control serves all 25 municipalities in Middlesex County, NJ. Find your town and book same-day pest control service.`,
  alternates: { canonical: `${DOMAIN}/locations` },
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Locations</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pest Control Throughout Middlesex County, NJ</h1>
          <p className="text-blue-100 text-xl max-w-2xl mb-8">
            Serving all 25 municipalities in Middlesex County since 2018. Same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-ctahover transition-colors text-center">
              Book Now
            </Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold text-center">
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">All 25 Middlesex County Municipalities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {towns.map(town => (
              <Link
                key={town.slug}
                href={`/${town.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-navy transition-all"
              >
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">{town.name}</h2>
                    <p className="text-gray-500 text-sm">{town.county}, {town.state}</p>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{town.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Town?</h2>
          <p className="text-red-100 text-lg mb-8">We serve all of Middlesex County, NJ. Call to confirm same-day availability.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded font-bold hover:bg-gray-100 transition-colors">Book Now</Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold">Call {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
