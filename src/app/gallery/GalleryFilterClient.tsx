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
    image: "/images/main-images/BalconyNet-1.jpg",
    category: "apartment",
    categoryLabel: "Apartment Installations",
    location: "Adyar, Chennai",
    serviceName: "Balcony Safety Nets",
    description: "High-rise balcony safety netting installed securely across concrete pillars.",
  },
  {
    image: "/images/main-images/Balcony-Grills.jpg",
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "OMR, Chennai",
    serviceName: "Balcony Invisible Grills",
    description: "Elegant SS316 steel wire invisible grills offering panoramic views.",
  },
  {
    image: "/images/main-images/Window-Grills.jpg",
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "ECR, Chennai",
    serviceName: "Window Safety Grills",
    description: "Modern high-tensile SS316 steel wire window safety grills.",
  },
  {
    image: "/images/main-images/Staircase-Grills.jpg",
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "Anna Nagar, Chennai",
    serviceName: "Staircase Safety Grills",
    description: "Sleek vertical SS316 cable grills securing duplex stairwell banisters.",
  },
  {
    image: "/images/main-images/Cloth-Hangera-1.jpg",
    category: "cloth-hangers",
    categoryLabel: "Cloth Hangers",
    location: "Velachery, Chennai",
    serviceName: "Ceiling Cloth Hangers",
    description: "Dual-pipe ceiling pulley hanger system drying clothes space-efficiently.",
  },
  {
    image: "/images/main-images/balcony-cloth-hangers-ai.png",
    category: "cloth-hangers",
    categoryLabel: "Cloth Hangers",
    location: "Porur, Chennai",
    serviceName: "Balcony Cloth Hangers",
    description: "Wall-mounted foldable balcony drying rack installation.",
  },
  {
    image: "/images/main-images/pigeon-safety-nets-ai.png",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Chennai Hub",
    serviceName: "Pigeon Safety Nets",
    description: "High-rise balcony transparent pigeon safety netting installation.",
  },
  {
    image: "/images/main-images/Children-Safety-Net.jpg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "T. Nagar, Chennai",
    serviceName: "Children Safety Nets",
    description: "Reinforced kid-safe boundary mesh tied securely around open railings.",
  },
  {
    image: "/images/main-images/Bird-Spikes.jpg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Nungambakkam, Chennai",
    serviceName: "Bird Spikes & Nets",
    description: "Humane polycarbonate and stainless steel bird spikes on AC ledges.",
  },
  {
    image: "/images/main-images/Sports-Net-1.jpg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Perungudi, Chennai",
    serviceName: "Sports Safety Nets",
    description: "Cricket practice turf boundary net enclosure.",
  },
  {
    image: "/images/main-images/Duct-Area-1.jpg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Sholinganallur, Chennai",
    serviceName: "Duct Area Safety Nets",
    description: "Open building duct ventilation shaft sealed cleanly to block birds.",
  },
  {
    image: "/images/main-images/Terrace-Net.jpg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Porur, Chennai",
    serviceName: "Terrace Safety Nets",
    description: "Rooftop terrace safety enclosure netting.",
  },
  {
    image: "/images/main-images/Factory-Net-1.jpg",
    category: "projects",
    categoryLabel: "Projects",
    location: "Guindy, Chennai",
    serviceName: "Construction Safety Nets",
    description: "Heavy-duty industrial fall protection mesh.",
  },
  {
    image: "/images/main-images/staircase-net-1.jpg",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Medavakkam, Chennai",
    serviceName: "Staircase Safety Nets",
    description: "Indoor stair banister fall safety netting.",
  },
  {
    image: "/images/main-images/Balcony-Grills-2.jpg",
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "Anna Nagar, Chennai",
    serviceName: "Balcony Invisible Grills",
    description: "High-tension invisible steel wire setup on apartment balcony.",
  },
  {
    image: "/images/main-images/BalconyNetWork-1.jpg",
    category: "projects",
    categoryLabel: "Projects",
    location: "Adyar, Chennai",
    serviceName: "Balcony Safety Netting",
    description: "Professional balcony net installation work in progress.",
  },
  {
    image: "/images/main-images/client-grill-1.jpg",
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "Tambaram, Chennai",
    serviceName: "Window Invisible Grills",
    description: "Window safety grill fitting for modern residential home.",
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
