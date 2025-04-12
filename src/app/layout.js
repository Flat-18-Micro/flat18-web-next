import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import ChatwootWidget from '@/components/ChatwootWidget'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata = {
  title: 'Flat 18 - Web Development & Design Agency',
  description: 'Full-service web development and design agency specializing in modern, high-performance websites and applications.',
  openGraph: {
    title: 'Flat 18 — Bespoke Design & Development for Landing Pages, Websites, and Webflow Sites',
    description: 'Flat 18 offers expert design and development services for landing pages, websites, and Webflow sites, tailored for startups, small businesses, and entrepreneurs. Our subscription model provides consistent, high-quality support to create standout digital experiences that drive growth and engagement.',
    images: ['/static/advert-flat-18-f18-og_1-p-2000.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flat 18 — Bespoke Design & Development for Landing Pages, Websites, and Webflow Sites',
    description: 'Flat 18 offers expert design and development services for landing pages, websites, and Webflow sites, tailored for startups, small businesses, and entrepreneurs. Our subscription model provides consistent, high-quality support to create standout digital experiences that drive growth and engagement.',
    images: ['/static/advert-flat-18-f18-og_1-p-2000.webp'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script defer src="https://eu.umami.is/script.js" data-website-id="54c1aa36-ac18-426d-ba14-3d5827cfa465"></script>
        <script async src="https://master--melodic-taffy-1a4c18.netlify.app/tracker.js" data-ackee-server="https://master--melodic-taffy-1a4c18.netlify.app" data-ackee-domain-id="b28e2698-bf04-4e23-9075-a5f7110affe0"></script>
      </head>
      <body>
        {children}
        <ChatwootWidget />
      </body>
    </html>
  )
}