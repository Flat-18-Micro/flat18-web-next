import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = 'Complete product builds'
const description = 'End-to-end product design and full-stack engineering accelerated by LLMs and reviewed by senior developers.'
const path = '/services/web-development'

export const metadata = generatePageMetadata({
  title,
  description,
  path,
  keywords: [
    'complete product build',
    'web development',
    'Next.js development',
    'React development',
    'full-stack development',
    'MVP development',
    'LLM-assisted development',
    'website performance',
  ],
  image: '/og/web-development.png',
})

const serviceJsonLd = generateServiceJsonLd({
  name: title,
  description,
  url: `${siteConfig.url}${path}`,
  serviceType: 'Full-stack product development',
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
