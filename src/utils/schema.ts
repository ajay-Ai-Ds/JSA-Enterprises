export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JSA Enterprises",
    "url": "https://jsaenterprises.com",
    "logo": "https://jsaenterprises.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-77026-94269",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"],
    },
  };
}

export function generateLocalBusinessSchema(areaName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://jsaenterprises.com/#localbusiness${areaName ? `-${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "name": `JSA Enterprises${areaName ? ` - ${areaName}` : ""}`,
    "url": `https://jsaenterprises.com${areaName ? `/areas/${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "telephone": "+91 77026 94269",
    "email": "info.jsaenterprises@gmail.com",
    "image": "https://jsaenterprises.com/images/og-image.webp",
    "priceRange": "Content Required From Client",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Content Required From Client",
      "addressLocality": areaName || "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "Content Required From Client",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "08:00",
      "closes": "20:00",
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://jsaenterprises.com",
    "name": "JSA Enterprises",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://jsaenterprises.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(links: SchemaBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": links.map((link, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": link.name,
      "item": link.item.startsWith("http") ? link.item : `https://jsaenterprises.com${link.item}`,
    })),
  };
}

export function generateServiceSchema(serviceName: string, categoryName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": categoryName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "JSA Enterprises",
      "telephone": "+91 77026 94269",
      "email": "info.jsaenterprises@gmail.com",
    },
    "description": description,
    "areaServed": {
      "@type": "State",
      "name": "Chennai, Tamil Nadu",
    },
  };
}

export function generateFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(title: string, description: string, image: string, datePublished: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": "JSA Enterprises",
      "url": "https://jsaenterprises.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "JSA Enterprises",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jsaenterprises.com/images/logo.png",
      },
    },
  };
}
