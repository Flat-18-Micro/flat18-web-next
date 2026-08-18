import AudienceLandingPage from '@/components/AudienceLandingPage'
import { getAudienceLandingPage } from '@/lib/audience-landing-pages'
import { generatePageMetadata } from '@/lib/seo'

const page = getAudienceLandingPage('web3')

export const metadata = generatePageMetadata({
  title: page.title,
  description: page.description,
  path: '/web3',
  keywords: ['Web3 product design', 'Bitcoin development', 'DeFi UX', 'wallet UX', 'blockchain product development'],
})

export default function Web3LandingPage() {
  return <AudienceLandingPage audience="web3" />
}
