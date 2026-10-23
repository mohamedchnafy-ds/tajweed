import React, { useState } from 'react';
import { Chapter } from '../types/tajweed';
import { ExampleAudioCard } from './ExampleAudioCard';
import { ArrowLeft, Clock, Info, AlertTriangle, ArrowRight, BookOpen, Layers, Activity, Sparkles, Scroll } from 'lucide-react';

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
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900">
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
            <div className="p-5 sm:p-6 rounded-2xl border border-line bg-card shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h2 className="text-xl font-bold text-ink">
                  {sub.nameFr}
                </h2>
                <span className="font-ar text-2xl text-lapis font-bold" dir="rtl">
                  {sub.nameAr}
                </span>
              </div>

              {sub.mnemonic && (
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-soft text-xs font-mono font-medium text-ink border border-line">
                  <span className="text-[10px] font-bold text-gilt">Formule clé :</span>
                  <span className="font-ar text-sm font-semibold">{sub.mnemonic}</span>
                </div>
              )}

              <p className="text-[15px] text-ink leading-relaxed mb-5">
                {sub.definitionFr}
              </p>

              {/* 1. Double Définition Savante (لغةً & اصطلاحاً) */}
              {(sub.definitionLughatan || sub.definitionIstilahan) && (
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {sub.definitionLughatan && (
                    <div className="p-4 rounded-xl border border-line bg-soft/70">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="chip chip-izhar text-[11px] font-semibold">لُغَةً — Sens Linguistique</span>
                        {sub.definitionLughatan.ar && (
                          <span className="font-ar text-sm text-lapis font-bold" dir="rtl">{sub.definitionLughatan.ar}</span>
                        )}
                      </div>
                      <p className="text-xs text-ink leading-relaxed">
                        {sub.definitionLughatan.fr}
                      </p>
                    </div>
                  )}

                  {sub.definitionIstilahan && (
                    <div className="p-4 rounded-xl border border-line bg-soft/70">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="chip chip-idgham text-[11px] font-semibold">اصْطِلَاحاً — Définition Canonique</span>
                        {sub.definitionIstilahan.ar && (
                          <span className="font-ar text-sm text-good font-bold" dir="rtl">{sub.definitionIstilahan.ar}</span>
                        )}
                      </div>
                      <p className="text-xs text-ink leading-relaxed">
                        {sub.definitionIstilahan.fr}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 2. Mécanisme Physiologique & Posture Corporelle */}
              <div className="p-4 sm:p-5 rounded-xl border border-line bg-soft/40 mb-6 space-y-3.5">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-lapis shrink-0" />
                  <strong className="text-xs font-bold text-ink">
                    Mécanisme Physiologique & Posture des Organes
                  </strong>
                </div>

                {sub.physiologicalDetails ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                    {sub.physiologicalDetails.tongue && (
                      <div className="p-2.5 rounded-lg bg-card border border-line">
                        <div className="font-semibold text-ink flex items-center gap-1.5 mb-1">
                          <span>👅</span>
                          <span>Langue & Palais :</span>
                        </div>
                        <p className="text-muted leading-relaxed">{sub.physiologicalDetails.tongue}</p>
                      </div>
                    )}
                    {sub.physiologicalDetails.lips && (
                      <div className="p-2.5 rounded-lg bg-card border border-line">
                        <div className="font-semibold text-ink flex items-center gap-1.5 mb-1">
                          <span>👄</span>
                          <span>Lèvres & Mâchoire :</span>
                        </div>
                        <p className="text-muted leading-relaxed">{sub.physiologicalDetails.lips}</p>
                      </div>
                    )}
                    {sub.physiologicalDetails.vocalCords && (
                      <div className="p-2.5 rounded-lg bg-card border border-line">
                        <div className="font-semibold text-ink flex items-center gap-1.5 mb-1">
                          <span>🫁</span>
                          <span>Cordes Vocales (Jahr / Hams) :</span>
                        </div>
                        <p className="text-muted leading-relaxed">{sub.physiologicalDetails.vocalCords}</p>
                      </div>
                    )}
                    {sub.physiologicalDetails.airflow && (
                      <div className="p-2.5 rounded-lg bg-card border border-line">
                        <div className="font-semibold text-ink flex items-center gap-1.5 mb-1">
                          <span>👃</span>
                          <span>Canal Aérien & Résonance :</span>
                        </div>
                        <p className="text-muted leading-relaxed">{sub.physiologicalDetails.airflow}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-muted leading-relaxed pl-6">
                    {sub.mechanismFr}
                  </p>
                )}
              </div>

              {/* 3. Le « Pourquoi » de la Règle (Cause Phonétique) */}
              {sub.phoneticReasonFr && (
                <div className="p-4 rounded-xl border border-gilt/30 bg-gilt-soft/40 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-gilt shrink-0" />
                    <strong className="text-xs font-bold text-gilt">
                      Le « Pourquoi » de la Règle (Cause Phonétique)
                    </strong>
                  </div>
                  <p className="text-xs text-ink leading-relaxed">
                    {sub.phoneticReasonFr}
                  </p>
                </div>
              )}

              {/* 4. Versets du Matn Al-Jazariyyah */}
              {sub.matnJazariyyah && (
                <div className="p-4 sm:p-5 rounded-2xl border-2 border-gilt/40 bg-gilt-soft/20 mb-6 relative overflow-hidden">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gilt">
                      <Scroll className="w-4 h-4 shrink-0" />
                      <span>Matn Al-Jazariyyah (Ibn Al-Jazarī)</span>
                    </div>
                    {sub.matnJazariyyah.chapterNameAr && (
                      <span className="font-ar text-xs font-bold text-gilt" dir="rtl">{sub.matnJazariyyah.chapterNameAr}</span>
                    )}
                  </div>

                  <div className="p-3.5 rounded-xl bg-card/80 border border-gilt/20 text-center my-2">
                    <p className="font-ar text-lg sm:text-xl font-bold text-ink leading-[2] tracking-wide" dir="rtl">
                      {sub.matnJazariyyah.verseAr}
                    </p>
                  </div>

                  {sub.matnJazariyyah.transliteration && (
                    <p className="text-[11px] font-mono text-muted text-center mt-2 italic">
                      « {sub.matnJazariyyah.transliteration} »
                    </p>
                  )}

                  <p className="text-xs text-ink text-center mt-2 font-medium">
                    {sub.matnJazariyyah.translationFr}
                  </p>
                </div>
              )}
            </div>

            {/* Interactive Quranic Examples Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
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
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300 mb-3">
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
