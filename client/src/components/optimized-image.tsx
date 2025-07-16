import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  quality?: number;
  lazy?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAyN0MyMy4zMTM3IDI3IDI2IDI0LjMxMzcgMjYgMjFDMjYgMTcuNjg2MyAyMy4zMTM3IDE1IDIwIDE1QzE2LjY4NjMgMTUgMTQgMTcuNjg2MyAxNCAyMUMxNCAyNC4zMTM3IDE2LjY4NjMgMjcgMjAgMjdaIiBmaWxsPSIjQ0REMkQ5Ii8+CjxwYXRoIGQ9Ik0yMCAxOUMyMS4xMDQ2IDE5IDIyIDIwLjg5NTQgMjIgMjBDMjIgMjEuMTA0NiAyMS4xMDQ2IDIyIDIwIDIyQzE4Ljg5NTQgMjIgMTggMjEuMTA0NiAxOCAyMEMxOCAxOC44OTU0IDE4Ljg5NTQgMTkgMjAgMTlaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=',
  lazy = true 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <img 
            src={placeholder} 
            alt="" 
            className="w-8 h-8 opacity-50"
          />
        </div>
      )}
      
      {/* Actual Image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading={lazy ? "lazy" : "eager"}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } w-full h-full object-cover`}
        />
      )}
      
      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500 p-4">
            <div className="w-8 h-8 mx-auto mb-2 bg-gray-300 rounded"></div>
            <p className="text-xs">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Hook for preloading critical images
export function useImagePreloader(imageSources: string[]) {
  useEffect(() => {
    const preloadImages = () => {
      imageSources.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // Preload after a short delay to not block initial render
    const timer = setTimeout(preloadImages, 100);
    return () => clearTimeout(timer);
  }, [imageSources]);
}