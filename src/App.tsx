import React, { useState, useEffect } from 'react';
import { PILOT_CHAPTERS } from './data/chaptersData';
import { Chapter, UserStats } from './types/tajweed';
import { loadUserStats } from './services/storageService';
import { Navbar, LessonStep, STEPS } from './components/Navbar';
import { ChapterList } from './components/ChapterList';
import { InteractiveTajweedTree } from './components/InteractiveTajweedTree';
import { AnimatedProfessor } from './components/AnimatedProfessor';
import { TajweedLab } from './components/TajweedLab';
import { QuranExplorer } from './components/QuranExplorer';
import { QuizEngine } from './components/QuizEngine';
import { ChapterPoster } from './components/ChapterPoster';
import { MistakeNotebookModal } from './components/MistakeNotebookModal';
import { DataBackupModal } from './components/DataBackupModal';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('tajweed_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // User stats & progress
  const [userStats, setUserStats] = useState<UserStats>(loadUserStats);

  // Active view states
  const [currentTab, setCurrentTab] = useState<'chapters' | 'lesson'>('chapters');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [currentStep, setCurrentStep] = useState<LessonStep>('map');

  // Modals
  const [isMistakesModalOpen, setIsMistakesModalOpen] = useState(false);
  const [isDataBackupModalOpen, setIsDataBackupModalOpen] = useState(false);

  // Sync theme with HTML class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('tajweed_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('tajweed_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const refreshStats = () => {
    setUserStats(loadUserStats());
  };

  // Chapter selection
  const handleSelectChapter = (chapterNumber: number) => {
    const found = PILOT_CHAPTERS.find(c => c.number === chapterNumber);
    if (found) {
      setSelectedChapter(found);
      setCurrentTab('lesson');
      setCurrentStep('map');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToChapters = () => {
    setSelectedChapter(null);
    setCurrentTab('chapters');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const STEPS_ORDER: LessonStep[] = ['map', 'prof', 'lab', 'quran', 'quiz', 'poster'];
  const currentStepIdx = STEPS_ORDER.indexOf(currentStep);

  const goToPrevStep = () => {
    if (currentStepIdx > 0) {
      setCurrentStep(STEPS_ORDER[currentStepIdx - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleBackToChapters();
    }
  };

  const goToNextStep = () => {
    if (currentStepIdx + 1 < STEPS_ORDER.length) {
      setCurrentStep(STEPS_ORDER[currentStepIdx + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Move to next chapter
      if (selectedChapter?.number === 8) {
        handleSelectChapter(10);
      } else {
        handleBackToChapters();
      }
    }
  };

  const unresolvedMistakesCount = userStats.mistakeHistory.filter(m => !m.retriedSuccessfully).length;

  return (
    <div className={`min-h-full flex flex-col bg-paper text-ink ${currentTab === 'lesson' ? 'pb-28' : ''}`}>
      
      {/* Top Header with Stepper */}
      <Navbar
        currentTab={currentTab}
        currentStep={currentStep}
        onSelectStep={(step) => {
          setCurrentStep(step);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onBackToChapters={handleBackToChapters}
        selectedChapterTitle={selectedChapter?.titleFr}
        selectedChapterNumber={selectedChapter?.number}
        unresolvedMistakesCount={unresolvedMistakesCount}
        onOpenMistakes={() => setIsMistakesModalOpen(true)}
        onOpenDataBackup={() => setIsDataBackupModalOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Stage */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6">
        {currentTab === 'chapters' || !selectedChapter ? (
          <ChapterList
            onSelectChapter={handleSelectChapter}
            userStats={userStats}
            pilotChapters={PILOT_CHAPTERS}
            onOpenMistakes={() => setIsMistakesModalOpen(true)}
          />
        ) : (
          <div key={`${selectedChapter.id}-${currentStep}`} className="pt-8 sm:pt-12 space-y-8 animate-enter">
            {currentStep === 'map' && (
              <InteractiveTajweedTree chapter={selectedChapter} />
            )}

            {currentStep === 'prof' && (
              <AnimatedProfessor chapter={selectedChapter} />
            )}

            {currentStep === 'lab' && (
              <TajweedLab chapter={selectedChapter} />
            )}

            {currentStep === 'quran' && (
              <QuranExplorer chapter={selectedChapter} />
            )}

            {currentStep === 'quiz' && (
              <QuizEngine
                chapter={selectedChapter}
                onGoToPoster={() => {
                  setCurrentStep('poster');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenMistakes={() => setIsMistakesModalOpen(true)}
                onCompleteQuiz={refreshStats}
              />
            )}

            {currentStep === 'poster' && (
              <ChapterPoster
                chapter={selectedChapter}
                onRestartSteps={() => {
                  setCurrentStep('map');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onGoToNextChapter={() => {
                  if (selectedChapter.number === 8) {
                    handleSelectChapter(10);
                  } else {
                    handleBackToChapters();
                  }
                }}
              />
            )}
          </div>
        )}
      </main>

      {/* Navigation entre étapes */}
      {currentTab === 'lesson' && selectedChapter && (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-paper/85 backdrop-blur-xl border-t border-line pb-[env(safe-area-inset-bottom)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-3">
            <button onClick={goToPrevStep} className="btn btn-secondary">
              <ArrowLeft className="w-4 h-4" />
              <span>{currentStepIdx === 0 ? 'Sommaire' : 'Précédent'}</span>
            </button>

            <p className="hidden sm:block text-sm text-muted">
              <span className="text-ink font-semibold">{STEPS[currentStepIdx].label}</span>
              <span className="mx-2 text-line">/</span>
              {currentStepIdx + 1} sur {STEPS_ORDER.length}
            </p>

            <button onClick={goToNextStep} className="btn btn-primary">
              <span>
                {currentStepIdx + 1 === STEPS_ORDER.length
                  ? (selectedChapter.number === 8 ? 'Chapitre suivant' : 'Terminer')
                  : STEPS[currentStepIdx + 1].label}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <MistakeNotebookModal
        isOpen={isMistakesModalOpen}
        onClose={() => setIsMistakesModalOpen(false)}
        mistakes={userStats.mistakeHistory}
        onRefreshStats={refreshStats}
      />

      <DataBackupModal
        isOpen={isDataBackupModalOpen}
        onClose={() => setIsDataBackupModalOpen(false)}
        onRefresh={refreshStats}
      />

    </div>
  );
};

export default App;
