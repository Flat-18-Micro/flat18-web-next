import { generatePageMetadata } from '@/lib/seo'
import CaseStudyJourneyScroll from '@/components/CaseStudyJourneyScroll'

export const metadata = generatePageMetadata({
  title: 'Case Studies',
  description: 'How Flat18 identifies customer problems, designs practical solutions, and ships product changes or services with clear commercial purpose.',
  image: '/og/case-studies.png',
  path: '/case-studies',
  keywords: [
    'Flat 18 case studies',
    'product design case studies',
    'web development case studies',
    'portfolio',
    'client work',
  ],
})

export default function Layout({ children }) {
  return (
    <>
      <CaseStudyJourneyScroll />
      {children}
    </>
  )
}
