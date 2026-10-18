import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import { ExternalLink, MapPin, Building, Users } from 'lucide-react';
import { LinkedinIcon } from '../common/BrandIcons';

export const LinkedInApp: React.FC = () => {
  const { developer, social } = portfolioConfig;

  return (
    <div className="space-y-4 pb-8">
      {/* Header Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 via-sky-900/30 to-[#121424] border border-blue-500/20 text-center relative overflow-hidden">
        <div className="relative mx-auto w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-blue-400 to-sky-300 mb-2 mt-2 shadow-lg">
          <div className="w-full h-full rounded-full bg-[#101426] flex items-center justify-center font-bold text-lg text-sky-200">
            {developer.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white border-2 border-[#101426]">
            <LinkedinIcon className="w-2.5 h-2.5" />
          </div>
        </div>

        <h2 className="text-base font-bold text-white">{developer.name}</h2>
        <p className="text-xs text-sky-300 font-medium mt-0.5">{developer.title}</p>

        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-300 mt-2">
          <span className="flex items-center gap-1">
            <Building className="w-3 h-3 text-sky-400" />
            <span>Staff / Senior Engineer</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-sky-400" />
            <span>{developer.location.split(' ')[0]}</span>
          </span>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-2">
          <Users className="w-3.5 h-3.5 text-blue-400" />
          <span>500+ connections</span>
        </div>
      </div>

      {/* About snippet */}
      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
        <span className="text-xs font-semibold text-white">Summary</span>
        <p className="text-xs text-slate-300 leading-relaxed">
          {developer.bio}
        </p>
      </div>

      {/* Call to action */}
      {social.linkedin ? (
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-blue-900/30 active:scale-95"
        >
          <LinkedinIcon className="w-4 h-4" />
          <span>Connect on LinkedIn</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      ) : (
        <div className="p-3 rounded-xl bg-white/5 text-center text-xs text-slate-400">
          LinkedIn link not configured
        </div>
      )}
    </div>
  );
};
