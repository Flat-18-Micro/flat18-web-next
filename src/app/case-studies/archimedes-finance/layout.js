import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('archimedes-finance')

export default function Layout({ children }) {
  return <CaseStudySeo slug="archimedes-finance">{children}</CaseStudySeo>
}
