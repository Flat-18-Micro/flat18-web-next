import Image from 'next/image'
import styles from '@/styles/component-css/Tools.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const capabilities = [
  ['01', 'Product interfaces', 'Vue, Webflow and modern frontend tools for useful, maintainable interfaces.'],
  ['02', 'Data and infrastructure', 'Node.js, Neon, Cloudflare and Vercel for the services behind the product.'],
  ['03', 'Payments and Web3', 'Stripe, BTCPay, Infura and WalletConnect where products need money or chain-aware flows.'],
  ['04', 'AI-assisted delivery', 'ChatGPT, DeepSeek and Le Chat help us explore faster. Senior review directs the result.'],
]

const motionRows = [
  [
    { name: 'Vue.js', logo: '/images/tools/vuejs.svg' },
    { name: 'Webflow', logo: '/images/tools/Webflow_logo_2023.svg' },
    { name: 'Affinity', logo: '/images/tools/Affinity_Designer_2-logo.svg' },
    { name: 'GitHub', logo: '/images/tools/github.webp' },
  ],
  [
    { name: 'Node.js', logo: '/images/tools/Node.js_logo.svg' },
    { name: 'Neon', logo: '/images/tools/iddKu5-cyx_logos.webp' },
    { name: 'Cloudflare', logo: '/images/tools/cloudflare.svg' },
    { name: 'Vercel', logo: '/images/tools/vercel.webp' },
  ],
  [
    { name: 'Stripe', logo: '/images/tools/Stripe_Logo,_revised_2016.svg' },
    { name: 'BTCPay', logo: '/images/tools/btcpay-logo-white-txt.svg' },
    { name: 'Infura', logo: '/images/tools/infura_wordmark_red.svg' },
    { name: 'WalletConnect', logo: '/images/tools/Logo.svg' },
  ],
  [
    { name: 'ChatGPT', logo: '/images/tools/chatgpt.svg' },
    { name: 'DeepSeek', logo: '/images/tools/DeepSeek_logo.svg' },
    { name: 'Le Chat', logo: '/images/tools/Mistral_AI_logo_(2025–).svg' },
  ],
]

export default function Tools() {
  return (
    <section
      className={styles.toolsSection}
      id="stack"
      data-bg-color={getSectionBackground('tools')}
      data-text-color={getSectionTextColor('tools')}
      aria-labelledby="tools-heading"
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.deliveryLayout}>
          <div className={styles.copy}>
            <span className="label-uppercase">Technology we use</span>
            <h2 id="tools-heading">The technology behind the speed.</h2>
            <p className={styles.intro}>A focused modern stack for building products end to end. The tools change with the work; the judgement behind their use does not.</p>
          </div>

          <div className={styles.motionPanel} aria-hidden="true">
            {motionRows.map((row, index) => (
              <div key={row[0].name} className={`${styles.motionRow} ${index % 2 ? styles.reverse : ''}`}>
                <div className={styles.motionTrack}>
                  {[...row, ...row, ...row].map((tool, tileIndex) => (
                    <span key={`${tool.name}-${tileIndex}`} className={styles.motionTile}>
                      <Image src={tool.logo} alt="" width={32} height={32} className={styles.toolLogo} />
                      <span className={styles.toolName}>{tool.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
