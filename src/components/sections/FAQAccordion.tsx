"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What types of safety netting solutions do you install?",
    answer: "We offer 9 specialized safety net solutions: Balcony, Children, Pet, Pigeon, Sports, Construction, Duct Area, Monkey, and Coconut Tree safety nets. All netting is customized for high-tensile strength and weather resistance.",
  },
  {
    id: 2,
    question: "Are your site inspection and measurements free of charge in Chennai?",
    answer: "Yes, our technician site inspections, measurements, and catalog presentations are 100% free of charge across Chennai, Tamil Nadu. There are no hidden costs or commitments.",
  },
  {
    id: 3,
    question: "What are invisible grills, and what materials do you use?",
    answer: "Invisible grills are modern, aesthetic alternatives to heavy iron bars. We use premium SS316 marine-grade stainless steel cables wrapped in a protective high-elastic nylon coating, offering high load-bearing safety (up to 400kg) while keeping views unobstructed.",
  },
  {
    id: 4,
    question: "Can your safety nets withstand Chennai sun and heavy rain?",
    answer: "Absolutely. Our safety nets are fabricated from UV-stabilized copolymer nylon and high-density polyethylene (HDPE). They are specifically treated to resist fading, degradation under harsh sunlight, and humidity from coastal sea winds.",
  },
  {
    id: 5,
    question: "How long does the safety net or invisible grill installation take?",
    answer: "Most residential balcony safety net installations are completed within 2 to 4 hours. Larger setups, duct netting, or full-apartment invisible grill installations depend on dimensions and height, but are typically finalized within a single working day.",
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // FAQ Schema definition
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
    <section className="bg-white py-24 scroll-mt-12" id="faq">
      {/* Inject FAQ Schema dynamically for search bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Find immediate answers regarding materials, pricing estimates, installation duration, and safety standards.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen ? "border-accent-orange/40 bg-slate-50/50 shadow-xs" : "border-slate-100 bg-white"
                }`}
              >
                {/* Question trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-hidden"
                >
                  <span className="flex items-start gap-3.5 text-sm sm:text-base font-bold text-slate-800 hover:text-accent-orange transition-colors">
                    <HelpCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <span className="p-1.5 bg-slate-100 rounded-lg text-slate-500 shrink-0 ml-4 group">
                    {isOpen ? <Minus className="w-4 h-4 text-accent-orange" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Answer drawer */}
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
