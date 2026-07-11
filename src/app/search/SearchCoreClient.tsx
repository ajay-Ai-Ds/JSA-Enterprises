"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Search, MapPin, Briefcase, FileText, Wrench, HelpCircle, ArrowRight } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import { areasData } from "@/utils/areasData";
import { projectsData } from "@/utils/projectsData";
import { blogData } from "@/utils/blogData";

interface SearchMatch {
  title: string;
  description: string;
  url: string;
  type: "service" | "area" | "project" | "blog" | "faq";
  typeLabel: string;
}

export default function SearchCoreClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [results, setResults] = useState<SearchMatch[]>([]);

  const activeQuery = searchParams.get("q") || "";

  useEffect(() => {
    if (!activeQuery.trim()) {
      setResults([]);
      return;
    }

    const term = activeQuery.toLowerCase().trim();
    const matches: SearchMatch[] = [];

    // 1. Search Services
    Object.values(servicesData).forEach((service) => {
      if (
        service.name.toLowerCase().includes(term) ||
        service.title.toLowerCase().includes(term) ||
        service.description.toLowerCase().includes(term)
      ) {
        matches.push({
          title: service.name,
          description: service.description,
          url: `/services/${service.slug}`,
          type: "service",
          typeLabel: "Service Profile",
        });
      }
    });

    // 2. Search Areas
    Object.values(areasData).forEach((area) => {
      if (area.name.toLowerCase().includes(term) || area.overview.toLowerCase().includes(term)) {
        matches.push({
          title: `${area.name} Safety Coverage`,
          description: area.overview,
          url: `/areas/${area.slug}`,
          type: "area",
          typeLabel: "Local Service Zone",
        });
      }
    });

    // 3. Search Projects
    Object.values(projectsData).forEach((project) => {
      if (
        project.name.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.location.toLowerCase().includes(term)
      ) {
        matches.push({
          title: project.name,
          description: project.description,
          url: `/projects/${project.slug}`,
          type: "project",
          typeLabel: "Case Study Project",
        });
      }
    });

    // 4. Search Blogs
    Object.values(blogData).forEach((post) => {
      if (
        post.title.toLowerCase().includes(term) ||
        post.summary.toLowerCase().includes(term) ||
        post.categoryLabel.toLowerCase().includes(term)
      ) {
        matches.push({
          title: post.title,
          description: post.summary,
          url: `/blog/${post.slug}`,
          type: "blog",
          typeLabel: "Safety Guide Blog",
        });
      }
    });

    setResults(matches);
  }, [activeQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "service":
        return <Wrench className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />;
      case "area":
        return <MapPin className="w-4 h-4 text-emerald-655 shrink-0 mt-0.5" />;
      case "project":
        return <Briefcase className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />;
      case "blog":
        return <FileText className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />;
      default:
        return <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />;
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Search Input Box */}
      <form onSubmit={handleSearchSubmit} className="relative w-full">
        <label htmlFor="search-input" className="sr-only">
          Search terms input
        </label>
        <input
          type="text"
          id="search-input"
          placeholder="Type service keyword, neighborhood, or blog guide..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white border border-slate-250 focus:border-accent-orange px-12 py-4 rounded-2xl text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-accent-orange/10 shadow-xs"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary-700 hover:bg-accent-orange text-white text-xs font-bold px-4.5 py-2.5 rounded-xl cursor-pointer transition-colors shadow-sm"
        >
          Search Site
        </button>
      </form>

      {/* Results */}
      {activeQuery && (
        <div className="flex flex-col gap-4 text-left">
          <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider">
            Showing {results.length} results for &ldquo;{activeQuery}&rdquo;
          </p>

          {results.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center flex flex-col items-center gap-3">
              <span className="text-slate-400 font-semibold text-sm">No results match your search parameters.</span>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                Try searching for general keywords like &ldquo;balcony&rdquo;, &ldquo;invisible&rdquo;, &ldquo;OMR&rdquo;, or &ldquo;price&rdquo; to find listings.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {results.map((match, idx) => (
                <Link
                  key={idx}
                  href={match.url}
                  className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-accent-orange/30 shadow-xs hover:shadow-md transition-all flex gap-4 group text-left"
                >
                  {getIcon(match.type)}

                  <div className="flex-grow flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-800 group-hover:text-accent-orange transition-colors">
                        {match.title}
                      </span>
                      <span className="text-[9px] uppercase font-extrabold px-2 py-0.5 bg-slate-100 text-slate-500 rounded-sm border border-slate-200/50 leading-none">
                        {match.typeLabel}
                      </span>
                    </div>
                    <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed line-clamp-2">
                      {match.description}
                    </p>
                  </div>

                  <div className="flex items-center self-center shrink-0 text-slate-400 group-hover:text-accent-orange group-hover:translate-x-0.5 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
