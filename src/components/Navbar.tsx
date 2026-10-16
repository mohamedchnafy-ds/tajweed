import React from 'react';
import { BookOpen, Moon, Sun, AlertCircle, Download, CheckCircle2, ArrowLeft } from 'lucide-react';

export type LessonStep = 'map' | 'prof' | 'lab' | 'quran' | 'quiz' | 'poster';

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
  const STEPS: { id: LessonStep; labelFr: string; labelAr: string }[] = [
    { id: 'map', labelFr: '1. Carte', labelAr: 'الْخَرِيطَة' },
    { id: 'prof', labelFr: '2. Le prof', labelAr: 'الْأُسْتَاذ' },
    { id: 'lab', labelFr: '3. Laboratoire', labelAr: 'الْمُخْتَبَر' },
    { id: 'quran', labelFr: '4. Coran', labelAr: 'الْقُرْآن' },
    { id: 'quiz', labelFr: '5. Quiz', labelAr: 'التَّمَارِين' },
    { id: 'poster', labelFr: '6. Fiche', labelAr: 'الْمُلَخَّص' },
  ];

  const currentStepIdx = STEPS.findIndex(s => s.id === currentStep);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-paper/95 backdrop-blur-md transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5">
        
        {/* Brand Bar */}
        <div className="flex items-center justify-between gap-3 mb-2">
          
          <div className="flex items-center gap-2.5 cursor-pointer group" onClick={onBackToChapters}>
            <div className="w-8 h-8 rounded-xl bg-ink text-paper flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-ar font-bold text-lg sm:text-xl text-ink leading-tight" dir="rtl">
                  التَّجْوِيدُ الْمُيَسَّرُ
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-soft text-muted font-bold">
                  Hafs
                </span>
              </div>
              <p className="text-[11px] text-muted hidden sm:block">
                {selectedChapterNumber 
                  ? `Chapitre ${selectedChapterNumber} : ${selectedChapterTitle}`
                  : 'Apprentissage interactif du Tajwīd • Drs. Islām Fekry'}
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* Cahier d'erreurs */}
            <button
              onClick={onOpenMistakes}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                unresolvedMistakesCount > 0
                  ? 'border-amber-500 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-200'
                  : 'border-line bg-card text-muted hover:text-ink'
              }`}
              title="Cahier d'erreurs intelligent"
            >
              {unresolvedMistakesCount > 0 ? (
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5 text-idgham" />
              )}
              <span className="hidden sm:inline">Erreurs</span>
              {unresolvedMistakesCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-600 text-white">
                  {unresolvedMistakesCount}
                </span>
              )}
            </button>

            {/* Backup */}
            <button
              onClick={onOpenDataBackup}
              className="p-2 rounded-full border border-line bg-card hover:bg-soft text-muted hover:text-ink transition-colors shadow-xs"
              title="Sauvegarder ma progression"
            >
              <Download className="w-3.5 h-3.5" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full border border-line bg-card hover:bg-soft text-muted hover:text-ink transition-colors shadow-xs"
              title="Mode sombre / clair"
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

        {/* 6-Step Stepper (if inside a chapter) */}
        {currentTab === 'lesson' && (
          <div className="mt-2 pt-2 border-t border-line/60">
            <div className="grid grid-cols-6 gap-1.5">
              {STEPS.map((step, idx) => {
                const isCur = step.id === currentStep;
                const isDone = idx < currentStepIdx;

                return (
                  <button
                    key={step.id}
                    onClick={() => onSelectStep(step.id)}
                    className="flex flex-col gap-1 text-left group focus:outline-hidden"
                  >
                    {/* Bar segment */}
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isCur
                          ? 'bg-idgham shadow-xs'
                          : isDone
                          ? 'bg-ink'
                          : 'bg-line group-hover:bg-muted/60'
                      }`}
                    />
                    {/* Label */}
                    <span
                      className={`text-[10px] sm:text-xs truncate transition-colors ${
                        isCur
                          ? 'font-bold text-ink'
                          : isDone
                          ? 'font-medium text-ink/70'
                          : 'text-muted group-hover:text-ink'
                      }`}
                    >
                      {step.labelFr}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
