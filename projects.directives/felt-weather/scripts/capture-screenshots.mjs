import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const outputDir = path.resolve(__dirname, '..', 'screenshots');
const appUrl = process.env.FELT_WEATHER_APP_URL || 'https://felt.flat18.app/';
const chromePath = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const samplePosts = [
  {
    id: 'demo-1',
    source: 'bluesky',
    content: 'The air feels surprisingly fresh after the morning rain. Cool breeze on the river path but still comfortable for the commute.',
    author: 'riverwalker',
    postedAt: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    sentiment: { score: 0.68, comfort: 8, tags: ['fresh-air', 'cool-breeze', 'commute'], classifiedBy: 'demo' },
  },
  {
    id: 'demo-2',
    source: 'reddit',
    content: 'Light drizzle near the station but no proper downpour. Pavements are wet, visibility is fine, and it is warmer than the forecast looked.',
    author: 'cityweatherwatch',
    postedAt: new Date(Date.now() - 37 * 60 * 1000).toISOString(),
    sentiment: { score: 0.22, comfort: 6, tags: ['drizzle', 'mild', 'visibility'], classifiedBy: 'demo' },
  },
  {
    id: 'demo-3',
    source: 'mastodon',
    content: 'Wind picking up around the open squares. Not miserable, but bring a layer if you are staying out after lunch.',
    author: 'localnotes',
    postedAt: new Date(Date.now() - 73 * 60 * 1000).toISOString(),
    sentiment: { score: -0.12, comfort: 5, tags: ['windy', 'layer-up', 'outdoors'], classifiedBy: 'demo' },
  },
  {
    id: 'demo-4',
    source: 'bluesky',
    content: 'Sun came through over the market. The official temperature undersells it; in sheltered streets it feels genuinely pleasant.',
    author: 'boroughbrief',
    postedAt: new Date(Date.now() - 126 * 60 * 1000).toISOString(),
    sentiment: { score: 0.74, comfort: 9, tags: ['sunny-breaks', 'pleasant', 'market'], classifiedBy: 'demo' },
  },
];

function heatmapPoints() {
  const centers = [
    [51.5072, -0.1276, 0.78],
    [51.5155, -0.0922, 0.66],
    [51.5007, -0.1246, 0.56],
    [51.4897, -0.1447, 0.42],
    [51.5287, -0.1016, 0.61],
    [51.4710, -0.4543, 0.32],
    [51.4545, -2.5879, 0.71],
    [52.4862, -1.8904, 0.48],
    [53.4808, -2.2426, 0.38],
    [55.9533, -3.1883, 0.57],
    [53.3498, -6.2603, 0.64],
  ];

  return centers.flatMap(([lat, lng, intensity], idx) => {
    return Array.from({ length: idx < 5 ? 9 : 4 }, (_, i) => ({
      lat: Number((lat + (i % 3 - 1) * 0.032 + Math.floor(i / 3) * 0.008).toFixed(4)),
      lng: Number((lng + (Math.floor(i / 3) - 1) * 0.045 + (i % 3) * 0.007).toFixed(4)),
      intensity: Math.max(0.18, Math.min(0.92, intensity + (i - 4) * 0.018)),
      comfort: Math.round((4 + intensity * 6) * 10) / 10,
      count: 3 + i,
    }));
  });
}

async function mockApi(route) {
  const requestUrl = new URL(route.request().url());
  const pathname = requestUrl.pathname;

  if (pathname === '/api/geo') {
    return route.fulfill({
      json: { located: true, lat: 51.5072, lng: -0.1276, city: 'London', country: 'GB' },
    });
  }

  if (pathname === '/api/heatmap') {
    return route.fulfill({
      json: {
        points: heatmapPoints(),
        hoursBack: 24,
        generatedAt: new Date().toISOString(),
      },
    });
  }

  if (pathname.startsWith('/api/location/')) {
    return route.fulfill({
      json: {
        lat: 51.5072,
        lng: -0.1276,
        weather: {
          temperature: 15.8,
          apparentTemperature: 13.9,
          humidity: 72,
          precipitation: 0.4,
          weatherCode: 61,
          windSpeed: 14.2,
          cloudCover: 68,
          description: 'Light rain',
          timezone: 'Europe/London',
          time: new Date().toISOString(),
        },
        sentiment: {
          avgScore: 0.57,
          avgComfort: 7.6,
          postCount: 184,
          topTags: ['fresh-air', 'mild', 'drizzle', 'sunny-breaks', 'windy'],
          radiusKm: 50,
        },
      },
    });
  }

  if (pathname.startsWith('/api/posts/')) {
    return route.fulfill({
      json: { posts: samplePosts, radiusKm: 50 },
    });
  }

  return route.continue();
}

async function waitForApp(page) {
  await page.goto(appUrl, { waitUntil: 'networkidle' });
  await page.waitForSelector('.leaflet-container');
  await page.waitForSelector('.map-summary strong');
  await page.waitForTimeout(1200);
}

async function run() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: chromePath,
  });

  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 920 },
    deviceScaleFactor: 1,
    geolocation: { latitude: 51.5072, longitude: -0.1276 },
    permissions: ['geolocation'],
  });
  const page = await desktop.newPage();
  await page.route('**/api/**', mockApi);
  await waitForApp(page);
  await page.screenshot({ path: path.join(outputDir, '01-live-felt-weather-map.png'), fullPage: true });

  await page.mouse.click(720, 460);
  await page.waitForSelector('.location-panel');
  await page.waitForSelector('.post-card');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outputDir, '02-location-felt-score-panel.png'), fullPage: true });
  await desktop.close();

  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
    geolocation: { latitude: 51.5072, longitude: -0.1276 },
    permissions: ['geolocation'],
  });
  const mobilePage = await mobile.newPage();
  await mobilePage.route('**/api/**', mockApi);
  await waitForApp(mobilePage);
  await mobilePage.tap('.leaflet-container', { position: { x: 195, y: 390 } });
  await mobilePage.waitForSelector('.location-panel');
  await mobilePage.waitForSelector('.post-card');
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({ path: path.join(outputDir, '03-mobile-location-workflow.png'), fullPage: true });
  await mobile.close();

  await browser.close();
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
