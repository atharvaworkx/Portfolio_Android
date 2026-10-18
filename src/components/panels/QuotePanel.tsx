import React from 'react';
import { portfolioConfig } from '../../config/portfolio';

export const QuotePanel: React.FC = () => {
  const { quote } = portfolioConfig;

  return (
    <div className="tilt-right glass-panel-ss rounded-3xl p-6 text-left relative overflow-hidden backdrop-blur-2xl border border-white/20 select-none">
      {/* Decorative Quote Mark */}
      <div className="text-3xl text-sky-200/60 font-serif leading-none mb-2 select-none">
        “
      </div>

      {/* Quote text exactly matching screenshot */}
      <p className="text-sm text-slate-100 font-normal leading-relaxed mb-4">
        {quote.text}
      </p>

      {/* Author attribution */}
      <div className="text-right">
        <span className="text-xs font-mono text-slate-400">
          — {quote.author}
        </span>
      </div>
    </div>
  );
};
