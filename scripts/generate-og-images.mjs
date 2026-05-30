import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const outputDir = path.resolve(repoRoot, 'public/og')
const logoPath = path.resolve(repoRoot, 'public/og/_sources/flat18-logo.png')

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
  {
    file: 'communication-standard.png',
    kicker: 'Standard',
    title: ['Communication', 'Standard'],
    titleAccent: 1,
    script: 'ease',
    description: ['Clear, direct communication', 'at every stage of the work.'],
  },
]

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function dots({ x, y, columns, rows, stepX, stepY, amplitude, phase, opacity, rotate = 0 }) {
  const circles = []

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const wave = Math.sin(column * 0.21 + row * 0.32 + phase) * amplitude
      const drift = Math.cos(column * 0.12 + phase) * 10
      const cx = column * stepX + drift
      const cy = row * stepY + wave
      const fadeX = Math.min(column / 10, (columns - column) / 14, 1)
      const fadeY = Math.min(row / 5, (rows - row) / 5, 1)
      const alpha = Math.max(0, opacity * fadeX * fadeY)
      const colour = row % 3 === 0 ? '#00c8ff' : '#0058ff'

      circles.push(`<circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="1.08" fill="${colour}" opacity="${alpha.toFixed(3)}"/>`)
    }
  }

  return `<g transform="translate(${x} ${y}) rotate(${rotate})">${circles.join('')}</g>`
}

function textLines(lines, { startY, fontSize, lineHeight, accentIndex }) {
  return lines.map((line, index) => {
    const fill = index === accentIndex ? 'url(#titleGradient)' : '#f8fbff'
    return `<text x="70" y="${startY + index * lineHeight}" text-anchor="start" class="title" font-size="${fontSize}" fill="${fill}">${escapeXml(line)}</text>`
  }).join('')
}

function descriptionLines(lines, startY) {
  return lines.map((line, index) => (
    `<text x="70" y="${startY + index * 46}" text-anchor="start" class="description">${escapeXml(line)}</text>`
  )).join('')
}

function svgFor(page, logoDataUri) {
  const titleFontSize = page.title.some((line) => line.length > 13) ? 86 : 96
  const titleLineHeight = titleFontSize * 0.88
  const titleStartY = 176
  const titleBottom = titleStartY + (page.title.length - 1) * titleLineHeight
  const descriptionY = titleBottom + 86

  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgA" cx="50%" cy="44%" r="70%">
      <stop offset="0%" stop-color="#07112a"/>
      <stop offset="58%" stop-color="#030713"/>
      <stop offset="100%" stop-color="#01030b"/>
    </radialGradient>
    <radialGradient id="glowLeft" cx="22%" cy="70%" r="38%">
      <stop offset="0%" stop-color="#006cff" stop-opacity=".28"/>
      <stop offset="100%" stop-color="#006cff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowRight" cx="82%" cy="48%" r="38%">
      <stop offset="0%" stop-color="#00d5ff" stop-opacity=".24"/>
      <stop offset="100%" stop-color="#00d5ff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="titleGradient" x1="70" x2="760" y1="0" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0a75ff"/>
      <stop offset="54%" stop-color="#00a8ff"/>
      <stop offset="100%" stop-color="#33d6ff"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-30%" width="140%" height="160%">
      <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000814" flood-opacity=".6"/>
    </filter>
    <style>
      .kicker { font-family: Inter, Arial, Helvetica, sans-serif; font-weight: 750; letter-spacing: 4px; text-transform: uppercase; }
      .title { font-family: Inter, Arial, Helvetica, sans-serif; font-weight: 850; letter-spacing: 0; filter: url(#softShadow); }
      .description { font-family: Inter, Arial, Helvetica, sans-serif; font-size: 34px; font-weight: 450; fill: #e7eef8; letter-spacing: 0; filter: url(#softShadow); }
      .domain { font-family: Inter, Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 850; letter-spacing: 1px; }
    </style>
  </defs>

  <rect width="1200" height="630" fill="url(#bgA)"/>
  <rect width="1200" height="630" fill="url(#glowLeft)"/>
  <rect width="1200" height="630" fill="url(#glowRight)"/>
  <rect width="1200" height="630" fill="#00030c" opacity=".22"/>

  ${dots({ x: -142, y: 360, columns: 66, rows: 18, stepX: 13, stepY: 7, amplitude: 31, phase: 0.4, opacity: 0.42, rotate: -9 })}
  ${dots({ x: 645, y: 142, columns: 66, rows: 18, stepX: 12, stepY: 7, amplitude: 27, phase: 2.1, opacity: 0.44, rotate: 8 })}

  <circle cx="958" cy="315" r="244" fill="#006cff" opacity=".07"/>
  <circle cx="958" cy="315" r="196" fill="#00d5ff" opacity=".05"/>
  <image href="${logoDataUri}" x="762" y="120" width="390" height="390" preserveAspectRatio="xMidYMid meet"/>

  <text x="70" y="104" text-anchor="start" class="kicker" font-size="18" fill="#7089ad">${escapeXml(page.kicker)}</text>

  ${textLines(page.title, {
    startY: titleStartY,
    fontSize: titleFontSize,
    lineHeight: titleLineHeight,
    accentIndex: page.titleAccent,
  })}

  <line x1="70" y1="${descriptionY - 54}" x2="260" y2="${descriptionY - 54}" stroke="#0878d8" stroke-opacity=".9" stroke-width="3"/>
  ${descriptionLines(page.description, descriptionY)}
  <text x="70" y="552" text-anchor="start" class="domain" fill="#16d1ff">flat18.co.uk</text>
</svg>`
}

async function render() {
  await fs.access(logoPath)

  const logo = await sharp(logoPath)
    .resize(390, 390, { fit: 'contain' })
    .png()
    .toBuffer()
  const logoDataUri = `data:image/png;base64,${logo.toString('base64')}`

  for (const page of pages) {
    const svg = Buffer.from(svgFor(page, logoDataUri))

    await sharp(svg)
      .flatten({ background: '#01030b' })
      .removeAlpha()
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(path.join(outputDir, page.file))
  }
}

render().catch((error) => {
  console.error(error)
  process.exit(1)
})
