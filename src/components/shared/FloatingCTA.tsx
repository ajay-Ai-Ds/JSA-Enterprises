"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  // Only show the floating CTA after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
          {/* Scroll to Top Button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
            className="flex items-center justify-center w-12 h-12 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 transition-colors duration-300 relative group cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
          >
            <ArrowUp className="w-5 h-5" />
            <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Scroll to Top
            </span>
          </motion.button>

          {/* Direct Call Button (Safety Orange) */}
          <motion.a
            href="tel:+917702694269"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Call JSA Enterprises"
            className="flex items-center justify-center w-12 h-12 bg-accent-orange text-white rounded-full shadow-lg hover:bg-accent-hover transition-colors duration-300 relative group focus:outline-hidden focus:ring-2 focus:ring-accent-orange focus:ring-offset-2"
          >
            <Phone className="w-5 h-5" />
            <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Call Support: +91 77026 94269
            </span>
            <span className="absolute inset-0 w-full h-full rounded-full bg-accent-orange animate-ping opacity-25 -z-10 group-hover:hidden"></span>
          </motion.a>

          {/* WhatsApp Button (Success Green) */}
          <motion.a
            href="https://wa.me/917702694269?text=Hi%20JSA%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Chat on WhatsApp"
            className="flex items-center justify-center w-12 h-12 bg-success-green text-white rounded-full shadow-lg hover:bg-emerald-600 transition-colors duration-300 relative group focus:outline-hidden focus:ring-2 focus:ring-success-green focus:ring-offset-2"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282 0 11.782 0c3.148.001 6.107 1.227 8.331 3.454 2.224 2.227 3.447 5.189 3.445 8.34-.005 6.505-5.282 11.783-11.784 11.783-2.001-.001-3.973-.513-5.733-1.488L0 24zm6.49-4.22c1.674.993 3.328 1.52 5.232 1.522 5.344 0 9.69-4.346 9.693-9.693.002-2.593-1.002-5.029-2.827-6.856-1.825-1.826-4.26-2.83-6.853-2.83-5.348 0-9.695 4.345-9.698 9.692-.001 1.954.513 3.619 1.547 5.247l-.99 3.614 3.738-.98l.161.096zm12.39-7.142c-.27-.135-1.597-.788-1.848-.88-.25-.091-.433-.135-.615.135-.183.27-.707.88-.867 1.064-.16.183-.32.206-.59.072-1.353-.679-2.355-1.196-3.149-2.55-.213-.364.213-.338.61-.1.356.208.4.27.6.4.2.13.1.25.05.35-.05.1-.515 1.24-.635 1.53-.12.285-.24.3-.51.185-.27-.135-1.144-.421-2.18-1.346-.806-.717-1.35-1.605-1.508-1.876-.158-.27-.017-.417.118-.551.121-.12.27-.315.405-.473.134-.158.18-.27.27-.45.09-.18.045-.337-.023-.472-.067-.135-.615-1.485-.84-2.03-.22-.53-.443-.457-.615-.466-.16-.008-.344-.01-.527-.01-.183 0-.482.068-.733.338-.25.27-.954.934-.954 2.279s.977 2.639 1.114 2.82c.137.18 1.921 2.934 4.654 4.114.65.28 1.157.447 1.554.573.653.208 1.248.179 1.718.109.523-.078 1.598-.654 1.825-1.254.227-.6.227-1.114.159-1.224-.069-.11-.25-.18-.52-.315z" />
            </svg>
            <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              WhatsApp Us
            </span>
            <span className="absolute inset-0 w-full h-full rounded-full bg-success-green animate-ping opacity-25 -z-10 group-hover:hidden"></span>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
