import React from 'react';
import { Code, Terminal, Send } from 'lucide-react';

interface NexusTopBarProps {
  onOpenTerminal: () => void;
  onOpenContact: () => void;
}

export const NexusTopBar: React.FC<NexusTopBarProps> = ({
  onOpenTerminal,
  onOpenContact,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/10">
            <Code className="w-5 h-5 text-white" />
          </div>

          <div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-base text-white tracking-tight">Agentic</span>
              <span className="font-black text-base text-cyan-400">Nexus</span>
            </div>
            <p className="font-mono text-[9px] text-slate-400 tracking-[0.15em] uppercase leading-none mt-0.5">
              SYSTEM ARCHITECT
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* CLI Terminal Button */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 text-xs font-mono transition-colors shadow-sm cursor-pointer"
            title="Ouvrir la Console CLI Agentique"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Console</span>
            <span className="sm:hidden">CLI</span>
          </button>

          {/* Consultation Button */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-md shadow-blue-700/20 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Audit</span>
          </button>
        </div>
      </div>
    </header>
  );
};
