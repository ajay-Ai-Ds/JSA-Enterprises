"use client";

import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center select-none">
      <div className="max-w-md bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md flex flex-col items-center gap-6">
        <div className="p-4 bg-orange-50 text-accent-orange rounded-full shadow-xs border border-orange-100/50">
          <ShieldAlert className="w-12 h-12" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight leading-none">404</h1>
          <h2 className="text-lg font-bold text-slate-700">Safety Net Breach: Page Not Found</h2>
        </div>

        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
          The safety netting route you are looking for has been moved or doesn&apos;t exist. Let&apos;s guide you back to secure ground.
        </p>

        <Link
          href="/"
          className="w-full flex items-center justify-center gap-2 bg-primary-700 hover:bg-accent-orange text-white font-bold py-3.5 rounded-xl transition-all shadow-xs text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Safety (Home)</span>
        </Link>
      </div>
    </div>
  );
}
