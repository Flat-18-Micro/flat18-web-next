'use client'

import Image from 'next/image'
import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'
import TitleWords from '@/components/TitleWords'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'
import { selectedWorkProjectBySlug } from '@/lib/selected-work-projects'
import styles from '../styles/component-css/FeaturedWork.module.css'

const FEATURED_PROJECTS = [
  selectedWorkProjectBySlug['social-publisher'],
  selectedWorkProjectBySlug.signalmap,
  selectedWorkProjectBySlug.ledger,
]

export default function FeaturedWork() {
  return (
    <section
      className={styles.featuredSection}
      id="work"
      data-bg-color={getSectionBackground('featuredWork')}
      data-text-color={getSectionTextColor('featuredWork')}
    >
      <div className="container">
        <div className={styles.featuredHeading}>
          <div>
            <span className="label-uppercase">Work proof</span>
            <TitleWords as="h2" className={styles.featuredTitle}>Work that proves it</TitleWords>
          </div>
          <p className={styles.featuredSubtitle}>Real product builds, not pitch-deck theatre.</p>
        </div>

        <div className={styles.featuredGrid}>
          {FEATURED_PROJECTS.map((project, index) => {
            const image = project.featuredImage || project.image

            return (
              <Link
                key={project.slug}
                href={project.href}
                className={styles.featuredCard}
                aria-label={`View ${project.title} project`}
                data-cta-source="featured-work"
                data-signal-label={`featured_work_${project.slug.replace(/-/g, '_')}`}
              >
                <div className={styles.featuredImageWrapper}>
                  <Image
                    src={image}
                    alt={project.title}
                    width={600}
                    height={400}
                    sizes="(max-width: 360px) 100vw, (max-width: 900px) 50vw, 33vw"
                    className={styles.featuredImage}
                    priority={index === 0}
                  />

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
                    <span className={styles.featuredStatus}>{project.tag}</span>
                  </div>

                  <p className={styles.featuredDescription}>
                    {project.featuredDescription}
                  </p>

                  <p className={styles.featuredOutcome}>
                    {project.featuredOutcome}
                  </p>

                  <span className={styles.featuredCta}>
                    View project
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className={styles.featuredFooter}>
          <Link
            href="/selected-work"
            className="btn btn-secondary"
            data-cta-source="featured-work"
            data-signal-label="featured_work_view_selected_work"
          >
            View selected work
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}
