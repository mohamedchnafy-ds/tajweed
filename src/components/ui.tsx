import React from 'react';

/** Étoile à huit branches (rub el hizb), le repère des sections dans le Mushaf. */
export const StarMark: React.FC<{ className?: string; filled?: boolean }> = ({ className = 'w-5 h-5', filled = false }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <g fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <rect x="5" y="5" width="14" height="14" />
      <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
    </g>
    {!filled && <circle cx="12" cy="12" r="2.2" fill="currentColor" />}
  </svg>
);

/** Médaillon numéroté, inspiré du marqueur de fin de verset. */
export const Medallion: React.FC<{
  value: React.ReactNode;
  size?: 'sm' | 'lg';
  tone?: 'gilt' | 'muted' | 'good';
}> = ({ value, size = 'sm', tone = 'gilt' }) => {
  const dim = size === 'lg' ? 'w-14 h-14 text-xl' : 'w-10 h-10 text-[15px]';
  const color = tone === 'gilt' ? 'text-gilt' : tone === 'good' ? 'text-good' : 'text-line';
  return (
    <span className={`relative inline-flex shrink-0 items-center justify-center ${dim}`}>
      <svg viewBox="0 0 48 48" className={`absolute inset-0 w-full h-full ${color}`} aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
          <rect x="10" y="10" width="28" height="28" />
          <rect x="10" y="10" width="28" height="28" transform="rotate(45 24 24)" />
        </g>
      </svg>
      <span
        className={`relative font-display font-medium tabular-nums ${tone === 'muted' ? 'text-muted' : 'text-ink'} ${
          String(value).length > 1 ? (size === 'lg' ? 'text-base' : 'text-xs') : ''
        }`}
      >
        {value}
      </span>
    </span>
  );
};

/** En-tête commun aux six étapes d'un chapitre. */
export const StepHeader: React.FC<{
  step: number;
  title: React.ReactNode;
  description?: React.ReactNode;
  aside?: React.ReactNode;
}> = ({ step, title, description, aside }) => (
  <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
    <div className="max-w-2xl">
      <p className="label mb-2">Étape {step} sur 6</p>
      <h1 className="font-display text-[32px] sm:text-[40px] leading-[1.1] font-normal tracking-[-0.01em] text-ink">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>
      )}
    </div>
    {aside && <div className="shrink-0">{aside}</div>}
  </header>
);

/** Fenêtre modale sobre, commune aux deux dialogues. */
export const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  maxWidth?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}> = ({ isOpen, onClose, title, subtitle, maxWidth = 'max-w-2xl', children, footer }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-[#0b1020]/50 backdrop-blur-sm animate-fade"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className={`w-full ${maxWidth} max-h-[90vh] flex flex-col bg-card text-ink rounded-t-[24px] sm:rounded-[24px] shadow-2xl overflow-hidden animate-enter`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl leading-tight">{title}</h2>
            {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
          </div>
          <button onClick={onClose} className="btn btn-ghost btn-icon -mr-2 -mt-1" aria-label="Fermer">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="px-6 pb-6 overflow-y-auto flex-1">{children}</div>
        {footer && <div className="px-6 py-4 border-t border-line flex justify-end gap-2">{footer}</div>}
      </div>
    </div>
  );
};
