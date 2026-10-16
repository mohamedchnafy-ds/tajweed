import React from 'react';
import { Chapter } from '../types/tajweed';
import { Layers, CheckCircle2, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

interface ChapterPosterProps {
  chapter: Chapter;
  onGoToNextChapter: () => void;
  onRestartSteps: () => void;
}

export const ChapterPoster: React.FC<ChapterPosterProps> = ({
  chapter,
  onGoToNextChapter,
  onRestartSteps,
}) => {
  const getGoldenRule = () => {
    if (chapter.number === 8) {
      return 'Regardez toujours la lettre qui SUIT le Nūn sans voyelle : Gorge = Clarté (Izhār), Yarmalūn = Fusion (Idghām), Bā\' = Mīm (Iqlāb), et le reste = Dissimulation avec 2 temps de Ghunnah (Ikhfā\').';
    }
    return 'Dès qu\'une des 5 lettres de Qutb Jadd (قُطْبُ جَدٍّ) porte un soukoûn, libérez le souffle par un rebond acoustique net sans jamais bouger la mâchoire ni ajouter de voyelle parasite.';
  };

  return (
    <div className="animate-enter space-y-6">
      
      {/* Header */}
      <div>
        <p className="text-[11px] uppercase tracking-wider font-bold text-muted mb-1 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-gold" />
          <span>Étape 6 · Fiche Synthèse & Règle d'Or</span>
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-normal text-ink mb-1">
          L'Essentiel en Un Coup d'Œil
        </h1>
        <p className="text-xs sm:text-sm text-muted">
          La méthode en une phrase et le récapitulatif visuel du chapitre.
        </p>
      </div>

      {/* La Méthode en une phrase (Gold Card) */}
      <div className="p-6 rounded-2xl bg-gold-bg border-2 border-gold/40 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
          <Sparkles className="w-4 h-4 text-gold" />
          <span>La Règle d'Or du Chapitre (À mémoriser)</span>
        </div>
        <p className="font-display text-base sm:text-lg text-ink font-semibold leading-relaxed">
          « {getGoldenRule()} »
        </p>
      </div>

      {/* Poster Bullet Points from the book */}
      <div className="p-6 rounded-2xl bg-card border border-line shadow-xs space-y-4">
        <h3 className="font-display text-lg font-bold text-ink">
          Points Clés de l'Infographie
        </h3>

        <div className="space-y-3">
          {chapter.infographicPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-soft/70 border border-line/60 flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-ink text-paper font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Rules & Mnemonic Table */}
      <div className="p-6 rounded-2xl bg-card border border-line shadow-xs">
        <h3 className="font-display text-lg font-bold text-ink mb-4">
          Tableau Récapitulatif
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {chapter.subrules.map((sub) => (
            <div
              key={sub.id}
              className="p-4 rounded-xl border border-line bg-paper/60 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm text-ink">{sub.nameFr}</span>
                <span className="font-ar font-bold text-lg text-muted" dir="rtl">{sub.nameAr}</span>
              </div>
              {sub.mnemonic && (
                <div className="text-xs font-mono text-idgham font-semibold">
                  Formule : {sub.mnemonic}
                </div>
              )}
              <p className="text-xs text-muted leading-relaxed">
                {sub.definitionFr}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-line">
        <button
          onClick={onRestartSteps}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-line bg-card hover:bg-soft text-xs font-semibold text-muted hover:text-ink transition-colors shadow-xs"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Revoir les étapes</span>
        </button>

        <button
          onClick={onGoToNextChapter}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ink text-paper text-xs font-semibold hover:opacity-90 transition-opacity shadow-xs"
        >
          <span>Chapitre suivant</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
