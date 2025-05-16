export default function sitemap() {
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

  // Create the sitemap entries
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}