/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
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
  transpilePackages: [
    "@react-email/render",
    "@react-email/components",
    "@react-email/body",
    "@react-email/container",
    "@react-email/head",
    "@react-email/html",
    "@react-email/img",
    "@react-email/preview",
    "@react-email/section",
    "@react-email/text",
    "js-beautify",
  ],
};

module.exports = nextConfig;
