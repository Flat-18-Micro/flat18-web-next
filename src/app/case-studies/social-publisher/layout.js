import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Social Publisher Case Study',
  description: 'How Flat18 converted scattered platform rules, approval friction, and publishing risk into a controlled scheduling workflow.',
  path: '/case-studies/social-publisher',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
