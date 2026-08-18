import AudienceLandingPage from '@/components/AudienceLandingPage'
import { getAudienceLandingPage } from '@/lib/audience-landing-pages'
import { generatePageMetadata } from '@/lib/seo'

const page = getAudienceLandingPage('ai-development')

export const metadata = generatePageMetadata({
  title: page.title,
  description: page.description,
  path: '/ai-development',
  keywords: ['AI-assisted software development', 'agentic software development', 'LLM product development', 'AI product design', 'AI workflow development'],
})

export default function AiDevelopmentLandingPage() {
  return <AudienceLandingPage audience="ai-development" />
}
