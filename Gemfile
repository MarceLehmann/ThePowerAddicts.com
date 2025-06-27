# Gemfile for The Power Addicts Jekyll Site

source "https://rubygems.org"

# Jekyll version
gem "jekyll", "~> 4.3.0"

# GitHub Pages compatibility (optional, comment out if not using GitHub Pages)
# gem "github-pages", group: :jekyll_plugins

# Theme (if using a specific theme)
# gem "minima", "~> 2.5"

# Essential Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed"                    # RSS feed generation
  gem "jekyll-sitemap"                 # XML sitemap generation
  gem "jekyll-seo-tag"                 # SEO meta tags
  gem "jekyll-redirect-from"           # Handle redirects
  gem "jekyll-archives"                # Blog archives (if adding blog)
  gem "jekyll-paginate-v2"             # Pagination (if adding blog)
  gem "jekyll-compress-images"         # Image compression
  gem "jekyll-responsive-image"        # Responsive images
  gem "jekyll-minifier"                # HTML/CSS/JS minification
end

# Performance and optimization gems
gem "liquid-c"                         # Faster Liquid rendering (optional)
gem "sassc"                           # Faster Sass compilation

# Development gems
group :development do
  gem "webrick"                       # HTTP server for Ruby 3.0+
  gem "html-proofer"                  # Check for broken links/images
end

# Windows and JRuby specific gems
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
