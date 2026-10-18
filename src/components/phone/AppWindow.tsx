import React from 'react';
import type { AppId } from '../../types';
import { APPS_LIST } from '../../config/apps';
import { X, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface AppWindowProps {
  appId: AppId;
  onBack: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

export const AppWindow: React.FC<AppWindowProps> = ({
  appId,
  onBack,
  onClose,
  children,
}) => {
  const currentApp = APPS_LIST.find((a) => a.id === appId) || {
    name: 'Application',
    icon: 'Sparkles',
    color: 'from-purple-500 to-indigo-600',
  };

  const isDarkApp = appId === 'about';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 15 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute inset-0 flex flex-col z-20 select-text ${
        isDarkApp ? 'bg-[#0b0c11] text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Top Navigation Bar matching Reference Screenshots */}
      <div
        className={`pt-7 pb-2.5 px-4 flex items-center justify-between shrink-0 select-none ${
          isDarkApp
            ? 'bg-[#0b0c11]/90 border-b border-white/5 text-white'
            : 'bg-white/95 border-b border-slate-100/80 text-slate-900'
        }`}
      >
        <div className="flex items-center gap-1.5">
          <button
            onClick={onBack}
            className={`p-1 -ml-1.5 rounded-full transition-colors active:scale-95 ${
              isDarkApp
                ? 'text-zinc-400 hover:text-white hover:bg-white/10'
                : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold tracking-tight">{currentApp.name}</h2>
        </div>

        {/* Circular Close Button (X) matching Screenshot */}
        <button
          onClick={onClose}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-150 active:scale-90 ${
            isDarkApp
              ? 'bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 shadow-sm'
          }`}
          aria-label="Close app"
        >
          <X className="w-4 h-4 stroke-[2.2]" />
        </button>
      </div>

      {/* App Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 text-left scrollbar-thin">
        {children}
      </div>
    </motion.div>
  );
};
