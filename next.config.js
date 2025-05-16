/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp', 'image/avif'], // Support AVIF for better compression
    minimumCacheTTL: 31536000, // Cache for 1 year
    dangerouslyAllowSVG: true, // Allow SVG for icons
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Set the base path if your site is not hosted at the root of the domain
  // Uncomment and set this to your repository name if deploying to GitHub Pages
  // Example: basePath: '/Flat18.co.uk',
  // basePath: '/repo-name',
  // Disable trailing slashes in URLs
  trailingSlash: false,
  // Disable the automatic static optimization
  experimental: {
    // Enable if you need to use rewrites or redirects
    // skipTrailingSlashRedirect: true,
    // Enable CSS optimization with safeguards
    optimizeCss: true,
  },
}

module.exports = nextConfig
