/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/services/residential',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
