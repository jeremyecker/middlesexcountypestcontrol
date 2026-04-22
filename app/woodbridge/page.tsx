import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { getOpenGraph } from '@/lib/og';
import { PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Pest Control in Woodbridge, NJ | Same-Day Exterminators',
  description:
    'Licensed pest control in Woodbridge, NJ. Bed bugs, rodents, cockroaches, termites, mosquitoes & more. Same-day service available. Call (732) 856-5142.',
  alternates: { canonical: `${DOMAIN}/woodbridge` },
  openGraph: getOpenGraph('/woodbridge'),
};

const WOODBRIDGE_SERVICES = [
  {
    slug: 'bed-bugs',
    emoji: '🛏️',
    title: 'Bed Bug Treatment',
    desc: "Woodbridge's dense multi-family housing and apartment complexes in Iselin and Avenel create bed bug spread risk. We offer heat and chemical treatment for complete elimination.",
  },
  {
    slug: 'rodents',
    emoji: '🐀',
    title: 'Rodent Control',
    desc: 'Mice and rats are active throughout Woodbridge — particularly near the NJ Turnpike corridor, Port Reading, and older residential neighborhoods. Full exclusion included.',
  },
  {
    slug: 'cockroaches',
    emoji: '🪳',
    title: 'Cockroach Extermination',
    desc: 'Professional gel bait and residual treatments for German cockroach infestations in Woodbridge apartments, restaurants, and commercial properties.',
  },
  {
    slug: 'ants',
    emoji: '🐜',
    title: 'Ant Control',
    desc: 'Carpenter ants, pavement ants, and odorous house ants are active throughout Woodbridge Township. We locate colonies and eliminate them with targeted treatments.',
  },
  {
    slug: 'termites',
    emoji: '🪵',
    title: 'Termite Treatment',
    desc: "Protect your Woodbridge home with liquid barrier or bait station termite treatments. Woodbridge's aging housing stock and wood-frame construction create elevated termite risk.",
  },
  {
    slug: 'mosquitoes',
    emoji: '🦟',
    title: 'Mosquito Control',
    desc: "Woodbridge's proximity to Raritan Bay and the Arthur Kill creates significant mosquito pressure, especially in Port Reading, Fords, and areas near waterways. Seasonal barrier spray programs available.",
  },
  {
    slug: 'wasps',
    emoji: '🐝',
    title: 'Wasp & Hornet Removal',
    desc: 'Same-day wasp nest removal throughout Woodbridge Township. Yellow jackets, bald-faced hornets, and paper wasps safely eliminated by licensed technicians.',
  },
  {
    slug: 'ticks',
    emoji: '🕷️',
    title: 'Tick Control',
    desc: "Woodbridge's wooded conservation areas and residential properties bordering the Garden State Parkway corridor harbor blacklegged ticks. Targeted yard treatment reduces Lyme disease risk.",
  },
  {
    slug: 'fleas',
    emoji: '🦗',
    title: 'Flea Extermination',
    desc: 'Comprehensive flea treatment for Woodbridge homes and yards. We treat both the interior and exterior to break the flea life cycle completely.',
  },
];

const FAQS = [
  {
    q: 'What pests are most common in Woodbridge, NJ?',
    a: "Woodbridge Township's most common pest problems include rodents (mice and rats — especially near commercial corridors and older residential neighborhoods), cockroaches in multi-family properties and restaurants, ants throughout suburban residential areas, mosquitoes in neighborhoods near Raritan Bay and the Arthur Kill waterway, and bed bugs in apartments and densely occupied housing. Termites are also a concern in Woodbridge's older wood-frame construction.",
  },
  {
    q: 'How quickly can Middlesex County Pest Control reach Woodbridge?',
    a: 'We offer same-day and next-day service throughout Woodbridge Township. Most service calls are dispatched within 2–4 hours during weekdays. Call (732) 856-5142 for fastest response. We cover all Woodbridge neighborhoods including Avenel, Colonia, Fords, Iselin, Menlo Park Terrace, Port Reading, Sewaren, and Woodbridge proper.',
  },
  {
    q: 'How much does pest control cost in Woodbridge, NJ?',
    a: 'Pest control costs in Woodbridge vary by pest and infestation size. General pest control typically runs $150–$350 for a standard treatment. Bed bug heat treatment averages $800–$2,500 for an apartment. Termite liquid treatment for an average Woodbridge home runs $800–$2,000. Rodent control with exclusion typically totals $600–$2,000 depending on the number of entry points. We provide free estimates — call (732) 856-5142 for an exact quote.',
  },
  {
    q: 'Do you service Woodbridge apartments and condos?',
    a: "Yes. We regularly service Woodbridge's multi-family properties including apartment complexes, condominiums, townhouses, and rental properties. We work directly with property managers and landlords for unit-by-unit treatment protocols. German cockroach, bed bug, and rodent programs are all available for multi-unit buildings.",
  },
  {
    q: 'Is Middlesex County Pest Control licensed in NJ?',
    a: 'Yes. We are fully licensed by the New Jersey Department of Environmental Protection (NJDEP) and carry all required general liability insurance and workers\' compensation coverage. Our technicians are certified pest control operators who complete ongoing continuing education to maintain licensure.',
  },
];

const NEARBY_TOWNS = [
  { name: 'Edison', slug: 'edison' },
  { name: 'Perth Amboy', slug: 'perth-amboy' },
  { name: 'Sayreville', slug: 'sayreville' },
  { name: 'Carteret', slug: 'carteret' },
  { name: 'South Amboy', slug: 'south-amboy' },
];

const REVIEWS = [
  {
    name: 'Raj P.',
    location: 'Iselin',
    text: 'Had a bad cockroach problem in my apartment building. The team came out same day and handled every unit properly. No more sightings.',
    stars: 5,
  },
  {
    name: 'Maria C.',
    location: 'Avenel',
    text: 'Mice got in through the garage foundation. They found every entry point, sealed it all, and set traps. Problem solved in one visit.',
    stars: 5,
  },
  {
    name: 'Kevin L.',
    location: 'Woodbridge',
    text: 'Excellent service for our termite inspection and treatment. Thorough, professional, and the documentation was complete for our home sale.',
    stars: 5,
  },
];

export default function WoodbridgePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 text-green-300 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Woodbridge Township, NJ — Middlesex County</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pest Control in Woodbridge, NJ
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl">
            Same-day and next-day exterminator service throughout Woodbridge Township. Licensed, local, and ready to respond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE_RAW}`}
              className="flex items-center justify-center gap-2 bg-white text-green-900 font-bold px-6 py-3 rounded-lg text-lg hover:bg-green-50 transition"
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
            <Link
              href="/get-a-quote"
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-lg text-lg hover:bg-white/10 transition"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-green-800 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-white text-sm">
            {['NJDEP Licensed & Insured', 'Same-Day Service Available', 'Free Estimates', 'Satisfaction Guaranteed'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Pest Control Services in Woodbridge, NJ
          </h2>
          <p className="text-gray-600 text-center mb-10">
            We handle every common pest problem throughout Woodbridge Township.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WOODBRIDGE_SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/woodbridge`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-green-500 hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{s.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Woodbridge */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pest Control in Woodbridge Township, NJ
              </h2>
              <p className="text-gray-700 mb-4">
                Woodbridge Township is the largest township in New Jersey by population, spanning over 24 square miles with a diverse mix of residential neighborhoods, commercial corridors, and industrial areas. The township&apos;s proximity to Raritan Bay and the Arthur Kill waterway creates significant mosquito and wildlife pressure throughout the warm season, while the dense residential development in Iselin, Avenel, Colonia, and Fords supports large rodent and cockroach populations year-round.
              </p>
              <p className="text-gray-700 mb-4">
                Older neighborhoods throughout Woodbridge proper and Port Reading feature aging housing stock with foundation gaps, deteriorated pipe penetrations, and settled construction that provides rodent entry points. Multi-family housing throughout Iselin and the Route 1 corridor experiences recurrent cockroach and bed bug pressure common to dense urban-adjacent development.
              </p>
              <p className="text-gray-700">
                {SITE_NAME} serves every neighborhood in Woodbridge Township with same-day response times and NJDEP-licensed technicians familiar with the specific pest challenges throughout the community.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Woodbridge Neighborhoods We Serve</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
                {['Woodbridge', 'Iselin', 'Avenel', 'Colonia', 'Fords', 'Hopelawn', 'Keasbey', 'Menlo Park Terrace', 'Port Reading', 'Sewaren'].map((n) => (
                  <li key={n} className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            What Woodbridge Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-xl p-6">
                <div className="flex text-yellow-400 mb-3">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
                    <div className="text-gray-500 text-xs">{r.location}, NJ</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Woodbridge Pest Control FAQ
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Rid of Pests in Woodbridge?
          </h2>
          <p className="text-green-200 mb-8">
            Same-day service available throughout Woodbridge Township, NJ. Licensed technicians, guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="flex items-center justify-center gap-2 bg-white text-green-900 font-bold px-8 py-4 rounded-lg text-lg hover:bg-green-50 transition"
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
            <Link
              href="/get-a-quote"
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby Towns */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Also Serving Nearby Communities
          </h3>
          <div className="flex flex-wrap gap-3">
            {NEARBY_TOWNS.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}`}
                className="text-green-700 hover:text-green-900 border border-green-200 rounded-full px-4 py-1 text-sm hover:bg-green-50 transition"
              >
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
