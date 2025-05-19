/**
 * This script fixes asset paths in HTML files after the Next.js build
 * It adds the domain prefix to all asset paths and ensures they load correctly
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Domain to use for asset paths
const DOMAIN = 'https://flat18.co.uk';

// Function to fix asset paths in HTML files
async function fixAssetPaths() {
  console.log('Fixing asset paths in HTML files...');

  // Find all HTML files in the out directory
  const htmlFiles = glob.sync('out/**/*.html');

  // Process each HTML file
  for (const file of htmlFiles) {
    try {
      const filePath = path.resolve(file);
      let content = fs.readFileSync(filePath, 'utf8');

      // Fix CSS links
      content = content.replace(
        /href="\/_next\/static\/css\/([^"]+)"/g,
        `href="${DOMAIN}/_next/static/css/$1"`
      );

      // Fix JS links
      content = content.replace(
        /src="\/_next\/static\/chunks\/([^"]+)"/g,
        `src="${DOMAIN}/_next/static/chunks/$1"`
      );

      // Fix font preloads
      content = content.replace(
        /href="\/_next\/static\/media\/([^"]+)"/g,
        `href="${DOMAIN}/_next/static/media/$1"`
      );

      // Fix polyfills
      content = content.replace(
        /src="\/_next\/static\/([^\/]+)\/([^"]+)"/g,
        `src="${DOMAIN}/_next/static/$1/$2"`
      );

      // Add a script to fix dynamic asset loading
      const assetFixScript = `
<script>
(function() {
  // Fix for missing CSS and JS files in static export
  try {
    // Function to fix links in the document
    function fixLinks() {
      // Fix CSS links
      document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        if (link.href && link.href.includes('/_next/static/css/') && !link.href.startsWith('${DOMAIN}')) {
          link.href = '${DOMAIN}' + new URL(link.href).pathname;
        }
      });
      
      // Fix script links
      document.querySelectorAll('script').forEach(script => {
        if (script.src && script.src.includes('/_next/static/') && !script.src.startsWith('${DOMAIN}')) {
          script.src = '${DOMAIN}' + new URL(script.src).pathname;
        }
      });

      // Fix dynamically loaded chunks
      if (window.__NEXT_DATA__ && window.__NEXT_DATA__.buildId) {
        // Patch the Next.js chunk loader
        const originalNextLoad = window.next && window.next.router && window.next.router.pageLoader && window.next.router.pageLoader.loadPage;
        if (originalNextLoad && typeof originalNextLoad === 'function') {
          window.next.router.pageLoader.loadPage = function() {
            const result = originalNextLoad.apply(this, arguments);
            if (result && result.then) {
              return result.catch(err => {
                // If loading fails, try with the domain prefix
                console.warn('Failed to load chunk, retrying with domain prefix:', err);
                // Add logic to retry with domain prefix
                return Promise.reject(err);
              });
            }
            return result;
          };
        }
      }
    }
    
    // Run immediately
    fixLinks();
    
    // Also run after DOM is loaded to catch any dynamically added elements
    document.addEventListener('DOMContentLoaded', fixLinks);
    
    // Monitor for dynamically added elements
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          fixLinks();
        }
      });
    });
    
    // Start observing the document
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  } catch (e) {
    console.error('Error in asset fix script:', e);
  }
})();
</script>
`;

      // Add the script right after the opening head tag
      content = content.replace('<head>', '<head>' + assetFixScript);

      // Write the modified content back to the file
      fs.writeFileSync(filePath, content);
      console.log(`Fixed asset paths in ${file}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  console.log('Asset path fixing complete!');
}

// Run the script
fixAssetPaths().catch(console.error);
