import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Social Publisher Case Study',
  description: 'How Flat18 turned social publishing into a structured workflow for channel connection, platform-aware drafting, validation, scheduling, and dispatch logs.',
  path: '/case-studies/social-publisher',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
