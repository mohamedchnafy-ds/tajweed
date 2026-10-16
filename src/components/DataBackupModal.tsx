import React, { useState } from 'react';
import { exportUserDataJSON, importUserDataJSON } from '../services/storageService';
import { X, Download, Upload, Check, AlertCircle } from 'lucide-react';

interface DataBackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRefresh: () => void;
}

export const DataBackupModal: React.FC<DataBackupModalProps> = ({
  isOpen,
  onClose,
  onRefresh,
}) => {
  const [importText, setImportText] = useState('');
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleDownload = () => {
    const data = exportUserDataJSON();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tajwid-progression-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    if (!importText.trim()) return;
    const ok = importUserDataJSON(importText);
    if (ok) {
      setImportStatus('success');
      onRefresh();
      setTimeout(() => {
        onClose();
      }, 1200);
    } else {
      setImportStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-neutral-950 dark:text-neutral-50">
                Sauvegarde & Données
              </h2>
              <p className="text-xs text-neutral-500">
                100% Local : Vos données vous appartiennent.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Export Section */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
            1. Exporter ma progression (JSON)
          </h3>
          <p className="text-xs text-neutral-500 mb-3">
            Téléchargez un fichier contenant vos chapitres complétés, vos scores de quiz et votre cahier d'erreurs.
          </p>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-xs font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Télécharger ma sauvegarde</span>
          </button>
        </div>

        {/* Import Section */}
        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <h3 className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
            2. Importer une sauvegarde
          </h3>
          <p className="text-xs text-neutral-500 mb-2">
            Collez ci-dessous le contenu de votre fichier JSON de sauvegarde :
          </p>
          <textarea
            value={importText}
            onChange={(e) => {
              setImportText(e.target.value);
              setImportStatus('idle');
            }}
            placeholder='{"completedChapters": [...], "chapterScores": {...}}'
            className="w-full h-24 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-xs font-mono text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-1 focus:ring-neutral-900 mb-3"
          />

          {importStatus === 'success' && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 mb-3">
              <Check className="w-4 h-4" />
              <span>Progression restaurée avec succès !</span>
            </div>
          )}

          {importStatus === 'error' && (
            <div className="flex items-center gap-1.5 text-xs text-rose-600 mb-3">
              <AlertCircle className="w-4 h-4" />
              <span>Format JSON invalide. Veuillez vérifier le contenu.</span>
            </div>
          )}

          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={handleImport}
              disabled={!importText.trim()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-xs font-medium hover:opacity-90 disabled:opacity-40 transition-opacity"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Restaurer</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
