export default function Loading() {
  return (
    <div className="min-h-[50vh] w-full flex flex-col items-center justify-center gap-4 bg-slate-50 select-none">
      <div className="relative w-12 h-12">
        {/* Spinner animation rings */}
        <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest animate-pulse">
        Securing Layout...
      </span>
    </div>
  );
}
