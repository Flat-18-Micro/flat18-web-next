import AudienceLandingPage from '@/components/AudienceLandingPage'
import { getAudienceLandingPage } from '@/lib/audience-landing-pages'
import { generatePageMetadata } from '@/lib/seo'

const page = getAudienceLandingPage('prototype-rescue')

export const metadata = generatePageMetadata({
  title: page.title,
  description: page.description,
  path: '/prototype-rescue',
  keywords: [
    'AI-built prototype rescue',
    'AI prototype to production',
    'prototype production hardening',
    'AI-generated codebase review',
    'MVP rescue',
  ],
})

export default function PrototypeRescueLandingPage() {
  return <AudienceLandingPage audience="prototype-rescue" />
}
