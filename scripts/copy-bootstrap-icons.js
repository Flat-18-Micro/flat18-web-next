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

const copyRecursive = (sourcePath, targetPath) => {
  const stat = fs.statSync(sourcePath);

  if (stat.isDirectory()) {
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
    }

    fs.readdirSync(sourcePath).forEach(entry => {
      copyRecursive(path.join(sourcePath, entry), path.join(targetPath, entry));
    });
    return;
  }

  fs.copyFileSync(sourcePath, targetPath);
  console.log(`Copied: ${path.relative(sourceDir, sourcePath)}`);
};

// Copy files and subdirectories from source to destination
fs.readdirSync(sourceDir).forEach(entry => {
  copyRecursive(path.join(sourceDir, entry), path.join(destDir, entry));
});

console.log('Bootstrap Icons copied successfully!');
