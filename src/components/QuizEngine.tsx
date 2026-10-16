import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Chapter, QuizQuestion } from '../types/tajweed';
import { recordMistake, recordChapterScore } from '../services/storageService';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, NotebookPen } from 'lucide-react';
import { StepHeader, StarMark } from './ui';

interface QuizEngineProps {
  chapter: Chapter;
  onGoToPoster: () => void;
  onOpenMistakes: () => void;
  onCompleteQuiz: () => void;
}

/** Met en évidence le passage visé par la question dans le verset. */
const highlightTarget = (verse: string, target?: string) => {
  if (!target || !verse.includes(target)) return verse;
  const [before, ...rest] = verse.split(target);
  return (
    <>
      {before}
      <mark className="bg-gilt-soft text-ink rounded-lg px-1 [box-decoration-break:clone]">{target}</mark>
      {rest.join(target)}
    </>
  );
};

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
      <div className="surface max-w-xl mx-auto px-6 py-12 sm:px-12 text-center">
        <StarMark className="w-10 h-10 mx-auto text-gilt" filled={isPerfect} />
        <p className="mt-6 font-display text-[64px] leading-none text-ink tabular-nums">{finalScorePercent} %</p>
        <p className="mt-2 text-sm text-muted">{score} bonne{score > 1 ? 's' : ''} réponse{score > 1 ? 's' : ''} sur {questions.length}</p>

        <h2 className="mt-8 font-display text-2xl text-ink">
          {isPerfect ? 'Sans faute. Bravo !' : 'Quiz terminé'}
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted max-w-sm mx-auto">
          {isPerfect
            ? 'Vous maîtrisez les règles de ce chapitre.'
            : `${mistakesMadeInSession.length} question${mistakesMadeInSession.length > 1 ? 's ont été ajoutées' : ' a été ajoutée'} à votre cahier d'erreurs pour la réviser plus tard.`}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button onClick={restartQuiz} className="btn btn-secondary">
            <RotateCcw className="w-4 h-4" />
            Recommencer
          </button>
          {mistakesMadeInSession.length > 0 && (
            <button onClick={onOpenMistakes} className="btn btn-secondary">
              <NotebookPen className="w-4 h-4" />
              Ouvrir mon cahier
            </button>
          )}
          <button onClick={onGoToPoster} className="btn btn-primary">
            Voir la synthèse
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  // Active Question View
  return (
    <>
      <StepHeader
        step={5}
        title="Vérifiez vos acquis"
        aside={
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="tabular-nums">Question {currentIndex + 1} sur {questions.length}</span>
            <div className="flex gap-1" aria-hidden="true">
              {questions.map((_, i) => (
                <span key={i} className={`h-1.5 w-6 rounded-full ${i < currentIndex ? 'bg-lapis' : i === currentIndex ? 'bg-gilt' : 'bg-line'}`} />
              ))}
            </div>
          </div>
        }
      />

      <div key={currentQ.id} className="surface overflow-hidden animate-fade">
        <div className="px-6 sm:px-8 pt-7">
          <h2 className="font-display text-[22px] sm:text-2xl leading-snug text-ink max-w-2xl">
            {currentQ.promptFr}
          </h2>
        </div>

        <div className="mx-6 sm:mx-8 mt-6 py-6 px-4 rounded-2xl bg-soft text-center">
          <p className="font-ar text-[36px] sm:text-[44px] leading-[1.9] text-ink" dir="rtl">
            {highlightTarget(currentQ.verseArabic, currentQ.targetWord)}
          </p>
          {currentQ.surahAyahRef && (
            <div className="mt-2">
              <span className="ref-tag">Sourate {currentQ.surahAyahRef}</span>
            </div>
          )}
        </div>

        <div className="px-6 sm:px-8 py-6">
          {currentQ.type === 'click_word' && currentQ.clickableSegments && (
            <div>
              <p className="label mb-3">Touchez le mot qui contient la règle</p>
              <div className="flex flex-wrap items-center justify-center gap-2" dir="rtl">
                {currentQ.clickableSegments.map((segment) => {
                  const isSelected = selectedAnswer === segment;
                  let btnStyle = 'border-line bg-card hover:border-muted text-ink';
                  if (isAnswerSubmitted) {
                    if (segment === currentQ.correctAnswer) btnStyle = 'border-good bg-good-bg text-good';
                    else if (isSelected) btnStyle = 'border-bad bg-bad-bg text-bad';
                    else btnStyle = 'border-line bg-card text-ink opacity-40';
                  } else if (isSelected) {
                    btnStyle = 'border-lapis bg-lapis-bg text-ink';
                  }
                  return (
                    <button
                      key={segment}
                      onClick={() => handleSelectAnswer(segment)}
                      disabled={isAnswerSubmitted}
                      aria-pressed={isSelected}
                      className={`font-ar text-[28px] leading-[1.7] px-5 py-1 rounded-2xl border-2 transition-colors select-none ${btnStyle}`}
                    >
                      {segment}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {(currentQ.type === 'mcq' || currentQ.type === 'error_detect') && currentQ.options && (
            <div className="grid sm:grid-cols-2 gap-2.5">
              {currentQ.options.map((option, i) => {
                const isSelected = selectedAnswer === option;
                let btnStyle = 'border-line bg-card hover:border-muted text-ink';
                if (isAnswerSubmitted) {
                  if (option === currentQ.correctAnswer) btnStyle = 'border-good bg-good-bg text-good';
                  else if (isSelected) btnStyle = 'border-bad bg-bad-bg text-bad';
                  else btnStyle = 'border-line bg-card text-ink opacity-40';
                } else if (isSelected) {
                  btnStyle = 'border-lapis bg-lapis-bg text-ink';
                }
                return (
                  <button
                    key={option}
                    onClick={() => handleSelectAnswer(option)}
                    disabled={isAnswerSubmitted}
                    aria-pressed={isSelected}
                    className={`w-full text-left px-4 py-3.5 rounded-2xl border-2 text-[15px] transition-colors flex items-center gap-3 ${btnStyle}`}
                  >
                    <span className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-semibold ${
                      isSelected && !isAnswerSubmitted ? 'bg-lapis text-lapis-ink' : 'bg-soft text-muted'
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="leading-snug flex-1">{option}</span>
                    {isAnswerSubmitted && option === currentQ.correctAnswer && <CheckCircle2 className="w-5 h-5 shrink-0" />}
                    {isAnswerSubmitted && isSelected && option !== currentQ.correctAnswer && <XCircle className="w-5 h-5 shrink-0" />}
                  </button>
                );
              })}
            </div>
          )}

          {isAnswerSubmitted && (
            <div className={`mt-5 p-4 rounded-2xl text-[15px] leading-relaxed animate-fade ${isCorrect ? 'bg-good-bg' : 'bg-bad-bg'}`} aria-live="polite">
              <p className={`font-semibold flex items-center gap-2 ${isCorrect ? 'text-good' : 'text-bad'}`}>
                {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                {isCorrect ? 'Bonne réponse' : 'Pas tout à fait'}
              </p>
              <p className="mt-1 text-ink">{currentQ.explanationFr}</p>
            </div>
          )}
        </div>

        <div className="px-6 sm:px-8 py-4 border-t border-line flex justify-end">
          {!isAnswerSubmitted ? (
            <button onClick={handleSubmitAnswer} disabled={!selectedAnswer} className="btn btn-primary">
              Valider
            </button>
          ) : (
            <button onClick={handleNextQuestion} className="btn btn-primary">
              {currentIndex + 1 === questions.length ? 'Voir mon résultat' : 'Question suivante'}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};
