/**
 * Service Worker for Python Seconde Interactive
 * Provides offline functionality and performance improvements
 */

const CACHE_NAME = 'python-seconde-v1.2';
const CACHE_VERSION = '1.2';

// Resources to cache immediately
const CORE_CACHE_RESOURCES = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './content.js',
    './solutions.js',
    './js/utils.js',
    './js/particles.js',
    './js/performance.js'
];

// External resources to cache
const EXTERNAL_CACHE_RESOURCES = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap',
    'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
];

// Cache strategies
const CACHE_STRATEGIES = {
    CACHE_FIRST: 'cache-first',
    NETWORK_FIRST: 'network-first',
    CACHE_ONLY: 'cache-only',
    NETWORK_ONLY: 'network-only',
    STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Route matching patterns and their strategies
const ROUTE_STRATEGIES = [
    {
        pattern: /^https:\/\/fonts\.googleapis\.com/,
        strategy: CACHE_STRATEGIES.CACHE_FIRST,
        cacheName: 'google-fonts-stylesheets'
    },
    {
        pattern: /^https:\/\/fonts\.gstatic\.com/,
        strategy: CACHE_STRATEGIES.CACHE_FIRST,
        cacheName: 'google-fonts-webfonts'
    },
    {
        pattern: /^https:\/\/(unpkg\.com|cdn\.jsdelivr\.net)/,
        strategy: CACHE_STRATEGIES.STALE_WHILE_REVALIDATE,
        cacheName: 'cdn-resources'
    },
    {
        pattern: /\.(js|css|html)$/,
        strategy: CACHE_STRATEGIES.STALE_WHILE_REVALIDATE,
        cacheName: 'static-resources'
    },
    {
        pattern: /\.(png|jpg|jpeg|svg|gif|webp)$/,
        strategy: CACHE_STRATEGIES.CACHE_FIRST,
        cacheName: 'images'
    }
];

// Install event - cache core resources
self.addEventListener('install', event => {
    console.log(`Service Worker v${CACHE_VERSION} installing...`);
    
    event.waitUntil(
        Promise.all([
            // Cache core resources
            caches.open(CACHE_NAME)
                .then(cache => {
                    console.log('Caching core resources...');
                    return cache.addAll(CORE_CACHE_RESOURCES);
                }),
            
            // Cache external resources with error handling
            cacheExternalResources()
        ])
        .then(() => {
            console.log('Service Worker installed successfully');
            // Force activation of new service worker
            return self.skipWaiting();
        })
        .catch(error => {
            console.error('Service Worker installation failed:', error);
        })
    );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
    console.log(`Service Worker v${CACHE_VERSION} activating...`);
    
    event.waitUntil(
        Promise.all([
            // Clean up old caches
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME && 
                            !Object.values(ROUTE_STRATEGIES).some(route => route.cacheName === cacheName)) {
                            console.log('Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            
            // Take control of all clients
            self.clients.claim()
        ])
        .then(() => {
            console.log('Service Worker activated successfully');
        })
    );
});

// Fetch event - handle network requests with caching strategies
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }
    
    // Skip cross-origin requests that aren't explicitly cached
    if (!event.request.url.startsWith(self.location.origin) && 
        !EXTERNAL_CACHE_RESOURCES.some(resource => event.request.url.startsWith(resource.split('?')[0]))) {
        return;
    }
    
    event.respondWith(handleRequest(event.request));
});

// Handle background sync for offline form submissions
self.addEventListener('sync', event => {
    console.log('Background sync:', event.tag);
    
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

// Message event for communication with main thread
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_VERSION });
    }
});

// Cache external resources with error handling
async function cacheExternalResources() {
    const cache = await caches.open('external-resources');
    
    const cachePromises = EXTERNAL_CACHE_RESOURCES.map(async resource => {
        try {
            const response = await fetch(resource);
            if (response.ok) {
                await cache.put(resource, response.clone());
                console.log('Cached external resource:', resource);
            }
        } catch (error) {
            console.warn('Failed to cache external resource:', resource, error);
        }
    });
    
    await Promise.allSettled(cachePromises);
}

// Main request handler with different caching strategies
async function handleRequest(request) {
    const url = new URL(request.url);
    
    // Find matching strategy
    const routeStrategy = ROUTE_STRATEGIES.find(route => route.pattern.test(request.url));
    
    if (routeStrategy) {
        return executeStrategy(request, routeStrategy);
    }
    
    // Default strategy for unmatched routes
    return executeStrategy(request, {
        strategy: CACHE_STRATEGIES.NETWORK_FIRST,
        cacheName: CACHE_NAME
    });
}

// Execute caching strategy
async function executeStrategy(request, { strategy, cacheName }) {
    const cache = await caches.open(cacheName);
    
    switch (strategy) {
        case CACHE_STRATEGIES.CACHE_FIRST:
            return cacheFirst(request, cache);
            
        case CACHE_STRATEGIES.NETWORK_FIRST:
            return networkFirst(request, cache);
            
        case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
            return staleWhileRevalidate(request, cache);
            
        case CACHE_STRATEGIES.CACHE_ONLY:
            return cache.match(request);
            
        case CACHE_STRATEGIES.NETWORK_ONLY:
            return fetch(request);
            
        default:
            return networkFirst(request, cache);
    }
}

// Cache-first strategy
async function cacheFirst(request, cache) {
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
        return cachedResponse;
    }
    
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.warn('Network request failed:', request.url, error);
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
    }
}

// Network-first strategy
async function networkFirst(request, cache) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.warn('Network request failed, trying cache:', request.url, error);
        
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
    }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request, cache) {
    const cachedResponse = await cache.match(request);
    
    // Always try to fetch fresh content in the background
    const networkPromise = fetch(request)
        .then(response => {
            if (response.ok) {
                cache.put(request, response.clone());
            }
            return response;
        })
        .catch(error => {
            console.warn('Background fetch failed:', request.url, error);
        });
    
    // Return cached response immediately if available, otherwise wait for network
    return cachedResponse || networkPromise;
}

// Background sync handler
async function doBackgroundSync() {
    // Handle any pending background tasks
    console.log('Performing background sync...');
    
    // Example: sync offline form data, analytics, etc.
    try {
        // Implementation for background sync tasks
        console.log('Background sync completed');
    } catch (error) {
        console.error('Background sync failed:', error);
        throw error; // Retry sync later
    }
}

// Notify clients of updates
function notifyClients(message) {
    self.clients.matchAll().then(clients => {
        clients.forEach(client => {
            client.postMessage(message);
        });
    });
}

// Performance monitoring
self.addEventListener('install', event => {
    // Record installation time for analytics
    if ('performance' in self && 'mark' in self.performance) {
        self.performance.mark('sw-install-start');
    }
});

self.addEventListener('activate', event => {
    // Record activation time for analytics  
    if ('performance' in self && 'mark' in self.performance) {
        self.performance.mark('sw-activate-complete');
    }
});