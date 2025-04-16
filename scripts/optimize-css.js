const fs = require('fs');
const path = require('path');
const csso = require('csso');
const glob = require('glob');

// Function to optimize CSS files
async function optimizeCSS() {
  console.log('Optimizing CSS files...');
  
  // Find all CSS files in the styles directory
  const cssFiles = glob.sync('src/styles/**/*.css');
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  // Process each CSS file
  for (const file of cssFiles) {
    try {
      const filePath = path.resolve(file);
      const content = fs.readFileSync(filePath, 'utf8');
      const originalSize = Buffer.byteLength(content);
      totalOriginalSize += originalSize;
      
      // Optimize the CSS
      const optimized = csso.minify(content, {
        restructure: true,
        comments: false
      });
      
      // Write the optimized CSS back to the file
      fs.writeFileSync(filePath, optimized.css);
      
      const optimizedSize = Buffer.byteLength(optimized.css);
      totalOptimizedSize += optimizedSize;
      
      const reduction = ((originalSize - optimizedSize) / originalSize) * 100;
      console.log(`${file}: ${(originalSize / 1024).toFixed(2)} KB -> ${(optimizedSize / 1024).toFixed(2)} KB (${reduction.toFixed(2)}% reduction)`);
    } catch (error) {
      console.error(`Error optimizing ${file}:`, error);
    }
  }
  
  const totalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100;
  console.log(`\nTotal: ${(totalOriginalSize / 1024).toFixed(2)} KB -> ${(totalOptimizedSize / 1024).toFixed(2)} KB (${totalReduction.toFixed(2)}% reduction)`);
  console.log('CSS optimization complete!');
}

// Run the optimization
optimizeCSS().catch(console.error);
