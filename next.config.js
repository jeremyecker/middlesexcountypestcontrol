/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // www → apex
      { source: '/:path*', has: [{ type: 'host', value: 'www.middlesexcountypestcontrol.com' }], destination: 'https://middlesexcountypestcontrol.com/:path*', permanent: true },
      // Old WordPress blog post redirects
      { source: '/bugs-be-gone-commercial-pest-control/', destination: '/blog/commercial-pest-control-nj-restaurants', permanent: true },
      { source: '/bugs-be-gone-commercial-pest-control', destination: '/blog/commercial-pest-control-nj-restaurants', permanent: true },
      { source: '/stink-bugs-invasion/', destination: '/blog', permanent: true },
      { source: '/stink-bugs-invasion', destination: '/blog', permanent: true },
      { source: '/eco-friendly-pest-control/', destination: '/blog', permanent: true },
      { source: '/eco-friendly-pest-control', destination: '/blog', permanent: true },
      { source: '/super-rats/', destination: '/blog/signs-you-have-rats-middlesex-county', permanent: true },
      { source: '/super-rats', destination: '/blog/signs-you-have-rats-middlesex-county', permanent: true },
      { source: '/ticks-lyme-disease/', destination: '/blog/tick-season-middlesex-county-nj', permanent: true },
      { source: '/ticks-lyme-disease', destination: '/blog/tick-season-middlesex-county-nj', permanent: true },
      { source: '/diy-pest-control/', destination: '/blog', permanent: true },
      { source: '/diy-pest-control', destination: '/blog', permanent: true },
      { source: '/pest-control-myths/', destination: '/blog', permanent: true },
      { source: '/pest-control-myths', destination: '/blog', permanent: true },
      { source: '/winter-pests/', destination: '/blog', permanent: true },
      { source: '/winter-pests', destination: '/blog', permanent: true },
      { source: '/5-destructive-pests/', destination: '/blog/termite-prevention-middlesex-county', permanent: true },
      { source: '/5-destructive-pests', destination: '/blog/termite-prevention-middlesex-county', permanent: true },
      { source: '/pest-behavior/', destination: '/blog', permanent: true },
      { source: '/pest-behavior', destination: '/blog', permanent: true },
      // Old WordPress category/tag pages
      { source: '/category/:slug*', destination: '/', permanent: true },
      { source: '/tag/:slug*', destination: '/', permanent: true },
      // Old WordPress service pages
      { source: '/services/residential/', destination: '/residential', permanent: true },
      { source: '/services/commercial/', destination: '/commercial', permanent: true },
      // Old WordPress artifacts
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/feed/', destination: '/blog', permanent: true },
      { source: '/feed', destination: '/blog', permanent: true },
      { source: '/feed/:path*', destination: '/', permanent: true },
      // Additional legacy WordPress URLs
      { source: '/how-to-get-rid-of-mice-in-your-house/', destination: '/blog/signs-you-have-rats-middlesex-county', permanent: true },
      { source: '/how-to-get-rid-of-mice-in-your-house', destination: '/blog/signs-you-have-rats-middlesex-county', permanent: true },
      { source: '/signs-of-bed-bugs/', destination: '/blog/how-to-get-rid-of-bed-bugs-new-brunswick-nj', permanent: true },
      { source: '/signs-of-bed-bugs', destination: '/blog/how-to-get-rid-of-bed-bugs-new-brunswick-nj', permanent: true },
      { source: '/how-to-get-rid-of-cockroaches/', destination: '/blog/cockroach-problem-nj-apartment', permanent: true },
      { source: '/how-to-get-rid-of-cockroaches', destination: '/blog/cockroach-problem-nj-apartment', permanent: true },
      { source: '/pest-control-tips/', destination: '/blog/pest-control-tips-edison-woodbridge', permanent: true },
      { source: '/pest-control-tips', destination: '/blog/pest-control-tips-edison-woodbridge', permanent: true },
      { source: '/termite-prevention-tips/', destination: '/blog/termite-prevention-middlesex-county', permanent: true },
      { source: '/termite-prevention-tips', destination: '/blog/termite-prevention-middlesex-county', permanent: true },
      { source: '/tick-prevention/', destination: '/blog/tick-season-middlesex-county-nj', permanent: true },
      { source: '/tick-prevention', destination: '/blog/tick-season-middlesex-county-nj', permanent: true },
      { source: '/mosquito-control-tips/', destination: '/blog/mosquito-control-edison-piscataway-nj', permanent: true },
      { source: '/mosquito-control-tips', destination: '/blog/mosquito-control-edison-piscataway-nj', permanent: true },
      { source: '/rodent-prevention/', destination: '/blog/signs-you-have-rats-middlesex-county', permanent: true },
      { source: '/rodent-prevention', destination: '/blog/signs-you-have-rats-middlesex-county', permanent: true },
      { source: '/residential-pest-control/', destination: '/residential', permanent: true },
      { source: '/residential-pest-control', destination: '/residential', permanent: true },
      { source: '/commercial-pest-control/', destination: '/commercial', permanent: true },
      { source: '/commercial-pest-control', destination: '/commercial', permanent: true },
      { source: '/ant-control/', destination: '/services/ants', permanent: true },
      { source: '/ant-control', destination: '/services/ants', permanent: true },
      { source: '/termite-control/', destination: '/services/termites', permanent: true },
      { source: '/termite-control', destination: '/services/termites', permanent: true },
      { source: '/bed-bug-treatment/', destination: '/services/bed-bugs', permanent: true },
      { source: '/bed-bug-treatment', destination: '/services/bed-bugs', permanent: true },
      { source: '/rodent-control/', destination: '/services/rodents', permanent: true },
      { source: '/rodent-control', destination: '/services/rodents', permanent: true },
      { source: '/mice-control/', destination: '/services/rodents', permanent: true },
      { source: '/mice-control', destination: '/services/rodents', permanent: true },
      { source: '/cockroach-control/', destination: '/services/cockroaches', permanent: true },
      { source: '/cockroach-control', destination: '/services/cockroaches', permanent: true },
      { source: '/page/:path*', destination: '/blog', permanent: true },
    ];
  },
};
module.exports = nextConfig;
