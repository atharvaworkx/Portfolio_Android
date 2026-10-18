import React from 'react';
import type { AppIconConfig } from '../../types';
import { AppIconRenderer } from './AppIconRenderer';

interface AppIconProps {
  app: AppIconConfig;
  onOpen: (id: AppIconConfig['id']) => void;
  size?: 'normal' | 'dock';
}

export const AppIcon: React.FC<AppIconProps> = ({ app, onOpen }) => {
  return (
    <button
      onClick={() => onOpen(app.id)}
      className="group flex flex-col items-center justify-center focus:outline-none transition-transform duration-150 active:scale-90"
      aria-label={`Open ${app.name} app`}
    >
      <div className="relative">
        {/* White Rounded Card matching screenshot */}
        <div
          className="w-12 h-12 rounded-[14px] bg-white text-slate-900 flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg"
          style={{
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
          }}
        >
          <AppIconRenderer name={app.icon} className="w-5 h-5 drop-shadow-xs" />
        </div>

        {/* Badge */}
        {app.badge && (
          <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-rose-500 text-white font-mono text-[9px] font-bold border border-white shadow-sm">
            {app.badge}
          </span>
        )}
      </div>

      <span className="text-[10px] font-medium text-white/90 group-hover:text-white mt-1.5 truncate max-w-[60px] text-center tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
        {app.name}
      </span>
    </button>
  );
};
