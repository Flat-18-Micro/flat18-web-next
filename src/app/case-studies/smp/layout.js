import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('smp')

export default function Layout({ children }) {
  return <CaseStudySeo slug="smp">{children}</CaseStudySeo>
}
