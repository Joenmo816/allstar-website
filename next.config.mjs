/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.allstarpestkc.com",
          },
        ],
        destination: "https://allstarpestkc.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
