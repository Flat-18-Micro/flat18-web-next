import AudienceLandingPage from '@/components/AudienceLandingPage'
import { getAudienceLandingPage } from '@/lib/audience-landing-pages'
import { generatePageMetadata } from '@/lib/seo'

const page = getAudienceLandingPage('saas')

export const metadata = generatePageMetadata({
  title: page.title,
  description: page.description,
  path: '/saas',
  keywords: ['SaaS product design', 'SaaS web development', 'SaaS development agency', 'SaaS MVP development', 'product design studio'],
})

export default function SaaSLandingPage() {
  return <AudienceLandingPage audience="saas" />
}
