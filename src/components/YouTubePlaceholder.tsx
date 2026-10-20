import React from 'react';
import { Play } from 'lucide-react';

interface YouTubePlaceholderProps {
  title?: string;
  duration?: string;
  aspectRatio?: '16/9' | '4/3';
  className?: string;
}

export const YouTubePlaceholder: React.FC<YouTubePlaceholderProps> = ({
  title = 'Know Your Rights Against Bank Recovery Agents (RBI Circular Guide)',
  duration = '8:45',
  aspectRatio = '16/9',
  className = '',
}) => {
  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-md ${className}`}
      style={{ aspectRatio: aspectRatio === '16/9' ? '16 / 9' : '4 / 3' }}
      aria-label={`Video player placeholder: ${title}`}
    >
      {/* Subtle background mesh texture */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 opacity-90" />

      {/* Center blank placeholder presentation with play icon */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shadow-lg text-slate-300 transition-transform group-hover:scale-105">
          <Play className="w-7 h-7 ml-1 text-amber-400 fill-amber-400/20" />
        </div>
        <p className="mt-4 text-sm md:text-base font-semibold text-slate-200 max-w-md line-clamp-2">
          {title}
        </p>
        <div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
          <span>Official Educational Briefing</span>
          <span>·</span>
          <span>{duration}</span>
          <span>·</span>
          <span className="text-slate-400">Video Placeholder</span>
        </div>
      </div>

      {/* Bottom video player interface frame mockup */}
      <div className="absolute bottom-0 inset-x-0 h-10 bg-slate-950/80 backdrop-blur-xs border-t border-slate-800/80 px-4 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <span>SettleLawers Video Presentation</span>
        </div>
        <span className="text-[11px] text-slate-400">1080p HD</span>
      </div>
    </div>
  );
};
