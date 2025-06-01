// Enhanced Service Worker for Flat 18 Website with Performance Optimizations
const CACHE_NAME = 'flat18-cache-v2'; // Increment cache version
const STATIC_CACHE_NAME = 'flat18-static-v2';
const IMAGES_CACHE_NAME = 'flat18-images-v2';
const FONTS_CACHE_NAME = 'flat18-fonts-v2';

// Resources to cache immediately on install
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/bootstrap-icons/font/bootstrap-icons.css',
  '/bootstrap-icons/font/bootstrap-icons.woff2',
  '/images/favicon.png',
  '/images/webclip.png',
  '/images/flat18_256x256.avif',
];

// Portfolio images to cache
const PORTFOLIO_IMAGES = [
  '/images/portfolio-graphics/wallet-scrutiny.webp',
  '/images/portfolio-graphics/btcpayserver.webp',
  '/images/portfolio-graphics/f18-pay.webp',
  '/images/portfolio-graphics/hashboard.webp',
  '/images/portfolio-graphics/zettahash.webp',
  '/images/portfolio-graphics/dvote.webp',
  // Also cache AVIF versions
  '/images/portfolio-graphics/wallet-scrutiny.avif',
  '/images/portfolio-graphics/btcpayserver.avif',
  '/images/portfolio-graphics/f18-pay.avif',
  '/images/portfolio-graphics/hashboard.avif',
  '/images/portfolio-graphics/zettahash.avif',
  '/images/portfolio-graphics/dvote.avif',
];

// Install event - cache critical assets immediately
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // Cache critical resources
      caches.open(STATIC_CACHE_NAME).then(cache => {
        console.log('Caching critical static resources');
        return cache.addAll(CRITICAL_RESOURCES);
      }),

      // Cache portfolio images
      caches.open(IMAGES_CACHE_NAME).then(cache => {
        console.log('Caching portfolio images');
        return cache.addAll(PORTFOLIO_IMAGES);
      })
    ])
    .then(() => {
      // Skip waiting to activate the new service worker immediately
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches and take control
self.addEventListener('activate', event => {
  const currentCaches = [STATIC_CACHE_NAME, IMAGES_CACHE_NAME, FONTS_CACHE_NAME];

  event.waitUntil(
    // Clean up old cache versions
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!currentCaches.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      // Take control of all clients
      return self.clients.claim();
    })
  );
});

// Fetch event - with improved caching strategies
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip analytics and external resources
  if (
    url.hostname.includes('umami.is') ||
    url.hostname.includes('chatwoot')
  ) {
    return;
  }

  // Different caching strategies based on resource type
  if (url.pathname.match(/\.(jpe?g|png|gif|svg|webp|avif)$/)) {
    // Images: Cache first, network fallback with background update
    event.respondWith(cacheFirstWithRefresh(event.request, IMAGES_CACHE_NAME));
  }
  else if (url.pathname.match(/\.(woff2?|ttf|otf|eot)$/)) {
    // Fonts: Cache first, network fallback
    event.respondWith(cacheFirst(event.request, FONTS_CACHE_NAME));
  }
  else if (url.pathname.startsWith('/_next/static/')) {
    // Static assets: Cache first, network fallback
    event.respondWith(cacheFirst(event.request, STATIC_CACHE_NAME));
  }
  else {
    // HTML and other resources: Network first with cache fallback
    event.respondWith(networkFirstWithCache(event.request, STATIC_CACHE_NAME));
  }
});

// Cache-first strategy with background refresh
async function cacheFirstWithRefresh(request, cacheName) {
  const cachedResponse = await caches.match(request);

  // Return cached response immediately if available
  if (cachedResponse) {
    // Update cache in the background
    fetch(request)
      .then(response => {
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(cacheName).then(cache => {
            cache.put(request, responseToCache);
          });
        }
      })
      .catch(() => {
        // Silently fail on background update errors
      });

    return cachedResponse;
  }

  // If not in cache, fetch from network and cache
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      const responseToCache = networkResponse.clone();
      caches.open(cacheName).then(cache => {
        cache.put(request, responseToCache);
      });
    }
    return networkResponse;
  } catch (error) {
    // Network error, no fallback available
    console.error('Fetch failed:', error);
    return new Response('Network error', { status: 408, headers: { 'Content-Type': 'text/plain' } });
  }
}

// Cache-first strategy
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      const responseToCache = networkResponse.clone();
      caches.open(cacheName).then(cache => {
        cache.put(request, responseToCache);
      });
    }
    return networkResponse;
  } catch (error) {
    console.error('Fetch failed:', error);
    return new Response('Network error', { status: 408, headers: { 'Content-Type': 'text/plain' } });
  }
}

// Network-first strategy with cache fallback
async function networkFirstWithCache(request, cacheName) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      // Cache successful responses
      const responseToCache = networkResponse.clone();
      caches.open(cacheName).then(cache => {
        cache.put(request, responseToCache);
      });
      return networkResponse;
    }
  } catch (error) {
    // Network failed, try cache
    console.log('Network request failed, falling back to cache:', request.url);
  }

  // If network fails or returns error, use cache
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  // If nothing in cache either, return simple offline page
  if (request.headers.get('Accept').includes('text/html')) {
    return new Response('You are offline. Please check your connection.', {
      status: 503,
      headers: { 'Content-Type': 'text/html' }
    });
  }

  // For non-HTML resources, return a simple error
  return new Response('Resource unavailable offline', {
    status: 503,
    headers: { 'Content-Type': 'text/plain' }
  });
}
