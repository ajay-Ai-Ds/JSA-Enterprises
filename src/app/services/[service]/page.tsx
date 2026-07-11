import { notFound } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import { ServiceHero, ServiceStickyBar, ServiceTrustBar } from "@/components/sections/service-page/ServiceHero";
import { ServiceAbout, ServiceImages, ServiceBenefits, ServiceSpecs } from "@/components/sections/service-page/ServiceContent";
import { ServiceTimeline, ServiceWhyChoose, ServiceRelated, ServiceFAQs } from "@/components/sections/service-page/ServiceProcess";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import LightboxGallery from "@/components/ui/lightbox-gallery";
import ContactForm from "@/components/sections/ContactForm";

interface PageProps {
  params: Promise<{ service: string }>;
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const serviceDetail = servicesData[resolvedParams.service];

  if (!serviceDetail) {
    return {
      title: "Service Not Found | JSA Enterprises",
    };
  }

  return {
    title: `${serviceDetail.title}`,
    description: serviceDetail.description,
    alternates: {
      canonical: `/services/${resolvedParams.service}`,
    },
    openGraph: {
      title: `${serviceDetail.title}`,
      description: serviceDetail.description,
      url: `https://www.jsaenterpriseschennai.com/services/${resolvedParams.service}`,
      images: [
        {
          url: serviceDetail.image,
          width: 1200,
          height: 630,
          alt: serviceDetail.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceDetail.title}`,
      description: serviceDetail.description,
      images: [serviceDetail.image],
    },
  };
}

// Generate static params for Next.js static page generation (SSG)
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    service: slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const serviceDetail = servicesData[resolvedParams.service];

  if (!serviceDetail) {
    notFound();
  }

  // Related Services (5 related services from same category, excluding current service)
  const relatedServices = Object.values(servicesData)
    .filter((s) => s.category === serviceDetail.category && s.slug !== serviceDetail.slug)
    .slice(0, 5);

  // Dynamic Service Schema details
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceDetail.name,
    "serviceType": serviceDetail.categoryName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "JSA Enterprises",
      "telephone": "+91 77026 94269",
      "email": "info.jsaenterprises@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
      },
    },
    "description": serviceDetail.description,
    "areaServed": {
      "@type": "State",
      "name": "Chennai, Tamil Nadu",
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Inject Dynamic Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Sticky Bottom/Top Contact Bar */}
      <ServiceStickyBar name={serviceDetail.name} />

      {/* Hero Section */}
      <ServiceHero
        name={serviceDetail.name}
        categoryName={serviceDetail.categoryName}
        title={serviceDetail.title}
        subtitle={serviceDetail.description}
        aiOverview={serviceDetail.aiOverview}
        image={serviceDetail.image}
      />

      {/* Trust Badges Bar */}
      <ServiceTrustBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Localized Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-accent-orange">
            Services
          </Link>
          <span>/</span>
          <Link href={`/services/${serviceDetail.category}`} className="hover:text-accent-orange capitalize">
            {serviceDetail.categoryName}
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold truncate max-w-[200px]">
            {serviceDetail.name}
          </span>
        </nav>
      </div>

      {/* About Section */}
      <ServiceAbout
        name={serviceDetail.name}
        longDescription={serviceDetail.longDescription}
        benefits={serviceDetail.benefits}
      />

      {/* Collage Gallery Section */}
      <ServiceImages
        name={serviceDetail.name}
        image={serviceDetail.image}
        supportingImages={serviceDetail.supportingImages}
      />

      {/* Benefits Card Grid */}
      <ServiceBenefits benefits={serviceDetail.benefits} />

      {/* 6-Step Installation Process Timeline */}
      <ServiceTimeline />

      {/* Technical Specifications Table */}
      <ServiceSpecs specsTable={serviceDetail.specsTable} />

      {/* Why Choose JSA Section */}
      <ServiceWhyChoose />

      {/* Interactive Before & After Comparison Slider */}
      <section className="bg-white py-20 scroll-mt-12" id="comparison-slider">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
              Visual Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Interactive Before & After Demonstration
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Drag the central divider bar to see the direct aesthetic difference between unprotected spaces and a secure JSA setup.
            </p>
          </div>
          <BeforeAfterSlider
            beforeImage={serviceDetail.beforeImage}
            afterImage={serviceDetail.afterImage}
          />
        </div>
      </section>

      {/* Interactive Lightbox 6-Image Grid */}
      <section className="bg-slate-50 py-20 scroll-mt-12" id="lightbox-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-center">
              Installation Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Photo Gallery & Close-Ups
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Click on any thumbnail below to expand the image in high-resolution, navigate through options, or toggle escape.
            </p>
          </div>
          <LightboxGallery images={serviceDetail.gallery} serviceName={serviceDetail.name} />
        </div>
      </section>

      {/* 12-Item Voice Search Friendly FAQs Accordion */}
      <ServiceFAQs faqs={serviceDetail.faqs} serviceName={serviceDetail.name} />

      {/* Related Services, Areas, and Blog list */}
      <ServiceRelated related={relatedServices} categoryName={serviceDetail.categoryName} />

      {/* Inquiry Contact Form */}
      <ContactForm />
    </div>
  );
}
