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
      />
      
      {/* Ackee Analytics */}
      <Script
        src="https://master--melodic-taffy-1a4c18.netlify.app/tracker.js"
        data-ackee-server="https://master--melodic-taffy-1a4c18.netlify.app"
        data-ackee-domain-id="b28e2698-bf04-4e23-9075-a5f7110affe0"
        strategy="afterInteractive"
        async
      />
      
      {/* Twitter conversion tracking */}
      <Script id="twitter-pixel" strategy="afterInteractive">
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
