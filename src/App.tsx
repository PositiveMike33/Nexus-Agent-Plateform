import React, { useState, useEffect } from 'react';
import { NexusTopBar } from './components/NexusTopBar';
import { NexusBottomNavigation } from './components/NexusBottomNavigation';
import { HeroSection } from './components/HeroSection';
import { VisionSection } from './components/VisionSection';
import { PatternStoreSection } from './components/PatternStoreSection';
import { SimulatorSection } from './components/SimulatorSection';
import { ArchitecturesSection } from './components/ArchitecturesSection';
import { EstimatorSection } from './components/EstimatorSection';
import { TerminalModalSheet } from './components/TerminalModalSheet';
import { ContactModalSheet } from './components/ContactModalSheet';
import { Toast } from './components/Toast';

import {
  rotativeHeadlines,
} from './data/nexusData';
import {
  SimulatorState,
  EstimatorState,
  TerminalState,
  ContactFormState,
  SimulationLog,
} from './types';

export function App() {
  // Navigation
  const [selectedTab, setSelectedTab] = useState<number>(0);

  // Headline index loop
  const [headlineIndex, setHeadlineIndex] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % rotativeHeadlines.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Pattern store
  const [patternCategory, setPatternCategory] = useState<string>('all');

  // Simulator state
  const [simulatorState, setSimulatorState] = useState<SimulatorState>({
    selectedScenario: 'sec_audit',
    selectedModelStrategy: 'hybrid',
    guardrailsEnabled: true,
    isRunning: false,
    currentStep: 0,
    logs: [],
    statusText: 'En attente',
  });

  // Estimator state
  const [estimatorState, setEstimatorState] = useState<EstimatorState>({
    domain: 'sec',
    privacy: 'cloud',
    volume: '100',
    title: 'Architecture Micro-Agents Modulaires',
    description:
      "Pipeline d'agents orchestrés avec stockage vectoriel et routage dynamique vers Claude 3.5 Sonnet.",
    estimatedGain: '+65% à +80%',
  });

  // Terminal state
  const [terminalState, setTerminalState] = useState<TerminalState>({
    isOpen: false,
    input: '',
    logs: [
      '# Initialisation du moteur agentique autonome...',
      '$ agent-cli --pattern extract_wisdom --model claude-3-5-sonnet < SecurityReport.md',
      '✔ Agent RAG chargé. Analyse contextuelle en cours...',
      '[POINTS CLÉS EXTRACTIFS]',
      "  1. Vulnérabilité d'orchestration colmatée par Guardrails.",
      '  2. Réduction du coût d\'inférence de 42% par routage intelligent.',
      '  3. Validation humaine intégrée (Human-in-the-Loop).',
      '$ agent-cli --pattern create_stride_threat_model --chain create_summary',
      "> Pipeline d'agents autonomes prêt.",
    ],
  });

  // Contact Modal state
  const [contactState, setContactState] = useState<ContactFormState>({
    isOpen: false,
    name: '',
    email: '',
    subject: '',
    message: '',
    isSubmitted: false,
  });

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Simulator Runner
  const handleRunSimulation = async () => {
    if (simulatorState.isRunning) return;

    setSimulatorState((prev) => ({
      ...prev,
      isRunning: true,
      currentStep: 0,
      statusText: "En cours d'exécution...",
      logs: [],
    }));

    const scenario = simulatorState.selectedScenario;
    const strategy = simulatorState.selectedModelStrategy;
    const guard = simulatorState.guardrailsEnabled;

    const steps: SimulationLog[] = [
      {
        text: `[Agent Lead] Réception de la demande scenario: '${scenario}'. Stratégie modèle: '${strategy}'.`,
        type: 'INFO',
      },
      {
        text: '[System Tools] Invocation de la recherche contextuelle (Vector DB) & ingestion des documents source...',
        type: 'TOOL',
      },
      {
        text: '[Pattern Agent] Exécution du Prompt Système spécialisé. Inférence et génération de la réponse structurée.',
        type: 'AGENT',
      },
      {
        text: guard
          ? '[Guardrails Stricte] Output validé contre les hallucinations et failles. SCHÉMA CONFORME.'
          : '[Guardrail Warning] Exécution sans validation stricte.',
        type: guard ? 'SUCCESS' : 'WARNING',
      },
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise((res) => setTimeout(res, 750));
      const currentLog = steps[i];
      setSimulatorState((prev) => ({
        ...prev,
        currentStep: i + 1,
        logs: [...prev.logs, currentLog],
      }));
    }

    setSimulatorState((prev) => ({
      ...prev,
      isRunning: false,
      statusText: 'Terminé (2.3s)',
    }));
  };

  // Estimator Updater
  const handleUpdateEstimator = (
    domain: 'sec' | 'doc' | 'dev' | 'ops',
    privacy: 'cloud' | 'hybrid' | 'strict',
    volume: '100' | '500' | '1000'
  ) => {
    let title = 'Architecture Micro-Agents Modulaires';
    let desc = '';
    let gain = '+65% à +80%';

    if (privacy === 'strict') {
      title = 'Agent Swarm On-Premise (100% Air-Gapped Local LLM)';
      desc =
        'Déploiement complet sur vos serveurs internes (Ollama / VLLM + Vector DB locale) garantissant la confidentialité absolue des données métiers.';
      gain = '+60% à +75%';
    } else if (privacy === 'hybrid') {
      title = 'Hybrid Cloud / On-Prem Agent Swarm';
      desc =
        'Prétraitement et anonymisation des données en local via de petits modèles déterministes, puis routage des requêtes complexes vers des modèles Cloud haut de gamme.';
      gain = '+70% à +85%';
    } else {
      title = 'Cloud High-Performance Agent Cluster';
      desc =
        'Orchestration multi-modèles tirant parti des derniers modèles Claude 3.5 Sonnet & GPT-4o avec parallélisation extrême et réponses instantanées.';
      gain = '+80% à +92%';
    }

    setEstimatorState({
      domain,
      privacy,
      volume,
      title,
      description: desc,
      estimatedGain: gain,
    });
  };

  // Terminal Command Executor
  const handleExecuteTerminalCommand = () => {
    const inputCmd = terminalState.input.trim();
    if (!inputCmd) return;

    const cmdLower = inputCmd.toLowerCase();
    const newLogs = [...terminalState.logs, `$ ${inputCmd}`];

    if (cmdLower === 'help') {
      newLogs.push('Commandes disponibles :');
      newLogs.push('  - patterns : Liste les patterns système disponibles');
      newLogs.push("  - arch : Visualise la topologie d'architecture");
      newLogs.push('  - run : Lance une simulation dans le terminal');
      newLogs.push('  - clear : Efface la console terminal');
    } else if (cmdLower === 'patterns') {
      newLogs.push(
        '[System Patterns] extract_wisdom, stride_threat_model, code_security_reviewer, rag_context_refiner, structured_json_extractor, multi_agent_router.'
      );
    } else if (cmdLower === 'arch') {
      newLogs.push(
        '[Topology] Client -> Agent Router -> Guardrail Filter -> Multi-LLM Swarm -> Structured Output.'
      );
    } else if (cmdLower === 'run') {
      newLogs.push(
        '✔ [Sim] Agent Swarm initialisé. 4 nœuds actifs. Inférence terminée en 1.8s.'
      );
    } else if (cmdLower === 'clear') {
      newLogs.length = 0;
    } else {
      newLogs.push(
        `Commande inconnue '${inputCmd}'. Tapez 'help' pour la liste des commandes.`
      );
    }

    setTerminalState({
      ...terminalState,
      input: '',
      logs: newLogs,
    });
  };

  // Contact Form Submission
  const handleSubmitContactForm = () => {
    setContactState((prev) => ({ ...prev, isSubmitted: true }));
    setTimeout(() => {
      setContactState({
        isOpen: false,
        name: '',
        email: '',
        subject: '',
        message: '',
        isSubmitted: false,
      });
      setToastMessage('✔ Message transmis avec succès ! Réponse sous 24h.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 pb-24">
      {/* Top Header Bar */}
      <NexusTopBar
        onOpenTerminal={() => setTerminalState((prev) => ({ ...prev, isOpen: true }))}
        onOpenContact={() => setContactState((prev) => ({ ...prev, isOpen: true }))}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClear={() => setToastMessage(null)} />

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        {selectedTab === 0 && (
          <div className="space-y-10">
            <HeroSection
              rotativeHeadline={rotativeHeadlines[headlineIndex]}
              terminalState={terminalState}
              onTerminalInputChange={(val) =>
                setTerminalState((prev) => ({ ...prev, input: val }))
              }
              onTerminalExecute={handleExecuteTerminalCommand}
              onGoToSimulator={() => setSelectedTab(2)}
              onGoToPatterns={() => setSelectedTab(1)}
            />
            <VisionSection />
          </div>
        )}

        {selectedTab === 1 && (
          <PatternStoreSection
            selectedCategory={patternCategory}
            onCategorySelected={setPatternCategory}
            onShowToast={(msg) => setToastMessage(msg)}
          />
        )}

        {selectedTab === 2 && (
          <SimulatorSection
            simulatorState={simulatorState}
            onScenarioSelected={(scenario) =>
              setSimulatorState((prev) => ({ ...prev, selectedScenario: scenario }))
            }
            onModelStrategySelected={(strategy) =>
              setSimulatorState((prev) => ({ ...prev, selectedModelStrategy: strategy }))
            }
            onToggleGuardrails={(enabled) =>
              setSimulatorState((prev) => ({ ...prev, guardrailsEnabled: enabled }))
            }
            onRunSimulation={handleRunSimulation}
          />
        )}

        {selectedTab === 3 && <ArchitecturesSection />}

        {selectedTab === 4 && (
          <EstimatorSection
            estimatorState={estimatorState}
            onUpdateEstimator={handleUpdateEstimator}
            onBookSession={() =>
              setContactState((prev) => ({
                ...prev,
                isOpen: true,
                subject: `Session d'Architecture : ${estimatorState.title}`,
              }))
            }
          />
        )}
      </main>

      {/* Bottom Nav Bar */}
      <NexusBottomNavigation
        selectedTab={selectedTab}
        onTabSelected={setSelectedTab}
      />

      {/* Modals / Sheets */}
      <TerminalModalSheet
        terminalState={terminalState}
        onInputChange={(val) =>
          setTerminalState((prev) => ({ ...prev, input: val }))
        }
        onExecute={handleExecuteTerminalCommand}
        onDismiss={() => setTerminalState((prev) => ({ ...prev, isOpen: false }))}
      />

      <ContactModalSheet
        contactState={contactState}
        onUpdateForm={(name, email, subject, message) =>
          setContactState((prev) => ({ ...prev, name, email, subject, message }))
        }
        onSubmit={handleSubmitContactForm}
        onDismiss={() => setContactState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
