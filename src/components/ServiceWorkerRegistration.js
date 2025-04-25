'use client'

import { useEffect } from 'react'

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    // Only register service worker in production and if the browser supports it
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      // Wait until the page is fully loaded
      const registerSW = () => {
        try {
          navigator.serviceWorker.register('/sw.js')
            .then(registration => {
              console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(error => {
              console.log('ServiceWorker registration failed: ', error);
            });
        } catch (error) {
          console.log('ServiceWorker registration error: ', error);
        }
      };

      // Check if the page is already loaded
      if (document.readyState === 'complete') {
        registerSW();
      } else {
        window.addEventListener('load', registerSW);
        // Clean up event listener
        return () => {
          window.removeEventListener('load', registerSW);
        };
      }
    }
  }, []);

  return null;
}
