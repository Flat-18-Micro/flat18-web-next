'use client'

import Script from 'next/script'

export default function AssetPrefixScript() {
  return (
    <Script
      id="asset-prefix-fix"
      strategy="afterInteractive"
    >
      {`
        (function() {
          // Fix for missing CSS and JS files in static export
          // This script runs before any other scripts and fixes paths
          try {
            // Only run in production
            if (window.location.hostname === 'flat18.co.uk' ||
                window.location.hostname === 'www.flat18.co.uk') {

              // Function to fix links in the document
              function fixLinks() {
                // Fix CSS links
                document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
                  if (link.href && link.href.includes('/_next/static/css/')) {
                    const originalHref = link.getAttribute('href');
                    if (originalHref && !originalHref.startsWith('https://')) {
                      link.href = 'https://flat18.co.uk' + originalHref;
                    }
                  }
                });

                // Fix script links
                document.querySelectorAll('script').forEach(script => {
                  if (script.src && script.src.includes('/_next/static/chunks/')) {
                    const originalSrc = script.getAttribute('src');
                    if (originalSrc && !originalSrc.startsWith('https://')) {
                      script.src = 'https://flat18.co.uk' + originalSrc;
                    }
                  }
                });
              }

              // Run immediately
              fixLinks();

              // Also run after DOM is loaded to catch any dynamically added elements
              document.addEventListener('DOMContentLoaded', fixLinks);
            }
          } catch (e) {
            console.error('Error in asset prefix fix script:', e);
          }
        })();
      `}
    </Script>
  )
}
