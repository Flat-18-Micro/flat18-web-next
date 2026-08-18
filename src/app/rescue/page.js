import AudienceLandingPage from '@/components/AudienceLandingPage'
import { getAudienceLandingPage } from '@/lib/audience-landing-pages'
import { generatePageMetadata } from '@/lib/seo'

const page = getAudienceLandingPage('rescue')

export const metadata = generatePageMetadata({
  title: page.title,
  description: page.description,
  path: '/rescue',
  keywords: ['software rescue', 'inherited codebase', 'stalled software project', 'product recovery', 'legacy software modernisation'],
})

export default function RescueLandingPage() {
  return <AudienceLandingPage audience="rescue" />
}
