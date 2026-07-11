import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck } from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Terms & Conditions | Service & Installation Agreements | JSA",
  description:
    "Review JSA Enterprises terms and conditions for safety netting and invisible grill installations, service warranties, and payment policies in Chennai.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Terms & Conditions", item: "/terms-and-conditions" },
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
          <span className="text-slate-600 font-bold">Terms & Conditions</span>
        </nav>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
            <ShieldCheck className="w-8 h-8 text-accent-orange" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-none">
              Terms & Conditions
            </h1>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-500 leading-relaxed">
            <p>
              Welcome to the JSA Enterprises website (https://www.jsaenterpriseschennai.com). By accessing our site and booking our safety installations, you agree to comply with and be bound by the following terms of service.
            </p>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              1. Site Visit & Measurement
            </h2>
            <p>
              We provide free measurement visits across listed Chennai areas. Our technician will share structural catalog samples. Inquiries submitted do not constitute a binding installation contract until a detailed estimate is accepted by the client.
            </p>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              2. Payments & Pricing
            </h2>
            <p>
              All installation rates, project bills, payment terms, and applicable local taxes are declared clearly in the physical quotation shared with the homeowner. Our official pricing schemas are marked as:
            </p>
            <div className="pt-1">
              <span className="text-xs font-bold text-accent-orange uppercase bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-md inline-block">
                Content Required From Client
              </span>
            </div>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              3. Service Warranties
            </h2>
            <p>
              JSA Enterprises installs high-quality monofilament safety netting and invisible grills. Warranty terms vary by material mesh thickness and UV-stability ratings. Standard warranty duration agreements are strictly subject to client confirmation and are marked as:
            </p>
            <div className="pt-1">
              <span className="text-xs font-bold text-accent-orange uppercase bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-md inline-block">
                Content Required From Client
              </span>
            </div>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              4. Installation Access
            </h2>
            <p>
              Homeowners or residential representatives must arrange necessary societies/apartments permits, height safety permissions, and stable electrical power outlets before our certified crew begins anchoring work.
            </p>

            <h2 className="text-base font-bold text-slate-800 pt-2 border-b border-slate-50 pb-1">
              5. Governing Law
            </h2>
            <p>
              Any disputes or legal inquiries relating to installations, material sales, or contracts executed by JSA Enterprises are governed under the exclusive jurisdiction of the courts of Chennai, Tamil Nadu, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
