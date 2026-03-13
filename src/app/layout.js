import '../styles/globals.css'
import { Suspense } from 'react'
import { Playfair_Display, JetBrains_Mono } from 'next/font/google'
import ChatwootWidget from '@/components/ChatwootWidget'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import Script from 'next/script'
import AnalyticsScripts from '@/components/AnalyticsScripts'
import ClientLayout from '@/components/ClientLayout'
import { ThemeProvider } from './providers'
import { defaultMetadata, generateOrganizationJsonLd, generateWebsiteJsonLd, siteConfig } from '@/lib/seo'

// Optimize font loading with better performance settings

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  preload: true,
  fallback: ['monospace'],
  adjustFontFallback: true,
  weight: ['400', '500'], // Only load needed weights
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700'], // Only load needed weights
})

export const metadata = defaultMetadata

const organizationJsonLd = generateOrganizationJsonLd()
const websiteJsonLd = generateWebsiteJsonLd()
const language = siteConfig.locale.replace('_', '-')

export default function RootLayout({ children }) {
  return (
    <html lang={language} className={`${jetbrainsMono.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="preload" as="style" href="/bootstrap-icons/font/bootstrap-icons.css" />
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
      <body>
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
        <Script src="/scripts/html2canvas.min.js" strategy="afterInteractive" />
        <Script src="/scripts/liquidGL.js" strategy="afterInteractive" />
        <Script src="/scripts/liquidgl-init.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
