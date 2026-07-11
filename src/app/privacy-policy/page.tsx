import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldAlert } from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | JSA Enterprises Chennai",
  description:
    "Review the privacy policy for JSA Enterprises, outlining our data handling practices, security protocols, and cookies policy for site inquiries.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Privacy Policy", item: "/privacy-policy" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Privacy Policy</span>
        </nav>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
            <ShieldAlert className="w-8 h-8 text-accent-orange" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-none">
              Privacy Policy
            </h1>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-500 leading-relaxed">
            <p>
              Last Updated: July 10, 2026. JSA Enterprises (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website https://www.jsaenterpriseschennai.com. We respect your privacy and are committed to protecting any personal identifiable information you share with us.
            </p>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              1. Information We Collect
            </h2>
            <p>
              When you submit a quote request or contact form on our website, we collect your Name, Phone Number, Chennai neighborhood/area, and details of the requested safety netting or invisible grill service. This information is required to coordinate free site visits and provide custom quotations.
            </p>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              2. How We Use Your Data
            </h2>
            <p>
              We collect this data solely to process your safety installation inquiries. We use it to call you, send WhatsApp messages regarding quotes, and arrange technician visits. We do not sell, rent, or lease our subscriber database to third-party commercial marketing platforms.
            </p>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              3. Cookies and Analytics
            </h2>
            <p>
              Our website uses Google Analytics (GA4), Google Tag Manager, and Microsoft Clarity to track basic user parameters, page views, click telemetry, and scroll depths. These cookies capture anonymized data (like browser type and duration) to help us optimize page load speeds.
            </p>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              4. Data Retention & Security
            </h2>
            <p>
              Your contact requests are stored securely on our email and analytics databases. However, specific details regarding JSA&apos;s data purging timelines and compliance certificates are marked as:
            </p>
            <div className="pt-1">
              <span className="text-xs font-bold text-accent-orange uppercase bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-md inline-block">
                Content Required From Client
              </span>
            </div>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              5. Contacting Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request the deletion of your submission logs, please contact us at info.jsaenterprises@gmail.com or call +91 77026 94269.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
