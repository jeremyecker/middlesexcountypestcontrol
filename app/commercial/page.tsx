import type { Metadata } from 'next';
import { getOpenGraph } from '@/lib/og';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: `Commercial Pest Control in Middlesex County, NJ`,
  description: `Commercial pest control for Middlesex County, NJ. Restaurants, healthcare, offices, warehouses & schools. NJ health code compliant. Call ${PHONE}.`,
  alternates: { canonical: `${DOMAIN}/commercial` },
  openGraph: getOpenGraph('/commercial'),
};

export default function CommercialPage() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Commercial</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Pest Control in Middlesex County, NJ</h1>
          <p className="text-blue-100 text-xl max-w-2xl mb-8">Protecting Middlesex County businesses with professional, compliant pest management programs. Serving restaurants, healthcare, offices, warehouses, and more.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-ctahover transition-colors text-center">
              Book a Commercial Inspection
            </Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-navyhover transition-colors text-center">
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Industries We Serve in Middlesex County</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Restaurants & Food Service', desc: 'From New Brunswick dining to the Edison food corridor, food service operations face strict NJ DOH pest control requirements. We provide scheduled programs with full health inspection documentation.' },
              { title: 'Healthcare Facilities', desc: 'Robert Wood Johnson University Hospital in New Brunswick, Raritan Bay Medical Center in Perth Amboy, and facilities county-wide require our highest pest control standards.' },
              { title: 'Office Buildings & Corporate Campuses', desc: 'The Piscataway and Edison technology corridors host major corporate campuses. We design programs that work around your business hours and tenant requirements.' },
              { title: 'Multi-Family Housing', desc: 'Apartment buildings across New Brunswick, Perth Amboy, and Middlesex County require comprehensive programs coordinating across units and common areas.' },
              { title: 'Warehouses & Distribution Centers', desc: 'The Woodbridge and Carteret logistics hubs require pest management designed for high-volume storage and freight operations.' },
              { title: 'Schools & Educational Institutions', desc: 'From K-12 schools to Rutgers University facilities, educational institutions require discreet, schedule-sensitive pest management.' },
            ].map(sector => (
              <div key={sector.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-dark mb-2">{sector.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">What Your Commercial Program Includes</h2>
              <ul className="flex flex-col gap-4">
                {[
                  'Initial inspection and facility assessment',
                  'Written Integrated Pest Management (IPM) plan',
                  'Scheduled interior and exterior service visits',
                  'Pest activity log and service documentation',
                  'Staff training recommendations',
                  'Emergency call response with priority scheduling',
                  'Compliance documentation for health inspections',
                  'Annual review and program adjustment',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Request a Commercial Proposal</h3>
              <p className="text-blue-100 mb-6">We will conduct a free facility assessment and provide a written commercial pest management proposal within 24 hours.</p>
              <Link href="/contact" className="block bg-primary text-white text-center px-6 py-3 rounded font-bold hover:bg-ctahover transition-colors">
                Book a Commercial Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Protect Your Middlesex County Business</h2>
          <p className="text-red-100 text-lg mb-8">Contact us today for a free commercial pest inspection.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded font-bold hover:bg-gray-100 transition-colors">Book Now</Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">Call {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
