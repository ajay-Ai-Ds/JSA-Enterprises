"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Star, Users } from "lucide-react";

export default function Stats() {
  const statItems = [
    {
      id: 1,
      icon: <CheckCircle2 className="w-8 h-8 text-accent-orange" />,
      label: "Completed Projects",
      value: "Content Required From Client",
      description: "Residential & commercial safety net and grill installations across Chennai",
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8 text-accent-orange" />,
      label: "Happy Homes Protected",
      value: "Content Required From Client",
      description: "Families enjoying balcony safety and pet security",
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-8 h-8 text-accent-orange" />,
      label: "Industry Experience",
      value: "Content Required From Client",
      description: "Providing trusted protective netting services in Tamil Nadu",
    },
    {
      id: 4,
      icon: <Star className="w-8 h-8 text-accent-orange" />,
      label: "Client Rating & Feedback",
      value: "Content Required From Client",
      description: "Based on verified local Google reviews",
    },
  ];

  return (
    <section className="bg-white py-16 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-white rounded-xl shadow-xs mb-4">
                {stat.icon}
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">
                {stat.label}
              </h2>
              <p className="text-lg font-bold text-slate-800 mb-2 px-2 py-1 bg-white border border-dashed border-slate-300 rounded-md inline-block max-w-full truncate">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
