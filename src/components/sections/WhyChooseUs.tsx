"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Wrench, Clock, BadgeCheck, PhoneCall } from "lucide-react";
import Image from "next/image";

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: <ShieldCheck className="w-6 h-6 text-accent-orange" />,
    title: "100% Certified Safety Materials",
    description: "We use ISO-certified high-tensile HDPE safety nets and rust-proof SS316 marine-grade cables for all installations.",
  },
  {
    id: 2,
    icon: <Wrench className="w-6 h-6 text-accent-orange" />,
    title: "Expert Certified Installers",
    description: "Our in-house technician team is extensively trained to work at height, ensuring error-free, secure anchoring.",
  },
  {
    id: 3,
    icon: <Award className="w-6 h-6 text-accent-orange" />,
    title: "Tailor-Made Custom Fits",
    description: "Every balcony, window, duct space, and staircase is measured and custom-netted for clean tension and aesthetics.",
  },
  {
    id: 4,
    icon: <Clock className="w-6 h-6 text-accent-orange" />,
    title: "Fast Response & Free Visit",
    description: "We offer quick inspections and free site measurements across Chennai within 24 hours of booking.",
  },
  {
    id: 5,
    icon: <BadgeCheck className="w-6 h-6 text-accent-orange" />,
    title: "Aesthetic Safety Integration",
    description: "Our safety solutions protect your loved ones while preserving views, natural breeze, and structural aesthetics.",
  },
  {
    id: 6,
    icon: <PhoneCall className="w-6 h-6 text-accent-orange" />,
    title: "Client-Centric Care",
    description: "Dedicated local support available pre- and post-installation to handle all questions and maintenance checks.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-white py-24 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image Overlay composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[550px] w-full"
          >
            {/* Main Image */}
            <div className="absolute inset-0 w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="/images/hero/balconysafetynet.jpg"
                alt="Professional balcony netting installation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            {/* Secondary overlapping card image */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
              <Image
                src="/images/hero/safetynets2.jpg"
                alt="Technician working at height"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </div>

            {/* Experience overlay badge */}
            <div className="absolute top-8 right-4 bg-primary-700 text-white p-6 rounded-2xl shadow-lg max-w-[180px] text-center">
              <span className="block text-2xl font-extrabold text-accent-orange mb-1">Chennai</span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-200">
                Local Trusted Net Experts
              </span>
            </div>
          </motion.div>

          {/* Right Column: Values */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-start">
                Why JSA Enterprises
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
                Setting New Benchmarks in Household Safety
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                We believe that safety shouldn&apos;t feel like a cage. Our team designs and installs high-strength, premium-material safety nets and invisible grills that blend seamlessly into your architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex gap-4 items-start"
                >
                  <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl shrink-0 mt-0.5">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 mb-1">{benefit.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
