import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('signalmap')

export default function Layout({ children }) {
  return <CaseStudySeo slug="signalmap">{children}</CaseStudySeo>
}
