import React, { useRef, useEffect } from 'react';
import { Play, Boxes, Terminal, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TerminalState } from '../types';

interface HeroSectionProps {
  rotativeHeadline: string;
  terminalState: TerminalState;
  onTerminalInputChange: (val: string) => void;
  onTerminalExecute: () => void;
  onGoToSimulator: () => void;
  onGoToPatterns: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  rotativeHeadline,
  terminalState,
  onTerminalInputChange,
  onTerminalExecute,
  onGoToSimulator,
  onGoToPatterns,
}) => {
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalState.logs]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onTerminalExecute();
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-mono text-xs text-cyan-400 font-medium">
          Architecte Système Agentique • Multi-LLMs
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
        Je conçois des Systèmes Agentiques Autonomes & Résilients.
      </h1>

      {/* Dynamic Rotating Headline Box */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow-inner flex items-center gap-2 overflow-hidden">
        <span className="font-mono text-cyan-400 font-bold text-lg select-none">&gt;</span>
        <div className="h-7 relative flex-1 flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={rotativeHeadline}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="font-mono text-sm sm:text-base text-slate-200 font-medium whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {rotativeHeadline}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl">
        Transformation des LLM bruts en écosystèmes industriels autonomes : micro-agents modulaires, orchestration de prompts, chaînage RAG sécurisé et garde-fous de conformité.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
        <button
          onClick={onGoToSimulator}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-lg shadow-blue-700/25 cursor-pointer"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Simulateur</span>
        </button>

        <button
          onClick={onGoToPatterns}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700 transition-all cursor-pointer"
        >
          <Boxes className="w-4 h-4 text-cyan-400" />
          <span>Patterns Store</span>
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
        <div>
          <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white">+140</div>
          <div className="text-xs text-slate-400 mt-0.5">Patterns Système</div>
        </div>
        <div>
          <div className="font-mono text-2xl sm:text-3xl font-extrabold text-cyan-400">99.8%</div>
          <div className="text-xs text-slate-400 mt-0.5">Fiabilité Pipelines</div>
        </div>
        <div>
          <div className="font-mono text-2xl sm:text-3xl font-extrabold text-purple-400">10x</div>
          <div className="text-xs text-slate-400 mt-0.5">Accélération Ops</div>
        </div>
      </div>

      {/* Embedded Interactive Terminal Box */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800/90 shadow-2xl overflow-hidden mt-6">
        {/* Terminal Header */}
        <div className="bg-slate-950 px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="font-mono text-xs text-slate-400 ml-2">agent-orchestrator.sh</span>
          </div>
          <span className="font-mono text-[11px] text-cyan-400">v2.4.0-agentic</span>
        </div>

        {/* Terminal Logs Area */}
        <div className="p-4 h-48 overflow-y-auto space-y-1.5 font-mono text-xs leading-relaxed bg-slate-950/60">
          {terminalState.logs.map((log, idx) => {
            let textColor = 'text-slate-300';
            if (log.startsWith('#')) textColor = 'text-slate-500';
            else if (log.startsWith('$')) textColor = 'text-cyan-400 font-semibold';
            else if (log.startsWith('✔')) textColor = 'text-emerald-400';
            else if (log.startsWith('[')) textColor = 'text-purple-400';

            return (
              <div key={idx} className={textColor}>
                {log}
              </div>
            );
          })}
          <div ref={logEndRef} />
        </div>

        {/* Terminal Input Line */}
        <div className="bg-slate-950/90 px-3 py-2 flex items-center gap-2 border-t border-slate-800/60">
          <span className="font-mono text-emerald-400 font-bold text-sm">$</span>
          <input
            type="text"
            value={terminalState.input}
            onChange={(e) => onTerminalInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tapez 'help', 'patterns', 'arch', 'run'..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-slate-500"
          />
          <button
            onClick={onTerminalExecute}
            className="p-1.5 rounded-md text-cyan-400 hover:bg-slate-800 transition-colors cursor-pointer"
            title="Exécuter la commande"
          >
            <Terminal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
