export const metadata = {
  title: 'Beautiful Products. Bulletproof Builds. | Full-Stack Web Development | Flat 18',
  description: 'We design and build beautiful digital products with bulletproof engineering. From MVPs to scalable platforms, Flat 18 delivers expert full-stack development for Web3, DeFi, and ambitious startups.',
  keywords: 'full-stack development, web development, next.js, react, MVP development, DeFi platforms, Web3 apps, UI design, scalable architecture, crypto products, frontend development, backend development',
  alternates: {
    canonical: 'https://flat18.co.uk/services/web-development',
  },
  openGraph: {
    title: 'Beautiful Products. Bulletproof Builds. | Full-Stack Web Development | Flat 18',
    description: 'We design and build beautiful digital products with bulletproof engineering. From MVPs to scalable platforms, Flat 18 delivers expert full-stack development for Web3, DeFi, and ambitious startups.',
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
    title: 'Beautiful Products. Bulletproof Builds. | Full-Stack Web Development | Flat 18',
    description: 'We design and build beautiful digital products with bulletproof engineering. From MVPs to scalable platforms, Flat 18 delivers expert full-stack development for Web3, DeFi, and ambitious startups.',
    images: ['/static/advert-flat-18-f18-og_1-p-2000.webp'],
    creator: '@f18_dev',
    site: '@f18_dev',
  }
}

export default function WebDevelopmentLayout({ children }) {
  return children
}
