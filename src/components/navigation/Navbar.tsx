"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageSquare, ArrowRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../ui/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas", href: "/areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case page starts scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Top Contact Info Bar — always visible */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <div className="flex items-center gap-6 text-[11px] sm:text-xs font-medium">
            <a href="tel:+917702694269" className="flex items-center gap-1.5 hover:text-accent-orange transition-colors" aria-label="Call Us">
              <Phone className="w-3 h-3" />
              <span>+91 77026 94269</span>
            </a>
            <a href="mailto:info.jsaenterprises@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-accent-orange transition-colors" aria-label="Email Us">
              <Mail className="w-3 h-3" />
              <span>info.jsaenterprises@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs font-medium">
            <a
              href="https://wa.me/917702694269?text=Hi%20JSA%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent-orange transition-colors"
              aria-label="WhatsApp Chat"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp Chat</span>
            </a>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:inline text-slate-300">Chennai, Tamil Nadu</span>
          </div>
        </div>
      </div>

      <header
        className={`fixed top-[32px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] border-b border-slate-100/50 py-3"
            : "bg-white border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo light={false} />

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide hover:text-accent-orange transition-colors duration-200 ${
                    isScrolled ? "text-slate-700" : "text-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden xl:flex items-center gap-3">
              {/* Phone CTA */}
              <a
                href="tel:+917702694269"
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-accent-orange transition-colors duration-200 border border-slate-300 rounded-full px-4 py-2"
                aria-label="Call JSA Enterprises"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 77026 94269</span>
              </a>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917702694269?text=Hi%20JSA%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 text-success-green hover:bg-emerald-50 rounded-full transition-colors duration-200"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-5 h-5 fill-success-green/10" />
              </a>

              {/* Request Quote Button */}
              <Link
                href="#contact"
                className="bg-primary-700 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-accent-orange transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-1.5"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex xl:hidden items-center gap-3">
              <a
                href="tel:+917702694269"
                className="p-2 text-slate-700 hover:text-accent-orange transition-colors"
                aria-label="Call JSA"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-800 hover:text-accent-orange transition-colors cursor-pointer"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Background Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black z-45"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col p-6 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <Logo iconOnly={false} />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-slate-600 hover:text-accent-orange transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Links */}
              <nav className="flex flex-col gap-5 py-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="text-lg font-bold text-slate-800 hover:text-accent-orange block py-1.5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Actions */}
              <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-4">
                <a
                  href="tel:+917702694269"
                  className="w-full flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3.5 rounded-xl transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: +91 77026 94269</span>
                </a>
                <a
                  href="https://wa.me/917702694269?text=Hi%20JSA%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold py-3.5 rounded-xl transition-colors text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-emerald-600/10" />
                  <span>WhatsApp Chat</span>
                </a>
                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center gap-2 bg-primary-700 hover:bg-accent-orange text-white font-bold py-4 rounded-xl transition-all shadow-md text-sm"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
