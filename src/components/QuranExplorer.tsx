import React, { useState, useEffect } from 'react';
import { Chapter } from '../types/tajweed';
import { Mic, Play, Pause, Square, RotateCcw } from 'lucide-react';
import { StepHeader } from './ui';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { useVoiceRecorder } from '../hooks/useVoiceRecorder';

interface QuranExplorerProps {
  chapter: Chapter;
}

export const QuranExplorer: React.FC<QuranExplorerProps> = ({ chapter }) => {
  // Verses for Chapter 1 (Basic Concepts & Lahn)
  const chapter1Verses = [
    {
      ref: '1:7',
      surahFr: 'Al-Fātihah',
      words: [
        { text: 'صِرَٰطَ', rule: 'Emphase (Sād & Tā\')', ruleClass: 'chip-gold', why: 'Lettres d\'Isti\'lā\' : ne confondez pas avec Sīn ou Tā\' (Lahn Jalī).' },
        { text: 'ٱلَّذِينَ', rule: 'Liaison & Dhāl doux', ruleClass: 'chip-gold', why: 'Hamzat Wasl effacée, bout de la langue entre les dents pour le Dhāl.' },
        { text: 'أَنۡعَمۡتَ', rule: 'Cœur du Lahn Jalī', ruleClass: 'chip-qalqalah', why: 'Fathah sacrée sur le Tā\' (Tu as comblé). Ne dites JAMAIS An\'amtu (J\'ai comblé) !', target: true },
        { text: 'عَلَيۡهِمۡ', rule: 'Mīm Sākinah Izhār', ruleClass: 'chip-izhar', why: 'Mīm sans prolongation excessive, suivi du Ghayn.' },
        { text: 'غَيۡرِ', rule: 'Ghayn & Râ\' Tarqīq', ruleClass: 'chip-gold', why: 'Ghayn de la gorge, Râ\' amincie par la Kasrah.' },
        { text: 'ٱلۡمَغۡضُوبِ', rule: 'Dād & Istitālah', ruleClass: 'chip-gold', why: 'Prolongation latérale de la langue pour le Dād.' },
        { text: 'عَلَيۡهِمۡ', rule: 'Izhār Shafawī', ruleClass: 'chip-izhar', why: 'Mīm Sākinah suivi du Wāw : clarté nette sans pause.' },
        { text: 'وَلَا', rule: 'Madd naturel', ruleClass: 'chip-gold', why: 'Prolongation normale de 2 temps.' },
        { text: 'ٱلضَّآلِّينَ', rule: 'Madd Lāzim (6 temps)', ruleClass: 'chip-idgham', why: 'Madd Lāzim Muthaqqal : 6 temps obligatoires avec Shaddah. Raccourcir est un Lahn Khafī.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3',
    },
    {
      ref: '2:43',
      surahFr: 'Al-Baqarah',
      words: [
        { text: 'وَأَقِيمُواْ', rule: 'Alif muet final', ruleClass: 'chip-gold', why: 'Le rond au-dessus du dernier Alif signale qu\'il est muet (Rasm \'Uthmānī).' },
        { text: 'ٱلصَّلَوٰةَ', rule: 'Rasm \'Uthmānī (Wāw)', ruleClass: 'chip-qalqalah', why: 'Écrit avec Wāw mais lu As-Salāh grâce à l\'Alif vertical (Alif Khanjariyyah).', target: true },
        { text: 'وَءَاتُواْ', rule: 'Madd Badal & Alif muet', ruleClass: 'chip-gold', why: '2 temps de Madd pour la Hamzah allongée.' },
        { text: 'ٱلزَّكَوٰةَ', rule: 'Rasm \'Uthmānī (Wāw)', ruleClass: 'chip-qalqalah', why: 'Deuxième exemple classique de Wāw calligraphique portant l\'Alif suscrit.', target: true },
        { text: 'وَٱرۡكَعُواْ', rule: 'Hamzat Wasl & Râ\' lourd', ruleClass: 'chip-gold', why: 'La Hamzah de début disparaît en liaison, le Râ\' est emphatique.' },
        { text: 'مَعَ', rule: 'Lettre \'Ayn', ruleClass: 'chip-gold', why: 'Articulation profonde au milieu de la gorge.' },
        { text: 'ٱلرَّٰكِعِينَ', rule: 'Arrêt avec Madd \'Ārid', ruleClass: 'chip-izhar', why: 'Arrêt permis sur 2, 4 ou 6 temps de prolongation.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/002043.mp3',
    }
  ];

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

  const versesList = chapter.number === 1 ? chapter1Verses : chapter.number === 8 ? nunVerses : qalqalahVerses;
  const [activeVerseIndex, setActiveVerseIndex] = useState(0);
  const [selectedWordIndex, setSelectedWordIndex] = useState<number>(0);

  // Reset indices on chapter change
  useEffect(() => {
    setActiveVerseIndex(0);
    setSelectedWordIndex(0);
  }, [chapter.number]);

  const currentVerse = versesList[activeVerseIndex] || versesList[0];
  const selectedWord = currentVerse.words[selectedWordIndex] || currentVerse.words[0];

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
                key={v.ref}
                onClick={() => {
                  setActiveVerseIndex(i);
                  setSelectedWordIndex(0);
                }}
                aria-pressed={activeVerseIndex === i}
              >
                {v.ref}
              </button>
            ))}
          </div>
        }
      />

      <div className="surface overflow-hidden">
        {/* Barre de lecture */}
        <div className="px-6 py-4 bg-soft border-b border-line flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              disabled={isLoading}
              className="btn btn-primary"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Écouter le Cheikh'}
            </button>
            <button
              onClick={toggleSpeed}
              className="btn btn-secondary text-xs"
              title="Vitesse de lecture"
            >
              {playbackRate}x
            </button>
          </div>

          <span className="ref-tag">
            {currentVerse.surahFr} ({currentVerse.ref}) · Cheikh Al-Husary
          </span>
        </div>

        {/* Verset mot à mot */}
        <div className="p-8 sm:p-12 text-center bg-card">
          <p className="label mb-6">Touchez un mot pour analyser sa règle</p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" dir="rtl">
            {currentVerse.words.map((w, idx) => {
              const isSelected = selectedWordIndex === idx;
              const hasColor = w.target;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedWordIndex(idx)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl transition-all select-none ${
                    isSelected
                      ? 'bg-lapis text-lapis-ink shadow-md scale-105'
                      : hasColor
                      ? `${w.ruleClass} hover:opacity-90`
                      : 'bg-soft text-ink hover:bg-line'
                  }`}
                >
                  <span className="font-ar text-3xl sm:text-4xl leading-[1.7] block">
                    {w.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Fiche d'analyse du mot */}
        {selectedWord && (
          <div
            className="p-6 sm:p-8 border-t border-line bg-soft animate-fade"
            style={{ boxShadow: `inset 4px 0 0 ${ruleColor[selectedWord.ruleClass] || 'var(--ink)'}` }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className={`chip ${selectedWord.ruleClass}`}>
                {selectedWord.rule}
              </span>
              <span className="font-ar text-3xl text-ink" dir="rtl">{selectedWord.text}</span>
            </div>
            <p className="text-[15px] sm:text-base leading-relaxed text-ink max-w-2xl">
              {selectedWord.why}
            </p>
          </div>
        )}

        {/* Miroir vocal */}
        <div className="p-6 sm:p-8 border-t border-line bg-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="label mb-1">Miroir vocal</p>
              <h2 className="font-display text-lg text-ink">
                Enregistrez-vous et comparez votre voix à celle du Cheikh
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {!isRecording ? (
                <button onClick={startRecording} className="btn btn-secondary">
                  <Mic className="w-4 h-4 text-bad" />
                  S'enregistrer
                </button>
              ) : (
                <button onClick={stopRecording} className="btn btn-primary bg-bad">
                  <Square className="w-4 h-4" />
                  Arrêter
                </button>
              )}

              {recordedUrl && !isRecording && (
                <>
                  <button onClick={playRecordedAudio} className="btn btn-secondary">
                    {isPlayingRecording ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    Mon enregistrement
                  </button>
                  <button onClick={clearRecording} className="btn btn-ghost btn-icon" title="Effacer">
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
