#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Configuration
const BUILD_DIR = path.join(__dirname, '..', 'build');
const TEMPLATE_PATH = path.join(__dirname, 'password-template.html');
const PASSWORD = process.env.SITE_PASSWORD || 'default-password';

if (!fs.existsSync(BUILD_DIR)) {
  console.error('Build directory does not exist. Please run "npm run build" first.');
  process.exit(1);
}

if (process.env.SITE_PASSWORD === undefined) {
  console.warn('⚠️  Warning: Using default password. Set SITE_PASSWORD environment variable for custom password.');
}

console.log('🔐 Encrypting site with password protection...');

try {
  // Use recursive flag to encrypt all HTML files in all subdirectories
  const command = `npx staticrypt ${BUILD_DIR}/* \
    -r \
    -p "${PASSWORD}" \
    --short \
    -d "${BUILD_DIR}" \
    --template-title "House of Stake" \
    --template-instructions "This content is protected. Please enter the password to continue." \
    --template-button "Access Site" \
    --template-placeholder "Enter password" \
    --template-error "Incorrect password. Please try again." \
    --template-remember "Remember for this session" \
    --template-color-primary "#000000" \
    --template-color-secondary "#ffffff"`;
  
  execSync(command, { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  
  console.log('✅ Site successfully encrypted with password protection!');
  console.log('📁 Protected build ready in:', BUILD_DIR);
  console.log('🔑 Password required to access the site');
} catch (error) {
  console.error('❌ Error encrypting site:', error.message);
  process.exit(1);
}