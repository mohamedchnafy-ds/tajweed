import React, { useState } from 'react';
import { Chapter } from '../types/tajweed';
import { ArrowLeft, ArrowRight, HelpCircle, CheckCircle, ChevronDown, ChevronUp, Play } from 'lucide-react';

interface ExerciseViewProps {
  chapter: Chapter;
  onBackToLesson: () => void;
  onGoToQuiz: () => void;
}

export const ExerciseView: React.FC<ExerciseViewProps> = ({
  chapter,
  onBackToLesson,
  onGoToQuiz,
}) => {
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const toggleHint = (id: string) => {
    setRevealedHints(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSolution = (id: string) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Navigation header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToLesson}
          className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à la leçon</span>
        </button>

        <span className="text-xs text-neutral-400 font-mono">
          Chapitre {chapter.number} — Entraînement
        </span>
      </div>

      {/* Intro banner */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-2">
          Exercices Guidés & Corrigés
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Appliquez les règles pas à pas sur ces versets authentiques du livre avant de tester vos connaissances dans le quiz.
        </p>
      </div>

      {/* Exercises list */}
      <div className="space-y-6">
        {(chapter.guidedExercises && chapter.guidedExercises.length > 0) ? (
          chapter.guidedExercises.map((exo, index) => {
          const isHintOpen = revealedHints[exo.id];
          const isSolutionOpen = revealedSolutions[exo.id];

          return (
            <div
              key={exo.id}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 shadow-xs"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono font-semibold text-neutral-500">
                  Exercice {index + 1} • {exo.surahAyahRef}
                </span>
                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  Segment ciblé : <strong className="font-semibold text-neutral-950 dark:text-neutral-50">{exo.targetSegment}</strong>
                </span>
              </div>

              {/* Arabic Verse Display */}
              <div className="py-4 px-5 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-100 dark:border-neutral-900 text-center mb-5">
                <p className="font-quran text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-50 leading-relaxed dir-rtl" dir="rtl">
                  {exo.verseArabic}
                </p>
              </div>

              {/* Prompt */}
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  Question :
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  {exo.promptFr}
                </p>
              </div>

              {/* Actions: Hint & Solution Toggles */}
              <div className="flex flex-wrap items-center gap-2 mb-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                <button
                  onClick={() => toggleHint(exo.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                  <span>{isHintOpen ? 'Masquer l\'indice' : 'Afficher un indice'}</span>
                </button>

                <button
                  onClick={() => toggleSolution(exo.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 text-xs font-medium transition-opacity"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{isSolutionOpen ? 'Masquer la solution' : 'Voir le corrigé détaillé'}</span>
                </button>
              </div>

              {/* Hint Box */}
              {isHintOpen && (
                <div className="mb-4 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 animate-fadeIn">
                  <strong>Indice :</strong> {exo.hintFr}
                </div>
              )}

              {/* Detailed Solution Box */}
              {isSolutionOpen && (
                <div className="mt-4 p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Règle exacte : {exo.solutionFr}</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300 pl-4 border-l-2 border-neutral-300 dark:border-neutral-700">
                    {exo.breakdownSteps.map((step, sIdx) => (
                      <p key={sIdx}>{step}</p>
                    ))}
                  </div>
                </div>
              )}

            </div>
          );
        })
      ) : (
        <div className="surface p-8 text-center text-muted">
          <p className="text-base font-medium text-ink mb-1">Exercices pratiques intégrés directement dans le Professeur Virtuel et le Quiz !</p>
          <p className="text-sm">Consultez l'étape 2 (Démonstrateur Interactif) et testez vos connaissances dans l'étape 4 (Quiz).</p>
        </div>
      )}
      </div>

      {/* Bottom Action: Proceed to Quiz */}
      <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
        <button
          onClick={onBackToLesson}
          className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          ← Revenir à la leçon
        </button>

        <button
          onClick={onGoToQuiz}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-medium text-xs hover:opacity-90 shadow-sm transition-all"
        >
          <span>Lancer le Quiz Interactif</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
