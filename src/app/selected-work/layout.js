import { generatePageMetadata } from '@/lib/seo'
import CaseStudyJourneyScroll from '@/components/CaseStudyJourneyScroll'

export const metadata = generatePageMetadata({
  title: 'Selected work',
  description: 'Selected product design and web development work showing how Flat 18 makes complex products easier to trust, sell and operate.',
  image: '/og/selected-work.png',
  path: '/selected-work',
  keywords: [
    'Flat 18 selected work',
    'product design selected work',
    'web development selected work',
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
