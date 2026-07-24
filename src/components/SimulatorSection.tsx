import React, { useRef, useEffect } from 'react';
import { Play, Shield, Inbox, Wrench, Brain, CheckCircle2, Loader2 } from 'lucide-react';
import { SimulatorState, LogType } from '../types';

interface SimulatorSectionProps {
  simulatorState: SimulatorState;
  onScenarioSelected: (scenario: 'sec_audit' | 'code_review' | 'content_rag') => void;
  onModelStrategySelected: (strategy: 'hybrid' | 'cloud' | 'privacy') => void;
  onToggleGuardrails: (enabled: boolean) => void;
  onRunSimulation: () => void;
}

export const SimulatorSection: React.FC<SimulatorSectionProps> = ({
  simulatorState,
  onScenarioSelected,
  onModelStrategySelected,
  onToggleGuardrails,
  onRunSimulation,
}) => {
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [simulatorState.logs]);

  const flowNodes = [
    {
      index: 1,
      title: 'Agent Lead',
      subtitle: 'Parse & Route',
      icon: Inbox,
      color: 'blue',
      activeBorder: 'border-blue-500 bg-blue-500/20 text-blue-400',
    },
    {
      index: 2,
      title: 'System Tools',
      subtitle: 'RAG / Vector DB',
      icon: Wrench,
      color: 'purple',
      activeBorder: 'border-purple-500 bg-purple-500/20 text-purple-400',
    },
    {
      index: 3,
      title: 'Pattern Agent',
      subtitle: 'Inférence LLM',
      icon: Brain,
      color: 'cyan',
      activeBorder: 'border-cyan-500 bg-cyan-500/20 text-cyan-400',
    },
    {
      index: 4,
      title: 'Guard & Output',
      subtitle: 'Validation Schema',
      icon: CheckCircle2,
      color: 'emerald',
      activeBorder: 'border-emerald-500 bg-emerald-500/20 text-emerald-400',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs font-semibold">
          <Play className="w-3 h-3 fill-current" />
          <span>DÉMO INTERACTIVE EN TEMPS RÉEL</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
          Simulateur d'Orchestration Agentique
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-1.5 leading-relaxed">
          Sélectionnez un cas d'usage et observez comment mon architecture orchestre les requêtes, délègue les tâches aux sous-agents et valide les sorties.
        </p>
      </div>

      {/* Configuration Panel Card */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 shadow-xl">
        <h3 className="text-base font-bold text-white">
          Configuration du Workflow
        </h3>

        {/* Scenarios */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">
            Scénario d'Entreprise
          </label>
          <div className="space-y-1.5">
            {[
              { key: 'sec_audit', label: 'Audit Cyber (STRIDE + Report)' },
              { key: 'code_review', label: 'Génération Code Sécurisé' },
              { key: 'content_rag', label: 'RAG & Synthèse Média' },
            ].map((item) => {
              const isSelected = simulatorState.selectedScenario === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() =>
                    onScenarioSelected(item.key as 'sec_audit' | 'code_review' | 'content_rag')
                  }
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-blue-950/60 border-cyan-500 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span>{item.label}</span>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-cyan-400 bg-cyan-400/20' : 'border-slate-700'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-cyan-400" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Model Strategies */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">
            Stratégie de Modèle (Cost/Latency)
          </label>
          <div className="space-y-1.5">
            {[
              { key: 'hybrid', label: 'Hybride (Cloud API + Ollama Local)' },
              { key: 'cloud', label: 'High-Reasoning (Claude 3.5 Sonnet)' },
              { key: 'privacy', label: '100% On-Premise (Privacy First)' },
            ].map((item) => {
              const isSelected = simulatorState.selectedModelStrategy === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() =>
                    onModelStrategySelected(item.key as 'hybrid' | 'cloud' | 'privacy')
                  }
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-blue-950/60 border-cyan-500 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span>{item.label}</span>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-cyan-400 bg-cyan-400/20' : 'border-slate-700'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-cyan-400" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Guardrails Switch */}
        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-white">
              Garde-fous Actifs (Guardrails)
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Vérification de sécurité & schéma JSON
            </div>
          </div>
          <button
            type="button"
            onClick={() => onToggleGuardrails(!simulatorState.guardrailsEnabled)}
            className={`w-12 h-6 rounded-full transition-colors p-1 flex items-center cursor-pointer ${
              simulatorState.guardrailsEnabled ? 'bg-emerald-500 justify-end' : 'bg-slate-800 justify-start'
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-white shadow-md" />
          </button>
        </div>

        {/* Run Button */}
        <button
          onClick={onRunSimulation}
          disabled={simulatorState.isRunning}
          className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            simulatorState.isRunning
              ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25'
          }`}
        >
          {simulatorState.isRunning ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Simulation en cours...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>Lancer la Simulation Autonome</span>
            </>
          )}
        </button>
      </div>

      {/* Orchestration Flow Graph (4 Nodes) */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800/90 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-slate-400 font-semibold uppercase">
            GRAPH D'ORCHESTRATION AGENTIQUE
          </span>
          <span
            className={`px-2.5 py-1 rounded-md font-mono text-[10px] font-semibold ${
              simulatorState.isRunning
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            {simulatorState.statusText}
          </span>
        </div>

        {/* 4 Nodes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {flowNodes.map((node) => {
            const Icon = node.icon;
            const isActive = simulatorState.currentStep === node.index;
            const isDone = simulatorState.currentStep > node.index;

            return (
              <div
                key={node.index}
                className={`p-3 rounded-xl border flex flex-col items-center text-center transition-all ${
                  isActive
                    ? node.activeBorder
                    : isDone
                    ? 'border-emerald-500/50 bg-slate-950 text-slate-300'
                    : 'border-slate-800 bg-slate-950/80 text-slate-500'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : isDone
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-slate-800/60 text-slate-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-white">{node.title}</div>
                <div className="font-mono text-[9px] text-slate-400 mt-0.5">
                  {node.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Log Terminal */}
      <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase">
            JOURNAL D'EXÉCUTION & SYNTHÈSE
          </span>
          <span className="font-mono text-xs text-slate-400">
            Étape {simulatorState.currentStep}/4
          </span>
        </div>

        <div className="p-4 h-48 overflow-y-auto space-y-2 font-mono text-xs leading-relaxed">
          {simulatorState.logs.length === 0 ? (
            <div className="text-slate-500 italic">
              // Cliquez sur 'Lancer la Simulation Autonome' pour visualiser l'orchestration en temps réel.
            </div>
          ) : (
            simulatorState.logs.map((log, idx) => {
              let logColor = 'text-slate-300';
              if (log.type === 'TOOL') logColor = 'text-purple-400';
              if (log.type === 'AGENT') logColor = 'text-cyan-400';
              if (log.type === 'SUCCESS') logColor = 'text-emerald-400 font-semibold';
              if (log.type === 'WARNING') logColor = 'text-amber-400';

              return (
                <div key={idx} className={logColor}>
                  &gt; {log.text}
                </div>
              );
            })
          )}
          <div ref={logEndRef} />
        </div>
      </div>
    </div>
  );
};
