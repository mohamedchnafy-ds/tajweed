import React from 'react';
import { Chapter } from '../types/tajweed';
import { getGoldenRule } from '../data/goldenRules';
import { StepHeader, StarMark } from './ui';

interface ChapterPosterProps {
  chapter: Chapter;
}

const RULE_COLORS = ['var(--izhar)', 'var(--idgham)', 'var(--iqlab)', 'var(--ikhfa)', 'var(--qalqalah)', 'var(--gold)'];

export const ChapterPoster: React.FC<ChapterPosterProps> = ({ chapter }) => (
  <>
    <StepHeader
      title="L'essentiel à retenir"
      description="Relisez cette synthèse avant chaque séance de récitation."
    />

    {/* Règle d'or */}
    <figure className="relative rounded-card bg-lapis text-lapis-ink dark:bg-lapis-bg dark:text-ink px-6 py-8 sm:px-10 sm:py-10 overflow-hidden">
      <StarMark className="absolute -right-20 -bottom-24 w-80 h-80 text-gilt opacity-[0.12]" />
      <p className="relative text-sm font-semibold opacity-75 mb-3">La règle d'or du chapitre</p>
      <blockquote className="relative font-display text-xl sm:text-2xl leading-[1.45] max-w-3xl">
        {getGoldenRule(chapter.number)}
      </blockquote>
    </figure>

    {/* Les règles */}
    <section>
      <h2 className="font-display text-2xl text-ink mb-4">Les règles</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {chapter.subrules.map((sub, i) => {
          const color = RULE_COLORS[i % RULE_COLORS.length];
          return (
            <article key={sub.id} className="surface p-5 sm:p-6 border-t-[3px]" style={{ borderTopColor: color }}>
              <p className="font-ui-ar text-2xl leading-[1.6]" dir="rtl" style={{ color }}>
                {sub.nameAr}
              </p>
              <h3 className="font-display text-lg leading-snug text-ink mt-1">{sub.nameFr}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{sub.definitionFr}</p>

              {sub.letters && sub.letters.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5" dir="rtl">
                  {sub.letters.map((lettre, lIdx) => (
                    <span
                      key={lIdx}
                      className="w-8 h-8 rounded-lg bg-soft flex items-center justify-center font-ar text-base"
                      style={{ color }}
                    >
                      {lettre}
                    </span>
                  ))}
                </div>
              )}

              {sub.mnemonic && (
                <ul className="mt-4 pt-3 border-t border-line space-y-1 text-sm text-ink">
                  {sub.mnemonic.split('|').map((part, pIdx) => (
                    <li key={pIdx}>{part.trim()}</li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>

    {/* Points clés */}
    <section>
      <h2 className="font-display text-2xl text-ink mb-4">Points clés</h2>
      <ul className="surface divide-y divide-line">
        {chapter.infographicPoints.map((point, idx) => (
          <li key={idx} className="px-5 sm:px-6 py-4 flex items-start gap-3">
            <StarMark className="w-4 h-4 text-gilt shrink-0 mt-1" />
            <p className="text-[15px] leading-relaxed text-ink">{point}</p>
          </li>
        ))}
      </ul>
    </section>
  </>
);
