const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Portfolio images optimization
const portfolioDir = path.join(__dirname, '../public/images/portfolio-graphics');
const toolsDir = path.join(__dirname, '../public/images/tools');

// Function to optimize images
async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    // Default options
    const defaultOptions = {
      width: null,
      height: null,
      quality: 80,
      format: 'webp'
    };

    // Merge options
    const finalOptions = { ...defaultOptions, ...options };

    // Create sharp instance
    let sharpInstance = sharp(inputPath);

    // Resize if dimensions provided
    if (finalOptions.width || finalOptions.height) {
      sharpInstance = sharpInstance.resize(finalOptions.width, finalOptions.height, {
        fit: 'cover',
        position: 'center'
      });
    }

    // Convert to webp with quality setting
    if (finalOptions.format === 'webp') {
      sharpInstance = sharpInstance.webp({
        quality: finalOptions.quality,
        effort: 6, // Higher effort = better compression but slower
        smartSubsample: true, // Better chroma subsampling
        nearLossless: false, // True for near-lossless compression (higher quality but larger files)
        reductionEffort: 6 // Higher reduction effort for better compression
      });
    } else if (finalOptions.format === 'avif') {
      sharpInstance = sharpInstance.avif({
        quality: finalOptions.quality,
        effort: 9, // Maximum effort for best compression
        chromaSubsampling: '4:2:0' // Better compression with minimal visual impact
      });
    }

    // Save the optimized image
    await sharpInstance.toFile(outputPath);

    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;

    console.log(`Optimized ${path.basename(inputPath)}`);
    console.log(`  Original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`  Optimized: ${(optimizedSize / 1024).toFixed(2)} KB`);
    console.log(`  Reduction: ${((1 - optimizedSize / originalSize) * 100).toFixed(2)}%`);

    return {
      originalSize,
      optimizedSize,
      reduction: 1 - optimizedSize / originalSize
    };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
    return null;
  }
}

// Process portfolio images
async function optimizePortfolioImages() {
  console.log('Optimizing portfolio images...');

  // Get all PNG files
  const files = fs.readdirSync(portfolioDir)
    .filter(file => file.endsWith('.png'));

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of files) {
    const inputPath = path.join(portfolioDir, file);
    const outputPath = path.join(portfolioDir, file.replace('.png', '.webp'));

    // Skip if the webp already exists and is newer than the png
    if (fs.existsSync(outputPath)) {
      const pngStat = fs.statSync(inputPath);
      const webpStat = fs.statSync(outputPath);

      if (webpStat.mtimeMs > pngStat.mtimeMs) {
        console.log(`Skipping ${file} - webp is newer`);
        continue;
      }
    }

    // Optimize the image - portfolio images should be high quality but optimized
    const result = await optimizeImage(inputPath, outputPath, {
      quality: 75, // Slightly lower quality for better compression
      format: 'webp'
    });

    // Also create AVIF version for modern browsers
    const avifOutputPath = path.join(portfolioDir, file.replace('.png', '.avif'));
    await optimizeImage(inputPath, avifOutputPath, {
      quality: 65, // AVIF can use lower quality with good results
      format: 'avif'
    });

    if (result) {
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
    }
  }

  console.log('\nPortfolio Images Summary:');
  console.log(`  Total Original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Total Optimized: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Total Reduction: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(2)}%`);
}

// Process tool images
async function optimizeToolImages() {
  console.log('\nOptimizing tool images...');

  // Get all PNG files
  const files = fs.readdirSync(toolsDir)
    .filter(file => file.endsWith('.png'));

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of files) {
    const inputPath = path.join(toolsDir, file);
    const outputPath = path.join(toolsDir, file.replace('.png', '.webp'));

    // Skip if the webp already exists and is newer than the png
    if (fs.existsSync(outputPath)) {
      const pngStat = fs.statSync(inputPath);
      const webpStat = fs.statSync(outputPath);

      if (webpStat.mtimeMs > pngStat.mtimeMs) {
        console.log(`Skipping ${file} - webp is newer`);
        continue;
      }
    }

    // Optimize the image - tool logos can be smaller and more compressed
    const result = await optimizeImage(inputPath, outputPath, {
      quality: 70,
      format: 'webp'
    });

    if (result) {
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
    }
  }

  console.log('\nTool Images Summary:');
  console.log(`  Total Original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Total Optimized: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Total Reduction: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(2)}%`);
}

// Run the optimization
async function main() {
  await optimizePortfolioImages();
  await optimizeToolImages();
}

main().catch(console.error);
