import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "AI-seeded design and graphics"
const description = "AI-seeded visual exploration, product graphics and assets guided by senior design judgement."
const path = "/services/ai-seeded-design"

export const metadata = generatePageMetadata({
  title,
  description,
  path,
  image: '/og/ai-seeded-design.png',
})

const serviceJsonLd = generateServiceJsonLd({
  name: title,
  description,
  url: `${siteConfig.url}${path}`,
  serviceType: "AI-assisted design",
})

export default function Layout({ children }) {
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
