/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
