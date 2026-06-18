import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Archimedes Finance Case Study',
  description: 'How Flat18 shaped Archimedes Finance into a role-based investment platform for onboarding, KYC, tokenisation, vesting, reporting, and client communication.',
  path: '/case-studies/archimedes-finance',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
