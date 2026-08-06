import Link from 'next/link'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/MemoryLane.module.css'
import { memoryLaneEntries } from '@/lib/memory-lane'

function formatDate(date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00Z`))
}

export default function MemoryLanePage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />

        <div className={styles.container}>
          <div className={styles.pageIntro}>
            <p className={styles.eyebrow}>Version archive</p>
            <h1 className={styles.pageHeading}>Memory lane</h1>
            <p className={styles.introText}>
              A record of the Flat 18 site as it changed. Each entry is tied to its commit and includes a preserved build you can open and explore.
            </p>
          </div>

          <div className={styles.timeline}>
            {memoryLaneEntries.map((entry) => (
              <article className={styles.entry} key={entry.sha} id={`snapshot-${entry.shortSha}`}>
                <div className={styles.entryRail} aria-hidden="true">
                  <span className={styles.railDot}></span>
                </div>

                <div className={styles.entryContent}>
                  <div className={styles.entryMeta}>
                    <span className={styles.snapshotLabel}>Snapshot {entry.shortSha}</span>
                    <time dateTime={entry.date}>{formatDate(entry.date)}</time>
                  </div>

                  <div className={styles.entryHeader}>
                    <div>
                      <p className={styles.sourceLabel}>{entry.sourceLabel}</p>
                      <h2 className={styles.entryTitle}>{entry.message}</h2>
                    </div>
                    <div className={styles.entryActions}>
                      <a
                        className="btn btn-primary btn-icon"
                        href={entry.deploymentPath}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="btn-text">Open deployment</span>
                        <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                      </a>
                      <a
                        className={styles.commitLink}
                        href={entry.commitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View commit <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>

                  <div className={styles.previewFrame}>
                    <iframe
                      className={styles.preview}
                      src={entry.deploymentPath}
                      title={`Flat 18 deployment ${entry.shortSha}`}
                      loading="lazy"
                      sandbox="allow-forms allow-popups allow-scripts"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <p className={styles.entryNote}>
                    This snapshot is kept as a static build. The surrounding archive is part of the current Flat 18 site; the preview is the site as it was at this commit.
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.backLink}>
            <Link href="/">Back to the current Flat 18 site <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
