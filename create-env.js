const fs = require('fs');

// For local development, you can use a .env file
require('dotenv').config();

console.log('Generating env.js for Vercel deployment...');

const envConfig = `
window.ETAR_CONFIG = {
  API_KEY: "${process.env.VITE_API_KEY}",
  CLIENT_ID: "${process.env.VITE_CLIENT_ID}",
  ROUTING_TABLE_FOLDER_ID: "${process.env.VITE_ROUTING_TABLE_FOLDER_ID}",
  MAIN_ROOT_FOLDER_ID: "${process.env.VITE_MAIN_ROOT_FOLDER_ID}"
};
`;

fs.writeFileSync('env.js', envConfig);

console.log('env.js file generated successfully.');