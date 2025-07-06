
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import archiver from 'archiver';

const projectRoot = process.cwd();
const buildDir = path.join(projectRoot, 'dist');
const zipPath = path.join(projectRoot, 'cactus-media-website.zip');

console.log('🌵 Building and packaging Cactus Media Group website...\n');

// Step 1: Clean previous builds
console.log('🧹 Cleaning previous builds...');
if (fs.existsSync(buildDir)) {
  fs.rmSync(buildDir, { recursive: true, force: true });
}
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

// Step 2: Build the project
console.log('🔨 Building production version...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 3: Optimize assets
console.log('⚡ Optimizing assets...');
const publicDir = path.join(buildDir, 'public');

// Copy static assets to build directory
const clientPublicDir = path.join(projectRoot, 'client', 'public');
if (fs.existsSync(clientPublicDir)) {
  fs.cpSync(clientPublicDir, publicDir, { recursive: true });
}

// Step 4: Create production-ready files
console.log('📄 Creating production files...');

// Create .htaccess for Apache servers
const htaccessContent = `
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Enable caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Handle client-side routing
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options DENY
    Header always set X-Content-Type-Options nosniff
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;

fs.writeFileSync(path.join(publicDir, '.htaccess'), htaccessContent.trim());

// Create nginx.conf for Nginx servers
const nginxConfig = `
server {
    listen 80;
    server_name _;
    root /var/www/html;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}
`;

fs.writeFileSync(path.join(publicDir, 'nginx.conf'), nginxConfig.trim());

// Create deployment README
const deploymentReadme = `
# Cactus Media Group Website - Deployment Guide

## 🌵 Welcome to Cactus Media Group!

This package contains the complete, production-ready website for Cactus Media Group.

## 📁 Package Contents

- \`index.html\` - Main application entry point
- \`assets/\` - Optimized images, fonts, and media files
- \`static/\` - JavaScript and CSS bundles
- \`.htaccess\` - Apache server configuration
- \`nginx.conf\` - Nginx server configuration

## 🚀 Deployment Options

### Option 1: Static File Hosting (Recommended)
- Upload all files to your web server's public directory
- Ensure your server supports client-side routing
- The website will work on any modern web server

### Option 2: Apache Server
- Upload files to your Apache web root
- The included \`.htaccess\` file handles routing and optimization
- Ensure mod_rewrite is enabled

### Option 3: Nginx Server
- Upload files to your Nginx web root
- Use the included \`nginx.conf\` as reference for your server configuration
- Restart Nginx after configuration changes

### Option 4: CDN Deployment
- Upload to services like:
  - Netlify (drag and drop the entire folder)
  - Vercel (connect to your repository)
  - AWS S3 + CloudFront
  - Google Cloud Storage

## 🔧 Technical Specifications

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom brand colors
- **Build System**: Vite (optimized for production)
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Responsive**: Fully optimized for mobile devices
- **Languages**: English and Arabic with RTL support

## 🎨 Features

- ✅ Fully responsive design
- ✅ Bilingual support (English/Arabic)
- ✅ SEO optimized with proper meta tags
- ✅ Fast loading with optimized assets
- ✅ Professional animations and transitions
- ✅ Contact form functionality
- ✅ Portfolio showcase
- ✅ Service details

## 📞 Support

For technical support or customization requests:
- Email: support@cactusmediajo.com
- Website: https://cactusmediajo.com

## 🌟 About Cactus Media Group

"In a world full of flowers, be a cactus!"

Premium digital solutions engineered for resilience and growth.

---

Built with ❤️ by Cactus Media Group
`;

fs.writeFileSync(path.join(publicDir, 'README.md'), deploymentReadme.trim());

// Step 5: Create the zip file
console.log('📦 Creating zip file...');

const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression
});

output.on('close', () => {
  const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2);
  console.log(`\n✅ Successfully created: cactus-media-website.zip`);
  console.log(`📊 Package size: ${sizeInMB} MB`);
  console.log(`📁 Total files: ${archive.pointer()} bytes`);
  console.log(`\n🚀 Your website is ready for deployment!`);
  console.log(`📦 Download: ${zipPath}`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.directory(publicDir, false);
archive.finalize();
