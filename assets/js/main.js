/**
 * The Power Addicts - Modern JavaScript
 * Elite-level performance, accessibility, and UX optimization
 */

(function() {
    'use strict';

    // Performance optimization: Early DOM ready detection
    let domReady = false;
    const readyQueue = [];

    function ready(fn) {
        if (domReady) {
            fn();
        } else {
            readyQueue.push(fn);
        }
    }

    function domReadyHandler() {
        domReady = true;
        readyQueue.forEach(fn => fn());
        readyQueue.length = 0;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', domReadyHandler);
    } else {
        domReadyHandler();
    }

    // Core functionality
    const PowerAddicts = {
        // Mobile Navigation
        initMobileNav() {
            const navToggle = document.querySelector('.nav-toggle');
            const navMenu = document.querySelector('.nav-menu');
            const body = document.body;

            if (!navToggle || !navMenu) return;

            navToggle.addEventListener('click', (e) => {
                e.preventDefault();
                const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
                
                navToggle.setAttribute('aria-expanded', !isExpanded);
                navMenu.classList.toggle('is-active');
                body.classList.toggle('nav-open');
                
                // Focus management for accessibility
                if (!isExpanded) {
                    navMenu.querySelector('a')?.focus();
                }
            });

            // Close mobile nav on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navMenu.classList.remove('is-active');
                    body.classList.remove('nav-open');
                    navToggle.focus();
                }
            });

            // Close mobile nav on outside click
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navMenu.classList.remove('is-active');
                    body.classList.remove('nav-open');
                }
            });

            // Close mobile nav on link click
            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navMenu.classList.remove('is-active');
                    body.classList.remove('nav-open');
                });
            });
        },

        // Lazy Loading for Images
        initLazyLoading() {
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            img.classList.add('loaded');
                            observer.unobserve(img);
                        }
                    });
                }, {
                    rootMargin: '50px 0px',
                    threshold: 0.01
                });

                document.querySelectorAll('img[data-src]').forEach(img => {
                    imageObserver.observe(img);
                });
            } else {
                // Fallback for older browsers
                document.querySelectorAll('img[data-src]').forEach(img => {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    img.classList.add('loaded');
                });
            }
        },

        // Smooth Scrolling for Anchor Links
        initSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href === '#') return;
                    
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                        const targetPosition = target.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Update URL without triggering scroll
                        history.pushState(null, null, href);
                        
                        // Focus management for accessibility
                        target.setAttribute('tabindex', '-1');
                        target.focus();
                    }
                });
            });
        },

        // Form Enhancement
        initForms() {
            const forms = document.querySelectorAll('form');
            
            forms.forEach(form => {
                // Add loading state functionality
                form.addEventListener('submit', function(e) {
                    const submitBtn = this.querySelector('[type="submit"]');
                    if (submitBtn) {
                        const originalText = submitBtn.textContent;
                        submitBtn.textContent = 'Senden...';
                        submitBtn.disabled = true;
                        
                        // Re-enable after 3 seconds as fallback
                        setTimeout(() => {
                            submitBtn.textContent = originalText;
                            submitBtn.disabled = false;
                        }, 3000);
                    }
                });

                // Real-time validation
                const inputs = form.querySelectorAll('input, textarea');
                inputs.forEach(input => {
                    input.addEventListener('blur', function() {
                        this.classList.toggle('is-valid', this.checkValidity());
                        this.classList.toggle('is-invalid', !this.checkValidity());
                    });
                });
            });
        },

        // Scroll-based Header Effects
        initScrollEffects() {
            const header = document.querySelector('.header');
            if (!header) return;

            let lastScrollY = window.scrollY;
            let ticking = false;

            function updateHeader() {
                const scrollY = window.scrollY;
                
                if (scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }

                // Hide/show header based on scroll direction
                if (scrollY > lastScrollY && scrollY > 200) {
                    header.classList.add('header-hidden');
                } else {
                    header.classList.remove('header-hidden');
                }

                lastScrollY = scrollY;
                ticking = false;
            }

            function requestTick() {
                if (!ticking) {
                    requestAnimationFrame(updateHeader);
                    ticking = true;
                }
            }

            window.addEventListener('scroll', requestTick, { passive: true });
        },

        // Performance: Preload hover links
        initPreload() {
            let preloadTimer;
            
            document.addEventListener('mouseover', (e) => {
                if (e.target.tagName === 'A' && e.target.href && !e.target.dataset.preloaded) {
                    clearTimeout(preloadTimer);
                    preloadTimer = setTimeout(() => {
                        const link = document.createElement('link');
                        link.rel = 'prefetch';
                        link.href = e.target.href;
                        document.head.appendChild(link);
                        e.target.dataset.preloaded = 'true';
                    }, 100);
                }
            });
        },

        // Analytics and Performance Tracking
        initAnalytics() {
            // Core Web Vitals tracking
            if ('web-vital' in window) {
                // This would be implemented with web-vitals library
                // For now, we'll track basic performance metrics
            }

            // Track page performance
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData && window.gtag) {
                        gtag('event', 'timing_complete', {
                            name: 'page_load',
                            value: Math.round(perfData.loadEventEnd - perfData.fetchStart)
                        });
                    }
                }, 1000);
            });
        },

        // Cookie Consent (GDPR compliant)
        initCookieConsent() {
            const cookieConsent = localStorage.getItem('cookie-consent');
            
            if (!cookieConsent) {
                const banner = document.createElement('div');
                banner.className = 'cookie-banner';
                banner.innerHTML = `
                    <div class="cookie-content">
                        <p>Diese Website verwendet Cookies, um Ihnen die beste Erfahrung zu bieten. 
                           <a href="/datenschutz" class="cookie-link">Mehr erfahren</a>
                        </p>
                        <div class="cookie-actions">
                            <button class="btn btn-outline btn-sm" id="cookie-decline">Ablehnen</button>
                            <button class="btn btn-primary btn-sm" id="cookie-accept">Akzeptieren</button>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(banner);
                
                // Handle cookie acceptance
                document.getElementById('cookie-accept').addEventListener('click', () => {
                    localStorage.setItem('cookie-consent', 'accepted');
                    banner.remove();
                    this.enableAnalytics();
                });
                
                document.getElementById('cookie-decline').addEventListener('click', () => {
                    localStorage.setItem('cookie-consent', 'declined');
                    banner.remove();
                });
            } else if (cookieConsent === 'accepted') {
                this.enableAnalytics();
            }
        },

        enableAnalytics() {
            // Enable Google Analytics only after consent
            if (window.gtag) {
                gtag('consent', 'update', {
                    'analytics_storage': 'granted'
                });
            }
        },

        // Accessibility Enhancements
        initA11y() {
            // Skip to content functionality
            const skipLink = document.querySelector('.skip-to-content');
            if (skipLink) {
                skipLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(skipLink.getAttribute('href'));
                    if (target) {
                        target.focus();
                        target.scrollIntoView();
                    }
                });
            }

            // Keyboard navigation for custom elements
            document.addEventListener('keydown', (e) => {
                // Enhanced keyboard navigation would go here
                if (e.key === 'Tab') {
                    document.body.classList.add('keyboard-navigation');
                }
            });

            document.addEventListener('mousedown', () => {
                document.body.classList.remove('keyboard-navigation');
            });
        },

        // Initialize all modules
        init() {
            this.initMobileNav();
            this.initLazyLoading();
            this.initSmoothScroll();
            this.initForms();
            this.initScrollEffects();
            this.initPreload();
            this.initAnalytics();
            this.initCookieConsent();
            this.initA11y();
        }
    };

    // Initialize when DOM is ready
    ready(() => {
        PowerAddicts.init();
    });

    // Export for potential external use
    window.PowerAddicts = PowerAddicts;

})();

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
