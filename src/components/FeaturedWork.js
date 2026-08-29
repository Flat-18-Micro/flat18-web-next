'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'
import TitleWords from '@/components/TitleWords'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'
import {
  selectedWorkProjectBySlug,
  selectedWorkProjects,
} from '@/lib/selected-work-projects'
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
          <div>
            <span className="label-uppercase">Work proof</span>
            <TitleWords as="h2" className={styles.featuredTitle}>Work that proves it</TitleWords>
          </div>
          <p className={styles.featuredSubtitle}>Real products, thoughtfully built.</p>
        </div>

        <div className={styles.featuredGrid}>
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

                  {project.proofPoints && (
                    <div className={styles.capabilityBlock}>
                      <span>Proof in the build</span>
                      <ul>
                        {project.proofPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

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
