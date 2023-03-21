/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["tranmani.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
