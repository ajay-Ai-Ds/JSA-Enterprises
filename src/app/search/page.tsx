import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import SearchCoreClient from "./SearchCoreClient";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Search Services, Areas & Blogs | JSA Enterprises",
  description:
    "Search across JSA Enterprises balcony safety nets, invisible steel wire grills, laundry hangers, case study projects, and coverage areas in Chennai.",
  alternates: {
    canonical: "/search",
  },
};

export default function SearchPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Search", item: "/search" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Search</span>
        </nav>

        {/* Title Header */}
        <div className="text-left mb-10 flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3 py-1 rounded-full inline-block self-start">
            Fuzzy Finder
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-none">
            Global Search Engine
          </h1>
        </div>

        {/* Wrap Search client core inside Suspense to satisfy Next.js useSearchParams rule */}
        <Suspense
          fallback={
            <div className="text-center py-12 select-none">
              <div className="w-8 h-8 border-2 border-slate-300 border-t-accent-orange rounded-full animate-spin mx-auto mb-3" />
              <span className="text-xs font-bold text-slate-400">Loading indexes...</span>
            </div>
          }
        >
          <SearchCoreClient />
        </Suspense>
      </div>
    </div>
  );
}
