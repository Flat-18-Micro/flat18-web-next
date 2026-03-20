import '../styles/globals.css'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Playfair_Display, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import ClientLayout from '@/components/ClientLayout'
import { ThemeProvider } from './providers'
import { defaultMetadata, generateOrganizationJsonLd, generateWebsiteJsonLd, siteConfig } from '@/lib/seo'
import { SUBSCRIPTION_PROMO } from '@/lib/pricing'

// Optimize font loading with better performance settings

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  preload: false, // Non-critical: only used for code elements
  fallback: ['monospace'],
  adjustFontFallback: true,
  weight: ['400', '500'], // Only load needed weights
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  preload: false, // Non-critical: --font-heading uses Inter; Playfair is a fallback variable
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  adjustFontFallback: true,
  weight: ['400', '600', '700'], // Only load needed weights (500 removed - unused)
})

const ChatwootWidget = dynamic(() => import('@/components/ChatwootWidget'), { ssr: false })
const ServiceWorkerRegistration = dynamic(() => import('@/components/ServiceWorkerRegistration'), { ssr: false })
const AnalyticsScripts = dynamic(() => import('@/components/AnalyticsScripts'), { ssr: false })
const LiquidGLLoader = dynamic(() => import('@/components/LiquidGLLoader'), { ssr: false })

export const metadata = defaultMetadata

const organizationJsonLd = generateOrganizationJsonLd()
const websiteJsonLd = generateWebsiteJsonLd()
const language = siteConfig.locale.replace('_', '-')
const saleActive = SUBSCRIPTION_PROMO.enabled

export default function RootLayout({ children }) {
  return (
    <html lang={language} className={`${jetbrainsMono.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* ── Blocking theme script: sets dark/light class before first paint ── */}
        {/* This prevents the flash and removes the need to hide content during mount */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.add(t);document.body&&document.body.classList.add(t);}catch(e){}})();`
          }}
        />

        {/* ── Critical resource hints ── */}
        {/* Preload hero background image – discovered early, directly improves LCP */}
        <link rel="preload" as="image" href="/images/backdrops/bg01-dark.webp" type="image/webp" fetchPriority="high" />
        {/* Preload the two most-used Inter weights so text renders without FOUT */}
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="/fonts/inter-v20-latin/inter-v20-latin-regular.woff2" />
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="/fonts/inter-v20-latin/inter-v20-latin-500.woff2" />

        {/* Bootstrap Icons: defer with media="print" trick to avoid render blocking */}
        <link rel="stylesheet" href="/bootstrap-icons/font/bootstrap-icons.css" media="print" />
        <Script id="bootstrap-icons-css" strategy="afterInteractive">
          {`
            (function() {
              var link = document.querySelector('link[href="/bootstrap-icons/font/bootstrap-icons.css"][media="print"]');
              if (link) {
                link.media = 'all';
              }
            })();
          `}
        </Script>
        <noscript>
          <link rel="stylesheet" href="/bootstrap-icons/font/bootstrap-icons.css" />
        </noscript>
        {/* JSON-LD structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd)
          }}
        />

        {/* JSON-LD structured data for website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd)
          }}
        />
      </head>
      <body className={saleActive ? 'sale-active' : ''}>
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
          <Suspense fallback={null}>
            <ChatwootWidget />
          </Suspense>
          <ServiceWorkerRegistration />
          <AnalyticsScripts />
        </ThemeProvider>
        <LiquidGLLoader />
      </body>
    </html>
  )
}
