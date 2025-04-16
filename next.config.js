/** @type {import('next').NextConfig} */
const CrittersPlugin = require('critters');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp'],
  },
  // Set the base path if your site is not hosted at the root of the domain
  // basePath: '/repo-name',
  // Disable trailing slashes in URLs
  trailingSlash: false,
  // Disable the automatic static optimization
  experimental: {
    // Enable if you need to use rewrites or redirects
    // skipTrailingSlashRedirect: true,
    optimizeCss: true, // Uses Critters to inline critical CSS
    // Reduce CSS size by removing unused rules
    cssMinifier: 'cssnano',
  },

  // Add webpack configuration for CSS optimization
  webpack: (config, { dev, isServer }) => {
    // Only run in production build on the client
    if (!dev && !isServer) {
      // Add the Critters plugin to inline critical CSS
      config.plugins.push(
        new CrittersPlugin({
          // Inline all styles without any size threshold
          preload: 'media',
          // Don't inline anything that would just be wasted bytes
          pruneSource: true,
          // Reduce size by removing unused rules
          reduceInlineStyles: true,
          // Don't inline external stylesheets
          inlineThreshold: 0,
        })
      );
    }

    return config;
  },
}

module.exports = nextConfig
