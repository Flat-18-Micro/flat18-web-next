import { NextResponse } from 'next/server';

export async function GET() {
  // Base URL for the site
  const baseUrl = 'https://flat18.co.uk';

  // Define all the routes for the sitemap
  const routes = [
    '',
    '/services/web-development',
    '/services/web3-defi',
    '/services/ai-development',
    '/services/prompt-engineering',
    '/services/api-integration',
    '/pricing',
    '/portfolio',
    '/ease-of-communication-standard',
    '/terms',
    '/privacy',
  ];

  // Create the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  // Return the XML with the correct content type
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
