@echo off
REM ============================================
REM Run Article Fields Migration
REM ============================================

echo ============================================
echo Article Fields Migration
echo ============================================
echo.

set /p MYSQL_USER="Enter MySQL username (default: root): "
if "%MYSQL_USER%"=="" set MYSQL_USER=root

echo.
echo Running migration...
echo.

mysql -u %MYSQL_USER% -p < database\migrations\add_article_fields.sql

if %errorlevel% equ 0 (
    echo.
    echo ============================================
    echo SUCCESS! Migration completed
    echo ============================================
    echo.
    echo New fields added:
    echo   - author (VARCHAR 100)
    echo   - category (VARCHAR 50)
    echo   - slug (VARCHAR 255, UNIQUE)
    echo   - excerpt (TEXT)
    echo.
) else (
    echo.
    echo ============================================
    echo ERROR: Migration failed
    echo ============================================
    echo.
)

pause
