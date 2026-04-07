/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/services',
        destination: '/services/residential',
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:city/pest-library/:slug',
          destination: '/city-pest/:city/:slug',
        },
      ],
    };
  },
};

module.exports = nextConfig;