/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverComponentsExternalPackages: ['jest']
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
