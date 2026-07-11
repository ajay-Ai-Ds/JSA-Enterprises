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
    image: "/images/hero/safetynets.webp",
    badge: "Premium Protection",
    title: "Heavy-Duty Safety Nets & Balcony Netting Solutions",
    subtitle: "Absolute safety for your children and pets without compromising ventilation. Customized high-tensile netting engineered to endure extreme Chennai weather.",
    ctaText: "Explore Safety Nets",
    ctaLink: "#services",
  },
  {
    id: 2,
    image: "/images/hero/balconygrill.jpg",
    badge: "Architectural Elegance",
    title: "Elegant Invisible Grills for Windows & Balconies",
    subtitle: "Get zero-blockage panoramic views and top-tier security. Made of high-grade 316 marine stainless steel wires wrapped in nylon coating.",
    ctaText: "View Invisible Grills",
    ctaLink: "#services",
  },
  {
    id: 3,
    image: "/images/hero/cloth-hanger1.jpg",
    badge: "Space-Saving Innovation",
    title: "Premium Ceiling & Balcony Cloth Hangers",
    subtitle: "Maximize your living space with our smooth dual-pipe pulley drying system. Rust-proof stainless steel pipes engineered for absolute convenience.",
    ctaText: "Check Cloth Hangers",
    ctaLink: "#services",
  },
  {
    id: 4,
    image: "/images/hero/pigeonnet.jpg",
    badge: "Pigeon Exclusion",
    title: "100% Pigeon & Bird Proofing Balcony Nets",
    subtitle: "Keep pigeons and birds away from nesting on your balcony. Elegant, durable, and transparent netting solutions.",
    ctaText: "View Bird Netting",
    ctaLink: "#services",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay Logic - Reduced to 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Swipe Gestures
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
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

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
      {/* Slides */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Ken Burns effect image container */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 3.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.4]"
            />
          </motion.div>

          {/* Slide Text Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl text-left flex flex-col items-start gap-4 sm:gap-6">
                {/* Badge overlay */}
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-accent-orange/90 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-md"
                >
                  {slides[currentIndex].badge}
                </motion.span>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-sans tracking-tight"
                >
                  {slides[currentIndex].title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
                >
                  {slides[currentIndex].subtitle}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4 mt-2"
                >
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
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Control Chevrons (Desktop Only) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute top-1/2 left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-accent-orange text-white items-center justify-center border border-white/10 backdrop-blur-xs transition-colors cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
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
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-accent-orange" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  );
}
