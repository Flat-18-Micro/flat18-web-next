import ResponsiveImage from './ResponsiveImage'
import TitleWords from '@/components/TitleWords'
import styles from '../styles/component-css/FeaturedWork.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function FeaturedWork() {
  const featuredProjects = [
    {
      title: 'Social Publisher',
      projectType: 'Publishing workflow',
      description: 'A focused workspace for channel variants, validation, calendars, logs and retries.',
      image: '/images/portfolio-graphics/social-publisher.webp',
      projectLogo: '/images/case-studies/logos/social-publisher-wordmark.svg',
      link: '/case-studies/social-publisher',
      value: 'Turned scattered social publishing work into a structured product teams can operate with less manual checking.',
    },
    {
      title: 'Ledger',
      projectType: 'Personal finance utility',
      description: 'Simple ledgers for money lent, spent, repaid, shared and backed by receipts.',
      image: '/images/portfolio-graphics/ledger.webp',
      link: '/case-studies/ledger',
      value: 'Turned informal money tracking into clear records for loans, shared costs, project budgets and read-only review.',
    },
    {
      title: 'Workouts',
      projectType: 'Training product',
      description: 'Workout planning, schedule selection, logging, recovery context and progress review.',
      image: '/images/portfolio-graphics/workouts.webp',
      link: '/case-studies/workouts',
      value: 'Built a practical product flow from onboarding to progress signals, with enough structure to support repeated use.',
    },
    {
      title: 'Felt Weather',
      projectType: 'Weather intelligence',
      description: 'Map-based weather intelligence combining official conditions with nearby public signals.',
      image: '/images/portfolio-graphics/felt-weather.webp',
      link: '/case-studies/felt-weather',
      value: 'Combined forecast data with local context so people can understand how conditions feel nearby.',
    },
  ]

  return (
    <section
      className={styles.featuredSection}
      id="work"
      data-bg-color={getSectionBackground('featuredWork')}
      data-text-color={getSectionTextColor('featuredWork')}
    >
      <div className="container">
        <div className={styles.featuredHeading}>
          <TitleWords as="h2" className={styles.featuredTitle}>Work that proves it</TitleWords>
          <p className={styles.featuredSubtitle}>
            Real product builds, not pitch-deck theatre.
          </p>
        </div>

        <div className={styles.featuredGrid}>
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={styles.featuredCard}
            >
              <div className={styles.featuredImageWrapper}>
                <ResponsiveImage
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  sizes="(max-width: 360px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className={styles.featuredImage}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  widths={[400, 800, 1000]}
                />
                
                {project.projectLogo && (
                  <div className={styles.featuredLogo}>
                    <ResponsiveImage
                      src={project.projectLogo}
                      alt={`${project.title} logo`}
                      width={40}
                      height={40}
                      className={styles.logoImage}
                      sizes="50px"
                      widths={[120, 240, 360, 600, 1000]}
                    />
                  </div>
                )}
              </div>

              <div className={styles.featuredContent}>
                <div className={styles.featuredHeader}>
                  <TitleWords as="h3" className={styles.featuredProjectTitle}>{project.title}</TitleWords>
                  <span className={styles.featuredStatus}>{project.projectType}</span>
                </div>

                <p className={styles.featuredDescription}>
                  {project.description}
                </p>

                <p className={styles.featuredOutcome}>
                  {project.value}
                </p>

                <a
                  href={project.link}
                  className={styles.featuredCta}
                >
                  Read case study
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.featuredFooter}>
          <a href="/case-studies" className="btn btn-secondary">
            View work
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
