const fs = require('fs');
const path = require('path');

// Source and destination paths
const sourceDir = path.join(__dirname, '../node_modules/bootstrap-icons/font');
const destDir = path.join(__dirname, '../public/bootstrap-icons/font');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`Created directory: ${destDir}`);
}

// Copy files from source to destination
fs.readdirSync(sourceDir).forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(destDir, file);
  
  // Skip if it's a directory
  if (fs.statSync(sourcePath).isDirectory()) return;
  
  // Copy the file
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Copied: ${file}`);
});

console.log('Bootstrap Icons copied successfully!');
