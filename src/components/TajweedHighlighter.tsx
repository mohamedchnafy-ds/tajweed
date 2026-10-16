import React from 'react';

export type TajweedRuleType =
  | 'madd-6'
  | 'madd-4-5'
  | 'madd-2'
  | 'madd'
  | 'ghunnah'
  | 'idgham'
  | 'ikhfa'
  | 'iqlab'
  | 'qalqalah'
  | 'tafkhim'
  | 'silent'
  | 'izhar'
  | 'waqf'
  | 'gold'
  | 'error'
  | 'correct';

interface RuleStyleConfig {
  label: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  badgeText: string;
}

export const TAJWEED_RULE_STYLES: Record<TajweedRuleType, RuleStyleConfig> = {
  'madd-6': {
    label: 'Madd Lāzim (6 temps)',
    colorClass: 'text-[#991b1b] dark:text-[#f87171]',
    bgClass: 'bg-[#fee2e2]/70 dark:bg-[#450a0a]/50',
    borderClass: 'border-[#fca5a5] dark:border-[#991b1b]',
    badgeText: 'Madd 6t',
  },
  'madd-4-5': {
    label: 'Madd Wājib / Munfasil (4-5 temps)',
    colorClass: 'text-[#dc2626] dark:text-[#fca5a5]',
    bgClass: 'bg-[#fef2f2]/70 dark:bg-[#3f1212]/50',
    borderClass: 'border-[#fecaca] dark:border-[#dc2626]',
    badgeText: 'Madd 4-5t',
  },
  'madd-2': {
    label: 'Madd Ṭabīʿī / Badal (2 temps)',
    colorClass: 'text-[#c2410c] dark:text-[#fb923c]',
    bgClass: 'bg-[#ffedd5]/70 dark:bg-[#381a0e]/50',
    borderClass: 'border-[#fed7aa] dark:border-[#c2410c]',
    badgeText: 'Madd 2t',
  },
  'madd': {
    label: 'Prolongation (Madd)',
    colorClass: 'text-[#dc2626] dark:text-[#fca5a5]',
    bgClass: 'bg-[#fef2f2]/70 dark:bg-[#3f1212]/50',
    borderClass: 'border-[#fecaca] dark:border-[#dc2626]',
    badgeText: 'Madd',
  },
  'ghunnah': {
    label: 'Ghunnah nasale (2 temps)',
    colorClass: 'text-[#15803d] dark:text-[#4ade80]',
    bgClass: 'bg-[#dcfce7]/70 dark:bg-[#052e16]/50',
    borderClass: 'border-[#86efac] dark:border-[#15803d]',
    badgeText: 'Ghunnah 2t',
  },
  'idgham': {
    label: 'Idghām (Fusion)',
    colorClass: 'text-[#15803d] dark:text-[#4ade80]',
    bgClass: 'bg-[#dcfce7]/70 dark:bg-[#052e16]/50',
    borderClass: 'border-[#86efac] dark:border-[#15803d]',
    badgeText: 'Idghām',
  },
  'ikhfa': {
    label: 'Ikhfāʾ (Dissimulation & Ghunnah)',
    colorClass: 'text-[#0f766e] dark:text-[#2dd4bf]',
    bgClass: 'bg-[#ccfbf1]/70 dark:bg-[#134e4a]/50',
    borderClass: 'border-[#99f6e4] dark:border-[#0f766e]',
    badgeText: 'Ikhfāʾ',
  },
  'iqlab': {
    label: 'Iqlāb (Conversion en Mīm doux)',
    colorClass: 'text-[#7e22ce] dark:text-[#c084fc]',
    bgClass: 'bg-[#f3e8ff]/70 dark:bg-[#3b0764]/50',
    borderClass: 'border-[#d8b4fe] dark:border-[#7e22ce]',
    badgeText: 'Iqlāb',
  },
  'qalqalah': {
    label: 'Qalqalah (Rebond acoustique)',
    colorClass: 'text-[#0284c7] dark:text-[#38bdf8]',
    bgClass: 'bg-[#e0f2fe]/70 dark:bg-[#082f49]/50',
    borderClass: 'border-[#7dd3fc] dark:border-[#0284c7]',
    badgeText: 'Qalqalah',
  },
  'tafkhim': {
    label: 'Tafkhīm (Emphase / Lourdeur)',
    colorClass: 'text-[#1d4ed8] dark:text-[#60a5fa]',
    bgClass: 'bg-[#dbeafe]/70 dark:bg-[#172554]/50',
    borderClass: 'border-[#93c5fd] dark:border-[#1d4ed8]',
    badgeText: 'Tafkhīm',
  },
  'silent': {
    label: 'Lettre muette non prononcée',
    colorClass: 'text-[#64748b] dark:text-[#94a3b8] opacity-60 line-through decoration-dotted',
    bgClass: 'bg-[#f1f5f9]/70 dark:bg-[#1e293b]/50',
    borderClass: 'border-[#cbd5e1] dark:border-[#475569]',
    badgeText: 'Muette',
  },
  'izhar': {
    label: 'Izhār (Clarté distincte)',
    colorClass: 'text-[#2563eb] dark:text-[#93c5fd]',
    bgClass: 'bg-[#eff6ff]/70 dark:bg-[#1e3a8a]/40',
    borderClass: 'border-[#bfdbfe] dark:border-[#2563eb]',
    badgeText: 'Izhār',
  },
  'waqf': {
    label: 'Symbole de pause (Waqf)',
    colorClass: 'text-[#b45309] dark:text-[#fbbf24]',
    bgClass: 'bg-[#fef3c7]/70 dark:bg-[#451a03]/50',
    borderClass: 'border-[#fde68a] dark:border-[#b45309]',
    badgeText: 'Waqf',
  },
  'error': {
    label: 'Erreur à proscrire (Lahn)',
    colorClass: 'text-[#b91c1c] dark:text-[#f87171] font-bold',
    bgClass: 'bg-[#fee2e2]/80 dark:bg-[#450a0a]/60',
    borderClass: 'border-[#ef4444] dark:border-[#dc2626]',
    badgeText: 'Erreur ❌',
  },
  'gold': {
    label: 'Segment ciblé',
    colorClass: 'text-[#8f6d24] dark:text-[#d6b46a] font-bold',
    bgClass: 'bg-[#f5efe1] dark:bg-[#2a2516]',
    borderClass: 'border-[#d6b46a] dark:border-[#8f6d24]',
    badgeText: 'Cible',
  },
  'correct': {
    label: 'Récitation conforme',
    colorClass: 'text-[#15803d] dark:text-[#4ade80] font-bold',
    bgClass: 'bg-[#dcfce7]/80 dark:bg-[#052e16]/60',
    borderClass: 'border-[#22c55e] dark:border-[#16a34a]',
    badgeText: 'Conforme ✓',
  },
};

export interface TajweedTextProps {
  /** Le texte arabe complet (verset ou exemple) */
  text: string;
  /** Le segment ou mot clé à mettre en valeur */
  highlightSegment?: string;
  /** Lettres clés à surligner directement (ex: ['تَ', 'ق', 'ن']) */
  highlightLetters?: string[];
  /** Type de règle Tajwīd selon la classification de Dar al-Ma'rifah */
  rule?: TajweedRuleType;
  /** Classe CSS additionnelle */
  className?: string;
  /** Affiche un badge discret de règle au-dessus ou sous le texte */
  showBadge?: boolean;
  /** Rendu interactif (clic pour voir le tooltip de la règle) */
  interactive?: boolean;
}

/**
 * Normalise les caractères arabes diacritiques pour permettre une recherche de sous-chaîne
 * robuste même si une micro-différence d'encodage subsiste.
 */
function cleanForSearch(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '') // Enlève harakāt temporairement pour la détection
    .trim();
}

/**
 * Découpe sécurisée du texte arabe sans casser les ligatures cursives.
 */
export const TajweedText: React.FC<TajweedTextProps> = ({
  text,
  highlightSegment,
  highlightLetters = [],
  rule = 'izhar',
  className = '',
  showBadge = false,
}) => {
  const cfg = TAJWEED_RULE_STYLES[rule] || TAJWEED_RULE_STYLES.izhar;

  // Si aucun segment ni lettre n'est spécifié, afficher le texte avec l'accentuation si spécifié
  if (!highlightSegment && (!highlightLetters || highlightLetters.length === 0)) {
    return (
      <span className={`inline-block font-ar ${className}`} dir="rtl">
        {text}
        {showBadge && (
          <span className={`mr-2 align-middle text-[10px] font-sans px-1.5 py-0.5 rounded-full border ${cfg.bgClass} ${cfg.colorClass} ${cfg.borderClass}`}>
            {cfg.badgeText}
          </span>
        )}
      </span>
    );
  }

  // 1. Recherche par highlightSegment exact ou normalisé
  if (highlightSegment && text.includes(highlightSegment)) {
    const parts = text.split(highlightSegment);
    return (
      <span className={`inline-block font-ar ${className}`} dir="rtl">
        {parts.map((part, idx) => (
          <React.Fragment key={idx}>
            <span>{part}</span>
            {idx < parts.length - 1 && (
              <span
                className={`inline-block px-1.5 py-0.5 rounded-lg border transition-all ${cfg.bgClass} ${cfg.colorClass} ${cfg.borderClass} font-semibold shadow-xs`}
                title={`${cfg.label} : ${highlightSegment}`}
              >
                {highlightSegment}
              </span>
            )}
          </React.Fragment>
        ))}
        {showBadge && (
          <span className={`mr-2 align-middle text-[10px] font-sans px-1.5 py-0.5 rounded-full border ${cfg.bgClass} ${cfg.colorClass} ${cfg.borderClass}`}>
            {cfg.badgeText}
          </span>
        )}
      </span>
    );
  }

  // 2. Recherche par highlightLetters dans le texte (préserve harakāt et diacritiques)
  if (highlightLetters && highlightLetters.length > 0) {
    const DIACRITICS = '[\\u064B-\\u065F\\u0670\\u06D6-\\u06ED]';
    const tokens: string[] = [];

    const hasHamzahQat = highlightLetters.some(l => /[ءأإؤئآ]/.test(l));
    const hasHamzahWasl = highlightLetters.some(l => l.includes('ٱ'));

    if (hasHamzahQat) {
      tokens.push(`[ءأإؤئآ]${DIACRITICS}*`);
    }
    if (hasHamzahWasl) {
      tokens.push(`ٱ${DIACRITICS}*`);
    }

    for (const item of highlightLetters) {
      // Ignorer si déjà couvert par les règles Hamzahs globales
      if (hasHamzahQat && /^[ءأإؤئآ]$/.test(item)) continue;
      if (hasHamzahWasl && item === 'ٱ') continue;

      const cleanItem = item.replace(/[\u0640]/g, '');
      const escaped = cleanItem.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      const hasDiacritics = new RegExp(DIACRITICS).test(cleanItem);

      // Si c'est une lettre de base sans voyelle, capturer la lettre et toutes ses harakāt attachées
      if (!hasDiacritics && cleanItem.length === 1) {
        tokens.push(`${escaped}${DIACRITICS}*`);
      } else {
        tokens.push(escaped);
      }
    }

    if (tokens.length > 0) {
      tokens.sort((a, b) => b.length - a.length);
      const regex = new RegExp(`(${tokens.join('|')})`, 'g');
      const parts = text.split(regex);

      return (
        <span className={`inline-block font-ar ${className}`} dir="rtl">
          {parts.map((part, idx) => {
            // Dans text.split(withCapturingGroup), les indices impairs sont les correspondances
            const isMatch = idx % 2 === 1 && part.length > 0;
            if (isMatch) {
              return (
                <span
                  key={idx}
                  className={`inline-block px-1 py-0.5 rounded-md border ${cfg.bgClass} ${cfg.colorClass} ${cfg.borderClass} font-bold shadow-xs transition-transform`}
                  title={`${cfg.label} : ${part}`}
                >
                  {part}
                </span>
              );
            }
            return <span key={idx}>{part}</span>;
          })}
          {showBadge && (
            <span className={`mr-2 align-middle text-[10px] font-sans px-1.5 py-0.5 rounded-full border ${cfg.bgClass} ${cfg.colorClass} ${cfg.borderClass}`}>
              {cfg.badgeText}
            </span>
          )}
        </span>
      );
    }
  }

  // Fallback si le segment exact n'a pas été trouvé (ex: différence de signe diacritique mineure)
  return (
    <span className={`inline-block font-ar ${className}`} dir="rtl">
      <span className={`inline-block px-1.5 py-0.5 rounded-lg border ${cfg.bgClass} ${cfg.colorClass} ${cfg.borderClass}`}>
        {text}
      </span>
      {showBadge && (
        <span className={`mr-2 align-middle text-[10px] font-sans px-1.5 py-0.5 rounded-full border ${cfg.bgClass} ${cfg.colorClass} ${cfg.borderClass}`}>
          {cfg.badgeText}
        </span>
      )}
    </span>
  );
};
