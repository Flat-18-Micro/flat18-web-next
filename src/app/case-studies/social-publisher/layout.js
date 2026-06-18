import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('social-publisher')

export default function Layout({ children }) {
  return <CaseStudySeo slug="social-publisher">{children}</CaseStudySeo>
}
