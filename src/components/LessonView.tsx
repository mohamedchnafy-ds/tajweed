import React, { useState } from 'react';
import { Chapter } from '../types/tajweed';
import { ExampleAudioCard } from './ExampleAudioCard';
import { ArrowLeft, Clock, Info, AlertTriangle, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface LessonViewProps {
  chapter: Chapter;
  onBack: () => void;
  onGoToExercises: () => void;
  onOpenInfographic: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  chapter,
  onBack,
  onGoToExercises,
  onOpenInfographic,
}) => {
  const [activeSubruleId, setActiveSubruleId] = useState<string>(chapter.subrules[0]?.id || '');

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Back button & chapter meta */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tous les chapitres</span>
        </button>

        {/* Infographic button */}
        <button
          onClick={onOpenInfographic}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
          title="Consulter la fiche infographique de synthèse du livre"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Fiche Synthèse (Poster)</span>
        </button>
      </div>

      {/* Chapter Title Banner */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900">
            Chapitre {chapter.number}
          </span>
          <span className="text-xs text-neutral-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>~{chapter.estimatedMinutes} min</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-2">
          {chapter.titleFr}
        </h1>
        <p className="font-quran text-2xl text-neutral-500 dark:text-neutral-400 mb-3" dir="rtl">
          {chapter.titleAr}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
          {chapter.summaryFr}
        </p>
      </div>

      {/* Subrule Selector Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 border-b border-neutral-200 dark:border-neutral-800">
        {chapter.subrules.map((sub, idx) => (
          <button
            key={sub.id}
            onClick={() => setActiveSubruleId(sub.id)}
            className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeSubruleId === sub.id
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900'
            }`}
          >
            {sub.nameFr}
          </button>
        ))}
      </div>

      {/* Current Subrule Content */}
      {chapter.subrules
        .filter((sub) => sub.id === activeSubruleId)
        .map((sub) => (
          <div key={sub.id} className="space-y-8 animate-fadeIn">
            
            {/* Rule Header Card with Mnemonic */}
            <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h2 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
                  {sub.nameFr}
                </h2>
                <span className="font-quran text-xl text-neutral-600 dark:text-neutral-300" dir="rtl">
                  {sub.nameAr}
                </span>
              </div>

              {sub.mnemonic && (
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-200/70 dark:bg-neutral-800/80 text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200">
                  <span className="text-[10px] uppercase font-bold text-neutral-500">Formule clé :</span>
                  <span>{sub.mnemonic}</span>
                </div>
              )}

              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                {sub.definitionFr}
              </p>

              {/* Articulation mechanism callout */}
              <div className="text-xs bg-white dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Point d'articulation (Makhraj) & Gestuelle :
                  </strong>{' '}
                  <span className="text-neutral-600 dark:text-neutral-300">{sub.mechanismFr}</span>
                </div>
              </div>
            </div>

            {/* Interactive Quranic Examples Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Exemples Coraniques & Entraînement Oral</span>
                </h3>
                <span className="text-xs text-neutral-400">Écoutez puis enregistrez votre voix</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {sub.examples.map((example) => (
                  <ExampleAudioCard key={example.id} example={example} />
                ))}
              </div>
            </div>

            {/* Common Traps / Lahn Warning Box */}
            {sub.commonMistakes && sub.commonMistakes.length > 0 && (
              <div className="rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 mb-3">
                  <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Pièges fréquents à éviter (Lahn Khafī / Jalī)</span>
                </div>
                <div className="space-y-3">
                  {sub.commonMistakes.map((m, idx) => (
                    <div key={idx} className="text-xs space-y-1">
                      <div className="font-medium text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                        <span>Erreur : {m.trapFr}</span>
                      </div>
                      <div className="text-neutral-700 dark:text-neutral-300 pl-3">
                        ✓ Correction : {m.correctionFr}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        ))}

      {/* Bottom Action: Proceed to Exercises */}
      <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          ← Retour aux chapitres
        </button>

        <button
          onClick={onGoToExercises}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-medium text-xs hover:opacity-90 shadow-sm transition-all"
        >
          <span>Passer aux exercices guidés</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
