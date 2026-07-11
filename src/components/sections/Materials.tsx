"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

interface Material {
  id: number;
  name: string;
  specs: string[];
  image: string;
}

const materials: Material[] = [
  {
    id: 1,
    name: "Copolymer Nylon Safety Nets",
    image: "/images/hero/balconysafetynet.jpg",
    specs: [
      "100% UV-Stabilized HDPE Nylon",
      "Break load capacity of up to 150kg",
      "Weatherproof: handles sea air humidity",
      "0.8mm to 2.5mm customized thickness",
    ],
  },
  {
    id: 2,
    name: "SS316 Marine Grade Cables",
    image: "/images/hero/balconygrill.jpg",
    specs: [
      "316 marine-grade rustproof steel",
      "Wrapped in clear high-elastic nylon",
      "Supports tension loads up to 400kg",
      "Sleek 2.0mm to 3.0mm diameter",
    ],
  },
  {
    id: 3,
    name: "Pulley Drying Rails",
    image: "/images/hero/cloth-hanger1.jpg",
    specs: [
      "Thick rust-free stainless steel pipes",
      "Nylon braided cords with smooth pulleys",
      "Handles up to 15kg load per pipe",
      "Space-saving double rope lockers",
    ],
  },
];

export default function Materials() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="materials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
            Material Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Built to Protect: Premium Industrial Materials
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            We source only certified, heavy-duty raw materials built to withstand the humid coastal climate of Chennai.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex flex-col group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Specifications Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-800 mb-4 group-hover:text-accent-orange transition-colors">
                  {item.name}
                </h3>
                <ul className="space-y-3 flex-grow">
                  {item.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <ShieldCheck className="w-4 h-4 text-success-green shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
