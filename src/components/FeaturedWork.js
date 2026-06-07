import ResponsiveImage from './ResponsiveImage'
import TitleWords from '@/components/TitleWords'
import styles from '../styles/component-css/FeaturedWork.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function FeaturedWork() {
  const featuredProjects = [
    {
      title: 'BTCPay Server',
      projectType: 'Open-source payments platform',
      description: 'A clearer product site for a widely used Bitcoin payments platform.',
      image: '/images/portfolio-graphics/btcpayserver-mock.webp',
      projectLogo: '/images/portfolio-graphics/logos/btcpayserver.webp',
      link: 'https://btcpayserver.org',
      value: 'Made the product easier to understand and trust without adding marketing noise.',
    },
    {
      title: 'WalletScrutiny',
      projectType: 'Security research UX redesign',
      description: 'A brand and UX redesign for wallet security research.',
      image: '/images/portfolio-graphics/walletscrutiny-mock.webp',
      projectLogo: '/images/portfolio-graphics/logos/wallet-scrutiny.webp',
      link: 'https://walletscrutiny.com',
      value: 'Turned dense technical analysis into a calmer, more usable product experience.',
    }
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
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.featuredCta}
                >
                  View work
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
