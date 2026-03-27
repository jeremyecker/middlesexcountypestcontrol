import type { Metadata } from 'next';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: `Customer Reviews | Middlesex County Pest Control`,
  description: `Reviews from Middlesex County homeowners and businesses. Trusted pest control serving Edison, Woodbridge, New Brunswick, Piscataway, and more since 2018.`,
  alternates: { canonical: `${DOMAIN}/reviews` },
  openGraph: { url: '/reviews' },
};

const reviews = [
  { text: 'Middlesex County Pest Control resolved our termite problem quickly. Highly recommend!', name: 'John D.', location: 'Edison', rating: 5 },
  { text: 'Finally mosquito-free in our Piscataway backyard thanks to this team.', name: 'Sarah L.', location: 'Piscataway', rating: 5 },
  { text: 'Professional and thorough with our ant infestation in Woodbridge. Excellent service.', name: 'Michael S.', location: 'Woodbridge', rating: 5 },
  { text: 'Called about bed bugs and they came out same day. Very impressed with how thorough they were.', name: 'Rachel K.', location: 'New Brunswick', rating: 5 },
  { text: 'Best pest control company in Middlesex County. Used them for 3 years running and always satisfied.', name: 'Tom M.', location: 'Old Bridge', rating: 5 },
  { text: 'Had mice in my basement and they handled it completely. No more droppings, no more sounds at night.', name: 'Linda P.', location: 'East Brunswick', rating: 5 },
  { text: 'Quick response, honest pricing, and the technician explained everything clearly.', name: 'Dave R.', location: 'Sayreville', rating: 5 },
  { text: 'They removed a large yellow jacket nest from our deck safely and professionally.', name: 'Maria T.', location: 'North Brunswick', rating: 5 },
];

export default function ReviewsPage() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: String(reviews.length),
    },
    review: reviews.map(r => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: String(r.rating) },
      author: { '@type': 'Person', name: r.name },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <section className="bg-navy text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Reviews</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What Middlesex County Customers Say</h1>
          <p className="text-blue-100 text-xl max-w-2xl">Trusted by homeowners and businesses across all 25 municipalities in Middlesex County, NJ since 2018.</p>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">&quot;{review.text}&quot;</p>
                <p className="text-dark font-semibold text-sm">— {review.name}, {review.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Become Our Next Satisfied Customer?</h2>
          <p className="text-red-100 text-lg mb-8">Same-day service available throughout Middlesex County, NJ.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded font-bold hover:bg-gray-100 transition-colors">Book Now</Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold">Call {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
