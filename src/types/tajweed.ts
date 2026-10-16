export type TajweedCategory = 'beginner' | 'intermediate' | 'advanced';

export interface TajweedExample {
  id: string;
  arabicText: string;
  surahAyahRef?: string;       // e.g. "2:8"
  surahNameFr?: string;        // e.g. "Al-Baqarah"
  highlightSegment: string;    // e.g. "مَن يَقُولُ"
  highlightLetter: string;     // e.g. "ن + ي"
  ruleApplied: string;
  ruleTag: 'madd' | 'ghunnah' | 'qalqalah' | 'silent' | 'heavy' | 'izhar';
  explanationFr: string;
  transliteration: string;
  audioUrl?: string;           // Direct verse or clip audio URL
  audioStartSec?: number;      // Optional timing in audio
  audioEndSec?: number;
}

export interface SubRule {
  id: string;
  nameFr: string;
  nameAr: string;
  mnemonic?: string;           // e.g. "يَرْمَلُونَ", "قُطْبُ جَدٍّ"
  letters: string[];
  definitionFr: string;
  mechanismFr: string;         // Comment la bouche/langue se positionne
  durationHarakat?: number;    // ex: 2 temps
  examples: TajweedExample[];
  commonMistakes: {
    trapFr: string;
    correctionFr: string;
  }[];
}

export interface GuidedExercise {
  id: string;
  title: string;
  verseArabic: string;
  surahAyahRef: string;
  targetSegment: string;
  promptFr: string;
  hintFr: string;
  solutionFr: string;
  breakdownSteps: string[];
  audioUrl?: string;
}

export type QuestionType = 'mcq' | 'click_word' | 'audio_identify' | 'error_detect';

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  promptFr: string;
  verseArabic: string;
  surahAyahRef?: string;
  targetWord?: string;
  clickableSegments?: string[];
  options?: string[];
  correctAnswer: string | number; // String for mcq/click, index number
  explanationFr: string;
  audioUrl?: string;
  ruleId: string;
}

export interface Chapter {
  id: string;
  number: number;
  slug: string;
  titleFr: string;
  titleAr: string;
  category: TajweedCategory;
  summaryFr: string;
  estimatedMinutes: number;
  isPilotChapter: boolean;     // True for pilot chapters (8 & 10)
  subrules: SubRule[];
  guidedExercises: GuidedExercise[];
  quizzes: QuizQuestion[];
  infographicPoints: string[];
}

export interface MistakeRecord {
  questionId: string;
  chapterId: string;
  questionPrompt: string;
  verseArabic: string;
  yourAnswer: string;
  correctAnswer: string;
  explanation: string;
  timestamp: number;
  retriedSuccessfully: boolean;
}

export interface UserStats {
  completedChapters: string[];
  chapterScores: Record<string, number>; // chapterId -> percentage (0-100)
  mistakeHistory: MistakeRecord[];
  voiceRecordingsCount: number;
  lastActive: number;
}
