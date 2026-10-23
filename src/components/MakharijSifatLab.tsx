import React, { useState } from 'react';
import { GENERAL_MAKHAREJ, ALL_28_LETTERS, SIFAT_CLASSIFICATION, LetterProfile, GeneralMakhraj } from '../data/makharijSifatData';
import { ArrowLeft, BookOpen, Volume2, Sparkles, CheckCircle2, AlertTriangle, Layers, Info } from 'lucide-react';
import { Modal } from './ui';

interface MakharijSifatLabProps {
  onBack: () => void;
}

export const MakharijSifatLab: React.FC<MakharijSifatLabProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'makharij' | 'letters' | 'sifat'>('makharij');
  const [selectedMakhraj, setSelectedMakhraj] = useState<GeneralMakhraj | null>(GENERAL_MAKHAREJ[1]); // Default to Al-Halq
  const [selectedLetter, setSelectedLetter] = useState<LetterProfile | null>(null);
  const [filterRegion, setFilterRegion] = useState<string>('all');

  const filteredLetters = filterRegion === 'all'
    ? ALL_28_LETTERS
    : ALL_28_LETTERS.filter(l => l.generalMakhraj === filterRegion);

  return (
    <div className="pb-20 pt-4 max-w-4xl mx-auto px-4 space-y-6 animate-enter">
      {/* ================= HEADER BAR ================= */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-line bg-card hover:bg-soft text-ink text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour aux chapitres</span>
        </button>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          Source : التجويد المبسط
        </span>
      </div>

      {/* ================= HERO BANNER ================= */}
      <div className="rounded-[24px] bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Laboratoire Phonétique Fondamental</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
            Les Points d'Articulation & Caractéristiques
          </h1>
          <p className="font-ui-ar text-xl text-emerald-200" dir="rtl">
            مَخَارِجُ الحُرُوفِ العَرَبِيَّةِ وَصِفَاتُهَا
          </p>
          <p className="text-white/80 text-sm leading-relaxed pt-1">
            Le pilier n°1 de la récitation coranique : donner à chaque consonne sa sortie exacte parmi les 17 <em>Makhārij</em> et ses attributs originels (force, souffle, emphase, résonance).
          </p>
        </div>
      </div>

      {/* ================= NAVIGATION TABS ================= */}
      <div className="flex rounded-2xl bg-soft p-1.5 border border-line gap-1">
        <button
          onClick={() => setActiveTab('makharij')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'makharij'
              ? 'bg-card text-ink shadow-xs border border-line'
              : 'text-muted hover:text-ink'
          }`}
        >
          <span>🎙️ 5 Régions (17 Sorties)</span>
        </button>
        <button
          onClick={() => setActiveTab('letters')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'letters'
              ? 'bg-card text-ink shadow-xs border border-line'
              : 'text-muted hover:text-ink'
          }`}
        >
          <span>🔤 28 Fiches Lettres</span>
        </button>
        <button
          onClick={() => setActiveTab('sifat')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'sifat'
              ? 'bg-card text-ink shadow-xs border border-line'
              : 'text-muted hover:text-ink'
          }`}
        >
          <span>⚖️ Les 17 Attributs (Sifāt)</span>
        </button>
      </div>

      {/* ================= TAB 1: LES 5 RÉGIONS (MAKHAREJ) ================= */}
      {activeTab === 'makharij' && (
        <div className="space-y-6 animate-enter">
          {/* Poème Jazariyyah Intro */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-ink space-y-1 text-center">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-300">
              Le Verset Fondateur d'Ibn Al-Jazarī (متن الجزرية)
            </p>
            <p className="font-ui-ar text-xl text-amber-800 dark:text-amber-200 font-semibold" dir="rtl">
              مَخَارِجُ الحُرُوفِ سَبْعَةَ عَشَرْ ... عَلَى الَّذِي يَخْتَارُهُ مَنِ اخْتَبَرْ
            </p>
            <p className="text-xs text-muted">
              « Les points de sortie des lettres sont au nombre de dix-sept, selon l'avis retenu par les plus érudits des maîtres phonéticiens. »
            </p>
          </div>

          {/* Cards of the 5 General Makhaarij */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {GENERAL_MAKHAREJ.map((m) => {
              const isSelected = selectedMakhraj?.id === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMakhraj(m)}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 relative overflow-hidden active:scale-[0.99] ${
                    isSelected
                      ? 'bg-card border-2 shadow-sm'
                      : 'bg-card/70 border-line hover:border-line-hover hover:bg-card'
                  }`}
                  style={{
                    borderColor: isSelected ? m.color : undefined,
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: m.color }}>
                        {m.specificCount} sortie{m.specificCount > 1 ? 's' : ''}
                      </span>
                      <h3 className="font-display font-bold text-base mt-2 text-ink">
                        {m.titleFr}
                      </h3>
                    </div>
                    <span className="font-ui-ar text-2xl font-bold" dir="rtl" style={{ color: m.color }}>
                      {m.titleAr}
                    </span>
                  </div>

                  <p className="text-xs text-muted leading-relaxed line-clamp-2">
                    {m.descriptionFr}
                  </p>

                  <div className="pt-2 border-t border-line/60 flex items-center justify-between text-xs">
                    <span className="text-muted">Lettres :</span>
                    <div className="flex gap-1" dir="rtl">
                      {m.letters.map((l, i) => (
                        <span key={i} className="font-ui-ar font-bold text-base px-1.5 py-0.5 rounded bg-soft text-ink">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed view of selected General Makhraj */}
          {selectedMakhraj && (
            <div className="p-5 sm:p-6 rounded-2xl bg-card border border-line shadow-xs space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-muted">
                    Région sélectionnée
                  </span>
                  <h2 className="font-display text-xl font-bold text-ink">
                    {selectedMakhraj.titleFr} ({selectedMakhraj.titleAr})
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setFilterRegion(selectedMakhraj.id);
                    setActiveTab('letters');
                  }}
                  className="px-3 py-1.5 rounded-xl bg-primary text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  Voir les {selectedMakhraj.lettersCount} lettres associées →
                </button>
              </div>

              <p className="text-sm text-ink/90 leading-relaxed">
                {selectedMakhraj.descriptionFr}
              </p>

              <div className="p-3.5 rounded-xl bg-soft/80 border border-line flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted">Verset de référence de la Jazariyyah :</p>
                  <p className="font-ui-ar text-base font-semibold text-ink" dir="rtl">
                    {selectedMakhraj.jazariyyahVerse}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 2: LES 28 FICHES LETTRES ================= */}
      {activeTab === 'letters' && (
        <div className="space-y-5 animate-enter">
          {/* Region filter pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-muted shrink-0 mr-1">Filtrer :</span>
            <button
              onClick={() => setFilterRegion('all')}
              className={`px-3 py-1.5 rounded-full font-semibold transition-colors shrink-0 ${
                filterRegion === 'all'
                  ? 'bg-ink text-paper'
                  : 'bg-soft text-muted hover:text-ink border border-line'
              }`}
            >
              Toutes (28)
            </button>
            {GENERAL_MAKHAREJ.map(m => (
              <button
                key={m.id}
                onClick={() => setFilterRegion(m.id)}
                className={`px-3 py-1.5 rounded-full font-semibold transition-colors shrink-0 flex items-center gap-1 ${
                  filterRegion === m.id
                    ? 'bg-ink text-paper'
                    : 'bg-soft text-muted hover:text-ink border border-line'
                }`}
              >
                <span>{m.titleFr.split('(')[0].trim()}</span>
                <span className="text-[10px] opacity-70">({m.lettersCount})</span>
              </button>
            ))}
          </div>

          {/* 28 Letters Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5" dir="rtl">
            {filteredLetters.map((l) => (
              <button
                key={l.letter}
                onClick={() => setSelectedLetter(l)}
                className="p-3 rounded-2xl bg-card border border-line hover:border-emerald-500 hover:shadow-xs transition-all flex flex-col items-center justify-center gap-1 group active:scale-95"
              >
                <span className="font-ui-ar text-3xl font-bold text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {l.letter}
                </span>
                <span className="text-[11px] font-medium text-muted text-center truncate w-full" dir="ltr">
                  {l.nameFr}
                </span>
                <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${
                  l.strength.includes('Forte')
                    ? 'bg-red-500/10 text-red-600 dark:text-red-400'
                    : l.strength.includes('Faible')
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                }`}>
                  {l.strength.includes('Forte') ? 'Forte' : l.strength.includes('Faible') ? 'Faible' : 'Moyenne'}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 3: LES 17 ATTRIBUTS (SIFÂT) ================= */}
      {activeTab === 'sifat' && (
        <div className="space-y-6 animate-enter">
          {/* Header intro */}
          <div className="p-4 rounded-2xl bg-soft border border-line text-xs space-y-1">
            <p className="font-bold text-ink">Qu'est-ce qu'une Sifah (صِفَة) ?</p>
            <p className="text-muted leading-relaxed">
              La <em>Sifah</em> est la manière dont la lettre résonne et s'articule : blocage ou écoulement du son, souffle, élévation de la langue, sifflement, ou rebond. Elle permet de distinguer deux lettres qui partagent le même point de sortie (comme le Tā' ط et le Tā' ت) !
            </p>
          </div>

          {/* 1. Attributs avec opposés (Al-Mutadāddah) */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Les 5 Paires d'Attributs Opposés (10 Sifāt)</span>
            </h3>

            <div className="space-y-3">
              {SIFAT_CLASSIFICATION.withOpposites.map((pair, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-card border border-line space-y-3 shadow-2xs">
                  <h4 className="font-semibold text-sm text-ink">{pair.titleFr}</h4>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs">
                    {/* First attribute */}
                    <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
                      <span className="font-bold text-emerald-700 dark:text-emerald-300 block">
                        {(pair as any).hams?.nameFr || (pair as any).shiddah?.nameFr || (pair as any).istila?.nameFr || (pair as any).itbaq?.nameFr || (pair as any).idhlaq?.nameFr}
                      </span>
                      {((pair as any).hams?.mnemonic || (pair as any).shiddah?.mnemonic || (pair as any).istila?.mnemonic || (pair as any).itbaq?.mnemonic || (pair as any).idhlaq?.mnemonic) && (
                        <p className="font-ui-ar text-sm font-bold text-ink" dir="rtl">
                          {(pair as any).hams?.mnemonic || (pair as any).shiddah?.mnemonic || (pair as any).istila?.mnemonic || (pair as any).itbaq?.mnemonic || (pair as any).idhlaq?.mnemonic}
                        </p>
                      )}
                      <p className="text-muted leading-relaxed">
                        {(pair as any).hams?.definitionFr || (pair as any).shiddah?.definitionFr || (pair as any).istila?.definitionFr || (pair as any).itbaq?.definitionFr || (pair as any).idhlaq?.definitionFr}
                      </p>
                    </div>

                    {/* Second attribute */}
                    <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/20 space-y-1">
                      <span className="font-bold text-blue-700 dark:text-blue-300 block">
                        {(pair as any).jahr?.nameFr || (pair as any).rakhawah?.nameFr || (pair as any).istifal?.nameFr || (pair as any).infitah?.nameFr || (pair as any).ismat?.nameFr}
                      </span>
                      <p className="text-muted leading-relaxed">
                        {(pair as any).jahr?.definitionFr || (pair as any).rakhawah?.definitionFr || (pair as any).istifal?.definitionFr || (pair as any).infitah?.definitionFr || (pair as any).ismat?.definitionFr}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Attributs sans opposés */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Les 8 Attributs Sans Opposés (Singuliers)</span>
            </h3>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {SIFAT_CLASSIFICATION.withoutOpposites.map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-card border border-line space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-ink text-sm">{s.nameFr}</span>
                    <span className="font-ui-ar text-base font-bold text-emerald-600 dark:text-emerald-400" dir="rtl">{s.nameAr}</span>
                  </div>
                  {s.mnemonic && (
                    <p className="font-ui-ar text-sm font-bold text-amber-600 dark:text-amber-400" dir="rtl">
                      Formule : {s.mnemonic}
                    </p>
                  )}
                  <p className="text-muted leading-relaxed">{s.definitionFr}</p>
                  <div className="flex gap-1 pt-1" dir="rtl">
                    {s.letters.map((l, i) => (
                      <span key={i} className="font-ui-ar font-bold px-1.5 py-0.5 rounded bg-soft text-ink text-xs">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL FICHE D'IDENTITÉ LETTRE ================= */}
      {selectedLetter && (
        <Modal
          isOpen={!!selectedLetter}
          onClose={() => setSelectedLetter(null)}
          title={
            <div className="flex items-center gap-3">
              <span className="font-ui-ar text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                {selectedLetter.letter}
              </span>
              <div>
                <span className="font-display text-lg font-bold text-ink">
                  Lettre {selectedLetter.nameFr} ({selectedLetter.nameAr})
                </span>
                <span className="block text-xs text-muted">
                  {selectedLetter.generalMakhrajFr}
                </span>
              </div>
            </div>
          }
        >
          <div className="space-y-4 text-xs sm:text-sm text-ink pt-1">
            {/* Point de sortie précis */}
            <div className="p-3.5 rounded-xl bg-soft border border-line space-y-1">
              <span className="text-[11px] font-bold text-muted">
                Point d'Articulation Précis (Makhraj Khāss)
              </span>
              <p className="font-semibold text-ink leading-relaxed">
                {selectedLetter.specificMakhrajFr}
              </p>
              <p className="font-ui-ar text-base font-bold text-emerald-700 dark:text-emerald-300" dir="rtl">
                {selectedLetter.specificMakhrajAr}
              </p>
            </div>

            {/* Profil des 5 attributs permanents */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-muted block">
                Ses 5 Attributs Permanents (Sifāt Lāzimah)
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-card border border-line">
                  <span className="text-muted block text-[10px]">Souffle / Voix :</span>
                  <span className="font-semibold">{selectedLetter.sifatWithOpposites.hamsOrJahr}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-card border border-line">
                  <span className="text-muted block text-[10px]">Tenue du Son :</span>
                  <span className="font-semibold">{selectedLetter.sifatWithOpposites.shiddahOrRakhawah}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-card border border-line">
                  <span className="text-muted block text-[10px]">Élévation :</span>
                  <span className="font-semibold">{selectedLetter.sifatWithOpposites.istilaOrIstifal}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-card border border-line">
                  <span className="text-muted block text-[10px]">Adhérence :</span>
                  <span className="font-semibold">{selectedLetter.sifatWithOpposites.itbaqOrInfitah}</span>
                </div>
              </div>
            </div>

            {/* Attributs singuliers sans opposés */}
            {selectedLetter.sifatWithoutOpposites.length > 0 && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300">
                  Attribut Singulier Propre :
                </span>
                <p className="font-semibold text-amber-900 dark:text-amber-200">
                  {selectedLetter.sifatWithoutOpposites.join(' · ')}
                </p>
              </div>
            )}

            {/* Pièges de prononciation tirés du livre */}
            <div className="p-3.5 rounded-xl bg-red-500/5 border border-red-500/20 space-y-1">
              <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400 font-bold text-xs">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Piège fréquent signalé dans le livre :</span>
              </div>
              <p className="text-muted leading-relaxed">
                {selectedLetter.commonMistakesFr}
              </p>
            </div>

            {/* Verset de la Jazariyyah */}
            <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] text-muted font-bold">Ibn Al-Jazarī :</span>
                <p className="font-ui-ar text-sm font-bold text-emerald-800 dark:text-emerald-200" dir="rtl">
                  {selectedLetter.jazariyyahVerse}
                </p>
              </div>
              <span className="font-ui-ar text-xl font-bold px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                {selectedLetter.audioSampleText}
              </span>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
