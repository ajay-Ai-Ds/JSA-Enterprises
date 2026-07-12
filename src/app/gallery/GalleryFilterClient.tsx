"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, MapPin } from "lucide-react";
import MasonryGrid from "@/components/ui/masonry-grid";
import LightboxGallery from "@/components/ui/lightbox-gallery";

interface GalleryPhoto {
  image: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers" | "projects" | "team" | "materials" | "apartment";
  categoryLabel: string;
  location: string;
  serviceName: string;
  description: string;
}

const galleryData: GalleryPhoto[] = [
  {
    image: "/images/hero/balconysafetynet.jpg",
    category: "apartment",
    categoryLabel: "Apartment Installations",
    location: "Adyar, Chennai",
    serviceName: "Balcony Safety Nets",
    description: "High-rise balcony safety netting installed securely across concrete pillars.",
  },
  {
    image: "/images/hero/balconygrill.jpg",
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "OMR, Chennai",
    serviceName: "Balcony Invisible Grills",
    description: "Elegant SS316 steel wire invisible grills offering panoramic views.",
  },
  {
    image: "/images/hero/cloth-hanger.png",
    category: "cloth-hangers",
    categoryLabel: "Cloth Hangers",
    location: "Velachery, Chennai",
    serviceName: "Ceiling Cloth Hangers",
    description: "Dual-pipe ceiling pulley hanger system drying clothes space-efficiently.",
  },
  {
    image: "/images/hero/team-net-install.png",
    category: "team",
    categoryLabel: "Team",
    location: "T. Nagar, Chennai",
    serviceName: "JSA Technicians",
    description: "Insured field technicians securing brackets at high floor structures.",
  },
  {
    image: "/images/hero/safetynets.webp",
    category: "materials",
    categoryLabel: "Materials",
    location: "Chennai Hub",
    serviceName: "HDPE Nylon Nets",
    description: "Close-up of UV-stabilized double-locked HDPE safety netting mesh.",
  },
  {
    image: "/images/hero/cricketpracticenet.jpg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Tambaram, Chennai",
    serviceName: "Sports Safety Nets",
    description: " Cricket practice pitches netting boundary cage installation.",
  },
  {
    image: "/images/hero/childrensafetynet.webp",
    category: "apartment",
    categoryLabel: "Apartment Installations",
    location: "Anna Nagar, Chennai",
    serviceName: "Children Safety Nets",
    description: "Reinforced kid-safe boundary mesh tied securely around open railings.",
  },
  {
    image: "/images/hero/windowgrill.webp",
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "Nungambakkam, Chennai",
    serviceName: "Window Invisible Grills",
    description: "SS316 safety wire grids replacing dark iron rods.",
  },
  {
    image: "/images/hero/cloth-hanger1.jpg",
    category: "cloth-hangers",
    categoryLabel: "Cloth Hangers",
    location: "Porur, Chennai",
    serviceName: "Balcony Wall Hangers",
    description: "Folding accordion-style wall hangers collapsing flat against the frames.",
  },
  {
    image: "/images/hero/constructionnet.webp",
    category: "projects",
    categoryLabel: "Projects",
    location: "ECR, Chennai",
    serviceName: "Construction Safety Nets",
    description: "Heavy-duty fall protection nets wrapped around concrete pillars.",
  },
  {
    image: "/images/hero/ductarea.webp",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Sholinganallur, Chennai",
    serviceName: "Duct Area Safety Nets",
    description: "Open building duct ventilation shaft sealed cleanly to block birds.",
  },
  {
    image: "/images/hero/pigeonnet.jpg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Chennai Hub",
    serviceName: "Anti-Bird Nets",
    description: "Anti-bird netting secured around building exteriors to protect against pigeons.",
  },
];

const filters = [
  { value: "all", label: "All Photos" },
  { value: "safety-nets", label: "Safety Nets" },
  { value: "invisible-grills", label: "Invisible Grills" },
  { value: "cloth-hangers", label: "Cloth Hangers" },
  { value: "projects", label: "Projects" },
  { value: "team", label: "Team" },
  { value: "materials", label: "Materials" },
  { value: "apartment", label: "Apartments" },
];

export default function GalleryFilterClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = galleryData.filter(
    (photo) => activeFilter === "all" || photo.category === activeFilter
  );

  const imagesList = filteredPhotos.map((p) => p.image);

  return (
    <div className="flex flex-col gap-10">
      {/* Category Filter Toolbar */}
      <div className="flex flex-wrap gap-2.5 bg-white p-5 rounded-3xl border border-slate-200 shadow-xs justify-center sm:justify-start">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`text-xs sm:text-sm font-bold px-4.5 py-2.5 rounded-full cursor-pointer transition-all ${
              activeFilter === filter.value
                ? "bg-primary-700 text-white shadow-xs"
                : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <MasonryGrid>
        {filteredPhotos.map((photo, index) => (
          <div
            key={index}
            onClick={() => setPhotoIndex(index)}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-slate-200 transition-all duration-300 cursor-pointer w-full"
          >
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 bg-slate-200">
              <Image
                src={photo.image}
                alt={`${photo.serviceName} - ${photo.description}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
              {/* Zoom hover glass overlay */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full text-slate-800 backdrop-blur-xs scale-90 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 className="w-4.5 h-4.5" />
                </div>
              </div>
            </div>

            {/* Meta Footer */}
            <div className="p-5 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-500 font-bold uppercase mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-orange" />
                <span>{photo.location}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-1 group-hover:text-accent-orange transition-colors">
                {photo.serviceName}
              </h3>
              <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </MasonryGrid>

      {/* Lightbox Trigger Modal */}
      {photoIndex !== null && (
        <LightboxGallery
          images={imagesList}
          serviceName={filteredPhotos[photoIndex].serviceName}
        />
      )}
    </div>
  );
}
