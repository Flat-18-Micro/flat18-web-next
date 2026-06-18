import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('ipgeo')

export default function Layout({ children }) {
  return <CaseStudySeo slug="ipgeo">{children}</CaseStudySeo>
}
