import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_NAME, DOMAIN, PHONE, GA4_ID } from '@/lib/data';

const OG_IMAGE = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&q=80';

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: `${SITE_NAME} | Licensed Pest Exterminators in Middlesex County, NJ`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `Expert pest control services in Middlesex County, NJ. Bed bugs, rodents, termites, mosquitoes and more. Call ${PHONE} for same-day service.`,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: DOMAIN,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Middlesex County NJ residential neighborhood',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}
        </Script>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
