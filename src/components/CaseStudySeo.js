import { generateJsonLdScript } from '@/lib/seo'
import { generateCaseStudyJsonLd } from '@/lib/case-study-seo'

export default function CaseStudySeo({ slug, children }) {
  const caseStudyJsonLd = generateCaseStudyJsonLd(slug)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateJsonLdScript(caseStudyJsonLd) }}
      />
      {children}
    </>
  )
}
