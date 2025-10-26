@echo off
REM Vendor Management System - Cloudflare Pages Deployment Script

echo 🚀 Starting deployment process...

REM Check if we're in the right directory
if not exist "frontend\package.json" (
    echo ❌ Error: Please run this script from the project root directory
    pause
    exit /b 1
)

REM Build the frontend
echo 📦 Building frontend...
cd frontend
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Frontend build successful!
) else (
    echo ❌ Frontend build failed!
    pause
    exit /b 1
)

REM Check if dist directory exists
if not exist "dist" (
    echo ❌ Error: dist directory not found. Build may have failed.
    pause
    exit /b 1
)

echo 📁 Build output:
dir dist

echo.
echo 🎉 Build completed successfully!
echo.
echo Next steps:
echo 1. Push your code to GitHub/GitLab/Bitbucket
echo 2. Go to https://dash.cloudflare.com/pages
echo 3. Create a new project
echo 4. Connect your repository
echo 5. Set build command: npm run build
echo 6. Set build output directory: frontend/dist
echo 7. Set root directory: frontend
echo 8. Deploy!
echo.
echo 📖 For detailed instructions, see DEPLOYMENT_GUIDE.md
pause
