'use client'

import Script from 'next/script'

export default function AnalyticsScripts() {

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

      {/* Twitter conversion tracking event */}
      <Script
        id="twitter-conversion-tw-oopi3-qh11e"
        strategy="afterInteractive"
        onError={(e) => console.error('Twitter conversion event failed:', e)}
      >
        {`
          // Fire conversion event once after initial load
          try { twq('event','tw-oopi3-qh11e',{}); } catch (e) { console.error('twq event error', e); }
        `}
      </Script>

      {/* Meta Pixel */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        onError={(e) => console.error('Meta Pixel failed to load:', e)}
      >
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          // Initialize Meta Pixel - Replace with your actual Pixel ID
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Meta Pixel noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  )
}
