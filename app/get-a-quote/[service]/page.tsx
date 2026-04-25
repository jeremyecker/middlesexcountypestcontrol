import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import { PHONE, DOMAIN, towns } from '@/lib/data';
import { OG_IMAGE } from '@/lib/og';

const SERVICES_INFO: Record<string, { label: string; description: string }> = {
  'ant-exterminator': {
    label: 'Ant Control',
    description: `Licensed ant exterminators serving Middlesex County, NJ. Same-day service available. Call ${PHONE}.`,
  },
  'cockroach-exterminator': {
    label: 'Cockroach Exterminator',
    description: `Licensed cockroach exterminators serving Middlesex County, NJ. Same-day service available. Call ${PHONE}.`,
  },
  'wasp-hornet-removal': {
    label: 'Wasp & Hornet Removal',
    description: `Licensed wasp & hornet removal serving Middlesex County, NJ. Same-day service available. Call ${PHONE}.`,
  },
  'bed-bug-treatment': {
    label: 'Bed Bug Treatment',
    description: `Licensed bed bug exterminators serving Middlesex County, NJ. Heat & chemical options. Call ${PHONE}.`,
  },
  'rodent-control': {
    label: 'Rodent Control',
    description: `Licensed rodent control serving Middlesex County, NJ. Removal + exclusion included. Call ${PHONE}.`,
  },
  'mosquito-treatment': {
    label: 'Mosquito Treatment',
    description: `Licensed mosquito control serving Middlesex County, NJ. Seasonal barrier treatments. Call ${PHONE}.`,
  },
  'termite-treatment': {
    label: 'Termite Treatment',
    description: `Licensed termite treatment serving Middlesex County, NJ. Free inspection included. Call ${PHONE}.`,
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES_INFO).map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}): Promise<Metadata> {
  const svc = SERVICES_INFO[params.service];
  if (!svc) return {};
  const title = `Free ${svc.label} Quote — Middlesex County, NJ`;
  return {
    title: { absolute: title },
    description: svc.description,
    alternates: { canonical: `${DOMAIN}/get-a-quote/${params.service}` },
    openGraph: {
      title,
      description: svc.description,
      url: `${DOMAIN}/get-a-quote/${params.service}`,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Middlesex County pest control' }],
    },
  };
}

export default function ServiceQuotePage({ params }: { params: { service: string } }) {
  const svc = SERVICES_INFO[params.service];
  if (!svc) notFound();

  return (
    <>
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Free {svc.label} Quote — Middlesex County, NJ
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Licensed & insured pest control in Middlesex County. Same-day service available.
            Call <a href={`tel:${PHONE}`} className="text-yellow-400 font-semibold">{PHONE}</a>
          </p>
          <QuoteForm />
        </div>
      </section>

      {/* Town links — fixes orphan pages by providing internal links to all service×town quote pages */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark text-center mb-3">
            {svc.label} Available Throughout Middlesex County
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Select your town for a free, same-day {svc.label.toLowerCase()} quote.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {towns.map(town => (
              <Link
                key={town.slug}
                href={`/get-a-quote/${params.service}/${town.slug}`}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-dark hover:bg-primary hover:text-white hover:border-primary transition-colors text-center"
              >
                {town.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600">
            <Link href="/get-a-quote" className="text-blue-600 hover:underline">← Back to Get a Quote</Link>
          </p>
        </div>
      </section>
    </>
  );
}
