"use client";

import { motion } from "framer-motion";
import { PhoneCall, Ruler, ShieldAlert, BadgeCheck } from "lucide-react";

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: <PhoneCall className="w-6 h-6 text-white" />,
    title: "1. Easy Booking & Free Visit",
    description: "Submit a request online or call us directly. We schedule a convenient free site assessment within 24 hours.",
  },
  {
    id: 2,
    icon: <Ruler className="w-6 h-6 text-white" />,
    title: "2. Precise On-Site Measurement",
    description: "Our certified technicians measure your balconies, windows, or ducts and present premium material samples.",
  },
  {
    id: 3,
    icon: <ShieldAlert className="w-6 h-6 text-white" />,
    title: "3. Professional Setup & Tensioning",
    description: "We install heavy-duty anchors and tighten nets or stainless steel grill cables for maximum security.",
  },
  {
    id: 4,
    icon: <BadgeCheck className="w-6 h-6 text-white" />,
    title: "4. Quality Review & Handover",
    description: "A final load test is conducted. We verify anchors and clean the site before handing over safety guarantees.",
  },
];

export default function InstallationProcess() {
  return (
    <section className="bg-slate-50 py-24 scroll-mt-12" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Our 4-Step Professional Installation Process
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            From initial site consultation to professional anchoring, here is how we ensure top-tier safety for your Chennai home.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-0.5 bg-dashed bg-slate-200 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group relative z-10"
            >
              {/* Step Circle */}
              <div className="w-16 h-16 rounded-2xl bg-primary-700 group-hover:bg-accent-orange text-white flex items-center justify-center shadow-lg transition-colors duration-300 mb-6 shrink-0 relative">
                {step.icon}
                {/* Step number micro-badge */}
                <div className="absolute -top-1 -right-1 bg-accent-orange group-hover:bg-primary-700 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white transition-colors duration-300">
                  {step.id}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-slate-800 mb-2.5 group-hover:text-accent-orange transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
