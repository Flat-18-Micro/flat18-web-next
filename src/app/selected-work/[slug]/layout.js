import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

const validSlugs = new Set([
  'axis-finance',
  'archimedes-finance',
  'btcpayserver',
  'f18-pay',
  'felt-weather',
  'forgingblock-dashboard',
  'forgingblock-website',
  'hashboard',
  'ipgeo',
  'ledger',
  'natal-charts',
  'pulseops',
  'signalmap',
  'social-publisher',
  'smp',
  'client-desk',
  'walletscrutiny',
  'workouts',
  'world-earnings',
])

export async function generateMetadata({ params }) {
  if (!params?.slug || !validSlugs.has(params.slug)) {
    return {}
  }

  return generateCaseStudyMetadata(params.slug)
}

export default function Layout({ children, params }) {
  if (!validSlugs.has(params?.slug)) {
    return children
  }

  return <CaseStudySeo slug={params.slug}>{children}</CaseStudySeo>
}
