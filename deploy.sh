#!/bin/bash

# Vendor Management System - Cloudflare Pages Deployment Script

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "frontend/package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Build the frontend
echo "📦 Building frontend..."
cd frontend
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful!"
else
    echo "❌ Frontend build failed!"
    exit 1
fi

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist directory not found. Build may have failed."
    exit 1
fi

echo "📁 Build output:"
ls -la dist/

echo ""
echo "🎉 Build completed successfully!"
echo ""
echo "Next steps:"
echo "1. Push your code to GitHub/GitLab/Bitbucket"
echo "2. Go to https://dash.cloudflare.com/pages"
echo "3. Create a new project"
echo "4. Connect your repository"
echo "5. Set build command: npm run build"
echo "6. Set build output directory: frontend/dist"
echo "7. Set root directory: frontend"
echo "8. Deploy!"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT_GUIDE.md"
