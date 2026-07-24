import React from 'react';
import { Send, CheckCircle2, X } from 'lucide-react';
import { ContactFormState } from '../types';

interface ContactModalSheetProps {
  contactState: ContactFormState;
  onUpdateForm: (name: string, email: string, subject: string, message: string) => void;
  onSubmit: () => void;
  onDismiss: () => void;
}

export const ContactModalSheet: React.FC<ContactModalSheetProps> = ({
  contactState,
  onUpdateForm,
  onSubmit,
  onDismiss,
}) => {
  if (!contactState.isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-t-2xl sm:rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="font-mono text-xs text-cyan-400">CONTACT & COLLABORATION</span>
            <h3 className="text-lg font-bold text-white">
              Demande de Consultation Agentique
            </h3>
          </div>
          <button
            onClick={onDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {contactState.isSubmitted ? (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">Message envoyé avec succès !</h4>
              <p className="text-xs text-slate-300">
                Je vous recontacterai sous 24h avec une proposition d'architecture.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                value={contactState.name}
                onChange={(e) =>
                  onUpdateForm(
                    e.target.value,
                    contactState.email,
                    contactState.subject,
                    contactState.message
                  )
                }
                required
                placeholder="Ex. Alex Dupont"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Courriel professionnel
              </label>
              <input
                type="email"
                value={contactState.email}
                onChange={(e) =>
                  onUpdateForm(
                    contactState.name,
                    e.target.value,
                    contactState.subject,
                    contactState.message
                  )
                }
                required
                placeholder="alex@entreprise.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Sujet du projet / Architecture
              </label>
              <input
                type="text"
                value={contactState.subject}
                onChange={(e) =>
                  onUpdateForm(
                    contactState.name,
                    contactState.email,
                    e.target.value,
                    contactState.message
                  )
                }
                required
                placeholder="Ex. Swarm Multi-Agents SecOps"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Description des besoins / Processus à automatiser
              </label>
              <textarea
                value={contactState.message}
                onChange={(e) =>
                  onUpdateForm(
                    contactState.name,
                    contactState.email,
                    contactState.subject,
                    e.target.value
                  )
                }
                rows={4}
                required
                placeholder="Décrivez brièvement les objectifs, volumes et contraintes de sécurité..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-700/25 cursor-pointer mt-2"
            >
              <Send className="w-4 h-4" />
              <span>Envoyer le Message & Réserver l'Audit</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
