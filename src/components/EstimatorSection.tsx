import React from 'react';
import { Send } from 'lucide-react';
import { EstimatorState } from '../types';

interface EstimatorSectionProps {
  estimatorState: EstimatorState;
  onUpdateEstimator: (
    domain: 'sec' | 'doc' | 'dev' | 'ops',
    privacy: 'cloud' | 'hybrid' | 'strict',
    volume: '100' | '500' | '1000'
  ) => void;
  onBookSession: () => void;
}

export const EstimatorSection: React.FC<EstimatorSectionProps> = ({
  estimatorState,
  onUpdateEstimator,
  onBookSession,
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-semibold">
          DIAGNOSTIC & RECOMMANDATION
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
          Calculateur de Potentiel Agentique
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
          Sélectionnez vos critères métiers pour obtenir une recommandation d'architecture et une estimation de gain opérationnel.
        </p>
      </div>

      {/* Input Options Card */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 shadow-xl">
        {/* Q1 Domain */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">
            1. Domaine d'application principal
          </label>
          <div className="space-y-1.5">
            {[
              { key: 'sec', label: 'Sécurité & Cyber' },
              { key: 'doc', label: 'RAG & Knowledge' },
              { key: 'dev', label: 'Développement' },
              { key: 'ops', label: 'Support & Ops' },
            ].map((item) => {
              const isSelected = estimatorState.domain === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() =>
                    onUpdateEstimator(
                      item.key as 'sec' | 'doc' | 'dev' | 'ops',
                      estimatorState.privacy,
                      estimatorState.volume
                    )
                  }
                  className={`w-full text-left px-3.5 py-2 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-950/60 border-cyan-500 text-white font-bold'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Q2 Privacy */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">
            2. Exigence de Confidentialité
          </label>
          <div className="space-y-1.5">
            {[
              { key: 'cloud', label: 'Cloud Standard' },
              { key: 'hybrid', label: 'Hybride (Données Sensi. Local)' },
              { key: 'strict', label: '100% On-Premise (Air-Gapped)' },
            ].map((item) => {
              const isSelected = estimatorState.privacy === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() =>
                    onUpdateEstimator(
                      estimatorState.domain,
                      item.key as 'cloud' | 'hybrid' | 'strict',
                      estimatorState.volume
                    )
                  }
                  className={`w-full text-left px-3.5 py-2 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-950/60 border-cyan-500 text-white font-bold'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Q3 Volume */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">
            3. Volume Hebdomadaire
          </label>
          <div className="space-y-1.5">
            {[
              { key: '100', label: '< 100h/homme' },
              { key: '500', label: '100 - 500h' },
              { key: '1000', label: '> 500h (Échelle Industrial)' },
            ].map((item) => {
              const isSelected = estimatorState.volume === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() =>
                    onUpdateEstimator(
                      estimatorState.domain,
                      estimatorState.privacy,
                      item.key as '100' | '500' | '1000'
                    )
                  }
                  className={`w-full text-left px-3.5 py-2 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-950/60 border-cyan-500 text-white font-bold'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Calculated Result Card */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-cyan-500/40 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="font-mono text-[10px] text-cyan-400 uppercase font-semibold">
              RECOMMANDATION D'ARCHITECTURE
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {estimatorState.title}
            </h3>
          </div>

          <div className="sm:text-right">
            <span className="text-[10px] text-slate-400 block">Gain Estimé</span>
            <span className="font-mono text-xl font-extrabold text-emerald-400">
              {estimatorState.estimatedGain}
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {estimatorState.description}
        </p>

        <button
          onClick={onBookSession}
          className="w-full py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-700/25 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Réserver une Session d'Architecture</span>
        </button>
      </div>
    </div>
  );
};
