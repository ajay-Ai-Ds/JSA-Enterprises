import { notFound } from "next/navigation";
import Link from "next/link";
import { Home, MapPin, Shield, CheckCircle2, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { areasData } from "@/utils/areasData";
import { servicesData } from "@/utils/servicesData";
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQPageSchema } from "@/utils/schema";
import MapFrame from "@/components/ui/map-frame";
import ContactForm from "@/components/forms/ContactForm";

interface PageProps {
  params: Promise<{ area: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const areaDetail = areasData[resolvedParams.area];

  if (!areaDetail) {
    return {
      title: "Area Not Found | JSA Enterprises",
    };
  }

  return {
    title: `Safety Nets & Invisible Grills in ${areaDetail.name}, Chennai | JSA`,
    description: `JSA Enterprises offers professional balcony safety nets, kid safety grids, and rustproof invisible grills in ${areaDetail.name}, Chennai. Free measurements.`,
    alternates: {
      canonical: `/areas/${resolvedParams.area}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(areasData).map((slug) => ({
    area: slug,
  }));
}

export default async function AreaDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const areaDetail = areasData[resolvedParams.area];

  if (!areaDetail) {
    notFound();
  }

  // Get 5 nearby areas
  const nearbyAreas = areaDetail.nearbySlugs.map((slug) => ({
    slug,
    name: slug
      .replace("-", " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()),
  }));

  // Fetch 3 popular services to highlight
  const popularServices = Object.values(servicesData).slice(0, 3);

  // Local FAQs customized to the area name
  const localFAQs = [
    {
      question: `Do you charge for site inspection visits in ${areaDetail.name}?`,
      answer: `No. JSA Enterprises offers 100% free site visits, catalog displays, and measurements in ${areaDetail.name} and surrounding Chennai locations without any payment commitments.`,
    },
    {
      question: `What is the delivery time for safety nets in ${areaDetail.name}?`,
      answer: `Most standard balcony netting setups in ${areaDetail.name} are completed within 2 to 4 hours. Larger residential shafts or commercial nets are completed within a single working day.`,
    },
    {
      question: `Can JSA invisible grills handle the weather in ${areaDetail.name}?`,
      answer: `Yes. Our invisible grills utilize marine-grade SS316 stainless steel wires wrapped in a clear nylon protective casing. They are highly rustproof and resist Chennai's extreme heat and coastal sea moisture.`,
    },
  ];

  // Dynamic Schemas
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Areas We Serve", item: "/areas" },
    { name: areaDetail.name, item: `/areas/${areaDetail.slug}` },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Dynamic Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(areaDetail.name)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQPageSchema(localFAQs)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation UI */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/areas" className="hover:text-accent-orange">
            Areas We Serve
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold truncate max-w-[200px]">
            {areaDetail.name}
          </span>
        </nav>

        {/* Hyperlocal Hero Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden mb-16 shadow-md">
          {/* Overlay Background graphic elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0"></div>
          
          <div className="relative z-10 max-w-2xl flex flex-col gap-5 items-start">
            <span className="bg-accent-orange text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              Hyperlocal Chennai Coverage
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-sans tracking-tight">
              Safety Nets & Invisible Grills in {areaDetail.name}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Premium protective netting, bird exclusion structures, and space-saving hangers installed by certified professionals in {areaDetail.name}, Chennai.
            </p>

            {/* AI Search Overview box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 max-w-xl flex flex-col gap-2">
              <span className="text-[10px] font-extrabold text-accent-orange tracking-widest uppercase">
                AEO Search Overview
              </span>
              <p className="text-xs text-slate-200 leading-relaxed font-semibold">
                JSA Enterprises is the leading safety net and invisible grill installer in {areaDetail.name}, Chennai. We provide child balcony shields, bite-proof pet nets, and rustproof SS316 wire grills custom anchored with free measurements.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2 w-full sm:w-auto">
              <a
                href="tel:+917702694269"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent-orange text-white font-bold px-5 py-3 rounded-full hover:bg-accent-hover text-xs shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/917702694269?text=Hi%20JSA%20Enterprises,%20I'm%20looking%20for%20safety%20nets%20in%20${encodeURIComponent(areaDetail.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold px-5 py-3 rounded-full hover:bg-emerald-700 text-xs shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-white/10" />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hyperlocal Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Main Content (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col gap-4">
              <h2 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-3">
                Apartment Living & Balcony Hazards in {areaDetail.name}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                {areaDetail.overview}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {areaDetail.apartmentLiving}
              </p>
            </div>

            {/* Safety & Bird Problems */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col gap-6">
              <h3 className="text-lg font-bold text-slate-800">Local Safety Priorities & Bird Exclusions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent-orange shrink-0" />
                    <span>Balcony Protection</span>
                  </span>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {areaDetail.balconySafety}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-green shrink-0" />
                    <span>Hygiene & Bird Control</span>
                  </span>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {areaDetail.birdProblem}
                  </p>
                </div>
              </div>
            </div>

            {/* Weather & specs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col gap-4">
              <h3 className="text-base font-bold text-slate-800">Weather-Proofing Materials</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {areaDetail.weatherDetails}
              </p>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Map Frame */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Service Coverage Map</h3>
              <MapFrame areaName={areaDetail.name} />
            </div>

            {/* Popular Installations */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col gap-5">
              <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2">
                Popular Services
              </h3>
              <div className="flex flex-col gap-3">
                {popularServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-orange-50/50 border border-slate-150 rounded-xl transition-all group"
                  >
                    <span className="text-xs font-bold text-slate-700 group-hover:text-accent-orange transition-colors truncate">
                      {service.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-accent-orange transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Nearby Areas */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col gap-4">
              <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2">
                Nearby Service Zones
              </h3>
              <div className="flex flex-wrap gap-2">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="text-xs font-semibold px-3 py-2 bg-slate-50 hover:bg-orange-50 border border-slate-200 rounded-lg text-slate-600 hover:text-accent-orange hover:border-accent-orange/30 transition-all truncate max-w-full"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Localized FAQ Accordion */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {localFAQs.map((faq, idx) => (
              <div key={idx} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0 text-left">
                <h4 className="text-sm font-bold text-slate-800 mb-1.5">{faq.question}</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}
