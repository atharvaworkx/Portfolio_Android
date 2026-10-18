import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../../config/portfolio';

export const DeveloperPanel: React.FC = () => {
  const { developer } = portfolioConfig;

  // Typing animation for "I build ..."
  const skillsToType = ['Python & Django', 'Distributed Pipelines', 'React & Flutter', 'Microservices Architecture'];
  const [currentSkillIdx, setCurrentSkillIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = skillsToType[currentSkillIdx];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentSkillIdx((prev) => (prev + 1) % skillsToType.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentSkillIdx]);

  // LeetCode 6-month activity pattern
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const columnsPerMonth = 4;
  const leetCodeColumns = Array.from({ length: 7 * columnsPerMonth }, (_, colIdx) => {
    return Array.from({ length: 7 }, (__, rowIdx) => {
      const pseudo = (Math.sin(colIdx * 0.8 + rowIdx * 1.2) + Math.cos(colIdx * 1.5)) * 10;
      const mod = Math.abs(Math.floor(pseudo)) % 4;
      return mod;
    });
  });

  return (
    <div className="tilt-left glass-panel-ss rounded-3xl p-6 text-left relative overflow-hidden backdrop-blur-2xl border border-white/20 select-none">
      {/* Monospace Code Comment */}
      <div className="font-mono text-xs text-sky-200/80 mb-2">
        // hello_world
      </div>

      {/* Developer Name with continuous glossy light sweep */}
      <div className="mb-3">
        <h1 className="text-3xl font-extrabold tracking-tight leading-tight font-sans glossy-name-sweep">
          Atharva<br />Warankar
        </h1>
      </div>

      {/* "I build Spring Boot|" with typing animation */}
      <div className="flex items-center gap-1.5 font-mono text-sm text-slate-300 mb-6">
        <span className="text-slate-400">I build</span>
        <span className="text-white font-semibold">{displayText}</span>
        <span className="w-1.5 h-4 bg-white animate-blink" />
      </div>

      {/* LeetCode Activity Matrix */}
      <div className="pt-2 pb-3">
        <div className="font-mono text-xs text-sky-200/80 mb-2.5">
          // leetcode - last 6 months
        </div>

        {/* Dots grid */}
        <div className="flex gap-[3px] overflow-hidden justify-between">
          {leetCodeColumns.map((col, cIdx) => (
            <div key={cIdx} className="flex flex-col gap-[3px]">
              {col.map((intensity, rIdx) => (
                <div
                  key={rIdx}
                  className={`w-2 h-2 rounded-[2px] transition-colors ${
                    intensity === 3
                      ? 'bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.8)]'
                      : intensity === 2
                      ? 'bg-emerald-500/80'
                      : intensity === 1
                      ? 'bg-emerald-800/60'
                      : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Month labels */}
        <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2 px-1">
          {months.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>

      {/* Open to Work Badge */}
      <div className="flex justify-center mt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 font-mono text-xs shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{developer.availability.toLowerCase()}</span>
        </div>
      </div>
    </div>
  );
};
