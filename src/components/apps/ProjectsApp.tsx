import React, { useState } from 'react';
import { portfolioConfig } from '../../config/portfolio';
import type { ProjectItem } from '../../types';
import { ProjectDetailApp } from './ProjectDetailApp';
import { ArrowRight, Layers, ExternalLink } from 'lucide-react';

export const ProjectsApp: React.FC = () => {
  const { projects } = portfolioConfig;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  if (selectedProject) {
    return (
      <ProjectDetailApp
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  const categories = ['All', 'Mobile & AI', 'Developer Tools', 'Full Stack', 'Cloud & Systems'];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <div className="space-y-3.5 pb-6 select-text">
      {/* Category Tabs */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
              activeCategory === cat
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="p-4 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-md hover:border-slate-200 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.99]"
          >
            {/* Top Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: project.accentColor }}
            />

            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-700 border border-slate-200/80">
                {project.category}
              </span>
              <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                <span>View System</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1 text-left">
              {project.title}
            </h3>

            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3 text-left">
              {project.shortDescription}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1 mb-2.5">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/60 text-[10px] font-mono text-slate-600 font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-1.5 py-0.5 rounded-md bg-slate-50 border border-slate-200/60 text-[10px] font-mono text-slate-400">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                {project.keyFeatures.length} Key Architecture Modules
              </span>
              {project.githubUrl && (
                <span className="flex items-center gap-1 text-slate-400 hover:text-slate-700">
                  <ExternalLink className="w-3 h-3" />
                  GitHub
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
