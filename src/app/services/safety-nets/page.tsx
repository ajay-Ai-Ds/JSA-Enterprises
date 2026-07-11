import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Home } from "lucide-react";
import { servicesData } from "@/utils/servicesData";

export const metadata = {
  title: "Premium Safety Nets Installation in Chennai | JSA Enterprises",
  description:
    "Secure your balcony, windows, and open shafts from bird nesting, monkey intrusions, and toddler fall hazards. Professional setup across Chennai.",
  alternates: {
    canonical: "/services/safety-nets",
  },
};

export default function SafetyNetsCategoryPage() {
  const categoryServices = Object.values(servicesData).filter((s) => s.category === "safety-nets");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jsaenterprises.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://jsaenterprises.com/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Safety Nets",
        "item": "https://jsaenterprises.com/services/safety-nets",
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Breadcrumb Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-accent-orange">
            Services
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Safety Nets</span>
        </nav>

        {/* Title Header */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-start">
            Primary Division
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Safety Nets (9 Services)
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Protect your family, pets, and structures with high-density copolymer netting. Designed for Chennai&apos;s weather and custom anchored to meet absolute safety benchmarks.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-slate-100 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-accent-orange transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary-700 hover:text-accent-orange transition-colors group/btn pt-4 border-t border-slate-50 mt-auto"
                >
                  <span>View Installation Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
