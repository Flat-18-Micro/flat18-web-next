import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createCanvas, registerFont, loadImage } from 'canvas'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const outputDir = path.resolve(repoRoot, 'public/og')
const logoPath = path.resolve(repoRoot, 'public/og/_sources/flat18-logo.png')

const delaGothicPath = path.resolve(repoRoot, 'public/fonts/dela-gothic-one/dela-gothic-one-v19-latin-regular.ttf')
const interRegularPath = path.resolve(repoRoot, 'public/fonts/inter-v20-latin/inter-v20-latin-regular.ttf')
const interMediumPath = path.resolve(repoRoot, 'public/fonts/inter-v20-latin/inter-v20-latin-500.ttf')
const interBoldPath = path.resolve(repoRoot, 'public/fonts/inter-v20-latin/inter-v20-latin-700.ttf')

// Register fonts for Canvas
registerFont(delaGothicPath, { family: 'Dela Gothic One', weight: 'normal' })
registerFont(interRegularPath, { family: 'Inter', weight: 'normal' })
registerFont(interMediumPath, { family: 'Inter', weight: '500' })
registerFont(interBoldPath, { family: 'Inter', weight: 'bold' })

const width = 1200
const height = 630

const pages = [
  {
    file: 'home.png',
    kicker: 'Home',
    title: ['Design +', 'Development'],
    titleAccent: 1,
    script: 'partner',
    description: ['Websites, apps and dashboards.', 'Built fast, clean, and future-proof.'],
  },
  {
    file: 'about.png',
    kicker: 'About',
    title: ['About', 'Flat 18'],
    titleAccent: 1,
    script: 'senior team',
    description: ['A senior design and engineering team', 'for clear, high-quality products.'],
  },
  {
    file: 'services.png',
    kicker: 'Services',
    title: ['Design +', 'Engineering'],
    titleAccent: 1,
    script: 'services',
    description: ['Product design, web engineering, fintech and Web3 delivery.', 'Built with ongoing support.'],
  },
  {
    file: 'ui-ux-design.png',
    kicker: 'Services',
    title: ['UI/UX', 'Design'],
    titleAccent: 1,
    script: 'clarity',
    description: ['Research, prototypes, and design systems', 'that make products easier to use.'],
  },
  {
    file: 'web-development.png',
    kicker: 'Services',
    title: ['Web', 'Development'],
    titleAccent: 1,
    script: 'performance',
    description: ['Next.js and React websites and MVPs', 'built fast, clean, and maintainable.'],
  },
  {
    file: 'app-development.png',
    kicker: 'Services',
    title: ['App', 'Development'],
    titleAccent: 1,
    script: 'products',
    description: ['Dashboards, internal tools, and MVPs', 'built by a senior product team.'],
  },
  {
    file: 'api-integrations.png',
    kicker: 'Services',
    title: ['API', 'Integration'],
    titleAccent: 1,
    script: 'connected',
    description: ['Payments, data platforms, and third-party systems', 'connected with reliable delivery.'],
  },
  {
    file: 'maintenance-support.png',
    kicker: 'Services',
    title: ['Maintenance', '+ Support'],
    titleAccent: 1,
    script: 'steady',
    description: ['Monitoring, updates, and support', 'to keep products stable and secure.'],
  },
  {
    file: 'web3-blockchain.png',
    kicker: 'Services',
    title: ['Web3 +', 'Blockchain'],
    titleAccent: 1,
    script: 'secure',
    description: ['Wallets, smart contracts, and decentralised apps', 'delivered with senior engineering.'],
  },
  {
    file: 'ai-seeded-design.png',
    kicker: 'Services',
    title: ['AI-Seeded', 'Design'],
    titleAccent: 1,
    script: 'assets',
    description: ['Faster concepting, visual iteration, and production assets', 'with a clear human review step.'],
  },
  {
    file: 'ai-augmented-development.png',
    kicker: 'Services',
    title: ['AI-Augmented', 'Development'],
    titleAccent: 1,
    script: 'cleaner code',
    description: ['AI-assisted workflows for faster delivery', 'and maintainable production code.'],
  },
  {
    file: 'ai-prompt-engineering.png',
    kicker: 'Services',
    title: ['AI Prompt', 'Engineering'],
    titleAccent: 1,
    script: 'reliable',
    description: ['Structured prompts and workflows', 'for production-ready AI systems.'],
  },
  {
    file: 'case-studies.png',
    kicker: 'Work',
    title: ['Case', 'Studies'],
    titleAccent: 1,
    script: 'shipped',
    description: ['Open-source products and client launches', 'with clear positioning and strong execution.'],
  },
  {
    file: 'pricing.png',
    kicker: 'Pricing',
    title: ['Flat 18', 'Pricing'],
    titleAccent: 1,
    script: 'transparent',
    description: ['Subscription and fixed-scope work', 'priced for focused, senior delivery.'],
  },
  {
    file: 'founder-version.png',
    kicker: 'Founder',
    title: ['Founder', 'Version'],
    titleAccent: 1,
    script: 'direct',
    description: ['A clear founder-first view of how we build', 'and ship products in weeks.'],
  },
  {
    file: 'privacy.png',
    kicker: 'Legal',
    title: ['Privacy', 'Policy'],
    titleAccent: 1,
    script: 'clear',
    description: ['How we handle data, cookies, and privacy', 'across our services.'],
  },
  {
    file: 'terms.png',
    kicker: 'Legal',
    title: ['Terms of', 'Service'],
    titleAccent: 1,
    script: 'plain English',
    description: ['The terms that define how we work together', 'in clear, readable language.'],
  },
]

function drawBackground(ctx) {
  const grad = ctx.createRadialGradient(width * 0.5, height * 0.44, 0, width * 0.5, height * 0.44, width * 0.7)
  grad.addColorStop(0, '#07112a')
  grad.addColorStop(0.58, '#030713')
  grad.addColorStop(1, '#01030b')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, width, height)

  // Glows
  const glowLeft = ctx.createRadialGradient(width * 0.22, height * 0.7, 0, width * 0.22, height * 0.7, width * 0.38)
  glowLeft.addColorStop(0, 'rgba(0, 108, 255, 0.28)')
  glowLeft.addColorStop(1, 'rgba(0, 108, 255, 0)')
  ctx.fillStyle = glowLeft
  ctx.fillRect(0, 0, width, height)

  const glowRight = ctx.createRadialGradient(width * 0.82, height * 0.48, 0, width * 0.82, height * 0.48, width * 0.38)
  glowRight.addColorStop(0, 'rgba(0, 213, 255, 0.24)')
  glowRight.addColorStop(1, 'rgba(0, 213, 255, 0)')
  ctx.fillStyle = glowRight
  ctx.fillRect(0, 0, width, height)

  ctx.fillStyle = 'rgba(0, 3, 12, 0.22)'
  ctx.fillRect(0, 0, width, height)
}

function drawDots(ctx, { x, y, columns, rows, stepX, stepY, amplitude, phase, opacity, rotate = 0 }) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate((rotate * Math.PI) / 180)
  ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const offsetX = Math.sin(col * 0.21 + row * 0.32 + phase) * amplitude
      const offsetY = Math.cos(col * 0.21 + row * 0.32 + phase) * amplitude
      ctx.beginPath()
      ctx.arc(col * stepX + offsetX, row * stepY + offsetY, 1, 0, Math.PI * 2)
      ctx.fill()
    }
  }
  ctx.restore()
}

async function render() {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')
  const logo = await loadImage(logoPath)

  for (const page of pages) {
    ctx.clearRect(0, 0, width, height)
    drawBackground(ctx)

    drawDots(ctx, { x: -142, y: 360, columns: 66, rows: 18, stepX: 13, stepY: 7, amplitude: 31, phase: 0.4, opacity: 0.42, rotate: -9 })
    drawDots(ctx, { x: 645, y: 142, columns: 66, rows: 18, stepX: 12, stepY: 7, amplitude: 27, phase: 2.1, opacity: 0.44, rotate: 8 })

    // Decorative circles
    ctx.fillStyle = 'rgba(0, 108, 255, 0.07)'
    ctx.beginPath()
    ctx.arc(958, 315, 244, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = 'rgba(0, 213, 255, 0.05)'
    ctx.beginPath()
    ctx.arc(958, 315, 196, 0, Math.PI * 2)
    ctx.fill()

    ctx.drawImage(logo, 762, 120, 390, 390)

    // Kicker
    ctx.font = '500 18px "Inter"'
    ctx.fillStyle = '#7089ad'
    ctx.letterSpacing = '4px'
    ctx.textBaseline = 'top'
    ctx.fillText(page.kicker.toUpperCase(), 70, 104)
    ctx.letterSpacing = '0px'

    // Title
    const titleFontSize = page.title.some((line) => line.length > 13) ? 78 : 88
    const titleLineHeight = titleFontSize * 0.98
    const titleStartY = 108

    ctx.font = `400 ${titleFontSize}px "Dela Gothic One"`
    ctx.textBaseline = 'top'
    
    page.title.forEach((line, i) => {
      if (i === page.titleAccent) {
        const titleGrad = ctx.createLinearGradient(70, 0, 760, 0)
        titleGrad.addColorStop(0, '#0a75ff')
        titleGrad.addColorStop(0.54, '#00a8ff')
        titleGrad.addColorStop(1, '#33d6ff')
        ctx.fillStyle = titleGrad
      } else {
        ctx.fillStyle = '#f8fbff'
      }
      
      // Shadow effect
      ctx.shadowColor = 'rgba(0, 8, 20, 0.6)'
      ctx.shadowBlur = 5
      ctx.shadowOffsetY = 4
      ctx.fillText(line, 70, titleStartY + i * titleLineHeight)
      ctx.shadowColor = 'transparent'
    })

    const titleBottom = titleStartY + (page.title.length - 1) * titleLineHeight
    const descriptionY = titleBottom + 186

    // Line
    ctx.strokeStyle = '#0878d8'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(70, descriptionY - 34)
    ctx.lineTo(460, descriptionY - 34)
    ctx.stroke()

    // Description
    ctx.font = '400 34px "Inter"'
    ctx.fillStyle = '#e7eef8'
    page.description.forEach((line, i) => {
      ctx.shadowColor = 'rgba(0, 8, 20, 0.6)'
      ctx.shadowBlur = 5
      ctx.shadowOffsetY = 4
      ctx.fillText(line, 70, descriptionY + i * 46)
      ctx.shadowColor = 'transparent'
    })

    // Domain
    ctx.font = 'bold 24px "Inter"'
    ctx.fillStyle = '#16d1ff'
    ctx.fillText('flat18.co.uk', 70, 552)

    const buffer = canvas.toBuffer('image/png')
    await fs.writeFile(path.join(outputDir, page.file), buffer)
  }
}

render().catch((error) => {
  console.error(error)
  process.exit(1)
})
