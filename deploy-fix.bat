@echo off
echo ========================================
echo FIXING DEPLOYMENT ISSUES
echo ========================================
echo.

echo [1/5] Installing updated packages...
call npm install

echo.
echo [2/5] Testing build locally...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo BUILD FAILED! Check the errors above.
    pause
    exit /b 1
)

echo.
echo [3/5] Build successful! Adding changes to git...
git add .

echo.
echo [4/5] Committing changes...
git commit -m "Fix: update next-mdx-remote to v6 for Vercel deployment"

echo.
echo [5/5] Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo DEPLOYMENT FIX COMPLETE!
echo ========================================
echo.
echo Vercel will automatically detect the push and redeploy.
echo Check your Vercel dashboard in 1-2 minutes.
echo.
pause
