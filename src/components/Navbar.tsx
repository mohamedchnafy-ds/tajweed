import React, { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 20);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStepIdx = STEPS.findIndex(s => s.id === currentStep);
  const inLesson = currentTab === 'lesson';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 pt-[env(safe-area-inset-top)] ${
        isScrolled
          ? 'bg-paper/98 dark:bg-paper/95 backdrop-blur-2xl border-b border-line shadow-sm'
          : 'bg-paper/90 dark:bg-paper/85 backdrop-blur-xl border-b border-line/80'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between gap-3 transition-all duration-200 ${
            inLesson && isScrolled ? 'h-11 sm:h-13' : 'h-14 sm:h-16'
          }`}
        >
          {inLesson ? (
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <button
                onClick={onBackToChapters}
                className="flex items-center gap-2.5 min-w-0 text-left group"
                title="Retour au sommaire des chapitres"
                aria-label="Retour au sommaire des chapitres"
              >
                <span
                  className={`btn btn-secondary btn-icon shrink-0 transition-all ${
                    isScrolled ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-8 h-8 sm:w-9 sm:h-9'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                </span>
                <span className="min-w-0">
                  <span className={`block text-xs text-muted ${isScrolled ? 'hidden sm:block' : ''}`}>
                    Chapitre {selectedChapterNumber}
                  </span>
                  <span
                    className={`block font-display leading-tight text-ink truncate ${
                      isScrolled ? 'text-sm sm:text-base font-semibold' : 'text-[15px] sm:text-[17px]'
                    }`}
                  >
                    {isScrolled && (
                      <span className="sm:hidden text-xs text-muted font-normal mr-1">
                        Ch.{selectedChapterNumber} ·
                      </span>
                    )}
                    {selectedChapterTitle}
                  </span>
                </span>
              </button>

              {/* Quand on a scrollé sur mobile : afficher la pastille de section active */}
              {isScrolled && (
                <div className="sm:hidden shrink-0 ml-auto flex items-center gap-1.5 pl-1 animate-fade">
                  <span className="chip chip-gold text-[10px] py-0.5 px-2 font-bold tracking-tight">
                    {STEPS[currentStepIdx].label}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <button onClick={onBackToChapters} className="flex items-center gap-2.5">
              <StarMark className="w-6 h-6 text-gilt" />
              <span className="font-display text-xl text-ink">Tajwīd</span>
            </button>
          )}

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={onOpenMistakes}
              className={`btn btn-ghost transition-all ${isScrolled ? 'h-8 px-2 sm:px-3 text-xs' : 'px-3'}`}
              title="Cahier d'erreurs"
            >
              <NotebookPen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Révisions</span>
              {unresolvedMistakesCount > 0 && (
                <span className="min-w-4 h-4 sm:min-w-5 sm:h-5 px-1 rounded-full bg-gilt text-white text-[10px] sm:text-[11px] font-bold inline-flex items-center justify-center">
                  {unresolvedMistakesCount}
                </span>
              )}
            </button>
            <button
              onClick={onOpenDataBackup}
              className={`btn btn-ghost btn-icon transition-all ${
                isScrolled ? 'hidden sm:inline-flex h-8 w-8' : ''
              }`}
              title="Sauvegarder ma progression"
              aria-label="Sauvegarder ma progression"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onToggleTheme}
              className={`btn btn-ghost btn-icon transition-all ${
                isScrolled ? 'h-8 w-8' : ''
              }`}
              title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
              aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {inLesson && (
          <nav
            className={`transition-all duration-200 ${
              isScrolled ? 'pb-2 pt-0.5' : 'pb-3 -mt-1'
            }`}
            aria-label="Étapes du chapitre"
          >
            {/* Indicateur explicite de section sur mobile (< sm) quand NON scrollé */}
            {!isScrolled && (
              <div className="sm:hidden flex items-center justify-between pb-1.5 text-xs animate-fade">
                <span className="font-semibold text-ink flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gilt animate-pulse" />
                  <span>Section : {STEPS[currentStepIdx].label}</span>
                </span>
                <span className="text-muted text-[11px] tabular-nums font-medium">
                  Étape {currentStepIdx + 1} / {STEPS.length}
                </span>
              </div>
            )}

            <ol className="grid grid-cols-6 gap-1 sm:gap-1.5">
              {STEPS.map((step, idx) => {
                const isCur = idx === currentStepIdx;
                const isDone = idx < currentStepIdx;

                // Noms abrégés très lisibles sur petits écrans (360px+)
                const mobileLabels: Record<string, string> = {
                  map: 'Carte',
                  prof: 'Expli.',
                  lab: 'Labo',
                  quran: 'Coran',
                  quiz: 'Quiz',
                  poster: 'Bilan',
                };

                return (
                  <li key={step.id}>
                    <button
                      onClick={() => onSelectStep(step.id)}
                      aria-current={isCur ? 'step' : undefined}
                      className="w-full flex flex-col items-center sm:items-start gap-1 text-center sm:text-left group select-none active:scale-95 transition-transform"
                    >
                      <span
                        className={`w-full rounded-full transition-all duration-300 ${
                          isScrolled ? 'h-1.5 sm:h-1' : 'h-1.5 sm:h-1'
                        } ${
                          isCur
                            ? 'bg-gilt shadow-xs'
                            : isDone
                            ? 'bg-lapis'
                            : 'bg-line group-hover:bg-muted/40'
                        }`}
                      />
                      {/* Libellé sur mobile */}
                      <span
                        className={`sm:hidden leading-tight truncate transition-colors ${
                          isScrolled ? 'text-[9px]' : 'text-[10px]'
                        } ${
                          isCur ? 'text-ink font-bold' : 'text-muted/80'
                        }`}
                      >
                        {mobileLabels[step.id] || step.label}
                      </span>
                      {/* Libellé sur desktop */}
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
