import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('f18-pay')

export default function Layout({ children }) {
  return <CaseStudySeo slug="f18-pay">{children}</CaseStudySeo>
}
