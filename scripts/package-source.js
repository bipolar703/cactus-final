
import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const zipPath = path.join(projectRoot, 'cactus-media-source-code.zip');
const tempDir = path.join(projectRoot, 'temp-source');

console.log('📦 Packaging Cactus Media Group source code...\n');

// Step 1: Clean previous packages
console.log('🧹 Cleaning previous packages...');
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

// Step 2: Create temporary directory and copy source
console.log('📁 Preparing source code...');
fs.mkdirSync(tempDir, { recursive: true });

// Define what to include in the source package
const includePaths = [
  'client',
  'server', 
  'scripts',
  'shared',
  'attached_assets',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'vite.config.ts',
  'tailwind.config.ts',
  'postcss.config.js',
  'components.json',
  'drizzle.config.ts',
  'vercel.json',
  '.gitignore'
];

// Copy included files/directories
for (const includePath of includePaths) {
  const sourcePath = path.join(projectRoot, includePath);
  const destPath = path.join(tempDir, includePath);
  
  if (fs.existsSync(sourcePath)) {
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      fs.cpSync(sourcePath, destPath, { recursive: true });
    } else {
      fs.copyFileSync(sourcePath, destPath);
    }
  }
}

// Step 3: Create comprehensive README
console.log('📚 Creating documentation...');
const readmeContent = `# Cactus Media Group - Complete Source Code

## 🌵 Welcome to Cactus Media Group Development Package

"In a world full of flowers, be a cactus!" - Premium digital solutions engineered for resilience and growth.

This package contains the complete, production-ready source code for the Cactus Media Group website, a modern full-stack application built with React, TypeScript, and Express.js.

## 📁 Project Structure

\`\`\`
cactus-media-source/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── sections/   # Page sections (hero, about, etc.)
│   │   │   ├── modals/     # Modal components
│   │   │   └── ui/         # Base UI components (shadcn/ui)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility libraries and configurations
│   │   ├── pages/          # Page components
│   │   └── utils/          # Helper utilities
│   ├── public/             # Static assets
│   └── index.html          # Main HTML template
├── server/                 # Backend Express.js application
│   ├── index.ts            # Main server entry point
│   ├── routes.ts           # API route definitions
│   └── vite.ts             # Vite development server setup
├── scripts/                # Build and utility scripts
├── shared/                 # Shared TypeScript types and schemas
└── attached_assets/        # Company brand assets
\`\`\`

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL (optional, for database features)

### Installation

1. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Environment Setup**
   Create a \`.env\` file in the root directory:
   \`\`\`
   NODE_ENV=development
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   \`\`\`

3. **Start Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`
   
   The application will be available at \`http://localhost:5000\`

### Available Scripts

- \`npm run dev\` - Start development server with hot reloading
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run check\` - Run TypeScript type checking
- \`npm run db:push\` - Push database schema changes (if using database)

## 🛠 Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Framer Motion** - Production-ready motion library
- **Vite** - Fast build tool and development server

### Backend
- **Express.js** - Minimal and flexible Node.js web framework
- **TypeScript** - Type-safe server-side development
- **Drizzle ORM** - Type-safe database operations (PostgreSQL)
- **Zod** - Runtime type validation

### Development Tools
- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS transformation tool
- **Prettier** - Code formatting
- **ESLint** - Code linting

## 🎨 Features

### Core Features
- ✅ **Bilingual Support** - English and Arabic with RTL layout
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **Contact Forms** - Functional contact and service inquiry forms
- ✅ **Portfolio Showcase** - Dynamic project gallery
- ✅ **Service Pages** - Detailed service descriptions and pricing

### Technical Features
- ✅ **TypeScript** - Full type safety across frontend and backend
- ✅ **Component Library** - Reusable, well-documented components
- ✅ **Performance Optimized** - Lazy loading, code splitting, optimized assets
- ✅ **SEO Ready** - Proper meta tags, structured data, sitemap
- ✅ **Accessibility** - WCAG compliant, keyboard navigation, screen reader support

## 🎯 Development Guidelines

### Code Structure
- **Components**: Each component should be self-contained with its own styles and logic
- **Hooks**: Custom hooks for reusable stateful logic
- **Types**: Shared TypeScript interfaces in \`shared/schema.ts\`
- **Styling**: Use Tailwind CSS classes, avoid custom CSS when possible

### Best Practices
1. **Type Safety**: Always use TypeScript interfaces and types
2. **Component Composition**: Build complex UIs from simple, reusable components
3. **Performance**: Use React.memo, useMemo, and useCallback for optimization
4. **Accessibility**: Include proper ARIA attributes and semantic HTML
5. **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Adding New Features

#### New Page
1. Create component in \`client/src/pages/\`
2. Add route in \`client/src/App.tsx\`
3. Update navigation if needed

#### New API Endpoint
1. Add route in \`server/routes.ts\`
2. Define request/response types in \`shared/schema.ts\`
3. Add frontend integration with TanStack Query

#### New Component
1. Create in appropriate \`client/src/components/\` subdirectory
2. Export from index file if part of a component family
3. Add Storybook story for documentation (if using Storybook)

## 🎨 Design System

### Colors
- **Primary**: Emerald/Cactus Green (\`emerald-600\`)
- **Secondary**: Desert Orange (\`orange-500\`)
- **Accent**: Gold (\`yellow-500\`)
- **Neutral**: Gray scale (\`gray-50\` to \`gray-900\`)

### Typography
- **Headings**: Font weight 700, appropriate text sizes
- **Body**: Font weight 400, readable line heights
- **UI Text**: Font weight 500, smaller sizes for labels/buttons

### Spacing
- **Consistent Scale**: Use Tailwind's spacing scale (4, 8, 12, 16, 24, 32px, etc.)
- **Container**: Max width with responsive padding
- **Component Gaps**: Consistent spacing between related elements

## 🌐 Deployment

### Development Deployment (Replit)
The project is configured for Replit deployment:
- Push changes to trigger automatic redeployment
- Environment variables managed through Replit Secrets
- Database hosted on Neon (PostgreSQL)

### Production Deployment Options

#### Replit (Recommended)
1. Connect repository
2. Set environment variables
3. Deploy automatically on push
4. Use Replit's built-in hosting features

#### Vercel
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push

#### Netlify
1. Connect repository
2. Build command: \`npm run build\`
3. Publish directory: \`dist\`

## 🔐 Environment Variables

### Required
\`\`\`
NODE_ENV=production
\`\`\`

### Optional (Database)
\`\`\`
DATABASE_URL=postgresql://user:pass@host:port/db
\`\`\`

## 📞 Support & Contact

### Technical Support
- **Email**: support@cactusmediajo.com
- **Website**: https://cactusmediajo.com

### Development Team
- **Architecture**: Modern full-stack development
- **Frontend**: React/TypeScript specialists
- **Backend**: Node.js/Express experts
- **Design**: UI/UX professionals

## 📝 License

This source code is provided for development and educational purposes. 
The Cactus Media Group brand, logo, and content are proprietary.

For licensing questions, contact: legal@cactusmediajo.com

## 🤝 Contributing

### Getting Started
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and type checking
5. Submit a pull request

### Code Standards
- **Formatting**: Use Prettier configuration
- **Linting**: Follow ESLint rules
- **Types**: Maintain type safety
- **Testing**: Write tests for new features
- **Documentation**: Update docs for API changes

## 🔄 Updates & Maintenance

### Regular Tasks
- **Dependencies**: Update packages monthly
- **Security**: Run \`npm audit\` and fix vulnerabilities
- **Performance**: Monitor bundle size and performance metrics
- **Content**: Update portfolio and service information

### Version History
- **v1.0.0** - Initial release with full feature set
- **Future**: Planned features include CMS integration, advanced analytics

---

## 🌟 About Cactus Media Group

**"In a world full of flowers, be a cactus!"**

We specialize in premium digital solutions engineered for resilience and growth:

- 🌐 **Web Development** - Custom websites and web applications
- 🎨 **Brand Identity** - Logo design, visual identity, brand guidelines  
- 📱 **Social Media** - Strategy, content creation, community management
- 🎬 **Multimedia** - Video production, graphic design, digital assets

**Contact Information:**
- 📧 Email: info@cactusmediajo.com
- 🌐 Website: https://cactusmediajo.com
- 📱 Social: @cactusmediajo

Built with ❤️ by the Cactus Media Group team.
`;

fs.writeFileSync(path.join(tempDir, 'README.md'), readmeContent);

// Step 4: Create development guide
const devGuideContent = `# Development Guide - Cactus Media Group

## 🚀 Getting Started Guide

### First Time Setup

1. **Clone and Install**
   \`\`\`bash
   # Install dependencies
   npm install
   
   # Start development server
   npm run dev
   \`\`\`

2. **Project Familiarization**
   - Explore \`client/src/components/\` for UI components
   - Check \`client/src/pages/home.tsx\` for main page structure
   - Review \`server/index.ts\` for backend setup

### Development Workflow

1. **Frontend Development**
   - Components are in \`client/src/components/\`
   - Use existing UI components from \`components/ui/\`
   - Follow the established pattern for new sections

2. **Backend Development**
   - API routes in \`server/routes.ts\`
   - Database schema in \`shared/schema.ts\`
   - Use Drizzle ORM for database operations

### Key Files to Understand

- \`client/src/App.tsx\` - Main application router
- \`client/src/pages/home.tsx\` - Homepage with all sections
- \`client/src/hooks/use-language.tsx\` - Bilingual support
- \`server/index.ts\` - Express server setup
- \`package.json\` - Dependencies and scripts

### Common Tasks

#### Adding a New Section
1. Create component in \`client/src/components/sections/\`
2. Add to \`client/src/pages/home.tsx\`
3. Update navigation if needed

#### Modifying Styles
- Use Tailwind CSS classes
- Brand colors: emerald (green), orange, yellow
- Responsive: mobile-first approach

#### Adding API Endpoints
1. Add route in \`server/routes.ts\`
2. Define types in \`shared/schema.ts\`
3. Use in frontend with TanStack Query

### Troubleshooting

#### Common Issues
1. **Port already in use**: Change port in server config
2. **TypeScript errors**: Run \`npm run check\`
3. **Build fails**: Check for missing dependencies

#### Getting Help
- Check console for error messages
- Review network tab for API issues
- Use React DevTools for component debugging

Happy coding! 🌵
`;

fs.writeFileSync(path.join(tempDir, 'DEVELOPMENT.md'), devGuideContent);

// Step 5: Create package.json with updated scripts
const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
packageJson.scripts = {
  ...packageJson.scripts,
  "dev": "NODE_ENV=development tsx server/index.ts",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "start": "NODE_ENV=production node dist/index.js",
  "check": "tsc",
  "db:push": "drizzle-kit push"
};

fs.writeFileSync(path.join(tempDir, 'package.json'), JSON.stringify(packageJson, null, 2));

// Step 6: Create .env.example
const envExample = `# Environment Configuration
NODE_ENV=development

# Database (Optional - only needed for advanced features)
DATABASE_URL=postgresql://username:password@localhost:5432/cactus_media

# Application Settings
PORT=5000
`;

fs.writeFileSync(path.join(tempDir, '.env.example'), envExample);

// Step 7: Clean up unnecessary files from temp directory
const filesToRemove = [
  path.join(tempDir, 'client/src/components/ui/robots.txt'),
  path.join(tempDir, 'client/src/components/ui/sitemap.xml')
];

filesToRemove.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
});

// Step 8: Create the zip file
console.log('📦 Creating source code package...');

const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression
});

output.on('close', () => {
  const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2);
  console.log(`\n✅ Successfully created: cactus-media-source-code.zip`);
  console.log(`📊 Package size: ${sizeInMB} MB`);
  console.log(`📁 Total files compressed`);
  console.log(`\n🎯 Ready for development!`);
  
  // Clean up temp directory
  fs.rmSync(tempDir, { recursive: true, force: true });
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.directory(tempDir, false);
archive.finalize();
