import React, { useState } from 'react';
import { BookOpen, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { StrategicGuide } from '../types';
import { caseStudies, strategicGuides } from '../data/nexusData';

export const ArchitecturesSection: React.FC = () => {
  const [activeGuideModal, setActiveGuideModal] = useState<StrategicGuide | null>(null);

  return (
    <div className="space-y-8">
      {/* Case Studies Header */}
      <div>
        <div className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-semibold">
          ÉTUDES DE CAS & ARCHITECTURES
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
          Systèmes Agentiques en Production
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
          Découvrez comment ces architectures sur-mesure résolvent des défis d'entreprise complexes avec fiabilité.
        </p>
      </div>

      {/* Case Studies Cards */}
      <div className="space-y-4">
        {caseStudies.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3.5 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-cyan-400 font-mono text-[11px]">
                {item.category}
              </span>
              <span className="font-mono text-xs font-bold text-emerald-400">
                {item.roi}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {item.description}
            </p>

            {/* Key Architecture Points */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="font-mono text-xs text-cyan-400 font-semibold">
                Point Clés d'Architecture :
              </div>
              <div className="space-y-1.5">
                {item.architecturePoints.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Guides Section */}
      <div className="pt-4 space-y-4 border-t border-slate-800">
        <div>
          <div className="font-mono text-xs text-purple-400 tracking-wider uppercase font-semibold">
            GUIDES STRATÉGIQUES & MONÉTISATION
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            Blueprints & Documentation Opérationnelle
          </h3>
        </div>

        <div className="space-y-3">
          {strategicGuides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => setActiveGuideModal(guide)}
              className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 transition-all shadow-md cursor-pointer flex items-center justify-between gap-4 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-cyan-400 block">
                    {guide.category}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {guide.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {guide.summary}
                  </p>
                </div>
              </div>

              <div className="font-mono text-xs text-cyan-400 font-bold shrink-0 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Lire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Guide Modal */}
      {activeGuideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl space-y-4 max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="font-mono text-xs text-cyan-400">
                  {activeGuideModal.category}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {activeGuideModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveGuideModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 overflow-y-auto space-y-3 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-h-96">
              <pre className="whitespace-pre-wrap font-sans">
                {activeGuideModal.fullMarkdown}
              </pre>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-800">
              <button
                onClick={() => setActiveGuideModal(null)}
                className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
