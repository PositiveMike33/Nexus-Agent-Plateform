import React, { useRef, useEffect } from 'react';
import { Terminal, X } from 'lucide-react';
import { TerminalState } from '../types';

interface TerminalModalSheetProps {
  terminalState: TerminalState;
  onInputChange: (val: string) => void;
  onExecute: () => void;
  onDismiss: () => void;
}

export const TerminalModalSheet: React.FC<TerminalModalSheetProps> = ({
  terminalState,
  onInputChange,
  onExecute,
  onDismiss,
}) => {
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalState.logs]);

  if (!terminalState.isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onExecute();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-t-2xl sm:rounded-2xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <h3 className="font-mono text-sm sm:text-base font-bold text-white tracking-tight">
              CONSOLE CLI AGENTIQUE
            </h3>
          </div>
          <button
            onClick={onDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Logs Area */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs overflow-y-auto space-y-1.5 flex-1 min-h-[220px]">
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

        {/* Command Input Line */}
        <div className="p-1.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
          <span className="font-mono text-emerald-400 font-bold text-sm pl-2">$</span>
          <input
            type="text"
            value={terminalState.input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tapez 'help', 'patterns', 'arch', 'run', 'clear'..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-slate-500 py-1.5"
            autoFocus
          />
          <button
            onClick={onExecute}
            className="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-mono text-xs font-bold transition-all cursor-pointer"
          >
            Run
          </button>
        </div>
      </div>
    </div>
  );
};
