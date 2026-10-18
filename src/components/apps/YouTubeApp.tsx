import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import { ExternalLink, Play, Video } from 'lucide-react';
import { YoutubeIcon } from '../common/BrandIcons';

export const YouTubeApp: React.FC = () => {
  const { social, developer } = portfolioConfig;

  const mockVideos = [
    {
      title: 'Architecting Web Operating Systems with React 19',
      duration: '24:15',
      views: '12.4k views',
    },
    {
      title: 'Zero to Sub-10ms Latency: Telemetry Streaming in Go',
      duration: '18:40',
      views: '8.1k views',
    },
    {
      title: 'Framer Motion & WebGL Micro-interactions Masterclass',
      duration: '31:02',
      views: '15.9k views',
    },
  ];

  return (
    <div className="space-y-4 pb-8">
      {/* Channel Header */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-950/40 via-red-950/30 to-[#121424] border border-rose-500/20 text-center relative overflow-hidden">
        <div className="w-14 h-14 mx-auto rounded-full bg-red-600 flex items-center justify-center text-white mb-2 shadow-lg shadow-red-900/40">
          <YoutubeIcon className="w-7 h-7" />
        </div>
        <h2 className="text-base font-bold text-white">
          {developer.name} Tech
        </h2>
        <p className="text-xs text-rose-300 font-medium">
          Deep dives into software architecture & frontend magic
        </p>
        <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
          Engineering Tutorials & Talks
        </span>
      </div>

      {/* Profile Action */}
      {social.youtube ? (
        <a
          href={social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95"
        >
          <YoutubeIcon className="w-4 h-4" />
          <span>Open YouTube Channel</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      ) : (
        <div className="p-3 rounded-xl bg-white/5 text-center text-xs text-slate-400">
          YouTube link not configured
        </div>
      )}

      {/* Featured Video Topics */}
      <div className="space-y-2.5">
        <span className="text-xs font-semibold text-slate-300 px-1 flex items-center gap-1.5">
          <Video className="w-3.5 h-3.5 text-rose-400" />
          Featured Episodes
        </span>

        {mockVideos.map((video, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:border-white/20 transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <h3 className="text-xs font-bold text-white line-clamp-1">
                {video.title}
              </h3>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono mt-0.5">
                <span>{video.duration}</span>
                <span>•</span>
                <span>{video.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
