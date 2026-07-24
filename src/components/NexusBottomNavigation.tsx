import React from 'react';
import { Home, Boxes, Play, Cpu, Calculator } from 'lucide-react';

interface NexusBottomNavigationProps {
  selectedTab: number;
  onTabSelected: (tabIndex: number) => void;
}

export const NexusBottomNavigation: React.FC<NexusBottomNavigationProps> = ({
  selectedTab,
  onTabSelected,
}) => {
  const navItems = [
    { label: 'Vision', icon: Home, index: 0 },
    { label: 'Patterns', icon: Boxes, index: 1 },
    { label: 'Simulator', icon: Play, index: 2 },
    { label: 'Case Studies', icon: Cpu, index: 3 },
    { label: 'Audit ROI', icon: Calculator, index: 4 },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800/80">
      <div className="max-w-3xl mx-auto px-2 flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedTab === item.index;
          return (
            <button
              key={item.index}
              onClick={() => onTabSelected(item.index)}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 px-2 transition-all cursor-pointer ${
                isSelected
                  ? 'text-cyan-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div
                className={`p-1.5 rounded-lg transition-all ${
                  isSelected ? 'bg-blue-900/40 text-cyan-400 ring-1 ring-cyan-500/30' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono mt-1 tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
