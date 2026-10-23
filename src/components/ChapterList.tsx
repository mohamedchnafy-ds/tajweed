import React, { useState } from 'react';
import { ALL_BOOK_CHAPTERS } from '../data/chaptersData';
import { UserStats, Chapter } from '../types/tajweed';
import { AudioLines, Check, ChevronRight, Download, NotebookPen, Play } from 'lucide-react';
import { StarMark } from './ui';

interface ChapterListProps {
  onSelectChapter: (chapterNumber: number) => void;
  userStats: UserStats;
  pilotChapters: Chapter[];
  onOpenMistakes: () => void;
  onOpenMakharij?: () => void;
  onOpenDataBackup: () => void;
}

/** Titres courts pour les cartes de chaque chapitre. */
const CHAPTER_VISUALS: Record<number, { short: string }> = {
  1: { short: 'Les bases & le Lahn' },
  2: { short: 'Symboles du Mushaf' },
  3: { short: 'Arrêt & reprise' },
  4: { short: 'Madd naturel' },
  5: { short: 'Madd secondaire' },
  6: { short: 'Les Hamzahs' },
  7: { short: 'Lām sākinah' },
  8: { short: 'Nūn sākinah & Tanwīn' },
  9: { short: 'Mīm sākinah' },
  10: { short: 'Qalqalah' },
  11: { short: 'Assimilation (Idghām)' },
  12: { short: 'Tafkhīm & Tarqīq' },
  13: { short: 'Deux soukoûns' },
  14: { short: 'Lettres isolées' },
  15: { short: 'Distinctions subtiles' },
  16: { short: 'Cas particuliers' },
};

/** Phrases d'enjeux concises pour chaque étape de la roadmap. */
const CHAPTER_PITCHES: Record<number, string> = {
  1: "Comprendre pourquoi le Tajwīd est obligatoire (Farḍ 'Ayn) et éliminer tout Lahn Jalī sacrilège.",
  2: "Les 5 familles de signes : stop obligatoire (مـ), interdiction (لا) et les arrêts permis.",
  3: "L'arrêt sur un Soukoûn pur, la mutation de la Tā' Marbūtah et la méthode Stop & Repeat.",
  4: "La clé نُوحِيهَا sur 2 temps incompressibles et l'interdiction d'allonger le Līn en continu.",
  5: "Les 4-5 temps devant la Hamzah (Muttasil/Munfasil) et les 6 temps stricts du Madd Lāzim.",
  6: "Distinguer le ء fixe de l'ٱ élidé, la règle de la 3e lettre et les 5 verbes d'exception.",
  7: "Lām Qamariyyah (claire) vs Shamsiyyah (solaire effacée) et les degrés du Nom divin Allah.",
  8: "Izhār (gorge), Idghām (Yarmalūn), Iqlāb (Bā') et Ikhfā' (15 lettres cachées avec Ghunnah).",
  9: "Ikhfā' Shafawī (devant Bā'), Idghām Shafawī (devant Mīm) et clarté vigilante sur Wāw/Fā'.",
  10: "Les 5 lettres de Qutb Jadd : distinguer la Majeure (Shaddah), Moyenne (arrêt) et Mineure.",
  11: "Mutamāthilayn, Mutaqāribayn, Mutajānisayn : les 8 fusions historiques et l'Idghām Nāqis.",
  12: "Les 7 lettres de Khussa Daghtin Qiz, la lettre Râ' et l'art du Takhlīs pour isoler les sons.",
  13: "Iltiqā' As-Sākinayn : élimination par suppression du Madd ou par Nūn Qutnī réparateur.",
  14: "Alif (0t), Hayyun Tahura (2t), Naqasa 'Asalukum (6t) en tête des sourates.",
  15: "Tā' ouverte vs fermée (arrêt en T ou en H), et Alif Maqsūrah vs Yā'.",
  16: "L'Imālah (Majrēhā), la Tashīl douce, l'Ishmām des lèvres et les 4 silences sacrés (Saktāt).",
};

/** Le livre découpé en 4 parties pédagogiques. */
const PARTS: { title: string; subtitle: string; from: number; to: number }[] = [
  { title: 'Les fondations', subtitle: 'Cadre, symboles, arrêt', from: 1, to: 3 },
  { title: 'Prolongations & Hamzah', subtitle: 'Mesurer les temps', from: 4, to: 6 },
  { title: 'Lettres sans voyelle', subtitle: 'Lām, Nūn, Mīm, Qalqalah', from: 7, to: 10 },
  { title: 'Perfectionnement', subtitle: 'Fusions, emphase, cas rares', from: 11, to: 16 },
];

/** Anneau de progression compact. */
const ProgressRing: React.FC<{ value: number; total: number }> = ({ value, total }) => {
  const r = 24;
  const c = 2 * Math.PI * r;
  const pct = total > 0 ? value / total : 0;
  return (
    <div className="relative w-14 h-14 shrink-0">
      <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90" aria-hidden="true">
        <circle cx="32" cy="32" r={r} fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="5" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="var(--gilt)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          className="transition-all duration-700"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-display text-sm tabular-nums">
        {value}/{total}
      </span>
    </div>
  );
};

export const ChapterList: React.FC<ChapterListProps> = ({
  onSelectChapter,
  userStats,
  pilotChapters,
  onOpenMistakes,
  onOpenMakharij,
  onOpenDataBackup,
}) => {
  const getScore = (n: number) => userStats.chapterScores[`chap-${n}`] || 0;
  const isCompleted = (n: number) => userStats.completedChapters.includes(`chap-${n}`);

  const unresolvedCount = userStats.mistakeHistory.filter((m) => !m.retriedSuccessfully).length;
  const completedCount = pilotChapters.filter((c) => isCompleted(c.number)).length;

  const next = pilotChapters.find((ch) => !isCompleted(ch.number)) || pilotChapters[0];

  // L'onglet actif s'ouvre par défaut sur la partie contenant le cours en cours
  const [activePartIdx, setActivePartIdx] = useState<number>(() => {
    const nextNum = next?.number || 1;
    const pIdx = PARTS.findIndex((p) => nextNum >= p.from && nextNum <= p.to);
    return pIdx !== -1 ? pIdx : 0;
  });

  const currentPart = PARTS[activePartIdx];
  const partChapters = ALL_BOOK_CHAPTERS.filter((c) => c.number >= currentPart.from && c.number <= currentPart.to);

  return (
    <div className="pb-16 pt-6 sm:pt-10 space-y-8 animate-enter">
      {/* Reprise */}
      {next && (
        <section className="relative overflow-hidden rounded-card bg-lapis text-lapis-ink p-5 sm:p-7">
          <StarMark className="pointer-events-none absolute -right-10 -top-10 w-44 h-44 text-gilt opacity-[0.14]" />
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4 min-w-0">
              <ProgressRing value={completedCount} total={pilotChapters.length} />
              <div className="min-w-0">
                <p className="text-xs opacity-75">
                  {completedCount === 0 ? 'Pour commencer' : 'Reprendre'} · Chapitre {next.number}
                </p>
                <h1 className="font-display text-xl sm:text-2xl leading-tight">
                  {CHAPTER_VISUALS[next.number]?.short ?? next.titleFr}
                </h1>
                <p className="font-ui-ar text-lg leading-normal opacity-80" dir="rtl">
                  {next.titleAr}
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectChapter(next.number)}
              className="btn h-11 px-6 bg-gilt text-white dark:text-paper hover:opacity-90 self-start sm:self-auto"
            >
              <Play className="w-4 h-4 fill-current" />
              {completedCount > 0 ? 'Continuer' : 'Commencer'}
            </button>
          </div>
        </section>
      )}

      {/* Outils */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {onOpenMakharij && (
          <ToolLink
            icon={<AudioLines className="w-5 h-5" />}
            title="Labo Makhārij & Sifāt"
            subtitle="Points d'articulation et attributs des lettres"
            onClick={onOpenMakharij}
          />
        )}
        <ToolLink
          icon={<NotebookPen className="w-5 h-5" />}
          title="Cahier d'erreurs"
          subtitle={
            unresolvedCount > 0
              ? `${unresolvedCount} question${unresolvedCount > 1 ? 's' : ''} à revoir`
              : 'Aucune erreur en attente'
          }
          onClick={onOpenMistakes}
        />
      </div>

      {/* Programme */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl text-ink">Programme</h2>
            <p className="text-sm text-muted">{currentPart.subtitle}</p>
          </div>
          <div className="segmented max-w-full overflow-x-auto no-scrollbar self-start sm:self-auto">
            {PARTS.map((part, pIdx) => (
              <button key={pIdx} aria-pressed={activePartIdx === pIdx} onClick={() => setActivePartIdx(pIdx)}>
                {part.title}
              </button>
            ))}
          </div>
        </div>

        <ul className="surface divide-y divide-line overflow-hidden">
          {partChapters.map((ch) => {
            const pilot = pilotChapters.find((p) => p.number === ch.number);
            const available = (ch.isPilot || ch.isPilotChapter) && pilot;
            const isDone = isCompleted(ch.number);
            const isNext = next?.number === ch.number && !isDone;
            const score = getScore(ch.number);

            return (
              <li key={ch.number}>
                <button
                  disabled={!available}
                  onClick={() => onSelectChapter(ch.number)}
                  className="w-full flex items-center gap-4 p-4 sm:p-5 text-left transition-colors hover:bg-soft/60 disabled:opacity-50 disabled:hover:bg-transparent group"
                >
                  <span
                    className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-sm tabular-nums ${
                      isDone
                        ? 'bg-good text-white'
                        : isNext
                        ? 'bg-gilt text-white dark:text-paper font-semibold'
                        : 'border border-line text-muted'
                    }`}
                  >
                    {isDone ? <Check className="w-4 h-4" strokeWidth={3} /> : ch.number}
                  </span>

                  <span className="flex-1 min-w-0">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="font-display text-[17px] text-ink leading-snug group-hover:text-lapis transition-colors">
                        {CHAPTER_VISUALS[ch.number]?.short ?? ch.titleFr}
                      </span>
                      <span className="font-ui-ar text-lg text-lapis shrink-0 hidden sm:inline" dir="rtl">
                        {ch.titleAr}
                      </span>
                    </span>
                    <span className="block text-sm text-muted leading-relaxed mt-0.5 line-clamp-2">
                      {CHAPTER_PITCHES[ch.number]}
                    </span>
                    <span className="flex items-center gap-2 mt-1.5 text-xs text-muted">
                      {available ? <>~{pilot.estimatedMinutes} min</> : 'Bientôt disponible'}
                      {score > 0 && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className={score >= 80 ? 'text-good font-semibold' : ''}>{score} %</span>
                        </>
                      )}
                      {isNext && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-gilt font-semibold">À suivre</span>
                        </>
                      )}
                    </span>
                  </span>

                  {available && (
                    <ChevronRight className="w-4 h-4 text-muted shrink-0 transition-transform group-hover:translate-x-0.5" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted">
        <p className="flex items-start gap-2">
          <StarMark className="w-4 h-4 text-gilt shrink-0" />
          <span>
            Riwāyah Hafs ʿan ʿĀṣim · d'après le <em>Learners' Handbook of Tajweed</em> d'Islām Fekry.
          </span>
        </p>
        <button onClick={onOpenDataBackup} className="btn btn-ghost h-8 px-3 text-xs self-start sm:self-auto">
          <Download className="w-3.5 h-3.5" />
          Sauvegarder ma progression
        </button>
      </footer>
    </div>
  );
};

const ToolLink: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
}> = ({ icon, title, subtitle, onClick }) => (
  <button
    onClick={onClick}
    className="surface p-4 flex items-center gap-3 text-left transition-colors hover:border-muted/40 group"
  >
    <span className="w-10 h-10 rounded-xl bg-lapis-bg text-lapis flex items-center justify-center shrink-0">
      {icon}
    </span>
    <span className="flex-1 min-w-0">
      <span className="block text-sm font-semibold text-ink truncate">{title}</span>
      <span className="block text-xs text-muted truncate">{subtitle}</span>
    </span>
    <ChevronRight className="w-4 h-4 text-muted shrink-0 transition-transform group-hover:translate-x-0.5" />
  </button>
);
