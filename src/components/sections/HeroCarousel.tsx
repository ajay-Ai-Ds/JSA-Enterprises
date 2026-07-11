"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, MessageSquare, ArrowRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  badge: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/hero/balconygrill.jpg",
    badge: "Architectural Elegance",
    title: "Elegant Invisible Grills for Windows & Balconies",
    subtitle: "Get zero-blockage panoramic views and top-tier security. Made of high-grade 316 marine stainless steel wires wrapped in nylon coating.",
    ctaText: "View Invisible Grills",
    ctaLink: "#services",
  },
  {
    id: 2,
    image: "/images/hero/cloth-hanger1.jpg",
    badge: "Space-Saving Innovation",
    title: "Premium Ceiling & Balcony Cloth Hangers",
    subtitle: "Maximize your living space with our smooth dual-pipe pulley drying system. Rust-proof stainless steel pipes engineered for absolute convenience.",
    ctaText: "Check Cloth Hangers",
    ctaLink: "#services",
  },
  {
    id: 3,
    image: "/images/hero/pigeonnet.jpg",
    badge: "Pigeon Exclusion",
    title: "100% Pigeon & Bird Proofing Balcony Nets",
    subtitle: "Keep pigeons and birds away from nesting on your balcony. Elegant, durable, and transparent netting solutions.",
    ctaText: "View Bird Netting",
    ctaLink: "#services",
  },
  {
    id: 4,
    image: "/images/hero/safetynets.webp",
    badge: "Premium Protection",
    title: "Heavy-Duty Safety Nets & Balcony Netting Solutions",
    subtitle: "Absolute safety for your children and pets without compromising ventilation. Customized high-tensile netting engineered to endure extreme Chennai weather.",
    ctaText: "Explore Safety Nets",
    ctaLink: "#services",
  },
];

// Build an extended array: [last, ...slides, first] for seamless infinite loop
const totalSlides = slides.length;
// We'll clone the entire array at start and end for a buffer
const extendedSlides = [slides[totalSlides - 1], ...slides, slides[0]];

const TRANSITION_DURATION = 700; // ms
const AUTOPLAY_INTERVAL = 3000; // ms

export default function HeroCarousel() {
  // index into extendedSlides; starts at 1 (first real slide)
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionLockRef = useRef(false);

  const minSwipeDistance = 50;

  // Derived: real slide index (0-based) for dots & content overlay
  const realIndex = ((activeIndex - 1) % totalSlides + totalSlides) % totalSlides;

  const goToNext = useCallback(() => {
    if (transitionLockRef.current) return;
    transitionLockRef.current = true;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  }, []);

  const goToPrev = useCallback(() => {
    if (transitionLockRef.current) return;
    transitionLockRef.current = true;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  }, []);

  // After slide transition ends, silently jump if we're on a clone
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    transitionLockRef.current = false;

    setActiveIndex((prev) => {
      // If we slid to the clone of the first real slide (index 0 in extended)
      if (prev === 0) {
        return totalSlides; // jump to the last real slide
      }
      // If we slid to the clone of the last real slide (index totalSlides+1 in extended)
      if (prev === totalSlides + 1) {
        return 1; // jump to the first real slide
      }
      return prev;
    });
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      else if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch gestures
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
    if (distance > minSwipeDistance) goToNext();
    else if (distance < -minSwipeDistance) goToPrev();
  };

  // Go to specific real dot index
  const goToSlide = (dotIndex: number) => {
    if (transitionLockRef.current) return;
    transitionLockRef.current = true;
    setIsTransitioning(true);
    setActiveIndex(dotIndex + 1); // +1 because of leading clone
  };

  const translateX = -activeIndex * 100;

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative w-full h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden bg-slate-900 focus:outline-hidden"
      aria-label="JSA Enterprises Hero Slider"
      tabIndex={0}
    >
      {/* Infinite slide strip */}
      <div
        className="flex h-full"
        style={{
          width: `${extendedSlides.length * 100}%`,
          transform: `translateX(${translateX / extendedSlides.length}%)`,
          transition: isTransitioning
            ? `transform ${TRANSITION_DURATION}ms cubic-bezier(0.77, 0, 0.175, 1)`
            : "none",
          willChange: "transform",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, idx) => (
          <div
            key={`${slide.id}-${idx}`}
            className="relative h-full flex-shrink-0"
            style={{ width: `${100 / extendedSlides.length}%` }}
          >
            {/* Ken Burns effect */}
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                animation:
                  idx === activeIndex
                    ? `kenBurns ${AUTOPLAY_INTERVAL + TRANSITION_DURATION}ms ease-out forwards`
                    : "none",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 1}
                sizes="100vw"
                className="object-cover object-center filter brightness-[0.4]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Text Content Overlay — always shows real slide content */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={realIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-3xl text-left flex flex-col items-start gap-4 sm:gap-6 pointer-events-auto"
            >
              {/* Badge */}
              <span className="bg-accent-orange/90 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-md">
                {slides[realIndex].badge}
              </span>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-sans tracking-tight">
                {slides[realIndex].title}
              </h1>

              {/* Subtitle */}
              <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                {slides[realIndex].subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-2">
                {/* Call Button */}
                <a
                  href="tel:+917702694269"
                  className="flex items-center gap-2.5 bg-accent-orange text-white font-bold px-6 py-3.5 rounded-full hover:bg-accent-hover transition-colors shadow-lg hover:shadow-xl text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 77026 94269</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/917702694269?text=Hi%20JSA%20Enterprises,%20I%20would%20like%20to%20request%20a%20free%20site%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-full hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white/10" />
                  <span>WhatsApp Quote</span>
                </a>

                {/* Request Quote Button */}
                <Link
                  href="#contact"
                  className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-full transition-all border border-white/30 backdrop-blur-xs text-sm"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Control Chevrons (Desktop Only) */}
      <button
        onClick={goToPrev}
        className="hidden md:flex absolute top-1/2 left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-accent-orange text-white items-center justify-center border border-white/10 backdrop-blur-xs transition-colors cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="hidden md:flex absolute top-1/2 right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-accent-orange text-white items-center justify-center border border-white/10 backdrop-blur-xs transition-colors cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === realIndex ? "w-8 bg-accent-orange" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === realIndex ? "true" : "false"}
          />
        ))}
      </div>

      {/* Ken Burns keyframe animation */}
      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
      `}</style>
    </section>
  );
}
