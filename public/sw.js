// Service Worker for Flat 18 Website
const CACHE_NAME = 'flat18-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/bootstrap-icons/font/bootstrap-icons.css',
  '/images/favicon.png',
  '/images/webclip.png',
  '/images/portfolio-graphics/wallet-scrutiny.webp',
  '/images/portfolio-graphics/btcpayserver.webp',
  '/images/portfolio-graphics/f18-pay.webp',
  '/images/portfolio-graphics/hashboard.webp',
  '/images/portfolio-graphics/zettahash.webp',
  '/images/portfolio-graphics/dvote.webp',
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        // Only cache GET requests
        if (fetchRequest.method !== 'GET') {
          return fetch(fetchRequest);
        }
        
        return fetch(fetchRequest).then(
          response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                // Don't cache analytics or external resources
                if (!event.request.url.includes('umami.is') && 
                    !event.request.url.includes('melodic-taffy') &&
                    !event.request.url.includes('chatwoot')) {
                  cache.put(event.request, responseToCache);
                }
              });
            
            return response;
          }
        );
      })
  );
});
