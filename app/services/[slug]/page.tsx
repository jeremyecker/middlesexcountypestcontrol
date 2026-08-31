import type { Metadata } from 'next';
import { getOpenGraph } from '@/lib/og';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { services, towns, PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

// Maps service slug → get-a-quote slug for internal linking
const SERVICE_TO_QUOTE_SLUG: Record<string, string> = {
  'bed-bugs': 'bed-bug-treatment',
  'rodents': 'rodent-control',
  'cockroaches': 'cockroach-exterminator',
  'ants': 'ant-exterminator',
  'termites': 'termite-treatment',
  'mosquitoes': 'mosquito-treatment',
  'wasps': 'wasp-hornet-removal',
};

const serviceDetails: Record<string, {
  heroDesc: string;
  intro: string;
  signs: string[];
  process: string[];
  faqs: { q: string; a: string }[];
}> = {
  'bed-bugs': {
    heroDesc: 'Professional bed bug extermination for Middlesex County homes and apartments.',
    intro: 'Bed bugs are one of the most disruptive pests Middlesex County homeowners can face. These blood-feeding insects are hitchhikers — they spread through luggage, used furniture, and multi-family housing. Once established, they are extremely difficult to eliminate without professional treatment. Middlesex County Pest Control uses proven heat and chemical treatment protocols to eliminate bed bug infestations completely.',
    signs: ['Small rust-colored stains on mattress seams and sheets', 'Tiny white eggs or shed skins in mattress folds', 'Waking up with itchy welts in a line or cluster', 'Sweet, musty odor in the bedroom', 'Live bugs in mattress seams, box spring corners, or behind headboards'],
    process: ['Thorough inspection of all sleeping areas and furniture', 'Identification of infestation scope and harborage sites', 'Treatment using heat, chemical, or combined methods', 'Post-treatment inspection at 2 weeks', 'Post-treatment follow-up inspection'],
    faqs: [
      { q: 'How long does bed bug treatment take?', a: 'Most bed bug treatments take 4–6 hours depending on the size of the infestation. Heat treatments may take a full day.' },
      { q: 'Do I need to leave my home during treatment?', a: 'Yes — you and your pets should be out of the home during treatment and for several hours after, depending on the method used.' },
      { q: 'How do I prepare for bed bug treatment?', a: 'We provide a detailed preparation checklist. Laundering and bagging clothing and bedding before treatment is typically required.' },
      { q: 'Will one treatment be enough?', a: 'In many cases, yes — especially with heat treatment. We offer follow-up inspections to confirm the infestation is resolved.' },
    ],
  },
  'rodents': {
    heroDesc: 'Expert mouse and rat control for Middlesex County homes and businesses.',
    intro: 'Rodents — including mice and rats — are a serious problem throughout Middlesex County. They enter homes through gaps as small as a quarter inch, contaminate food, damage wiring, and carry disease. Norway rats are especially problematic near the waterfront areas of Carteret, Perth Amboy, and Sayreville. Middlesex County Pest Control provides comprehensive rodent control including trapping, exclusion, and sanitation recommendations.',
    signs: ['Droppings along walls, in cabinets, or in food storage areas', 'Gnaw marks on food packaging, wood, or wiring', 'Nesting material (shredded paper, fabric) in hidden areas', 'Greasy rub marks along walls or baseboards', 'Scratching sounds in walls or ceiling at night'],
    process: ['Full inspection of interior and exterior entry points', 'Identification of species (mouse vs. rat)', 'Bait stations and/or snap traps placed strategically', 'Exclusion — sealing entry points with professional materials', 'Follow-up service to ensure complete elimination'],
    faqs: [
      { q: 'What is the difference between mouse control and rat control?', a: 'Rats and mice require different treatment approaches. Rats are more cautious and neophobic — they require different bait placement strategies than mice.' },
      { q: 'Should I use snap traps or bait?', a: 'We use the method appropriate for your specific situation. In homes with children or pets, we use tamper-resistant bait stations or snap traps in protected areas.' },
      { q: 'How do rodents get in?', a: 'Mice can enter through a gap the size of a dime. Common entry points include gaps around pipes, under doors, through foundation cracks, and around utility lines.' },
      { q: 'How long does rodent control take?', a: 'Initial results typically appear within 1–2 weeks. Complete elimination depends on the size of the infestation and the effectiveness of exclusion work.' },
    ],
  },
  'cockroaches': {
    heroDesc: 'Professional cockroach extermination for homes and businesses in Middlesex County, NJ.',
    intro: 'Cockroaches are among the most resilient pests in Middlesex County — and among the most important to eliminate quickly. German cockroaches infest kitchens and bathrooms in apartments and restaurants across New Brunswick, Edison, and Perth Amboy. American cockroaches favor basements and crawl spaces. Both species reproduce rapidly and can spread pathogens across your home or business. Middlesex County Pest Control uses professional gel baits, IGR, and targeted treatment to eliminate cockroach infestations.',
    signs: ['Droppings resembling black pepper or coffee grounds', 'A musty, oily odor in the kitchen or bathroom', 'Egg capsules (oothecae) behind appliances or in cabinets', 'Seeing roaches during the day — a sign of heavy infestation', 'Smear marks near water sources'],
    process: ['Full inspection including appliance undersides, cabinet interiors, and plumbing areas', 'Species identification (German, American, or Oriental)', 'Professional gel bait application and insect growth regulator (IGR)', 'Crack and crevice treatment', 'Follow-up service to confirm elimination'],
    faqs: [
      { q: 'Why do I keep getting cockroaches even after treating?', a: 'Re-infestation is common in multi-family buildings without treating the source. Professional programs address harborage points and include IGR to break the breeding cycle.' },
      { q: 'Are German cockroaches different from American cockroaches?', a: 'Yes. German cockroaches are small (about 1/2\") and primarily infest kitchens. American cockroaches are larger (up to 2\") and prefer basements and sewers.' },
      { q: 'How quickly does cockroach treatment work?', a: 'Gel bait typically shows results within 1–2 weeks. A follow-up service is usually recommended 2–4 weeks later.' },
    ],
  },
  'ants': {
    heroDesc: 'Expert ant extermination and prevention services in Middlesex County, NJ.',
    intro: 'Ants are the most common pest complaint across Middlesex County. Carpenter ants tunnel through wood and can cause structural damage. Pavement ants nest under sidewalks and driveways. Odorous house ants invade kitchens in large numbers. Identifying the species is critical to choosing the right treatment. Middlesex County Pest Control accurately identifies ant species and provides targeted treatment that addresses both the colony and the entry points.',
    signs: ['Trails of ants leading to kitchen or food sources', 'Sawdust-like frass near wood structures (carpenter ants)', 'Small sand mounds near pavement or foundation', 'Winged ants (swarmers) emerging indoors', 'Large black ants in bathroom or kitchen'],
    process: ['Inspection to identify ant species and entry points', 'Interior and exterior bait or spray treatment', 'Sealing key entry points', 'Treatment of exterior perimeter', 'Follow-up to confirm colony elimination'],
    faqs: [
      { q: 'Why are ants so hard to control with over-the-counter products?', a: 'Spray products kill worker ants on contact but do not reach the colony. Professional bait treatments are carried back to the colony and eliminate the source.' },
      { q: 'Are carpenter ants dangerous?', a: 'Carpenter ants do not eat wood but excavate it for nesting, causing structural damage over time. Large carpenter ant populations indoors should be treated promptly.' },
      { q: 'When is ant season in NJ?', a: 'Ants are most active in spring and summer, but year-round infestations are common in heated homes and commercial kitchens.' },
    ],
  },
  'termites': {
    heroDesc: 'Termite inspection and treatment for Middlesex County, NJ homes.',
    intro: 'Termites cause billions of dollars in structural damage to U.S. homes every year — and Middlesex County\'s older housing stock is particularly vulnerable. Eastern subterranean termites are the primary species in our area, building mud tubes from the soil to wood and silently consuming structural elements. Annual termite inspections are the single most important step Middlesex County homeowners can take to protect their investment. Middlesex County Pest Control provides professional termite inspections and treatment using liquid termiticides and bait systems.',
    signs: ['Mud tubes on foundation walls or crawl space piers', 'Hollow-sounding wood when tapped', 'Discarded wings near windows or entry points (after a swarm)', 'Bubbling or discolored paint on wood surfaces', 'Tight-fitting doors or windows (from wood distortion)'],
    process: ['Full termite inspection of all wood-soil contact points', 'Written inspection report with findings', 'Treatment recommendation: liquid termiticide, bait system, or combination', 'Installation of treatment (Termidor or equivalent liquid, or bait stations)', 'Annual monitoring as needed'],
    faqs: [
      { q: 'How do I know if I have termites or ants?', a: 'Termite swarmers have straight antennae, equal-length wings, and a thick waist. Ant swarmers have elbowed antennae, unequal wings, and a pinched waist.' },
      { q: 'How long does termite treatment last?', a: 'Liquid termiticide treatments typically provide protection for 5+ years. Bait systems require ongoing monitoring and bait replenishment.' },
      { q: 'Do I need a termite inspection to sell my home in NJ?', a: 'Most mortgage lenders require a termite inspection (WDI report) as part of the home sale process in New Jersey.' },
    ],
  },
  'mosquitoes': {
    heroDesc: 'Professional mosquito control programs for Middlesex County backyards and properties.',
    intro: 'Mosquitoes are a major quality-of-life pest throughout Middlesex County, particularly near the county\'s numerous retention ponds, wetlands, and waterways. Edison and Piscataway\'s suburban development has created extensive standing-water habitat that supports large mosquito populations. Beyond the nuisance, NJ mosquitoes carry West Nile virus, and tick-borne disease risks are real. Middlesex County Pest Control provides seasonal mosquito control programs that dramatically reduce backyard mosquito populations.',
    signs: ['Being bitten frequently in your own backyard', 'Significant mosquito activity near water features, gutters, or low areas', 'Standing water in plant saucers, bird baths, or clogged gutters', 'Swarms near wooded edges or dense vegetation'],
    process: ['Property assessment to identify breeding and resting sites', 'Treatment of vegetation and harborage areas with backpack mist blower', 'Larvicide application to standing water sources where appropriate', 'Monthly treatments throughout mosquito season (May–October)', 'Recommendations for source reduction on your property'],
    faqs: [
      { q: 'How many treatments do I need per season?', a: 'Monthly treatments throughout the mosquito season (typically May through October) provide continuous control. Many clients see 80–90% reduction in mosquito activity.' },
      { q: 'Is mosquito treatment family-friendly?', a: 'Yes — our professional mosquito treatments use EPA-registered products and are applied by licensed technicians. Treated areas are ready for re-entry within 30 minutes when dry.' },
      { q: 'Can you treat a specific event like a backyard party?', a: 'Yes — we offer one-time event treatments in addition to seasonal programs.' },
    ],
  },
  'wasps': {
    heroDesc: 'Wasp nest removal and bee control in Middlesex County, NJ.',
    intro: 'Yellow jackets, paper wasps, and bald-faced hornets build nests throughout Middlesex County — under eaves, in shrubs, underground, and in wall voids. Disturbing a nest without professional protection is dangerous and often ineffective without proper treatment of the nest itself. Middlesex County Pest Control provides professional wasp and bee nest identification and removal, treating nests fully and removing them when conditions allow.',
    signs: ['Visible nest under eaves, in shrubs, or on structures', 'Wasps entering and exiting a hole in the ground', 'Increased wasp activity near a specific area', 'Wasps entering through a gap in siding or soffit'],
    process: ['Identification of species and nest location', 'Treatment of nest with professional-grade insecticide', 'Removal of nest structure when conditions allow', 'Sealing entry points where appropriate', 'Same-day or next-day service available'],
    faqs: [
      { q: 'Should I remove a wasp nest myself?', a: 'DIY removal without proper equipment and product is dangerous, especially for yellow jackets and hornets. A single nest can contain thousands of stinging insects.' },
      { q: 'What is the difference between yellow jackets and paper wasps?', a: 'Yellow jackets are more aggressive and often nest underground or in wall voids. Paper wasps build open umbrella-shaped nests under eaves and are less aggressive.' },
      { q: 'When is the best time to treat a wasp nest?', a: 'Evening treatment when wasps are less active is most effective. Our technicians use professional equipment and protective gear regardless of time of day.' },
    ],
  },
  'ticks': {
    heroDesc: 'Tick control programs for Middlesex County, NJ homes and properties.',
    intro: 'Middlesex County\'s abundant parks, wooded edges, and suburban green spaces harbor significant tick populations. Deer ticks (black-legged ticks) are the primary vector for Lyme disease in New Jersey — and NJ has consistently ranked among the top states for Lyme disease cases. Middlesex County Pest Control provides targeted tick control programs for residential properties, treating tick harborage areas along the wooded perimeter and in ornamental beds.',
    signs: ['Finding ticks on yourself, family members, or pets after being outdoors', 'Property bordered by woods, tall grass, or brush', 'Deer activity near your property', 'Tick bites resulting in a bullseye rash (seek medical attention immediately)'],
    process: ['Property assessment to identify tick harborage zones', 'Treatment of wooded edges, ornamental beds, and transition zones', 'Tick tubes or similar treatments in high-risk areas', 'Seasonal program (spring through fall) for maximum protection', 'Recommendations for landscape modifications to reduce tick habitat'],
    faqs: [
      { q: 'What tick species are found in Middlesex County?', a: 'The deer tick (Ixodes scapularis) is the primary Lyme disease vector. American dog ticks and lone star ticks are also present in New Jersey.' },
      { q: 'When is tick season in NJ?', a: 'Deer ticks are active year-round in NJ, with peak activity in spring and fall. American dog ticks peak in spring and summer.' },
      { q: 'How effective is yard tick treatment?', a: 'Professional tick treatments targeting wooded edges and harborage zones can reduce tick populations by 80–90% in treated areas.' },
    ],
  },
  'fleas': {
    heroDesc: 'Professional flea extermination for Middlesex County homes and apartments.',
    intro: 'Fleas are a common problem for Middlesex County pet owners — and even for homeowners who acquire them from wildlife activity. Fleas reproduce extremely rapidly; a small infestation can become a major problem within weeks. Effective flea control requires treating both the pet and the environment simultaneously. Middlesex County Pest Control provides professional interior flea treatments using insecticides and insect growth regulators (IGR) to break the flea life cycle.',
    signs: ['Pets scratching excessively and biting at their skin', 'Seeing small jumping insects on carpet or furniture', 'Small red bites on ankles or lower legs', '"Flea dirt" (tiny black specks) on pet bedding or carpet', 'Seeing fleas in areas where pets do not go (from wildlife)'],
    process: ['Interior inspection to identify flea activity zones', 'Pre-treatment preparation instructions provided', 'Treatment with residual insecticide and IGR', 'Pet must be treated simultaneously by owner/vet', 'Follow-up service to break the emerging-adult cycle'],
    faqs: [
      { q: 'Why do I have fleas if my pets are treated?', a: 'Flea pupae in carpet can remain dormant for months and emerge after treatment. Environmental treatment combined with pet treatment is essential for complete control.' },
      { q: 'Can I have fleas without pets?', a: 'Yes — fleas can be introduced by wildlife such as raccoons, opossums, or stray cats entering under a deck or into a crawl space.' },
      { q: 'How long after treatment until fleas are gone?', a: 'You may see flea activity for 2–3 weeks after treatment as pupae hatch. The IGR prevents new adults from reproducing.' },
    ],
  },
};

export async function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}

const seoTitles: Record<string, string> = {
  'bed-bugs': 'Bed Bug Exterminator Middlesex County NJ | Same-Day Treatment',
  'ants': 'Ant Exterminator Middlesex County NJ | Free Estimate',
  'rodents': 'Rodent Control Middlesex County NJ | Mice & Rat Removal',
  'termites': 'Termite Treatment Middlesex County NJ | Licensed Inspectors',
  'ticks': 'Tick Control Middlesex County NJ | Yard Spray Programs',
  'mosquitoes': 'Mosquito Control Middlesex County NJ | Seasonal Programs',
  'cockroaches': 'Cockroach Exterminator Middlesex County NJ | Same-Day Service',
  'wasps': 'Wasp & Hornet Removal Middlesex County NJ | Same-Day',
  'fleas': 'Flea Exterminator Middlesex County NJ | Home & Yard Treatment',
};

const seoDescriptions: Record<string, string> = {
  'bed-bugs': `Bed bugs in Middlesex County? Heat & chemical treatments eliminate infestations completely. Licensed & insured. Same-day service. Call ${PHONE}.`,
  'ants': `Carpenter ants, pavement ants & odorous house ants in Middlesex County? We eliminate the colony — not just workers. Free estimate. Call ${PHONE}.`,
  'rodents': `Mice or rats in your Middlesex County home? We inspect, trap, and seal all entry points to eliminate rodents for good. Same-day service. Call ${PHONE}.`,
  'termites': `Protect your Middlesex County home from termites. Licensed inspections, liquid & bait treatments, and WDI reports for real estate. Call ${PHONE}.`,
  'ticks': `Reduce tick populations in your Middlesex County yard by 80-90%. Seasonal programs protect your family from Lyme disease. Call ${PHONE}.`,
  'mosquitoes': `Take back your Middlesex County backyard. Monthly mosquito barrier spray programs May-October. 80-90% reduction. Call ${PHONE}.`,
  'cockroaches': `German or American cockroaches in your Middlesex County home? Professional gel bait and IGR eliminate the whole colony. Call ${PHONE}.`,
  'wasps': `Wasp or hornet nest on your Middlesex County property? We remove yellow jackets and hornets safely. Same-day service available. Call ${PHONE}.`,
  'fleas': `Flea infestation in your Middlesex County home? Professional treatment plus IGR breaks the flea life cycle completely. Call ${PHONE}.`,
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return {};

  const title = seoTitles[params.slug] ?? `${service.title} | Middlesex County, NJ`;
  const description = seoDescriptions[params.slug] ?? `Professional ${service.title.toLowerCase()} in Middlesex County, NJ. Licensed & insured. Call ${PHONE} for same-day service.`;

  return {
    title,
    description,
    alternates: { canonical: `${DOMAIN}/services/${service.slug}` },
    openGraph: getOpenGraph(`/services/${service.slug}`, title, description),
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) notFound();

  const details = serviceDetails[service.slug];
  if (!details) notFound();

  const serviceEmojiMap: Record<string, string> = {
    'bed-bugs': '🛏️', 'rodents': '🐀', 'cockroaches': '🪳', 'ants': '🐜',
    'termites': '🪵', 'mosquitoes': '🦟', 'wasps': '🐝', 'ticks': '🕷️', 'fleas': '🦗',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: details.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    url: `${DOMAIN}/services/${service.slug}`,
    description: details.heroDesc,
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      telephone: PHONE,
      url: DOMAIN,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&q=80',
      address: { '@type': 'PostalAddress', addressLocality: 'New Brunswick', addressRegion: 'NJ', addressCountry: 'US' },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Middlesex County, NJ',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${DOMAIN}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${DOMAIN}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-dark text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="flex items-center gap-6">
            <span className="text-6xl">{serviceEmojiMap[service.slug] ?? '🐛'}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">{service.title} in Middlesex County, NJ</h1>
              <p className="text-gray-300 text-xl">{details.heroDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-dark mb-6">{service.title} in Middlesex County</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">{details.intro}</p>

              <h3 className="text-2xl font-bold text-dark mb-4">Signs of {service.title}</h3>
              <ul className="flex flex-col gap-3 mb-8">
                {details.signs.map(sign => (
                  <li key={sign} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-dark mb-4">Our Treatment Process</h3>
              <ol className="flex flex-col gap-3 mb-8">
                {details.process.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="bg-primary text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <div className="bg-navy rounded-xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-4">Get a Free Estimate</h3>
                <p className="text-blue-100 text-sm mb-6">Same-day service available throughout Middlesex County, NJ.</p>
                <Link
                  href={SERVICE_TO_QUOTE_SLUG[service.slug] ? `/get-a-quote/${SERVICE_TO_QUOTE_SLUG[service.slug]}` : '/contact'}
                  className="block bg-primary text-white text-center px-6 py-3 rounded font-bold hover:bg-ctahover transition-colors mb-3"
                >
                  Get a Free Quote
                </Link>
                <a href={`tel:${PHONE_RAW}`} className="block border-2 border-white text-white text-center px-6 py-3 rounded font-bold hover:bg-navyhover transition-colors">
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-dark text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {details.faqs.map(faq => (
              <div key={faq.q} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-dark text-center mb-6">More Pest Control Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {services.filter(s => s.slug !== service.slug).map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 bg-lightgray border border-gray-200 px-4 py-2 rounded text-dark text-sm hover:bg-navy hover:text-white hover:border-navy transition-colors">
                <span>{serviceEmojiMap[s.slug]}</span>
                <span>{s.title}</span>
                <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-dark text-center mb-6">{service.title} by Town</h2>
          <p className="text-gray-600 text-center mb-6">Serving all 25 municipalities in Middlesex County, NJ.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {towns.map(t => (
              <Link key={t.slug} href={`/services/${service.slug}/${t.slug}`} className="bg-white border border-gray-200 text-dark text-sm px-3 py-2 rounded hover:bg-navy hover:text-white hover:border-navy transition-colors">
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
