import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'ForgingBlock Website Redesign Case Study',
  description: 'How Flat18 audited a busy merchant website, found conversion blockers, and rebuilt the journey around trust and clarity.',
  path: '/case-studies/forgingblock-website',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
