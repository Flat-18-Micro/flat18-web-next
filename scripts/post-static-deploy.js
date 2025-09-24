const fs = require('fs')
const path = require('path')

const outDir = path.resolve(__dirname, '../out')

if (!fs.existsSync(outDir)) {
  console.log('Skipping static deploy post-processing: "out" directory not found.')
  process.exit(0)
}

const touchFile = (filePath) => {
  fs.closeSync(fs.openSync(filePath, 'w'))
}

const copyIfPresent = (source, destination) => {
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, destination)
  }
}

touchFile(path.join(outDir, '.nojekyll'))
copyIfPresent(path.resolve(__dirname, '../public/_headers'), path.join(outDir, '_headers'))
fs.writeFileSync(path.join(outDir, 'CNAME'), 'flat18.co.uk')

console.log('Static deploy post-processing complete.')
