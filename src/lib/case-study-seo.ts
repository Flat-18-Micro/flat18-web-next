import { generateCreativeWorkJsonLd, generatePageMetadata, siteConfig } from '@/lib/seo'
import { ledgerBrandAssets } from '@/lib/ledger-assets'
import { natalChartsBrandAssets } from '@/lib/natal-charts-assets'
import { signalmapBrandAssets } from '@/lib/signalmap-assets'
import { socialPublisherBrandAssets } from '@/lib/social-publisher-assets'
import { workoutsBrandAssets } from '@/lib/workouts-assets'

export type CaseStudySlug =
  | 'axis-finance'
  | 'archimedes-finance'
  | 'btcpayserver'
  | 'f18-pay'
  | 'felt-weather'
  | 'forgingblock-dashboard'
  | 'forgingblock-website'
  | 'hashboard'
  | 'ipgeo'
  | 'ledger'
  | 'natal-charts'
  | 'pulseops'
  | 'signalmap'
  | 'social-publisher'
  | 'walletscrutiny'
  | 'workouts'

type CaseStudySeoEntry = {
  title: string
  description: string
  path: string
  image: string
  keywords: string[]
  about: string[]
}

const caseStudySeoData: Record<CaseStudySlug, CaseStudySeoEntry> = {
  'axis-finance': {
    title: 'Selected work: Axis Finance',
    description:
      'How Flat18 helped private investors inspect positions, prices and alerts without handing over control, using read-only wallet tracking and narrow signals.',
    path: '/selected-work/axis-finance',
    image: '/og/selected-work.png',
    keywords: [
      'Axis Finance selected work',
      'read-only finance dashboard',
      'portfolio clarity',
      'wallet tracking',
      'fintech product design',
    ],
    about: ['Portfolio clarity', 'Read-only access', 'Alerts and watchlists', 'Private finance'],
  },
  'archimedes-finance': {
    title: 'Selected work: Archimedes Finance',
    description:
      'How Flat18 helped investment teams replace split onboarding, KYC, approvals, vesting, reporting and client messages with one auditable role-based flow.',
    path: '/selected-work/archimedes-finance',
    image: '/og/selected-work.png',
    keywords: [
      'Archimedes Finance selected work',
      'investment platform design',
      'KYC workflow',
      'tokenisation platform',
      'fintech product design',
    ],
    about: ['Fintech product design', 'KYC workflows', 'Role-based access', 'Tokenisation'],
  },
  btcpayserver: {
    title: 'Selected work: BTCPay Server',
    description:
      'How Flat18 helped an open-source payments project explain why to try it, how to start, and what adoption proof buyers could trust.',
    path: '/selected-work/btcpayserver',
    image: '/og/selected-work.png',
    keywords: [
      'BTCPay Server selected work',
      'Bitcoin payments website',
      'multilingual website',
      'open-source product marketing',
      'selected work website design',
    ],
    about: ['Open-source payments', 'Website redesign', 'Multilingual content', 'Product marketing'],
  },
  'f18-pay': {
    title: 'Selected work: F18 Pay',
    description:
      'How Flat18 helped merchants see live store state, paid invoices, open payment requests and wallet controls without slow payment follow-up.',
    path: '/selected-work/f18-pay',
    image: '/og/selected-work.png',
    keywords: [
      'F18 Pay selected work',
      'merchant payment system',
      'crypto checkout',
      'wallet controls',
      'payment request UX',
    ],
    about: ['Merchant payments', 'Checkout flow', 'Wallet management', 'Invoice workflow'],
  },
  'felt-weather': {
    title: 'Selected work: Felt Weather',
    description:
      'How Flat18 helped people judge local conditions by combining official forecasts, nearby public signals and an explainable felt score.',
    path: '/selected-work/felt-weather',
    image: '/og/selected-work.png',
    keywords: [
      'Felt Weather selected work',
      'weather intelligence',
      'map-based interface',
      'local weather product',
      'data visualisation',
    ],
    about: ['Weather intelligence', 'Map-based UI', 'Data visualisation', 'Local context'],
  },
  'forgingblock-dashboard': {
    title: 'Selected work: ForgingBlock Dashboard',
    description:
      'How Flat18 helped payment teams answer invoice, cash-flow and payout questions faster by turning scattered merchant data into a focused operations hub.',
    path: '/selected-work/forgingblock-dashboard',
    image: '/og/selected-work.png',
    keywords: [
      'ForgingBlock dashboard selected work',
      'merchant dashboard',
      'payments operations',
      'invoice workflow',
      'cash flow dashboard',
    ],
    about: ['Dashboard UX', 'Payments operations', 'Merchant workflow', 'Status reporting'],
  },
  'forgingblock-website': {
    title: 'Selected work: ForgingBlock Website Redesign',
    description:
      'How Flat18 found the conversion blockers in a busy merchant payments site and rebuilt the journey around proof, pricing clarity and enquiry.',
    path: '/selected-work/forgingblock-website',
    image: '/og/selected-work.png',
    keywords: [
      'ForgingBlock website redesign selected work',
      'conversion optimisation',
      'merchant website design',
      'trust-led landing page',
      'product marketing site',
    ],
    about: ['Website redesign', 'Conversion optimisation', 'Trust signals', 'Information architecture'],
  },
  hashboard: {
    title: 'Selected work: Zettahash Hashboard',
    description:
      'How Flat18 helped stakeholders assess project health by bringing scattered mining, treasury, market and governance signals into one readable hub.',
    path: '/selected-work/hashboard',
    image: '/og/selected-work.png',
    keywords: [
      'Zettahash Hashboard selected work',
      'transparency dashboard',
      'DAO dashboard',
      'cryptocurrency analytics',
      'stakeholder reporting',
    ],
    about: ['Stakeholder transparency', 'Dashboard design', 'Crypto analytics', 'Governance reporting'],
  },
  ipgeo: {
    title: 'Selected work: Flat18 Geo',
    description:
      'How Flat18 made IP context safer to trust across lookup, browser and refresh jobs with small endpoints, auth, cache rules and freshness checks.',
    path: '/selected-work/ipgeo',
    image: '/og/selected-work.png',
    keywords: [
      'Flat18 Geo selected work',
      'IP geolocation API',
      'Vercel API',
      'data freshness monitoring',
      'Neon Postgres',
    ],
    about: ['API design', 'IP geolocation', 'Data freshness', 'Automation'],
  },
  ledger: {
    title: 'Selected work: Ledger',
    description:
      'How Flat18 helped people settle informal loans, shared costs and receipts by turning fragile messages and memory into clear records with evidence.',
    path: '/selected-work/ledger',
    image: ledgerBrandAssets.ogShare,
    keywords: [
      'Ledger selected work',
      'personal finance utility',
      'money tracking app',
      'shared cost tracking',
      'finance UX',
    ],
    about: ['Personal finance', 'Trust UX', 'Shared cost tracking', 'Record keeping'],
  },
  'natal-charts': {
    title: 'Selected work: Natal Charts',
    description:
      'How Flat18 made dense birth data, ephemeris calculation, relationship comparison and privacy notes easier for ordinary users to understand.',
    path: '/selected-work/natal-charts',
    image: natalChartsBrandAssets.ogImage,
    keywords: [
      'Natal Charts selected work',
      'astrology app design',
      'data visualisation',
      'timezone logic',
      'browser app UX',
    ],
    about: ['Data visualisation', 'Timezone logic', 'Relationship comparison', 'Consumer web app'],
  },
  pulseops: {
    title: 'Selected work: PulseOps',
    description:
      'How Flat18 helped small network operators replace shallow router views and heavy enterprise tools with a local command centre they can run.',
    path: '/selected-work/pulseops',
    image: '/og/selected-work.png',
    keywords: [
      'PulseOps selected work',
      'network monitoring',
      'self-hosted product',
      'infrastructure dashboard',
      'operator UX',
    ],
    about: ['Network telemetry', 'Self-hosted infrastructure', 'Operator workflows', 'Product positioning'],
  },
  signalmap: {
    title: 'Selected work: SignalMap',
    description:
      'How Flat18 helped founders and small agencies turn privacy-limited browser signals into practical recommendations they can act on.',
    path: '/selected-work/signalmap',
    image: signalmapBrandAssets.ogShare,
    keywords: [
      'SignalMap selected work',
      'privacy-first analytics',
      'cookie-free tracking',
      'edge analytics',
      'product analytics design',
    ],
    about: ['Privacy-first analytics', 'Edge ingest', 'Aggregate reporting', 'Product analytics'],
  },
  'social-publisher': {
    title: 'Selected work: Social Publisher',
    description:
      'How Flat18 helped small teams reduce publishing rework by clarifying channel connection, platform variants, validation, scheduling and dispatch logs.',
    path: '/selected-work/social-publisher',
    image: socialPublisherBrandAssets.ogShare,
    keywords: [
      'Social Publisher selected work',
      'content workflow',
      'publishing automation',
      'scheduling UX',
      'social media product',
    ],
    about: ['Workflow design', 'Publishing automation', 'Content operations', 'Validation and scheduling'],
  },
  'walletscrutiny': {
    title: 'Selected work: WalletScrutiny',
    description:
      'How Flat18 helped readers move through a large wallet security catalogue with clearer search, verdicts, review pages and methodology evidence.',
    path: '/selected-work/walletscrutiny',
    image: '/og/selected-work.png',
    keywords: [
      'WalletScrutiny selected work',
      'Bitcoin wallet security',
      'search UX',
      'review catalogue design',
      'research website',
    ],
    about: ['Security research', 'Search UX', 'Methodology presentation', 'Information design'],
  },
  workouts: {
    title: 'Selected work: Workouts',
    description:
      'How Flat18 reduced training decision overload by shaping onboarding, schedule selection, logging, recovery context and progress signals into one usable flow.',
    path: '/selected-work/workouts',
    image: workoutsBrandAssets.ogShare,
    keywords: [
      'Workouts selected work',
      'fitness app design',
      'training plan workflow',
      'workout logging',
      'mobile product design',
    ],
    about: ['Fitness planning', 'Workout logging', 'Progress tracking', 'Mobile UX'],
  },
}

export function getCaseStudySeo(slug: CaseStudySlug) {
  return caseStudySeoData[slug]
}

export function generateCaseStudyMetadata(slug: CaseStudySlug) {
  const seo = getCaseStudySeo(slug)

  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: seo.path,
    image: seo.image,
    keywords: seo.keywords,
    type: 'article',
  })
}

export function generateSelectedWorkMetadata(slug: CaseStudySlug) {
  return generateCaseStudyMetadata(slug)
}

export function generateCaseStudyJsonLd(slug: CaseStudySlug) {
  const seo = getCaseStudySeo(slug)

  return generateCreativeWorkJsonLd({
    name: seo.title,
    description: seo.description,
    url: `${siteConfig.url}${seo.path}`,
    image: `${siteConfig.url}${seo.image}`,
    about: seo.about,
  })
}

export function generateSelectedWorkJsonLd(slug: CaseStudySlug) {
  return generateCaseStudyJsonLd(slug)
}
