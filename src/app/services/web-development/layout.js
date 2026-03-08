import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = 'Web Development Services'
const description = 'Senior web engineering for conversion-ready websites and MVPs built with Next.js and React.'
const path = '/services/web-development'

export const metadata = generatePageMetadata({
  title,
  description,
  path,
  keywords: [
    'web development',
    'Next.js development',
    'React development',
    'full-stack development',
    'MVP development',
    'website performance',
  ],
  image: '/og/web-development.png',
})

const serviceJsonLd = generateServiceJsonLd({
  name: title,
  description,
  url: `${siteConfig.url}${path}`,
  serviceType: 'Web Development',
})

export default function WebDevelopmentLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  )
}
