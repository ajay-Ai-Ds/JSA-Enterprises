"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

export default function CustomerReviews() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Verified feedback from homeowners and commercial property managers across Chennai.
          </p>
        </div>

        {/* Content Placeholder card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-slate-50 rounded-3xl p-8 sm:p-12 border border-dashed border-slate-300 text-center flex flex-col items-center gap-5"
        >
          <div className="p-4 bg-white rounded-full shadow-xs text-slate-500">
            <MessageSquare className="w-10 h-10" />
          </div>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-slate-300 fill-slate-300" />
            ))}
          </div>

          <h3 className="text-lg font-bold text-slate-800">Verified Client Testimonials</h3>
          
          <p className="text-sm font-semibold tracking-wider text-accent-orange bg-orange-50 px-4 py-2 rounded-lg border border-orange-100 uppercase">
            Content Required From Client
          </p>

          <p className="text-xs text-slate-500 leading-relaxed max-w-md">
            This section is reserved for real reviews from JSA Enterprises customer database. Ratings and testimonials will be populated as soon as verified client logs are shared.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
