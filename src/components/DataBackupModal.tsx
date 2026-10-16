import React, { useState } from 'react';
import { exportUserDataJSON, importUserDataJSON } from '../services/storageService';
import { Download, Upload, Check, AlertCircle } from 'lucide-react';
import { Modal } from './ui';

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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Sauvegarde"
      subtitle="Votre progression reste sur cet appareil. Exportez-la pour la garder ou la transférer."
      maxWidth="max-w-lg"
    >
      <section>
        <h3 className="text-[15px] font-semibold text-ink">Exporter ma progression</h3>
        <p className="mt-1 text-sm text-muted">
          Un fichier avec vos chapitres terminés, vos scores et votre cahier d'erreurs.
        </p>
        <button onClick={handleDownload} className="btn btn-primary mt-4">
          <Download className="w-4 h-4" />
          Télécharger le fichier
        </button>
      </section>

      <section className="mt-6 pt-6 border-t border-line">
        <h3 className="text-[15px] font-semibold text-ink">Restaurer une sauvegarde</h3>
        <p className="mt-1 text-sm text-muted">Collez le contenu du fichier exporté.</p>
        <textarea
          value={importText}
          onChange={(e) => {
            setImportText(e.target.value);
            setImportStatus('idle');
          }}
          placeholder='{"completedChapters": [...], "chapterScores": {...}}'
          className="mt-3 w-full h-28 p-3 rounded-2xl border border-line bg-soft text-sm text-ink placeholder:text-muted/70 focus:outline-none focus:border-lapis"
        />

        {importStatus === 'success' && (
          <p className="mt-2 flex items-center gap-1.5 text-sm text-good">
            <Check className="w-4 h-4" /> Progression restaurée.
          </p>
        )}
        {importStatus === 'error' && (
          <p className="mt-2 flex items-center gap-1.5 text-sm text-bad">
            <AlertCircle className="w-4 h-4" /> Ce contenu n'est pas une sauvegarde valide. Vérifiez que vous avez collé tout le fichier.
          </p>
        )}

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="btn btn-ghost">Annuler</button>
          <button onClick={handleImport} disabled={!importText.trim()} className="btn btn-primary">
            <Upload className="w-4 h-4" />
            Restaurer
          </button>
        </div>
      </section>
    </Modal>
  );
};
