import React from 'react';
import { Chapter } from '../types/tajweed';
import { X, Layers, CheckCircle2 } from 'lucide-react';

interface InfographicPosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  chapter: Chapter;
}

export const InfographicPosterModal: React.FC<InfographicPosterModalProps> = ({
  isOpen,
  onClose,
  chapter,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-neutral-950 dark:text-neutral-50">
                Fiche Synthèse : {chapter.titleFr}
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                L'essentiel du chapitre en un clin d'œil (Inspiré de l'infographie du livre).
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Poster Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="text-center pb-4 border-b border-neutral-100 dark:border-neutral-800">
            <span className="font-quran text-3xl text-neutral-800 dark:text-neutral-100 block mb-1" dir="rtl">
              {chapter.titleAr}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              Chapitre {chapter.number} — Règle de Hafs 'an 'Āsim
            </span>
          </div>

          {/* Key Infographic Bullet Points */}
          <div className="space-y-3 pt-2">
            {chapter.infographicPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-100 dark:border-neutral-800/80 flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Subrules overview table */}
          <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              Récapitulatif des règles & lettres
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {chapter.subrules.map((sub) => (
                <div
                  key={sub.id}
                  className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40"
                >
                  <div className="font-semibold text-xs text-neutral-900 dark:text-neutral-100 mb-0.5">
                    {sub.nameFr}
                  </div>
                  {sub.mnemonic && (
                    <div className="text-[11px] font-mono text-neutral-500">
                      Formule : {sub.mnemonic}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-xs font-medium hover:opacity-90 transition-opacity"
          >
            Fermer l'infographie
          </button>
        </div>

      </div>
    </div>
  );
};
