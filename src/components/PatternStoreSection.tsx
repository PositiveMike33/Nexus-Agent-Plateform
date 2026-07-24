import React, { useState } from 'react';
import { Brain, Copy, Check, X } from 'lucide-react';
import { PatternItem } from '../types';
import { patterns } from '../data/nexusData';

interface PatternStoreSectionProps {
  selectedCategory: string;
  onCategorySelected: (category: string) => void;
  onShowToast: (msg: string) => void;
}

export const PatternStoreSection: React.FC<PatternStoreSectionProps> = ({
  selectedCategory,
  onCategorySelected,
  onShowToast,
}) => {
  const [activePatternModal, setActivePatternModal] = useState<PatternItem | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    { label: 'Tous', key: 'all' },
    { label: 'Analyse', key: 'analysis' },
    { label: 'Sécurité', key: 'security' },
    { label: 'Code', key: 'code' },
    { label: 'Orchestration', key: 'agent' },
  ];

  const filteredPatterns =
    selectedCategory === 'all'
      ? patterns
      : patterns.filter((p) => p.category === selectedCategory);

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    onShowToast('✔ System Prompt copié dans le presse-papier !');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-semibold">
          BIBLIOTHÈQUE DE MICRO-AGENTS
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
          Pattern Store & System Prompts
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
          Catalogue de patterns modulaires optimisés pour accomplir des tâches ciblées de haut niveau.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => onCategorySelected(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-blue-700 text-white shadow-md shadow-blue-700/30 border border-cyan-400/50'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Patterns Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPatterns.map((pattern) => (
          <div
            key={pattern.id}
            onClick={() => setActivePatternModal(pattern)}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-cyan-400 text-[10px] font-mono font-medium">
                  {pattern.categoryName}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {pattern.llm}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400 shrink-0" />
                <h3 className="font-mono text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {pattern.title}
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                {pattern.description}
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-800/60 flex justify-end">
              <span className="font-mono text-xs text-cyan-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Inspecter le Prompt &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {activePatternModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl space-y-4 max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="font-mono text-xs text-cyan-400">
                  {activePatternModal.categoryName}
                </span>
                <h3 className="font-mono text-lg font-bold text-white">
                  {activePatternModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActivePatternModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 overflow-y-auto pr-1 flex-1">
              <p className="text-sm text-slate-300">
                {activePatternModal.description}
              </p>

              <div className="font-mono text-xs text-purple-400">
                Cible LLM : {activePatternModal.llm}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 whitespace-pre-wrap leading-relaxed">
                {activePatternModal.prompt}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-slate-800 pt-3">
              <button
                onClick={() => setActivePatternModal(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Fermer
              </button>
              <button
                onClick={() => handleCopyPrompt(activePatternModal.prompt)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs transition-all shadow-md cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copié !' : 'Copier le Prompt'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
