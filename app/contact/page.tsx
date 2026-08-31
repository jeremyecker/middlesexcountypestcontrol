import type { Metadata } from 'next';
import { getOpenGraph } from '@/lib/og';
import { DOMAIN, PHONE } from '@/lib/data';
import ContactPageClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Middlesex County Pest Control | Free Quote',
  description: `Free pest control quote in Middlesex County, NJ. Same-day service in all 25 municipalities. Call ${PHONE} or submit our online form.`,
  alternates: { canonical: `${DOMAIN}/contact` },
  openGraph: getOpenGraph('/contact'),
};

export default function ContactPage() {
  return <ContactPageClient />;
}
