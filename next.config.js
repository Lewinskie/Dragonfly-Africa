/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "dist",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      // "http://aviationkenya.org",
      // "https://www.afraa.org",
      // "https://www.afbaa.org",
      // "*",
    ],
  },
};

module.exports = nextConfig;
