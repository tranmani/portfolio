/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tranmani.com",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['@react-email/render', 'js-beautify'],
  },
};

module.exports = nextConfig;
