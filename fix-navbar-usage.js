'use strict';

const fs = require('fs');
const path = require('path');

// Function to find all page.js files in the src/app directory
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findPageFiles(filePath, fileList);
    } else if (file === 'page.js') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to update a file to remove Navbar usage
function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file still has Navbar usage
  if (content.includes("<Navbar />")) {
    console.log(`Fixing ${filePath}...`);
    
    // Replace the pattern where Navbar is used
    content = content.replace(/<main>[\s\n]*<Navbar \/>[\s\n]*/, '<main>\n      ');
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    
    console.log(`Fixed ${filePath}`);
  }
}

// Main function
function main() {
  const appDir = path.join(__dirname, 'src', 'app');
  const pageFiles = findPageFiles(appDir);
  
  console.log(`Found ${pageFiles.length} page files to check.`);
  
  pageFiles.forEach(file => {
    updateFile(file);
  });
  
  console.log('All page components have been fixed!');
}

main();
