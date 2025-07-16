import { useEffect } from 'react';

// Critical images that should be prefetched immediately
const CRITICAL_IMAGES = [
  '/attached_assets/steptodown.com731037_1752610855716.jpg', // Hero 1
  '/attached_assets/steptodown.com722270_1752610889983.jpg', // Hero 2
  '/attached_assets/orange-logo_1752335072563.png', // Logo
  '/attached_assets/steptodown.com851972_1752603732311.jpg', // Premium service 1
  '/attached_assets/steptodown.com203575_1752603311916.jpg', // Premium service 2
  '/attached_assets/steptodown.com986609_1752603510335.jpg'  // Premium service 3
];

// High priority images for tour packages and fleet
const HIGH_PRIORITY_IMAGES = [
  '/attached_assets/steptodown.com335145_1752611872320.jpg', // Golden Triangle
  '/attached_assets/steptodown.com529192_1752611935129.jpg', // Rajasthan Royal
  '/attached_assets/steptodown.com315243_1752612080227.jpg', // Weekend Getaway
  '/attached_assets/steptodown.com267953_1752609994574.jpg', // Dzire
  '/attached_assets/steptodown.com288680_1752610052347.jpg', // Ertiga
  '/attached_assets/steptodown.com314161_1752608772365.jpg'  // Innova
];

// Medium priority images for destinations
const MEDIUM_PRIORITY_IMAGES = [
  '/attached_assets/steptodown.com493365_1752606412100.jpg', // Jaipur
  '/attached_assets/steptodown.com681563_1752606474297.jpg', // Udaipur
  '/attached_assets/steptodown.com488820_1752606544987.jpg', // Jodhpur
  '/attached_assets/steptodown.com165350_1752606632111.jpg', // Jaisalmer
  '/attached_assets/steptodown.com859665_1752606684788.jpg', // Pushkar
  '/attached_assets/steptodown.com130446_1752606745142.jpg'  // Mount Abu
];

export function useCriticalImagePrefetch() {
  useEffect(() => {
    // Prefetch critical images immediately
    CRITICAL_IMAGES.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchpriority = 'high';
      document.head.appendChild(link);
    });

    // Cleanup on unmount
    return () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
      preloadLinks.forEach(link => link.remove());
    };
  }, []);
}

export function useImagePrefetch(priority: 'high' | 'medium' = 'high') {
  useEffect(() => {
    const imagesToPrefetch = priority === 'high' ? HIGH_PRIORITY_IMAGES : MEDIUM_PRIORITY_IMAGES;
    
    // Delay prefetching to not block critical resources
    const timer = setTimeout(() => {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'PREFETCH_IMAGES',
          images: imagesToPrefetch
        });
      } else {
        // Fallback: create invisible images for preloading
        imagesToPrefetch.forEach(src => {
          const img = new Image();
          img.src = src;
        });
      }
    }, priority === 'high' ? 1000 : 3000); // High priority after 1s, medium after 3s

    return () => clearTimeout(timer);
  }, [priority]);
}

// Hook for hover-based prefetching
export function useHoverPrefetch(imageUrls: string[]) {
  const prefetchImages = () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'PREFETCH_IMAGES',
        images: imageUrls
      });
    }
  };

  return prefetchImages;
}

// Viewport-based progressive loading
export function useViewportImageLoader() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc) {
              img.src = dataSrc;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before entering viewport
        threshold: 0.1
      }
    );

    // Observe all images with data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, []);
}