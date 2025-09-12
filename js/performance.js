/**
 * Performance optimization module
 */

export class PerformanceOptimizer {
    constructor() {
        this.observers = new Map();
        this.lazyElements = new Set();
        this.isIntersectionObserverSupported = 'IntersectionObserver' in window;
        
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.optimizeScrolling();
        this.setupResourceHints();
        this.monitorPerformance();
    }
    
    // Setup intersection observer for lazy loading
    setupIntersectionObserver() {
        if (!this.isIntersectionObserverSupported) {
            // Fallback for older browsers
            this.setupScrollListener();
            return;
        }
        
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };
        
        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadElement(entry.target);
                    this.intersectionObserver.unobserve(entry.target);
                }
            });
        }, options);
    }
    
    // Fallback scroll listener for older browsers
    setupScrollListener() {
        const checkVisibility = this.throttle(() => {
            this.lazyElements.forEach(element => {
                if (this.isInViewport(element)) {
                    this.loadElement(element);
                    this.lazyElements.delete(element);
                }
            });
        }, 100);
        
        window.addEventListener('scroll', checkVisibility, { passive: true });
        window.addEventListener('resize', checkVisibility, { passive: true });
    }
    
    // Add element to lazy loading queue
    observe(element, callback) {
        if (this.isIntersectionObserverSupported) {
            this.intersectionObserver.observe(element);
        } else {
            this.lazyElements.add(element);
        }
        
        // Store callback for when element becomes visible
        if (callback) {
            this.observers.set(element, callback);
        }
    }
    
    // Load element when it becomes visible
    loadElement(element) {
        const callback = this.observers.get(element);
        if (callback) {
            callback(element);
            this.observers.delete(element);
        }
        
        // Handle lazy loading of images
        if (element.dataset.src) {
            element.src = element.dataset.src;
            element.removeAttribute('data-src');
        }
        
        // Handle lazy loading of background images
        if (element.dataset.bgSrc) {
            element.style.backgroundImage = `url(${element.dataset.bgSrc})`;\n            element.removeAttribute('data-bg-src');
        }
        
        // Add loaded class for animations
        element.classList.add('loaded');
    }
    
    // Optimize scrolling performance
    optimizeScrolling() {
        let ticking = false;
        
        const updateScrollPosition = () => {
            // Update scroll-based animations or effects here
            ticking = false;
        };
        
        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollPosition);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestTick, { passive: true });
    }
    
    // Add resource hints for better loading
    setupResourceHints() {
        // Preconnect to external domains
        this.addResourceHint('https://fonts.googleapis.com', 'preconnect');
        this.addResourceHint('https://fonts.gstatic.com', 'preconnect');
        this.addResourceHint('https://unpkg.com', 'preconnect');
        
        // DNS prefetch for other potential resources
        this.addResourceHint('https://cdnjs.cloudflare.com', 'dns-prefetch');
    }
    
    addResourceHint(href, rel) {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (rel === 'preconnect') {
            link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
    }
    
    // Monitor performance metrics
    monitorPerformance() {
        if ('performance' in window && 'getEntriesByType' in performance) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const navigationTiming = performance.getEntriesByType('navigation')[0];
                    const paintTiming = performance.getEntriesByType('paint');
                    
                    // Log performance metrics
                    console.log('Page Load Performance:', {
                        domContentLoaded: navigationTiming.domContentLoadedEventEnd - navigationTiming.domContentLoadedEventStart,
                        loadComplete: navigationTiming.loadEventEnd - navigationTiming.loadEventStart,
                        firstPaint: paintTiming.find(entry => entry.name === 'first-paint')?.startTime,
                        firstContentfulPaint: paintTiming.find(entry => entry.name === 'first-contentful-paint')?.startTime
                    });
                }, 0);
            });
        }
    }
    
    // Utility functions
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Preload critical resources
    preloadScript(src) {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = src;
            link.as = 'script';
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        });
    }
    
    preloadStylesheet(href) {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = href;
            link.as = 'style';
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        });
    }
    
    // Memory management
    cleanup() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
        }
        
        this.observers.clear();
        this.lazyElements.clear();
    }
    
    // Device-specific optimizations
    getDeviceOptimizations() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userUser);
        const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
        const hasLowMemory = navigator.deviceMemory && navigator.deviceMemory <= 2;
        
        return {
            reduceAnimations: isMobile || isLowEnd,
            limitParticles: isMobile || hasLowMemory,
            useSimplifiedEffects: isLowEnd || hasLowMemory,
            enableLazyLoading: true,
            prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        };
    }
}

// Image lazy loading helper
export class LazyImageLoader {
    constructor() {
        this.observer = null;
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                        this.observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '50px'
            });
            
            this.observeImages();
        } else {
            // Fallback: load all images immediately
            this.loadAllImages();
        }
    }
    
    observeImages() {
        const lazyImages = document.querySelectorAll('img[data-src], [data-bg-src]');
        lazyImages.forEach(img => this.observer.observe(img));
    }
    
    loadImage(img) {
        if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
        
        if (img.dataset.bgSrc) {
            img.style.backgroundImage = `url(${img.dataset.bgSrc})`;
            img.removeAttribute('data-bg-src');
        }
        
        img.classList.add('loaded');
    }
    
    loadAllImages() {
        const lazyImages = document.querySelectorAll('img[data-src], [data-bg-src]');
        lazyImages.forEach(img => this.loadImage(img));
    }
}

export default PerformanceOptimizer;