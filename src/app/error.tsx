"use client";

import { useEffect } from "react";
import { Wrench, RefreshCw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to server diagnostics
    console.error("Global boundary captured runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center select-none">
      <div className="max-w-md bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md flex flex-col items-center gap-6">
        <div className="p-4 bg-orange-50 text-accent-orange rounded-full shadow-xs border border-orange-100/50">
          <Wrench className="w-12 h-12" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-slate-700">Something Went Wrong</h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            An unexpected error occurred during rendering. Our safety system captured it safely. Please click below to try loading again.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={() => reset()}
            className="w-full flex items-center justify-center gap-2 bg-accent-orange hover:bg-accent-hover text-white font-bold py-3.5 rounded-xl transition-all shadow-xs text-xs cursor-pointer focus:outline-hidden"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          
          <a
            href="/"
            className="text-xs text-slate-400 hover:text-accent-orange font-semibold transition-colors"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
}
