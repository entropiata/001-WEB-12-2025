@echo off
REM ============================================
REM MySQL Database Setup Script for Windows
REM ============================================

echo ============================================
echo Puskesmas Database Setup
echo ============================================
echo.

REM Check if MySQL is accessible
echo Checking MySQL connection...
mysql --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: MySQL is not found in PATH
    echo Please make sure MySQL is installed and added to PATH
    echo.
    echo You can also run the SQL file manually:
    echo   mysql -u root -p ^< database\schema.sql
    pause
    exit /b 1
)

echo MySQL found!
echo.

REM Prompt for MySQL credentials
set /p MYSQL_USER="Enter MySQL username (default: root): "
if "%MYSQL_USER%"=="" set MYSQL_USER=root

echo.
echo Importing database schema...
echo.

REM Import the schema
mysql -u %MYSQL_USER% -p < database\schema.sql

if %errorlevel% equ 0 (
    echo.
    echo ============================================
    echo SUCCESS! Database created successfully
    echo ============================================
    echo.
    echo Database: puskesmas_db
    echo Table: articles
    echo Sample data: 3 articles inserted
    echo.
    echo You can now connect to the database:
    echo   Host: localhost
    echo   Port: 3306
    echo   Database: puskesmas_db
    echo   User: %MYSQL_USER%
    echo.
) else (
    echo.
    echo ============================================
    echo ERROR: Failed to import database
    echo ============================================
    echo.
    echo Please check:
    echo   1. MySQL server is running
    echo   2. Username and password are correct
    echo   3. You have permission to create databases
    echo.
)

pause
