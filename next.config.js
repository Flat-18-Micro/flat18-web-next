/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // Disable asset prefixing in Next.js - we'll handle this with a custom script
  // This prevents double-prefixing issues
  assetPrefix: '',
  // Ensure consistent file hashing across builds
  generateBuildId: async () => {
    // Use a fixed build ID for consistent file names
    return 'stable-build'
  },
  images: {
    unoptimized: true, // Required for static export
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp', 'image/avif'], // Support AVIF for better compression
    minimumCacheTTL: 31536000, // Cache for 1 year
    dangerouslyAllowSVG: true, // Allow SVG for icons
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Disable trailing slashes in URLs
  trailingSlash: false,
  // Disable the automatic static optimization
  experimental: {
    // Enable if you need to use rewrites or redirects
    // skipTrailingSlashRedirect: true,
    // Enable CSS optimization with safeguards
    optimizeCss: true,
  },
  // Ensure consistent output
  webpack: (config, { isServer }) => {
    // Use deterministic chunk and module ids for consistent file names
    config.optimization.moduleIds = 'deterministic';
    config.optimization.chunkIds = 'deterministic';

    return config;
  },
}

module.exports = nextConfig
