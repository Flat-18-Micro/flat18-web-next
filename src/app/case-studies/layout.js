import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Case Studies',
  description: 'How Flat18 identifies customer problems, designs practical solutions, and ships product changes or services with clear commercial purpose.',
  image: '/og/case-studies.png',
  path: '/case-studies',
})

export default function Layout({ children }) {
  return children
}