import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../common/BrandIcons';
import { Mail } from 'lucide-react';

export const ConnectPanel: React.FC = () => {
  const { social } = portfolioConfig;

  return (
    <div className="tilt-left glass-panel-ss rounded-3xl p-5 text-left relative overflow-hidden backdrop-blur-2xl border border-white/20 select-none">
      <div className="flex items-center justify-between">
        {/* Mascot Bird SVG */}
        <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-md">
            {/* Cute 3D Mascot Bird Body */}
            <circle cx="50" cy="52" r="32" fill="#38bdf8" />
            <circle cx="50" cy="50" r="30" fill="url(#bird-grad)" />
            {/* Belly highlight */}
            <ellipse cx="50" cy="58" rx="20" ry="18" fill="#e0f2fe" opacity="0.9" />
            {/* Wings */}
            <ellipse cx="23" cy="54" rx="7" ry="14" fill="#0284c7" transform="rotate(15 23 54)" />
            <ellipse cx="77" cy="54" rx="7" ry="14" fill="#0284c7" transform="rotate(-15 77 54)" />
            {/* Large Cute Eyes */}
            <circle cx="41" cy="42" r="8" fill="#ffffff" />
            <circle cx="59" cy="42" r="8" fill="#ffffff" />
            <circle cx="42" cy="42" r="4.5" fill="#0f172a" />
            <circle cx="58" cy="42" r="4.5" fill="#0f172a" />
            <circle cx="44" cy="40" r="1.8" fill="#ffffff" />
            <circle cx="60" cy="40" r="1.8" fill="#ffffff" />
            {/* Cute Beak */}
            <polygon points="46,47 54,47 50,56" fill="#f59e0b" />
            {/* Feet */}
            <ellipse cx="44" cy="81" rx="5" ry="3" fill="#d97706" />
            <ellipse cx="56" cy="81" rx="5" ry="3" fill="#d97706" />
            <defs>
              <linearGradient id="bird-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Right side: // say_hi, Let's connect, and icon buttons */}
        <div className="flex-1 pl-4">
          <div className="font-mono text-xs text-sky-200/80 mb-0.5">
            // say_hi
          </div>
          <h2 className="text-lg font-bold text-white mb-2.5">
            Let's connect
          </h2>

          {/* Social Icons row matching screenshot */}
          <div className="flex items-center gap-2">
            {/* LinkedIn */}
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/90 hover:bg-white text-[#0077b5] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 fill-current" />
            </a>

            {/* GitHub */}
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>

            {/* X / Twitter */}
            <a
              href={social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/90 hover:bg-white text-black flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
              title="X (Twitter)"
              aria-label="X"
            >
              <TwitterIcon className="w-3.5 h-3.5 fill-current" />
            </a>

            {/* Gmail */}
            <a
              href={`mailto:${social.email}`}
              className="w-8 h-8 rounded-lg bg-white/90 hover:bg-white text-[#ea4335] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
