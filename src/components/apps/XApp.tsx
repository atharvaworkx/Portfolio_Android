import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import { ExternalLink, Heart, Repeat, MessageCircle } from 'lucide-react';
import { TwitterIcon } from '../common/BrandIcons';

export const XApp: React.FC = () => {
  const { social, developer } = portfolioConfig;

  const mockPosts = [
    {
      time: '2h',
      content:
        'The best interfaces don’t just present information—they create a sense of place. Spatial metaphors and fluid response times turn websites into memorable tools.',
      likes: '142',
      reposts: '28',
      replies: '14',
    },
    {
      time: '1d',
      content:
        'Shipped an update to Chronos OS Web today: 60fps window management, zero external dependencies for the window tiling engine. Clean TypeScript wins again.',
      likes: '318',
      reposts: '56',
      replies: '39',
    },
  ];

  return (
    <div className="space-y-4 pb-8">
      {/* Header */}
      <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-white">
            <TwitterIcon className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white">{developer.name}</h2>
            <p className="text-xs text-slate-400 font-mono">
              @{developer.name.toLowerCase().replace(/\s+/g, '')}
            </p>
          </div>
        </div>

        {social.x ? (
          <a
            href={social.x}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Open X Profile"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : null}
      </div>

      {/* Profile Bio */}
      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
        <p className="text-xs text-slate-300 leading-relaxed">
          {developer.tagline}
        </p>
      </div>

      {/* Feed */}
      <div className="space-y-2.5">
        <span className="text-xs font-semibold text-slate-300 px-1">
          Recent Posts
        </span>

        {mockPosts.map((post, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-left"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white">{developer.name}</span>
              <span className="text-[10px] text-slate-400 font-mono">{post.time}</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {post.content}
            </p>
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
              <span className="flex items-center gap-1 hover:text-white cursor-pointer">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{post.replies}</span>
              </span>
              <span className="flex items-center gap-1 hover:text-emerald-400 cursor-pointer">
                <Repeat className="w-3.5 h-3.5" />
                <span>{post.reposts}</span>
              </span>
              <span className="flex items-center gap-1 hover:text-rose-400 cursor-pointer">
                <Heart className="w-3.5 h-3.5" />
                <span>{post.likes}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
