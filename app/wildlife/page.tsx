import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { wildlifeServices, PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: `Wildlife Removal in Middlesex County, NJ`,
  description: `Humane wildlife removal services in Middlesex County, NJ. Squirrel removal, raccoon removal, bird control. Licensed and insured. Call ${PHONE}.`,
  alternates: { canonical: `${DOMAIN}/wildlife` },
};

export default function WildlifePage() {
  return (
    <>
      <section className="bg-dark text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Wildlife</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wildlife Removal in Middlesex County, NJ</h1>
          <p className="text-gray-300 text-xl max-w-2xl">Humane, licensed wildlife removal services for Middlesex County homeowners and businesses. Squirrels, raccoons, birds, and more.</p>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Middlesex County Wildlife Removal Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Middlesex County's mix of suburban development and natural areas creates regular wildlife intrusion problems. Our licensed wildlife removal specialists provide humane, effective solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wildlifeServices.map(service => (
              <div key={service.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="bg-navy flex items-center justify-center h-28">
                  <span className="text-6xl">🦝</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                  <Link
                    href={`/wildlife/${service.slug}`}
                    className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark text-center mb-6">Why Professional Wildlife Removal?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Attempting to remove wildlife on your own is dangerous and often ineffective. Animals that feel cornered can become aggressive. Improperly handled removal often results in re-infestation when entry points are not sealed. In New Jersey, certain wildlife species are also protected and require licensed removal by a certified wildlife control professional.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Middlesex County Pest Control's wildlife removal specialists are trained and licensed in humane wildlife management techniques. We use live trapping methods where appropriate, relocate animals per NJ DEP guidelines, and seal entry points to prevent re-entry.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you have squirrels in your attic in Edison, raccoons raiding trash cans in Old Bridge, or birds nesting in a commercial building in New Brunswick, we handle every wildlife intrusion professionally from start to finish.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Wildlife Problem in Middlesex County?</h2>
          <p className="text-red-100 text-lg mb-8">Don't try to handle it yourself. Our licensed team is ready to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded font-bold hover:bg-gray-100 transition-colors">Book Now</Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">Call {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
