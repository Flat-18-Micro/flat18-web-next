import { generatePageMetadata } from '@/lib/seo'
import CaseStudyJourneyScroll from '@/components/CaseStudyJourneyScroll'

export const metadata = generatePageMetadata({
  title: 'Case Studies',
  description: 'How Flat18 finds the costly friction in products and services, then designs and ships fixes that make them easier to trust, sell or operate.',
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
