import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'ForgingBlock Website Redesign Case Study',
  description: 'Benefit-first marketing site redesign with improved hierarchy, trust signals, and SEO consistency.',
  path: '/case-studies/forgingblock-website',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
