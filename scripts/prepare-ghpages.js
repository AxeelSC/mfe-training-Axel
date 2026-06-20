const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();

const distShell = path.join(rootDir, 'dist', 'shell');
const distCatalog = path.join(rootDir, 'dist', 'catalog');
const distReports = path.join(rootDir, 'dist', 'reports');

const publicDir = path.join(rootDir, 'public');
const publicCatalog = path.join(publicDir, 'catalog');
const publicReports = path.join(publicDir, 'reports');

function assertExists(targetPath) {
  if (!fs.existsSync(targetPath)) {
    throw new Error(`Required path does not exist: ${targetPath}`);
  }
}

function copyDirectory(source, destination) {
  fs.cpSync(source, destination, {
    recursive: true,
    force: true,
  });
}

assertExists(distShell);
assertExists(distCatalog);
assertExists(distReports);

fs.rmSync(publicDir, {
  recursive: true,
  force: true,
});

fs.mkdirSync(publicCatalog, {
  recursive: true,
});

fs.mkdirSync(publicReports, {
  recursive: true,
});

copyDirectory(distShell, publicDir);
copyDirectory(distCatalog, publicCatalog);
copyDirectory(distReports, publicReports);

console.log('GitHub Pages public folder prepared successfully.');
console.log('Shell copied to: public/');
console.log('Catalog copied to: public/catalog/');
console.log('Reports copied to: public/reports/');
