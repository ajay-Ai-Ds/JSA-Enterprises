import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean; // If true, rendering logo styled for dark backgrounds (white text)
}

export default function Logo({ className = "", iconOnly = false, light = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 select-none group ${className}`}>
      {/* JSA Enterprises Logo Icon */}
      <div className="relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/hero/logo-icon.png"
          alt="JSA Enterprises Logo"
          fill
          sizes="48px"
          className="object-contain"
          priority
        />
      </div>

      {/* Corporate Logo Typography */}
      {!iconOnly && (
        <div className="flex flex-col leading-tight">
          <span
            className={`text-xl font-bold tracking-tight transition-colors duration-200 ${
              light ? "text-white" : "text-primary-700"
            }`}
          >
            JSA Enterprises
          </span>
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
              light ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Safety Nets & Invisible Grills
          </span>
        </div>
      )}
    </Link>
  );
}


