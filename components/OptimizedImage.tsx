import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean; // für Above-the-fold Bilder
  objectFit?: 'cover' | 'contain' | 'fill';
}

/**
 * Optimized Image Component mit:
 * - Lazy Loading (native loading="lazy")
 * - Aspect Ratio Preservation (CLS vermeiden)
 * - Fallback zu Placeholder
 * - Intersection Observer für lazy loading
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  objectFit = 'cover'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // priority images load immediately
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px' // Start loading 50px before entering viewport
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  const aspectRatio = width && height ? (height / width) * 100 : undefined;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        paddingBottom: aspectRatio ? `${aspectRatio}%` : undefined,
      }}
    >
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          className={`
            absolute top-0 left-0 w-full h-full
            transition-opacity duration-500
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${objectFit === 'cover' ? 'object-cover' : objectFit === 'contain' ? 'object-contain' : 'object-fill'}
          `}
          style={{
            objectFit,
          }}
        />
      )}
      
      {/* Placeholder während Bild lädt */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;
