/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // www → non-www canonical redirect
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.middlesexcountypestcontrol.com' }],
        destination: 'https://middlesexcountypestcontrol.com/:path*',
        permanent: true,
      },
      // Old WordPress blog posts
      { source: '/how-to-get-rid-of-mice-in-your-house/', destination: '/blog/signs-you-have-rats-middlesex-county', permanent: true },
      { source: '/signs-of-bed-bugs/', destination: '/blog/how-to-get-rid-of-bed-bugs-new-brunswick-nj', permanent: true },
      { source: '/how-to-get-rid-of-cockroaches/', destination: '/blog/cockroach-problem-nj-apartment', permanent: true },
      { source: '/pest-control-tips/', destination: '/blog/pest-control-tips-edison-woodbridge', permanent: true },
      { source: '/termite-prevention-tips/', destination: '/blog/termite-prevention-middlesex-county', permanent: true },
      { source: '/tick-prevention/', destination: '/blog/tick-season-middlesex-county-nj', permanent: true },
      { source: '/mosquito-control-tips/', destination: '/blog/mosquito-control-edison-piscataway-nj', permanent: true },
      { source: '/rodent-prevention/', destination: '/blog/signs-you-have-rats-middlesex-county', permanent: true },
      // Old WordPress service pages
      { source: '/residential-pest-control/', destination: '/residential', permanent: true },
      { source: '/commercial-pest-control/', destination: '/commercial', permanent: true },
      { source: '/ant-control/', destination: '/services/ants', permanent: true },
      { source: '/termite-control/', destination: '/services/termites', permanent: true },
      { source: '/bed-bug-treatment/', destination: '/services/bed-bugs', permanent: true },
      { source: '/rodent-control/', destination: '/services/rodents', permanent: true },
      { source: '/mice-control/', destination: '/services/rodents', permanent: true },
      { source: '/cockroach-control/', destination: '/services/cockroaches', permanent: true },
      // WordPress pagination & feed patterns
      { source: '/page/:path*', destination: '/blog', permanent: true },
      { source: '/feed/:path*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
