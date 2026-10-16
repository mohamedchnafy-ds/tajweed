import React from 'react';
import { Moon, Sun, Download, ArrowLeft, NotebookPen } from 'lucide-react';
import { StarMark } from './ui';

export type LessonStep = 'map' | 'prof' | 'lab' | 'quran' | 'quiz' | 'poster';

export const STEPS: { id: LessonStep; label: string }[] = [
  { id: 'map', label: 'Carte' },
  { id: 'prof', label: 'Explication' },
  { id: 'lab', label: 'Laboratoire' },
  { id: 'quran', label: 'Coran' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'poster', label: 'Synthèse' },
];

interface NavbarProps {
  currentTab: 'chapters' | 'lesson';
  currentStep: LessonStep;
  onSelectStep: (step: LessonStep) => void;
  onBackToChapters: () => void;
  selectedChapterTitle?: string;
  selectedChapterNumber?: number;
  unresolvedMistakesCount: number;
  onOpenMistakes: () => void;
  onOpenDataBackup: () => void;
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
  onOpenDataBackup,
  isDark,
  onToggleTheme,
}) => {
  const currentStepIdx = STEPS.findIndex(s => s.id === currentStep);
  const inLesson = currentTab === 'lesson';

  return (
    <header className="sticky top-0 z-40 w-full bg-paper/85 backdrop-blur-xl border-b border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-3">
          {inLesson ? (
            <button
              onClick={onBackToChapters}
              className="flex items-center gap-3 min-w-0 text-left group"
            >
              <span className="btn btn-secondary btn-icon shrink-0">
                <ArrowLeft className="w-4 h-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted">Chapitre {selectedChapterNumber}</span>
                <span className="block font-display text-[17px] leading-tight text-ink truncate">
                  {selectedChapterTitle}
                </span>
              </span>
            </button>
          ) : (
            <button onClick={onBackToChapters} className="flex items-center gap-2.5">
              <StarMark className="w-6 h-6 text-gilt" />
              <span className="font-display text-xl text-ink">Tajwīd</span>
            </button>
          )}

          <div className="flex items-center gap-1">
            <button
              onClick={onOpenMistakes}
              className="btn btn-ghost px-3"
              title="Cahier d'erreurs"
            >
              <NotebookPen className="w-4 h-4" />
              <span className="hidden sm:inline">Révisions</span>
              {unresolvedMistakesCount > 0 && (
                <span className="min-w-5 h-5 px-1.5 rounded-full bg-gilt text-white text-[11px] font-bold inline-flex items-center justify-center">
                  {unresolvedMistakesCount}
                </span>
              )}
            </button>
            <button
              onClick={onOpenDataBackup}
              className="btn btn-ghost btn-icon"
              title="Sauvegarder ma progression"
              aria-label="Sauvegarder ma progression"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onToggleTheme}
              className="btn btn-ghost btn-icon"
              title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
              aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {inLesson && (
          <nav className="pb-3 -mt-1" aria-label="Étapes du chapitre">
            <ol className="grid grid-cols-6 gap-1.5">
              {STEPS.map((step, idx) => {
                const isCur = idx === currentStepIdx;
                const isDone = idx < currentStepIdx;
                return (
                  <li key={step.id}>
                    <button
                      onClick={() => onSelectStep(step.id)}
                      aria-current={isCur ? 'step' : undefined}
                      className="w-full flex flex-col gap-1.5 text-left group"
                    >
                      <span
                        className={`h-1 w-full rounded-full transition-colors duration-300 ${
                          isCur ? 'bg-gilt' : isDone ? 'bg-lapis' : 'bg-line group-hover:bg-muted/40'
                        }`}
                      />
                      <span
                        className={`hidden sm:block text-xs truncate transition-colors ${
                          isCur ? 'text-ink font-semibold' : 'text-muted group-hover:text-ink'
                        }`}
                      >
                        {step.label}
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
