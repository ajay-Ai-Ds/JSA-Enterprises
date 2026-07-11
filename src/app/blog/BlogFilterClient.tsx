"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { BlogArticle } from "@/utils/blogData";

interface BlogFilterClientProps {
  initialPosts: BlogArticle[];
}

const filters = [
  { value: "all", label: "All Articles" },
  { value: "safety-nets", label: "Safety Nets" },
  { value: "invisible-grills", label: "Invisible Grills" },
  { value: "cloth-hangers", label: "Cloth Hangers" },
];

export default function BlogFilterClient({ initialPosts }: BlogFilterClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts = initialPosts.filter((post) => {
    const matchesFilter = activeFilter === "all" || post.category === activeFilter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Search and Filters Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search safety guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 focus:border-accent-orange px-10 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-accent-orange/10 transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full capitalize cursor-pointer transition-all ${
                activeFilter === filter.value
                  ? "bg-primary-700 text-white shadow-sm"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 flex flex-col items-center gap-3">
          <p className="text-slate-500 font-semibold">No articles found matching your query.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveFilter("all");
            }}
            className="text-xs font-bold text-accent-orange hover:text-accent-hover"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-slate-100 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <div className="flex items-center gap-3.5 text-[10px] sm:text-xs text-slate-500 font-bold uppercase mb-3">
                  <span className="bg-orange-50 text-accent-orange px-2.5 py-1 rounded-sm border border-orange-100">
                    {post.categoryLabel}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readingTime}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-accent-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-5 line-clamp-3">
                  {post.summary}
                </p>

                {/* Footer Metadata */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto text-[10px] sm:text-xs text-slate-500 font-semibold uppercase">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.publishedAt}</span>
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary-700 hover:text-accent-orange transition-colors group/btn pt-4 border-t border-slate-50 mt-4"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
