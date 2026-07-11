import { Metadata } from "next";
import Link from "next/link";
import { Home, MapPin, Phone, Mail, Clock } from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";
import MapFrame from "@/components/ui/map-frame";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Free Site Measurement & Quote Chennai | JSA",
  description:
    "Get in touch with JSA Enterprises for professional safety netting and invisible grill setup. Call +91 77026 94269 or request a free quote online.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Contact Us", item: "/contact" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Contact Us</span>
        </nav>

        {/* Hero Title */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-start">
            Support Hub
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Get in Touch with JSA
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Have questions about mesh sizes or invisible grills? Schedule a free site visit or call our support desk directly.
          </p>
        </div>

        {/* NAP Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Business Details (Left) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col gap-6 text-left">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
              Office Information
            </h2>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Head Office Address</span>
                  <span className="text-xs font-extrabold text-accent-orange uppercase bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-md self-start">
                    Content Required From Client
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Phone Number</span>
                  <a href="tel:+917702694269" className="text-sm font-bold text-slate-700 hover:text-accent-orange transition-colors">
                    +91 77026 94269
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Email Address</span>
                  <a href="mailto:info.jsaenterprises@gmail.com" className="text-sm font-bold text-slate-700 hover:text-accent-orange transition-colors">
                    info.jsaenterprises@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Operating Hours</span>
                  <span className="text-xs font-bold text-slate-700">
                    Monday - Sunday: 08:00 AM - 08:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Frame (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-left">Service Map Embed</h3>
            <MapFrame areaName="Chennai" className="h-[360px]" />
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}
