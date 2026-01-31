import '../styles/globals.css'
import { Sora, Inter, Playfair_Display } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import ChatwootWidget from '@/components/ChatwootWidget'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import Script from 'next/script'
import AnalyticsScripts from '@/components/AnalyticsScripts'
import ClientLayout from '@/components/ClientLayout'
import { ThemeProvider } from './providers'

// Optimize font loading with better performance settings
const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
  weight: ['400', '500', '700'], // Only load needed weights
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700'], // Only load needed weights
})

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

export const metadata = {
  title: 'Flat 18 - Senior Design + Engineering for Founders',
  description: 'For founders tired of chasing progress. Senior design and engineering to ship conversion-ready websites and MVPs in 2-12 weeks.',
  metadataBase: new URL('https://flat18.co.uk'),
  keywords: 'product design, UX design, web development, MVP build, conversion design, SaaS, fintech, web3, startup agency, next.js development, react development',
  alternates: {
    canonical: 'https://flat18.co.uk',
  },
  authors: [{ name: 'Flat 18', url: 'https://flat18.co.uk' }],
  category: 'Web Development',
  openGraph: {
    title: 'Flat 18 — Design + Engineering for Founders',
    description: 'For founders tired of chasing progress. Senior design and engineering to ship conversion-ready websites and MVPs in 2-12 weeks.',
    images: [
      {
        url: '/static/advert-flat-18-f18-og_1-p-2000.webp',
        width: 1200,
        height: 630,
        alt: 'Flat 18 - Design + Engineering for Founders',
      }
    ],
    locale: 'en_GB',
    type: 'website',
    site_name: 'Flat 18',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flat 18 — Design + Engineering for Founders',
    description: 'For founders tired of chasing progress. Senior design and engineering to ship conversion-ready websites and MVPs in 2-12 weeks.',
    images: ['/static/advert-flat-18-f18-og_1-p-2000.webp'],
    creator: '@f18_dev',
    site: '@f18_dev',
  },
  verification: {
    // Remove placeholder verification code - add a real one when available
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}>
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Flat 18",
              "url": "https://flat18.co.uk",
              "logo": "https://flat18.co.uk/images/flat18_256x256.avif",
              "sameAs": [
                "https://x.com/f18_dev",
                "https://github.com/vswee"
              ],
              "description": "For founders tired of chasing progress. Senior design and engineering to ship conversion-ready websites and MVPs in 2-12 weeks.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "United Kingdom"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://flat18.co.uk/#chat"
              }
            })
          }}
        />

        {/* JSON-LD structured data for website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://flat18.co.uk",
              "name": "Flat 18 - Design + Engineering for Founders",
              "description": "For founders tired of chasing progress. Senior design and engineering to ship conversion-ready websites and MVPs in 2-12 weeks.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://flat18.co.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
          <ChatwootWidget />
          <ServiceWorkerRegistration />
          <AnalyticsScripts />
        </ThemeProvider>
      </body>
    </html>
  )
}
