'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'
import TitleWords from '@/components/TitleWords'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'
import { selectedWorkProjectBySlug, selectedWorkProjects } from '@/lib/selected-work-projects'
import styles from '../styles/component-css/FeaturedWork.module.css'

const DEFAULT_FEATURED_PROJECTS = [
  selectedWorkProjectBySlug['social-publisher'],
  selectedWorkProjectBySlug.signalmap,
  selectedWorkProjectBySlug.ledger,
]

function shuffleProjects(projects) {
  const shuffled = [...projects]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const currentProject = shuffled[index]

    shuffled[index] = shuffled[randomIndex]
    shuffled[randomIndex] = currentProject
  }

  return shuffled
}

export default function FeaturedWork() {
  const [featuredProjects, setFeaturedProjects] = useState(DEFAULT_FEATURED_PROJECTS)

  useEffect(() => {
    setFeaturedProjects(shuffleProjects(selectedWorkProjects).slice(0, 3))
  }, [])

  return (
    <section
      className={styles.featuredSection}
      id="work"
      data-bg-color={getSectionBackground('featuredWork')}
      data-text-color={getSectionTextColor('featuredWork')}
    >
      <div className="container">
        <div className={styles.featuredHeading}>
          <div className={styles.featuredHeadingLead}>
            <TitleWords as="h2" className={styles.featuredTitle}>From friction to something people can use</TitleWords>
          </div>
          <div className={styles.featuredHeadingAside}>
            <p className={styles.featuredSubtitle}>A few products where the hard part was making the next decision clearer.</p>
            <Link href="/selected-work" className={styles.featuredHeadingLink}>
              Browse all work
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>

        <div className={styles.featuredList}>
          {featuredProjects.map((project, index) => {
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
                <div className={styles.featuredContent}>
                  <TitleWords as="h3" className={styles.featuredProjectTitle}>{project.title}</TitleWords>
                  <p className={styles.featuredDescription}>{project.featuredDescription}</p>

                  <dl className={styles.featuredDetails}>
                    {project.proofPoints && (
                      <div className={styles.featuredDetailRow}>
                        <dt className={styles.featuredDetailLabel}>Evidence</dt>
                        <dd className={styles.featuredDetailValue}>{project.proofPoints.join(' · ')}</dd>
                      </div>
                    )}
                    <div className={styles.featuredDetailRow}>
                      <dt className={styles.featuredDetailLabel}>Outcome</dt>
                      <dd className={styles.featuredDetailValue}>{project.featuredOutcome}</dd>
                    </div>
                  </dl>

                  <span className={styles.featuredCta}>
                    Read the case study
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>

                <div className={styles.featuredVisual}>
                  <div className={styles.featuredImageWrapper}>
                    <Image
                      src={image}
                      alt={project.title}
                      width={1000}
                      height={680}
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className={styles.featuredImage}
                      priority={index === 0}
                    />

                    {project.featuredLogo && (
                      <div className={styles.featuredLogo}>
                        {project.featuredLogoUseNextImage ? (
                          <Image
                            src={project.featuredLogo}
                            alt={project.projectLogoAlt || `${project.title} logo`}
                            width={40}
                            height={40}
                            className={styles.logoImage}
                            priority={index === 0}
                          />
                        ) : (
                          <ResponsiveImage
                            src={project.featuredLogo}
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
                  <span className={styles.featuredCaption}>{String(index + 1).padStart(2, '0')} / Selected work / {project.tag}</span>
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
