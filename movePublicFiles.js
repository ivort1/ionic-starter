// movePublicFiles.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const appDir = path.join(distDir, 'app');

// Ensure the folder dist/app exists
if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

// Function to move a file from dist to dist/app
function moveFile(filename) {
  const src = path.join(distDir, filename);
  const dest = path.join(appDir, filename);
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
    console.log(`Moved ${filename} to dist/app`);
  }
}

// Function to move a folder from dist to dist/app
function moveFolder(folderName) {
  const src = path.join(distDir, folderName);
  const dest = path.join(appDir, folderName);
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
    console.log(`Moved folder ${folderName} to dist/app`);
  }
}

// Move the mobile app's entry file
moveFile('index.html');

// Move the manifest file to dist/app so that it's located at /app/manifest.json
moveFile('manifest.json');

// Move any favicon files (images with names starting with 'favicon')
fs.readdirSync(distDir).forEach(file => {
  if (/^favicon/.test(file)) {
    moveFile(file);
  }
});

// Move the assets folder so that assets become available at /app/assets
moveFolder('assets');