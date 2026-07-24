export type LogType = 'INFO' | 'TOOL' | 'AGENT' | 'SUCCESS' | 'WARNING';

export interface PatternItem {
  id: string;
  title: string;
  category: 'analysis' | 'security' | 'code' | 'agent';
  categoryName: string;
  description: string;
  prompt: string;
  llm: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  category: string;
  roi: string;
  description: string;
  architecturePoints: string[];
  tags: string[];
}

export interface StrategicGuide {
  id: string;
  title: string;
  category: string;
  summary: string;
  fullMarkdown: string;
  tags: string[];
}

export interface SimulationLog {
  text: string;
  type: LogType;
}

export interface SimulatorState {
  selectedScenario: 'sec_audit' | 'code_review' | 'content_rag';
  selectedModelStrategy: 'hybrid' | 'cloud' | 'privacy';
  guardrailsEnabled: boolean;
  isRunning: boolean;
  currentStep: number;
  logs: SimulationLog[];
  statusText: string;
}

export interface EstimatorState {
  domain: 'sec' | 'doc' | 'dev' | 'ops';
  privacy: 'cloud' | 'hybrid' | 'strict';
  volume: '100' | '500' | '1000';
  title: string;
  description: string;
  estimatedGain: string;
}

export interface TerminalState {
  isOpen: boolean;
  input: string;
  logs: string[];
}

export interface ContactFormState {
  isOpen: boolean;
  name: string;
  email: string;
  subject: string;
  message: string;
  isSubmitted: boolean;
}
