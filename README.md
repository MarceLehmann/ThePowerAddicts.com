# The Power Addicts - Jekyll Website

🚀 **Modern Jekyll website for Microsoft Power Platform experts in Switzerland**

## Features

- ✨ **Modern Design**: Mobile-first, responsive design with clean aesthetics
- 🎯 **SEO Optimized**: Google #1 ranking ready with Core Web Vitals optimization
- 📱 **Progressive Web App**: Offline functionality, installable, fast loading
- ♿ **Accessibility**: WCAG 2.1 AA compliant with screen reader support
- 🔒 **Security**: Security headers, CSP, HTTPS ready
- 📈 **Performance**: Lazy loading, critical CSS, optimized assets
- 🌍 **Multilingual Ready**: German/English support structure
- 📊 **Analytics**: Google Analytics 4 integration
- 📧 **Newsletter**: Email capture and automation ready

## Technology Stack

- **Jekyll 4.3+**: Static site generator
- **Liquid**: Templating engine
- **Sass/SCSS**: CSS preprocessing
- **Modern JavaScript**: ES6+, Service Worker
- **GitHub Pages**: Hosting ready
- **Netlify**: Alternative hosting with forms

## Quick Start

### Prerequisites

- Ruby 2.7+ (recommend using rbenv or RVM)
- Bundler gem
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/thepoweraddicts.com.git
cd thepoweraddicts.com

# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve

# Open browser to http://localhost:4000
```

### Development Commands

```bash
# Development server with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build

# Test for broken links/images
bundle exec htmlproofer ./_site

# Check performance
lighthouse http://localhost:4000

# Run with drafts
bundle exec jekyll serve --drafts
```

## Project Structure

```
├── _config.yml              # Main configuration
├── _layouts/                 # Page templates
│   └── default.html         # Main layout with SEO
├── _includes/               # Reusable components
├── _sass/                   # Sass partials
├── assets/                  # Static assets
│   ├── main.css            # Compiled CSS
│   ├── js/                 # JavaScript files
│   └── images/             # Images and icons
├── _site/                   # Generated site (ignored)
├── pages/                   # Individual pages
├── manifest.json            # PWA manifest
├── sw.js                    # Service worker
├── robots.txt              # Search engine directives
├── _headers                # Netlify headers
└── offline.html            # Offline fallback page
```

## Configuration

### Basic Setup

1. **Update `_config.yml`**:
   ```yaml
   title: Your Company Name
   email: your-email@example.com
   description: Your description
   url: "https://yourdomain.com"
   ```

2. **Configure Analytics**:
   - Add Google Analytics 4 tracking ID
   - Set up conversion tracking

3. **Social Media**:
   - Update social media links
   - Add Open Graph images

### SEO Configuration

The site includes advanced SEO features:

- **Meta tags**: Title, description, keywords
- **Open Graph**: Facebook/LinkedIn sharing
- **Twitter Cards**: Twitter sharing optimization
- **Schema.org**: Structured data for rich results
- **XML Sitemap**: Automatic generation
- **Robots.txt**: Search engine directives

### Performance Optimization

- **Critical CSS**: Above-the-fold styles inlined
- **Lazy Loading**: Images load on demand
- **Asset Compression**: Minified CSS/JS
- **CDN Ready**: Optimized for CDN delivery
- **Core Web Vitals**: LCP, CLS, FID optimized

## Content Management

### Adding Pages

Create a new `.md` file in the root or in `_pages/`:

```yaml
---
layout: default
title: "Page Title"
description: "Page description for SEO"
permalink: /page-url/
---

# Your Content Here
```

### Navigation

Update navigation in `_config.yml`:

```yaml
navigation:
  - title: "Home"
    url: "/"
  - title: "About"
    url: "/about/"
```

### Blog Posts (Optional)

Create posts in `_posts/` with format `YYYY-MM-DD-title.md`:

```yaml
---
layout: post
title: "Post Title"
date: 2024-01-15
categories: [category1, category2]
---

Post content here...
```

## Deployment

### GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Choose source branch (usually `main`)
4. Site will be available at `username.github.io/repository-name`

### Netlify

1. Connect repository to Netlify
2. Build command: `bundle exec jekyll build`
3. Publish directory: `_site`
4. Set environment variables if needed

### Custom Server

```bash
# Build the site
bundle exec jekyll build

# Upload _site/ folder to your web server
rsync -avz _site/ user@server:/path/to/website/
```

## Features Implementation

### Contact Form

The site includes a ready-to-use contact form. For Netlify:

```html
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

### Newsletter Signup

Integrated with popular email services:

- Mailchimp
- ConvertKit
- EmailOctopus
- Custom API endpoints

### Multi-language Support

Structure ready for multiple languages:

```
├── en/
│   ├── index.md
│   └── about.md
├── de/
│   ├── index.md
│   └── about.md
```

## Customization

### Styling

- Edit `assets/main.css` for custom styles
- Use CSS custom properties for theming
- Mobile-first responsive design principles

### JavaScript

- Main functionality in `assets/js/main.js`
- Modern ES6+ syntax
- Service Worker for PWA features

### Images

- Place images in `assets/images/`
- Use responsive image techniques
- Optimize for web (WebP recommended)

## SEO Best Practices

- ✅ Semantic HTML structure
- ✅ Meta descriptions under 160 characters
- ✅ Optimized images with alt text
- ✅ Internal linking strategy
- ✅ Fast loading times
- ✅ Mobile-friendly design
- ✅ HTTPS ready
- ✅ Structured data markup

## Performance Checklist

- ✅ Critical CSS inlined
- ✅ Non-critical CSS loaded asynchronously
- ✅ Images lazy loaded
- ✅ JavaScript deferred/async
- ✅ Service Worker caching
- ✅ Minified assets
- ✅ Optimized fonts
- ✅ CDN ready

## Browser Support

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- iOS Safari: Last 2 versions
- Android Chrome: Last 2 versions

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: info@thepoweraddicts.com
- 💬 LinkedIn: [The Power Addicts](https://linkedin.com/company/thepoweraddicts)
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/repo/issues)

## Changelog

### Version 1.0.0 (2024-01-15)
- Initial release
- Modern Jekyll setup
- PWA functionality
- SEO optimization
- Performance optimization
- Accessibility compliance

---

**Made with ❤️ by The Power Addicts - Microsoft Power Platform Experts**
