"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before Installation",
  afterLabel = "After JSA Setup",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    // Lock pointer capture to handle drags outside boundaries
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Add keyboard support (Left/Right arrows when focused)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={`relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 select-none cursor-ew-resize focus:outline-hidden focus:ring-2 focus:ring-accent-orange ${className}`}
      aria-label="Before and after image comparison slider"
    >
      {/* Before Image (Bottom Layer) */}
      <div className="absolute inset-0 w-full h-full bg-slate-200">
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover filter grayscale"
          draggable={false}
        />
        {/* Label */}
        <span className="absolute bottom-4 left-4 bg-slate-900/80 text-white text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-xs border border-white/10 z-10">
          {beforeLabel}
        </span>
      </div>

      {/* After Image (Top Layer, clipped) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
        />
        {/* Label */}
        <span className="absolute bottom-4 right-4 bg-success-green/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md z-10">
          {afterLabel}
        </span>
      </div>

      {/* Slider Handle Divider Line */}
      <div
        onPointerDown={handlePointerDown}
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center transition-shadow duration-200"
        style={{
          left: `${sliderPosition}%`,
          boxShadow: isDragging ? "0 0 10px rgba(0,0,0,0.5)" : "0 0 4px rgba(0,0,0,0.3)",
        }}
      >
        {/* Drag Circle Handle */}
        <div className="w-10 h-10 rounded-full bg-accent-orange text-white border-2 border-white flex items-center justify-center shadow-lg transform -translate-x-1/2 cursor-ew-resize hover:scale-105 active:scale-95 transition-transform duration-200">
          <MoveHorizontal className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
