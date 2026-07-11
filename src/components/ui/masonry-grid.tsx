import React from "react";

interface MasonryGridProps {
  children: React.ReactNode;
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
  className?: string;
}

export default function MasonryGrid({ children, className = "" }: MasonryGridProps) {
  // Using pure CSS column properties for fluid, high-performance, layout-shift-free masonry grids.
  // This avoids recalculations on window resize, maximizing mobile speed.
  return (
    <div className={`columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] w-full ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <div className="break-inside-avoid mb-6 w-full inline-block">
              {child}
            </div>
          );
        }
        return child;
      })}
    </div>
  );
}
