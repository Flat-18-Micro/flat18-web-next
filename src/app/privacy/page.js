import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function PrivacyPage() {
  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <div className={styles.container}>
          <div className={styles.pageContent}>
            <h1 className={styles.pageHeading}>FLAT18.CO.UK Policy on User Privacy</h1>
            <div className={`${styles.textContent} ${styles.legalContent}`}>
              <p>This policy applies to all services, websites, apps, and projects directly provided by FLAT EIGHTEEN MICROSYSTEMS DEVELOPMENT LLC (FLAT 18), including testing, beta, and alpha releases, unless another data-handling policy exists and explicitly overrides this policy by declaration. This policy applies to site visitors worldwide.</p>
              <p>This document does not cover third-party services or platforms that may interact with Flat18 systems. Each third party has its own privacy policies, which will apply independently. Where we recognise a conflict between our policy and a third party's policy, we may try to inform the user, but we cannot take responsibility for third-party policies.</p>

              <h3>Cookies and Trackers</h3>
              <p>We use privacy-focused analytics on our main site to understand aggregate traffic, page use, referral sources and contact actions. SignalMap, operated by Flat 18, records page views, anonymous session-level behaviour and named actions such as a form submission or an email click. We also use Umami for website analytics. These tools do not need a marketing cookie to record the basic event.</p>
              <p>Live chat uses Chatwoot and may set an operational cookie so that a conversation works. We may also enable advertising-platform measurement tags for a campaign. On Flat18 projects, hosted, staged or otherwise executed codebases, we may set cookies for account and session management. Where a project needs them, we will explain the requirement.</p>

              <h3>Data Collection and Usage</h3>
              <p>When you contact us, we collect the information you choose to provide so that we can respond to your enquiry. This may include:</p>
              <ul role="list">
                <li><strong>Telegram Handle</strong></li>
                <li><strong>Email Address</strong></li>
                <li><strong>Company or Individual Name</strong></li>
                <li><strong>Physical Address</strong></li>
              </ul>
              <p>When you use the website contact form, we may add an IP-based location and network insight to the enquiry to help us prevent abuse and understand where the request came from. This may include an approximate city or country, timezone, network and ASN. It is an estimate and does not identify a person by itself.</p>
              <p>Our analytics are used to understand how the site performs, not to identify individual visitors. Analytics data may include browser type, referral URL, approximate location, anonymous session behaviour and the name of a contact action. We do not put form content, names or email addresses into analytics events.</p>
              <p>Whenever personally identifiable data is stored on our servers, we will take every reasonable precaution to prevent security breaches or data leaks. It is not, and will never be, our policy to disclose any part of the organised data collected on individuals, whether anonymous or identifiable, to any third party. The only exception is a formal, documented request from police or legal authorities.</p>

              <h3>Data Retention and Deletion</h3>
              <p>Flat18 aims to retain user information for 2 years. Users may request the deletion of their data from our accountancy system and communications platform, provided they are not active clients. We will comply with such requests, ensuring that no other personally identifiable information is kept. However, we will retain records of IP addresses as part of our growing IP geolocation database, which helps us determine that a user has previously made contact with us.</p>

              <h3>Profiling and Analytics</h3>
              <p>We may use the aggregate analytics and IP-based insight described above to identify likely abuse, assess the quality of site traffic and decide whether an enquiry needs further verification. This does not automatically limit anyone's access to our services. We do not make automated decisions about a person based on this information.</p>

              <h3>Third-Party Payment Processors</h3>
              <p>We use third-party payment processors, such as Stripe and PayPal, for processing fiat-currency transactions. These processors have their own privacy policies, which apply when you visit their domains. It is the user's responsibility to research and understand these policies. We are limited in how we portray PayPal and Stripe on our payments pages.</p>

              <h3>User Rights and Requests</h3>
              <p>Users have the right to request deletion, modification, or access to their data. To make such a request, users should contact us from their registered contact method, such as their Telegram handle or email address. We will then verify their identity through follow-up communication, requesting details about their interactions with us, such as the value, currency, and date of their last payment to us. Once verified, we will process the request accordingly.</p>

              <h3>Security Measures</h3>
              <p>Flat18 is committed to protecting user data by employing industry-standard security measures. This includes the use of encryption, firewalls, secure access controls, and regular security audits. We ensure that all personal data is stored securely and that only authorised personnel have access to this information. Our security practices are regularly reviewed and updated to mitigate any potential risks and to comply with industry best practices.</p>
            </div>
            <div className={styles.badge}>Partially Updated: June 2024</div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
