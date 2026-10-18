import React, { useState } from 'react';
import { portfolioConfig } from '../../config/portfolio';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const EducationApp: React.FC = () => {
  const { education } = portfolioConfig;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Color theme map for each academic card matching user's screenshot
  const cardThemes = [
    {
      barColor: 'bg-[#f43f5e] shadow-[0_0_12px_rgba(244,63,94,0.6)]',
      subColor: 'text-[#f43f5e]',
      tagBg: 'bg-[#fff1f2] text-[#f43f5e]',
      borderHover: 'hover:border-rose-200',
    },
    {
      barColor: 'bg-[#0ea5e9] shadow-[0_0_12px_rgba(14,165,233,0.6)]',
      subColor: 'text-[#0284c7]',
      tagBg: 'bg-[#f0f9ff] text-[#0284c7]',
      borderHover: 'hover:border-sky-200',
    },
    {
      barColor: 'bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.6)]',
      subColor: 'text-[#0284c7]',
      tagBg: 'bg-[#f0f9ff] text-[#0284c7]',
      borderHover: 'hover:border-sky-200',
    },
    {
      barColor: 'bg-[#a855f7] shadow-[0_0_12px_rgba(168,85,247,0.6)]',
      subColor: 'text-[#9333ea]',
      tagBg: 'bg-[#faf5ff] text-[#9333ea]',
      borderHover: 'hover:border-purple-200',
    },
  ];

  return (
    <div className="space-y-3.5 pb-2 min-h-[500px] flex flex-col justify-between select-text">
      {/* Education Cards Stack */}
      <div className="space-y-3">
        {education.map((item, idx) => {
          const theme = cardThemes[idx % cardThemes.length];
          const isExpanded = expandedId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              onClick={() => toggleExpand(item.id)}
              className={`p-4 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-200 ${theme.borderHover} hover:shadow-md relative overflow-hidden`}
            >
              <div className="flex items-start gap-3.5">
                {/* Colored Glowing Vertical Indicator Bar */}
                <div
                  className={`w-1.5 h-11 rounded-full shrink-0 ${theme.barColor} mt-0.5 transition-transform duration-200`}
                />

                {/* Card Title & Content */}
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-start justify-between gap-1">
                    <h3 className="text-[14px] font-bold text-slate-800 leading-snug tracking-tight">
                      {item.degree}
                    </h3>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-slate-600' : ''
                      }`}
                    />
                  </div>

                  <p className={`text-xs font-semibold mt-1 tracking-tight truncate ${theme.subColor}`}>
                    {item.institution}
                  </p>

                  {/* Pills Row matching Screenshot */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1 shrink-0 ${theme.tagBg}`}>
                      <Calendar className="w-3 h-3 shrink-0" />
                      <span>{item.period}</span>
                    </span>

                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1 shrink-0 ${theme.tagBg}`}>
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>{item.id.includes('hsc') || item.id.includes('ssc') ? 'Amravati' : 'Pune'}</span>
                    </span>

                    {item.university && (
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold shrink-0 ${theme.tagBg}`}>
                        {item.university.includes('SPPU') ? 'SPPU Pune' : 'S.G.B.A.U Amravati'}
                      </span>
                    )}

                    {item.score && (
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold shrink-0 ${theme.tagBg}`}>
                        {item.score}
                      </span>
                    )}
                  </div>

                  {/* Expandable Extra Details */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-3 mt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5"
                    >
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span>Academic Status:</span>
                        <span className="font-semibold text-slate-800">{item.status || 'Verified'}</span>
                      </div>
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span>Board / University:</span>
                        <span className="font-semibold text-slate-800">{item.university || 'SPPU'}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Book Dropping Animation at Bottom matching Reference Screenshot */}
      <div className="pt-4 pb-1 flex flex-col items-center justify-end select-none pointer-events-none">
        <svg
          viewBox="0 0 260 140"
          className="w-56 h-auto drop-shadow-sm overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base shadow */}
          <ellipse cx="130" cy="132" rx="100" ry="6" fill="#cbd5e1" opacity="0.4" />

          {/* Book 1 (Bottom Thick Book - Navy Blue) */}
          <motion.g
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 18,
              delay: 0.15,
            }}
          >
            {/* Pages block */}
            <path d="M40 108 L220 108 L220 126 L40 126 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="42" y1="114" x2="218" y2="114" stroke="#e2e8f0" strokeWidth="0.8" />
            <line x1="42" y1="120" x2="218" y2="120" stroke="#e2e8f0" strokeWidth="0.8" />
            {/* Spine cover */}
            <rect x="36" y="104" width="188" height="24" rx="4" fill="#1e3a5f" />
            <rect x="36" y="104" width="22" height="24" rx="4" fill="#0f2744" />
            <line x1="48" y1="108" x2="48" y2="124" stroke="#e2e8f0" strokeWidth="1" opacity="0.3" />
          </motion.g>

          {/* Book 2 (Middle Dark Slate Green Book) */}
          <motion.g
            initial={{ y: -130, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 290,
              damping: 16,
              delay: 0.28,
            }}
          >
            {/* Pages block */}
            <path d="M48 88 L212 88 L212 104 L48 104 Z" fill="#fffbeb" stroke="#fef3c7" strokeWidth="1" />
            {/* Spine cover */}
            <rect x="44" y="86" width="172" height="18" rx="3.5" fill="#1e40af" />
            <rect x="44" y="86" width="20" height="18" rx="3.5" fill="#1e3a8a" />
            {/* Ribbon bookmark hanging down */}
            <path d="M110 88 L110 114 L118 108 L126 114 L126 88 Z" fill="#38bdf8" />
          </motion.g>

          {/* Book 3 (Middle Teal / Slate Book) */}
          <motion.g
            initial={{ y: -140, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 15,
              delay: 0.42,
            }}
          >
            {/* Spine */}
            <rect x="52" y="68" width="156" height="18" rx="3" fill="#2d525f" />
            <rect x="52" y="68" width="18" height="18" rx="3" fill="#1e3942" />
            {/* Page edge */}
            <path d="M72 70 L204 70 L204 84 L72 84 Z" fill="#fefce8" />
            <line x1="74" y1="77" x2="202" y2="77" stroke="#e2e8f0" strokeWidth="0.8" />
          </motion.g>

          {/* Book 4 (Top Blue Book) */}
          <motion.g
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 320,
              damping: 14,
              delay: 0.56,
            }}
          >
            <rect x="58" y="52" width="144" height="16" rx="3" fill="#1d4ed8" />
            <rect x="58" y="52" width="16" height="16" rx="3" fill="#1e40af" />
            {/* Top cover surface */}
            <path d="M58 52 L74 42 L212 42 L198 52 Z" fill="#2563eb" />
          </motion.g>

          {/* Wooden Ladder leaning on the books */}
          <motion.g
            initial={{ y: -120, rotate: -15, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 240,
              damping: 14,
              delay: 0.7,
            }}
          >
            {/* Left rail */}
            <line x1="145" y1="48" x2="162" y2="128" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
            {/* Right rail */}
            <line x1="162" y1="48" x2="179" y2="128" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
            {/* Rungs */}
            <line x1="149" y1="64" x2="166" y2="64" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <line x1="153" y1="80" x2="170" y2="80" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <line x1="157" y1="96" x2="174" y2="96" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <line x1="160" y1="112" x2="177" y2="112" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          </motion.g>
        </svg>
      </div>
    </div>
  );
};
