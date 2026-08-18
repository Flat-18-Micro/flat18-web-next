import AudienceLandingPage from '@/components/AudienceLandingPage'
import { getAudienceLandingPage } from '@/lib/audience-landing-pages'
import { generatePageMetadata } from '@/lib/seo'

const page = getAudienceLandingPage('mvp')

export const metadata = generatePageMetadata({
  title: page.title,
  description: page.description,
  path: '/mvp',
  keywords: ['MVP development', 'MVP design', 'founder MVP build', 'startup product development', 'prototype to product'],
})

export default function MvpLandingPage() {
  return <AudienceLandingPage audience="mvp" />
}
