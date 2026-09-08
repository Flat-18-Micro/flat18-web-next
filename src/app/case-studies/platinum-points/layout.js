import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('platinum-points')

export default function Layout({ children }) {
  return <CaseStudySeo slug="platinum-points">{children}</CaseStudySeo>
}
