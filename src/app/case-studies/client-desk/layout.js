import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('client-desk')

export default function Layout({ children }) {
  return <CaseStudySeo slug="client-desk">{children}</CaseStudySeo>
}
