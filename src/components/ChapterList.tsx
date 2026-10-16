import React, { useState } from 'react';
import { ALL_BOOK_CHAPTERS } from '../data/chaptersData';
import { UserStats, Chapter } from '../types/tajweed';
import { CheckCircle2, ChevronRight, Sparkles, BookOpen, AlertCircle, Layers } from 'lucide-react';

interface ChapterListProps {
  onSelectChapter: (chapterNumber: number) => void;
  userStats: UserStats;
  pilotChapters: Chapter[];
  onOpenMistakes: () => void;
}

export const ChapterList: React.FC<ChapterListProps> = ({
  onSelectChapter,
  userStats,
  pilotChapters,
  onOpenMistakes,
}) => {
  const [filter, setFilter] = useState<'all' | 'pilot' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const filteredChapters = ALL_BOOK_CHAPTERS.filter((ch) => {
    if (filter === 'pilot') return ch.isPilot;
    if (filter === 'all') return true;
    return ch.category === filter;
  });

  const getScore = (chapterNum: number) => {
    return userStats.chapterScores[`chap-${chapterNum}`] || 0;
  };

  const isCompleted = (chapterNum: number) => {
    return userStats.completedChapters.includes(`chap-${chapterNum}`);
  };

  const unresolvedCount = userStats.mistakeHistory.filter(m => !m.retriedSuccessfully).length;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 animate-enter">
      
      {/* Hero Banner: Warm Paper & Serif Style */}
      <div className="mb-8 border-b border-line pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="ref-tag">
                Hafs 'an 'Āsim • Ash-Shātibiyyah
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-normal text-ink mb-2">
              Le Tajwīd Simplifié
            </h1>
            <p className="text-xs sm:text-sm text-muted max-w-xl">
              Parcours interactif en 6 étapes inspiré du chef-d'œuvre <em>"Learners' Handbook of Tajweed"</em> (Drs. Islām Fekry, Arabic101).
            </p>
          </div>

          {/* Quick Stats Card */}
          <div className="flex items-center gap-4 bg-card px-5 py-3 rounded-2xl border border-line shadow-xs self-start sm:self-auto">
            <div>
              <div className="text-[10px] text-muted font-bold uppercase tracking-wider">Maîtrise</div>
              <div className="text-xl font-bold font-mono text-idgham">
                {pilotChapters.length > 0 
                  ? Math.round(pilotChapters.reduce((acc, c) => acc + (userStats.chapterScores[c.id] || 0), 0) / pilotChapters.length)
                  : 0}%
              </div>
            </div>
            <div className="w-px h-8 bg-line" />
            <div>
              <div className="text-[10px] text-muted font-bold uppercase tracking-wider">Progression</div>
              <div className="text-xl font-bold font-mono text-ink">
                {userStats.completedChapters.length} / {ALL_BOOK_CHAPTERS.length}
              </div>
            </div>
          </div>
        </div>

        {/* Unresolved Mistakes Alert Box */}
        {unresolvedCount > 0 && (
          <div 
            onClick={onOpenMistakes}
            className="cursor-pointer mt-4 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-900/60 flex items-center justify-between hover:scale-[1.01] transition-transform shadow-xs"
          >
            <div className="flex items-center gap-3 text-xs text-amber-900 dark:text-amber-200">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>{unresolvedCount} question{unresolvedCount > 1 ? 's' : ''}</strong> à revoir dans votre <strong>Cahier d'erreurs</strong> pour atteindre le 100% sans faute.
              </span>
            </div>
            <span className="text-xs font-bold text-amber-900 dark:text-amber-300 underline shrink-0">
              Réviser →
            </span>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar text-xs font-medium">
        <button
          onClick={() => setFilter('all')}
          className={`px-3.5 py-1.5 rounded-full border transition-all ${
            filter === 'all'
              ? 'border-ink bg-ink text-paper font-semibold shadow-xs'
              : 'border-line bg-card text-muted hover:text-ink'
          }`}
        >
          Tous (16 chapitres)
        </button>
        <button
          onClick={() => setFilter('pilot')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border transition-all ${
            filter === 'pilot'
              ? 'border-ink bg-ink text-paper font-semibold shadow-xs'
              : 'border-line bg-card text-muted hover:text-ink'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Chapitres Interactifs (Prêts)</span>
        </button>
        <button
          onClick={() => setFilter('beginner')}
          className={`px-3.5 py-1.5 rounded-full border transition-all ${
            filter === 'beginner'
              ? 'border-ink bg-ink text-paper font-semibold shadow-xs'
              : 'border-line bg-card text-muted hover:text-ink'
          }`}
        >
          Débutant
        </button>
        <button
          onClick={() => setFilter('intermediate')}
          className={`px-3.5 py-1.5 rounded-full border transition-all ${
            filter === 'intermediate'
              ? 'border-ink bg-ink text-paper font-semibold shadow-xs'
              : 'border-line bg-card text-muted hover:text-ink'
          }`}
        >
          Intermédiaire
        </button>
        <button
          onClick={() => setFilter('advanced')}
          className={`px-3.5 py-1.5 rounded-full border transition-all ${
            filter === 'advanced'
              ? 'border-ink bg-ink text-paper font-semibold shadow-xs'
              : 'border-line bg-card text-muted hover:text-ink'
          }`}
        >
          Avancé
        </button>
      </div>

      {/* Chapters Grid */}
      <div className="space-y-3">
        {filteredChapters.map((ch) => {
          const score = getScore(ch.number);
          const completed = isCompleted(ch.number);
          const isPilot = ch.isPilot;

          return (
            <div
              key={ch.number}
              onClick={() => {
                if (isPilot) onSelectChapter(ch.number);
              }}
              className={`group rounded-2xl border p-4 sm:p-5 transition-all flex items-center justify-between gap-4 ${
                isPilot
                  ? 'cursor-pointer border-line bg-card hover:border-ink hover:shadow-md hover:translate-y-[-2px]'
                  : 'opacity-50 border-dashed border-line bg-soft/30 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Number Badge */}
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-mono font-bold text-sm shrink-0 transition-transform group-hover:scale-105 ${
                  completed
                    ? 'bg-idgham text-white shadow-xs'
                    : isPilot
                    ? 'bg-ink text-paper shadow-xs'
                    : 'bg-soft text-muted'
                }`}>
                  {completed ? <CheckCircle2 className="w-5 h-5" /> : ch.number}
                </div>

                {/* Chapter Titles */}
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-display font-bold text-base sm:text-lg text-ink">
                      {ch.titleFr}
                    </h3>
                    {isPilot && (
                      <span className="chip chip-idgham text-[10px] uppercase font-bold tracking-wider py-0.5">
                        6 Étapes Actives
                      </span>
                    )}
                  </div>
                  <p className="font-ar font-bold text-xl sm:text-2xl text-muted leading-snug" dir="rtl">
                    {ch.titleAr}
                  </p>
                </div>
              </div>

              {/* Score or Status */}
              <div className="flex items-center gap-3 shrink-0">
                {isPilot ? (
                  <>
                    {score > 0 && (
                      <div className="hidden sm:block text-right">
                        <span className="text-[10px] text-muted font-bold uppercase">Score</span>
                        <div className="font-mono text-sm font-bold text-idgham">
                          {score}%
                        </div>
                      </div>
                    )}
                    <div className="w-8 h-8 rounded-full bg-soft flex items-center justify-center text-muted group-hover:bg-ink group-hover:text-paper transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </>
                ) : (
                  <span className="text-xs text-muted italic">Bientôt disponible</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
