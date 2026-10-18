import React, { useState } from 'react';
import { portfolioConfig } from '../../config/portfolio';
import { Copy, Check, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export const ContactApp: React.FC = () => {
  const { social } = portfolioConfig;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (social.email) {
      navigator.clipboard.writeText(social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4 pb-6 select-text text-left">
      {/* Header */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-800">
        <div className="flex items-center gap-2 mb-1">
          <MessageSquare className="w-4 h-4 text-purple-600" />
          <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-800">
            Get In Touch
          </h2>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          Have an engineering opportunity or architectural challenge? Let's connect directly.
        </p>
      </div>

      {/* Primary Email Card */}
      <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800">
            Direct Email
          </span>
          <span className="text-[10px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            Active
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-800 select-all truncate max-w-[210px] font-medium">
            {social.email}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-white hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-xs"
            title="Copy email address"
            aria-label="Copy email"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        <a
          href={`mailto:${social.email}?subject=Collaboration%20Inquiry%20-%20Atharva%20Warankar`}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Send Direct Message</span>
        </a>
      </div>

      {/* Social Links */}
      <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-2.5">
        <span className="text-xs font-bold text-slate-800 block">
          Professional Profiles
        </span>
        <div className="grid grid-cols-2 gap-2">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/80 hover:border-blue-200 text-slate-700 hover:text-blue-600 text-xs font-semibold transition-all group"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-600" />
              <span>LinkedIn</span>
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-all group"
            >
              <GithubIcon className="w-4 h-4 text-slate-900" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
