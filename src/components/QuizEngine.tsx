import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Chapter, QuizQuestion } from '../types/tajweed';
import { recordMistake, recordChapterScore } from '../services/storageService';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, AlertCircle, ArrowLeft, Sparkles, BookOpen } from 'lucide-react';

interface QuizEngineProps {
  chapter: Chapter;
  onGoToPoster: () => void;
  onOpenMistakes: () => void;
  onCompleteQuiz: () => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  chapter,
  onGoToPoster,
  onOpenMistakes,
  onCompleteQuiz,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [mistakesMadeInSession, setMistakesMadeInSession] = useState<QuizQuestion[]>([]);

  const questions = chapter.quizzes;
  const currentQ = questions[currentIndex];

  const handleSelectAnswer = (ans: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(ans);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      setMistakesMadeInSession(prev => [...prev, currentQ]);
      // Record in smart mistake notebook
      recordMistake(
        chapter.id,
        currentQ.id,
        currentQ.promptFr,
        currentQ.verseArabic,
        selectedAnswer,
        String(currentQ.correctAnswer),
        currentQ.explanationFr
      );
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz finished
      const finalScorePercent = Math.round(((score + (selectedAnswer === currentQ.correctAnswer ? 0 : 0)) / questions.length) * 100);
      recordChapterScore(chapter.id, finalScorePercent);
      setQuizFinished(true);
      onCompleteQuiz();

      if (finalScorePercent === 100) {
        confetti({
          particleCount: 140,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
    setMistakesMadeInSession([]);
  };

  // Render Finished Summary View
  if (quizFinished) {
    const finalScorePercent = Math.round((score / questions.length) * 100);
    const isPerfect = finalScorePercent === 100;

    return (
      <div className="max-w-xl mx-auto py-8 text-center animate-enter">
        <div className={`w-16 h-16 rounded-3xl mx-auto flex items-center justify-center mb-4 shadow-sm ${
          isPerfect
            ? 'bg-idgham-bg text-idgham border-2 border-idgham'
            : 'bg-soft text-ink border border-line'
        }`}>
          <Award className="w-8 h-8" />
        </div>

        <h2 className="font-display text-3xl font-bold text-ink mb-1">
          {isPerfect ? 'Perfection Absolue ! 0 Faute' : 'Entraînement Terminé !'}
        </h2>
        <p className="text-xs sm:text-sm text-muted mb-6">
          {isPerfect
            ? 'Félicitations, vous maîtrisez impeccablement les règles de ce chapitre.'
            : 'La répétition et l\'analyse des erreurs mènent à l\'excellence.'}
        </p>

        {/* Score pill */}
        <div className="p-6 rounded-2xl border border-line bg-card shadow-xs mb-6 max-w-xs mx-auto">
          <div className="text-4xl font-extrabold font-mono text-ink mb-1">
            {finalScorePercent}%
          </div>
          <div className="text-xs text-muted font-medium">
            {score} sur {questions.length} questions réussies
          </div>
        </div>

        {/* Mistakes Alert if any */}
        {mistakesMadeInSession.length > 0 && (
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 mb-6 text-left flex items-start gap-3 shadow-xs">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>{mistakesMadeInSession.length} erreur(s) enregistrée(s) :</strong> Ajoutées à votre <em>Cahier d'erreurs</em> pour révision ciblée.
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={restartQuiz}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-line bg-card hover:bg-soft text-xs font-semibold text-ink transition-colors shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Recommencer</span>
          </button>

          {mistakesMadeInSession.length > 0 && (
            <button
              onClick={onOpenMistakes}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 text-white hover:bg-amber-700 text-xs font-semibold transition-colors shadow-xs"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Ouvrir mon cahier</span>
            </button>
          )}

          <button
            onClick={onGoToPoster}
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-ink text-paper hover:opacity-90 text-xs font-semibold transition-opacity shadow-xs"
          >
            <span>Voir la fiche de synthèse</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Active Question View
  return (
    <div className="animate-enter space-y-6">
      
      {/* Top Header & Progress */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-wider font-bold text-muted mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Étape 5 · Exercices & Quiz Interactifs</span>
          </p>
          <span className="text-xs text-muted font-mono">
            Question {currentIndex + 1} sur {questions.length}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-28 h-2 rounded-full bg-soft overflow-hidden border border-line">
          <div
            className="h-full bg-idgham transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="p-6 sm:p-7 rounded-2xl bg-card border border-line shadow-xs space-y-5">
        
        {/* Prompt */}
        <h2 className="font-display text-lg sm:text-xl font-normal text-ink leading-snug">
          {currentQ.promptFr}
        </h2>

        {/* Quranic Verse Box */}
        <div className="py-6 px-4 rounded-2xl bg-paper border border-line text-center shadow-xs">
          <p className="font-ar font-bold text-3xl sm:text-4xl text-ink leading-relaxed" dir="rtl">
            {currentQ.verseArabic}
          </p>
          {currentQ.surahAyahRef && (
            <span className="ref-tag mt-3 inline-block">
              Sūrah réf: {currentQ.surahAyahRef}
            </span>
          )}
        </div>

        {/* Type: Click on segment in verse */}
        {currentQ.type === 'click_word' && currentQ.clickableSegments && (
          <div className="space-y-2">
            <span className="text-xs text-muted block font-medium">
              Cliquez directement sur le mot qui contient la règle :
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2" dir="rtl">
              {currentQ.clickableSegments.map((segment) => {
                const isSelected = selectedAnswer === segment;
                let btnStyle = 'border-line bg-card hover:bg-soft text-ink';

                if (isAnswerSubmitted) {
                  if (segment === currentQ.correctAnswer) {
                    btnStyle = 'border-idgham bg-idgham-bg text-idgham font-bold shadow-xs';
                  } else if (isSelected) {
                    btnStyle = 'border-bad bg-bad-bg text-bad font-bold';
                  }
                } else if (isSelected) {
                  btnStyle = 'border-ink bg-ink text-paper font-bold shadow-md';
                }

                return (
                  <button
                    key={segment}
                    onClick={() => handleSelectAnswer(segment)}
                    disabled={isAnswerSubmitted}
                    className={`font-ar text-2xl px-5 py-2.5 rounded-xl border transition-all select-none ${btnStyle}`}
                  >
                    {segment}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Type: MCQ Options */}
        {(currentQ.type === 'mcq' || currentQ.type === 'error_detect') && currentQ.options && (
          <div className="space-y-2.5">
            {currentQ.options.map((option) => {
              const isSelected = selectedAnswer === option;
              let btnStyle = 'border-line bg-paper/60 hover:bg-soft text-ink';

              if (isAnswerSubmitted) {
                if (option === currentQ.correctAnswer) {
                  btnStyle = 'border-idgham bg-idgham-bg text-idgham font-bold shadow-xs';
                } else if (isSelected) {
                  btnStyle = 'border-bad bg-bad-bg text-bad font-bold';
                } else {
                  btnStyle = 'opacity-40 border-line bg-card';
                }
              } else if (isSelected) {
                btnStyle = 'border-ink bg-ink text-paper font-bold shadow-sm';
              }

              return (
                <button
                  key={option}
                  onClick={() => handleSelectAnswer(option)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span className="leading-snug">{option}</span>
                  {isAnswerSubmitted && option === currentQ.correctAnswer && (
                    <CheckCircle2 className="w-4 h-4 text-idgham shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && option !== currentQ.correctAnswer && (
                    <XCircle className="w-4 h-4 text-bad shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Detailed Explanation upon submission */}
        {isAnswerSubmitted && (
          <div className={`p-4 rounded-xl border text-xs leading-relaxed animate-pop ${
            selectedAnswer === currentQ.correctAnswer
              ? 'bg-idgham-bg border-idgham text-idgham'
              : 'bg-bad-bg border-bad text-bad'
          }`}>
            <div className="font-bold mb-1 flex items-center gap-1.5 text-xs sm:text-sm">
              {selectedAnswer === currentQ.correctAnswer ? (
                <>
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Excellent ! Règle parfaitement identifiée.</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>Erreur de Tajwīd ! Attention au piège.</span>
                </>
              )}
            </div>
            <p className="mt-1 opacity-90">{currentQ.explanationFr}</p>
          </div>
        )}

        {/* Bottom Action Button */}
        <div className="flex items-center justify-end pt-2">
          {!isAnswerSubmitted ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswer}
              className="px-6 py-2.5 rounded-xl bg-ink text-paper font-semibold text-xs hover:opacity-90 disabled:opacity-30 transition-opacity shadow-xs"
            >
              Valider la réponse
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-ink text-paper font-semibold text-xs hover:opacity-90 transition-opacity shadow-xs"
            >
              <span>{currentIndex + 1 === questions.length ? 'Voir mes résultats' : 'Question suivante'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
