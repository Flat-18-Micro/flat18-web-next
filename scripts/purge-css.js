const fs = require('fs');
const path = require('path');
const { PurgeCSS } = require('purgecss');

async function purgeUnusedCSS() {
  console.log('Purging unused CSS...');
  
  // Define the paths to your CSS files and content files
  const cssDir = path.join(__dirname, '../src/styles/component-css');
  const contentDirs = [
    path.join(__dirname, '../src/components'),
    path.join(__dirname, '../src/app'),
  ];
  
  // Get all CSS files
  const cssFiles = fs.readdirSync(cssDir)
    .filter(file => file.endsWith('.css'))
    .map(file => path.join(cssDir, file));
  
  // Get all content files
  const contentFiles = [];
  contentDirs.forEach(dir => {
    fs.readdirSync(dir)
      .filter(file => file.endsWith('.js') || file.endsWith('.jsx'))
      .forEach(file => contentFiles.push(path.join(dir, file)));
  });
  
  // Run PurgeCSS
  const result = await new PurgeCSS().purge({
    content: contentFiles,
    css: cssFiles,
    safelist: {
      standard: [
        /^container/, 
        /^btn/, 
        /^flex/, 
        /^justify-/, 
        /^items-/, 
        /^gap-/, 
        /^mt-/, 
        /^mb-/, 
        /^ml-/, 
        /^mr-/,
        /^p-/,
        /^m-/,
        /^w-/,
        /^h-/,
        /^text-/,
        /^bg-/,
        /^border-/,
        /^rounded-/,
        /^shadow-/,
        /^transition-/,
        /^transform-/,
        /^opacity-/,
        /^z-/,
        /^overflow-/,
        /^cursor-/,
        /^outline-/,
        /^focus:/,
        /^hover:/,
        /^active:/,
        /^disabled:/,
        /^bi-/
      ],
      deep: [/bi-.*/, /btn-.*/],
      greedy: [/^bi-/, /^btn-/]
    },
    // Don't remove CSS variables
    variables: true,
    // Keep keyframes
    keyframes: true,
    // Keep font faces
    fontFace: true,
    // Reject specific patterns
    rejected: true,
    // Print rejected selectors
    rejectedCss: true
  });
  
  // Write the purged CSS back to the files
  result.forEach(({ css, file }) => {
    const fileName = path.basename(file);
    const outputPath = path.join(cssDir, `purged-${fileName}`);
    
    fs.writeFileSync(outputPath, css);
    console.log(`Purged CSS written to ${outputPath}`);
    
    // Calculate size reduction
    const originalSize = fs.statSync(file).size;
    const purgedSize = Buffer.byteLength(css);
    const reduction = ((originalSize - purgedSize) / originalSize) * 100;
    
    console.log(`${fileName}: ${(originalSize / 1024).toFixed(2)} KB -> ${(purgedSize / 1024).toFixed(2)} KB (${reduction.toFixed(2)}% reduction)`);
  });
  
  console.log('CSS purging complete!');
}

// Run the function
purgeUnusedCSS().catch(console.error);
