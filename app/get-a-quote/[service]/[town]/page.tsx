import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import { PHONE, PHONE_RAW, DOMAIN } from '@/lib/data';

interface FAQ { q: string; a: string; }
interface ServiceConfig {
  label: string; h1: (town: string) => string; pricing: string; pricingNote: string;
  intro: (town: string) => string; faqs: (town: string) => FAQ[];
}

const GEO = 'Middlesex County, NJ';

const SERVICES_MAP: Record<string, ServiceConfig> = {
  'bed-bug-treatment': {
    label: 'Bed Bug Treatment',
    h1: (t) => `Free Bed Bug Treatment Quote in ${t}, ${GEO}`,
    pricing: '$1,200\u2013$4,500', pricingNote: 'heat or chemical treatment',
    intro: (t) => `Bed bugs are 100% treatable. Our licensed technicians serve ${t} with both heat and chemical treatment options, backed by a satisfaction guarantee.`,
    faqs: (t) => [
      { q: `How much does bed bug treatment cost in ${t}?`, a: `Bed bug treatment in Middlesex County runs $1,200\u2013$4,500 depending on home size and treatment method. We provide a free inspection and quote before any work begins.` },
      { q: 'Heat vs. chemical treatment?', a: 'Heat treatment kills all life stages in a single visit at 120\u00b0F+. Chemical treatment uses EPA-registered pesticides over 1\u20132 visits. We recommend the best fit after inspection.' },
      { q: 'Do you guarantee your bed bug treatments?', a: 'Yes \u2014 if bed bugs return within the warranty period, we come back at no additional charge.' },
      { q: 'Do you treat apartments and multi-unit buildings?', a: `Yes. We regularly treat apartments, condos, and multi-unit residential buildings throughout Middlesex County.` },
    ],
  },
  'ant-exterminator': {
    label: 'Ant Control',
    h1: (t) => `Free Ant Control Quote in ${t}, ${GEO}`,
    pricing: '$300\u2013$450', pricingNote: 'one-time or seasonal plan',
    intro: (t) => `Ants are one of the most common pest calls across Middlesex County each spring. Our licensed technicians serve ${t}, eliminating colonies at the source.`,
    faqs: (t) => [
      { q: `How much does ant control cost in ${t}?`, a: `Ant control in Middlesex County typically runs $300\u2013$450 for a one-time service. Seasonal prevention plans are also available.` },
      { q: 'Why do ants keep coming back?', a: 'Over-the-counter sprays only kill forager ants \u2014 they don\u2019t reach the colony. Our treatments target the source.' },
      { q: 'How long does ant treatment take?', a: 'Most treatments take 45\u201390 minutes, covering interior entry points and the full exterior perimeter.' },
      { q: 'Are your products safe for kids and pets?', a: 'We use EPA-registered products applied by licensed technicians. We\u2019ll advise on any precautions before and after treatment.' },
    ],
  },
  'rodent-control': {
    label: 'Rodent Control',
    h1: (t) => `Free Rodent Control Quote in ${t}, ${GEO}`,
    pricing: '$300\u2013$450', pricingNote: 'removal + exclusion included',
    intro: (t) => `Mice and rats are a persistent problem across Middlesex County. Our service for ${t} residents includes removal, exclusion, and follow-up to keep rodents out for good.`,
    faqs: (t) => [
      { q: `How much does rodent control cost in ${t}?`, a: `Rodent control in Middlesex County runs $300\u2013$450, including both removal and exclusion work.` },
      { q: 'Is exclusion included?', a: 'Yes \u2014 exclusion is always included. Trapping alone doesn\u2019t solve the problem long-term.' },
      { q: 'How do mice get inside?', a: 'Mice squeeze through gaps as small as a dime \u2014 around pipes, foundation cracks, dryer vents, and door gaps. Our exclusion service seals all of these.' },
      { q: 'How long does resolution take?', a: 'Most problems are resolved within 1\u20132 visits with traps, exclusion, and a follow-up confirmation.' },
    ],
  },
  'cockroach-exterminator': {
    label: 'Cockroach Exterminator',
    h1: (t) => `Free Cockroach Exterminator Quote in ${t}, ${GEO}`,
    pricing: '$300\u2013$450', pricingNote: 'one-time or ongoing plan',
    intro: (t) => `Cockroaches can establish quickly in Middlesex County homes \u2014 especially in ${t}. Our targeted treatments eliminate infestations and break the reproductive cycle.`,
    faqs: (t) => [
      { q: `How much does cockroach extermination cost in ${t}?`, a: `Cockroach extermination in Middlesex County runs $300\u2013$450 for a one-time treatment. Ongoing plans are available for recurring issues.` },
      { q: 'Why are cockroaches so hard to eliminate?', a: 'Cockroaches hide in walls, appliances, and drains. Our gel baits and growth regulators break the cycle where store-bought products fail.' },
      { q: 'How long does treatment take?', a: 'A standard treatment takes 1\u20132 hours, focusing on kitchen, bathroom, and utility areas.' },
      { q: 'Do I need to leave during treatment?', a: 'For most treatments, no. We\u2019ll advise you in advance if any precautions are needed.' },
    ],
  },
  'mosquito-treatment': {
    label: 'Mosquito Treatment',
    h1: (t) => `Free Mosquito Treatment Quote in ${t}, ${GEO}`,
    pricing: '$125\u2013$150/visit', pricingNote: 'seasonal program available',
    intro: (t) => `Middlesex County gets heavy mosquito pressure each summer. Our barrier treatments protect yards in ${t} all season long.`,
    faqs: (t) => [
      { q: `How much does mosquito treatment cost in ${t}?`, a: `Mosquito barrier treatments in Middlesex County run $125\u2013$150 per visit. Our seasonal program covers May through September.` },
      { q: 'How does barrier treatment work?', a: 'We apply a barrier spray to shrubs, trees, and grass where mosquitoes rest. Treatments stay effective for 3\u20134 weeks.' },
      { q: 'When should I start?', a: 'We recommend starting in late April or early May before mosquito season peaks.' },
      { q: 'Is it safe for kids and pets?', a: 'Yes. Keep people and pets off treated areas for 30\u201360 minutes while the treatment dries.' },
    ],
  },
  'wasp-hornet-removal': {
    label: 'Wasp & Hornet Removal',
    h1: (t) => `Free Wasp & Hornet Removal Quote in ${t}, ${GEO}`,
    pricing: '$300\u2013$450', pricingNote: 'nest removal included',
    intro: (t) => `Wasps and hornets build nests across Middlesex County each summer. Our technicians safely remove nests from homes in ${t} and prevent rebuilding.`,
    faqs: (t) => [
      { q: `How much does wasp and hornet removal cost in ${t}?`, a: `Wasp and hornet removal in Middlesex County runs $300\u2013$450, including nest removal.` },
      { q: 'Is it safe to remove a nest myself?', a: 'Disturbing an active nest without proper equipment can trigger a dangerous swarm. Let our technicians handle it safely.' },
      { q: 'Will wasps come back?', a: 'Treated nest sites are unattractive to new queens. Inspect your property each spring for early-season nests.' },
      { q: 'What stinging insects are common here?', a: 'Yellow jackets, bald-faced hornets, paper wasps, and European hornets are all common in Middlesex County.' },
    ],
  },
  'termite-treatment': {
    label: 'Termite Treatment',
    h1: (t) => `Free Termite Treatment Quote in ${t}, ${GEO}`,
    pricing: '$800\u2013$2,500', pricingNote: 'free inspection included',
    intro: (t) => `Termites are a serious risk in Middlesex County \u2014 especially in older wood-frame homes in ${t}. Our licensed technicians provide thorough inspections and proven treatments.`,
    faqs: (t) => [
      { q: `How much does termite treatment cost in ${t}?`, a: `Termite treatment in Middlesex County runs $800\u2013$2,500 depending on home size and infestation level. We include a free inspection before any quote.` },
      { q: 'What are signs of termites?', a: 'Mud tubes along foundation walls, hollow-sounding wood, discarded wings near windowsills, and frass resembling sawdust.' },
      { q: 'Liquid treatment vs. bait stations?', a: 'Liquid termiticide creates a chemical barrier around your foundation. Bait stations use slow-acting bait workers carry back to the colony. We recommend the best option for your home.' },
      { q: 'How long does treatment take?', a: 'Liquid treatments take 4\u20138 hours. Bait station installation takes 2\u20133 hours with monitoring every 3\u20136 months.' },
    ],
  },
};

const TOWN_NAMES: Record<string, string> = {
  'carteret': 'Carteret', 
  'cranbury': 'Cranbury', 
  'dunellen': 'Dunellen', 
  'east-brunswick': 'East Brunswick', 
  'edison': 'Edison', 
  'helmetta': 'Helmetta', 
  'highland-park': 'Highland Park', 
  'jamesburg': 'Jamesburg', 
  'metuchen': 'Metuchen', 
  'middlesex': 'Middlesex', 
  'milltown': 'Milltown', 
  'monroe': 'Monroe', 
  'new-brunswick': 'New Brunswick', 
  'north-brunswick': 'North Brunswick', 
  'old-bridge': 'Old Bridge', 
  'perth-amboy': 'Perth Amboy', 
  'piscataway': 'Piscataway', 
  'plainsboro': 'Plainsboro', 
  'sayreville': 'Sayreville', 
  'south-amboy': 'South Amboy', 
  'south-brunswick': 'South Brunswick', 
  'south-plainfield': 'South Plainfield', 
  'south-river': 'South River', 
  'spotswood': 'Spotswood', 
  'woodbridge': 'Woodbridge', 
};

function getTownName(slug: string): string {
  return TOWN_NAMES[slug] ??
    slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export function generateStaticParams() {
  return [
  {service:'bed-bug-treatment',town:'carteret'},
  {service:'ant-exterminator',town:'carteret'},
  {service:'rodent-control',town:'carteret'},
  {service:'cockroach-exterminator',town:'carteret'},
  {service:'mosquito-treatment',town:'carteret'},
  {service:'wasp-hornet-removal',town:'carteret'},
  {service:'termite-treatment',town:'carteret'},
  {service:'bed-bug-treatment',town:'cranbury'},
  {service:'ant-exterminator',town:'cranbury'},
  {service:'rodent-control',town:'cranbury'},
  {service:'cockroach-exterminator',town:'cranbury'},
  {service:'mosquito-treatment',town:'cranbury'},
  {service:'wasp-hornet-removal',town:'cranbury'},
  {service:'termite-treatment',town:'cranbury'},
  {service:'bed-bug-treatment',town:'dunellen'},
  {service:'ant-exterminator',town:'dunellen'},
  {service:'rodent-control',town:'dunellen'},
  {service:'cockroach-exterminator',town:'dunellen'},
  {service:'mosquito-treatment',town:'dunellen'},
  {service:'wasp-hornet-removal',town:'dunellen'},
  {service:'termite-treatment',town:'dunellen'},
  {service:'bed-bug-treatment',town:'east-brunswick'},
  {service:'ant-exterminator',town:'east-brunswick'},
  {service:'rodent-control',town:'east-brunswick'},
  {service:'cockroach-exterminator',town:'east-brunswick'},
  {service:'mosquito-treatment',town:'east-brunswick'},
  {service:'wasp-hornet-removal',town:'east-brunswick'},
  {service:'termite-treatment',town:'east-brunswick'},
  {service:'bed-bug-treatment',town:'edison'},
  {service:'ant-exterminator',town:'edison'},
  {service:'rodent-control',town:'edison'},
  {service:'cockroach-exterminator',town:'edison'},
  {service:'mosquito-treatment',town:'edison'},
  {service:'wasp-hornet-removal',town:'edison'},
  {service:'termite-treatment',town:'edison'},
  {service:'bed-bug-treatment',town:'helmetta'},
  {service:'ant-exterminator',town:'helmetta'},
  {service:'rodent-control',town:'helmetta'},
  {service:'cockroach-exterminator',town:'helmetta'},
  {service:'mosquito-treatment',town:'helmetta'},
  {service:'wasp-hornet-removal',town:'helmetta'},
  {service:'termite-treatment',town:'helmetta'},
  {service:'bed-bug-treatment',town:'highland-park'},
  {service:'ant-exterminator',town:'highland-park'},
  {service:'rodent-control',town:'highland-park'},
  {service:'cockroach-exterminator',town:'highland-park'},
  {service:'mosquito-treatment',town:'highland-park'},
  {service:'wasp-hornet-removal',town:'highland-park'},
  {service:'termite-treatment',town:'highland-park'},
  {service:'bed-bug-treatment',town:'jamesburg'},
  {service:'ant-exterminator',town:'jamesburg'},
  {service:'rodent-control',town:'jamesburg'},
  {service:'cockroach-exterminator',town:'jamesburg'},
  {service:'mosquito-treatment',town:'jamesburg'},
  {service:'wasp-hornet-removal',town:'jamesburg'},
  {service:'termite-treatment',town:'jamesburg'},
  {service:'bed-bug-treatment',town:'metuchen'},
  {service:'ant-exterminator',town:'metuchen'},
  {service:'rodent-control',town:'metuchen'},
  {service:'cockroach-exterminator',town:'metuchen'},
  {service:'mosquito-treatment',town:'metuchen'},
  {service:'wasp-hornet-removal',town:'metuchen'},
  {service:'termite-treatment',town:'metuchen'},
  {service:'bed-bug-treatment',town:'middlesex'},
  {service:'ant-exterminator',town:'middlesex'},
  {service:'rodent-control',town:'middlesex'},
  {service:'cockroach-exterminator',town:'middlesex'},
  {service:'mosquito-treatment',town:'middlesex'},
  {service:'wasp-hornet-removal',town:'middlesex'},
  {service:'termite-treatment',town:'middlesex'},
  {service:'bed-bug-treatment',town:'milltown'},
  {service:'ant-exterminator',town:'milltown'},
  {service:'rodent-control',town:'milltown'},
  {service:'cockroach-exterminator',town:'milltown'},
  {service:'mosquito-treatment',town:'milltown'},
  {service:'wasp-hornet-removal',town:'milltown'},
  {service:'termite-treatment',town:'milltown'},
  {service:'bed-bug-treatment',town:'monroe'},
  {service:'ant-exterminator',town:'monroe'},
  {service:'rodent-control',town:'monroe'},
  {service:'cockroach-exterminator',town:'monroe'},
  {service:'mosquito-treatment',town:'monroe'},
  {service:'wasp-hornet-removal',town:'monroe'},
  {service:'termite-treatment',town:'monroe'},
  {service:'bed-bug-treatment',town:'new-brunswick'},
  {service:'ant-exterminator',town:'new-brunswick'},
  {service:'rodent-control',town:'new-brunswick'},
  {service:'cockroach-exterminator',town:'new-brunswick'},
  {service:'mosquito-treatment',town:'new-brunswick'},
  {service:'wasp-hornet-removal',town:'new-brunswick'},
  {service:'termite-treatment',town:'new-brunswick'},
  {service:'bed-bug-treatment',town:'north-brunswick'},
  {service:'ant-exterminator',town:'north-brunswick'},
  {service:'rodent-control',town:'north-brunswick'},
  {service:'cockroach-exterminator',town:'north-brunswick'},
  {service:'mosquito-treatment',town:'north-brunswick'},
  {service:'wasp-hornet-removal',town:'north-brunswick'},
  {service:'termite-treatment',town:'north-brunswick'},
  {service:'bed-bug-treatment',town:'old-bridge'},
  {service:'ant-exterminator',town:'old-bridge'},
  {service:'rodent-control',town:'old-bridge'},
  {service:'cockroach-exterminator',town:'old-bridge'},
  {service:'mosquito-treatment',town:'old-bridge'},
  {service:'wasp-hornet-removal',town:'old-bridge'},
  {service:'termite-treatment',town:'old-bridge'},
  {service:'bed-bug-treatment',town:'perth-amboy'},
  {service:'ant-exterminator',town:'perth-amboy'},
  {service:'rodent-control',town:'perth-amboy'},
  {service:'cockroach-exterminator',town:'perth-amboy'},
  {service:'mosquito-treatment',town:'perth-amboy'},
  {service:'wasp-hornet-removal',town:'perth-amboy'},
  {service:'termite-treatment',town:'perth-amboy'},
  {service:'bed-bug-treatment',town:'piscataway'},
  {service:'ant-exterminator',town:'piscataway'},
  {service:'rodent-control',town:'piscataway'},
  {service:'cockroach-exterminator',town:'piscataway'},
  {service:'mosquito-treatment',town:'piscataway'},
  {service:'wasp-hornet-removal',town:'piscataway'},
  {service:'termite-treatment',town:'piscataway'},
  {service:'bed-bug-treatment',town:'plainsboro'},
  {service:'ant-exterminator',town:'plainsboro'},
  {service:'rodent-control',town:'plainsboro'},
  {service:'cockroach-exterminator',town:'plainsboro'},
  {service:'mosquito-treatment',town:'plainsboro'},
  {service:'wasp-hornet-removal',town:'plainsboro'},
  {service:'termite-treatment',town:'plainsboro'},
  {service:'bed-bug-treatment',town:'sayreville'},
  {service:'ant-exterminator',town:'sayreville'},
  {service:'rodent-control',town:'sayreville'},
  {service:'cockroach-exterminator',town:'sayreville'},
  {service:'mosquito-treatment',town:'sayreville'},
  {service:'wasp-hornet-removal',town:'sayreville'},
  {service:'termite-treatment',town:'sayreville'},
  {service:'bed-bug-treatment',town:'south-amboy'},
  {service:'ant-exterminator',town:'south-amboy'},
  {service:'rodent-control',town:'south-amboy'},
  {service:'cockroach-exterminator',town:'south-amboy'},
  {service:'mosquito-treatment',town:'south-amboy'},
  {service:'wasp-hornet-removal',town:'south-amboy'},
  {service:'termite-treatment',town:'south-amboy'},
  {service:'bed-bug-treatment',town:'south-brunswick'},
  {service:'ant-exterminator',town:'south-brunswick'},
  {service:'rodent-control',town:'south-brunswick'},
  {service:'cockroach-exterminator',town:'south-brunswick'},
  {service:'mosquito-treatment',town:'south-brunswick'},
  {service:'wasp-hornet-removal',town:'south-brunswick'},
  {service:'termite-treatment',town:'south-brunswick'},
  {service:'bed-bug-treatment',town:'south-plainfield'},
  {service:'ant-exterminator',town:'south-plainfield'},
  {service:'rodent-control',town:'south-plainfield'},
  {service:'cockroach-exterminator',town:'south-plainfield'},
  {service:'mosquito-treatment',town:'south-plainfield'},
  {service:'wasp-hornet-removal',town:'south-plainfield'},
  {service:'termite-treatment',town:'south-plainfield'},
  {service:'bed-bug-treatment',town:'south-river'},
  {service:'ant-exterminator',town:'south-river'},
  {service:'rodent-control',town:'south-river'},
  {service:'cockroach-exterminator',town:'south-river'},
  {service:'mosquito-treatment',town:'south-river'},
  {service:'wasp-hornet-removal',town:'south-river'},
  {service:'termite-treatment',town:'south-river'},
  {service:'bed-bug-treatment',town:'spotswood'},
  {service:'ant-exterminator',town:'spotswood'},
  {service:'rodent-control',town:'spotswood'},
  {service:'cockroach-exterminator',town:'spotswood'},
  {service:'mosquito-treatment',town:'spotswood'},
  {service:'wasp-hornet-removal',town:'spotswood'},
  {service:'termite-treatment',town:'spotswood'},
  {service:'bed-bug-treatment',town:'woodbridge'},
  {service:'ant-exterminator',town:'woodbridge'},
  {service:'rodent-control',town:'woodbridge'},
  {service:'cockroach-exterminator',town:'woodbridge'},
  {service:'mosquito-treatment',town:'woodbridge'},
  {service:'wasp-hornet-removal',town:'woodbridge'},
  {service:'termite-treatment',town:'woodbridge'},
  ];
}

export async function generateMetadata(
  { params }: { params: { service: string; town: string } }
): Promise<Metadata> {
  const svc = SERVICES_MAP[params.service];
  if (!svc) return {};
  const townName = getTownName(params.town);
  const title = svc.h1(townName);
  const description = `Licensed ${svc.label.toLowerCase()} serving ${townName}, Middlesex County. ${svc.pricing} \u2014 free estimate, same-day service available.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${DOMAIN}/get-a-quote/${params.service}/${params.town}` },
    openGraph: { title, description, url: `${DOMAIN}/get-a-quote/${params.service}/${params.town}` },
  };
}

export default function ServiceTownQuotePage(
  { params }: { params: { service: string; town: string } }
) {
  const svc = SERVICES_MAP[params.service];
  if (!svc) notFound();
  const townName = getTownName(params.town);

  return (
    <>
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {svc.h1(townName)}
              </h1>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">{svc.intro(townName)}</p>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20 mb-6">
                <p className="text-yellow-300 font-semibold text-sm mb-1">Typical Cost</p>
                <p className="text-2xl font-bold text-white">{svc.pricing}</p>
                <p className="text-gray-300 text-sm">{svc.pricingNote} &middot; free estimate before any work</p>
              </div>
              <p className="text-gray-200 text-sm">
                Call us: <a href={`tel:${PHONE_RAW}`} className="text-yellow-300 font-semibold hover:underline">{PHONE}</a>
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-dark mb-6 text-center">Request Your Free Quote</h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main max-w-3xl">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">
            Common Questions About {svc.label} in {townName}
          </h2>
          <div className="space-y-6">
            {svc.faqs(townName).map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container-main text-center py-8 space-x-4">
          <Link href={`/get-a-quote/${params.service}`} className="text-primary font-semibold hover:underline text-sm">
            &larr; Back to {svc.label} Quotes
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/get-a-quote" className="text-primary font-semibold hover:underline text-sm">All Services</Link>
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started in {townName}?</h2>
          <p className="text-white/90 text-lg mb-8">Same-day service available throughout Middlesex County.</p>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors"
          >
            &#128222; {PHONE}
          </a>
        </div>
      </section>
    </>
  );
}
