import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('btcpayserver')

export default function Layout({ children }) {
  return <CaseStudySeo slug="btcpayserver">{children}</CaseStudySeo>
}
