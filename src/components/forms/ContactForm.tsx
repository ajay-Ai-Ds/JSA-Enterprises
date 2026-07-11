"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { trackFormSubmit } from "@/utils/analytics";

// Zod Validation Schema matching Indian format rules
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Enter a valid 10-digit Indian mobile number (starts with 6-9).",
  }),
  area: z.string().min(2, { message: "Please specify your Chennai neighborhood." }),
  service: z.string().min(1, { message: "Please select a service category." }),
  message: z.string().optional(),
  botfield: z.string().optional(), // Honeypot spam block field
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const servicesList = [
  { value: "balcony-safety-nets", label: "Balcony Safety Nets" },
  { value: "children-safety-nets", label: "Children Safety Nets" },
  { value: "pet-safety-nets", label: "Pet Safety Nets" },
  { value: "pigeon-safety-nets", label: "Pigeon Safety Nets" },
  { value: "sports-nets", label: "Sports Nets" },
  { value: "construction-safety-nets", label: "Construction Safety Nets" },
  { value: "duct-area-safety-nets", label: "Duct Area Safety Nets" },
  { value: "monkey-safety-nets", label: "Monkey Safety Nets" },
  { value: "industrial-safety-nets", label: "Industrial Safety Nets" },
  { value: "balcony-invisible-grills", label: "Balcony Invisible Grills" },
  { value: "window-invisible-grills", label: "Window Invisible Grills" },
  { value: "staircase-invisible-grills", label: "Staircase Invisible Grills" },
  { value: "ceiling-cloth-hangers", label: "Ceiling Cloth Hangers" },
  { value: "balcony-cloth-hangers", label: "Balcony Cloth Hangers" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      area: "",
      service: "",
      message: "",
      botfield: "",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    // Honeypot spam check - silently reject bots without hitting server
    if (data.botfield) {
      console.warn("Spam bot submission blocked via Honeypot.");
      setStatus("success"); // Confuse the bot into thinking it succeeded
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          location: data.area, // map data.area to API's expected 'location' field
          service: data.service,
          message: data.message,
        }),
      });

      if (response.ok) {
        // Track successful submission inside dataLayer
        trackFormSubmit(data.service, data.area);

        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-slate-100 py-24 scroll-mt-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-start">
                Get a Quote
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
                Request a Free On-Site Measurement & Pricing Quote
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Fill out the form to schedule a site measurement visit. Our technician will visit your location in Chennai with material catalogs and share an accurate quotation.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <a
                href="tel:+917702694269"
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow group"
              >
                <div className="p-3 bg-orange-50 text-accent-orange rounded-xl shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block tracking-wider">
                    Quick Call Booking
                  </span>
                  <span className="text-base font-extrabold text-slate-800 group-hover:text-accent-orange transition-colors">
                    +91 77026 94269
                  </span>
                </div>
              </a>

              <a
                href="mailto:info.jsaenterprises@gmail.com"
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow group"
              >
                <div className="p-3 bg-blue-50 text-primary-700 rounded-xl shrink-0 group-hover:bg-primary-700 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block tracking-wider">
                    Email Support
                  </span>
                  <span className="text-base font-extrabold text-slate-800 group-hover:text-primary-700 transition-colors">
                    info.jsaenterprises@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-200">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center justify-center gap-4"
              >
                <div className="p-4 bg-emerald-50 rounded-full text-success-green">
                  <CheckCircle2 className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Booking Request Received!</h3>
                <p className="text-slate-500 text-sm max-w-md leading-relaxed">
                  Thank you for reaching out to JSA Enterprises. Our team will contact you shortly to schedule your free site measurement and share quotation details.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 bg-primary-700 hover:bg-accent-orange text-white text-xs font-bold px-6 py-3 rounded-full cursor-pointer transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl text-xs flex items-center gap-3" role="alert">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Something went wrong. Please call us directly or try submitting again.</span>
                  </div>
                )}

                {/* Honeypot Spam Shield Input - Hidden from human eyes */}
                <input
                  type="text"
                  autoComplete="off"
                  {...register("botfield")}
                  className="hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="e.g. Anand Kumar"
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      {...register("name")}
                      className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-accent-orange/20 transition-all ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-accent-orange"
                      }`}
                    />
                    {errors.name && (
                      <span id="name-error" className="text-[10px] text-red-500 font-semibold" role="alert">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 tracking-wide">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="e.g. 98765 43210"
                      aria-required="true"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      {...register("phone")}
                      className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-accent-orange/20 transition-all ${
                        errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-accent-orange"
                      }`}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="text-[10px] text-red-500 font-semibold" role="alert">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Area in Chennai */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="area" className="text-xs font-bold text-slate-700 tracking-wide">
                      Your Area/Neighborhood in Chennai *
                    </label>
                    <input
                      type="text"
                      id="area"
                      placeholder="e.g. Velachery, Adyar, OMR"
                      aria-required="true"
                      aria-invalid={errors.area ? "true" : "false"}
                      aria-describedby={errors.area ? "area-error" : undefined}
                      {...register("area")}
                      className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-accent-orange/20 transition-all ${
                        errors.area ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-accent-orange"
                      }`}
                    />
                    {errors.area && (
                      <span id="area-error" className="text-[10px] text-red-500 font-semibold" role="alert">
                        {errors.area.message}
                      </span>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-bold text-slate-700 tracking-wide">
                      Select Safety Service *
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        aria-required="true"
                        aria-invalid={errors.service ? "true" : "false"}
                        aria-describedby={errors.service ? "service-error" : undefined}
                        {...register("service")}
                        className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-accent-orange/20 transition-all appearance-none cursor-pointer ${
                          errors.service ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-accent-orange"
                        }`}
                      >
                        <option value="">-- Choose Installation --</option>
                        {servicesList.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {errors.service && (
                      <span id="service-error" className="text-[10px] text-red-500 font-semibold" role="alert">
                        {errors.service.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 tracking-wide">
                    Additional Message or Specific Dimensions (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your requirement (e.g. balcony size, pulley hanger rods preference, open windows count etc.)"
                    {...register("message")}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-accent-orange px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-accent-orange/20 transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary-700 hover:bg-accent-orange text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm focus:outline-hidden focus:ring-2 focus:ring-primary-700 focus:ring-offset-2"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Free Site Visit & Quote</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
