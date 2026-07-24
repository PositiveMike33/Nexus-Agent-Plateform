import React from 'react';
import { Puzzle, GitFork, ShieldCheck, Check } from 'lucide-react';

export const VisionSection: React.FC = () => {
  const pillars = [
    {
      icon: Puzzle,
      iconTint: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      title: 'Micro-Patterns Décomposés',
      description:
        'Décomposition des tâches complexes en micro-patterns système spécialisés (Extract, Analyze, Synthesize, Guard).',
      points: [
        'Entrées / Sorties typées Markdown & JSON',
        'Réutilisabilité inter-projets déterministe',
      ],
    },
    {
      icon: GitFork,
      iconTint: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      title: 'Orchestration Multi-LLM',
      description:
        'Routage dynamique des requêtes : tâches rapides vers Ollama/Llama3 local, tâches critiques vers Claude 3.5 Sonnet ou GPT-4o.',
      points: [
        'Optimisation des coûts API jusqu\'à -60%',
        'Latence contrôlée & Fallbacks automatique',
      ],
    },
    {
      icon: ShieldCheck,
      iconTint: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      title: 'Garde-fous & Sécurité',
      description:
        'Protection contre le Prompt Injection, validation stricte des sorties et intégration d\'étapes Human-in-the-Loop.',
      points: [
        'Audit de conformité Loi 25 / RGPD',
        'Sandbox d\'exécution sécurisée des outils',
      ],
    },
  ];

  return (
    <div className="space-y-6 pt-4">
      {/* Header */}
      <div>
        <div className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-semibold">
          PHILOSOPHIE & MÉTHODE
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
          L'Art de Structurer le Chaos des LLMs
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
          Un agent IA sans architecture est imprévisible. J'applique la rigueur de l'ingénierie système pour créer des chaînes de traitement déterministes et auditables.
        </p>
      </div>

      {/* Pillars list */}
      <div className="grid grid-cols-1 gap-4">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center ${pillar.iconTint}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>

              <div className="space-y-1.5 pt-1">
                {pillar.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-mono text-xs text-slate-300">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
