import { PatternItem, CaseStudyItem, StrategicGuide } from '../types';

export const rotativeHeadlines: string[] = [
  "Pipeline de prompts déterministes",
  "Orchestration Autonome Multi-LLM (Cloud & Local)",
  "Garde-Fous de Sécurité & Validation de Données Stricte",
  "Gains d'Efficacité Industriels & Réduction des Coûts API"
];

export const patterns: PatternItem[] = [
  {
    id: "extract_wisdom",
    title: "extract_wisdom",
    category: "analysis",
    categoryName: "Analyse & Sagesse",
    description: "Extrait les pépites d'information, idées clés, citations et recommandations pragmatiques d'un contenu source volumineux.",
    prompt: `# ROLE ET MISSION
Tu es un Agent Analyste d'Élite. Ton rôle est d'analyser un contenu source complexe et d'en extraire la substantifique moelle stratégique.

# SCHÉMA DE SORTIE DÉTERMINISTE
1. RÉSUMÉ STRATÉGIQUE (30 mots max)
2. EXPLORATION TREE OF THOUGHT (Sélectionnée)
3. COMPOSANTS ARCHITECTURAUX CLÉS (5 à 10 éléments)
4. MEILLEURES PRATIQUES DE PLANIFICATION (10 à 20 points d'action)
5. LEVIERS DE REVENUS ÉLITES (3 à 5 opportunités ROI)
6. L'IDÉE "ALPHA" (1 phrase clé)`,
    llm: "Claude 3.5 Sonnet / GPT-4o"
  },
  {
    id: "stride_threat_model",
    title: "stride_threat_model",
    category: "security",
    categoryName: "Sécurité & Cyber",
    description: "Génère un modèle de menace déterministe selon la méthodologie STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege).",
    prompt: `# ROLE ET MISSION
Tu es un Architecte en Cybersécurité Senior. Analyse la topologie logicielle fournie et construis un modèle de menace complet STRIDE.

# CONSIGNES
1. Identifie chaque vecteur d'attaque potentiel par composant.
2. Assigne un score de risque DREAD (1-10).
3. Propose des remédiations techniques applicables immédiatement.
4. Génère le résultat au format Markdown structuré.`,
    llm: "Claude 3.5 Sonnet / Ollama Local"
  },
  {
    id: "code_security_reviewer",
    title: "code_security_reviewer",
    category: "code",
    categoryName: "Code & Architecture",
    description: "Effectue une revue de code approfondie : failles OWASP, bottlenecks de performance, dette technique et refactoring idiomatique.",
    prompt: `# ROLE ET MISSION
Tu es un Revoil de Code et Audit Cyber Senior. Examine le code fourni pour détecter :
- Failles OWASP Top 10 (Injection, Broken Auth, Input Sanitization)
- Fuites de mémoire & concurrence
- Refactoring idiomatique optimisé.`,
    llm: "GPT-4o / DeepSeek R1"
  },
  {
    id: "rag_context_refiner",
    title: "rag_context_refiner",
    category: "analysis",
    categoryName: "Analyse & Sagesse",
    description: "Filtre et élimine le bruit des documents récupérés par une base vectorielle RAG avant l'inférence finale du LLM.",
    prompt: `# ROLE ET MISSION
Tu es un Agent de Filtrage RAG Contextuel. Reçois le contexte brut issu de la base vectorielle et élimine tout bruit, doublon ou information hors sujet. Ne conserve que les faits pertinents pour la requête utilisateur.`,
    llm: "Llama 3.3 70B / Gemini 1.5 Flash"
  },
  {
    id: "structured_json_extractor",
    title: "structured_json_extractor",
    category: "code",
    categoryName: "Code & Architecture",
    description: "Transforme des données brutes déstructurées en objet JSON strict selon un schéma Pydantic / Zod donné sans aucune dérive.",
    prompt: `# ROLE ET MISSION
Tu es un Agent Formateur JSON Déterministe. Transforme les textes et documents fournis en un objet JSON strictly valide selon le schéma fourni.
Règles :
1. Aucun texte d'explication ou balise hors du bloc JSON.
2. Respecte scrupuleusement les types de champs.`,
    llm: "Claude 3.5 Sonnet"
  },
  {
    id: "multi_agent_router",
    title: "multi_agent_router",
    category: "agent",
    categoryName: "Orchestration Multi-Agent",
    description: "Orchestre une flotte d'agents spécialisés avec routage d'intention, consensus et garde-fous déterministes.",
    prompt: `# ROLE ET MISSION
Tu es le Lead Orchestrator de la Flotte d'Agents.
1. Analyse l'intention utilisateur.
2. Décompose la requête en sous-tâches atomiques.
3. Délègue chaque tâche à un agent spécialisé (Reader, ToolExecutor, Guard).
4. Agrège les réponses et valide le résultat.`,
    llm: "Agent Swarm Ecosystem"
  }
];

export const caseStudies: CaseStudyItem[] = [
  {
    id: "secops_swarm",
    title: "Swarm d'Agents d'Analyse de Menaces & Incident Response",
    category: "SecOps & Cyber",
    roi: "+85% temps gagné",
    description: "Mise en place d'un système multi-agents autonome capable d'ingérer des logs de serveurs, de lancer des patterns de Threat Modeling (STRIDE / MITRE ATT&CK), et de générer un rapport de remédiation en moins de 3 minutes.",
    architecturePoints: [
      "Agent CLI + Pattern analyze_threat_report",
      "Guardrails contre les fausses alertes (Précision: 99.1%)",
      "Intégration Webhook Slack/Jira automatisée"
    ],
    tags: ["Agent CLI", "Claude 3.5 Sonnet", "STRIDE Pattern", "Python/Go"]
  },
  {
    id: "enterprise_rag",
    title: "Pipeline de Synthèse Média & Intelligence Économique",
    category: "Enterprise RAG & Knowledge",
    roi: "-60% Coûts d'inférence",
    description: "Plateforme hybride traitant plus de 500 vidéos et documents PDF par jour. Extraction des enseignements clés (extract_wisdom), génération de comptes-rendus exécutifs et indexation vectorielle.",
    architecturePoints: [
      "Traitement audio via Whisper / Gemini API",
      "Modèle hybride : Ollama local pour pré-filtrage + Cloud pour la synthèse",
      "Base de connaissances Obsidian / Markdown automatisée"
    ],
    tags: ["Whisper / Gemini", "Ollama Local", "Vector DB", "Multi-Agents"]
  }
];

export const strategicGuides: StrategicGuide[] = [
  {
    id: "gemini_monetization",
    title: "Guide Stratégique Monétisation Google AI Studio",
    category: "Monétisation & Micro-Services",
    summary: "Positionnement, matrice d'escalade d'offres (45$ -> 500$ -> 3800$ Retainer) et création de Victory Files sur Google AI Studio.",
    fullMarkdown: `# Guide Stratégique & Opérationnel : Monétiser ses Prestations d'Architecte Agentique

## 1. Positionnement & Angles de Démystification
Les entreprises ne cherchent pas à acheter « du prompt » ou « une clé d'API ». Elles cherchent à automatiser des tâches chronophages, à réduire leurs erreurs opérationnelles et à gagner un temps précieux.

## 2. Architecture des Offres & Grille Tarifaire ($ CAD)
- **Produit d'Appel (45 $ CAD) :** System Instruction + Configuration d'Agent simple sur Google AI Studio.
- **Offre Intermédiaire (225 $ - 500 $ CAD) :** Agent Métier Complexe avec Few-Shot Prompting, Validation JSON, Tests de Robustesse & n8n / API.
- **Offre High-Ticket / Retainer (1 200 $ - 3 800 $ CAD) :** Écosystème Multi-Agents & Intégration sur-mesure dans les processus de l'entreprise.

## 3. Stratégie du « Victory File »
Créez 3 prototypes fonctionnels dans Google AI Studio :
1. L'Agent Qualificateur & Structurateur de Leads (Génération JSON).
2. L'Agent Multimodal de Contrôle Qualité / Audit Visuel.
3. L'Agent d'Analyse de Documents Longs (RAG Simplifié avec fenêtre 2M+ tokens).`,
    tags: ["Google AI Studio", "Gemini", "Freelance", "Microservices", "Québec"]
  },
  {
    id: "sta_plan",
    title: "Phase 0 & Dossier STA (Emploi-Québec)",
    category: "Administration & Plan d'Affaires",
    summary: "Checklist administrative montréalaise, montage du dossier de subvention Soutien au Travail Autonome (STA) et structure financière.",
    fullMarkdown: `# Phase 0 : Suivi Opérationnel & Modèle de Plan d'Affaires (STA)

## 1. Liste de Contrôle Opérationnelle - Phase 0
- Choix du nom et immatriculation au REQ (NEQ)
- Inscription anticipée TPS (5%) et TVQ (9.975%) pour récupération des CTI/RTI
- Configuration bancaire Wise Business (EUR / CAD)
- Montage du dossier de subvention STA (Emploi-Québec / PME MTL)
- Ancrage local : Tiers Lieu Montréal (TLM), YES Montreal

## 2. Modèle de Plan d'Affaires Simplifié
- **Mission :** Accompagner les PME dans l'intégration sécurisée et conforme (Loi 25, RGPD) d'IA générative.
- **Prévisions :** Allocation de subsistance sur 12 mois + Revenus d'Inbound Microservices.`,
    tags: ["STA", "Emploi-Québec", "Montréal", "Plan d'Affaires", "Loi 25"]
  },
  {
    id: "inbound_action_plan",
    title: "Plan d'Action Stratégique Inbound Microservices",
    category: "Prospection & Growth",
    summary: "Du démarrage sécurisé aux contrats haut ticket : Produit pour Prospects (PFP), Relevance AI et funnel à 3 niveaux.",
    fullMarkdown: `# Plan d'Action Stratégique : Du Démarrage aux Contrats Haut Ticket

## 1. Funnel d'Acquisition & Packaging
1. Produit d'Appel Inbound (ComeUp / Malt / Fiverr) -> Preuve Sociale
2. Produit pour Prospects (PFP - Audit 5 Questions) -> Relevance AI
3. Séance Stratégique (500 $ - 1 000 $) -> Diagnostic
4. Sprint d'Implémentation (3 000 $ - 8 000 $) -> Exécution
5. Maintenance Récurrente (2 500 $ - 5 000 $/mois) -> Retainer

## 2. Grille Tarifaire à 3 Niveaux
- **Niveau Bronze :** 500 $ - 1 000 $ (Diagnostic 2h + Roadmap)
- **Niveau Argent :** 3 000 $ - 8 000 $ (Sprint d'implémentation 1-2 semaines)
- **Niveau Or :** 2 500 $ - 5 000 $/mois (Retainer & Gouvernance continuous)`,
    tags: ["PFP", "Relevance AI", "High Ticket", "Retainer", "Chaos Model"]
  }
];
