import { generateCreativeWorkJsonLd, generatePageMetadata, siteConfig } from '@/lib/seo'

export type CaseStudySlug =
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
  'archimedes-finance': {
    title: 'Archimedes Finance Case Study',
    description:
      'How Flat18 helped investment teams replace split onboarding, KYC, approvals, vesting, reporting and client messages with one auditable role-based flow.',
    path: '/case-studies/archimedes-finance',
    image: '/og/case-studies.png',
    keywords: [
      'Archimedes Finance case study',
      'investment platform design',
      'KYC workflow',
      'tokenisation platform',
      'fintech product design',
    ],
    about: ['Fintech product design', 'KYC workflows', 'Role-based access', 'Tokenisation'],
  },
  btcpayserver: {
    title: 'BTCPay Server Case Study',
    description:
      'How Flat18 helped an open-source payments project explain why to try it, how to start, and what adoption proof buyers could trust.',
    path: '/case-studies/btcpayserver',
    image: '/og/case-studies.png',
    keywords: [
      'BTCPay Server case study',
      'Bitcoin payments website',
      'multilingual website',
      'open-source product marketing',
      'case study website design',
    ],
    about: ['Open-source payments', 'Website redesign', 'Multilingual content', 'Product marketing'],
  },
  'f18-pay': {
    title: 'F18 Pay Case Study',
    description:
      'How Flat18 helped merchants see live store state, paid invoices, open payment requests and wallet controls without slow payment follow-up.',
    path: '/case-studies/f18-pay',
    image: '/og/case-studies.png',
    keywords: [
      'F18 Pay case study',
      'merchant payment system',
      'crypto checkout',
      'wallet controls',
      'payment request UX',
    ],
    about: ['Merchant payments', 'Checkout flow', 'Wallet management', 'Invoice workflow'],
  },
  'felt-weather': {
    title: 'Felt Weather Case Study',
    description:
      'How Flat18 helped people judge local conditions by combining official forecasts, nearby public signals and an explainable felt score.',
    path: '/case-studies/felt-weather',
    image: '/og/case-studies.png',
    keywords: [
      'Felt Weather case study',
      'weather intelligence',
      'map-based interface',
      'local weather product',
      'data visualisation',
    ],
    about: ['Weather intelligence', 'Map-based UI', 'Data visualisation', 'Local context'],
  },
  'forgingblock-dashboard': {
    title: 'ForgingBlock Dashboard Case Study',
    description:
      'How Flat18 helped payment teams answer invoice, cash-flow and payout questions faster by turning scattered merchant data into a focused operations hub.',
    path: '/case-studies/forgingblock-dashboard',
    image: '/og/case-studies.png',
    keywords: [
      'ForgingBlock dashboard case study',
      'merchant dashboard',
      'payments operations',
      'invoice workflow',
      'cash flow dashboard',
    ],
    about: ['Dashboard UX', 'Payments operations', 'Merchant workflow', 'Status reporting'],
  },
  'forgingblock-website': {
    title: 'ForgingBlock Website Redesign Case Study',
    description:
      'How Flat18 found the conversion blockers in a busy merchant payments site and rebuilt the journey around proof, pricing clarity and enquiry.',
    path: '/case-studies/forgingblock-website',
    image: '/og/case-studies.png',
    keywords: [
      'ForgingBlock website redesign case study',
      'conversion optimisation',
      'merchant website design',
      'trust-led landing page',
      'product marketing site',
    ],
    about: ['Website redesign', 'Conversion optimisation', 'Trust signals', 'Information architecture'],
  },
  hashboard: {
    title: 'Zettahash Hashboard Case Study',
    description:
      'How Flat18 helped stakeholders assess project health by bringing scattered mining, treasury, market and governance signals into one readable hub.',
    path: '/case-studies/hashboard',
    image: '/og/case-studies.png',
    keywords: [
      'Zettahash Hashboard case study',
      'transparency dashboard',
      'DAO dashboard',
      'cryptocurrency analytics',
      'stakeholder reporting',
    ],
    about: ['Stakeholder transparency', 'Dashboard design', 'Crypto analytics', 'Governance reporting'],
  },
  ipgeo: {
    title: 'Flat18 Geo Case Study',
    description:
      'How Flat18 made IP context safer to trust across lookup, browser and refresh jobs with small endpoints, auth, cache rules and freshness checks.',
    path: '/case-studies/ipgeo',
    image: '/og/case-studies.png',
    keywords: [
      'Flat18 Geo case study',
      'IP geolocation API',
      'Vercel API',
      'data freshness monitoring',
      'Neon Postgres',
    ],
    about: ['API design', 'IP geolocation', 'Data freshness', 'Automation'],
  },
  ledger: {
    title: 'Ledger Case Study',
    description:
      'How Flat18 helped people settle informal loans, shared costs and receipts by turning fragile messages and memory into clear records with evidence.',
    path: '/case-studies/ledger',
    image: '/og/case-studies.png',
    keywords: [
      'Ledger app case study',
      'personal finance utility',
      'money tracking app',
      'shared cost tracking',
      'finance UX',
    ],
    about: ['Personal finance', 'Trust UX', 'Shared cost tracking', 'Record keeping'],
  },
  'natal-charts': {
    title: 'Natal Charts Case Study',
    description:
      'How Flat18 made dense birth data, ephemeris calculation, relationship comparison and privacy notes easier for ordinary users to understand.',
    path: '/case-studies/natal-charts',
    image: '/og/case-studies.png',
    keywords: [
      'Natal Charts case study',
      'astrology app design',
      'data visualisation',
      'timezone logic',
      'browser app UX',
    ],
    about: ['Data visualisation', 'Timezone logic', 'Relationship comparison', 'Consumer web app'],
  },
  pulseops: {
    title: 'PulseOps Case Study',
    description:
      'How Flat18 helped small network operators replace shallow router views and heavy enterprise tools with a local command centre they can run.',
    path: '/case-studies/pulseops',
    image: '/og/case-studies.png',
    keywords: [
      'PulseOps case study',
      'network monitoring',
      'self-hosted product',
      'infrastructure dashboard',
      'operator UX',
    ],
    about: ['Network telemetry', 'Self-hosted infrastructure', 'Operator workflows', 'Product positioning'],
  },
  signalmap: {
    title: 'SignalMap Case Study',
    description:
      'How Flat18 helped founders and small agencies turn privacy-limited browser signals into practical recommendations they can act on.',
    path: '/case-studies/signalmap',
    image: '/og/case-studies.png',
    keywords: [
      'SignalMap case study',
      'privacy-first analytics',
      'cookie-free tracking',
      'edge analytics',
      'product analytics design',
    ],
    about: ['Privacy-first analytics', 'Edge ingest', 'Aggregate reporting', 'Product analytics'],
  },
  'social-publisher': {
    title: 'Social Publisher Case Study',
    description:
      'How Flat18 helped small teams reduce publishing rework by clarifying channel connection, platform variants, validation, scheduling and dispatch logs.',
    path: '/case-studies/social-publisher',
    image: '/og/case-studies.png',
    keywords: [
      'Social Publisher case study',
      'content workflow',
      'publishing automation',
      'scheduling UX',
      'social media product',
    ],
    about: ['Workflow design', 'Publishing automation', 'Content operations', 'Validation and scheduling'],
  },
  'walletscrutiny': {
    title: 'WalletScrutiny Case Study',
    description:
      'How Flat18 helped readers move through a large wallet security catalogue with clearer search, verdicts, review pages and methodology evidence.',
    path: '/case-studies/walletscrutiny',
    image: '/og/case-studies.png',
    keywords: [
      'WalletScrutiny case study',
      'Bitcoin wallet security',
      'search UX',
      'review catalogue design',
      'research website',
    ],
    about: ['Security research', 'Search UX', 'Methodology presentation', 'Information design'],
  },
  workouts: {
    title: 'Workouts Case Study',
    description:
      'How Flat18 reduced training decision overload by shaping onboarding, schedule selection, logging, recovery context and progress signals into one usable flow.',
    path: '/case-studies/workouts',
    image: '/og/case-studies.png',
    keywords: [
      'Workouts case study',
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
