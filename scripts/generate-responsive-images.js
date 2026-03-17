const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const portfolioDir = path.join(__dirname, '../public/images/portfolio-graphics')
const logoDir = path.join(portfolioDir, 'logos')

const imageSets = [
  {
    label: 'portfolio',
    dir: portfolioDir,
    files: [
      'hashboard.webp',
      'pulseops-scr.webp',
      'soc-pub-scr.webp',
      'archimedesfinance-mock.webp',
      'walletscrutiny-mock.webp',
      'btcpayserver-mock.webp',
    ],
    widths: [400, 800, 1000],
    quality: 72,
  },
  {
    label: 'logos',
    dir: logoDir,
    files: [
      'archimedes-finance.webp',
      'wallet-scrutiny.webp',
      'btcpayserver.webp',
      'zettahash.webp',
      'dvote.webp',
    ],
    widths: [120, 240, 360, 600, 1000],
    quality: 82,
  },
]

const shouldSkip = (inputPath, outputPath) => {
  if (!fs.existsSync(outputPath)) {
    return false
  }
  const inputStat = fs.statSync(inputPath)
  const outputStat = fs.statSync(outputPath)
  return outputStat.mtimeMs >= inputStat.mtimeMs
}

const createResponsiveVariants = async ({ dir, files, widths, quality, label }) => {
  console.log(`Generating responsive ${label} images...`)

  for (const file of files) {
    const inputPath = path.join(dir, file)
    if (!fs.existsSync(inputPath)) {
      console.warn(`  Missing source: ${inputPath}`)
      continue
    }

    const extension = path.extname(file)
    const baseName = path.basename(file, extension)
    const metadata = await sharp(inputPath).metadata()

    for (const width of widths) {
      if (metadata.width && width > metadata.width) {
        continue
      }

      const outputPath = path.join(dir, `${baseName}-w${width}${extension}`)

      if (shouldSkip(inputPath, outputPath)) {
        continue
      }

      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 6, smartSubsample: true })
        .toFile(outputPath)
    }
  }
}

const run = async () => {
  for (const set of imageSets) {
    await createResponsiveVariants(set)
  }
}

run().catch(error => {
  console.error('Failed generating responsive images:', error)
  process.exit(1)
})
