import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('felt-weather')

export default function Layout({ children }) {
  return <CaseStudySeo slug="felt-weather">{children}</CaseStudySeo>
}
