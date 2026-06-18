import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('forgingblock-dashboard')

export default function Layout({ children }) {
  return <CaseStudySeo slug="forgingblock-dashboard">{children}</CaseStudySeo>
}
