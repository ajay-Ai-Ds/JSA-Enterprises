import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Logo from "../ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <Logo iconOnly={false} light={true} />
            <p className="text-slate-400 text-sm leading-relaxed mt-2">
              JSA Enterprises is a premium provider of high-grade safety netting solutions and elegant invisible grills in Chennai, Tamil Nadu. Committed to absolute safety, premium durability, and aesthetic design.
            </p>
            <div className="flex flex-col gap-3 mt-1 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent-orange shrink-0" />
                <span>Mon - Sun: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-accent-orange">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Completed Projects", href: "/projects" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Coverage Areas", href: "/areas" },
                { label: "Latest Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 flex items-center gap-2 group text-slate-400"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-accent-orange transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick View */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-accent-orange">
              Our Services
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
                { label: "Children Safety Nets", href: "/services/children-safety-nets" },
                { label: "Pet Safety Nets", href: "/services/pet-safety-nets" },
                { label: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
                { label: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills" },
                { label: "Window Invisible Grills", href: "/services/window-invisible-grills" },
                { label: "Staircase Invisible Grills", href: "/services/staircase-invisible-grills" },
                { label: "Ceiling Cloth Hangers", href: "/services/ceiling-cloth-hangers" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 flex items-center gap-2 group text-slate-400"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-accent-orange transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-accent-orange">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-orange shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white block">Office Location</span>
                  <span className="block text-sm text-slate-400 mt-1">
                    17/7, Rajeswari St, Kamarajar Nagar, NGO Colony, Choolaimedu, Chennai, Tamil Nadu 600094
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-orange shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Phone Number</span>
                  <a href="tel:+917702694269" className="hover:text-white transition-colors">
                    +91 77026 94269
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-orange shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Email Address</span>
                  <a href="mailto:info.jsaenterprises@gmail.com" className="hover:text-white transition-colors">
                    info.jsaenterprises@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 text-center md:flex md:justify-between md:items-center text-xs text-slate-500">
          <p>© {currentYear} JSA Enterprises. All Rights Reserved. Built with absolute premium safety standards.</p>
          <div className="flex justify-center gap-5 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
