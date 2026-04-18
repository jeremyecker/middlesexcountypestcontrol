import type { Metadata } from 'next';
import { getOpenGraph } from '@/lib/og';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PHONE, PHONE_RAW, SITE_NAME, DOMAIN, services, towns } from '@/lib/data';
import PhoneLink from '@/components/PhoneLink';

export async function generateStaticParams() {
  const params: { slug: string; town: string }[] = [];
  for (const service of services) {
    for (const town of towns) {
      params.push({ slug: service.slug, town: town.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; town: string };
}): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);
  const town = towns.find(t => t.slug === params.town);
  if (!service || !town) return {};
  return {
    title: `${service.title} in ${town.name} NJ | Middlesex County Pest Control`,
    description: `Professional ${service.title.toLowerCase()} in ${town.name}, NJ. Licensed & insured. Same-day service available throughout Middlesex County since 2018. Call ${PHONE}.`,
    alternates: { canonical: `${DOMAIN}/services/${params.slug}/${params.town}` },
    openGraph: getOpenGraph(`/services/${params.slug}/${params.town}`),
  };
}

const serviceDetails: Record<string, { bullets: string[]; bodyPara: string }> = {
  'bed-bugs': {
    bullets: [
      'Thorough inspection of mattress, box spring, furniture & wall voids',
      'Heat treatment option — kills all life stages in one visit',
      'Professional chemical treatment with IGR for lasting results',
      'Pre-treatment checklist and follow-up service included',
    ],
    bodyPara: 'Bed bugs are among the most stressful pest infestations to deal with — and they require professional intervention to eliminate completely. Over-the-counter products cannot reach eggs hidden in mattress seams, box spring interiors, and wall voids. Our licensed technicians use heat and professional-grade chemical treatments proven to eliminate all life stages.',
  },
  'rodents': {
    bullets: [
      'Full inspection to identify all entry points and nesting areas',
      'Exterior bait stations and interior snap trap program',
      'Exclusion work to seal entry points permanently',
      'Follow-up visits to confirm complete elimination',
    ],
    bodyPara: 'Mice and rats are more than a nuisance — they chew wiring (a fire hazard), contaminate food, and carry pathogens. Effective rodent control requires eliminating the existing population AND sealing entry points to prevent re-infestation. Our three-phase approach covers all three fronts.',
  },
  'cockroaches': {
    bullets: [
      'Species identification — German, American, Oriental, or Brown-Banded',
      'Professional gel bait in harborage areas for colony-wide elimination',
      'Insect growth regulator (IGR) to break the breeding cycle',
      'Crack and crevice residual treatment',
    ],
    bodyPara: 'German cockroaches are the dominant indoor species in NJ — fast-reproducing and increasingly resistant to common insecticides. Our protocol uses professional gel bait combined with IGR to eliminate the colony rather than just the visible bugs.',
  },
  'ants': {
    bullets: [
      'Species identification (carpenter, odorous house, pavement, pharaoh)',
      'Targeted bait treatments carried back to eliminate the colony',
      'Exterior perimeter treatment to block entry points',
      'Carpenter ant moisture assessment included',
    ],
    bodyPara: 'The right treatment for ants depends entirely on the species. Spraying visible ants typically scatters the colony and makes the problem worse. We identify the species first, then apply the appropriate bait and perimeter treatment to reach and eliminate the source colony.',
  },
  'termites': {
    bullets: [
      'Full termite inspection with probing and moisture assessment',
      'Liquid termiticide treatment — 5+ years protection',
      'Bait system option for non-invasive monitoring',
      'WDI report available for real estate transactions',
    ],
    bodyPara: 'Eastern subterranean termites cause billions in structural damage annually across NJ. They work silently for years before visible damage appears — which is why annual inspections and proactive treatment are essential for Middlesex County homeowners.',
  },
  'mosquitoes': {
    bullets: [
      'Barrier spray treatment targeting vegetation harborage areas',
      'Larvicide treatment for standing water sources',
      'Monthly program May through October for continuous control',
      'One-time event treatments available',
    ],
    bodyPara: 'Middlesex County\'s retention ponds, suburban landscaping, and Raritan River tributaries create serious mosquito pressure. Our seasonal barrier program consistently achieves 80–90% reduction in yard mosquito activity — letting you actually use your outdoor space.',
  },
  'wasps': {
    bullets: [
      'Species identification — yellow jackets, paper wasps, hornets',
      'Professional treatment of nests including wall void infestations',
      'Same-day service available for active nest emergencies',
      'Entry point sealing to prevent new nests in same location',
    ],
    bodyPara: 'Wasp nest removal is dangerous without proper protective equipment and professional-grade products. Yellow jacket nests can contain thousands of workers that respond instantly to disturbance. We handle all nest types safely, including underground yellow jacket nests and wall void infestations.',
  },
  'ticks': {
    bullets: [
      'Targeted spray of tick harborage zones (wooded edges, ornamental beds)',
      'Granular treatment of leaf litter and ground cover areas',
      'Seasonal program April through October',
      'Reduces property tick populations by 80–90% in treated areas',
    ],
    bodyPara: 'New Jersey is one of the highest-risk states for Lyme disease in the country. Middlesex County\'s parks, wooded lot edges, and suburban green spaces harbor significant deer tick populations. Professional yard treatment targeting the lawn-to-woods transition zone dramatically reduces your family\'s tick exposure risk.',
  },
  'fleas': {
    bullets: [
      'Full inspection to identify source and extent of infestation',
      'Professional residual treatment of all floor surfaces and furniture',
      'IGR application to break the flea breeding cycle',
      'Coordinated pet treatment guidance included',
    ],
    bodyPara: 'Adult fleas are only 5% of the total infestation — the remaining 95% are eggs, larvae, and pupae in carpet, furniture, and bedding. Over-the-counter products cannot break the life cycle. Our professional treatment plus IGR application eliminates the entire infestation, not just the visible adults.',
  },
};

const townServiceSupplement: Record<string, Record<string, string>> = {
  'metuchen': {
    'termites': `Metuchen's historic Victorian-era homes — many built between the 1880s and 1920s — represent some of the highest-risk structures for eastern subterranean termite damage in Middlesex County. These century-old wood-frame buildings frequently have original untreated lumber, direct wood-to-soil contact at aging foundations, and moisture conditions from older plumbing that termites exploit. The National Association of Realtors consistently flags pre-war Metuchen housing as requiring termite inspection before any real estate transaction. Most NJ mortgage lenders require a WDI (Wood-Destroying Insect) report as a condition of sale — our NJ-licensed inspectors provide same-day reports for Metuchen buyers, sellers, and real estate professionals.`,
  },
  'helmetta': {
    'bed-bugs': `Helmetta's residential housing stock, combined with proximity to Jamesburg and Monroe, creates bed bug transmission risk through neighbor-to-neighbor and shared-laundry-facility spread common in smaller boroughs. Professional treatment is the only effective solution — over-the-counter sprays push infestations deeper into walls and furniture without eliminating eggs.`,
  },
  'carteret': {
    'rodents': `Carteret's industrial waterfront along the Raritan Bay and Arthur Kill creates significant Norway rat pressure. Proximity to port operations, warehousing, and the former industrial corridor means rat populations are both large and established. Professional exclusion work — sealing entry points in addition to trapping — is essential for lasting control in this environment.`,
  },
};


export default function ServiceTownPage({
  params,
}: {
  params: { slug: string; town: string };
}) {
  const service = services.find(s => s.slug === params.slug);
  const town = towns.find(t => t.slug === params.town);
  if (!service || !town) notFound();

  const details = serviceDetails[params.slug] ?? {
    bullets: ['Licensed NJ pest control technicians', 'EPA-registered professional products', 'Same-day service available', 'Follow-up visits as needed'],
    bodyPara: `Our ${service.title.toLowerCase()} program for ${town.name} homeowners and businesses is performed by NJ DEP licensed technicians using professional-grade products.`,
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in ${town.name}, NJ`,
    description: `Professional ${service.title.toLowerCase()} in ${town.name}, NJ by ${SITE_NAME}.`,
    provider: { '@type': 'LocalBusiness', name: SITE_NAME, url: DOMAIN, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&q=80', telephone: '(732) 856-5142', address: { '@type': 'PostalAddress', addressRegion: 'NJ', addressCountry: 'US' } },
    areaServed: { '@type': 'City', name: `${town.name}, NJ` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${DOMAIN}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${DOMAIN}/services/${params.slug}` },
      { '@type': 'ListItem', position: 4, name: town.name, item: `${DOMAIN}/services/${params.slug}/${params.town}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-navy text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <Link href={`/services/${params.slug}`} className="hover:text-white">{service.title}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{town.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {service.title} in {town.name}, NJ
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Licensed pest control professionals serving {town.name} and all of Middlesex County since 2018.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark mb-4">
                {service.title} for {town.name} Residents
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">{details.bodyPara}</p>
              <p className="text-gray-700 leading-relaxed mb-8">
                {town.description} Our {service.title.toLowerCase()} programs are customized for the specific pest pressures and property types in {town.name} — from single-family homes and condominiums to commercial properties and multi-family buildings.
              </p>
              {townServiceSupplement[params.town]?.[params.slug] && (
                <p className="text-gray-700 leading-relaxed mb-8">
                  {townServiceSupplement[params.town][params.slug]}
                </p>
              )}

              <h3 className="text-xl font-bold text-dark mb-4">What Our Service Includes</h3>
              <ul className="flex flex-col gap-3 mb-10">
                {details.bullets.map(bullet => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-lightgray rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark mb-3">Serving All of {town.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Middlesex County Pest Control provides {service.title.toLowerCase()} throughout {town.name} and every municipality in Middlesex County. Same-day and next-day appointments available. Call {PHONE} or book online.
                </p>
              </div>
            </div>

            <aside>
              <div className="bg-navy rounded-xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-blue-200 text-sm mb-1">{town.name}, NJ</p>
                <p className="text-gray-300 text-sm mb-5">Same-day service available throughout Middlesex County.</p>
                <Link
                  href="/contact"
                  className="block bg-primary text-white text-center px-6 py-3 rounded font-bold hover:bg-ctahover transition-colors mb-3"
                >
                  Book Now
                </Link>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="block border-2 border-white text-white text-center px-6 py-3 rounded font-bold hover:bg-navyhover transition-colors"
                >
                  {PHONE}
                </a>
                <div className="mt-6 pt-6 border-t border-navy-light">
                  <p className="text-gray-300 text-xs mb-3">Other services in {town.name}:</p>
                  <div className="flex flex-col gap-1">
                    {services.filter(s => s.slug !== params.slug).slice(0, 4).map(s => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}/${params.town}`}
                        className="text-blue-200 text-xs hover:text-white flex items-center gap-1"
                      >
                        <ArrowRight size={10} /> {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need {service.title} in {town.name}?
          </h2>
          <p className="text-gray-200 mb-8 max-w-xl mx-auto">
            Contact Middlesex County Pest Control for fast, professional service throughout {town.name} and all of Middlesex County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-ctahover transition-colors">
              Book Now
            </Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-navyhover transition-colors">
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
