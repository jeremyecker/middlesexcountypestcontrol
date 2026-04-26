import type { Metadata } from 'next';
import { getOpenGraph } from '@/lib/og';
import Link from 'next/link';
import { Shield, CheckCircle, Award, Phone } from 'lucide-react';
import { PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Licensed & Insured Pest Control | Middlesex County',
  description: `${SITE_NAME} — NJ DEP licensed and fully insured. Our credentials, certifications, and commitment to professional pest management`,
  alternates: { canonical: `${DOMAIN}/credentials` },
  openGraph: getOpenGraph(
    '/credentials',
    'Licensed & Insured Pest Control | Middlesex County',
    `${SITE_NAME} — NJ DEP licensed and fully insured. Our credentials, certifications, and commitment to professional pest management`,
  ),
};

const credentialsSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  url: DOMAIN,
  telephone: PHONE,
  address: { '@type': 'PostalAddress', addressLocality: 'New Brunswick', addressRegion: 'NJ', addressCountry: 'US' },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'NJ Department of Environmental Protection Pesticide Applicator License',
      recognizedBy: { '@type': 'GovernmentOrganization', name: 'New Jersey Department of Environmental Protection' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'Commercial Pesticide Applicator Certification',
      recognizedBy: { '@type': 'GovernmentOrganization', name: 'New Jersey Department of Environmental Protection' },
    },
  ],
};

export default function CredentialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialsSchema) }} />

      <section className="bg-navy text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Credentials</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Licensed, Insured & Certified</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Middlesex County Pest Control operates with full NJ state licensing, comprehensive liability insurance, and technicians trained to the highest professional standards.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
              <Shield size={48} className="text-navy mx-auto mb-4" />
              <h2 className="text-xl font-bold text-dark mb-3">NJ DEP Licensed</h2>
              <p className="text-gray-600 leading-relaxed">
                All pesticide applications are performed by or under the direct supervision of a New Jersey Department of Environmental Protection licensed pesticide applicator. Our license is current and in good standing.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
              <Award size={48} className="text-navy mx-auto mb-4" />
              <h2 className="text-xl font-bold text-dark mb-3">Fully Insured</h2>
              <p className="text-gray-600 leading-relaxed">
                We carry comprehensive general liability insurance and workers' compensation coverage. Our insurance protects your property and gives you complete peace of mind on every service visit.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
              <CheckCircle size={48} className="text-navy mx-auto mb-4" />
              <h2 className="text-xl font-bold text-dark mb-3">Trained Technicians</h2>
              <p className="text-gray-600 leading-relaxed">
                Every technician completes a rigorous training program in pest identification, treatment protocols, and integrated pest management. We invest in ongoing education to stay current with industry best practices.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-dark mb-6">Our Licensing & Certifications</h2>
            <div className="flex flex-col gap-4 mb-12">
              {[
                {
                  title: 'NJ DEP Commercial Pesticide Applicator License',
                  desc: 'Required by the State of New Jersey for all commercial pest control operations. Our license covers general pest management, fumigation, and lawn and ornamental treatments.',
                },
                {
                  title: 'NJ DEP Pesticide Applicator Certification',
                  desc: 'Individual certification held by our licensed technicians, demonstrating knowledge of pesticide safety, application methods, environmental protection, and NJ regulations.',
                },
                {
                  title: 'General Liability Insurance',
                  desc: 'Full coverage for property damage and bodily injury. Certificate of insurance available upon request for commercial clients and property managers.',
                },
                {
                  title: "Workers' Compensation",
                  desc: "All field technicians are covered under workers' compensation insurance in accordance with New Jersey state requirements.",
                },
                {
                  title: 'Integrated Pest Management Training',
                  desc: 'Our technicians are trained in IPM protocols that emphasize targeted treatment, minimal environmental impact, and long-term prevention over repeated chemical applications.',
                },
              ].map(item => (
                <div key={item.title} className="flex gap-4 bg-lightgray rounded-lg p-5">
                  <CheckCircle size={20} className="text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-dark">{item.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-navy rounded-xl p-8 text-white text-center">
              <Phone size={32} className="mx-auto mb-4 text-blue-300" />
              <h3 className="text-2xl font-bold mb-3">Questions About Our Credentials?</h3>
              <p className="text-gray-200 mb-6">
                We're happy to provide proof of insurance, our NJ DEP license number, or any other documentation you need for commercial or property management purposes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded font-bold hover:bg-ctahover transition-colors">
                  Contact Us
                </Link>
                <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-navyhover transition-colors">
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
