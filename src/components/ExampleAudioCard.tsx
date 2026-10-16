import React from 'react';
import { Play, Pause, RotateCcw, Mic, Square, Volume2, Sparkles, AlertCircle } from 'lucide-react';
import { TajweedExample } from '../types/tajweed';
import { TajweedText } from './TajweedHighlighter';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { useVoiceRecorder } from '../hooks/useVoiceRecorder';

interface ExampleAudioCardProps {
  example: TajweedExample;
}

export const ExampleAudioCard: React.FC<ExampleAudioCardProps> = ({ example }) => {
  const { isPlaying, isLoading, playbackRate, isLooping, togglePlay, toggleSpeed, toggleLoop } =
    useAudioPlayer(example.audioUrl);

  const {
    isRecording,
    recordedUrl,
    isPlayingRecording,
    recordSeconds,
    permissionError,
    startRecording,
    stopRecording,
    playRecordedAudio,
    clearRecording,
  } = useVoiceRecorder();

  // Helper for tag style
  const getBadgeStyle = (tag: string) => {
    switch (tag) {
      case 'ghunnah':
        return 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'qalqalah':
        return 'bg-blue-50 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'heavy':
        return 'bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'madd':
        return 'bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200 dark:border-rose-800';
      default:
        return 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700';
    }
  };

  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
      {/* Top Header: Rule badge and Surah Ref */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${getBadgeStyle(example.ruleTag)}`}>
          {example.ruleApplied}
        </span>
        {example.surahAyahRef && (
          <span className="text-xs text-neutral-400 font-mono">
            {example.surahNameFr ? `${example.surahNameFr} ` : ''}({example.surahAyahRef})
          </span>
        )}
      </div>

      {/* Main Arabic Calligraphy Display */}
      <div className="py-3 px-4 rounded-lg bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-100 dark:border-neutral-900 text-center mb-3">
        <div className="leading-relaxed dir-rtl select-none tracking-wide" dir="rtl">
          <TajweedText
            text={example.arabicText}
            highlightSegment={example.highlightSegment}
            rule={
              example.ruleTag === 'madd'
                ? 'madd-4-5'
                : example.ruleTag === 'ghunnah'
                ? 'ghunnah'
                : example.ruleTag === 'qalqalah'
                ? 'qalqalah'
                : example.ruleTag === 'heavy'
                ? 'tafkhim'
                : example.ruleTag === 'silent'
                ? 'silent'
                : 'izhar'
            }
            className="text-2xl sm:text-3xl"
          />
        </div>
      </div>

      {/* Segment & Transliteration Breakdown */}
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-4 px-1">
        <span className="font-mono text-neutral-700 dark:text-neutral-300">
          Segment clé : <strong className="font-semibold text-neutral-900 dark:text-neutral-100">{example.highlightSegment}</strong> ({example.highlightLetter})
        </span>
        <span className="italic font-serif">{example.transliteration}</span>
      </div>

      {/* Pedagogical Explanation */}
      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-5 leading-relaxed bg-neutral-50/50 dark:bg-neutral-900/40 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800/80">
        <span className="font-medium text-neutral-900 dark:text-neutral-100 mr-1.5">Mécanisme :</span>
        {example.explanationFr}
      </p>

      {/* Audio Controls & Voice Mirror Studio */}
      <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        
        {/* Cheikh Al-Hussary Reference Player */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            disabled={!example.audioUrl || isLoading}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 transition-opacity text-xs font-medium disabled:opacity-50"
            title="Écouter la récitation de référence de Cheikh Al-Hussary"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isPlaying ? 'Pause' : 'Cheikh Al-Hussary'}</span>
          </button>

          {/* Speed Toggle (1.0x / 0.75x) */}
          <button
            onClick={toggleSpeed}
            className="px-2 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="Ralentir la récitation pour bien entendre le Tajwīd"
          >
            {playbackRate}x
          </button>

          {/* Loop Toggle */}
          <button
            onClick={toggleLoop}
            className={`p-1.5 rounded-lg border transition-colors ${
              isLooping
                ? 'border-neutral-900 dark:border-neutral-100 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
                : 'border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
            }`}
            title="Répéter en boucle pour mémoriser"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Voice Mirror (Microphone practice) */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {!recordedUrl ? (
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isRecording
                  ? 'bg-rose-50 border-rose-300 text-rose-700 dark:bg-rose-950/40 dark:border-rose-900 dark:text-rose-300 animate-pulse'
                  : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
              }`}
              title="S'enregistrer au micro et comparer"
            >
              {isRecording ? <Square className="w-3 h-3 fill-current" /> : <Mic className="w-3.5 h-3.5" />}
              <span>{isRecording ? `Enregistrement (${recordSeconds}s)...` : 'Mon micro'}</span>
            </button>
          ) : (
            <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800/80 p-1 rounded-lg">
              <button
                onClick={playRecordedAudio}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 text-xs font-medium shadow-xs hover:bg-neutral-50"
                title="Écouter mon enregistrement"
              >
                {isPlayingRecording ? <Pause className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                <span>Ma voix</span>
              </button>
              <button
                onClick={clearRecording}
                className="px-2 py-1 text-[11px] text-neutral-500 hover:text-rose-600 transition-colors"
                title="Supprimer et réenregistrer"
              >
                Refaire
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Permission alert if micro is blocked */}
      {permissionError && (
        <div className="mt-2 text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1">
          <AlertCircle className="w-3 h-3 shrink-0" />
          <span>{permissionError}</span>
        </div>
      )}
    </div>
  );
};
