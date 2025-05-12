/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'wisedom.ai'],
  },
  async redirects() {
    return [
      {
        source: '/app',
        destination: 'https://app.wisedom.ai',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 