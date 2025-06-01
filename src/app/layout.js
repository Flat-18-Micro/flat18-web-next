import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Sora, Inter, Playfair_Display } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import ChatwootWidget from '@/components/ChatwootWidget'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import Script from 'next/script'
import AnalyticsScripts from '@/components/AnalyticsScripts'
import ClientLayout from '@/components/ClientLayout'

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
  variable: '--font-mono',
  preload: true,
  fallback: ['monospace'],
  adjustFontFallback: true,
  weight: ['400', '500'], // Only load needed weights
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700'], // Only load needed weights
})

export const metadata = {
  title: 'Flat 18 - Web3 & DeFi Development Agency',
  description: 'design and development agency specializing in Web3, DeFi, BTCPayServer, crypto security, and full-stack development for blockchain entrepreneurs and startups.',
  metadataBase: new URL('https://flat18.co.uk'),
  keywords: 'web3 development, defi design, crypto security, btcpayserver, blockchain apps, wallet scrutiny, full-stack development, design agency, next.js development, react development, crypto website, blockchain development, web3 design, defi dashboard, bitcoin payment integration',
  alternates: {
    canonical: 'https://flat18.co.uk',
  },
  authors: [{ name: 'Flat 18', url: 'https://flat18.co.uk' }],
  category: 'Web Development',
  openGraph: {
    title: 'Flat 18 — Web3 & DeFi Design and Development Agency',
    description: 'Specialized in Web3, DeFi, and crypto security solutions. We deliver cost-effective, high-performance applications and websites for blockchain entrepreneurs and startups with modern UI/UX and secure architecture.',
    images: [
      {
        url: '/static/advert-flat-18-f18-og_1-p-2000.webp',
        width: 1200,
        height: 630,
        alt: 'Flat 18 - Web3 & DeFi Development Agency',
      }
    ],
    locale: 'en_GB',
    type: 'website',
    site_name: 'Flat 18',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flat 18 — Web3 & DeFi Design and Development Agency',
    description: 'Specialized in Web3, DeFi, and crypto security solutions. We deliver cost-effective, high-performance applications and websites for blockchain entrepreneurs and startups with modern UI/UX and secure architecture.',
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
              "description": "design and development agency specializing in Web3, DeFi, BTCPayServer, crypto security, and full-stack development for blockchain entrepreneurs and startups.",
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
              "name": "Flat 18 - Web3 & DeFi Development Agency",
              "description": "design and development agency specializing in Web3, DeFi, BTCPayServer, crypto security, and full-stack development for blockchain entrepreneurs and startups.",
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
        <ClientLayout>
          {children}
        </ClientLayout>
        <ChatwootWidget />
        <ServiceWorkerRegistration />
        <AnalyticsScripts />
      </body>
    </html>
  )
}
