import AudienceLandingPage from '@/components/AudienceLandingPage'
import { getAudienceLandingPage } from '@/lib/audience-landing-pages'
import { generatePageMetadata } from '@/lib/seo'

const page = getAudienceLandingPage('fintech')

export const metadata = generatePageMetadata({
  title: page.title,
  description: page.description,
  path: '/fintech',
  keywords: ['fintech product design', 'fintech development', 'financial dashboard design', 'payment product development', 'fintech UX'],
})

export default function FintechLandingPage() {
  return <AudienceLandingPage audience="fintech" />
}
