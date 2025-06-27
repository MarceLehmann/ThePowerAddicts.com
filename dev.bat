@echo off
setlocal enabledelayedexpansion

REM The Power Addicts - Development Script for Windows
REM Quick commands for Jekyll development

set SCRIPT_DIR=%~dp0
cd /d "%SCRIPT_DIR%"

REM Set colors (limited in batch)
set "GREEN=[92m"
set "RED=[91m"
set "YELLOW=[93m"
set "BLUE=[94m"
set "NC=[0m"

goto :main

:print_header
echo.
echo %BLUE%🚀 The Power Addicts - Jekyll Development%NC%
echo %BLUE%========================================%NC%
echo.
goto :eof

:print_success
echo %GREEN%✅ %~1%NC%
goto :eof

:print_warning
echo %YELLOW%⚠️  %~1%NC%
goto :eof

:print_error
echo %RED%❌ %~1%NC%
goto :eof

:check_dependencies
echo 🔍 Checking dependencies...

where ruby >nul 2>nul
if !errorlevel! neq 0 (
    call :print_error "Ruby is not installed. Please install Ruby 2.7+ first."
    exit /b 1
)

where bundle >nul 2>nul
if !errorlevel! neq 0 (
    call :print_error "Bundler is not installed. Run: gem install bundler"
    exit /b 1
)

call :print_success "Dependencies check passed"
goto :eof

:install_gems
echo 📦 Installing Ruby gems...
bundle config set --local path vendor/bundle
bundle install
if !errorlevel! equ 0 (
    call :print_success "Gems installed successfully"
) else (
    call :print_error "Failed to install gems"
    exit /b 1
)
goto :eof

:serve_development
echo 🌐 Starting development server...
echo Press Ctrl+C to stop the server
bundle exec jekyll serve --livereload --drafts --future --unpublished
goto :eof

:build_production
echo 🏗️  Building for production...
set JEKYLL_ENV=production
bundle exec jekyll build
if !errorlevel! equ 0 (
    call :print_success "Production build completed"
) else (
    call :print_error "Build failed"
    exit /b 1
)
goto :eof

:test_site
echo 🧪 Testing site...

REM Build first
call :build_production
if !errorlevel! neq 0 goto :eof

REM Test with htmlproofer if available
where htmlproofer >nul 2>nul
if !errorlevel! equ 0 (
    echo Testing links and images...
    bundle exec htmlproofer ./_site --check-html --check-img-http --check-external-hash --allow-hash-href
    if !errorlevel! equ 0 (
        call :print_success "Site tests passed"
    ) else (
        call :print_error "Site tests failed"
    )
) else (
    call :print_warning "htmlproofer not available. Install with: gem install html-proofer"
)
goto :eof

:lighthouse_test
echo 🔍 Running Lighthouse performance test...

where lighthouse >nul 2>nul
if !errorlevel! equ 0 (
    lighthouse http://localhost:4000 --output=html --output-path=./lighthouse-report.html
    call :print_success "Lighthouse report generated: lighthouse-report.html"
) else (
    call :print_warning "Lighthouse not available. Install with: npm install -g lighthouse"
)
goto :eof

:clean_site
echo 🧹 Cleaning build files...
bundle exec jekyll clean
if exist vendor rmdir /s /q vendor
if exist Gemfile.lock del Gemfile.lock
call :print_success "Cleaned successfully"
goto :eof

:check_seo
echo 🔍 SEO Check...
echo 📊 Analyzing pages for SEO compliance...

echo Checking for meta descriptions...
findstr /r /s /i "description:" *.md *.html >nul 2>nul
if !errorlevel! equ 0 (
    echo Found meta descriptions in pages
) else (
    call :print_warning "Some pages may be missing descriptions"
)

echo Checking for proper headings...
findstr /r /s "^# " *.md >nul 2>nul
if !errorlevel! equ 0 (
    echo Found H1 headings in pages
) else (
    call :print_warning "Some pages may be missing H1 headings"
)

call :print_success "SEO check completed"
goto :eof

:show_help
call :print_header
echo Usage: dev.bat [command]
echo.
echo Commands:
echo   setup          - Check dependencies and install gems
echo   serve          - Start development server with live reload
echo   build          - Build for production
echo   test           - Run site tests (links, images, HTML)
echo   lighthouse     - Run Lighthouse performance test
echo   clean          - Clean build files and dependencies
echo   seo            - Check SEO compliance
echo   help           - Show this help message
echo.
echo Examples:
echo   dev.bat setup    # First time setup
echo   dev.bat serve    # Start development
echo   dev.bat build    # Build for production
echo.
echo Prerequisites:
echo   - Ruby 2.7+ installed
echo   - Bundler gem installed (gem install bundler)
echo   - Git for version control
echo.
echo For first time setup:
echo   1. dev.bat setup
echo   2. dev.bat serve
echo   3. Open http://localhost:4000
echo.
goto :eof

:main
if "%~1"=="" goto :show_help
if "%~1"=="help" goto :show_help

call :print_header

if "%~1"=="setup" (
    call :check_dependencies
    if !errorlevel! equ 0 call :install_gems
) else if "%~1"=="serve" (
    call :check_dependencies
    if !errorlevel! equ 0 call :serve_development
) else if "%~1"=="build" (
    call :check_dependencies
    if !errorlevel! equ 0 call :build_production
) else if "%~1"=="test" (
    call :check_dependencies
    if !errorlevel! equ 0 call :test_site
) else if "%~1"=="lighthouse" (
    call :lighthouse_test
) else if "%~1"=="clean" (
    call :clean_site
) else if "%~1"=="seo" (
    call :check_seo
) else (
    echo Unknown command: %~1
    echo.
    goto :show_help
)

goto :eof
