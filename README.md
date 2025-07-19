# 🌵 Cactus Media Group - Premium Digital Solutions

## "In a world full of flowers, be a cactus!"

Premium digital solutions engineered for resilience and growth. This is the complete source code for Cactus Media Group's modern, bilingual website featuring cinematic animations, interactive portfolio showcases, and comprehensive digital services.

## ✨ Latest Features & Updates

### 🎨 **Enhanced Design System**
- **Tajawal Font**: Premium Arabic typography replacing Dubai font
- **Barlow Font**: Modern English typography replacing Poppins
- **Consistent Brand Colors**: Jaded green primary with refined color palette
- **Glass Morphism**: Modern UI elements with backdrop blur effects

### 🌍 **Bilingual Excellence**
- **Complete Arabic/English Support** - RTL/LTR layout switching
- **Centered Arabic Text** - Improved readability and visual balance
- **Dynamic Font Loading** - Optimized typography for both languages
- **Cultural Adaptation** - Proper text alignment and spacing

### 📱 **Interactive Portfolio Showcase**
- **Real Client Work**: Vonoy, Optimal Option, Trio (KSA), Trilogy Trading LLC
- **Live Website Links**: Direct access to actual client websites
- **Modern Card Design**: Snap scrolling with enhanced navigation dots
- **Mobile-Optimized**: Touch-friendly interactions and responsive design

### 🏢 **Animated Client Showcase**
- **13 Premium Clients**: Orange Jordan, Zain, Bank of Jordan, Royal Jordanian, etc.
- **Dual-Direction Animation**: Automatic scrolling with manual interaction
- **Business Names Display**: Clear client identification with hover effects
- **Uniform Logo Sizing**: Consistent presentation across all clients

### 🎯 **Performance Optimizations**
- **Advanced Caching** - Intelligent resource management
- **Lazy Loading** - Images and components load on demand
- **Optimized Animations** - Smooth 60fps performance
- **Clean Console** - Zero warnings or errors in production

## 🚀 Project Structure

```
cactus-media-group/
├── src/
│   ├── components/         # React components
│   │   ├── sections/       # Main page sections
│   │   │   ├── modern-about-section.tsx      # Enhanced about section
│   │   │   ├── modern-services-section.tsx   # Services with hover effects
│   │   │   ├── modern-portfolio-section.tsx  # Interactive portfolio
│   │   │   └── modern-contact-section.tsx    # Contact with quick call
│   │   ├── modals/         # Modal dialogs with backdrop blur
│   │   ├── ui/             # Radix-based accessible components
│   │   ├── cinematic-hero.tsx    # Video hero with parallax
│   │   ├── client-showcase.tsx   # Animated client logos
│   │   └── enhanced-footer.tsx   # Footer with subtle animations
│   ├── hooks/              # Custom React hooks
│   │   ├── use-language.tsx      # Bilingual state management
│   │   ├── use-mobile.tsx        # Responsive breakpoints
│   │   └── use-intersection-observer.tsx
│   ├── lib/                # Utilities and configurations
│   │   ├── translations.ts       # Complete EN/AR translations
│   │   └── utils.ts              # Helper functions
│   ├── data/               # Static data and content
│   │   ├── portfolio.ts          # Real client portfolio data
│   │   └── clients.ts            # Client logos and information
│   └── pages/              # Page components
│   ├── pages/              # Page components
│   └── data/               # Static data and content
├── server/                 # Express.js backend
├── scripts/                # Build and utility scripts
└── public/                 # Static assets
│   ├── index.ts            # Main server entry point
│   ├── routes.ts           # API route definitions
│   └── vite.ts             # Vite development server setup
├── scripts/                # Build and utility scripts
├── shared/                 # Shared TypeScript types and schemas
└── attached_assets/        # Company brand assets
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL (optional, for database features)

### Installation

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file in the root directory:

   ```
   NODE_ENV=development
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

### Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes (if using database)

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

## 🎯 Current Implementation

### **Hero Section**
- **Cinematic Video Background**: `/public/hero.mp4` with parallax effects
- **Dynamic Tagline**: "In a world full of flowers, be a cactus!"
- **Smooth Animations**: Framer Motion with intersection observers
- **Language Toggle**: Seamless Arabic/English switching

### **About Section**
- **Streamlined Content**: Removed statistics for cleaner presentation
- **Consistent Typography**: Barlow for English, Tajawal for Arabic
- **Brand Colors**: Solid jaded-green replacing animated gradients
- **Responsive Design**: Perfect scaling across all devices

### **Services Section**
- **9 Core Services**: Web Development, Branding, Digital Marketing, etc.
- **Interactive Cards**: Hover effects with smooth transitions
- **Text Alignment**: Left-aligned English, centered Arabic
- **Professional Layout**: Grid system with consistent spacing

### **Portfolio Section**
- **4 Real Clients**: Live websites with actual business information
- **Modern Cards**: Snap scrolling with enhanced navigation
- **Direct Links**: Click to visit actual client websites
- **Image Optimization**: Correct file mapping from `/assets/portfolio/website/`

### **Client Showcase**
- **13 Premium Clients**: Major brands including Orange Jordan, Zain, etc.
- **Animated Reel**: Automatic scrolling with manual interaction
- **Uniform Presentation**: Consistent logo sizing and spacing
- **Business Names**: Clear identification with category labels

### **Footer Enhancement**
- **Quick Call Collection**: Phone input instead of newsletter signup
- **Social Media**: Facebook, Instagram, LinkedIn (Twitter removed)
- **Subtle Animations**: Moving glows with noise overlay texture
- **Professional Layout**: Left social links, right contact form

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
- **Types**: Shared TypeScript interfaces in `shared/schema.ts`
- **Styling**: Use Tailwind CSS classes, avoid custom CSS when possible

### Best Practices

1. **Type Safety**: Always use TypeScript interfaces and types
2. **Component Composition**: Build complex UIs from simple, reusable components
3. **Performance**: Use React.memo, useMemo, and useCallback for optimization
4. **Accessibility**: Include proper ARIA attributes and semantic HTML
5. **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Adding New Features

#### New Page

1. Create component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation if needed

#### New API Endpoint

1. Add route in `server/routes.ts`
2. Define request/response types in `shared/schema.ts`
3. Add frontend integration with TanStack Query

#### New Component

1. Create in appropriate `client/src/components/` subdirectory
2. Export from index file if part of a component family
3. Add Storybook story for documentation (if using Storybook)

## 🎨 Design System

### Colors

- **Primary**: Emerald/Cactus Green (`emerald-600`)
- **Secondary**: Desert Orange (`orange-500`)
- **Accent**: Gold (`yellow-500`)
- **Neutral**: Gray scale (`gray-50` to `gray-900`)

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
2. Build command: `npm run build`
3. Publish directory: `dist`

## 🔐 Environment Variables

### Required

```
NODE_ENV=production
```

### Optional (Database)

```
DATABASE_URL=postgresql://user:pass@host:port/db
```

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
- **Security**: Run `npm audit` and fix vulnerabilities
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
