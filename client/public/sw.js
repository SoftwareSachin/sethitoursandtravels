// Service Worker for Image Prefetching and Caching
// Maintains 100% image quality while providing instant loading

const CACHE_NAME = 'sethi-tours-images-v1';
const CRITICAL_IMAGES = [
  '/attached_assets/steptodown.com731037_1752610855716.jpg', // Hero 1
  '/attached_assets/steptodown.com722270_1752610889983.jpg', // Hero 2
  '/attached_assets/orange-logo_1752335072563.png', // Logo
  '/attached_assets/steptodown.com851972_1752603732311.jpg', // Premium service 1
  '/attached_assets/steptodown.com203575_1752603311916.jpg', // Premium service 2
  '/attached_assets/steptodown.com986609_1752603510335.jpg'  // Premium service 3
];

// Install event - precache critical images
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('SW: Caching critical images');
      return cache.addAll(CRITICAL_IMAGES);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        
        // Clone the request for caching
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response for caching
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
    );
  }
});

// Message event - prefetch images on demand
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'PREFETCH_IMAGES') {
    const imagesToPrefetch = event.data.images;
    
    caches.open(CACHE_NAME).then(cache => {
      imagesToPrefetch.forEach(imageUrl => {
        cache.add(imageUrl).catch(err => {
          console.warn('SW: Failed to prefetch', imageUrl, err);
        });
      });
    });
  }
});

// Periodic cleanup - remove old cached images
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CLEANUP_CACHE') {
    caches.open(CACHE_NAME).then(cache => {
      cache.keys().then(requests => {
        // Keep only the most recent 100 images to prevent cache bloat
        if (requests.length > 100) {
          const toDelete = requests.slice(100);
          toDelete.forEach(request => cache.delete(request));
        }
      });
    });
  }
});