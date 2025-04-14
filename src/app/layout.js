import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Outfit, Sora, Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import ChatwootWidget from '@/components/ChatwootWidget'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'

// Optimize font loading
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  preload: true,
  fallback: ['monospace'],
})

export const metadata = {
  title: 'Flat 18 - Premium Web3 & DeFi Development Agency',
  description: 'Premium design and development agency specializing in Web3, DeFi, BTCPayServer, crypto security, and full-stack development for blockchain entrepreneurs and startups.',
  metadataBase: new URL('https://flat18.co.uk'),
  keywords: 'web3 development, defi design, crypto security, btcpayserver, blockchain apps, wallet scrutiny, full-stack development, premium design agency',
  openGraph: {
    title: 'Flat 18 — Premium Web3 & DeFi Design and Development Agency',
    description: 'Specialized in Web3, DeFi, and crypto security solutions. We deliver cost-effective, high-performance applications and websites for blockchain entrepreneurs and startups with modern UI/UX and secure architecture.',
    images: ['/static/advert-flat-18-f18-og_1-p-2000.webp'],
    type: 'website',
    site_name: 'Flat 18',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flat 18 — Premium Web3 & DeFi Design and Development Agency',
    description: 'Specialized in Web3, DeFi, and crypto security solutions. We deliver cost-effective, high-performance applications and websites for blockchain entrepreneurs and startups with modern UI/UX and secure architecture.',
    images: ['/static/advert-flat-18-f18-og_1-p-2000.webp'],
    creator: '@f18_dev',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#19fdb2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://eu.umami.is" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://master--melodic-taffy-1a4c18.netlify.app" crossOrigin="anonymous" />

        {/* Bootstrap Icons are imported directly in the layout.js file */}

        {/* Preload critical images */}
        <link rel="preload" href="/images/portfolio-graphics/wallet-scrutiny.webp" as="image" type="image/webp" />

        {/* Analytics scripts with optimized loading */}
        <script defer src="https://eu.umami.is/script.js" data-website-id="54c1aa36-ac18-426d-ba14-3d5827cfa465"></script>
        <script defer src="https://master--melodic-taffy-1a4c18.netlify.app/tracker.js" data-ackee-server="https://master--melodic-taffy-1a4c18.netlify.app" data-ackee-domain-id="b28e2698-bf04-4e23-9075-a5f7110affe0"></script>
      </head>
      <body>
        {children}
        <ChatwootWidget />
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}