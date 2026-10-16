import React, { useState } from 'react';
import { ALL_BOOK_CHAPTERS } from '../data/chaptersData';
import { UserStats, Chapter } from '../types/tajweed';
import { ArrowRight, Check, Clock, NotebookPen } from 'lucide-react';
import { Medallion, StarMark } from './ui';

interface ChapterListProps {
  onSelectChapter: (chapterNumber: number) => void;
  userStats: UserStats;
  pilotChapters: Chapter[];
  onOpenMistakes: () => void;
}

type Filter = 'all' | 'beginner' | 'intermediate' | 'advanced';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'beginner', label: 'Débutant' },
  { id: 'intermediate', label: 'Intermédiaire' },
  { id: 'advanced', label: 'Avancé' },
];

const LEVEL_LABEL: Record<string, string> = {
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  advanced: 'Avancé',
};

export const ChapterList: React.FC<ChapterListProps> = ({
  onSelectChapter,
  userStats,
  pilotChapters,
  onOpenMistakes,
}) => {
  const [filter, setFilter] = useState<Filter>('all');

  const filteredChapters = ALL_BOOK_CHAPTERS.filter((ch) => filter === 'all' || ch.category === filter);

  const getScore = (chapterNum: number) => userStats.chapterScores[`chap-${chapterNum}`] || 0;
  const isCompleted = (chapterNum: number) => userStats.completedChapters.includes(`chap-${chapterNum}`);

  const unresolvedCount = userStats.mistakeHistory.filter(m => !m.retriedSuccessfully).length;
  const completedCount = userStats.completedChapters.length;
  const progress = Math.round((completedCount / ALL_BOOK_CHAPTERS.length) * 100);

  return (
    <div className="pb-16">
      {/* Ouverture */}
      <section className="pt-10 sm:pt-16 pb-12 sm:pb-16 grid sm:grid-cols-[1fr_auto] items-end gap-8">
        <div className="max-w-xl animate-enter">
          <h1 className="font-display text-[40px] sm:text-[56px] leading-[1.05] tracking-[-0.02em] text-ink">
            Apprenez à réciter le Coran, règle par règle.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Seize chapitres pour maîtriser le Tajwīd selon la lecture de Hafs ʿan ʿĀṣim :
            une carte des règles, des démonstrations animées, l'écoute des versets et des quiz pour vérifier vos acquis.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button onClick={() => onSelectChapter(pilotChapters[0]?.number ?? 8)} className="btn btn-primary h-12 px-6 text-[15px]">
              {completedCount > 0 ? 'Reprendre' : 'Commencer le premier chapitre'}
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 text-sm text-muted">
              <div className="w-28 h-1.5 rounded-full bg-line overflow-hidden" aria-hidden="true">
                <div className="h-full bg-gilt rounded-full" style={{ width: `${progress}%` }} />
              </div>
              <span>{completedCount} sur {ALL_BOOK_CHAPTERS.length} chapitres terminés</span>
            </div>
          </div>
        </div>

        <p
          className="hidden sm:block font-ui-ar text-[120px] leading-none text-lapis select-none"
          dir="rtl"
          aria-hidden="true"
        >
          التَّجْوِيد
        </p>
      </section>

      {unresolvedCount > 0 && (
        <button
          onClick={onOpenMistakes}
          className="w-full mb-10 surface px-5 py-4 flex items-center justify-between gap-4 text-left hover:border-gilt transition-colors"
        >
          <span className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-gilt-soft text-gilt flex items-center justify-center shrink-0">
              <NotebookPen className="w-4 h-4" />
            </span>
            <span className="text-[15px] text-ink">
              {unresolvedCount} question{unresolvedCount > 1 ? 's' : ''} à revoir dans votre cahier d'erreurs
            </span>
          </span>
          <span className="text-sm font-semibold text-lapis shrink-0">Réviser</span>
        </button>
      )}

      {/* Chapitres disponibles */}
      <section>
        <h2 className="font-display text-2xl text-ink mb-5">Disponibles maintenant</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {pilotChapters.map((ch) => {
            const score = getScore(ch.number);
            const done = isCompleted(ch.number);
            return (
              <button
                key={ch.id}
                onClick={() => onSelectChapter(ch.number)}
                className="group surface p-6 text-left flex flex-col gap-5 hover:border-lapis/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <Medallion value={ch.number} size="lg" tone={done ? 'good' : 'gilt'} />
                  <p className="font-ui-ar text-[26px] leading-[1.6] text-ink text-right" dir="rtl">
                    {ch.titleAr}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[22px] leading-snug text-ink">{ch.titleFr}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">{ch.summaryFr}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-line flex items-center justify-between text-sm">
                  <span className="flex items-center gap-4 text-muted">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {ch.estimatedMinutes} min
                    </span>
                    {score > 0 && <span>Meilleur score {score} %</span>}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-lapis">
                    {done ? 'Revoir' : 'Ouvrir'}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Sommaire complet */}
      <section className="mt-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <h2 className="font-display text-2xl text-ink">Le programme complet</h2>
          <div className="segmented self-start overflow-x-auto no-scrollbar max-w-full">
            {FILTERS.map(f => (
              <button key={f.id} aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <ol className="surface divide-y divide-line overflow-hidden">
          {filteredChapters.map((ch) => {
            const done = isCompleted(ch.number);
            const content = (
              <>
                <Medallion value={ch.number} tone={ch.isPilot ? (done ? 'good' : 'gilt') : 'muted'} />
                <div className="min-w-0 flex-1">
                  <p className={`text-[15px] leading-snug ${ch.isPilot ? 'text-ink font-semibold' : 'text-ink/80'}`}>
                    {ch.titleFr}
                  </p>
                  <p className="text-xs text-muted mt-0.5">{LEVEL_LABEL[ch.category]}</p>
                </div>
                <p className="hidden md:block font-ui-ar text-xl text-muted shrink-0" dir="rtl">{ch.titleAr}</p>
                <span className="sm:w-24 shrink-0 text-right text-sm">
                  {ch.isPilot ? (
                    done ? (
                      <span className="inline-flex items-center gap-1 text-good font-semibold">
                        <Check className="w-4 h-4" /> Terminé
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-lapis font-semibold">
                        Ouvrir <ArrowRight className="w-4 h-4" />
                      </span>
                    )
                  ) : (
                    <span className="text-muted">Bientôt</span>
                  )}
                </span>
              </>
            );
            return (
              <li key={ch.number}>
                {ch.isPilot ? (
                  <button
                    onClick={() => onSelectChapter(ch.number)}
                    className="w-full px-4 sm:px-5 py-3.5 flex items-center gap-4 text-left hover:bg-soft transition-colors"
                  >
                    {content}
                  </button>
                ) : (
                  <div className="px-4 sm:px-5 py-3.5 flex items-center gap-4">{content}</div>
                )}
              </li>
            );
          })}
        </ol>

        <p className="mt-6 flex items-start gap-2 text-sm text-muted">
          <StarMark className="w-4 h-4 text-gilt shrink-0 mt-0.5" />
          <span>D'après le <em>Learners' Handbook of Tajweed</em> de Islām Fekry (Arabic101).</span>
        </p>
      </section>
    </div>
  );
};
