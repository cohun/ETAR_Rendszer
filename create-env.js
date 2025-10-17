const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

// For local development, you can use a .env file
require('dotenv').config();

const outputDir = 'public';

// --- 1. Create Environment File ---
console.log(`Generating env.js in ${outputDir}...`);

const envConfig = `
window.ETAR_CONFIG = {
  API_KEY: "${process.env.VITE_API_KEY || ''}",
  CLIENT_ID: "${process.env.VITE_CLIENT_ID || ''}",
  ROUTING_TABLE_FOLDER_ID: "${process.env.VITE_ROUTING_TABLE_FOLDER_ID || ''}",
  MAIN_ROOT_FOLDER_ID: "${process.env.VITE_MAIN_ROOT_FOLDER_ID || ''}"
};
`;

// Ensure the output directory exists and is clean
fse.ensureDirSync(outputDir);

fs.writeFileSync(path.join(outputDir, 'env.js'), envConfig);
console.log('env.js file generated successfully.');

// --- 2. Copy Static Assets ---
console.log(`Copying static assets to ${outputDir}...`);

const assetsToCopy = [
    'ETAR_H-IITB_512.png',
    'ETAR_H.png',
    'logo.jpg'
];

// Copy etar_rendszer.html to public/index.html
fse.copySync('etar_rendszer.html', path.join(outputDir, 'index.html'));
console.log('- Copied etar_rendszer.html to index.html');

assetsToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        fse.copySync(file, path.join(outputDir, file), { overwrite: true });
        console.log(`- Copied ${file}`);
    } else {
        console.warn(`- Warning: Asset ${file} not found, skipping.`);
    }
});

console.log('Build process completed.');