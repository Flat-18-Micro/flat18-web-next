export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/downloads/',
          '/bootstrap-icons/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/downloads/',
          '/bootstrap-icons/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/downloads/',
          '/bootstrap-icons/',
        ],
      },
    ],
    sitemap: 'https://flat18.co.uk/sitemap.xml',
    host: 'https://flat18.co.uk',
  }
}