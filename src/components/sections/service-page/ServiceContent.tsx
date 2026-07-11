"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ShieldAlert, Settings, Wrench, ShieldCheck, Heart } from "lucide-react";
import { SpecItem } from "@/utils/servicesData";

interface AboutProps {
  name: string;
  longDescription: string;
  benefits: string[];
}

export function ServiceAbout({ name, longDescription, benefits }: AboutProps) {
  return (
    <section className="bg-white py-20 scroll-mt-12" id="about-service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Text Description */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-start">
                About This Service
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-tight">
                Complete Safety Overview & Architectural Alignment
              </h2>
            </div>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              {longDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                  <ShieldAlert className="w-4.5 h-4.5 text-accent-orange" />
                  <span>Who Needs It?</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Apartments above the 2nd floor, families with active kids, pet owners, and coastal properties seeking zero-blockage safety solutions.
                </p>
              </div>

              <div className="flex flex-col gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                  <Settings className="w-4.5 h-4.5 text-accent-orange" />
                  <span>Maintenance & Safety</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Engineered with zero-corrosion UV stabilized materials. Cleans easily with a damp micro cloth. Check tension boundaries every 12 months.
                </p>
              </div>
            </div>
          </div>

          {/* Core Benefit Bullets */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col gap-6">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent-orange" />
              <span>Core Service Features</span>
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <div className="p-1 bg-emerald-50 text-success-green rounded-md shrink-0 mt-0.5 border border-emerald-100">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ImageCollageProps {
  name: string;
  image: string;
  supportingImages: string[];
}

export function ServiceImages({ name, image, supportingImages }: ImageCollageProps) {
  const imagesList = [image, ...supportingImages].slice(0, 5);

  return (
    <section className="bg-slate-50 py-20 scroll-mt-12" id="collage-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-center">
            Visual Gallery
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            Premium Installation Collage
          </h2>
        </div>

        {/* 5-Image Magazine Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {/* Main big vertical image (Left) */}
          <div className="md:col-span-1 relative h-80 md:h-full rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-200">
            <Image
              src={imagesList[0]}
              alt={`${name} main installation view`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-slate-900/60 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
              Primary View
            </div>
          </div>

          {/* 4 smaller grid images (Right) */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6 h-full">
            {imagesList.slice(1, 5).map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative h-40 md:h-full rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-200"
              >
                <Image
                  src={imgUrl}
                  alt={`${name} detail collage snapshot ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-1 rounded-md capitalize">
                  {idx === 0 ? "Material Detail" : idx === 1 ? "Anchor Points" : idx === 2 ? "Technician Test" : "Apartment Setup"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface BenefitsProps {
  benefits: string[];
}

export function ServiceBenefits({ benefits }: BenefitsProps) {
  return (
    <section className="bg-white py-20 scroll-mt-12" id="benefits-service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
            Key Features
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            Installation Advantages
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex items-start gap-4 hover:shadow-md hover:border-accent-orange/20 transition-all duration-300 group"
            >
              <div className="p-2.5 bg-white border border-slate-200 text-accent-orange rounded-xl shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-colors duration-300">
                <Check className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-bold text-slate-800">{benefit}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Engineered with premium quality standards to safeguard families, children, and properties securely.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface SpecsProps {
  specsTable: SpecItem[];
}

export function ServiceSpecs({ specsTable }: SpecsProps) {
  return (
    <section className="bg-slate-50 py-20 scroll-mt-12" id="specs-service">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-center">
            Product Specifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            Technical Quality Standard Matrix
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-primary-700 text-white font-bold">
                <th className="p-4 sm:p-5">Parameter Quality</th>
                <th className="p-4 sm:p-5">Material Specifications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {specsTable.map((spec, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-600 uppercase tracking-wide text-[10px] sm:text-xs">
                    {spec.label}
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-slate-800">
                    {spec.value === "Content Required From Client" ? (
                      <span className="text-accent-orange px-2.5 py-1 bg-orange-50 border border-dashed border-orange-200 rounded-md inline-block text-[10px] uppercase font-bold leading-none">
                        Content Required From Client
                      </span>
                    ) : (
                      spec.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
