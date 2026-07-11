import Link from "next/link";
import Image from "next/image";
import { Shield, Eye, Settings, ArrowRight, Home } from "lucide-react";
import { servicesData } from "@/utils/servicesData";

export const metadata = {
  title: "Professional Safety Netting & Invisible Grill Services in Chennai | JSA Enterprises",
  description:
    "Explore our 14 premium installation services in Chennai: balcony safety nets, children protection grids, rustproof invisible grills, and dual-pipe ceiling cloth hangers.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const servicesList = Object.values(servicesData);

  const categories = [
    {
      id: "safety-nets",
      name: "Safety Nets (9 Services)",
      icon: <Shield className="w-5 h-5 text-accent-orange" />,
      description: "Custom-fitted, high-tensile HDPE safety nets for child safety, pet security, and bird prevention.",
      items: servicesList.filter((s) => s.category === "safety-nets"),
    },
    {
      id: "invisible-grills",
      name: "Invisible Grills (3 Services)",
      icon: <Eye className="w-5 h-5 text-accent-orange" />,
      description: "Elegant, marine-grade SS316 cable grills for open windows, staircases, and balconies.",
      items: servicesList.filter((s) => s.category === "invisible-grills"),
    },
    {
      id: "cloth-hangers",
      name: "Cloth Hangers (2 Services)",
      icon: <Settings className="w-5 h-5 text-accent-orange" />,
      description: "Rustproof dual-rope pulley and wall-mounted drying systems to optimize balcony floor space.",
      items: servicesList.filter((s) => s.category === "cloth-hangers"),
    },
  ];

  // Breadcrumb schema
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
        {/* Breadcrumb Navigation UI */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Services</span>
        </nav>

        {/* Page Title Header */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Our Installation Services
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Choose from our 14 certified safety netting, structural invisible grills, and drying hanger services in Chennai. Handcrafted to protect your space cleanly.
          </p>
        </div>

        {/* Categories Loop */}
        <div className="flex flex-col gap-20">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              {/* Category Title */}
              <div className="border-b border-slate-200 pb-5 mb-10">
                <h2 className="text-2xl font-extrabold text-slate-800 flex items-center gap-3">
                  <span className="p-2 bg-white rounded-xl shadow-xs border border-slate-100 shrink-0">
                    {cat.icon}
                  </span>
                  <span>{cat.name}</span>
                </h2>
                <p className="text-slate-500 text-sm mt-2 max-w-2xl">{cat.description}</p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((service) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
