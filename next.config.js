/** @type {import('next').NextConfig} */
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
  // Uncomment and set this to your repository name if deploying to GitHub Pages
  // Example: basePath: '/Flat18.co.uk',
  // basePath: '/repo-name',
  // Disable trailing slashes in URLs
  trailingSlash: false,
  // Disable the automatic static optimization
  experimental: {
    // Enable if you need to use rewrites or redirects
    // skipTrailingSlashRedirect: true,
    optimizeCss: true, // Uses Critters to inline critical CSS
  },
}

module.exports = nextConfig
