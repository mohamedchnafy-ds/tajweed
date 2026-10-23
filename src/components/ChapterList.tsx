import React, { useState } from 'react';
import { CHAPTER_INDEX } from '../data/chaptersIndex';
import { UserStats } from '../types/tajweed';
import { AudioLines, Check, ChevronRight, Download, NotebookPen, Play } from 'lucide-react';
import { StarMark } from './ui';

interface ChapterListProps {
  onSelectChapter: (chapterNumber: number) => void;
  userStats: UserStats;
  onOpenMistakes: () => void;
  onOpenMakharij?: () => void;
  onOpenDataBackup: () => void;
}

/** Le livre découpé en 4 parties pédagogiques. */
const PARTS: { title: string; subtitle: string; from: number; to: number }[] = [
  { title: 'Les fondations', subtitle: 'Cadre, symboles, arrêt', from: 1, to: 3 },
  { title: 'Prolongations & Hamzah', subtitle: 'Mesurer les temps', from: 4, to: 6 },
  { title: 'Lettres sans voyelle', subtitle: 'Lām, Nūn, Mīm, Qalqalah', from: 7, to: 10 },
  { title: 'Perfectionnement', subtitle: 'Fusions, emphase, cas rares', from: 11, to: 16 },
];

/** Anneau de progression compact. */
const ProgressRing: React.FC<{ value: number; total: number }> = ({ value, total }) => {
  const r = 24;
  const c = 2 * Math.PI * r;
  const pct = total > 0 ? value / total : 0;
  return (
    <div className="relative w-14 h-14 shrink-0">
      <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90" aria-hidden="true">
        <circle cx="32" cy="32" r={r} fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="5" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="var(--gilt)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          className="transition-all duration-700"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-display text-sm tabular-nums">
        {value}/{total}
      </span>
    </div>
  );
};

export const ChapterList: React.FC<ChapterListProps> = ({
  onSelectChapter,
  userStats,
  onOpenMistakes,
  onOpenMakharij,
  onOpenDataBackup,
}) => {
  const getScore = (n: number) => userStats.chapterScores[`chap-${n}`] || 0;
  const isCompleted = (n: number) => userStats.completedChapters.includes(`chap-${n}`);

  const unresolvedCount = userStats.mistakeHistory.filter((m) => !m.retriedSuccessfully).length;
  const completedCount = CHAPTER_INDEX.filter((c) => isCompleted(c.number)).length;

  const next = CHAPTER_INDEX.find((ch) => !isCompleted(ch.number)) || CHAPTER_INDEX[0];

  // L'onglet actif s'ouvre par défaut sur la partie contenant le cours en cours
  const [activePartIdx, setActivePartIdx] = useState<number>(() => {
    const nextNum = next?.number || 1;
    const pIdx = PARTS.findIndex((p) => nextNum >= p.from && nextNum <= p.to);
    return pIdx !== -1 ? pIdx : 0;
  });

  const currentPart = PARTS[activePartIdx];
  const partChapters = CHAPTER_INDEX.filter((c) => c.number >= currentPart.from && c.number <= currentPart.to);

  return (
    <div className="pb-16 pt-6 sm:pt-10 space-y-8 animate-enter">
      {/* Reprise */}
      {next && (
        <section className="relative overflow-hidden rounded-card bg-lapis text-lapis-ink p-5 sm:p-7">
          <StarMark className="pointer-events-none absolute -right-10 -top-10 w-44 h-44 text-gilt opacity-[0.14]" />
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4 min-w-0">
              <ProgressRing value={completedCount} total={CHAPTER_INDEX.length} />
              <div className="min-w-0">
                <p className="text-xs opacity-75">
                  {completedCount === 0 ? 'Pour commencer' : 'Reprendre'} · Chapitre {next.number}
                </p>
                <h1 className="font-display text-xl sm:text-2xl leading-tight">
                  {next.short}
                </h1>
                <p className="font-ui-ar text-lg leading-normal opacity-80" dir="rtl">
                  {next.titleAr}
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectChapter(next.number)}
              className="btn h-11 px-6 bg-gilt text-white dark:text-paper hover:opacity-90 self-start sm:self-auto"
            >
              <Play className="w-4 h-4 fill-current" />
              {completedCount > 0 ? 'Continuer' : 'Commencer'}
            </button>
          </div>
        </section>
      )}

      {/* Outils */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {onOpenMakharij && (
          <ToolLink
            icon={<AudioLines className="w-5 h-5" />}
            title="Labo Makhārij & Sifāt"
            subtitle="Points d'articulation et attributs des lettres"
            onClick={onOpenMakharij}
          />
        )}
        <ToolLink
          icon={<NotebookPen className="w-5 h-5" />}
          title="Cahier d'erreurs"
          subtitle={
            unresolvedCount > 0
              ? `${unresolvedCount} question${unresolvedCount > 1 ? 's' : ''} à revoir`
              : 'Aucune erreur en attente'
          }
          onClick={onOpenMistakes}
        />
      </div>

      {/* Programme */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl text-ink">Programme</h2>
            <p className="text-sm text-muted">{currentPart.subtitle}</p>
          </div>
          <div className="segmented self-start sm:self-auto">
            {PARTS.map((part, pIdx) => (
              <button key={pIdx} aria-pressed={activePartIdx === pIdx} onClick={() => setActivePartIdx(pIdx)}>
                {part.title}
              </button>
            ))}
          </div>
        </div>

        <ul className="surface divide-y divide-line overflow-hidden">
          {partChapters.map((ch) => {
            const isDone = isCompleted(ch.number);
            const isNext = next?.number === ch.number && !isDone;
            const score = getScore(ch.number);

            return (
              <li key={ch.number}>
                <button
                  onClick={() => onSelectChapter(ch.number)}
                  className="w-full flex items-center gap-4 p-4 sm:p-5 text-left transition-colors hover:bg-soft/60 group"
                >
                  <span
                    className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-sm tabular-nums ${
                      isDone
                        ? 'bg-good text-white'
                        : isNext
                        ? 'bg-gilt text-white dark:text-paper font-semibold'
                        : 'border border-line text-muted'
                    }`}
                  >
                    {isDone ? <Check className="w-4 h-4" strokeWidth={3} /> : ch.number}
                  </span>

                  <span className="flex-1 min-w-0">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="font-display text-[17px] text-ink leading-snug group-hover:text-lapis transition-colors">
                        {ch.short}
                      </span>
                      <span className="font-ui-ar text-lg text-lapis shrink-0 hidden sm:inline" dir="rtl">
                        {ch.titleAr}
                      </span>
                    </span>
                    <span className="block text-sm text-muted leading-relaxed mt-0.5 line-clamp-2">
                      {ch.pitch}
                    </span>
                    <span className="flex items-center gap-2 mt-1.5 text-xs text-muted">
                      ~{ch.estimatedMinutes} min
                      {score > 0 && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className={score >= 80 ? 'text-good font-semibold' : ''}>{score} %</span>
                        </>
                      )}
                      {isNext && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-gilt font-semibold">À suivre</span>
                        </>
                      )}
                    </span>
                  </span>

                  <ChevronRight className="w-4 h-4 text-muted shrink-0 transition-transform group-hover:translate-x-0.5" />
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted">
        <p className="flex items-start gap-2">
          <StarMark className="w-4 h-4 text-gilt shrink-0" />
          <span>
            Riwāyah Hafs ʿan ʿĀṣim · d'après le <em>Learners' Handbook of Tajweed</em> d'Islām Fekry.
          </span>
        </p>
        <button onClick={onOpenDataBackup} className="btn btn-ghost h-8 px-3 text-xs self-start sm:self-auto">
          <Download className="w-3.5 h-3.5" />
          Sauvegarder ma progression
        </button>
      </footer>
    </div>
  );
};

const ToolLink: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
}> = ({ icon, title, subtitle, onClick }) => (
  <button
    onClick={onClick}
    className="surface p-4 flex items-center gap-3 text-left transition-colors hover:border-muted/40 group"
  >
    <span className="w-10 h-10 rounded-xl bg-lapis-bg text-lapis flex items-center justify-center shrink-0">
      {icon}
    </span>
    <span className="flex-1 min-w-0">
      <span className="block text-sm font-semibold text-ink truncate">{title}</span>
      <span className="block text-xs text-muted truncate">{subtitle}</span>
    </span>
    <ChevronRight className="w-4 h-4 text-muted shrink-0 transition-transform group-hover:translate-x-0.5" />
  </button>
);
