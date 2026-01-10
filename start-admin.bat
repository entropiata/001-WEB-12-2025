@echo off
echo ============================================
echo Puskesmas Admin Panel - Quick Start
echo ============================================
echo.

echo Step 1: Setting up admin user...
cd server
call npm run setup-admin
if %errorlevel% neq 0 (
    echo ERROR: Failed to setup admin user
    pause
    exit /b 1
)

echo.
echo ============================================
echo Setup complete!
echo ============================================
echo.
echo To start the application:
echo.
echo 1. Start the backend server:
echo    cd server
echo    npm run dev
echo.
echo 2. In a new terminal, start the frontend:
echo    npm run dev
echo.
echo 3. Access the admin panel at:
echo    http://localhost:5173/admin
echo.
echo Default credentials:
echo    Username: admin
echo    Password: admin123
echo.
pause
