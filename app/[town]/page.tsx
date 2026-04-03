import type { Metadata } from 'next';
import { getOpenGraph } from '@/lib/og';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { towns, services, PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

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

const townIntros: Record<string, string> = {
  'carteret': 'Carteret is an industrial borough on the Raritan Bay waterfront, home to major port and refinery operations that create significant pest pressure from rodents, cockroaches, and waterfront insects. Middlesex County Pest Control provides targeted residential and commercial pest management throughout Carteret, addressing the unique challenges of this densely developed, industrially influenced community.',
  'cranbury': 'Cranbury is one of Middlesex County\'s most historic and picturesque townships, with preserved colonial architecture, wooded lots, and agricultural land in its southern section. This rural-suburban character brings tick, wildlife, and rodent pressures that Middlesex County Pest Control is well-equipped to handle. We protect Cranbury homes from the full range of seasonal pests common to New Jersey\'s wooded communities.',
  'dunellen': 'Dunellen is a compact residential borough in the heart of Middlesex County, with established neighborhoods, tree-lined streets, and a classic small-borough character. Middlesex County Pest Control provides expert pest management for Dunellen homeowners dealing with ants, rodents, bed bugs, and the wide range of insects that affect central New Jersey communities.',
  'east-brunswick': 'East Brunswick is one of Middlesex County\'s most established suburban townships, with diverse neighborhoods, top-rated schools, and a large residential base that creates consistent pest pressure across all property types. Middlesex County Pest Control provides comprehensive residential and commercial pest services throughout East Brunswick, from the Route 18 corridor to its quieter interior neighborhoods.',
  'edison': 'Edison is the largest and most diverse community in Middlesex County, a sprawling township of over 100,000 residents with a wide mix of housing types, commercial corridors, and industrial parks. The sheer scale and density of Edison — from the Oak Tree Road corridor to the Raritan Center business park — creates pest challenges at every level. Middlesex County Pest Control covers every neighborhood in Edison with expert service.',
  'helmetta': 'Helmetta is one of Middlesex County\'s smallest boroughs, a quiet community near Jamesburg with a close-knit residential character. Despite its size, Helmetta homeowners face the full range of New Jersey pest pressures including rodents, ants, and seasonal insects. Middlesex County Pest Control provides the same expert, responsive service to Helmetta residents as to the county\'s largest communities.',
  'highland-park': 'Highland Park is an urban borough directly across the Raritan River from New Brunswick, with dense residential blocks, historic housing stock, and a close proximity to Rutgers University. The older housing in Highland Park creates significant entry opportunities for rodents and cockroaches, and the borough\'s density creates conditions favorable to bed bug spread. Middlesex County Pest Control is experienced in the pest challenges specific to Highland Park.',
  'jamesburg': 'Jamesburg is a small historic borough in central Middlesex County with a traditional downtown and residential neighborhoods that have served the community for generations. Older housing stock in Jamesburg creates common pest entry points for rodents and insects. Middlesex County Pest Control provides thorough inspection and targeted treatment for every pest challenge Jamesburg homeowners face.',
  'middlesex': 'The Borough of Middlesex sits at the geographic center of Middlesex County, a well-established residential community with a mix of older and newer housing. Middlesex County Pest Control serves this central borough with the full range of pest management services — from rodent control to bed bug treatment to seasonal mosquito programs — backed by our county-wide expertise since 2018.',
  'metuchen': 'Metuchen is a historic borough in central Middlesex County known for its well-preserved Victorian and Edwardian architecture, walkable downtown, and strong community character. The older housing stock — much of it from the late 19th and early 20th centuries — creates elevated risk for rodents, carpenter ants, and wood-damaging insects including termites. Middlesex County Pest Control provides expert pest management throughout Metuchen, protecting these historic homes and businesses with thorough, locally-knowledgeable service.',
  'milltown': 'Milltown is a small borough situated along the South River in eastern Middlesex County. The proximity to the South River creates moisture-related pest pressure including moisture-seeking insects and rodents that follow waterways. Middlesex County Pest Control understands the specific pest challenges of riverside communities and provides targeted solutions for Milltown homeowners and businesses.',
  'monroe': 'Monroe Township is one of Middlesex County\'s largest and fastest-growing communities, with a mix of active adult retirement communities, new development neighborhoods, and substantial green space in its southern reaches. Middlesex County Pest Control serves all of Monroe Township\'s diverse housing types, from the Concordia retirement community to newer residential developments, with expert pest management across all seasons.',
  'new-brunswick': 'New Brunswick is the county seat of Middlesex County and the home of Rutgers University — a dense, urban city with high-rise apartments, historic row houses, student housing, and a major hospital corridor along French Street. The combination of urban density, transient student population, and older housing stock makes New Brunswick one of Middlesex County\'s most challenging environments for bed bugs, cockroaches, and rodents. Middlesex County Pest Control provides expert, urban-focused pest management throughout New Brunswick.',
  'north-brunswick': 'North Brunswick is a busy suburban township along the Route 1 corridor in northern Middlesex County, with large retail developments, office parks, and established residential neighborhoods. The mix of commercial and residential density creates diverse pest pressures throughout the township. Middlesex County Pest Control covers all of North Brunswick with comprehensive residential and commercial pest management services.',
  'old-bridge': 'Old Bridge Township is one of Middlesex County\'s largest communities, a sprawling suburban township with diverse neighborhoods ranging from established housing along Route 9 to newer developments near the Raritan Bay waterfront. Middlesex County Pest Control has deep experience serving Old Bridge\'s full range of residential and commercial properties with expert pest control backed by local knowledge of this large township.',
  'perth-amboy': 'Perth Amboy is a densely populated waterfront city on Raritan Bay with a rich history, dense urban neighborhoods, and one of the oldest downtown districts in New Jersey. The city\'s density, older housing stock, and waterfront location create significant rodent, cockroach, and bed bug pressure. Middlesex County Pest Control provides expert, urban-grade pest management throughout Perth Amboy for both residential and commercial properties.',
  'piscataway': 'Piscataway Township is a major suburban community hosting the Rutgers University Busch and Livingston campuses, extensive corporate facilities along Route 1, and substantial parkland including the Dismal Swamp area. The combination of green space, wetlands, and dense residential development creates significant mosquito, tick, and wildlife pressure alongside the typical suburban pest challenges. Middlesex County Pest Control is the trusted choice for Piscataway homeowners and businesses.',
  'plainsboro': 'Plainsboro Township is an affluent community near Princeton, home to major pharmaceutical corporate campuses and executive residential neighborhoods. The township\'s well-maintained landscaping and mature trees can harbor ticks and mosquitoes, while its higher-value housing makes quality pest management especially important. Middlesex County Pest Control provides expert service for Plainsboro\'s residential and commercial properties.',
  'sayreville': 'Sayreville is a suburban borough situated near the Raritan River and Raritan Bay, with a mix of residential neighborhoods, industrial areas along the waterfront, and the now-redeveloped Raritan River waterfront. The waterfront character of Sayreville creates rodent and moisture-insect pressure in riverside areas, while the residential core faces the typical Middlesex County pest challenges. Middlesex County Pest Control serves all of Sayreville.',
  'south-amboy': 'South Amboy is a small city on the Raritan Bay waterfront with a dense residential core and a waterfront location that creates unique pest challenges including coastal rodent activity and moisture-seeking insects. Middlesex County Pest Control provides expert pest management for South Amboy homeowners and businesses, bringing county-wide expertise to this waterfront community.',
  'south-brunswick': 'South Brunswick is a large suburban township located between New Brunswick and Princeton, home to significant residential development and a growing commercial base along Route 1. The township\'s size and diversity of housing types bring a wide range of pest challenges that Middlesex County Pest Control handles with expert, locally-knowledgeable service.',
  'south-plainfield': 'South Plainfield is an industrial-residential borough along the Route 287 corridor, with a mix of warehousing, manufacturing, and established residential neighborhoods. The proximity to major industrial operations can bring rodent pressure into adjacent residential areas. Middlesex County Pest Control has experience managing pest challenges in mixed industrial-residential communities throughout Middlesex County.',
  'south-river': 'South River is a borough with a distinct waterfront character along the South River in eastern Middlesex County. Like other riverside communities, South River faces moisture-related pest pressure from the river corridor alongside the typical suburban pest challenges. Middlesex County Pest Control understands the specific needs of riverside communities and provides targeted pest management for South River homeowners.',
  'spotswood': 'Spotswood is a small suburban borough near Old Bridge in central Middlesex County with an established residential character and quiet neighborhood feel. Middlesex County Pest Control provides the full range of pest management services to Spotswood homeowners, from bed bug treatments to seasonal mosquito programs, with the same expert service delivered to every community in the county.',
  'woodbridge': 'Woodbridge Township is the second largest community in Middlesex County — a major suburban hub near Staten Island and the Arthur Kill waterway with massive residential diversity, major retail corridors including the Woodbridge Center mall, and significant industrial operations near the waterfront. The sheer scale and diversity of Woodbridge creates pest challenges at every level, and Middlesex County Pest Control is equipped to handle all of them.',
};

export async function generateStaticParams() {
  return towns.map(town => ({ town: town.slug }));
}

export async function generateMetadata({ params }: { params: { town: string } }): Promise<Metadata> {
  const town = towns.find(t => t.slug === params.town);
  if (!town) return {};

  return {
    title: `Pest Control in ${town.name}, NJ | Middlesex County`,
    description: `Expert pest control in ${town.name}, NJ. Bed bugs, rodents, termites, mosquitoes & more. Licensed & insured. Call ${PHONE} for same-day service`,
    alternates: { canonical: `${DOMAIN}/${town.slug}` },
    openGraph: getOpenGraph(`/${town.slug}`),
  };
}

export default function TownPage({ params }: { params: { town: string } }) {
  const town = towns.find(t => t.slug === params.town);
  if (!town) notFound();

  const intro = townIntros[town.slug] ?? `Middlesex County Pest Control provides expert pest management services throughout ${town.name}, NJ. Our licensed technicians are familiar with the specific pest challenges in this part of Middlesex County and deliver effective, targeted treatment for residential and commercial properties.`;

  const townFaqs = [
    {
      q: `What pests are most common in ${town.name}, NJ?`,
      a: `The most common pest issues in ${town.name} include ants, rodents (mice and rats), bed bugs, cockroaches, and mosquitoes. Termites are also a concern in older homes. Middlesex County Pest Control provides expert treatment for all of these pests throughout ${town.name}.`,
    },
    {
      q: `How much does pest control cost in ${town.name}?`,
      a: `Pest control costs in ${town.name} vary by pest type and infestation size. Most residential treatments range from $150–$400. We offer free estimates — call ${PHONE} or book online for an upfront quote.`,
    },
    {
      q: `How quickly can you reach ${town.name} for pest control?`,
      a: `We offer same-day and next-day service throughout ${town.name} and all 25 municipalities of Middlesex County. Call ${PHONE} for the fastest response.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: townFaqs.map(faq => ({
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
      { '@type': 'ListItem', position: 3, name: town.name, item: `${DOMAIN}/${town.slug}` },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    telephone: PHONE,
    url: `${DOMAIN}/${town.slug}`,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&q=80',
    description: `Pest control services in ${town.name}, NJ`,
    address: { '@type': 'PostalAddress', addressRegion: 'NJ', addressCountry: 'US' },
    areaServed: {
      '@type': 'City',
      name: `${town.name}, NJ`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
            <span className="text-white">{town.name}</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={18} className="text-red-400" />
            <span className="text-blue-200 text-sm">{town.county}, {town.state}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pest Control in {town.name}, NJ</h1>
          <p className="text-blue-100 text-xl max-w-2xl mb-8">
            Licensed and insured pest control services for {town.name} homeowners and businesses. Serving Middlesex County since 2018.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-ctahover transition-colors text-center">
              Book Now
            </Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-navyhover transition-colors text-center">
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Town Introduction */}
      <section className="section-light">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-dark mb-6">Pest Control Services in {town.name}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{intro}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Services Available in {town.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => {
              const emoji = serviceEmojiMap[service.slug] ?? '🐛';
              return (
                <div key={service.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="bg-navy flex items-center justify-center h-24">
                    <span className="text-5xl" role="img" aria-label={service.title}>{emoji}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-dark mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.shortDesc}</p>
                    <Link
                      href={`/services/${service.slug}/${town.slug}`}
                      className="text-primary font-semibold text-sm flex items-center gap-1"
                    >
                      Learn More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-light">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Why {town.name} Residents Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              `Local Middlesex County experts — we know ${town.name}`,
              'Same-day and next-day appointments available',
              'Licensed by NJ DEP — fully insured',
              'Honest, upfront pricing with no hidden fees',
              'Technicians who explain every treatment step',
              'Follow-up to confirm the problem is resolved',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 bg-lightgray p-4 rounded-lg">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-dark text-center mb-8">Pest Control FAQ — {town.name}, NJ</h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {townFaqs.map(faq => (
              <div key={faq.q} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Towns */}
      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-dark text-center mb-6">Also Serving Nearby Middlesex County Communities</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {towns
              .filter(t => t.slug !== town.slug)
              .slice(0, 12)
              .map(t => (
                <Link
                  key={t.slug}
                  href={`/${t.slug}`}
                  className="bg-white border border-gray-200 text-dark text-sm px-3 py-2 rounded hover:bg-navy hover:text-white hover:border-navy transition-colors"
                >
                  {t.name}
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
          <h2 className="text-3xl font-bold text-white mb-4">Get a Free Quote in {town.name}</h2>
          <p className="text-red-100 text-lg mb-8">Same-day service available. Call now or book online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded font-bold hover:bg-gray-100 transition-colors">
              Book Now
            </Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
