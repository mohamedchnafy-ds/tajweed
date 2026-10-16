import React, { useState } from 'react';
import { Chapter } from '../types/tajweed';
import { Mic, Play, Pause, Square, RotateCcw } from 'lucide-react';
import { StepHeader } from './ui';
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

  const ruleColor: Record<string, string> = {
    'chip-izhar': 'var(--izhar)',
    'chip-idgham': 'var(--idgham)',
    'chip-iqlab': 'var(--iqlab)',
    'chip-ikhfa': 'var(--ikhfa)',
    'chip-qalqalah': 'var(--qalqalah)',
    'chip-gold': 'var(--ink)',
  };

  return (
    <>
      <StepHeader
        step={4}
        title="Le verset, mot par mot"
        description="Écoutez la récitation, puis touchez chaque mot coloré pour comprendre la règle qui s'y applique."
        aside={
          <div className="segmented">
            {versesList.map((v, i) => (
              <button
                key={i}
                aria-pressed={i === activeVerseIndex}
                onClick={() => {
                  setActiveVerseIndex(i);
                  setSelectedWordIndex(0);
                }}
              >
                {v.surahFr} {v.ref}
              </button>
            ))}
          </div>
        }
      />

      <div className="surface overflow-hidden">
        <div className="px-5 sm:px-10 pt-8 pb-6 text-center">
          <span className="ref-tag">Sourate {currentVerse.surahFr}, verset {currentVerse.ref}</span>

          <div className="flex flex-wrap items-baseline justify-center gap-x-1 gap-y-2 mt-6" dir="rtl">
            {currentVerse.words.map((w, idx) => {
              const isSelected = selectedWordIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedWordIndex(idx)}
                  aria-pressed={isSelected}
                  className={`px-2 sm:px-3 rounded-2xl transition-colors select-none ${
                    isSelected ? 'bg-soft' : 'hover:bg-soft/60'
                  }`}
                >
                  <span
                    className="font-ar text-[38px] sm:text-[48px] leading-[1.9] block"
                    style={{ color: w.target ? ruleColor[w.ruleClass] : 'var(--ink)' }}
                  >
                    {w.text}
                  </span>
                  <span
                    className={`block h-0.5 mx-auto -mt-1 mb-1 rounded-full transition-all ${isSelected ? 'w-8 bg-gilt' : 'w-0'}`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="px-5 sm:px-8 py-4 border-t border-line flex flex-wrap items-center justify-center gap-2">
          <button onClick={togglePlay} disabled={isLoading} className="btn btn-primary">
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? 'Pause' : 'Écouter Al-Husary'}</span>
          </button>

          <button onClick={toggleSpeed} className="btn btn-secondary tabular-nums" title="Changer la vitesse">
            {playbackRate}×
          </button>

          {!recordedUrl ? (
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`btn ${isRecording ? 'bg-bad-bg text-bad' : 'btn-secondary'}`}
            >
              {isRecording ? <Square className="w-4 h-4 fill-current" /> : <Mic className="w-4 h-4" />}
              <span>{isRecording ? 'Arrêter l\'enregistrement' : 'M\'enregistrer'}</span>
            </button>
          ) : (
            <>
              <button onClick={playRecordedAudio} className="btn btn-secondary">
                {isPlayingRecording ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlayingRecording ? 'Pause' : 'Écouter ma voix'}</span>
              </button>
              <button onClick={clearRecording} className="btn btn-ghost">
                <RotateCcw className="w-4 h-4" />
                <span>Recommencer</span>
              </button>
            </>
          )}
        </div>

        {selectedWord && (
          <div key={`${activeVerseIndex}-${selectedWordIndex}`} className="px-5 sm:px-8 py-6 bg-soft flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 animate-fade">
            <span
              className="font-ar text-[40px] leading-[1.6] shrink-0"
              style={{ color: selectedWord.target ? ruleColor[selectedWord.ruleClass] : 'var(--ink)' }}
              dir="rtl"
            >
              {selectedWord.text}
            </span>
            <div>
              <span className={`chip ${selectedWord.ruleClass}`}>{selectedWord.rule}</span>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">{selectedWord.why}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
