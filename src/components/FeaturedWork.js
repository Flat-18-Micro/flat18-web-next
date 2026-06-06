import ResponsiveImage from './ResponsiveImage'
import styles from '../styles/component-css/FeaturedWork.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

export default function FeaturedWork() {
  const featuredProjects = [
    {
      title: 'BTCPay Server',
      projectType: 'Open-source payments platform',
      audience: 'For a global Bitcoin payments project',
      description: 'A conversion-focused foundation site refresh for a widely used open-source payments platform.',
      image: '/images/portfolio-graphics/btcpayserver-mock.webp',
      projectLogo: '/images/portfolio-graphics/logos/btcpayserver.webp',
      link: 'https://btcpayserver.org',
      technologies: ['HTML5', 'CSS', 'JavaScript'],
      capabilities: ['Information architecture', 'Responsive frontend', 'Conversion path clarity'],
      outcome: 'Made the product easier to understand and trust without adding marketing noise.',
      status: 'Live'
    },
    {
      title: 'WalletScrutiny',
      projectType: 'Security research UX redesign',
      audience: 'For wallet researchers and privacy-conscious users',
      description: 'A brand and UX redesign to make wallet security research clearer, calmer and easier to trust.',
      image: '/images/portfolio-graphics/walletscrutiny-mock.webp',
      projectLogo: '/images/portfolio-graphics/logos/wallet-scrutiny.webp',
      link: 'https://walletscrutiny.com',
      technologies: ['JavaScript', 'HTML5', 'SCSS'],
      capabilities: ['Research-led UX', 'Content structure', 'Frontend implementation'],
      outcome: 'Turned dense technical analysis into a more usable product experience.',
      status: 'Current version'
    }
  ]

  return (
    <section
      className={styles.featuredSection}
      id="featured-work"
      data-bg-color={getSectionBackground('featuredWork')}
      data-text-color={getSectionTextColor('featuredWork')}
    >
      <div className="container">
        <div className={styles.featuredHeading}>
          <h2 className={styles.featuredTitle}>Work that proves the craft</h2>
          <p className={styles.featuredSubtitle}>
            Fast delivery only matters if the product still feels considered, stable and commercially useful. These examples show the interfaces, systems and product thinking we bring to LLM-accelerated builds.
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
                  <h3 className={styles.featuredProjectTitle}>{project.title}</h3>
                  <span className={styles.featuredStatus}>{project.status}</span>
                </div>

                <p className={styles.featuredDescription}>
                  {project.description}
                </p>

                <div className={styles.featuredMetrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>{project.projectType}</span>
                    <span className={styles.metricLabel}>Project type</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>{project.audience}</span>
                    <span className={styles.metricLabel}>Built for</span>
                  </div>
                </div>

                <div className={styles.capabilityBlock}>
                  <span>Key capabilities</span>
                  <ul>
                    {project.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>

                <p className={styles.featuredOutcome}>
                  {project.outcome}
                </p>

                <div className={styles.featuredTech}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.featuredCta}
                >
                  View project
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.featuredFooter}>
          <a href="#work" className="btn btn-secondary">
            View all projects
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
