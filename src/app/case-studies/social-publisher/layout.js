import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Social Publisher Case Study',
  description: 'Platform-aware social scheduling for small teams, agencies, and creators.',
  path: '/case-studies/social-publisher',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
