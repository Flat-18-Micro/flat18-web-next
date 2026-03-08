import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "AI-Augmented Development"
const description = "AI-augmented development workflows for faster delivery and cleaner, maintainable code."
const path = "/services/ai-augmented-development"

export const metadata = generatePageMetadata({
  title,
  description,
  path,
  image: '/og/ai-augmented-development.png',
})

const serviceJsonLd = generateServiceJsonLd({
  name: title,
  description,
  url: `${siteConfig.url}${path}`,
  serviceType: "Software Development",
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
