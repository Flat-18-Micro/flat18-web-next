export const metadata = {
  title: 'Web Development Services | Next.js & React Experts | Flat 18',
  description: 'Expert web development using Next.js, React and modern frameworks. Fast, SEO-optimized websites and applications for startups, scale-ups, and blockchain entrepreneurs.',
  keywords: 'web development, next.js development, react development, headless cms, seo optimization, responsive design, web3 websites, blockchain websites, crypto websites, performance optimization, modern web development, javascript frameworks, static site generation, server-side rendering',
  alternates: {
    canonical: 'https://flat18.co.uk/services/web-development',
  },
  openGraph: {
    title: 'Web Development Services | Next.js & React Experts | Flat 18',
    description: 'Expert web development using Next.js, React and modern frameworks. Fast, SEO-optimized websites and applications for startups, scale-ups, and blockchain entrepreneurs.',
    images: [
      {
        url: '/static/advert-flat-18-f18-og_1-p-2000.webp',
        width: 1200,
        height: 630,
        alt: 'Flat 18 Web Development Services',
      }
    ],
    locale: 'en_GB',
    type: 'website',
    site_name: 'Flat 18',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services | Next.js & React Experts | Flat 18',
    description: 'Expert web development using Next.js, React and modern frameworks. Fast, SEO-optimized websites and applications for startups, scale-ups, and blockchain entrepreneurs.',
    images: ['/static/advert-flat-18-f18-og_1-p-2000.webp'],
    creator: '@f18_dev',
    site: '@f18_dev',
  }
}

export default function WebDevelopmentLayout({ children }) {
  return children
}
