import React, { useState } from 'react';
import { MistakeRecord } from '../types/tajweed';
import { markMistakeResolved } from '../services/storageService';
import { Check } from 'lucide-react';
import { Modal, StarMark } from './ui';

interface MistakeNotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
  mistakes: MistakeRecord[];
  onRefreshStats: () => void;
}

export const MistakeNotebookModal: React.FC<MistakeNotebookModalProps> = ({
  isOpen,
  onClose,
  mistakes,
  onRefreshStats,
}) => {
  const [filterActiveOnly, setFilterActiveOnly] = useState(true);

  const displayMistakes = mistakes.filter((m) =>
    filterActiveOnly ? !m.retriedSuccessfully : true
  );

  const handleResolve = (questionId: string) => {
    markMistakeResolved(questionId);
    onRefreshStats();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Cahier d'erreurs"
      subtitle="Les questions manquées aux quiz, avec la bonne réponse et son explication."
      footer={<button onClick={onClose} className="btn btn-secondary">Fermer</button>}
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="segmented">
          <button aria-pressed={filterActiveOnly} onClick={() => setFilterActiveOnly(true)}>À revoir</button>
          <button aria-pressed={!filterActiveOnly} onClick={() => setFilterActiveOnly(false)}>Toutes</button>
        </div>
        <span className="text-sm text-muted tabular-nums">
          {displayMistakes.length} question{displayMistakes.length > 1 ? 's' : ''}
        </span>
      </div>

      {displayMistakes.length === 0 ? (
        <div className="py-14 text-center">
          <StarMark className="w-10 h-10 mx-auto text-gilt" />
          <h3 className="mt-4 font-display text-xl text-ink">Rien à revoir pour l'instant</h3>
          <p className="mt-1 text-sm text-muted max-w-sm mx-auto">
            Les questions manquées aux quiz apparaîtront ici pour que vous puissiez les retravailler.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {displayMistakes.map((record) => (
            <li
              key={record.questionId}
              className={`rounded-2xl border border-line p-5 ${record.retriedSuccessfully ? 'opacity-60' : ''}`}
            >
              <p className="text-[15px] font-semibold text-ink">{record.questionPrompt}</p>

              {record.verseArabic && (
                <p className="mt-3 py-2 px-3 rounded-xl bg-soft text-center font-ar text-[26px] leading-[1.8] text-ink" dir="rtl">
                  {record.verseArabic}
                </p>
              )}

              <dl className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                <div className="rounded-xl bg-bad-bg px-3 py-2">
                  <dt className="text-bad font-semibold">Votre réponse</dt>
                  <dd className="text-ink">{record.yourAnswer}</dd>
                </div>
                <div className="rounded-xl bg-good-bg px-3 py-2">
                  <dt className="text-good font-semibold">Bonne réponse</dt>
                  <dd className="text-ink">{record.correctAnswer}</dd>
                </div>
              </dl>

              <p className="mt-3 text-sm leading-relaxed text-muted">{record.explanation}</p>

              {!record.retriedSuccessfully ? (
                <div className="mt-4 flex justify-end">
                  <button onClick={() => handleResolve(record.questionId)} className="btn btn-secondary h-9 text-[13px]">
                    <Check className="w-4 h-4" />
                    J'ai compris
                  </button>
                </div>
              ) : (
                <p className="mt-3 text-sm font-semibold text-good flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Revue
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </Modal>
  );
};
