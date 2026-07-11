"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Ruler, PhoneCall, ShieldCheck, CheckSquare, Hammer, Activity, Wrench, Award, Clock, Heart, ArrowRight, HelpCircle, Plus, Minus } from "lucide-react";
import { ServiceDetail, FAQItem } from "@/utils/servicesData";

// 6-Step Installation Process
export function ServiceTimeline() {
  const steps = [
    { id: 1, title: "Free Inspection", icon: <PhoneCall className="w-5 h-5" />, desc: "Request online. We arrange a site visit within 24 hours." },
    { id: 2, title: "Measurement", icon: <Ruler className="w-5 h-5" />, desc: "Technician takes exact dimensions of the target frames." },
    { id: 3, title: "Material Selection", icon: <Wrench className="w-5 h-5" />, desc: "Review HDPE mesh or steel cable thickness samples." },
    { id: 4, title: "Installation", icon: <Hammer className="w-5 h-5" />, desc: "Certified crew anchors the frames and secures the nets/cables." },
    { id: 5, title: "Safety Testing", icon: <Activity className="w-5 h-5" />, desc: "Conduct active tension pull checks to verify load weight capacity." },
    { id: 6, title: "Final Inspection", icon: <CheckSquare className="w-5 h-5" />, desc: "Clean up site, review anchors, and hand over safety guides." },
  ];

  return (
    <section className="bg-white py-20 scroll-mt-12" id="process-timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
            Installation Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            Our 6-Step Precision Process
          </h2>
        </div>

        {/* Timeline Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[36px] left-[8%] right-[8%] h-0.5 bg-dashed bg-slate-200 -z-0"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group z-10"
            >
              {/* Step Circle */}
              <div className="w-12 h-12 rounded-xl bg-primary-700 group-hover:bg-accent-orange text-white flex items-center justify-center shadow-md transition-colors duration-300 mb-5 relative">
                {step.icon}
                <div className="absolute -top-1.5 -right-1.5 bg-accent-orange group-hover:bg-primary-700 text-white text-[9px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white transition-colors duration-300">
                  {step.id}
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-800 mb-2 group-hover:text-accent-orange transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-[11px] leading-relaxed max-w-[150px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose JSA Cards (6 cards)
export function ServiceWhyChoose() {
  const cards = [
    { label: "Professional Team", icon: <Wrench className="w-5 h-5 text-accent-orange" />, desc: "Expert technicians trained in high-floor safety anchoring rules." },
    { label: "Premium Quality", icon: <ShieldCheck className="w-5 h-5 text-accent-orange" />, desc: "Copolymer UV-treated nylon nets and marine-grade SS316 steel wires." },
    { label: "Affordable Pricing", icon: <Award className="w-5 h-5 text-accent-orange" />, desc: "Get fair pricing and transparent bills without hidden extra markups." },
    { label: "Fast Installation", icon: <Clock className="w-5 h-5 text-accent-orange" />, desc: "Most residential balcony netting setups are completed in 2-4 hours." },
    { label: "Excellent Support", icon: <Heart className="w-5 h-5 text-accent-orange" />, desc: "Dedicated support team available pre- and post-installation." },
    { label: "Clean Finish", icon: <CheckSquare className="w-5 h-5 text-accent-orange" />, desc: "We vacuum dust and leave anchoring zones clean and aesthetic." },
  ];

  return (
    <section className="bg-slate-50 py-20 scroll-mt-12" id="why-choose-jsa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-center">
            Our Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            Why Choose JSA Enterprises
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-accent-orange/20 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-orange-50 transition-colors">
                {card.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-bold text-slate-800">{card.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Related Services, Chennai Areas, Blogs
interface RelatedProps {
  related: ServiceDetail[];
  categoryName: string;
}

export function ServiceRelated({ related, categoryName }: RelatedProps) {
  const areas = ["Adyar", "Velachery", "OMR Chennai", "ECR Chennai", "Tambaram"];

  const blogs = [
    { title: "Essential Balcony Safety Tips for Families living in High-Rise Apartments" },
    { title: "Why SS316 Marine Grade Invisible Grills are Best for Humid Chennai Coastlines" },
    { title: "Ceiling Pulley Cloth Hangers: Maximizing Compact Living Balcony Space" },
  ];

  return (
    <section className="bg-white py-20 scroll-mt-12" id="related-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Related Services (5 services) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
              Related {categoryName}
            </h3>
            <div className="flex flex-col gap-4">
              {related.slice(0, 5).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-between p-4 bg-slate-50 hover:bg-orange-50 border border-slate-200/50 rounded-xl hover:border-accent-orange/20 transition-all group"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-accent-orange transition-colors">
                      {service.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      Professional Installation Chennai
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 group-hover:text-accent-orange transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Related Areas & Blogs */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Chennai Areas */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
                Local Areas Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="text-xs font-semibold px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 hover:text-accent-orange hover:border-accent-orange/30 cursor-default transition-all"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Latest Blogs */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
                Latest Safety Blogs
              </h3>
              <div className="flex flex-col gap-4">
                {blogs.map((blog, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-dashed border-slate-200 rounded-xl flex flex-col gap-2"
                  >
                    <span className="text-[9px] uppercase font-extrabold text-accent-orange tracking-wider bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-sm inline-block self-start leading-none">
                      Blog Content Required From Client
                    </span>
                    <span className="text-xs font-bold text-slate-700 leading-snug">
                      {blog.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 12 FAQs Accordion specific to the service page
interface FAQsProps {
  faqs: FAQItem[];
  serviceName: string;
}

export function ServiceFAQs({ faqs, serviceName }: FAQsProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="bg-slate-50 py-20 scroll-mt-12" id="faqs-service">
      {/* Dynamic FAQ Schema script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
            Service FAQs
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            {serviceName} - FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen ? "border-accent-orange/40 bg-white shadow-xs" : "border-slate-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-hidden"
                >
                  <span className="flex items-start gap-3.5 text-sm sm:text-base font-bold text-slate-800 hover:text-accent-orange transition-colors">
                    <HelpCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <span className="p-1.5 bg-slate-100 rounded-lg text-slate-500 shrink-0 ml-4">
                    {isOpen ? <Minus className="w-4 h-4 text-accent-orange" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-500 text-xs sm:text-sm leading-relaxed pl-[46px] border-t border-slate-100/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
