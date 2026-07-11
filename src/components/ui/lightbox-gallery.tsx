"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxGalleryProps {
  images: string[];
  serviceName: string;
}

export default function LightboxGallery({ images, serviceName }: LightboxGalleryProps) {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
  };

  const closeLightbox = () => {
    setPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (photoIndex === null) return;
    setPhotoIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  };

  const prevPhoto = () => {
    if (photoIndex === null) return;
    setPhotoIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));
  };

  // Keyboard navigation inside Lightbox
  useEffect(() => {
    if (photoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextPhoto();
      } else if (e.key === "ArrowLeft") {
        prevPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [photoIndex]);

  return (
    <>
      {/* 6-Image Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.slice(0, 6).map((imgUrl, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-slate-200"
          >
            <Image
              src={imgUrl}
              alt={`${serviceName} installation gallery snapshot ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay magnifying effect */}
            <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/80 p-3 rounded-full text-slate-800 backdrop-blur-xs scale-90 group-hover:scale-100 transition-all duration-300">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal Backdrop Overlay */}
      <AnimatePresence>
        {photoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4 select-none"
          >
            {/* Close trigger overlay */}
            <div className="absolute inset-0 z-0" onClick={closeLightbox}></div>

            {/* Modal Controls */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10 cursor-pointer"
              aria-label="Close image gallery"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous slide */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Containment */}
            <motion.div
              key={photoIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl h-[70vh] z-10 pointer-events-none"
            >
              <Image
                src={images[photoIndex]}
                alt={`${serviceName} full view gallery snapshot`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {/* Next slide */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter Badge */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs font-semibold">
              {photoIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
