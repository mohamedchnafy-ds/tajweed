import React, { useState } from 'react';
import { Chapter } from '../types/tajweed';
import { BookOpen, Sparkles, Volume2, Mic, Play, Pause, RotateCcw } from 'lucide-react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { useVoiceRecorder } from '../hooks/useVoiceRecorder';

interface QuranExplorerProps {
  chapter: Chapter;
}

export const QuranExplorer: React.FC<QuranExplorerProps> = ({ chapter }) => {
  // Verses for Chapter 8 (Nun Sakinah)
  const nunVerses = [
    {
      ref: '99:7',
      surahFr: 'Az-Zalzalah',
      words: [
        { text: 'فَمَن', rule: 'Idghām bi-Ghunnah', ruleClass: 'chip-idgham', why: 'Nūn Sākinah suivi du Yā\' (ينمو) : fusionne avec résonance de 2 temps.', target: true },
        { text: 'يَعۡمَلۡ', rule: 'Suite de l\'Idghām', ruleClass: 'chip-idgham', why: 'Le Yā\' est prononcé avec la Ghunnah issue du Nūn précédent.', target: true },
        { text: 'مِثۡقَالَ', rule: 'Lettre normale', ruleClass: 'chip-gold', why: 'Prononciation standard.' },
        { text: 'ذَرَّةٍ', rule: 'Ikhfā\' Haqīqī', ruleClass: 'chip-ikhfa', why: 'Tanwīn suivi du Khā\' ? Non, le mot suivant commence par Khā\' donc c\'est un Izhār !', target: true },
        { text: 'خَيۡرٗا', rule: 'Izhār Halqī', ruleClass: 'chip-izhar', why: 'Tanwīn de « dharratin » suivi du Khā\' (خ) lettre de gorge : prononciation limpide sans pause.', target: true },
        { text: 'يَرَهُۥ', rule: 'Idghām bi-Ghunnah', ruleClass: 'chip-idgham', why: 'Tanwīn de « khayran » suivi du Yā\' : fusion avec Ghunnah de 2 temps.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/099007.mp3',
    },
    {
      ref: '105:4',
      surahFr: 'Al-Fīl',
      words: [
        { text: 'تَرۡمِيهِم', rule: 'Râ\' Tafkhīm & Mīm', ruleClass: 'chip-gold', why: 'Mīm Sākinah suivi de Bā\' (Ikhfā\' Shafawī).' },
        { text: 'بِحِجَارَةٖ', rule: 'Tanwīn + Mīm', ruleClass: 'chip-idgham', why: 'Tanwīn suivi de Mīm : Idghām bi-ghunnah de 2 temps.', target: true },
        { text: 'مِّن', rule: 'Nūn Sākinah + Sīn', ruleClass: 'chip-ikhfa', why: 'Nūn Sākinah suivi du Sīn (س) : Ikhfā\' avec Ghunnah fine de 2 temps.', target: true },
        { text: 'سِجِّيلٖ', rule: 'Arrêt avec Madd \'Ārid', ruleClass: 'chip-izhar', why: 'Prolongation permise à l\'arrêt (2, 4 ou 6 temps).' },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/105004.mp3',
    }
  ];

  // Verses for Chapter 10 (Qalqalah)
  const qalqalahVerses = [
    {
      ref: '113:1-2',
      surahFr: 'Al-Falaq',
      words: [
        { text: 'قُلۡ', rule: 'Lām Sākinah', ruleClass: 'chip-gold', why: 'Lām du verbe, prononciation claire.' },
        { text: 'أَعُوذُ', rule: 'Dhāl doux', ruleClass: 'chip-gold', why: 'Sortir la pointe de la langue.' },
        { text: 'بِرَبِّ', rule: 'Râ\' lourd', ruleClass: 'chip-gold', why: 'Râ\' avec Fathah.' },
        { text: 'ٱلۡفَلَقِ', rule: 'Qalqalah Wustā (Moyenne)', ruleClass: 'chip-qalqalah', why: 'Arrêt sur la lettre Qāf sans Shaddah : rebond franc et sonore !', target: true },
        { text: 'مِن', rule: 'Nūn Sākinah', ruleClass: 'chip-ikhfa', why: 'Nūn suivi du Shīn : Ikhfā\' Haqīqī.' },
        { text: 'شَرِّ', rule: 'Râ\' amincie', ruleClass: 'chip-gold', why: 'Râ\' avec Kasrah.' },
        { text: 'مَا', rule: 'Madd naturel', ruleClass: 'chip-gold', why: '2 temps de prolongation.' },
        { text: 'خَلَقَ', rule: 'Qalqalah Wustā (Moyenne)', ruleClass: 'chip-qalqalah', why: 'Arrêt sur la lettre Qāf : rebond obligatoire.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/113001.mp3',
    },
    {
      ref: '111:1',
      surahFr: 'Al-Masad',
      words: [
        { text: 'تَبَّتۡ', rule: 'Tā\' de Hams (Pas de rebond)', ruleClass: 'chip-izhar', why: 'Souffle sans rebond.' },
        { text: 'يَدَآ', rule: 'Madd Munfasil', ruleClass: 'chip-gold', why: 'Prolongation de 4 ou 5 temps.' },
        { text: 'أَبِى', rule: 'Bā\' léger', ruleClass: 'chip-gold', why: 'Prononciation fluide.' },
        { text: 'لَهَبٖ', rule: 'Tanwīn + Wāw', ruleClass: 'chip-idgham', why: 'Idghām avec Ghunnah.' },
        { text: 'وَتَبَّ', rule: 'Qalqalah Kubrā (Majeure)', ruleClass: 'chip-qalqalah', why: 'Arrêt sur Bā\' AVEC SHADDAH : le rebond le plus puissant du Tajwīd !', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/111001.mp3',
    }
  ];

  const versesList = chapter.number === 8 ? nunVerses : qalqalahVerses;
  const [activeVerseIndex, setActiveVerseIndex] = useState(0);
  const currentVerse = versesList[activeVerseIndex];
  const [selectedWordIndex, setSelectedWordIndex] = useState<number>(0);

  const selectedWord = currentVerse.words[selectedWordIndex];

  // Audio & Mic hooks
  const { isPlaying, isLoading, playbackRate, togglePlay, toggleSpeed } =
    useAudioPlayer(currentVerse.audioUrl);

  const {
    isRecording,
    recordedUrl,
    isPlayingRecording,
    startRecording,
    stopRecording,
    playRecordedAudio,
    clearRecording,
  } = useVoiceRecorder();

  return (
    <div className="animate-enter space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-wider font-bold text-muted mb-1 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-gold" />
            <span>Étape 4 · Le Coran Mot par Mot</span>
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-normal text-ink">
            Analyse & Écoute Active du Verset
          </h1>
        </div>

        {/* Verse switcher */}
        <div className="flex items-center gap-1.5 bg-card border border-line p-1 rounded-xl self-start sm:self-auto shadow-xs">
          {versesList.map((v, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveVerseIndex(i);
                setSelectedWordIndex(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                i === activeVerseIndex
                  ? 'bg-ink text-paper shadow-xs'
                  : 'text-muted hover:text-ink'
              }`}
            >
              Verset {i + 1} ({v.ref})
            </button>
          ))}
        </div>
      </div>

      {/* Main Quran Verse Interactive Container */}
      <div className="p-6 sm:p-8 rounded-2xl bg-card border border-line shadow-sm text-center">
        
        {/* Reference pill */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="ref-tag">
            Sūrah {currentVerse.surahFr} • Verset {currentVerse.ref}
          </span>
        </div>

        {/* Tactile Clickable Words Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-4" dir="rtl">
          {currentVerse.words.map((w, idx) => {
            const isSelected = selectedWordIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedWordIndex(idx)}
                className={`group px-3 sm:px-4 py-2 rounded-xl transition-all select-none ${
                  isSelected
                    ? 'bg-ink text-paper scale-110 shadow-md ring-2 ring-gold'
                    : w.target
                    ? 'bg-soft text-ink hover:scale-105 border border-line'
                    : 'text-muted hover:text-ink hover:bg-soft/50'
                }`}
              >
                <span className="font-ar font-bold text-3xl sm:text-4xl block leading-tight">
                  {w.text}
                </span>
                {w.target && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mx-auto mt-1 block group-hover:scale-125" />
                )}
              </button>
            );
          })}
        </div>

        <p className="text-xs text-muted mt-6 italic">
          Touchez un mot dans le verset ci-dessus pour examiner sa règle de Tajwīd et vous entraîner.
        </p>

        {/* Audio Player Toolbar for the Verse */}
        <div className="mt-8 pt-6 border-t border-line flex flex-wrap items-center justify-center gap-3">
          
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-ink text-paper text-xs font-semibold hover:opacity-90 transition-opacity shadow-xs"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? 'Pause' : 'Écouter Cheikh Al-Hussary'}</span>
          </button>

          <button
            onClick={toggleSpeed}
            className="px-3 py-2 rounded-xl border border-line bg-soft text-xs font-mono font-bold text-ink hover:bg-line transition-colors"
            title="Ralentir à 0.75x"
          >
            {playbackRate}x
          </button>

          {/* Voice Mirror Micro */}
          {!recordedUrl ? (
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isRecording
                  ? 'bg-bad-bg border-bad text-bad animate-pulse'
                  : 'bg-card border-line hover:bg-soft text-ink'
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>{isRecording ? 'Enregistrement en cours...' : 'Répéter au micro'}</span>
            </button>
          ) : (
            <div className="flex items-center gap-1.5 bg-soft p-1 rounded-xl">
              <button
                onClick={playRecordedAudio}
                className="px-3 py-1.5 rounded-lg bg-card text-ink font-semibold text-xs shadow-xs"
              >
                {isPlayingRecording ? 'Pause' : 'Écouter ma voix'}
              </button>
              <button
                onClick={clearRecording}
                className="px-2.5 py-1 text-xs text-bad hover:underline"
              >
                Refaire
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Selected Word Deep Breakdown Card */}
      {selectedWord && (
        <div className="p-5 sm:p-6 rounded-2xl bg-soft border border-line shadow-xs animate-pop">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-line">
            <div className="flex items-center gap-3">
              <span className="font-ar font-bold text-3xl sm:text-4xl text-ink" dir="rtl">
                {selectedWord.text}
              </span>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted">Règle identifiée</span>
                <h4 className="font-display text-base font-bold text-ink">{selectedWord.rule}</h4>
              </div>
            </div>

            <span className={`chip ${selectedWord.ruleClass} self-start sm:self-auto`}>
              {selectedWord.rule}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-ink leading-relaxed">
            {selectedWord.why}
          </p>
        </div>
      )}

    </div>
  );
};
