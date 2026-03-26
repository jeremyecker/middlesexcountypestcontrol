import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Award, Users, CheckCircle, MapPin, Clock, Leaf } from 'lucide-react';
import { PHONE, PHONE_RAW, SITE_NAME, DOMAIN, TAGLINE } from '@/lib/data';

export const metadata: Metadata = {
  title: `About Us`,
  description: `Middlesex County Pest Control — licensed NJ DEP pest management professionals serving all 25 municipalities of Middlesex County since 2018. Local experts, not a national chain.`,
  alternates: { canonical: `${DOMAIN}/about` },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long have you been serving Middlesex County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Middlesex County Pest Control has been serving all 25 municipalities of Middlesex County, NJ since 2018. Our team has been protecting homes and businesses in this county continuously since our founding.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas of Middlesex County do you cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all 25 municipalities in Middlesex County, NJ: Carteret, Cranbury, Dunellen, East Brunswick, Edison, Helmetta, Highland Park, Jamesburg, Middlesex, Milltown, Monroe, New Brunswick, North Brunswick, Old Bridge, Perth Amboy, Piscataway, Plainsboro, Sayreville, South Amboy, South Brunswick, South Plainfield, South River, Spotswood, and Woodbridge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you licensed and insured in NJ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All of our technicians hold current New Jersey Department of Environmental Protection (NJ DEP) pesticide applicator licenses. We carry comprehensive general liability and workers\u2019 compensation insurance on every service call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer same-day and next-day appointments throughout Middlesex County. For urgent pest situations, call us directly and we will do our best to accommodate you as quickly as possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you serve commercial properties in Middlesex County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide commercial pest control services to restaurants, office buildings, warehouses, multi-family housing, schools, and healthcare facilities throughout Middlesex County. Our commercial programs include scheduled inspections, treatment, and full documentation for health code compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you a local company or a national chain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are a locally operated pest control company focused exclusively on Middlesex County, NJ. Unlike national chains that rotate technicians and apply one-size-fits-all treatments, our team works this county every day and understands its specific pest pressures, housing stock, and seasonal patterns.',
      },
    },
  ],
};

const TOWNS = [
  'Carteret', 'Cranbury', 'Dunellen', 'East Brunswick', 'Edison', 'Helmetta',
  'Highland Park', 'Jamesburg', 'Middlesex', 'Milltown', 'Monroe', 'New Brunswick',
  'North Brunswick', 'Old Bridge', 'Perth Amboy', 'Piscataway', 'Plainsboro',
  'Sayreville', 'South Amboy', 'South Brunswick', 'South Plainfield', 'South River',
  'Spotswood', 'Woodbridge',
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-dark text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Middlesex County Pest Control</h1>
          <p className="text-gray-300 text-xl max-w-2xl">{TAGLINE}. Licensed, insured, and committed to protecting Middlesex County homes and businesses since 2018.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-light">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Middlesex County Pest Control was founded in 2018 by pest management professionals with deep roots in Middlesex County, NJ. Frustrated by large national chains that treated every customer like a number, our founders set out to build a genuinely local pest control company — one that would bring expert-level service with the attentiveness of a neighborhood business.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since opening our doors, we&apos;ve served thousands of homes and businesses across all 25 municipalities of Middlesex County. Our clients range from single-family homeowners in Edison and Old Bridge to apartment building owners in New Brunswick and Perth Amboy, and from restaurants along the Route 1 corridor to large commercial and industrial facilities throughout the county.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We built this company on a simple belief: pest control works best when the technician knows the territory. Our team works Middlesex County every day. We understand the urban density of New Brunswick that drives bed bug and cockroach activity. We know the waterfront neighborhoods of Carteret and Perth Amboy that create rodent pressure. We&apos;ve treated the suburban sprawl of Edison and Woodbridge where every pest challenge imaginable presents itself. That local knowledge makes us more effective than any national chain.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are a proud partner of Rest Easy Pest Control, which allows us to combine local expertise with access to the latest treatment technologies and ongoing professional training.
              </p>
            </div>
            <div className="bg-navy rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '2018', label: 'Year Founded' },
                  { number: '25', label: 'Towns Served' },
                  { number: '9+', label: 'Services Offered' },
                  { number: '5\u2605', label: 'Average Rating' },
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-1">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-4">Why Local Beats National</h2>
          <p className="text-gray-600 text-center text-lg mb-10 max-w-2xl mx-auto">
            Big-box pest control companies rotate technicians, apply cookie-cutter treatments, and upsell annual contracts. We don&apos;t operate that way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin size={36} className="text-primary" />,
                title: 'We Know This County',
                desc: 'Our technicians live and work in Middlesex County. We understand which neighborhoods face the worst rodent pressure near the Raritan River, where bed bugs concentrate in New Brunswick\'s dense housing, and how tick season affects the parks and green spaces of Piscataway and Monroe.',
              },
              {
                icon: <Clock size={36} className="text-primary" />,
                title: 'Same Technician Every Visit',
                desc: 'National chains often send a different technician each visit. We assign consistent technicians who learn your property, remember its history, and build real accountability for results.',
              },
              {
                icon: <Leaf size={36} className="text-primary" />,
                title: 'Targeted, Not Template',
                desc: 'We inspect before we treat. Every recommendation is based on what we actually find at your property — not a pre-packaged service plan designed for upselling.',
              },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Credentials */}
      <section className="section-light">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Our Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={40} className="text-primary" />,
                title: 'NJ DEP Licensed',
                desc: 'All technicians hold current New Jersey Department of Environmental Protection pesticide applicator licenses. We renew certifications annually and maintain all required continuing education hours.',
              },
              {
                icon: <Award size={40} className="text-primary" />,
                title: 'Fully Insured',
                desc: 'Middlesex County Pest Control carries comprehensive general liability and workers\u2019 compensation insurance. Your property and our team are protected on every service call — no exceptions.',
              },
              {
                icon: <Users size={40} className="text-primary" />,
                title: 'Background Checked',
                desc: 'Every technician undergoes thorough background screening before joining our team. When we send someone to your home or business, they meet our high standards for professionalism and trust.',
              },
            ].map(cred => (
              <div key={cred.title} className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                <div className="flex justify-center mb-4">{cred.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3">{cred.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cred.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-gray">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-6 text-center">Our Approach: Integrated Pest Management</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We practice Integrated Pest Management (IPM) — an evidence-based approach that combines inspection, monitoring, exclusion, and targeted treatment to achieve effective pest control while minimizing unnecessary pesticide use. IPM isn&apos;t just better for the environment; it produces more durable results because it addresses root causes rather than just surface symptoms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When we arrive at your property, we begin with a thorough inspection. We identify the specific pest species, assess the extent of the infestation, and investigate entry points and conducive conditions. That inspection drives every treatment recommendation. We don&apos;t apply chemicals on a fixed schedule regardless of need — we treat based on what we find.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our technicians explain every step of the treatment plan before beginning, including what products will be used, where they will be applied, and any precautions for your household. After treatment, we provide written documentation and schedule follow-up to confirm the infestation has been resolved.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Thorough inspection before any treatment',
                'Species-specific treatment protocols',
                'Exclusion work to address entry points',
                'Targeted application — minimal chemical use',
                'Full pre-treatment explanation to client',
                'Written service documentation provided',
                'Follow-up to confirm successful results',
                'Ongoing monitoring programs available',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-primary flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-light">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-4">Serving All 25 Municipalities in Middlesex County</h2>
          <p className="text-gray-600 text-center text-lg mb-8 max-w-2xl mx-auto">
            From Edison to New Brunswick, from Carteret to Plainsboro — we cover every community in Middlesex County with the same expert, locally-focused service.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {TOWNS.map(town => (
              <span key={town} className="bg-navy text-white text-sm font-medium px-3 py-1 rounded-full">
                {town}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-ctahover transition-colors text-center">
              Book Now
            </Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-dark text-dark px-8 py-4 rounded font-bold hover:bg-dark hover:text-white transition-colors text-center">
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-dark mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
