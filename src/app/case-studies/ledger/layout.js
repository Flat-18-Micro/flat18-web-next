import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('ledger')

export default function Layout({ children }) {
  return <CaseStudySeo slug="ledger">{children}</CaseStudySeo>
}
