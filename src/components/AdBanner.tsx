import React from 'react';

interface AdBannerProps {
  className?: string;
  variant?: 'horizontal' | 'compact';
}

export const AdBanner: React.FC<AdBannerProps> = ({ className = '', variant = 'horizontal' }) => {
  return (
    <aside
      aria-label="Sponsor Advertisement Placeholder"
      className={`w-full max-w-6xl mx-auto px-4 my-8 ${className}`}
    >
      <div className="relative rounded-lg border border-dashed border-slate-300 bg-slate-100/70 p-4 text-center transition-colors hover:bg-slate-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-400">
            Advertisement Slot
          </span>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Legal Technology & Financial Mediation Partner Network · 728 × 90 Standard Placement
          </p>
          <span className="text-[11px] text-slate-400">
            Compliant Ad Unit
          </span>
        </div>
      </div>
    </aside>
  );
};
