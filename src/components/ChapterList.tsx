import React from 'react';
import { ALL_BOOK_CHAPTERS } from '../data/chaptersData';
import { UserStats, Chapter } from '../types/tajweed';
import { Check, ChevronRight, Clock, Lock, NotebookPen, Play, Trophy } from 'lucide-react';
import { StarMark } from './ui';

interface ChapterListProps {
  onSelectChapter: (chapterNumber: number) => void;
  userStats: UserStats;
  pilotChapters: Chapter[];
  onOpenMistakes: () => void;
}

/** Titres courts + pictogramme : lisibles d'un coup d'œil sur un écran de téléphone. */
const CHAPTER_VISUALS: Record<number, { short: string; icon: string }> = {
  1: { short: 'Les bases & le Lahn', icon: '📜' },
  2: { short: 'Symboles du Mushaf', icon: '🚦' },
  3: { short: 'Arrêt & reprise', icon: '⏸️' },
  4: { short: 'Madd naturel', icon: '📏' },
  5: { short: 'Madd secondaire', icon: '⏳' },
  6: { short: 'Les Hamzahs', icon: '👻' },
  7: { short: 'Lām sākinah', icon: '🌙' },
  8: { short: 'Nūn sākinah & Tanwīn', icon: '👃' },
  9: { short: 'Mīm sākinah', icon: '👄' },
  10: { short: 'Qalqalah', icon: '🏀' },
  11: { short: 'Assimilation (Idghām)', icon: '🔗' },
  12: { short: 'Tafkhīm & Tarqīq', icon: '🏋️' },
  13: { short: 'Deux soukoûns', icon: '🤝' },
  14: { short: 'Lettres isolées', icon: '🔠' },
  15: { short: 'Distinctions subtiles', icon: '🔍' },
  16: { short: 'Cas particuliers', icon: '✨' },
};

/** Le livre découpé en 4 parties, dans l'ordre pédagogique. */
const PARTS: { title: string; subtitle: string; from: number; to: number }[] = [
  { title: 'Les fondations', subtitle: 'Cadre, symboles, arrêt', from: 1, to: 3 },
  { title: 'Prolongations & Hamzah', subtitle: 'Mesurer les temps', from: 4, to: 6 },
  { title: 'Lettres sans voyelle', subtitle: 'Lām, Nūn, Mīm, Qalqalah', from: 7, to: 10 },
  { title: 'Perfectionnement', subtitle: 'Fusions, emphase, cas rares', from: 11, to: 16 },
];

/** Anneau de progression compact. */
const ProgressRing: React.FC<{ value: number; total: number }> = ({ value, total }) => {
  const r = 26;
  const c = 2 * Math.PI * r;
  const pct = total > 0 ? value / total : 0;
  return (
    <div className="relative w-16 h-16 shrink-0">
      <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90" aria-hidden="true">
        <circle cx="32" cy="32" r={r} fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="6" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="var(--gilt)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          className="transition-all duration-700"
        />
      </svg>
      <span className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <span className="font-display text-lg font-semibold tabular-nums">{value}</span>
        <span className="text-[10px] opacity-70 tabular-nums">/{total}</span>
      </span>
    </div>
  );
};

export const ChapterList: React.FC<ChapterListProps> = ({
  onSelectChapter,
  userStats,
  pilotChapters,
  onOpenMistakes,
}) => {
  const getScore = (n: number) => userStats.chapterScores[`chap-${n}`] || 0;
  const isCompleted = (n: number) => userStats.completedChapters.includes(`chap-${n}`);

  const unresolvedCount = userStats.mistakeHistory.filter((m) => !m.retriedSuccessfully).length;
  const availableCount = pilotChapters.length;
  const completedCount = pilotChapters.filter((c) => isCompleted(c.number)).length;

  const next = pilotChapters.find((ch) => !isCompleted(ch.number)) || pilotChapters[0];
  const nextVisual = next ? CHAPTER_VISUALS[next.number] : undefined;

  const scores = pilotChapters.map((c) => getScore(c.number)).filter((s) => s > 0);
  const avgScore = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;

  return (
    <div className="pb-16 pt-4 sm:pt-8 space-y-6 sm:space-y-8">
      {/* ================= CARTE « CONTINUER » ================= */}
      {next && (
        <section className="relative overflow-hidden rounded-[24px] bg-lapis text-lapis-ink p-5 sm:p-7 shadow-sm animate-enter">
          <StarMark className="pointer-events-none absolute -right-12 -top-12 w-48 h-48 text-gilt opacity-[0.18]" />

          <div className="relative flex items-center gap-4">
            <ProgressRing value={completedCount} total={availableCount} />
            <div className="min-w-0">
              <p className="text-xs font-semibold opacity-75">Votre parcours</p>
              <p className="font-display text-[19px] sm:text-2xl leading-tight">
                {completedCount === 0
                  ? 'Bienvenue, commençons !'
                  : completedCount >= availableCount
                  ? 'Parcours terminé, mā shāʾ Allāh !'
                  : `${completedCount} chapitre${completedCount > 1 ? 's' : ''} validé${completedCount > 1 ? 's' : ''}`}
              </p>
              {avgScore !== null && (
                <p className="mt-0.5 text-xs opacity-75 flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5" /> Score moyen aux quiz : {avgScore} %
                </p>
              )}
            </div>
          </div>

          <button
            onClick={() => onSelectChapter(next.number)}
            className="relative mt-5 w-full rounded-2xl bg-white/10 hover:bg-white/15 dark:bg-black/10 dark:hover:bg-black/15 border border-white/15 dark:border-black/10 p-3 flex items-center gap-3 text-left transition-colors active:scale-[0.99]"
          >
            <span className="w-12 h-12 rounded-xl bg-white/15 dark:bg-black/10 flex items-center justify-center text-2xl shrink-0">
              {nextVisual?.icon}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[11px] font-semibold opacity-75">
                {completedCount > 0 ? 'À suivre' : 'Pour commencer'} · Chapitre {next.number}
              </span>
              <span className="block font-display text-base sm:text-lg font-semibold leading-tight truncate">
                {nextVisual?.short ?? next.titleFr}
              </span>
              <span className="block font-ui-ar text-base leading-normal opacity-80 truncate" dir="rtl">
                {next.titleAr}
              </span>
            </span>
          </button>

          <button
            onClick={() => onSelectChapter(next.number)}
            className="relative mt-3 w-full h-12 rounded-full bg-gilt text-white font-semibold text-[15px] flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-transform"
          >
            <Play className="w-4 h-4 fill-current" />
            {completedCount > 0 ? 'Continuer' : 'Commencer'}
          </button>
        </section>
      )}

      {/* ================= RAPPEL CAHIER D'ERREURS ================= */}
      {unresolvedCount > 0 && (
        <button
          onClick={onOpenMistakes}
          className="w-full surface px-4 py-3 flex items-center gap-3 text-left hover:border-gilt transition-colors active:scale-[0.99]"
        >
          <span className="w-10 h-10 rounded-xl bg-gilt-soft text-gilt flex items-center justify-center shrink-0">
            <NotebookPen className="w-5 h-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-ink">
              {unresolvedCount} erreur{unresolvedCount > 1 ? 's' : ''} à revoir
            </span>
            <span className="block text-xs text-muted truncate">2 minutes pour consolider vos points faibles</span>
          </span>
          <ChevronRight className="w-5 h-5 text-muted shrink-0" />
        </button>
      )}

      {/* ================= PARCOURS PAR PARTIES ================= */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        {PARTS.map((part, partIdx) => {
          const chapters = ALL_BOOK_CHAPTERS.filter((c) => c.number >= part.from && c.number <= part.to);
          const available = chapters.filter((c) => c.isPilot);
          const done = available.filter((c) => isCompleted(c.number)).length;

          return (
            <section key={part.title} className="animate-enter" style={{ animationDelay: `${partIdx * 60}ms` }}>
              <header className="flex items-end justify-between gap-3 mb-2.5 px-1">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gilt">Partie {partIdx + 1}</p>
                  <h2 className="font-display text-xl text-ink leading-tight">{part.title}</h2>
                  <p className="text-xs text-muted">{part.subtitle}</p>
                </div>
                {available.length > 0 && (
                  <span className="text-xs font-semibold text-muted tabular-nums shrink-0">
                    {done}/{available.length}
                  </span>
                )}
              </header>

              <ol className="surface overflow-hidden divide-y divide-line">
                {chapters.map((ch) => {
                  const visual = CHAPTER_VISUALS[ch.number];
                  const pilot = pilotChapters.find((p) => p.number === ch.number);
                  const isDone = isCompleted(ch.number);
                  const isNext = next?.number === ch.number && !isDone;
                  const score = getScore(ch.number);

                  if (!ch.isPilot || !pilot) {
                    return (
                      <li key={ch.number} className="flex items-center gap-3 px-3.5 py-3 opacity-55 select-none">
                        <span className="w-11 h-11 rounded-xl bg-soft flex items-center justify-center text-xl grayscale shrink-0">
                          {visual?.icon}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[11px] text-muted">Chapitre {ch.number}</span>
                          <span className="block text-[15px] font-semibold text-ink truncate">
                            {visual?.short ?? ch.titleFr}
                          </span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted shrink-0">
                          <Lock className="w-3.5 h-3.5" /> Bientôt
                        </span>
                      </li>
                    );
                  }

                  return (
                    <li key={ch.number}>
                      <button
                        onClick={() => onSelectChapter(ch.number)}
                        className={`group w-full flex items-center gap-3 px-3.5 py-3 text-left transition-colors active:bg-soft hover:bg-soft/60 ${
                          isNext ? 'bg-gilt-soft' : ''
                        }`}
                      >
                        {/* Pictogramme + statut */}
                        <span className="relative shrink-0">
                          <span
                            className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${
                              isNext ? 'bg-card ring-2 ring-gilt' : 'bg-soft'
                            }`}
                          >
                            {visual?.icon}
                          </span>
                          {isDone && (
                            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-good text-white flex items-center justify-center ring-2 ring-card">
                              <Check className="w-3 h-3" strokeWidth={3} />
                            </span>
                          )}
                        </span>

                        {/* Textes */}
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-1.5 text-[11px] text-muted">
                            <span>Chapitre {ch.number}</span>
                            <span aria-hidden="true">·</span>
                            <Clock className="w-3 h-3" />
                            <span>{pilot.estimatedMinutes} min</span>
                            {isNext && (
                              <span className="ml-1 px-1.5 py-px rounded-full bg-gilt text-white text-[10px] font-bold">
                                À suivre
                              </span>
                            )}
                          </span>
                          <span className="block text-[15px] font-semibold text-ink leading-snug truncate group-hover:text-lapis transition-colors">
                            {visual?.short ?? ch.titleFr}
                          </span>
                          <span className="block font-ui-ar text-[15px] leading-normal text-lapis truncate" dir="rtl">
                            {ch.titleAr}
                          </span>
                        </span>

                        {/* Score ou chevron */}
                        {score > 0 ? (
                          <span
                            className={`shrink-0 text-xs font-bold tabular-nums px-2 py-1 rounded-full ${
                              score >= 80 ? 'bg-good-bg text-good' : 'bg-soft text-ink'
                            }`}
                          >
                            {score}%
                          </span>
                        ) : (
                          <ChevronRight className="w-5 h-5 text-muted shrink-0 transition-transform group-hover:translate-x-0.5" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
      </div>

      <p className="pt-2 flex items-start gap-2 text-xs text-muted px-1">
        <StarMark className="w-4 h-4 text-gilt shrink-0" />
        <span>
          Riwāyah Hafs ʿan ʿĀṣim · d'après le <em>Learners' Handbook of Tajweed</em> de Islām Fekry (Arabic101).
        </span>
      </p>
    </div>
  );
};
