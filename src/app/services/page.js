import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'
import contactStyles from '@/styles/component-css/Contact.module.css'
import Features from '@/components/Features'

export default function AiSeededDesignPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>
        <Features containerClassName={contactStyles.container} />
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
