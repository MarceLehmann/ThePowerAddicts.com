#!/bin/bash

# The Power Addicts - Development Script
# Quick commands for Jekyll development

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_header() {
    echo -e "${BLUE}🚀 The Power Addicts - Jekyll Development${NC}"
    echo -e "${BLUE}========================================${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

check_dependencies() {
    echo "🔍 Checking dependencies..."
    
    if ! command -v ruby &> /dev/null; then
        print_error "Ruby is not installed. Please install Ruby 2.7+ first."
        exit 1
    fi
    
    if ! command -v bundle &> /dev/null; then
        print_error "Bundler is not installed. Run: gem install bundler"
        exit 1
    fi
    
    print_success "Dependencies check passed"
}

install_gems() {
    echo "📦 Installing Ruby gems..."
    bundle config set --local path 'vendor/bundle'
    bundle install
    print_success "Gems installed successfully"
}

serve_development() {
    echo "🌐 Starting development server..."
    bundle exec jekyll serve --livereload --drafts --future --unpublished
}

build_production() {
    echo "🏗️  Building for production..."
    JEKYLL_ENV=production bundle exec jekyll build
    print_success "Production build completed"
}

test_site() {
    echo "🧪 Testing site..."
    
    # Build first
    build_production
    
    # Test with htmlproofer
    if command -v htmlproofer &> /dev/null; then
        echo "Testing links and images..."
        bundle exec htmlproofer ./_site --check-html --check-img-http --check-external-hash --allow-hash-href
        print_success "Site tests passed"
    else
        print_warning "htmlproofer not available. Install with: gem install html-proofer"
    fi
}

lighthouse_test() {
    echo "🔍 Running Lighthouse performance test..."
    
    if command -v lighthouse &> /dev/null; then
        lighthouse http://localhost:4000 --output=html --output-path=./lighthouse-report.html
        print_success "Lighthouse report generated: lighthouse-report.html"
    else
        print_warning "Lighthouse not available. Install with: npm install -g lighthouse"
    fi
}

clean_site() {
    echo "🧹 Cleaning build files..."
    bundle exec jekyll clean
    rm -rf vendor/
    rm -f Gemfile.lock
    print_success "Cleaned successfully"
}

optimize_images() {
    echo "🖼️  Optimizing images..."
    
    if command -v imageoptim &> /dev/null; then
        find assets/images -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | xargs imageoptim
        print_success "Images optimized"
    else
        print_warning "ImageOptim not available. Consider using online tools or installing ImageOptim"
    fi
}

check_seo() {
    echo "🔍 SEO Check..."
    echo "📊 Analyzing pages for SEO compliance..."
    
    # Check for meta descriptions
    echo "Checking meta descriptions..."
    grep -r "description:" --include="*.md" --include="*.html" . || print_warning "Some pages may be missing descriptions"
    
    # Check for proper headings
    echo "Checking heading structure..."
    find . -name "*.md" -exec grep -l "^# " {} \; | wc -l
    
    print_success "SEO check completed"
}

show_help() {
    print_header
    echo ""
    echo "Usage: ./dev.sh [command]"
    echo ""
    echo "Commands:"
    echo "  setup          - Check dependencies and install gems"
    echo "  serve          - Start development server with live reload"
    echo "  build          - Build for production"
    echo "  test           - Run site tests (links, images, HTML)"
    echo "  lighthouse     - Run Lighthouse performance test"
    echo "  clean          - Clean build files and dependencies"
    echo "  optimize       - Optimize images"
    echo "  seo            - Check SEO compliance"
    echo "  help           - Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./dev.sh setup    # First time setup"
    echo "  ./dev.sh serve    # Start development"
    echo "  ./dev.sh build    # Build for production"
    echo ""
}

# Main script logic
case "${1:-help}" in
    setup)
        print_header
        check_dependencies
        install_gems
        ;;
    serve)
        print_header
        check_dependencies
        serve_development
        ;;
    build)
        print_header
        check_dependencies
        build_production
        ;;
    test)
        print_header
        check_dependencies
        test_site
        ;;
    lighthouse)
        print_header
        lighthouse_test
        ;;
    clean)
        print_header
        clean_site
        ;;
    optimize)
        print_header
        optimize_images
        ;;
    seo)
        print_header
        check_seo
        ;;
    help|*)
        show_help
        ;;
esac
