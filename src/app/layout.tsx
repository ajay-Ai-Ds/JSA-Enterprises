import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSA Enterprises | Premium Safety Nets & Invisible Grills Chennai",
  description:
    "JSA Enterprises offers professional balcony safety nets, children safety nets, pet safety nets, premium invisible grills, and ceiling cloth hangers in Chennai, Tamil Nadu. Fast installation with premium materials.",
  keywords: [
    "Safety Nets Chennai",
    "Invisible Grills Chennai",
    "Balcony Safety Nets Chennai",
    "Pigeon Safety Nets Chennai",
    "Window Invisible Grills Chennai",
    "Ceiling Cloth Hangers Chennai",
    "JSA Enterprises Chennai",
  ],
  metadataBase: new URL("https://www.jsaenterpriseschennai.com"),
  verification: {
    google: "fYQkLBeMnZJOHutLePpTNA_y7Z98S0mCOZuzBiJdrpE",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JSA Enterprises | Premium Safety Nets & Invisible Grills",
    description:
      "Expert safety netting and modern invisible grill installation in Chennai. Rest assured with safety nets built for high durability and style.",
    url: "https://www.jsaenterpriseschennai.com",
    siteName: "JSA Enterprises",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "JSA Enterprises Safety Nets & Invisible Grills",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSA Enterprises | Premium Safety Nets & Invisible Grills",
    description:
      "Premium safety nets and invisible grill installers in Chennai, Tamil Nadu.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.jsaenterpriseschennai.com/#localbusiness",
    "name": "JSA Enterprises",
    "url": "https://www.jsaenterpriseschennai.com",
    "telephone": "+91 77026 94269",
    "email": "info.jsaenterprises@gmail.com",
    "image": "https://www.jsaenterpriseschennai.com/images/og-image.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Content Required From Client",
      "addressLocality": "Chennai",
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

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JSA Enterprises",
    "url": "https://www.jsaenterpriseschennai.com",
    "logo": "https://www.jsaenterpriseschennai.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-77026-94269",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"],
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Schema markup script injections */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Google Analytics 4 (GA4) placeholder */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZCYPR2V24D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZCYPR2V24D');
          `}
        </Script>

        {/* Google Tag Manager (GTM) placeholder */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TEMPLATE_ID');
          `}
        </Script>

        {/* Microsoft Clarity placeholder */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-accent-orange selection:text-white">
        <Navbar />
        <main className="flex-grow pt-[72px] xl:pt-[84px]">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
