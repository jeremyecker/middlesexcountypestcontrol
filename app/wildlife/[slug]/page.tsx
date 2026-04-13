import type { Metadata } from 'next';
import { getOpenGraph } from '@/lib/og';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { wildlifeServices, PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

const wildlifeDetails: Record<string, {
  heroDesc: string;
  intro: string;
  signs: string[];
  process: string[];
  faqs: { q: string; a: string }[];
}> = {
  'bird-control': {
    heroDesc: 'Professional bird deterrent and exclusion services for Middlesex County commercial and residential properties.',
    intro: 'Birds — primarily European starlings, house sparrows, and pigeons — create significant problems for commercial buildings, industrial facilities, and homes throughout Middlesex County. Nesting in dryer vents creates fire hazards. Bird feces is corrosive, creates slip hazards, and poses health risks. Large roosting flocks on commercial buildings damage roofing materials and create liability. Middlesex County Pest Control provides licensed bird control services using deterrent, exclusion, and removal methods.',
    signs: [
      'Bird nests in vents, soffits, or equipment',
      'Feces accumulation on building surfaces, signage, or vehicles',
      'Constant bird noise from roosting flocks',
      'Blocked dryer or HVAC vents from nesting material',
      'Bird activity on rooftop HVAC equipment',
    ],
    process: [
      'Property assessment to identify species, nesting sites, and roosting areas',
      'Nest removal (when legally permissible per NJ and federal migratory bird laws)',
      'Installation of physical deterrents: spikes, wire systems, netting',
      'Vent covers and exclusion products',
      'Fecal remediation recommendations',
    ],
    faqs: [
      { q: 'Are bird nests protected by law?', a: 'Active nests of migratory birds are protected under the federal Migratory Bird Treaty Act. Many nests can only be removed after eggs have hatched and young birds have left. Our specialists ensure all work is legally compliant.' },
      { q: 'What bird species cause the most problems in Middlesex County?', a: 'European starlings, house sparrows, and pigeons are responsible for most structural and health issues. Canada geese create problems at commercial properties with parking lot ponds.' },
      { q: 'Can I remove a bird nest myself?', a: 'It depends on the species. Nests of invasive, non-native species (starlings, house sparrows, pigeons) are not federally protected. Native species nests are protected when active. Contact us before attempting removal.' },
    ],
  },
  'wildlife-removal': {
    heroDesc: 'Licensed humane wildlife removal services for Middlesex County homeowners and businesses.',
    intro: 'Middlesex County\'s suburban landscape, bordered by significant natural areas and waterways, creates regular wildlife intrusion problems throughout the county. From squirrels in Edison attics to raccoons in Old Bridge trash cans to groundhogs under Woodbridge decks, wildlife encounters are a predictable reality in Middlesex County. Middlesex County Pest Control provides licensed, humane wildlife removal and exclusion services throughout the county, following all NJ DEP regulations.',
    signs: [
      'Sounds of movement, scratching, or chewing in attic or walls',
      'Visible entry damage to roofline, soffit, or siding',
      'Droppings in attic or crawl space',
      'Disturbed trash cans or garden areas',
      'Burrows under deck, slab, or foundation',
    ],
    process: [
      'Full inspection to identify species, entry points, and extent of intrusion',
      'Humane live trapping per NJ DEP guidelines',
      'One-way exclusion devices for current entry points',
      'Entry point sealing after animals have vacated',
      'Cleanup and deodorization recommendations',
    ],
    faqs: [
      { q: 'Do you need a permit to remove wildlife in NJ?', a: 'Yes. NJ DEP requires proper licensing and permits for trapping and relocating most wildlife species. Our technicians are fully licensed for New Jersey wildlife removal.' },
      { q: 'What wildlife species do you remove?', a: 'We remove squirrels, raccoons, groundhogs, opossums, skunks, and other common Middlesex County wildlife. We do not remove protected species without appropriate permits.' },
      { q: 'How do I prevent wildlife from returning?', a: 'After removal, professional exclusion — sealing every potential entry point — is the only reliable prevention. We inspect and seal all viable entry points as part of our removal service.' },
    ],
  },
  'squirrel-removal': {
    heroDesc: 'Expert squirrel removal and attic exclusion services throughout Middlesex County, NJ.',
    intro: 'Gray squirrels are the most common attic intruder in Middlesex County. Driven by the need for warm, dry nesting sites, squirrels exploit any gap at the roofline — deteriorated fascia, open ridge vents, gaps at soffit corners, and damaged roof returns. Once inside, they build large nests of insulation and leaves, gnaw on structural wood and electrical wiring, and create pathways for additional entry. A squirrel intrusion should be addressed promptly before additional damage occurs. Middlesex County Pest Control removes squirrels humanely and seals all entry points permanently.',
    signs: [
      'Scratching, running, or rolling sounds in the attic, especially at dawn and dusk',
      'Gnaw damage around roofline openings or at fascia boards',
      'Squirrel activity on your roof or near entry points',
      'Insulation disturbance or nest material visible in attic',
      'Entry holes chewed at roofline',
    ],
    process: [
      'Full exterior inspection to identify all entry points',
      'Installation of one-way exclusion devices at primary entry',
      'All secondary entry points sealed professionally',
      'Squirrels exit through one-way device and cannot re-enter',
      'Final sealing of primary entry after vacating is confirmed',
    ],
    faqs: [
      { q: 'Can squirrels damage my home?', a: 'Yes. Squirrels gnaw on structural wood, chew electrical wiring (a fire hazard), and destroy insulation. A single squirrel can cause thousands of dollars in attic damage.' },
      { q: 'When do squirrels have babies?', a: 'Gray squirrels have two litters per year — spring (February-March) and summer (June-July). Exclusion work should avoid trapping a mother with juveniles.' },
      { q: 'How do squirrels get into my attic?', a: 'Common entry points include ridge vents, soffit corners, deteriorated fascia, and gaps at roof returns. Our inspection identifies every entry point.' },
      { q: 'Will squirrels come back after removal?', a: 'New squirrels can attempt entry if entry points are not sealed. Professional exclusion sealing prevents re-entry by new animals.' },
    ],
  },
  'raccoon-removal': {
    heroDesc: 'Humane raccoon removal and exclusion services for Middlesex County homes and businesses.',
    intro: 'Raccoons are intelligent, strong, and adaptable wildlife that create some of the most serious intrusion problems for Middlesex County homeowners. A female raccoon seeking a den site in spring can tear off plywood soffit panels, remove unsecured power vent covers, and force open deteriorated roof areas with her hands. Once established in an attic with juveniles, a raccoon family is difficult and potentially dangerous to remove without professional intervention. Middlesex County Pest Control provides expert raccoon removal using humane methods compliant with NJ DEP regulations.',
    signs: [
      'Heavy thumping or shuffling sounds in the attic',
      'Visible damage to soffit, fascia, or roof vents',
      'Raccoon sightings on the roof or near entry points',
      'Strong odor from attic (fecal accumulation)',
      'Chimney entry (raccoons use uncapped chimneys as dens)',
    ],
    process: [
      'Inspection to identify entry points, denning areas, and presence of juveniles',
      'Humane exclusion or trapping approach based on situation',
      'Removal of raccoon family per NJ DEP guidelines',
      'All entry points sealed with professional materials',
      'Attic restoration and sanitation recommendations',
    ],
    faqs: [
      { q: 'Are raccoons dangerous?', a: 'Raccoons can be aggressive when cornered or protecting young. They can carry rabies and their feces can harbor Baylisascaris (raccoon roundworm), which is a serious health risk. Professional removal is strongly recommended.' },
      { q: 'How do I get a raccoon out of my chimney?', a: 'Do not light a fire — this can kill juveniles that cannot escape. Call a professional who can safely evict the raccoon and install a chimney cap.' },
      { q: 'How much damage can raccoons do?', a: 'Raccoons can cause thousands of dollars in attic damage — crushing insulation, contaminating with feces, and creating water entry points. Prompt professional removal limits damage.' },
      { q: 'Can I relocate a raccoon myself?', a: 'NJ DEP requires proper licensing for raccoon trapping and relocation. Unlicensed wildlife trapping carries significant fines.' },
    ],
  },
};

export async function generateStaticParams() {
  return wildlifeServices.map(service => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = wildlifeServices.find(s => s.slug === params.slug);
  if (!service) return {};

  return {
    title: `${service.title} in Middlesex County, NJ`,
    description: `Professional ${service.title.toLowerCase()} in Middlesex County, NJ. Licensed and insured. Call ${PHONE} for same-day service.`,
    alternates: { canonical: `${DOMAIN}/wildlife/${service.slug}` },
    openGraph: getOpenGraph(`/wildlife/${service.slug}`),
  };
}

export default function WildlifeServicePage({ params }: { params: { slug: string } }) {
  const service = wildlifeServices.find(s => s.slug === params.slug);
  if (!service) notFound();

  const details = wildlifeDetails[service.slug];
  if (!details) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: details.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-dark text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/wildlife" className="hover:text-white">Wildlife</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-6xl">🦝</span>
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

              <h3 className="text-2xl font-bold text-dark mb-4">Warning Signs</h3>
              <ul className="flex flex-col gap-3 mb-8">
                {details.signs.map(sign => (
                  <li key={sign} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-dark mb-4">Our Removal Process</h3>
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
                <h3 className="text-xl font-bold mb-4">Get a Free Inspection</h3>
                <p className="text-blue-100 text-sm mb-6">Serving all of Middlesex County, NJ.</p>
                <Link href="/contact" className="block bg-primary text-white text-center px-6 py-3 rounded font-bold hover:bg-ctahover transition-colors mb-3">
                  Book Now
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
    </>
  );
}
