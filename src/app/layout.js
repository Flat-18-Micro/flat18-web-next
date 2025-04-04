import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.png" />
      </head>
      <body className="body">
        <div className="body-wrapper no-overflow">
          {children}
        </div>
      </body>
    </html>
  )
} 