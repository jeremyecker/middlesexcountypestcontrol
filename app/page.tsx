import type { Metadata } from 'next';
import { getOpenGraph } from '@/lib/og';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, Shield, Clock,
  Star, CheckCircle, ArrowRight, MapPin
} from 'lucide-react';
import { PHONE, PHONE_RAW, SITE_NAME, DOMAIN, TAGLINE, services, towns, testimonials, blogPosts } from '@/lib/data';
import PhoneLink from '@/components/PhoneLink';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Middlesex County Pest Control | Exterminators in NJ',
  description: `Middlesex County's trusted pest control since 2018. Same-day service for bed bugs, rodents, termites, mosquitoes & more. Call ${PHONE}.`,
  alternates: { canonical: `${DOMAIN}/` },
  openGraph: getOpenGraph(`${DOMAIN}/`),
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${DOMAIN}/#localbusiness`,
  logo: { '@type': 'ImageObject', url: `${DOMAIN}/logo.png` },
  priceRange: '$$',
  name: SITE_NAME,
  telephone: '(732) 856-5142',
  url: DOMAIN,
  image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&q=80',
  foundingDate: '2018',
  description: 'Licensed and insured pest control services serving all of Middlesex County, NJ since 2018.',
  openingHours: 'Mo-Sa 08:00-18:00',
  address: { '@type': 'PostalAddress', addressLocality: 'New Brunswick', addressRegion: 'NJ', addressCountry: 'US' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '8',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: [
    { '@type': 'City', name: 'Carteret, NJ' },
    { '@type': 'City', name: 'Cranbury, NJ' },
    { '@type': 'City', name: 'Dunellen, NJ' },
    { '@type': 'City', name: 'East Brunswick, NJ' },
    { '@type': 'City', name: 'Edison, NJ' },
    { '@type': 'City', name: 'Helmetta, NJ' },
    { '@type': 'City', name: 'Highland Park, NJ' },
    { '@type': 'City', name: 'Jamesburg, NJ' },
    { '@type': 'City', name: 'Middlesex, NJ' },
    { '@type': 'City', name: 'Metuchen, NJ' },
    { '@type': 'City', name: 'Milltown, NJ' },
    { '@type': 'City', name: 'Monroe, NJ' },
    { '@type': 'City', name: 'New Brunswick, NJ' },
    { '@type': 'City', name: 'North Brunswick, NJ' },
    { '@type': 'City', name: 'Old Bridge, NJ' },
    { '@type': 'City', name: 'Perth Amboy, NJ' },
    { '@type': 'City', name: 'Piscataway, NJ' },
    { '@type': 'City', name: 'Plainsboro, NJ' },
    { '@type': 'City', name: 'Sayreville, NJ' },
    { '@type': 'City', name: 'South Amboy, NJ' },
    { '@type': 'City', name: 'South Brunswick, NJ' },
    { '@type': 'City', name: 'South Plainfield, NJ' },
    { '@type': 'City', name: 'South River, NJ' },
    { '@type': 'City', name: 'Spotswood, NJ' },
    { '@type': 'City', name: 'Woodbridge, NJ' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pest Control Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bed Bug Extermination' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rodent Control' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cockroach Extermination' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ant Control' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Termite Treatment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mosquito Control' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wasp & Bee Removal' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tick Control' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flea Treatment' } },
    ],
  },
};

const homepageFaqs = [
  {
    q: 'What pests are most common in Middlesex County, NJ?',
    a: 'The most common pest complaints in Middlesex County include ants, mice, rats, bed bugs, cockroaches, termites, mosquitoes, and ticks. Waterfront communities like Perth Amboy and Sayreville also experience significant rodent pressure.',
  },
  {
    q: 'How much does pest control cost in Middlesex County?',
    a: 'Most residential pest control treatments in Middlesex County range from $150\u2013$400 depending on pest type and infestation size. Termite treatment and bed bug heat treatments are typically higher. Contact us for a free quote.',
  },
  {
    q: 'Do you offer same-day pest control in Middlesex County?',
    a: 'Yes \u2014 we offer same-day and next-day appointments throughout all 25 municipalities in Middlesex County. Call (732) 856-5142 or book online.',
  },
  {
    q: 'Are your pest control treatments low-impact for families and pets?',
    a: 'Yes. We use EPA-registered products applied by NJ DEP licensed technicians. We advise on any re-entry times and precautions appropriate to your specific treatment.',
  },
];

const homepageFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFaqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const serviceEmojiMap: Record<string, string> = {
  'bed-bugs':    '\uD83D\uDECF\uFE0F',
  'rodents':     '\uD83D\uDC00',
  'cockroaches': '\uD83E\uDD5F',
  'ants':        '\uD83D\uDC1C',
  'termites':    '\uD83E\uDEB5',
  'mosquitoes':  '\uD83E\uDD9F',
  'wasps':       '\uD83D\uDC1D',
  'ticks':       '\uD83D\uDD77\uFE0F',
  'fleas':       '\uD83E\uDD97',
};

const yearsInBusiness = new Date().getFullYear() - 2018;

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80"
            alt="Residential neighborhood in Middlesex County, NJ"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/50 via-dark/20 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-white">
          <div className="max-w-2xl">
            <p className="text-white font-semibold uppercase tracking-wider text-sm mb-3 drop-shadow">{TAGLINE}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              Middlesex County Exterminator<br />
              <span className="text-red-400">Pest Control Experts in NJ</span>
            </h1>
            <p className="text-gray-100 text-lg mb-8 leading-relaxed drop-shadow">
              Serving all 25 municipalities in Middlesex County, NJ since 2018. Licensed, insured, and ready today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-ctahover transition-colors text-center"
              >
                Book Now
              </Link>
              <PhoneLink
                href={`tel:${PHONE_RAW}`}
                phone={PHONE}
                eventLabel="hero"
                iconSize={20}
                className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-dark transition-colors text-center flex items-center justify-center gap-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-navy py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {['Licensed & Insured', 'Same-Day Service', 'Serving Middlesex County Since 2018', 'Free Estimates'].map(badge => (
              <span key={badge} className="bg-white text-navy px-4 py-2 rounded-full text-sm font-bold">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Pest Control Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive pest management solutions for residential and commercial properties throughout Middlesex County, NJ.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => {
              const emoji = serviceEmojiMap[service.slug] ?? '\uD83D\uDC1B';
              return (
                <div key={service.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="bg-navy flex items-center justify-center h-28">
                    <span className="text-6xl" role="img" aria-label={service.title}>{emoji}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-ctahover transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-gray">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Middlesex County Pest Control?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We&apos;re the local experts you can count on for fast, effective, and professional pest control.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={40} className="text-navy" />,
                title: 'Licensed & Insured',
                desc: 'Fully licensed by the NJ Department of Environmental Protection. Every technician is trained, certified, and background-checked for your peace of mind.',
              },
              {
                icon: <Clock size={40} className="text-navy" />,
                title: 'Same-Day Service',
                desc: "Pest problems can't wait. We offer same-day and next-day appointments throughout Middlesex County to handle your infestation quickly.",
              },
              {
                icon: <CheckCircle size={40} className="text-navy" />,
                title: `${yearsInBusiness}+ Years Experience`,
                desc: 'Serving Middlesex County since 2018, our team has handled thousands of pest cases across all property types, from apartments to commercial facilities.',
              },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-lg p-8 text-center shadow-sm">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-light">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Proudly Serving All of Middlesex County, NJ</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From Edison to New Brunswick, we provide expert pest control to every municipality in Middlesex County.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {towns.map(town => (
              <Link
                key={town.slug}
                href={`/${town.slug}`}
                className="flex items-center gap-1 bg-lightgray hover:bg-navy hover:text-white text-dark text-sm font-medium px-3 py-2 rounded transition-colors"
              >
                <MapPin size={12} className="flex-shrink-0" />
                {town.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Teaser */}
      <section className="section-gray">
        <div className="container-main">
          <div className="bg-navy rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative min-h-[280px]">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Commercial pest control for Middlesex County NJ restaurants and businesses"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Commercial Pest Control</h2>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Restaurants, office buildings, warehouses, schools \u2014 we provide comprehensive commercial pest management programs with full NJ DOH compliance documentation. Protect your Middlesex County business reputation.
                </p>
                <Link
                  href="/commercial"
                  className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-ctahover transition-colors self-start"
                >
                  Get a Commercial Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Middlesex County Residents Say</h2>
            <div className="flex justify-center gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-gray-500">5.0 Rating from Middlesex County homeowners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map(t => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-dark text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews" className="text-primary font-semibold hover:underline">
              Read More Reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-gray">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Pest Control Tips &amp; Resources</h2>
            <p className="text-gray-600 text-lg">Expert advice from Middlesex County&apos;s local pest control professionals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map(post => (
              <div key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="p-6">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-bold text-dark mt-2 mb-3 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`} className="text-dark hover:text-primary">{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                  <p className="text-gray-400 text-xs mt-4">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-ctahover transition-colors">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-gray">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Common questions from Middlesex County homeowners and businesses.</p>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {homepageFaqs.map(faq => (
              <div key={faq.q} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-light" id="quote">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Get a Free Pest Control Quote</h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below or call <a href={`tel:${PHONE_RAW}`} className="text-primary font-semibold">{PHONE}</a> for same-day service.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy py-16">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get a Free Pest Control Quote Today</h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t let pests take over your home or business. Contact Middlesex County Pest Control for a free quote and same-day service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-ctahover transition-colors"
            >
              Book Now
            </Link>
            <PhoneLink
              href={`tel:${PHONE_RAW}`}
              phone={PHONE}
              eventLabel="cta_banner"
              iconSize={20}
              className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-navyhover transition-colors flex items-center justify-center gap-2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
