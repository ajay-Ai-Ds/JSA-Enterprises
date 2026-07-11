"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Eye, Settings, ArrowRight } from "lucide-react";

interface Category {
  id: number;
  name: string;
  count: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Safety Nets",
    count: "9 Services Available",
    image: "/images/hero/safetynets.webp",
    icon: <Shield className="w-6 h-6 text-white" />,
    description: "Secure your balconies, staircases, and ducts with high-density polyethylene netting designed for children and pet safety.",
    slug: "safety-nets",
  },
  {
    id: 2,
    name: "Invisible Grills",
    count: "3 Services Available",
    image: "/images/hero/invisible-grill.png",
    icon: <Eye className="w-6 h-6 text-white" />,
    description: "Preserve beautiful scenic views while ensuring absolute balcony security with modern nylon-coated stainless steel invisible grills.",
    slug: "invisible-grills",
  },
  {
    id: 3,
    name: "Cloth Hangers",
    count: "2 Services Available",
    image: "/images/hero/cloth-hanger.png",
    icon: <Settings className="w-6 h-6 text-white" />,
    description: "Install dual-pipe pulley ceiling cloth drying hangers or balcony wall-mounted hangers to maximize space and drying efficiency.",
    slug: "cloth-hangers",
  },
];

export default function ServiceCategories() {
  return (
    <section id="services" className="bg-slate-50 py-24 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Engineered Safety & Utility Solutions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Protect your family, secure your pets, and optimize your balcony drying utility with our premium installation services in Chennai.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-100 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.name} installations by JSA`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 bg-accent-orange p-3.5 rounded-2xl shadow-md z-10 transition-transform duration-300 group-hover:rotate-12">
                  {category.icon}
                </div>

                {/* Service count label */}
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-xs text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/20">
                  {category.count}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-accent-orange transition-colors">
                  {category.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {category.description}
                </p>

                {/* Action CTA */}
                <Link
                  href={`/services#${category.slug}`}
                  className="w-full flex items-center justify-between bg-slate-50 hover:bg-accent-orange hover:text-white text-slate-700 font-bold px-5 py-4 rounded-2xl transition-all duration-300 border border-slate-100"
                >
                  <span className="text-sm">Explore Category</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
