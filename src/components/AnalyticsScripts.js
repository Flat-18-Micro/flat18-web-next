'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export default function AnalyticsScripts() {
  // This useEffect ensures analytics scripts are properly loaded
  // and handles any errors that might occur during loading
  useEffect(() => {
    // Function to check if analytics scripts are loaded
    const checkAnalyticsLoaded = () => {
      try {
        // Check if Ackee is loaded and initialize if needed
        if (typeof window.ackeeTracker === 'undefined' &&
            document.querySelector('[data-ackee-server]')) {
          console.log('Ackee not loaded, attempting to reload')

          // Get Ackee configuration from DOM
          const serverUrl = document.querySelector('[data-ackee-server]')?.getAttribute('data-ackee-server')
          const domainId = document.querySelector('[data-ackee-domain-id]')?.getAttribute('data-ackee-domain-id')

          if (serverUrl && domainId) {
            // Manually load Ackee if needed
            const script = document.createElement('script')
            script.src = `${serverUrl}/tracker.js`
            script.async = true
            script.onload = () => {
              console.log('Ackee script manually loaded')
            }
            document.head.appendChild(script)
          }
        }
      } catch (error) {
        console.error('Error checking analytics:', error)
      }
    }

    // Check after a delay to ensure scripts have had time to load
    const timeoutId = setTimeout(checkAnalyticsLoaded, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      {/* Umami Analytics */}
      <Script
        src="https://eu.umami.is/script.js"
        data-website-id="54c1aa36-ac18-426d-ba14-3d5827cfa465"
        strategy="afterInteractive"
        defer
        onError={(e) => console.error('Umami script failed to load:', e)}
      />

      {/* Ackee Analytics */}
      <Script
        src="https://master--melodic-taffy-1a4c18.netlify.app/tracker.js"
        data-ackee-server="https://master--melodic-taffy-1a4c18.netlify.app"
        data-ackee-domain-id="b28e2698-bf04-4e23-9075-a5f7110affe0"
        strategy="afterInteractive"
        async
        onError={(e) => console.error('Ackee script failed to load:', e)}
        onLoad={() => console.log('Ackee script loaded successfully')}
      />

      {/* Twitter conversion tracking */}
      <Script
        id="twitter-pixel"
        strategy="afterInteractive"
        onError={(e) => console.error('Twitter pixel failed to load:', e)}
      >
        {`
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          twq('config','oopi3');
        `}
      </Script>
    </>
  )
}
