import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/CaseStudies.module.css'

const websiteUrl = 'https://zettahash-static.webflow.io/'

const projectDetails = [
  {
    value: 'Webflow',
    label: 'Platform',
    detail: 'Built and published in Webflow.',
    icon: '/images/all/webflow-icon-4095338614.png',
  },
  {
    value: '100%',
    label: 'Webflow build',
    detail: 'The site was designed around Webflow’s visual production workflow.',
  },
  {
    value: 'Node + GitHub Pages',
    label: 'Environment',
    detail: 'Prepared for processing in Node within a GitHub Pages environment.',
  },
]

export default function ZettahashDaoCaseStudyPage() {
  return (
    <div className={`${styles.page} ${styles.productCasePage}`}>
      <section className={`${styles.hero} ${styles.productHero}`}>
        <div className={styles.container}>
          <Breadcrumbs />
          <div className={styles.productHeroGrid}>
            <div className={styles.productHeroContent}>
              <span className={styles.heroKicker}>Selected work / Web3 website</span>
              <h1 className={styles.productHeroTitle}>Zettahash DAO</h1>
              <p className={styles.productHeroSubtitle}>
                A Webflow-built website for Zettahash DAO, designed to present the community and its
                decentralised mining mission with a clear route through the story.
              </p>
              <div className={styles.productHeroActions}>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit website
                  <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                </a>
                <a href="#build" className="btn btn-secondary">
                  See the build
                </a>
              </div>
              <div className={styles.productProofGrid}>
                {projectDetails.map((item) => (
                  <div key={item.label} className={styles.productProofCard}>
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt="Webflow logo"
                        width={40}
                        height={40}
                        className={styles.caseStudyLogo}
                      />
                    )}
                    <span className={styles.productProofValue}>{item.value}</span>
                    <span className={styles.productProofLabel}>{item.label}</span>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.productHeroVisual}>
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.productHeroImageButton}
                aria-label="Visit the Zettahash DAO website"
              >
                <Image
                  src="/images/portfolio-graphics/zettahash-dao-mockup.png"
                  alt="Zettahash DAO website shown on a laptop and smartphone"
                  width={1200}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className={styles.productHeroImage}
                  priority
                />
                <span className={styles.productHeroBadge}>Webflow website</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="build" className={styles.productStorySection}>
        <div className={styles.container}>
          <div className={styles.productSectionIntro}>
            <span className={styles.caseStudyTag}>The build</span>
            <h2>A clear front door for a decentralised mining community.</h2>
            <p>
              The Zettahash website brings the project’s purpose, community ownership and wider
              ecosystem into one focused experience. The visual system gives the brand room to feel
              technical and ambitious while keeping the next step easy to find.
            </p>
          </div>

          <div className={styles.productFeatureGrid}>
            <article className={`${styles.productFeatureCard} ${styles.productFeatureCardLarge}`}>
              <div className={styles.productFeatureCopy}>
                <span>Story first</span>
                <h3>Make the project easy to understand before asking people to explore it.</h3>
                <p>
                  The landing experience introduces the DAO, its mining focus and its community
                  proposition in a sequence that gives visitors useful context quickly.
                </p>
              </div>
            </article>
            <article className={styles.productFeatureCard}>
              <div className={styles.productFeatureCopy}>
                <span>Built for Webflow</span>
                <h3>Fast visual iteration with a practical publishing path.</h3>
                <p>
                  Webflow keeps the page structure and visual details easy to refine while the wider
                  workflow remains ready for Node and GitHub Pages processing.
                </p>
              </div>
            </article>
            <article className={styles.productFeatureCard}>
              <div className={styles.productFeatureCopy}>
                <span>Live project</span>
                <h3>Explore the published site.</h3>
                <p>
                  Visit the live Zettahash DAO website to see the finished Webflow experience in its
                  intended context.
                </p>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.caseStudyCardLink}
                >
                  Visit website
                  <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Need a clearer way to present your project?</h2>
              <p>
                We can shape the story, design the interface and build the web experience around the
                way your team needs to work.
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
