import type { Metadata } from 'next';
import { DOMAIN, PHONE } from '@/lib/data';
import ContactPageClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Middlesex County Pest Control | Free Inspection',
  description: `Book a free pest inspection in Middlesex County, NJ. Same-day service available throughout all 25 municipalities. Call ${PHONE} or submit our online form.`,
  alternates: { canonical: `${DOMAIN}/contact` },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
