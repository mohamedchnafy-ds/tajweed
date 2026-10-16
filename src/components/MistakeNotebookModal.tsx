import React, { useState } from 'react';
import { MistakeRecord } from '../types/tajweed';
import { markMistakeResolved } from '../services/storageService';
import { X, AlertCircle, CheckCircle2, RotateCcw, BookOpen, Sparkles } from 'lucide-react';

interface MistakeNotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
  mistakes: MistakeRecord[];
  onRefreshStats: () => void;
}

export const MistakeNotebookModal: React.FC<MistakeNotebookModalProps> = ({
  isOpen,
  onClose,
  mistakes,
  onRefreshStats,
}) => {
  const [filterActiveOnly, setFilterActiveOnly] = useState(true);

  if (!isOpen) return null;

  const displayMistakes = mistakes.filter((m) =>
    filterActiveOnly ? !m.retriedSuccessfully : true
  );

  const handleResolve = (questionId: string) => {
    markMistakeResolved(questionId);
    onRefreshStats();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-neutral-950 dark:text-neutral-50">
                Cahier d'erreurs & Révisions
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Objectif 0 Faute : analysez et corrigez vos points faibles.
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

        {/* Filter Bar */}
        <div className="px-5 py-2.5 bg-neutral-50 dark:bg-neutral-950/50 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
          <span className="text-neutral-500 font-mono">
            {displayMistakes.length} question{displayMistakes.length > 1 ? 's' : ''} répertoriée{displayMistakes.length > 1 ? 's' : ''}
          </span>
          <button
            onClick={() => setFilterActiveOnly(!filterActiveOnly)}
            className="text-neutral-600 dark:text-neutral-300 hover:underline font-medium"
          >
            {filterActiveOnly ? 'Afficher aussi les erreurs résolues' : 'Uniquement les erreurs en attente'}
          </button>
        </div>

        {/* Mistake Items List */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {displayMistakes.length === 0 ? (
            <div className="py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 mx-auto flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-1">
                Aucune erreur en attente !
              </h3>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                Toutes vos erreurs de quiz ont été corrigées ou vous n'avez fait aucune faute. Félicitations pour votre rigueur de récitation.
              </p>
            </div>
          ) : (
            displayMistakes.map((record) => (
              <div
                key={record.questionId}
                className={`p-4 rounded-xl border text-xs space-y-3 transition-all ${
                  record.retriedSuccessfully
                    ? 'border-emerald-200 bg-emerald-50/30 dark:border-emerald-900/40 dark:bg-emerald-950/20 opacity-70'
                    : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 shadow-xs'
                }`}
              >
                {/* Prompt */}
                <div className="font-medium text-neutral-900 dark:text-neutral-100">
                  {record.questionPrompt}
                </div>

                {/* Verse */}
                {record.verseArabic && (
                  <div className="py-2.5 px-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 text-center font-quran text-xl text-neutral-800 dark:text-neutral-200" dir="rtl">
                    {record.verseArabic}
                  </div>
                )}

                {/* Comparison of answers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-rose-900 dark:text-rose-200">
                    <span className="font-semibold block mb-0.5">Votre réponse :</span>
                    <span>{record.yourAnswer}</span>
                  </div>

                  <div className="p-2 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-emerald-900 dark:text-emerald-200">
                    <span className="font-semibold block mb-0.5">Réponse correcte :</span>
                    <span>{record.correctAnswer}</span>
                  </div>
                </div>

                {/* Trap Explanation */}
                <p className="text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-950/40 p-2.5 rounded border border-neutral-100 dark:border-neutral-800">
                  <strong className="text-neutral-800 dark:text-neutral-200">Rappel du piège :</strong> {record.explanation}
                </p>

                {/* Resolve Action */}
                {!record.retriedSuccessfully && (
                  <div className="flex justify-end pt-1">
                    <button
                      onClick={() => handleResolve(record.questionId)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 font-medium text-[11px] transition-all"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Marquer comme compris & corrigé</span>
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
