/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverComponentsExternalPackages: ['jest']
  },
  webpack: (config) => {
    config.experiments.topLevelAwait = true;
    return config;
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
