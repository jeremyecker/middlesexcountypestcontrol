import type { Metadata } from 'next';
import { SITE_NAME } from './data';

export const OG_IMAGE = '/og-default.jpg';

export function getOpenGraph(url: string): Metadata['openGraph'] {
  return {
    type: 'website',
    locale: 'en_US',
    url,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Middlesex County NJ residential neighborhood',
      },
    ],
  };
}
