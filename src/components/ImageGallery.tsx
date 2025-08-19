import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageGalleryProps {
  images: string[];
  altPrefix: string;
}

export function ImageGallery({ images, altPrefix }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openCarousel = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeCarousel = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  }, [selectedImageIndex, images.length]);

  const prevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
    }
  }, [selectedImageIndex, images.length]);

  // Gestion des touches clavier
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape') {
        closeCarousel();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImageIndex, nextImage, prevImage]);

  // Gestion des gestes tactiles
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <>
      {/* Grille d'images */}
      <div className="w-full">
        <div className="flex flex-wrap gap-4 justify-center">
            {images.map((image, index) => (
            <div
              key={index}
              className="w-[270px] h-[270px] rounded-lg overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openCarousel(index)}
            >
              <div
                className="w-full h-full bg-cover bg-center group-hover:bg-contain transition-all duration-500 ease-in-out"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: 'no-repeat'
                }}
                title={`${altPrefix} ${index + 1} - Cliquer pour agrandir`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal carrousel */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Bouton fermer */}
            <Button
              onClick={closeCarousel}
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Image actuelle */}
            <div className="max-w-[95vw] max-h-[95vh] flex items-center justify-center">
              <img
                src={images[selectedImageIndex]}
                alt={`${altPrefix} ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
              <Button
                onClick={prevImage}
                variant="outline"
                size="icon"
                className="bg-black/50 border-white/20 text-white"
                disabled={images.length <= 1}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                {selectedImageIndex + 1} / {images.length}
              </div>

              <Button
                onClick={nextImage}
                variant="outline"
                size="icon"
                className="bg-black/50 border-white/20 text-white"
                disabled={images.length <= 1}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}