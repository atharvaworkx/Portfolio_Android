import React from 'react';
import { THEME_OPTIONS } from '../../config/portfolio';
import type { ThemeId } from '../../types';
import { Check } from 'lucide-react';

interface ThemePanelProps {
  currentTheme: ThemeId;
  onSelectTheme: (themeId: ThemeId) => void;
}

export const ThemePanel: React.FC<ThemePanelProps> = ({ currentTheme, onSelectTheme }) => {
  return (
    <div className="tilt-right glass-panel-ss rounded-3xl p-6 text-left relative overflow-hidden backdrop-blur-2xl border border-white/20 select-none">
      {/* Monospace Code Comment */}
      <div className="font-mono text-xs text-sky-200/80 mb-1">
        // sky_lab
      </div>

      {/* Heading */}
      <h2 className="text-xl font-bold text-white mb-4">
        Paint the sky
      </h2>

      {/* 2-Column x 3-Row Swatches Grid matching screenshot */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {THEME_OPTIONS.map((theme) => {
          const isSelected = theme.id === currentTheme;
          return (
            <button
              key={theme.id}
              onClick={() => onSelectTheme(theme.id)}
              className={`group relative h-14 rounded-2xl p-1 bg-gradient-to-r ${theme.gradientClass} transition-all duration-200 active:scale-95 flex items-center justify-center shadow-md ${
                isSelected
                  ? 'ring-2 ring-white/90 scale-[1.02] shadow-lg shadow-black/30'
                  : 'hover:opacity-90 hover:scale-[1.01]'
              }`}
              title={theme.name}
              aria-label={`Select ${theme.name} theme`}
            >
              {isSelected && (
                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                  <Check className="w-4 h-4 text-white stroke-[3] drop-shadow" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom status line */}
      <div className="font-mono text-[11px] text-slate-400">
        &gt; repaints the entire OS
      </div>
    </div>
  );
};
