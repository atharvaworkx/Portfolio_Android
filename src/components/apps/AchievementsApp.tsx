import React, { useState } from 'react';
import { portfolioConfig } from '../../config/portfolio';
import { Trophy, Award, ExternalLink, Calendar, FileText, Download, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AchievementsApp: React.FC = () => {
  const { achievements } = portfolioConfig;
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; url: string } | null>(null);

  return (
    <div className="space-y-3.5 pb-6 select-text text-left relative">
      {/* Banner */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-slate-800">
        <div className="flex items-center gap-2 mb-1">
          <Trophy className="w-4 h-4 text-amber-600" />
          <h2 className="text-xs font-bold tracking-wide uppercase font-mono text-slate-800">
            Honors & Certifications
          </h2>
        </div>
        <p className="text-[11px] text-slate-600 leading-relaxed">
          Google hackathon victories, Cambridge English certification, Oracle credentials, and verified engineering specializations.
        </p>
      </div>

      {/* List */}
      <div className="space-y-3">
        {achievements.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06, duration: 0.25 }}
            className="p-4 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-md hover:border-amber-200/80 transition-all duration-200 relative overflow-hidden"
          >
            {/* Top Amber Accent Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400" />

            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 font-medium">
                {item.category}
              </span>
              <span className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                <Calendar className="w-3 h-3" />
                {item.date}
              </span>
            </div>

            <h3 className="text-sm font-bold text-slate-900 mb-0.5 flex items-start gap-2">
              <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{item.title}</span>
            </h3>

            <p className="text-[11px] text-amber-600 font-semibold mb-2">
              {item.issuer}
            </p>

            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              {item.description}
            </p>

            {/* Action Buttons: Certificate PDF View & Download */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              {item.certificatePdf && (
                <>
                  <button
                    onClick={() =>
                      setSelectedPdf({ title: item.title, url: item.certificatePdf! })
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold transition-colors active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-600" />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={item.certificatePdf}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-500" />
                    <span>Download PDF</span>
                  </a>
                </>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors active:scale-95"
                >
                  <span>Project & Code</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* In-app Certificate Viewer Overlay */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-2xl z-30 p-2 flex flex-col border border-slate-200 shadow-xl"
          >
            <div className="flex items-center justify-between p-2 border-b border-slate-100">
              <div className="flex items-center gap-2 min-w-0">
                <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-bold text-slate-900 truncate">
                  {selectedPdf.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedPdf(null)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 active:scale-90"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200 mt-2">
              <iframe
                src={`${selectedPdf.url}#toolbar=0&navpanes=0`}
                title={selectedPdf.title}
                className="w-full h-full border-none"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <a
                href={selectedPdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Fullscreen</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
