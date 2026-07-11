"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="relative w-full max-w-xs" role="search">
      <label htmlFor="header-search" className="sr-only">
        Search JSA website
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search services, areas, blogs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-slate-100 hover:bg-slate-200/60 border border-slate-200 focus:bg-white focus:border-accent-orange text-slate-800 text-xs px-9 py-2.5 rounded-full focus:outline-hidden transition-all duration-200"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
      <button type="submit" className="sr-only">
        Search
      </button>
    </form>
  );
}
