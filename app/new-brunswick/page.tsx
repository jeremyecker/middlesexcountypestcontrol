import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Pest Control New Brunswick NJ | Same-Day Service',
  description: 'Expert pest control in New Brunswick, NJ — Rutgers area, downtown & Highland Park. Bed bugs, cockroaches & rodents. Licensed & insured. Call for same-day service.',
  alternates: { canonical: `${DOMAIN}/new-brunswick` },
};

const services = [
  {
    slug: 'bed-bugs',
    emoji: '🛏️',
    title: 'Bed Bug Treatment',
    desc: 'Heat treatment and IPM chemical protocols for New Brunswick apartments, student housing, and multi-family buildings. Discreet, effective, and fully documented.',
    link: '/services/bed-bugs/new-brunswick',
  },
  {
    slug: 'cockroaches',
    emoji: '🪳',
    title: 'Cockroach Control',
    desc: 'German and American cockroach elimination for New Brunswick apartments and restaurants. Gel bait + IGR protocols that break the breeding cycle.',
    link: '/services/cockroaches/new-brunswick',
  },
  {
    slug: 'rodents',
    emoji: '🐀',
    title: 'Rodent Control',
    desc: 'Mice and rat elimination with comprehensive exclusion work for New Brunswick row houses, multi-family buildings, and commercial kitchens near Rutgers.',
    link: '/services/rodents/new-brunswick',
  },
  {
    slug: 'ants',
    emoji: '🐜',
    title: 'Ant Control',
    desc: 'Pavement ants, odorous house ants, and carpenter ants in New Brunswick homes. Colony elimination with targeted bait programs.',
    link: '/services/ants/new-brunswick',
  },
  {
    slug: 'termites',
    emoji: '🪵',
    title: 'Termite Treatment',
    desc: 'Subterranean termite inspection and treatment for New Brunswick\'s older housing stock. Liquid barrier and baiting options available.',
    link: '/services/termites/new-brunswick',
  },
  {
    slug: 'mosquitoes',
    emoji: '🦟',
    title: 'Mosquito Control',
    desc: 'Seasonal barrier spray programs for New Brunswick yards and outdoor spaces near Rutgers. Culex and tiger mosquito control for residential and commercial properties.',
    link: '/services/mosquitoes/new-brunswick',
  },
];

const neighborhoods = [
  { name: 'Rutgers University Area', desc: 'College Avenue, George Street, Hamilton Street — dense student housing with elevated bed bug and cockroach risk from high tenant turnover.' },
  { name: 'French Street Medical Corridor', desc: 'Older commercial and residential buildings near Robert Wood Johnson and Saint Peter\'s hospitals. Multi-family housing with common pest pressure.' },
  { name: 'Downtown New Brunswick', desc: 'Historic row houses, commercial kitchens, and mixed-use buildings from Hiram Square to the waterfront. Rodent and cockroach hotspot.' },
  { name: 'Esperanza Section', desc: 'Dense residential neighborhood with multi-family housing stock. Active rodent corridors along the alley systems.' },
  { name: 'Highland Park Border', desc: 'Row houses and pre-war apartment buildings along the Raritan River corridor — older building stock with significant rodent entry points.' },
  { name: 'Gateway Area', desc: 'Route 1 commercial corridor with restaurants, warehouses, and light industrial — active rodent pressure in adjacent residential blocks.' },
];

const faqs = [
  {
    q: 'What pests are most common in New Brunswick apartments?',
    a: `New Brunswick's combination of dense housing, high tenant turnover (especially near Rutgers University), and older building stock creates the ideal conditions for bed bugs, German cockroaches, and rodents. Bed bugs spread rapidly in buildings where tenants move frequently. German cockroaches thrive in apartment kitchens with shared plumbing walls. Rodents exploit the extensive utility and sewer infrastructure under older row houses throughout the city. Call ${PHONE} for a same-day assessment.`,
  },
  {
    q: 'Do you treat student housing and Rutgers-area apartments?',
    a: `Yes — we regularly treat apartments, multi-family buildings, and rental properties throughout the Rutgers University area including College Avenue, George Street, and Easton Avenue. We work with landlords and property managers to coordinate discreet service that minimizes disruption to tenants. Call ${PHONE} or contact us online for multi-unit pricing.`,
  },
  {
    q: 'How quickly can you get to New Brunswick?',
    a: `We offer same-day and next-day service throughout New Brunswick and all of Middlesex County. Call ${PHONE} — most calls placed before noon reach New Brunswick the same day.`,
  },
  {
    q: 'My New Brunswick apartment has cockroaches. What does treatment involve?',
    a: `German cockroach elimination in New Brunswick apartments typically requires 2–3 service visits. Our protocol uses gel bait (placed inside cabinets, under appliances, and in wall voids) combined with an insect growth regulator (IGR) that sterilizes surviving roaches. Vacuuming before service helps maximize effectiveness. We never use broadcast sprays in food prep areas — all products are targeted and applied according to EPA label directions.`,
  },
  {
    q: 'Are your pest control products safe for families and pets?',
    a: `Yes. All products we use in New Brunswick are EPA-registered and applied according to strict label protocols. We follow Integrated Pest Management (IPM) principles — using the minimum effective amount, targeting specific harborage sites, and avoiding unnecessary broadcast applications. Specific re-entry times depend on the treatment performed, and your technician will provide clear instructions.`,
  },
  {
    q: 'How much does pest control cost in New Brunswick?',
    a: `Residential pest control in New Brunswick typically ranges from $150–$400 depending on the pest, property size, and infestation level. Multi-unit buildings and commercial properties are priced by scope. We provide free estimates — call ${PHONE} or submit our online contact form for an upfront quote with no obligation.`,
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  telephone: PHONE,
  url: `${DOMAIN}/new-brunswick`,
  description: 'Licensed pest control services in New Brunswick, NJ. Expert bed bug treatment, cockroach control, rodent elimination, and more for residential and commercial properties.',
  address: { '@type': 'PostalAddress', addressLocality: 'New Brunswick', addressRegion: 'NJ', addressCountry: 'US' },
  areaServed: { '@type': 'City', name: 'New Brunswick, NJ' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: `${DOMAIN}/locations` },
    { '@type': 'ListItem', position: 3, name: 'New Brunswick', item: `${DOMAIN}/new-brunswick` },
  ],
};

export default function NewBrunswickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-navy text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-white">Locations</Link>
            <span className="mx-2">/</span>
            <span className="text-white">New Brunswick</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={18} className="text-red-400" />
            <span className="text-blue-200 text-sm">Middlesex County, NJ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pest Control in New Brunswick, NJ
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mb-4">
            Licensed, insured pest control for New Brunswick homes, apartments, and businesses — including Rutgers-area student housing, downtown row houses, and commercial properties.
          </p>
          <p className="text-blue-200 text-base max-w-2xl mb-8">
            New Brunswick&apos;s density, older housing stock, and high tenant turnover make it one of Middlesex County&apos;s most challenging pest environments. We&apos;re here for it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-ctahover transition-colors text-center">
              Book Now — Same-Day Available
            </Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-navyhover transition-colors text-center flex items-center justify-center gap-2">
              <Phone size={18} />
              {PHONE}
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-200">
            {['Licensed by NJ DEP', 'Fully Insured', 'Same-Day Service', 'Multi-Unit Specialists', 'Serving New Brunswick Since 2018'].map(item => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle size={13} className="text-red-400 flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why NB is Challenging */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-dark mb-6">Pest Control in New Brunswick: What Makes This City Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  New Brunswick is Middlesex County&apos;s urban core — the county seat, home to Rutgers University, and one of the most densely developed cities in Central New Jersey. That density creates pest conditions unlike suburban towns: bed bugs travel between apartment units through shared walls and hallways; cockroaches spread through shared plumbing chases; and the city&apos;s aging sewer and utility infrastructure provides extensive rodent habitat beneath the streets.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The high tenant turnover around Rutgers University compounds the risk. Student apartments see new residents every year — often bringing secondhand furniture — and the tight rental market means buildings don&apos;t always get the deep cleaning between tenants that reduces pest carry-over.
                </p>
              </div>
              <div className="bg-lightgray rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-4">New Brunswick Pest Profile</h3>
                <ul className="space-y-3">
                  {[
                    { pest: 'Bed Bugs', context: 'High risk in student housing & rental units' },
                    { pest: 'German Cockroaches', context: 'Common in apartment kitchens & restaurants' },
                    { pest: 'Mice & Rats', context: 'Active throughout downtown & row house districts' },
                    { pest: 'Odorous House Ants', context: 'Ground floor & basement units' },
                    { pest: 'Subterranean Termites', context: 'Older wood-frame homes near French Street' },
                    { pest: 'Mosquitoes', context: 'Raritan River corridor & yards in spring/summer' },
                  ].map(({ pest, context }) => (
                    <li key={pest} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-dark text-sm">{pest}</span>
                        <span className="text-gray-600 text-sm"> — {context}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Pest Control Services in New Brunswick</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <div key={service.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="bg-navy flex items-center justify-center h-20">
                  <span className="text-4xl" role="img" aria-label={service.title}>{service.emoji}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.desc}</p>
                  <Link href={service.link} className="text-primary font-semibold text-sm flex items-center gap-1">
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="section-light">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-4">Neighborhoods We Serve in New Brunswick</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            From the Rutgers University campus area to the Raritan River waterfront — we know New Brunswick block by block.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {neighborhoods.map(nb => (
              <div key={nb.name} className="bg-lightgray rounded-xl p-5">
                <h3 className="font-bold text-dark mb-2 flex items-center gap-2">
                  <MapPin size={14} className="text-primary flex-shrink-0" />
                  {nb.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{nb.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Unit / Landlord Section */}
      <section className="section-gray">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="bg-navy text-white rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Property Managers &amp; Landlords in New Brunswick</h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                Multi-family buildings, rental properties, and student housing near Rutgers have specialized pest management needs. We work with property managers throughout New Brunswick to establish ongoing IPM programs, coordinate access with tenants, provide written documentation for every service, and respond quickly to tenant complaints.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Multi-unit bed bug protocols',
                  'Monthly & quarterly maintenance programs',
                  'Written reports for every service visit',
                  'Rapid response to tenant complaints',
                  'Cockroach programs for older buildings',
                  'Discreet, professional technicians',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 text-blue-100 text-sm">
                    <CheckCircle size={14} className="text-red-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <a href={`tel:${PHONE_RAW}`} className="bg-primary hover:bg-ctahover text-white font-bold px-8 py-4 rounded transition-colors inline-flex items-center gap-2">
                <Phone size={16} />
                Call {PHONE} — Property Management Inquiries
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-light">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Why New Brunswick Chooses Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                Icon: Clock,
                title: 'Same-Day Service',
                desc: 'Most calls before noon reach New Brunswick the same day. We know pest problems can\'t wait.',
              },
              {
                Icon: Shield,
                title: 'Licensed by NJ DEP',
                desc: 'Fully licensed and insured. We carry commercial applicator credentials for every treatment type.',
              },
              {
                Icon: Star,
                title: 'Urban Pest Specialists',
                desc: 'Dense housing, shared plumbing, high tenant turnover — we\'ve seen every challenge New Brunswick has.',
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="text-center bg-lightgray rounded-xl p-6">
                <div className="flex justify-center mb-3">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-dark text-center mb-8">Pest Control FAQ — New Brunswick, NJ</h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby towns */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-xl font-bold text-dark text-center mb-5">Also Serving Nearby Communities</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {['Highland Park', 'Piscataway', 'Edison', 'Metuchen', 'Perth Amboy', 'Woodbridge', 'South Brunswick', 'North Brunswick'].map(town => (
              <Link
                key={town}
                href={`/${town.toLowerCase().replace(/ /g, '-')}`}
                className="bg-white border border-gray-200 text-dark text-sm px-3 py-2 rounded hover:bg-navy hover:text-white hover:border-navy transition-colors"
              >
                {town}
              </Link>
            ))}
            <Link href="/locations" className="bg-primary text-white text-sm px-3 py-2 rounded hover:bg-ctahover transition-colors">
              All 25 Towns →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a Free Quote in New Brunswick</h2>
          <p className="text-red-100 text-lg mb-8">Same-day service available. Licensed, insured, and local to Middlesex County.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded font-bold hover:bg-gray-100 transition-colors">
              Book Online
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
