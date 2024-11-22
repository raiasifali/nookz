import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["c.animaapp.com"], // Add the external domain here
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.nookz.co.uk',
          },
        ],
        destination: 'https://nookz.co.uk/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'protocol',
            value: 'http',
          },
        ],
        destination: 'https://nookz.co.uk/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
