import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "AI-seeded design and graphics"
const description = "AI-seeded design to accelerate concepting, visual iteration and production-ready assets under senior creative direction."
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
