import React, { useState } from 'react';
import { portfolioConfig } from '../../config/portfolio';
import { FileText, Download, Eye, ShieldCheck } from 'lucide-react';

export const ResumeApp: React.FC = () => {
  const { resume, developer, experience } = portfolioConfig;
  const [activeTab, setActiveTab] = useState<'preview' | 'viewer'>('preview');

  return (
    <div className="space-y-4 pb-6 select-text text-left">
      {/* Resume Card Header */}
      <div className="p-4 rounded-3xl bg-slate-50 border border-slate-100/90 text-slate-800">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-800">
                Curriculum Vitae
              </h2>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200 font-semibold">
            {resume.lastUpdated}
          </span>
        </div>
        <p className="text-sm font-bold text-slate-900">
          {resume.filename}
        </p>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Standardized professional engineering resume for ATS & hiring managers.
        </p>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-2">
        <a
          href={resume.path}
          download={resume.filename}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold shadow-sm active:scale-95 transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download PDF</span>
        </a>
        <a
          href={resume.path}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-semibold active:scale-95 transition-all"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Open Fullscreen</span>
        </a>
      </div>

      {/* Tab toggle */}
      <div className="flex rounded-2xl bg-slate-100 p-1 text-xs">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 py-1.5 rounded-xl font-medium transition-all ${
            activeTab === 'preview'
              ? 'bg-white text-slate-900 shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Executive Summary
        </button>
        <button
          onClick={() => setActiveTab('viewer')}
          className={`flex-1 py-1.5 rounded-xl font-medium transition-all ${
            activeTab === 'viewer'
              ? 'bg-white text-slate-900 shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          PDF Document
        </button>
      </div>

      {activeTab === 'preview' ? (
        <div className="space-y-3">
          {/* Executive Overview */}
          <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-2">
            <span className="text-xs font-semibold text-slate-900 block">
              Candidate Profile
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900">{developer.name}</strong> — {developer.title} based in {developer.location}. {developer.yearsOfExperience} delivering production systems, distributed pipelines, and intelligent mobile architectures.
            </p>
          </div>

          {/* Experience Highlights */}
          <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-2.5">
            <span className="text-xs font-semibold text-slate-900 block">
              Experience Summary
            </span>
            <div className="space-y-2">
              {experience.map((exp) => (
                <div key={exp.id} className="text-xs border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between font-bold text-slate-800">
                    <span>{exp.role}</span>
                    <span className="text-[10px] font-mono text-slate-400 font-normal">{exp.period}</span>
                  </div>
                  <div className="text-[11px] text-emerald-600 font-medium">
                    {exp.company} • {exp.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ATS Verification Note */}
          <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-2.5 text-xs text-emerald-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="leading-snug">
              Parsed from <strong>{resume.filename}</strong>. Clean single-column format optimized for ATS compliance.
            </span>
          </div>
        </div>
      ) : (
        /* PDF Viewer Embed */
        <div className="p-2 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-2">
          <div className="w-full h-80 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
            <iframe
              src={`${resume.path}#toolbar=0&navpanes=0`}
              title="Resume PDF"
              className="w-full h-full border-none"
            />
          </div>
          <p className="text-[10px] text-center text-slate-400 font-mono">
            Directly viewing {resume.filename}
          </p>
        </div>
      )}
    </div>
  );
};
