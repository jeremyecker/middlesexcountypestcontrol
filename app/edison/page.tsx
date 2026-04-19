import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { getOpenGraph } from '@/lib/og';
import { PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Pest Control in Edison, NJ | Same-Day Exterminators',
  description:
    'Licensed pest control in Edison, NJ. Bed bugs, rodents, cockroaches, termites, mosquitoes & more. Same-day service available. Call (732) 856-5142.',
  alternates: { canonical: `${DOMAIN}/edison` },
  openGraph: getOpenGraph('/edison'),
};

const EDISON_SERVICES = [
  {
    slug: 'bed-bugs',
    emoji: '🛏️',
    title: 'Bed Bug Treatment',
    desc: 'Edison\'s dense multi-family housing and apartment complexes create bed bug spread risk. We offer heat and chemical treatment for complete elimination.',
  },
  {
    slug: 'rodents',
    emoji: '🐀',
    title: 'Rodent Control',
    desc: 'Mice and rats are active throughout Edison — especially near Raritan Center, older neighborhoods, and the Oak Tree Road corridor. Full exclusion included.',
  },
  {
    slug: 'cockroaches',
    emoji: '🪳',
    title: 'Cockroach Extermination',
    desc: 'Professional gel bait and residual treatments for German cockroach infestations in Edison apartments, restaurants, and commercial properties.',
  },
  {
    slug: 'ants',
    emoji: '🐜',
    title: 'Ant Control',
    desc: 'Carpenter ants, pavement ants, and odorous house ants are all active in Edison. We locate colonies and eliminate them with targeted treatments.',
  },
  {
    slug: 'termites',
    emoji: '🪵',
    title: 'Termite Treatment',
    desc: 'Protect your Edison home with liquid barrier or bait station termite treatments. Free inspections available for residential and commercial properties.',
  },
  {
    slug: 'mosquitoes',
    emoji: '🦟',
    title: 'Mosquito Control',
    desc: 'Edison\'s retention ponds, wooded areas, and suburban landscaping create significant mosquito pressure. Seasonal barrier spray programs keep your yard clear.',
  },
  {
    slug: 'wasps',
    emoji: '🐝',
    title: 'Wasp & Hornet Removal',
    desc: 'Same-day wasp nest removal throughout Edison. Yellow jackets, bald-faced hornets, and paper wasps safely eliminated by licensed technicians.',
  },
  {
    slug: 'ticks',
    emoji: '🕷️',
    title: 'Tick Control',
    desc: 'Edison\'s wooded residential lots and parks harbor blacklegged ticks (deer ticks). Targeted yard treatment reduces tick populations and Lyme disease risk.',
  },
  {
    slug: 'fleas',
    emoji: '🦗',
    title: 'Flea Extermination',
    desc: 'Comprehensive flea treatment for Edison homes and yards. We treat both the interior and exterior to break the flea life cycle completely.',
  },
];

const FAQS = [
  {
    q: 'What pests are most common in Edison, NJ?',
    a: 'Edison\'s most common pest problems include ants (carpenter and pavement ants), rodents (mice and rats — especially near Raritan Center and older neighborhoods), cockroaches in multi-family properties, mosquitoes in areas near retention ponds and wooded lots, and bed bugs in apartments and densely occupied housing. Termites are also a concern in Edison\'s older neighborhoods, particularly pre-1980s construction.',
  },
  {
    q: 'How quickly can Middlesex County Pest Control reach Edison?',
    a: 'We offer same-day and next-day service throughout Edison Township. Most service calls are dispatched within 2-4 hours during weekdays. Call (732) 856-5142 for fastest response. We cover all Edison neighborhoods including Oak Tree Road, Raritan Center, Clara Barton, North Edison, and Edison Station.',
  },
  {
    q: 'How much does pest control cost in Edison, NJ?',
    a: 'Pest control costs in Edison vary by pest and infestation size. General pest control typically runs $150–$350 for a standard treatment. Bed bug heat treatment averages $800–$2,500 for an apartment. Termite liquid treatment for an average Edison home runs $800–$2,000. Rodent control with exclusion typically totals $600–$2,000 depending on the number of entry points. We provide free estimates — call (732) 856-5142 for an exact quote.',
  },
  {
    q: 'Do you service Edison apartments and condos?',
    a: 'Yes. We regularly service Edison\'s multi-family properties including apartment complexes, condominiums, townhouses, and rental properties. We work directly with property managers and landlords for unit-by-unit treatment protocols. German cockroach, bed bug, and rodent programs are all available for multi-unit buildings.',
  },
  {
    q: 'Is Middlesex County Pest Control licensed in NJ?',
    a: 'Yes. We are fully licensed by the New Jersey Department of Environmental Protection (NJDEP) and carry all required general liability insurance and workers\' compensation coverage. Our technicians hold active NJ pesticide applicator licenses. License information available on request.',
  },
];

const NEARBY_TOWNS = [
  { name: 'Woodbridge', slug: 'woodbridge' },
  { name: 'South Plainfield', slug: 'south-plainfield' },
  { name: 'Piscataway', slug: 'piscataway' },
  { name: 'Metuchen', slug: 'metuchen' },
  { name: 'North Brunswick', slug: 'north-brunswick' },
  { name: 'Perth Amboy', slug: 'perth-amboy' },
  { name: 'Old Bridge', slug: 'old-bridge' },
  { name: 'Sayreville', slug: 'sayreville' },
];

export default function EdisonPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    telephone: PHONE,
    url: `${DOMAIN}/edison`,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&q=80',
    description: `Licensed pest control in Edison, NJ. Bed bugs, rodents, cockroaches, termites, mosquitoes & more. Same-day service available.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Edison',
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'City', name: 'Edison, NJ' },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '20:00',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${DOMAIN}/locations` },
      { '@type': 'ListItem', position: 3, name: 'Edison', item: `${DOMAIN}/edison` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-white">Locations</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Edison</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={18} className="text-red-400" />
            <span className="text-blue-200 text-sm">Middlesex County, NJ &mdash; Population 107,000+</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pest Control in Edison, NJ</h1>
          <p className="text-blue-100 text-xl max-w-2xl mb-6">
            Edison&rsquo;s largest township. Our licensed exterminators serve every neighborhood &mdash; from Oak Tree Road to Raritan Center &mdash; with same-day pest control you can count on.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Same-Day Service', 'Licensed & Insured', 'NJ DEP Certified', 'Free Estimates'].map((badge) => (
              <span key={badge} className="bg-white/10 border border-white/20 text-white text-sm px-3 py-1 rounded-full">
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-ctahover transition-colors text-center">
              Book Same-Day Service
            </Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-navyhover transition-colors text-center flex items-center justify-center gap-2">
              <Phone size={18} />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            {[
              { num: '6+', label: 'Years in Middlesex County' },
              { num: '5,000+', label: 'Edison Homes Treated' },
              { num: '4.9★', label: 'Average Rating' },
              { num: '100%', label: 'Licensed & Insured' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-primary">{stat.num}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-dark mb-6">Exterminator Services in Edison, NJ</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Edison Township is the largest and most diverse community in Middlesex County, home to over 107,000 residents across a wide mix of neighborhoods, housing types, and commercial corridors. From the Oak Tree Road and Route 27 corridors to the Raritan Center business park, from established residential neighborhoods in North Edison and Clara Barton to newer developments and apartment complexes throughout the township, Edison presents pest control challenges at every scale.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Middlesex County Pest Control has been serving Edison homeowners, landlords, property managers, and businesses since 2018. We understand the specific pest dynamics of this large, densely developed township &mdash; the rodent pressure around commercial corridors, the cockroach challenges in multi-family properties, the bed bug spread in apartment complexes, and the seasonal mosquito and tick activity in Edison&rsquo;s suburban neighborhoods.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our licensed technicians are NJDEP-certified, fully insured, and trained to handle every pest problem Edison residents face &mdash; with same-day and next-day service available throughout the township.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-3">Pest Control Services in Edison</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Full-service pest management for Edison homes and businesses. Every service backed by our satisfaction guarantee.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EDISON_SERVICES.map((service) => (
              <div
                key={service.slug}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-navy flex items-center justify-center h-20">
                  <span className="text-4xl" role="img" aria-label={service.title}>{service.emoji}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.desc}</p>
                  <Link
                    href={`/services/${service.slug}/edison`}
                    className="text-primary font-semibold text-sm flex items-center gap-1"
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edison neighborhoods */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-6">Edison Neighborhoods We Serve</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide pest control throughout all of Edison Township, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                'Oak Tree Road area', 'Clara Barton section', 'North Edison',
                'Raritan Center vicinity', 'Edison Station area', 'Menlo Park',
                'Stelton Road corridor', 'Plainfield Avenue area', 'Route 1 corridor',
                'South Edison', 'Inman Avenue area', 'Woodbrook section',
              ].map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 text-gray-700 text-sm">
                  <MapPin size={14} className="text-primary flex-shrink-0" />
                  {neighborhood}
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              Not sure if we reach your area? Call <a href={`tel:${PHONE_RAW}`} className="text-primary font-semibold">{PHONE}</a> &mdash; we cover all 30+ square miles of Edison Township.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Why Edison Residents Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              'Local Middlesex County experts who know Edison\'s pest patterns',
              'Same-day dispatch available throughout Edison Township',
              'NJDEP-licensed technicians — fully insured',
              'Transparent pricing with written estimates before treatment',
              'Satisfaction guarantee — we return if the problem isn\'t resolved',
              'English, Spanish, and other languages available on request',
              'Serving residential and commercial properties of all sizes',
              'Safe, EPA-registered products applied by certified professionals',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-light">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-dark text-center mb-8">What Edison Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                name: 'John D.',
                location: 'Edison, NJ',
                text: 'Middlesex County Pest Control resolved our termite problem quickly. The technician was thorough, professional, and explained every step. Highly recommend!',
              },
              {
                name: 'Linda C.',
                location: 'Edison, NJ',
                text: 'Had a rodent problem that two other companies failed to solve. They found all the entry points, sealed them, and eliminated the mice completely.',
              },
            ].map((review) => (
              <div key={review.name} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">&ldquo;{review.text}&rdquo;</p>
                <div className="text-sm font-semibold text-dark">{review.name}</div>
                <div className="text-xs text-gray-500">{review.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-dark text-center mb-8">Pest Control FAQ &mdash; Edison, NJ</h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-base font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby towns */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-xl font-bold text-dark text-center mb-5">Also Serving Nearby Edison Communities</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {NEARBY_TOWNS.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}`}
                className="bg-white border border-gray-200 text-dark text-sm px-3 py-2 rounded hover:bg-navy hover:text-white hover:border-navy transition-colors"
              >
                {t.name}
              </Link>
            ))}
            <Link href="/locations" className="bg-primary text-white text-sm px-3 py-2 rounded hover:bg-ctahover transition-colors">
              All 25 Towns &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Same-Day Pest Control in Edison</h2>
          <p className="text-red-100 text-lg mb-8">Licensed. Insured. Same-day service available throughout Edison Township.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded font-bold hover:bg-gray-100 transition-colors">
              Book Now &mdash; Free Estimate
            </Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} />
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
