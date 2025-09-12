/**
 * Utility functions and helpers for the Python Seconde Interactive application
 */

// Performance optimization utilities
export const Utils = {
    // Debounce function for performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll/resize events
    throttle(func, limit) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if element is in viewport (for lazy loading)
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Preload critical resources
    preloadResource(href, as = 'script') {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = href;
            link.as = as;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        });
    },

    // Local storage helpers
    storage: {
        set(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            } catch (e) {
                console.warn('Local storage not available:', e);
                return false;
            }
        },

        get(key, defaultValue = null) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (e) {
                console.warn('Error reading from local storage:', e);
                return defaultValue;
            }
        },

        remove(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (e) {
                console.warn('Error removing from local storage:', e);
                return false;
            }
        }
    },

    // Performance monitoring
    performance: {
        mark(name) {
            if ('performance' in window && 'mark' in window.performance) {
                window.performance.mark(name);
            }
        },

        measure(name, startMark, endMark) {
            if ('performance' in window && 'measure' in window.performance) {
                window.performance.measure(name, startMark, endMark);
            }
        },

        getEntries() {
            if ('performance' in window && 'getEntriesByType' in window.performance) {
                return window.performance.getEntriesByType('measure');
            }
            return [];
        }
    },

    // Animation helpers
    animation: {
        // Request animation frame with fallback
        requestFrame(callback) {
            return (window.requestAnimationFrame || 
                    window.webkitRequestAnimationFrame || 
                    window.mozRequestAnimationFrame || 
                    window.oRequestAnimationFrame || 
                    window.msRequestAnimationFrame ||
                    function(callback) { window.setTimeout(callback, 1000 / 60); }
                   )(callback);
        },

        // Cancel animation frame with fallback
        cancelFrame(id) {
            return (window.cancelAnimationFrame || 
                    window.webkitCancelAnimationFrame || 
                    window.mozCancelAnimationFrame || 
                    window.oCancelAnimationFrame || 
                    window.msCancelAnimationFrame ||
                    clearTimeout
                   )(id);
        }
    },

    // Device detection
    device: {
        isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },

        isTablet() {
            return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent);
        },

        supportsTouch() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        },

        supportsHover() {
            return window.matchMedia('(hover: hover)').matches;
        }
    },

    // Error handling
    handleError(error, context = 'Unknown') {
        console.error(`Error in ${context}:`, error);
        
        // Send to error tracking service in production
        if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
            // Example: Send to analytics or error tracking
            // analytics.track('error', { context, error: error.message });
        }
    },

    // DOM helpers
    dom: {
        // Safely query selector
        $(selector, parent = document) {
            return parent.querySelector(selector);
        },

        // Safely query selector all
        $$(selector, parent = document) {
            return Array.from(parent.querySelectorAll(selector));
        },

        // Add event listener with cleanup
        on(element, event, handler, options = {}) {
            element.addEventListener(event, handler, options);
            return () => element.removeEventListener(event, handler, options);
        },

        // Create element with attributes
        create(tag, attributes = {}, content = '') {
            const element = document.createElement(tag);
            Object.entries(attributes).forEach(([key, value]) => {
                if (key === 'className') {
                    element.className = value;
                } else if (key === 'innerHTML') {
                    element.innerHTML = value;
                } else {
                    element.setAttribute(key, value);
                }
            });
            if (content) element.textContent = content;
            return element;
        }
    }
};

// Export for use in other modules
export default Utils;