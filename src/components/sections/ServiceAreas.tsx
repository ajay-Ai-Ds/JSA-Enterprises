"use client";

import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";

const chennaiAreas = [
  "Adyar",
  "Velachery",
  "OMR (Old Mahabalipuram Rd)",
  "ECR (East Coast Road)",
  "Anna Nagar",
  "T. Nagar",
  "Tambaram",
  "Porur",
  "Madipakkam",
  "Thiruvanmiyur",
  "Mylapore",
  "Nungambakkam",
  "Sholinganallur",
  "Medavakkam",
  "Chromepet",
  "Perungudi",
  "Pallikaranai",
  "Guindy",
  "Kodambakkam",
  "K.K. Nagar",
  "Ashok Nagar",
  "Saidapet",
  "Besant Nagar",
  "Vadapalani",
];

export default function ServiceAreas() {
  return (
    <section className="bg-slate-50 py-24 scroll-mt-12" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Info Text */}
          <div className="lg:col-span-1 flex flex-col gap-5 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-start">
              Service Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Serving Homes & Businesses Across Chennai
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We provide prompt, on-site measurements and safety net installations across all major residential zones, commercial complexes, and apartments in Chennai.
            </p>
            <div className="flex items-center gap-3 text-slate-700 text-sm font-bold mt-2">
              <Globe className="w-5 h-5 text-accent-orange" />
              <span>Free Site Inspections in Chennai Metro</span>
            </div>
          </div>

          {/* Area Chips Grid */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 sm:p-10 shadow-xs border border-slate-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {chennaiAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="flex items-center gap-2.5 p-3.5 bg-slate-50 hover:bg-orange-50/50 hover:border-accent-orange/30 border border-slate-100 rounded-xl transition-all group cursor-default"
                >
                  <MapPin className="w-4 h-4 text-slate-500 group-hover:text-accent-orange shrink-0 transition-colors" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors truncate">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 text-center mt-8 font-medium">
              Don&apos;t see your area? We service all locations in and around the Chennai metropolitan region. Contact support to confirm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
