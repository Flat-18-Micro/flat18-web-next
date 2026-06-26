import Image from 'next/image'
import ResponsiveImage from './ResponsiveImage'
import TitleWords from '@/components/TitleWords'
import styles from '../styles/component-css/FeaturedWork.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'
import { ledgerBrandAssets } from '@/lib/ledger-assets'
import { natalChartsBrandAssets } from '@/lib/natal-charts-assets'
import { signalmapBrandAssets } from '@/lib/signalmap-assets'
import { socialPublisherBrandAssets } from '@/lib/social-publisher-assets'
import { workoutsBrandAssets } from '@/lib/workouts-assets'

export default function FeaturedWork() {
  const featuredProjects = [
    {
      title: 'Social Publisher',
      projectType: 'Publishing operations friction',
      description: 'Turns scattered publishing checks into channel variants, validation, calendars, logs and retries.',
      image: '/images/portfolio-graphics/social-publisher.webp',
      projectLogo: socialPublisherBrandAssets.appIcon,
      projectLogoAlt: 'Social Publisher app icon',
      projectLogoUseNextImage: true,
      link: '/case-studies/social-publisher',
      value: 'Turned scattered social publishing work into a structured product teams can operate with less manual checking.',
    },
    {
      title: 'SignalMap',
      projectType: 'Actionable analytics',
      description: 'Turns privacy-limited browser signals into aggregate reporting and practical recommendations.',
      image: '/images/case-studies/signalmap/01-landing.png',
      useNextImage: true,
      projectLogo: signalmapBrandAssets.appIcon,
      projectLogoAlt: 'SignalMap app mark',
      projectLogoUseNextImage: true,
      link: '/case-studies/signalmap',
      value: 'Turned browser signals into a readable product that points teams towards the next useful fix.',
    },
    {
      title: 'Ledger',
      projectType: 'Informal money trust',
      description: 'Turns fragile shared money records into balances, receipts and proof people can explain.',
      image: '/images/portfolio-graphics/ledger.webp',
      projectLogo: ledgerBrandAssets.appIcon,
      projectLogoAlt: 'Ledger app icon',
      projectLogoUseNextImage: true,
      link: '/case-studies/ledger',
      value: 'Turned informal money tracking into clear records for loans, shared costs, project budgets and read-only review.',
    },
    {
      title: 'Workouts',
      projectType: 'Training decision friction',
      description: 'Reduces training choice overload with guided schedules, logging, recovery context and progress review.',
      image: '/images/portfolio-graphics/workouts.webp',
      projectLogo: workoutsBrandAssets.appIcon,
      projectLogoAlt: 'Workouts app icon',
      projectLogoUseNextImage: true,
      link: '/case-studies/workouts',
      value: 'Built a practical product flow from onboarding to progress signals, with enough structure to support repeated use.',
    },
    {
      title: 'Felt Weather',
      projectType: 'Local context gap',
      description: 'Shows how conditions feel locally by combining forecasts with nearby public signals.',
      image: '/images/portfolio-graphics/felt-weather.webp',
      link: '/case-studies/felt-weather',
      value: 'Combined forecast data with local context so people can understand how conditions feel nearby.',
    },
    {
      title: 'Natal Charts',
      projectType: 'Dense calculation clarity',
      description: 'Makes birth data, time-zone logic, transits and relationship comparison easier to read.',
      image: '/images/portfolio-graphics/natal-charts.webp',
      useNextImage: true,
      projectLogo: natalChartsBrandAssets.appIcon,
      projectLogoAlt: 'Natal Charts app icon',
      projectLogoUseNextImage: true,
      link: '/case-studies/natal-charts',
      value: 'Turned specialist astrological calculation into a product journey people can read and share more easily.',
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
                {project.useNextImage ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    sizes="(max-width: 360px) 100vw, (max-width: 900px) 50vw, 33vw"
                    className={styles.featuredImage}
                    priority={index === 0}
                  />
                ) : (
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
                )}
                
                {project.projectLogo && (
                  <div className={styles.featuredLogo}>
                    {project.projectLogoUseNextImage ? (
                      <Image
                        src={project.projectLogo}
                        alt={project.projectLogoAlt || `${project.title} logo`}
                        width={40}
                        height={40}
                        className={styles.logoImage}
                        priority={index === 0}
                      />
                    ) : (
                      <ResponsiveImage
                        src={project.projectLogo}
                        alt={project.projectLogoAlt || `${project.title} logo`}
                        width={40}
                        height={40}
                        className={styles.logoImage}
                        sizes="50px"
                        widths={[120, 240, 360, 600, 1000]}
                      />
                    )}
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
