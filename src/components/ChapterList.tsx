import React, { useState } from 'react';
import { ALL_BOOK_CHAPTERS } from '../data/chaptersData';
import { UserStats, Chapter } from '../types/tajweed';
import { Check, ChevronRight, Clock, Lock, NotebookPen, Play, Trophy } from 'lucide-react';
import { StarMark } from './ui';

interface ChapterListProps {
  onSelectChapter: (chapterNumber: number) => void;
  userStats: UserStats;
  pilotChapters: Chapter[];
  onOpenMistakes: () => void;
  onOpenMakharij?: () => void;
}

/** Titres courts + pictogramme pour les cartes de chaque chapitre. */
const CHAPTER_VISUALS: Record<number, { short: string; icon: string }> = {
  1: { short: 'Les bases & le Lahn', icon: '📜' },
  2: { short: 'Symboles du Mushaf', icon: '🚦' },
  3: { short: 'Arrêt & reprise', icon: '⏸️' },
  4: { short: 'Madd naturel', icon: '📏' },
  5: { short: 'Madd secondaire', icon: '⏳' },
  6: { short: 'Les Hamzahs', icon: '👻' },
  7: { short: 'Lām sākinah', icon: '🌙' },
  8: { short: 'Nūn sākinah & Tanwīn', icon: '👃' },
  9: { short: 'Mīm sākinah', icon: '👄' },
  10: { short: 'Qalqalah', icon: '🏀' },
  11: { short: 'Assimilation (Idghām)', icon: '🔗' },
  12: { short: 'Tafkhīm & Tarqīq', icon: '🏋️' },
  13: { short: 'Deux soukoûns', icon: '🤝' },
  14: { short: 'Lettres isolées', icon: '🔠' },
  15: { short: 'Distinctions subtiles', icon: '🔍' },
  16: { short: 'Cas particuliers', icon: '✨' },
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
        <circle cx="32" cy="32" r={r} fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="5.5" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="var(--gilt)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          className="transition-all duration-700"
        />
      </svg>
      <span className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <span className="font-display text-base font-semibold tabular-nums">{value}</span>
        <span className="text-[10px] opacity-70 tabular-nums">/{total}</span>
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
}) => {
  const getScore = (n: number) => userStats.chapterScores[`chap-${n}`] || 0;
  const isCompleted = (n: number) => userStats.completedChapters.includes(`chap-${n}`);

  const unresolvedCount = userStats.mistakeHistory.filter((m) => !m.retriedSuccessfully).length;
  const availableCount = pilotChapters.length;
  const completedCount = pilotChapters.filter((c) => isCompleted(c.number)).length;

  const next = pilotChapters.find((ch) => !isCompleted(ch.number)) || pilotChapters[0];
  const nextVisual = next ? CHAPTER_VISUALS[next.number] : undefined;

  const scores = pilotChapters.map((c) => getScore(c.number)).filter((s) => s > 0);
  const avgScore = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;

  // L'onglet actif s'ouvre par défaut sur la partie contenant le cours en cours
  const [activePartIdx, setActivePartIdx] = useState<number>(() => {
    const nextNum = next?.number || 1;
    const pIdx = PARTS.findIndex((p) => nextNum >= p.from && nextNum <= p.to);
    return pIdx !== -1 ? pIdx : 0;
  });

  const currentPart = PARTS[activePartIdx];
  const partChapters = ALL_BOOK_CHAPTERS.filter((c) => c.number >= currentPart.from && c.number <= currentPart.to);
  const partAvailable = partChapters.filter((c) => c.isPilot || c.isPilotChapter);
  const partDone = partAvailable.filter((c) => isCompleted(c.number)).length;

  return (
    <div className="pb-16 pt-4 sm:pt-8 space-y-6 sm:space-y-8 animate-enter">
      
      {/* ================= BANNIÈRE D'ACCUEIL & REPRISE (COMPACTE) ================= */}
      {next && (
        <section className="relative overflow-hidden rounded-[24px] bg-lapis text-lapis-ink p-5 sm:p-6 shadow-sm">
          <StarMark className="pointer-events-none absolute -right-10 -top-10 w-44 h-44 text-gilt opacity-[0.16]" />

          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <ProgressRing value={completedCount} total={availableCount} />
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-semibold opacity-75">
                    {completedCount === 0 ? 'Bienvenue' : 'Votre progression'}
                  </span>
                  {avgScore !== null && (
                    <span className="text-[11px] opacity-80 flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full">
                      <Trophy className="w-3 h-3 text-gilt" /> {avgScore}% de réussite
                    </span>
                  )}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold leading-tight truncate">
                  {completedCount > 0 ? `Chapitre ${next.number} : ${nextVisual?.short ?? next.titleFr}` : 'Prêt à commencer le Chapitre 1 ?'}
                </h3>
                <p className="font-ui-ar text-base leading-normal opacity-85 truncate" dir="rtl">
                  {next.titleAr}
                </p>
              </div>
            </div>

            <button
              onClick={() => onSelectChapter(next.number)}
              className="px-6 h-11 rounded-full bg-gilt text-white font-semibold text-sm shadow-sm transition-transform active:scale-[0.98] hover:opacity-95 flex items-center justify-center gap-2 shrink-0 self-start sm:self-auto"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{completedCount > 0 ? 'Continuer' : 'Commencer'}</span>
            </button>
          </div>
        </section>
      )}

      {/* ================= OUTILS RAPIDES EN DUO (COMPACTS) ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {onOpenMakharij && (
          <button
            onClick={onOpenMakharij}
            className="surface p-3.5 sm:p-4 rounded-2xl flex items-center justify-between gap-3 text-left hover:border-emerald-500/50 transition-all active:scale-[0.99] group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                🎙️
              </span>
              <div className="min-w-0">
                <span className="block text-xs font-bold text-ink group-hover:text-emerald-700 dark:group-hover:text-emerald-300 truncate">
                  Labo Makhārij & Sifāt
                </span>
                <span className="block text-[11px] text-muted truncate">
                  17 points d'articulation & 17 attributs
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted shrink-0 group-hover:translate-x-0.5 group-hover:text-ink transition-all" />
          </button>
        )}

        <button
          onClick={onOpenMistakes}
          className="surface p-3.5 sm:p-4 rounded-2xl flex items-center justify-between gap-3 text-left hover:border-gilt transition-all active:scale-[0.99] group"
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-10 h-10 rounded-xl bg-gilt-soft text-gilt flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
              <NotebookPen className="w-5 h-5" />
            </span>
            <div className="min-w-0">
              <span className="block text-xs font-bold text-ink group-hover:text-gilt truncate">
                Cahier d'erreurs
              </span>
              <span className="block text-[11px] text-muted truncate">
                {unresolvedCount > 0 ? `${unresolvedCount} question${unresolvedCount > 1 ? 's' : ''} à consolider` : '0 erreur en attente'}
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted shrink-0 group-hover:translate-x-0.5 group-hover:text-ink transition-all" />
        </button>
      </div>

      {/* ================= SÉLECTEUR DE PALIER PAR ONGLETS ================= */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between px-1">
          <p className="text-xs font-bold uppercase tracking-wider text-muted">
            Programme d'étude par palier
          </p>
          <span className="text-xs text-muted font-medium">
            Partie {activePartIdx + 1} sur {PARTS.length}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PARTS.map((part, pIdx) => {
            const isCurrent = activePartIdx === pIdx;
            const pChapters = ALL_BOOK_CHAPTERS.filter((c) => c.number >= part.from && c.number <= part.to);
            const pDone = pChapters.filter((c) => isCompleted(c.number)).length;

            return (
              <button
                key={pIdx}
                onClick={() => setActivePartIdx(pIdx)}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  isCurrent
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 border-neutral-900 dark:border-neutral-100 shadow-sm'
                    : 'bg-card text-muted hover:text-ink hover:bg-soft border-line'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider opacity-75 mb-0.5">
                  <span>Partie {pIdx + 1}</span>
                  <span className="tabular-nums font-mono">{pDone}/{pChapters.length}</span>
                </div>
                <span className="block text-xs font-bold truncate">
                  {part.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= ROADMAP CONNECTÉE DU PALIER ACTIF ================= */}
      <section className="space-y-4 pt-1">
        {/* En-tête du palier sélectionné */}
        <div className="surface p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-3 border-line">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gilt">
                Partie {activePartIdx + 1}
              </span>
              <span className="text-muted text-xs">•</span>
              <span className="text-xs text-muted font-medium">
                {partChapters.length} chapitres
              </span>
            </div>
            <h2 className="font-display text-lg sm:text-xl font-bold text-ink leading-tight mt-0.5">
              {currentPart.title}
            </h2>
            <p className="text-xs text-muted mt-0.5">
              {currentPart.subtitle}
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold tabular-nums bg-soft text-ink">
              {partDone}/{partChapters.length} validés
            </span>
          </div>
        </div>

        {/* Ligne connectée verticale */}
        <div className="relative pl-6 sm:pl-8 space-y-4 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-line">
          {partChapters.map((ch, idx) => {
            const visual = CHAPTER_VISUALS[ch.number];
            const pilot = pilotChapters.find((p) => p.number === ch.number);
            const isDone = isCompleted(ch.number);
            const isNext = next?.number === ch.number && !isDone;
            const score = getScore(ch.number);
            const pitch = CHAPTER_PITCHES[ch.number];

            if ((!ch.isPilot && !ch.isPilotChapter) || !pilot) {
              return (
                <div key={ch.number} className="relative opacity-60 select-none">
                  <span className="absolute -left-6 sm:-left-8 top-3.5 w-6 h-6 rounded-full bg-soft border border-line text-muted text-xs font-semibold flex items-center justify-center ring-4 ring-paper">
                    {ch.number}
                  </span>
                  <div className="surface p-4 rounded-2xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-2xl grayscale shrink-0">{visual?.icon}</span>
                      <div className="min-w-0">
                        <span className="text-[11px] text-muted">Chapitre {ch.number}</span>
                        <h4 className="text-sm font-semibold text-ink truncate">{visual?.short ?? ch.titleFr}</h4>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-muted shrink-0">
                      <Lock className="w-3.5 h-3.5" /> Bientôt
                    </span>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={ch.number}
                className="relative group cursor-pointer animate-enter"
                style={{ animationDelay: `${idx * 40}ms` }}
                onClick={() => onSelectChapter(ch.number)}
              >
                {/* Nœud de la timeline */}
                <span
                  className={`absolute -left-6 sm:-left-8 top-3.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full text-xs flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isDone
                      ? 'bg-good text-white ring-4 ring-paper shadow-2xs'
                      : isNext
                      ? 'bg-gilt text-white font-bold ring-4 ring-paper shadow-sm'
                      : 'bg-card border-2 border-line text-muted font-semibold ring-4 ring-paper'
                  }`}
                >
                  {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : ch.number}
                </span>

                {/* Carte de l'étape */}
                <div
                  className={`surface p-4 sm:p-5 rounded-2xl transition-all active:scale-[0.99] space-y-2.5 ${
                    isNext
                      ? 'border-2 border-gilt/60 bg-gilt-soft/30 shadow-xs ring-1 ring-gilt/30'
                      : 'hover:border-lapis/50 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-2xl">{visual?.icon}</span>
                      <span className="text-xs text-muted font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3 text-muted" />
                        ~{pilot.estimatedMinutes} min
                      </span>
                      {isNext && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gilt text-white">
                          À suivre
                        </span>
                      )}
                      {score > 0 && (
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-full tabular-nums ${
                            score >= 80 ? 'bg-good-bg text-good' : 'bg-soft text-ink'
                          }`}
                        >
                          Score : {score}%
                        </span>
                      )}
                    </div>

                    <span
                      className={`text-xs font-bold flex items-center gap-1 shrink-0 ${
                        isNext ? 'text-gilt' : 'text-muted group-hover:text-ink'
                      } transition-colors`}
                    >
                      <span>{isNext ? 'Continuer' : isDone ? 'Revoir' : 'Explorer'}</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink leading-tight group-hover:text-lapis transition-colors">
                      {visual?.short ?? ch.titleFr}
                    </h3>
                    <p className="font-ui-ar text-base sm:text-lg text-lapis font-semibold mt-0.5" dir="rtl">
                      {ch.titleAr}
                    </p>
                  </div>

                  {pitch && (
                    <p className="text-xs text-muted leading-relaxed pt-1 border-t border-line/60">
                      {pitch}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Jalon de transition vers le palier suivant */}
        <div className="surface p-4 rounded-2xl flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-ink">
            <span>🏁</span>
            <span>
              {activePartIdx < PARTS.length - 1 ? (
                <>Palier suivant : <strong>Partie {activePartIdx + 2} ({PARTS[activePartIdx + 1].title})</strong></>
              ) : (
                <strong>Félicitations ! Vous parcourez le palier d'excellence.</strong>
              )}
            </span>
          </div>

          <button
            onClick={() => setActivePartIdx(activePartIdx === PARTS.length - 1 ? 0 : activePartIdx + 1)}
            className="btn btn-secondary text-xs h-8 px-3 shrink-0"
          >
            {activePartIdx === PARTS.length - 1 ? 'Revoir Partie 1 ↺' : 'Palier suivant →'}
          </button>
        </div>
      </section>

      <p className="pt-2 flex items-start gap-2 text-xs text-muted px-1">
        <StarMark className="w-4 h-4 text-gilt shrink-0" />
        <span>
          Riwāyah Hafs ʿan ʿĀṣim · d'après le <em>Learners' Handbook of Tajweed</em> de Islām Fekry (Arabic101).
        </span>
      </p>
    </div>
  );
};
