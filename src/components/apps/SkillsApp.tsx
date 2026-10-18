import React, { useState } from 'react';
import { portfolioConfig } from '../../config/portfolio';
import { Cpu, Search } from 'lucide-react';

export const SkillsApp: React.FC = () => {
  const { skills } = portfolioConfig;
  const [filter, setFilter] = useState('');

  return (
    <div className="space-y-3.5 pb-6 select-text text-left">
      {/* Header banner */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-800">
        <div className="flex items-center gap-2 mb-1">
          <Cpu className="w-4 h-4 text-blue-600" />
          <h2 className="text-xs font-bold tracking-wide uppercase font-mono text-slate-800">
            Technical Stack
          </h2>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          Production technologies across backend microservices, async data pipelines, and mobile architectures.
        </p>
      </div>

      {/* Filter input */}
      <div className="relative">
        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Filter skills..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full bg-white border border-slate-200/80 rounded-2xl py-2 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm"
        />
      </div>

      {/* Categorized Skills */}
      <div className="space-y-3">
        {skills.map((category) => {
          const matchingSkills = category.skills.filter((s) =>
            s.name.toLowerCase().includes(filter.toLowerCase())
          );

          if (matchingSkills.length === 0) return null;

          return (
            <div
              key={category.title}
              className="p-4 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-2.5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-800">
                  {category.title}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {matchingSkills.length} items
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {matchingSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-700 text-[11px] font-mono font-medium hover:border-slate-300 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
