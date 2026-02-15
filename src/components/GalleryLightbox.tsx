import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from "lucide-react";

interface GalleryLightboxProps {
  images: Array<{id: string; src: string; alt: string; title: string}>;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryLightbox({
  images,
  currentIndex,
  isOpen,
  onClose
}: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoom(1);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
    setZoom(1);
  };

  if (!isOpen) return null;

  const currentImage = images[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-charcoal-900/95 backdrop-blur-lg"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <motion.img
            key={activeIndex}
            src={currentImage.src}
            alt={currentImage.alt}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: zoom }}
            className="max-w-full max-h-full object-contain rounded-2xl"
          />
        </div>

        {/* Navigation */}
        <button
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
          <button
            onClick={() => setZoom(Math.max(zoom - 0.5, 1))}
            className="text-white hover:text-sunshine-300"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="text-white font-semibold">{Math.round(zoom * 100)}%</span>
          <button
            onClick={() => setZoom(Math.min(zoom + 0.5, 3))}
            className="text-white hover:text-sunshine-300"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <div className="w-px h-6 bg-white/20"></div>
          <button className="text-white hover:text-sunshine-300">
            <Download className="w-5 h-5" />
          </button>
        </div>

        {/* Image Info */}
        <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 text-white">
          <h3 className="font-heading font-bold text-xl mb-1">{currentImage.title}</h3>
          <p className="text-sm text-white/80">{activeIndex + 1} / {images.length}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}