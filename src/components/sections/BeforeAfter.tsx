"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ShieldAlert } from "lucide-react";

export default function BeforeAfter() {
  return (
    <section className="bg-slate-50 py-24 scroll-mt-12" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
            Before & After
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Visible Transformations: Balcony Safety & Clarity
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            See how our installations safeguard your family and pets while keeping birds out and preserving balcony aesthetics.
          </p>
        </div>

        {/* Before / After Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col"
          >
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/hero/before-balcony.png"
                alt="Unprotected Chennai apartment balcony before safety net installation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover filter grayscale opacity-90"
              />
              <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-bold uppercase px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>UNPROTECTED AREA</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-slate-800 mb-2">Before Installation</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Balcony exposed to bird nesting, pigeon droppings, and dangerous open hazards for children, pets, or falling objects.
              </p>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col"
          >
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/hero/after-balcony.png"
                alt="Chennai apartment balcony after JSA safety net installation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-success-green text-white text-xs font-bold uppercase px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-white/10" />
                <span>JSA ENTERPRISES PROTECTED</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-slate-800 mb-2">After JSA Professional Setup</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Tensioned invisible steel grills or high-density safety netting secured. Enjoy complete safety, bird exclusion, and ventilation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
