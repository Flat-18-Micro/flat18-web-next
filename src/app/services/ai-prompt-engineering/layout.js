import { generatePageMetadata, generateServiceJsonLd, siteConfig } from '@/lib/seo'

const title = "Prompt and LLM workflows"
const description = "Prompt systems and LLM workflows for repeatable output, review checkpoints and product integration."
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
  serviceType: "Prompt and LLM workflow design",
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
