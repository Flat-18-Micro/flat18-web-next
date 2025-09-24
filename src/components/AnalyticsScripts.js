'use client'

import Script from 'next/script'

const UMAMI_SRC = process.env.NEXT_PUBLIC_UMAMI_SRC || 'https://eu.umami.is/script.js'
const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || '54c1aa36-ac18-426d-ba14-3d5827cfa465'
const ACKEE_SERVER = process.env.NEXT_PUBLIC_ACKEE_SERVER
const ACKEE_DOMAIN_ID = process.env.NEXT_PUBLIC_ACKEE_DOMAIN_ID
const TWITTER_PIXEL_ID = process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID || 'oopi3'
const TWITTER_CONVERSION_ID = process.env.NEXT_PUBLIC_TWITTER_CONVERSION_ID || 'tw-oopi3-qh11e'
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export default function AnalyticsScripts() {
  const shouldLoadAckee = Boolean(ACKEE_SERVER && ACKEE_DOMAIN_ID)
  const shouldLoadMetaPixel = Boolean(META_PIXEL_ID)

  return (
    <>
      {/* Umami Analytics */}
      <Script
        src={UMAMI_SRC}
        data-website-id={UMAMI_WEBSITE_ID}
        strategy="lazyOnload"
        defer
        onError={(e) => console.error('Umami script failed to load:', e)}
      />

      {/* Ackee Analytics */}
      {shouldLoadAckee && (
        <Script
          src={`${ACKEE_SERVER.replace(/\/$/, '')}/tracker.js`}
          data-ackee-server={ACKEE_SERVER}
          data-ackee-domain-id={ACKEE_DOMAIN_ID}
          strategy="lazyOnload"
          async
          onError={(e) => console.error('Ackee script failed to load:', e)}
        />
      )}

      {/* Twitter conversion tracking */}
      <Script
        id="twitter-pixel"
        strategy="lazyOnload"
        onError={(e) => console.error('Twitter pixel failed to load:', e)}
      >
        {`
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          twq('config','${TWITTER_PIXEL_ID}');
        `}
      </Script>

      {/* Twitter conversion tracking event */}
      <Script
        id={`twitter-conversion-${TWITTER_CONVERSION_ID}`}
        strategy="lazyOnload"
        onError={(e) => console.error('Twitter conversion event failed:', e)}
      >
        {`
          try { twq('event','${TWITTER_CONVERSION_ID}',{}); } catch (e) { console.error('twq event error', e); }
        `}
      </Script>

      {/* Meta Pixel */}
      {shouldLoadMetaPixel && (
        <>
          <Script
            id="meta-pixel"
            strategy="lazyOnload"
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

              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>

          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  )
}
