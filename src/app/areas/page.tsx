import { Metadata } from "next";
import Link from "next/link";
import { Home, MapPin, Globe } from "lucide-react";
import { areasList } from "@/utils/areasData";
import { generateBreadcrumbSchema } from "@/utils/schema";
import MapFrame from "@/components/ui/map-frame";

export const metadata: Metadata = {
  title: "Areas We Serve in Chennai | Gated Communities & Apartments | JSA",
  description:
    "Review JSA Enterprises installation services coverage areas across 30 neighborhoods in Chennai, including OMR, ECR, Anna Nagar, Velachery, and Tambaram.",
  alternates: {
    canonical: "/areas",
  },
};

export default function AreasPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Areas We Serve", item: "/areas" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Areas We Serve</span>
        </nav>

        {/* Title Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-start">
            Geographic Coverage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Our Service Locations in Chennai
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            We provide prompt on-site measurements and custom safety net installations across all major residential zones, commercial complexes, and apartments in Chennai metropolitan areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Areas links list (Left) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h2 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent-orange" />
              <span>30 Hyperlocal Chennai Neighborhoods Covered</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {areasList.map((slug) => {
                const areaName = slug
                  .replace("-", " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase());
                return (
                  <Link
                    key={slug}
                    href={`/areas/${slug}`}
                    className="flex items-center gap-2.5 p-3.5 bg-slate-50 hover:bg-orange-50 border border-slate-100 hover:border-accent-orange/30 rounded-xl transition-all group"
                  >
                    <MapPin className="w-4 h-4 text-slate-400 group-hover:text-accent-orange shrink-0 transition-colors" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-900 truncate">
                      {areaName}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Map & support CTA (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <MapFrame areaName="Chennai" />

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs text-center flex flex-col gap-4">
              <h3 className="text-base font-bold text-slate-800">Free Measurements</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                JSA Enterprises offers 100% free site visits, measurements, and catalog presentations across all listed locations.
              </p>
              <a
                href="tel:+917702694269"
                className="w-full flex items-center justify-center gap-2 bg-accent-orange hover:bg-accent-hover text-white font-bold py-3.5 rounded-xl transition-colors text-xs shadow-xs"
              >
                Schedule Site Inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
