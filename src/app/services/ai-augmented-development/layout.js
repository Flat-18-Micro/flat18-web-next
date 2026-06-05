import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "LLM-accelerated development"
const description = "Expert-led LLM-assisted development for faster product delivery without losing senior engineering control."
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
  serviceType: "LLM-assisted software development",
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
