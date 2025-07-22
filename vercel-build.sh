#!/bin/bash
set -e

# Vercel build script for Cactus Media Group
echo "🌵 Starting Cactus Media Group build process..."

# Install dependencies
echo "📦 Installing dependencies with pnpm..."
pnpm install

# Run database migrations if needed
echo "🗄️ Setting up database..."
if [ ! -z "$DATABASE_URL" ]; then
  echo "Database URL found, applying migrations..."
  export DRIZZLE_NON_INTERACTIVE=1
  pnpm db:migrate
else
  echo "⚠️ No DATABASE_URL found, skipping database setup"
fi

# Build the application
echo "🏗️ Building application..."
pnpm build

# Optimize and compress assets
echo "🎯 Optimizing assets..."
# Additional optimization steps can be added here

echo "✅ Build completed successfully!"
echo "🚀 Ready for deployment!"
