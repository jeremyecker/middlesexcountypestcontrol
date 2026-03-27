import type { Metadata } from 'next';
import { getOpenGraph } from '@/lib/og';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogPosts, PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: `Pest Control Blog`,
  description: `Expert pest control tips, guides, and advice for Middlesex County, NJ homeowners and businesses. Learn about bed bugs, rodents, termites, and more.`,
  alternates: { canonical: `${DOMAIN}/blog` },
  openGraph: getOpenGraph('/blog'),
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-dark text-white py-16">
        <div className="container-main">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pest Control Tips & Resources</h1>
          <p className="text-gray-300 text-xl max-w-2xl">Expert advice from Middlesex County's local pest control professionals. Covering bed bugs, rodents, termites, and more.</p>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">{post.category}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-xs text-gray-500">{post.readTime} read</span>
                  </div>
                  <h2 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-xs">
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <span className="text-primary text-sm font-semibold flex items-center gap-1">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Pest Problem Right Now?</h2>
          <p className="text-gray-200 text-lg mb-8">Don't wait. We offer same-day service throughout Middlesex County, NJ.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-ctahover transition-colors">Book Now</Link>
            <a href={`tel:${PHONE_RAW}`} className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-navyhover transition-colors">Call {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
