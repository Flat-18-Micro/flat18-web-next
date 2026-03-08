import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "AI Prompt Engineering"
const description = "Prompt engineering for reliable LLM outputs, structured workflows, and production-ready AI systems."
const path = "/services/ai-prompt-engineering"

export const metadata = generatePageMetadata({
  title,
  description,
  path,
  image: '/og/ai-prompt-engineering.png',
})

const serviceJsonLd = generateServiceJsonLd({
  name: title,
  description,
  url: `${siteConfig.url}${path}`,
  serviceType: "AI Prompt Engineering",
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
