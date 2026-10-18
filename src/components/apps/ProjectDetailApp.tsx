import React from 'react';
import type { ProjectItem } from '../../types';
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

interface ProjectDetailAppProps {
  project: ProjectItem;
  onBack: () => void;
}

export const ProjectDetailApp: React.FC<ProjectDetailAppProps> = ({ project, onBack }) => {
  return (
    <div className="space-y-4 pb-6 select-text text-left">
      {/* Back button to projects list */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Projects</span>
      </button>

      {/* Hero Header Card */}
      <div
        className="p-4 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden"
        style={{
          background: `radial-gradient(circle at 10% 20%, ${project.accentColor}15 0%, #f8fafc 100%)`,
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white text-slate-800 border border-slate-200">
            {project.category}
          </span>
          <div
            className="w-3 h-3 rounded-full shadow-sm"
            style={{ backgroundColor: project.accentColor }}
          />
        </div>

        <h2 className="text-lg font-bold text-slate-900 mb-1">
          {project.title}
        </h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Stats if available */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-200/60">
            {project.stats.map((s) => (
              <div key={s.label} className="p-2.5 rounded-xl bg-white/80 border border-slate-100 text-left">
                <span className="text-[10px] font-mono text-slate-400">{s.label}</span>
                <p className="text-xs font-bold text-slate-800 mt-0.5">{s.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Links & Actions */}
      <div className="grid grid-cols-2 gap-2">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all active:scale-95 shadow-sm"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>
        ) : (
          <div className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 text-slate-400 text-xs font-medium cursor-not-allowed">
            <span>Demo Private</span>
          </div>
        )}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-semibold transition-all active:scale-95"
          >
            <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
            <span>GitHub Repository</span>
          </a>
        ) : (
          <div className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 text-slate-400 text-xs font-medium cursor-not-allowed">
            <span>Repo Private</span>
          </div>
        )}
      </div>

      {/* Project Overview */}
      <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>System Architecture & Overview</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          {project.overview}
        </p>
      </div>

      {/* Key Architectural Features */}
      {project.keyFeatures && (
        <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-2.5">
          <span className="text-xs font-semibold text-slate-900 block">
            Engineering Highlights
          </span>
          <div className="space-y-1.5">
            {project.keyFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Full Tech Stack */}
      <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-2">
        <span className="text-xs font-semibold text-slate-900 block">
          Technologies & Libraries
        </span>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-[11px] font-mono text-slate-700 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
