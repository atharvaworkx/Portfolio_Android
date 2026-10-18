import React from 'react';
import { portfolioConfig } from '../../config/portfolio';
import { ExternalLink, Star, GitFork, GitCommit, GitPullRequest, AlertCircle } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export const GitHubApp: React.FC = () => {
  const { social, developer } = portfolioConfig;

  // Mock repositories
  const repos = [
    {
      name: 'chronos-os-web',
      desc: 'Browser-based desktop OS with virtual filesystem and shell.',
      lang: 'TypeScript',
      langColor: '#3178c6',
      stars: '1.2k',
      forks: '184',
    },
    {
      name: 'hyperpulse-telemetry',
      desc: 'Real-time observability stream processing engine in Go.',
      lang: 'Go',
      langColor: '#00add8',
      stars: '640',
      forks: '89',
    },
    {
      name: 'voxelforge-engine',
      desc: 'WebGL 3D voxel terrain sandbox with multithreaded chunk streaming.',
      lang: 'TypeScript',
      langColor: '#3178c6',
      stars: '420',
      forks: '52',
    },
  ];

  // Mock 5x16 activity grid
  const commitGrid = Array.from({ length: 5 * 14 }, (_, i) => {
    const val = (Math.sin(i * 1.5) + Math.cos(i * 0.9) + 2) / 4;
    return val > 0.75 ? 3 : val > 0.45 ? 2 : val > 0.2 ? 1 : 0;
  });

  return (
    <div className="space-y-4 pb-8">
      {/* Profile Header */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/15 flex items-center justify-center text-white">
            <GithubIcon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white">GitHub Profile</h2>
            <p className="text-xs text-slate-400 font-mono">
              @{developer.name.toLowerCase().replace(/\s+/g, '')}
            </p>
          </div>
        </div>

        {social.github ? (
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-colors"
            title="Open GitHub Profile"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : null}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-2">
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
          <GitCommit className="w-4 h-4 mx-auto text-purple-400 mb-1" />
          <span className="text-xs font-bold text-white block">1,420+</span>
          <span className="text-[9px] text-slate-400 font-mono">COMMITS</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
          <GitPullRequest className="w-4 h-4 mx-auto text-emerald-400 mb-1" />
          <span className="text-xs font-bold text-white block">88</span>
          <span className="text-[9px] text-slate-400 font-mono">PRS MERGED</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
          <Star className="w-4 h-4 mx-auto text-amber-400 mb-1" />
          <span className="text-xs font-bold text-white block">2.3k</span>
          <span className="text-[9px] text-slate-400 font-mono">STARS</span>
        </div>
      </div>

      {/* Contribution Grid Preview */}
      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-white">Contributions Showcase</span>
          <span className="text-[10px] font-mono text-emerald-400">2026 Grid</span>
        </div>
        <div className="grid grid-rows-5 grid-flow-col gap-1 w-full overflow-hidden py-1">
          {commitGrid.map((level, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-[2px] ${
                level === 3
                  ? 'bg-emerald-400'
                  : level === 2
                  ? 'bg-emerald-600'
                  : level === 1
                  ? 'bg-emerald-900/60'
                  : 'bg-white/5'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 pt-1">
          <AlertCircle className="w-3 h-3 text-purple-400" />
          <span>Simulated activity showcase until linked</span>
        </div>
      </div>

      {/* Repositories */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-300 px-1">
          Featured Repositories
        </span>
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-purple-300 font-mono">
                {repo.name}
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                Public
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-2">
              {repo.desc}
            </p>
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: repo.langColor }}
                />
                {repo.lang}
              </span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {repo.forks}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
