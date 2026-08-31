import type { Metadata } from 'next';
import { getOpenGraph } from '@/lib/og';
import Link from 'next/link';
import { PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Middlesex County Spring Pest Control Guide | Expert Tips & Prevention',
  description: 'Complete spring pest control guide for Middlesex County NJ homeowners. Learn how to prevent ants, termites, mosquitoes, ticks, and stinging insects this season.',
  alternates: {
    canonical: `${DOMAIN}/blog/middlesex-county-spring-pest-control-guide`,
  },
  openGraph: getOpenGraph('/blog/middlesex-county-spring-pest-control-guide'),
};

const faqs = [
  {
    question: 'When should I start spring pest control treatments in Middlesex County?',
    answer: 'In Middlesex County, we recommend starting preventive pest control treatments in late March to early April, as temperatures begin consistently reaching 50°F. This timing allows you to establish barriers before ant colonies become active, termite swarms emerge, and mosquito breeding season begins. Early intervention is especially important in areas near the Raritan River and other waterways common throughout Edison, New Brunswick, and Woodbridge.',
  },
  {
    question: 'What are the most common spring pests in Central New Jersey?',
    answer: 'The most common spring pests in Middlesex County include carpenter ants, pavement ants, odorous house ants, Eastern subterranean termites, mosquitoes, black-legged ticks (deer ticks), American dog ticks, yellowjackets, paper wasps, and carpenter bees. Our humid climate and mix of suburban and wooded areas in towns like Piscataway, Old Bridge, and East Brunswick create ideal conditions for these pests to thrive.',
  },
  {
    question: 'How can I identify termite damage versus carpenter ant damage in my home?',
    answer: 'Termite damage typically features mud tubes along foundations, hollowed wood with a honeycomb pattern, and discarded wings near windows. Carpenter ant damage shows smooth, clean galleries in wood with sawdust-like frass nearby, and you may see large black ants actively moving through your home. Both pests are common in older homes throughout Perth Amboy, South Amboy, and Metuchen. If you notice any signs of wood damage, contact a professional immediately for proper identification and treatment.',
  },
];

export default function SpringPestControlGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${DOMAIN}/blog/middlesex-county-spring-pest-control-guide#article`,
        headline: 'Middlesex County Spring Pest Control Guide',
        description: 'Complete spring pest control guide for Middlesex County NJ homeowners. Learn how to prevent ants, termites, mosquitoes, ticks, and stinging insects this season.',
        image: `${DOMAIN}/images/spring-pest-control-guide.jpg`,
        datePublished: '2026-05-05',
        dateModified: '2026-05-05',
        author: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: DOMAIN,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: DOMAIN,
          logo: {
            '@type': 'ImageObject',
            url: `${DOMAIN}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${DOMAIN}/blog/middlesex-county-spring-pest-control-guide`,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${DOMAIN}/blog/middlesex-county-spring-pest-control-guide#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-dark text-white py-12">
        <div className="container-main">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-300">Spring Pest Control Guide</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Middlesex County Spring Pest Control Guide
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Your comprehensive guide to preventing and controlling common spring pests in Central New Jersey
          </p>
          <div className="flex items-center text-sm text-gray-400">
            <time dateTime="2026-05-05">Published: May 5, 2026</time>
            <span className="mx-3">|</span>
            <span>12 min read</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-light py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed">
                As temperatures rise across Middlesex County, so does pest activity. Spring marks the beginning of peak pest season in New Jersey, and homeowners from New Brunswick to Woodbridge need to be prepared. This comprehensive guide will walk you through everything you need to know about protecting your home from the most common spring invaders &mdash; including a detailed video walkthrough of common pest entry points.
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-6">Understanding Spring Pest Behavior in Middlesex County</h2>
              
              <p>
                Spring in Central New Jersey brings unique pest challenges. Our region&apos;s mix of urban centers like Perth Amboy and suburban communities like Plainsboro creates diverse habitats for various pest species. The warming temperatures &mdash; typically reaching consistent 50-60°F ranges by mid-April &mdash; trigger dormant insects to emerge and begin their reproductive cycles.
              </p>

              <p>
                The Raritan River watershed, which runs through much of Middlesex County, contributes to higher moisture levels that attract moisture-loving pests. Communities along waterways in Edison, Sayreville, and South Amboy often experience earlier and more intense pest pressure than inland areas.
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-6">Ants: The First Invaders of Spring</h2>

              <p>
                Ant colonies that have been dormant through winter become active as soil temperatures rise. In Middlesex County, we primarily deal with three ant species that cause problems for homeowners:
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Carpenter Ants</h3>
              
              <p>
                Carpenter ants are particularly problematic in older homes common throughout Metuchen and South Brunswick. Unlike termites, carpenter ants don&apos;t eat wood &mdash; they excavate it to create nesting galleries. Signs of carpenter ant infestation include small piles of sawdust-like frass near baseboards, rustling sounds in walls, and seeing large black ants (1/4 to 1/2 inch) inside your home, especially at night.
              </p>

              <p>
                <strong>Prevention Tips:</strong> Trim tree branches away from your home, eliminate wood-to-soil contact around foundations, fix any moisture issues in crawl spaces and basements, and store firewood at least 20 feet from your home.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Pavement Ants</h3>

              <p>
                These small brown ants create those telltale sand mounds between sidewalk cracks and along driveways throughout East Brunswick and Old Bridge neighborhoods. While they typically nest outdoors, pavement ants readily enter homes in search of food, particularly sweet and greasy substances.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Odorous House Ants</h3>

              <p>
                Named for the rotten coconut smell they emit when crushed, odorous house ants form massive colonies with multiple queens. They&apos;re especially common in Piscataway and surrounding areas, often entering homes through foundation cracks in search of moisture and sugary foods.
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-6">Termites: The Silent Destroyers</h2>

              <p>
                Eastern subterranean termites cause more structural damage to Middlesex County homes than any other pest. Spring is termite swarming season &mdash; typically occurring on warm days following rain, usually between April and June. Homeowners in Woodbridge, Edison, and New Brunswick should be especially vigilant during this time.
              </p>

              <p>
                Termite swarmers are often mistaken for flying ants, but there are key differences: termites have straight antennae (ants have elbowed antennae), termites have equal-length wings (ant wings are different sizes), and termites have straight, thick waists (ants have pinched waists).
              </p>

              <p>
                <strong>Warning Signs:</strong> Discarded wings near windows and doors, mud tubes along foundation walls, hollow-sounding wood, bubbling or peeling paint, and frass (termite droppings that look like tiny wood-colored pellets).
              </p>

              <p>
                <strong>Prevention Tips:</strong> Maintain proper drainage around your foundation, eliminate wood debris in your yard, ensure at least 6 inches between soil and wooden elements of your home, and schedule annual termite inspections &mdash; particularly important for homes over 20 years old.
              </p>

              {/* Video Section */}
              <div className="bg-gray-100 rounded-xl p-8 my-10">
                <h3 className="text-2xl font-bold mb-4">Video: Common Pest Entry Points Walkthrough</h3>
                <p className="mb-6">
                  Watch our expert technicians demonstrate the most common areas where pests enter Middlesex County homes &mdash; and learn how to seal them effectively.
                </p>
                <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">YouTube Video: Pest Entry Points Walkthrough</p>
                    <p className="text-sm text-gray-500 mt-2">Video ID: [YOUR_VIDEO_ID]</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  In this 8-minute walkthrough, we cover foundation cracks, door sweeps, window screens, utility penetrations, roof vents, and landscaping issues that invite pests into your home.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-10 mb-6">Mosquitoes: Protecting Your Outdoor Spaces</h2>

              <p>
                Mosquito season in Middlesex County typically begins in late April and peaks during the humid summer months. However, spring is the critical time to eliminate breeding sites before populations explode. Areas near the Raritan Bay, including Perth Amboy and South Amboy, often experience higher mosquito pressure due to tidal marshes and wetlands.
              </p>

              <p>
                Mosquitoes need only a bottle cap&apos;s worth of standing water to breed. Common backyard breeding sites include clogged gutters, bird baths, plant saucers, children&apos;s toys, tarps, and tire swings.
              </p>

              <p>
                <strong>Prevention Tips:</strong> Eliminate standing water weekly, clean gutters in early spring, treat ornamental ponds with mosquito dunks, maintain swimming pools properly, and consider professional barrier treatments for properties near wooded areas or wetlands.
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-6">Ticks: A Growing Concern in Central New Jersey</h2>

              <p>
                Tick populations have increased dramatically across Middlesex County over the past decade. The black-legged tick (deer tick), which transmits Lyme disease, is particularly common in wooded and grassy areas of South Brunswick, Plainsboro, and East Brunswick.
              </p>

              <p>
                Ticks become active when temperatures consistently reach 40°F, making early spring a crucial time for prevention. Adult ticks that survived winter are actively seeking hosts, and nymph ticks &mdash; which are responsible for most Lyme disease transmissions &mdash; emerge in late spring.
              </p>

              <p>
                <strong>Prevention Tips:</strong> Create a 3-foot wide gravel or wood chip barrier between lawns and wooded areas, keep grass mowed short, remove leaf litter, consider tick tubes for controlling ticks on rodent hosts, and schedule professional tick treatments beginning in April.
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-6">Stinging Insects: Early Season Nest Prevention</h2>

              <p>
                Spring is when overwintered queen wasps, yellowjackets, and hornets emerge to establish new colonies. A single queen in April can result in a nest of thousands by late summer. Early detection and removal of nests is critical &mdash; and much safer than dealing with mature colonies.
              </p>

              <p>
                Paper wasps favor building nests under eaves, porch ceilings, and deck railings &mdash; a common sight in residential areas of Sayreville and Old Bridge. Yellowjackets often nest in ground cavities, abandoned rodent burrows, and wall voids. Carpenter bees, while less aggressive, bore into untreated wood and can cause structural damage over time.
              </p>

              <p>
                <strong>Prevention Tips:</strong> Inspect your property weekly in spring for small starter nests (golf ball sized or smaller), paint or stain exposed wood to deter carpenter bees, seal gaps around windows and doors, and keep outdoor trash cans sealed tightly.
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-6">Your Spring Pest Control Action Plan</h2>

              <p>
                Here&apos;s a month-by-month guide for Middlesex County homeowners:
              </p>

              <p>
                <strong>March:</strong> Conduct a full exterior inspection, seal foundation cracks and gaps, clean gutters, and schedule professional pest inspection.
              </p>

              <p>
                <strong>April:</strong> Begin perimeter ant treatments, check for termite swarmers after warm rains, eliminate standing water, and inspect for early wasp nests.
              </p>

              <p>
                <strong>May:</strong> Apply tick prevention treatments, install or repair window screens, begin mosquito control measures, and monitor for carpenter bee activity.
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-6">When to Call a Professional</h2>

              <p>
                While many preventive measures can be handled by homeowners, certain situations require professional intervention. Contact a licensed pest control company if you notice termite swarmers or damage, find carpenter ant frass inside your home, discover wasp nests larger than a golf ball, experience recurring ant invasions despite DIY treatments, or have a property adjacent to wooded areas requiring tick management.
              </p>

              <p>
                Professional pest control services in Middlesex County can provide targeted treatments, ongoing monitoring, and professional results that protect your home and family throughout the pest-heavy spring and summer months.
              </p>

              {/* FAQ Section */}
              <div className="mt-12 border-t pt-10">
                <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-8">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                      <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-navy text-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Need Professional Help?</h3>
                  <p className="mb-6 text-gray-200">
                    Don&apos;t let spring pests take over your home. Our expert technicians serve all of Middlesex County with fast, effective pest control solutions.
                  </p>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="block w-full bg-primary text-white text-center py-4 px-6 rounded-lg font-bold text-xl hover:bg-ctahover transition-colors mb-4"
                  >
                    {PHONE}
                  </a>
                  <p className="text-sm text-gray-300 text-center mb-6">
                    Call now for a free phone assessment
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full bg-white text-navy text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Request Online Quote
                  </Link>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border mt-8">
                  <h4 className="font-bold text-lg mb-4">Service Areas</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>&bull; New Brunswick</li>
                    <li>&bull; Edison</li>
                    <li>&bull; Piscataway</li>
                    <li>&bull; Woodbridge</li>
                    <li>&bull; Old Bridge</li>
                    <li>&bull; Sayreville</li>
                    <li>&bull; East Brunswick</li>
                    <li>&bull; South Brunswick</li>
                    <li>&bull; Perth Amboy</li>
                    <li>&bull; South Amboy</li>
                    <li>&bull; Metuchen</li>
                    <li>&bull; Plainsboro</li>
                  </ul>
                  <Link
                    href="/service-areas"
                    className="block text-center mt-4 text-primary font-semibold hover:underline"
                  >
                    View All Service Areas &rarr;
                  </Link>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border mt-8">
                  <h4 className="font-bold text-lg mb-4">Related Articles</h4>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/blog/termite-inspection-guide" className="text-primary hover:underline">
                        Complete Termite Inspection Guide for NJ Homeowners
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/tick-prevention-tips" className="text-primary hover:underline">
                        Protecting Your Family from Lyme Disease
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/ant-control-methods" className="text-primary hover:underline">
                        Why DIY Ant Control Often Fails
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-dark text-white py-16">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Home This Spring?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule your free phone assessment today and get ahead of spring pests before they become a problem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_RAW}`}
              className="bg-primary text-white py-4 px-8 rounded-lg font-bold text-xl hover:bg-ctahover transition-colors"
            >
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="bg-navy text-white py-4 px-8 rounded-lg font-bold text-xl hover:bg-navyhover transition-colors border border-white"
            >
              Get Free Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}