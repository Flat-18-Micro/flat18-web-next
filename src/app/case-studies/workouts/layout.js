import CaseStudySeo from '@/components/CaseStudySeo'
import { generateCaseStudyMetadata } from '@/lib/case-study-seo'

export const metadata = generateCaseStudyMetadata('workouts')

export default function Layout({ children }) {
  return <CaseStudySeo slug="workouts">{children}</CaseStudySeo>
}
