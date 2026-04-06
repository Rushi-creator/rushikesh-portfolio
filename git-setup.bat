@echo off
echo === GIT CONFIGURATION AND STATUS ===
echo.
echo [1/5] Checking Git user configuration...
git config user.name
git config user.email
echo.
echo [2/5] Checking remote repositories...
git remote -v
echo.
echo [3/5] Checking Git status...
git status
echo.
echo [4/5] Checking branch...
git branch
echo.
echo === DONE ===
pause
