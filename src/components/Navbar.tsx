import React from 'react';
import { Moon, Sun, ArrowLeft, NotebookPen } from 'lucide-react';
import { StarMark } from './ui';

export type LessonStep = 'map' | 'prof' | 'lab' | 'quran' | 'quiz' | 'poster';

export const STEPS: { id: LessonStep; label: string; short: string }[] = [
  { id: 'map', label: 'Carte', short: 'Carte' },
  { id: 'prof', label: 'Explication', short: 'Expli.' },
  { id: 'lab', label: 'Laboratoire', short: 'Labo' },
  { id: 'quran', label: 'Coran', short: 'Coran' },
  { id: 'quiz', label: 'Quiz', short: 'Quiz' },
  { id: 'poster', label: 'Synthèse', short: 'Bilan' },
];

interface NavbarProps {
  currentTab: 'chapters' | 'lesson' | 'makharij';
  currentStep: LessonStep;
  onSelectStep: (step: LessonStep) => void;
  onBackToChapters: () => void;
  selectedChapterTitle?: string;
  selectedChapterNumber?: number;
  unresolvedMistakesCount: number;
  onOpenMistakes: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  currentStep,
  onSelectStep,
  onBackToChapters,
  selectedChapterTitle,
  selectedChapterNumber,
  unresolvedMistakesCount,
  onOpenMistakes,
  isDark,
  onToggleTheme,
}) => {
  const currentStepIdx = STEPS.findIndex(s => s.id === currentStep);
  const inLesson = currentTab === 'lesson';

  const backTitle = inLesson
    ? { kicker: `Chapitre ${selectedChapterNumber}`, title: selectedChapterTitle }
    : currentTab === 'makharij'
    ? { kicker: 'Laboratoire', title: 'Makhārij & Sifāt' }
    : null;

  return (
    <header className="sticky top-0 z-50 w-full pt-[env(safe-area-inset-top)] bg-paper/90 backdrop-blur-xl border-b border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between gap-3">
          {backTitle ? (
            <button
              onClick={onBackToChapters}
              className="flex items-center gap-2.5 min-w-0 text-left"
              aria-label="Retour au sommaire"
            >
              <ArrowLeft className="w-5 h-5 shrink-0 text-muted" />
              <span className="min-w-0">
                <span className="block text-xs text-muted leading-tight">{backTitle.kicker}</span>
                <span className="block font-display text-[15px] sm:text-base leading-tight text-ink truncate">
                  {backTitle.title}
                </span>
              </span>
            </button>
          ) : (
            <button onClick={onBackToChapters} className="flex items-center gap-2.5">
              <StarMark className="w-6 h-6 text-gilt" />
              <span className="font-display text-xl text-ink">Tajwīd</span>
            </button>
          )}

          <div className="flex items-center gap-1 shrink-0">
            <button onClick={onOpenMistakes} className="btn btn-ghost px-3" title="Cahier d'erreurs">
              <NotebookPen className="w-4 h-4" />
              <span className="hidden sm:inline">Révisions</span>
              {unresolvedMistakesCount > 0 && (
                <span className="min-w-5 h-5 px-1 rounded-full bg-gilt text-white text-[11px] font-bold inline-flex items-center justify-center">
                  {unresolvedMistakesCount}
                </span>
              )}
            </button>
            <button
              onClick={onToggleTheme}
              className="btn btn-ghost btn-icon"
              aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {inLesson && (
          <nav className="pb-2.5" aria-label="Étapes du chapitre">
            <ol className="grid grid-cols-6 gap-1.5">
              {STEPS.map((step, idx) => {
                const isCur = idx === currentStepIdx;
                const isDone = idx < currentStepIdx;
                return (
                  <li key={step.id}>
                    <button
                      onClick={() => onSelectStep(step.id)}
                      aria-current={isCur ? 'step' : undefined}
                      className="w-full flex flex-col items-center sm:items-start gap-1.5 group"
                    >
                      <span
                        className={`w-full h-1 rounded-full transition-colors ${
                          isCur ? 'bg-gilt' : isDone ? 'bg-lapis' : 'bg-line group-hover:bg-muted/40'
                        }`}
                      />
                      <span
                        className={`text-[11px] sm:text-xs truncate transition-colors ${
                          isCur ? 'text-ink font-semibold' : 'text-muted group-hover:text-ink'
                        }`}
                      >
                        <span className="sm:hidden">{step.short}</span>
                        <span className="hidden sm:inline">{step.label}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
      </div>
    </header>
  );
};
