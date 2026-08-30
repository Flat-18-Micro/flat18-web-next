import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import TinyAuditCta from '@/components/TinyAuditCta'
import { selectedWorkProjects } from '@/lib/selected-work-projects'
import styles from '@/styles/component-css/CaseStudies.module.css'

const selectedWorkCount = selectedWorkProjects.length

export default function CaseStudiesPage() {
  return (
    <div className={`${styles.page} ${styles.caseStudyIndexPage}`}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.heroContent}>
            <span className={styles.heroKicker}>Selected work</span>
            <h1 className={styles.heroTitle}>Work that makes difficult products clearer.</h1>
            <p className={styles.heroSubtitle}>
              Product, interface and engineering work for teams dealing with dense workflows, sensitive data and important next steps.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>{selectedWorkCount}</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Problem to product</span>
                <span className={styles.statLabel}>Approach</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Built to hold up</span>
                <span className={styles.statLabel}>Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <div className={styles.caseStudyListHeader}>
            <span className={styles.caseStudyTag}>All selected work</span>
            <h2 className={styles.caseStudyTitle}>A closer look at the work.</h2>
            <p className={styles.caseStudySubtitle}>
              Each study covers the problem, the decisions behind the work, what shipped and the evidence we can show.
            </p>
          </div>

          <div className={styles.caseStudyList}>
            {selectedWorkProjects.map((study) => (
              <article key={study.slug} className={styles.caseStudyCard}>
                <div className={styles.caseStudyCardMedia}>
                  <Image
                    src={study.image}
                    alt={`${study.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.caseStudyCardImage}
                  />
                </div>
                <div className={styles.caseStudyCardContent}>
                  <span className={styles.caseStudyCardTag}>{study.tag}</span>
                  <h3 className={styles.caseStudyCardTitle}>{study.title}</h3>
                  <p className={styles.caseStudyCardDescription}>{study.description}</p>
                  <div className={styles.caseStudyCardMeta}>
                    {study.meta.map((item) => (
                      <span key={item} className={styles.caseStudyMetaItem}>{item}</span>
                    ))}
                  </div>
                  <Link href={study.href} className={styles.caseStudyCardLink}>
                    Read case study
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <TinyAuditCta source="case-studies" />
      </div>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Need work like this?</h2>
              <p>
                We can audit the friction in your current product or service, design the fix, and
                implement it with a clear path to stakeholder approval.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a href="#chat" className="btn btn-primary">Chat with us</a>
              <a href="mailto:hello@flat18.co.uk" className="btn btn-secondary">Email hello@flat18.co.uk</a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
