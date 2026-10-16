import React from 'react';
import { Chapter } from '../types/tajweed';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { StepHeader, StarMark } from './ui';

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
    if (chapter.number === 1) {
      return 'Le Tajwīd pratique est une obligation personnelle (Farḍ \'Ayn) pour préserver le sens : éliminez impérativement tout Lahn Jalī (erreur de voyelle ou de consonne altérant le texte) par respect et piété pour la parole d\'Allah.';
    }
    if (chapter.number === 2) {
      return 'Les symboles du Mushaf sont les gardiens du sens : observez scrupuleusement le Waqf Lāzim (مـ) pour ne pas attribuer de faux propos, ne coupez jamais sur un (لا), et dans la triade (ۛ...ۛ), arrêtez-vous à l\'un mais jamais aux deux à la fois !';
    }
    if (chapter.number === 8) {
      return 'Regardez toujours la lettre qui suit le Nūn sans voyelle : Gorge = Clarté (Izhār), Yarmalūn = Fusion (Idghām), Bā\' = Mīm (Iqlāb), et le reste = Dissimulation avec 2 temps de Ghunnah (Ikhfā\').';
    }
    return 'Dès qu\'une des 5 lettres de Qutb Jadd (قُطْبُ جَدٍّ) porte un soukoûn, libérez le souffle par un rebond acoustique net sans jamais bouger la mâchoire ni ajouter de voyelle parasite.';
  };

  const ruleColors = ['var(--izhar)', 'var(--idgham)', 'var(--iqlab)', 'var(--ikhfa)', 'var(--qalqalah)', 'var(--gold)'];

  return (
    <>
      <StepHeader
        step={6}
        title="L'essentiel à retenir"
        description="Relisez cette synthèse avant chaque séance de récitation."
      />

      {/* Règle d'or */}
      <figure className="relative rounded-[var(--r)] bg-lapis text-lapis-ink dark:bg-lapis-bg dark:text-ink px-6 py-10 sm:px-12 sm:py-14 overflow-hidden">
        <StarMark className="absolute -right-20 -bottom-24 w-80 h-80 text-gilt opacity-[0.12]" />
        <p className="relative text-sm font-semibold opacity-75 mb-4">La règle d'or du chapitre</p>
        <blockquote className="relative font-display text-[22px] sm:text-[28px] leading-[1.4] max-w-3xl">
          {getGoldenRule()}
        </blockquote>
      </figure>

      {/* Les règles */}
      <section>
        <h2 className="font-display text-2xl text-ink mb-4">Les règles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {chapter.subrules.map((sub, i) => (
            <article
              key={sub.id}
              className="surface p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="h-1 w-8 rounded-full" style={{ background: ruleColors[i % ruleColors.length] }} />
                <p className="font-ui-ar text-[28px] leading-[1.6] text-right" dir="rtl" style={{ color: ruleColors[i % ruleColors.length] }}>
                  {sub.nameAr}
                </p>
              </div>
              <h3 className="font-display text-lg leading-snug text-ink mt-3">{sub.nameFr}</h3>
              {sub.mnemonic && (
                <p className="mt-3 text-sm text-ink">
                  <span className="text-muted">Lettres : </span>
                  {sub.mnemonic}
                </p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-muted">{sub.definitionFr}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Points clés */}
      <section>
        <h2 className="font-display text-2xl text-ink mb-4">Points clés</h2>
        <ul className="surface divide-y divide-line">
          {chapter.infographicPoints.map((point, idx) => (
            <li key={idx} className="px-6 py-4 flex items-start gap-4">
              <StarMark className="w-4 h-4 text-gilt shrink-0 mt-1" />
              <p className="text-[15px] leading-relaxed text-ink">{point}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button onClick={onRestartSteps} className="btn btn-secondary">
          <RotateCcw className="w-4 h-4" />
          Revoir les étapes
        </button>
        <button onClick={onGoToNextChapter} className="btn btn-primary">
          {chapter.number === 1
            ? 'Chapitre suivant (Symboles Coraniques)'
            : chapter.number === 2
            ? 'Chapitre suivant (Nūn Sākinah)'
            : chapter.number === 8
            ? 'Chapitre suivant (Qalqalah)'
            : 'Retour au sommaire'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};
