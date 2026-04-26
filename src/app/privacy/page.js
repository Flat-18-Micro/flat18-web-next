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
              <p>We do not use cookies or trackers to enhance your experience on our main site, flat18.co.uk, except for one operational cookie used to make website live chat sessions work. The live chat is a self-hosted Chatwoot instance which gathers no user information. On Flat18 projects, hosted, staged, or otherwise executed codebases, we may set cookies for account and session management. In such cases, you will be informed of the cookie requirements.</p>

              <h3>Data Collection and Usage</h3>
              <p>Flat18 collects contact information from users during the account creation and usage process. This includes:</p>
              <ul role="list">
                <li><strong>Telegram Handle</strong></li>
                <li><strong>Email Address</strong></li>
                <li><strong>Company or Individual Name</strong></li>
                <li><strong>Physical Address</strong></li>
              </ul>
              <p>We may manually verify this information against a user's originating IP geolocation when we believe we have acquired it. However, we can only make educated guesses and assumptions about the IP address matched to the person with whom we are communicating.</p>
              <p>Flat18 does not knowingly utilise any third-party metrics service in any project on our servers. We rely on our own in-house metrics and analysis platform that ensures anonymity by excluding third-party plugins or services. The data derived from our service, which may comprise browser technology, accessing IP addresses, and referral URLs, is not used to identify an individual user.</p>
              <p>Whenever personal identifiable data is stored on our servers, we will take every reasonable precaution to prevent security breaches or data leaks. It is not, and will never be, our policy to disclose any part of the organised data collected on individuals, whether anonymous or identifiable, to any third party. The only exception is a formal, documented request from police or legal authorities.</p>

              <h3>Data Retention and Deletion</h3>
              <p>Flat18 aims to retain user information for 2 years. Users may request the deletion of their data from our accountancy system and communications platform, provided they are not active clients. We will comply with such requests, ensuring that no other personally identifiable information is kept. However, we will retain records of IP addresses as part of our growing IP geolocation database, which helps us determine that a user has previously made contact with us.</p>

              <h3>Profiling and Analytics</h3>
              <p>Flat18 has identified certain geographical regions from which we encounter a large number of potential scams directed at Flat18. As a result, we may consider the geographical location of a potential client and may ask additional questions to verify their sincerity. This is our only form of profiling and does not limit anyone's ability to access our services genuinely. This information is never recorded or shared with third parties and is purely an internal practice.</p>

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
