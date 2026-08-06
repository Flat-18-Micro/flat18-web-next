const isStaticExport = process.env.STATIC_EXPORT === 'true'
const assetCacheControl = process.env.NODE_ENV === 'development'
  ? 'no-store'
  : 'public, max-age=31536000, immutable'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    unoptimized: isStaticExport,
  },
  trailingSlash: false,
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: assetCacheControl,
          },
        ],
      },
      {
        source: '/:path*\.(js|css|woff2|json|avif|webp|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: assetCacheControl,
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: assetCacheControl,
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: assetCacheControl,
          },
        ],
      },
    ]
  },
}

if (isStaticExport) {
  nextConfig.output = 'export'
}

module.exports = nextConfig
