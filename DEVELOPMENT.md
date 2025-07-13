# Development Guide - Cactus Media Group

## 🚀 Getting Started Guide

### First Time Setup

1. **Clone and Install**

   ```bash
   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

2. **Project Familiarization**
   - Explore `client/src/components/` for UI components
   - Check `client/src/pages/home.tsx` for main page structure
   - Review `server/index.ts` for backend setup

### Development Workflow

1. **Frontend Development**
   - Components are in `client/src/components/`
   - Use existing UI components from `components/ui/`
   - Follow the established pattern for new sections

2. **Backend Development**
   - API routes in `server/routes.ts`
   - Database schema in `shared/schema.ts`
   - Use Drizzle ORM for database operations

### Key Files to Understand

- `client/src/App.tsx` - Main application router
- `client/src/pages/home.tsx` - Homepage with all sections
- `client/src/hooks/use-language.tsx` - Bilingual support
- `server/index.ts` - Express server setup
- `package.json` - Dependencies and scripts

### Common Tasks

#### Adding a New Section

1. Create component in `client/src/components/sections/`
2. Add to `client/src/pages/home.tsx`
3. Update navigation if needed

#### Modifying Styles

- Use Tailwind CSS classes
- Brand colors: emerald (green), orange, yellow
- Responsive: mobile-first approach

#### Adding API Endpoints

1. Add route in `server/routes.ts`
2. Define types in `shared/schema.ts`
3. Use in frontend with TanStack Query

### Troubleshooting

#### Common Issues

1. **Port already in use**: Change port in server config
2. **TypeScript errors**: Run `npm run check`
3. **Build fails**: Check for missing dependencies

#### Getting Help

- Check console for error messages
- Review network tab for API issues
- Use React DevTools for component debugging

Happy coding! 🌵
