import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('hashboard')

export default function Layout({ children }) {
  return <CaseStudySeo slug="hashboard">{children}</CaseStudySeo>
}
