"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, MapPin, Calendar } from "lucide-react";
import { projectsData } from "@/utils/projectsData";

const categoryFilters = [
  { value: "all", label: "All Projects" },
  { value: "safety-nets", label: "Safety Nets" },
  { value: "invisible-grills", label: "Invisible Grills" },
  { value: "cloth-hangers", label: "Cloth Hangers" },
];

export default function ProjectsFilterClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const projects = Object.values(projectsData);

  // Filtering Logic
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === "all" || project.category === activeFilter;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.serviceName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Search and Filters Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search by area or service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 focus:border-accent-orange px-10 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-accent-orange/10 transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categoryFilters.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveFilter(cat.value);
                setVisibleCount(6);
              }}
              className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full capitalize cursor-pointer transition-all ${
                activeFilter === cat.value
                  ? "bg-primary-700 text-white shadow-sm"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 flex flex-col items-center gap-3">
          <p className="text-slate-500 font-semibold">No installations found matching your query.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveFilter("all");
            }}
            className="text-xs font-bold text-accent-orange hover:text-accent-hover"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <div
              key={project.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-slate-100 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-3 text-[10px] sm:text-xs text-slate-500 font-semibold uppercase">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent-orange shrink-0" />
                    <span>{project.location}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    {project.date === "Content Required From Client" ? (
                      <span className="text-accent-orange font-bold uppercase tracking-wider text-[9px] px-1.5 py-0.5 bg-orange-50 rounded-sm leading-none border border-orange-100/50">
                        Pending Client Data
                      </span>
                    ) : (
                      <span>{project.date}</span>
                    )}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-accent-orange transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary-700 hover:text-accent-orange transition-colors group/btn pt-4 border-t border-slate-50 mt-auto"
                >
                  <span>View Project Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More */}
      {filteredProjects.length > visibleCount && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-primary-700 hover:bg-accent-orange text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full cursor-pointer transition-colors shadow-sm"
          >
            Load More Projects
          </button>
        </div>
      )}
    </div>
  );
}
