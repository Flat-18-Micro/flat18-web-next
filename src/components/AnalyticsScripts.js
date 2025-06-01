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
