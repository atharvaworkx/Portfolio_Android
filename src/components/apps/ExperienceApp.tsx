import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ExperienceApp: React.FC = () => {
  const { experience } = portfolioConfig;

  return (
    <div className="space-y-4 pb-6 select-text">
      {/* Intro Subtitle Card */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/90 text-left">
        <div className="flex items-center gap-2 mb-1">
          <Briefcase className="w-4 h-4 text-emerald-600" />
          <h2 className="text-xs font-bold tracking-wide uppercase font-mono text-slate-800">
            Professional Engineering
          </h2>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          Production systems engineering, distributed pipelines, and enterprise software architecture.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-3.5 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-slate-100">
        {experience.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.25 }}
            className="relative pl-8 text-left space-y-2 group"
          >
            {/* Timeline node */}
            <div className="absolute left-2 top-2.5 w-3.5 h-3.5 -translate-x-1/2 rounded-full bg-emerald-100 border-2 border-emerald-500 group-hover:bg-emerald-500 transition-colors shadow-sm" />

            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-200">
              <div className="flex flex-col gap-0.5 mb-1.5">
                <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.role}
                </span>
                <span className="text-xs font-semibold text-emerald-600">
                  {item.company}
                </span>
              </div>

              {/* Meta tags */}
              <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500 font-mono mb-2.5">
                <span className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {item.period}
                </span>
                <span className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {item.location}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {item.description}
              </p>

              {/* Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="space-y-1.5 mb-3 pt-2.5 border-t border-slate-100">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-600 leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1 pt-1 border-t border-slate-50">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-[10px] font-mono text-slate-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
