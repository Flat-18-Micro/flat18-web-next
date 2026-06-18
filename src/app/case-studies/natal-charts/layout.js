import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('natal-charts')

export default function Layout({ children }) {
  return <CaseStudySeo slug="natal-charts">{children}</CaseStudySeo>
}
