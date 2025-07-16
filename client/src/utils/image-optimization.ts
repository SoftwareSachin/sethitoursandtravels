// Critical images that should load immediately
export const CRITICAL_IMAGES = [
  // Hero section background images (first 2)
  '/attached_assets/steptodown.com731037_1752610855716.jpg',
  '/attached_assets/steptodown.com722270_1752610889983.jpg',
  // Logo
  '/attached_assets/orange-logo_1752335072563.png',
  // Navigation and premium services (first 3)
  '/attached_assets/steptodown.com851972_1752603732311.jpg',
  '/attached_assets/steptodown.com203575_1752603311916.jpg',
  '/attached_assets/steptodown.com986609_1752603510335.jpg'
];

// Group images by priority
export const IMAGE_PRIORITIES = {
  critical: CRITICAL_IMAGES,
  high: [
    // Tour packages (first 4)
    '/attached_assets/steptodown.com335145_1752611872320.jpg',
    '/attached_assets/steptodown.com529192_1752611935129.jpg',
    '/attached_assets/steptodown.com315243_1752612080227.jpg',
    '/attached_assets/steptodown.com697217_1752612125900.jpg',
    // Fleet showcase (first 3)
    '/attached_assets/steptodown.com267953_1752609994574.jpg',
    '/attached_assets/steptodown.com288680_1752610052347.jpg',
    '/attached_assets/steptodown.com314161_1752608772365.jpg'
  ],
  medium: [
    // Remaining tour packages
    '/attached_assets/steptodown.com346993_1752612175890.jpg',
    '/attached_assets/steptodown.com546240_1752612283716.jpg',
    // Popular destinations
    '/attached_assets/steptodown.com493365_1752606412100.jpg',
    '/attached_assets/steptodown.com681563_1752606474297.jpg',
    '/attached_assets/steptodown.com488820_1752606544987.jpg'
  ],
  low: [
    // Articles and gallery images load last
    '/attached_assets/steptodown.com608599_1752609444647.jpg',
    '/attached_assets/steptodown.com284521_1752609502035.jpg',
    '/attached_assets/steptodown.com780855_1752609602940.jpg'
  ]
};

// Utility function to get optimized image src
export function getOptimizedImageSrc(originalSrc: string, quality: number = 80): string {
  // For now, return original src since we don't have image processing
  // In a real implementation, you'd use services like Cloudinary or similar
  return originalSrc;
}

// Utility to create responsive image sizes
export function getResponsiveImageSizes(baseSrc: string) {
  return {
    mobile: baseSrc, // Could be processed to smaller size
    tablet: baseSrc,
    desktop: baseSrc
  };
}

// WebP detection utility
export function supportsWebP(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
}

// Progressive loading utility
export class ProgressiveImageLoader {
  private loadQueue: Array<{ src: string; priority: number }> = [];
  private loading = new Set<string>();
  private loaded = new Set<string>();
  private maxConcurrent = 3;

  addToQueue(src: string, priority: number = 3) {
    if (!this.loaded.has(src) && !this.loading.has(src)) {
      this.loadQueue.push({ src, priority });
      this.loadQueue.sort((a, b) => a.priority - b.priority);
      this.processQueue();
    }
  }

  private async processQueue() {
    while (this.loadQueue.length > 0 && this.loading.size < this.maxConcurrent) {
      const item = this.loadQueue.shift();
      if (!item) break;

      this.loading.add(item.src);
      
      try {
        await this.loadImage(item.src);
        this.loaded.add(item.src);
      } catch (error) {
        console.warn('Failed to load image:', item.src);
      } finally {
        this.loading.delete(item.src);
        // Continue processing queue
        setTimeout(() => this.processQueue(), 10);
      }
    }
  }

  private loadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  }
}

// Global image loader instance
export const globalImageLoader = new ProgressiveImageLoader();