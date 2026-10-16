import { MistakeRecord, UserStats } from '../types/tajweed';

const STORAGE_KEY = 'tajweed_user_stats_v1';

const DEFAULT_STATS: UserStats = {
  completedChapters: [],
  chapterScores: {},
  mistakeHistory: [],
  voiceRecordingsCount: 0,
  lastActive: Date.now(),
};

export const loadUserStats = (): UserStats => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATS;
    return { ...DEFAULT_STATS, ...JSON.parse(raw) };
  } catch (e) {
    console.error('Error loading stats from localStorage', e);
    return DEFAULT_STATS;
  }
};

export const saveUserStats = (stats: UserStats): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...stats, lastActive: Date.now() }));
  } catch (e) {
    console.error('Error saving stats to localStorage', e);
  }
};

export const recordMistake = (
  chapterId: string,
  questionId: string,
  questionPrompt: string,
  verseArabic: string,
  yourAnswer: string,
  correctAnswer: string,
  explanation: string
): void => {
  const stats = loadUserStats();
  // Check if this mistake already exists in history
  const existingIdx = stats.mistakeHistory.findIndex(m => m.questionId === questionId);
  const newRecord: MistakeRecord = {
    chapterId,
    questionId,
    questionPrompt,
    verseArabic,
    yourAnswer,
    correctAnswer,
    explanation,
    timestamp: Date.now(),
    retriedSuccessfully: false,
  };

  if (existingIdx >= 0) {
    stats.mistakeHistory[existingIdx] = newRecord;
  } else {
    stats.mistakeHistory.unshift(newRecord);
  }

  saveUserStats(stats);
};

export const markMistakeResolved = (questionId: string): void => {
  const stats = loadUserStats();
  const target = stats.mistakeHistory.find(m => m.questionId === questionId);
  if (target) {
    target.retriedSuccessfully = true;
    saveUserStats(stats);
  }
};

export const recordChapterScore = (chapterId: string, scorePercent: number): void => {
  const stats = loadUserStats();
  const currentBest = stats.chapterScores[chapterId] || 0;
  if (scorePercent > currentBest) {
    stats.chapterScores[chapterId] = scorePercent;
  }
  if (scorePercent >= 80 && !stats.completedChapters.includes(chapterId)) {
    stats.completedChapters.push(chapterId);
  }
  saveUserStats(stats);
};

export const exportUserDataJSON = (): string => {
  const stats = loadUserStats();
  return JSON.stringify(stats, null, 2);
};

export const importUserDataJSON = (jsonString: string): boolean => {
  try {
    const parsed = JSON.parse(jsonString) as UserStats;
    if (parsed && typeof parsed.chapterScores === 'object') {
      saveUserStats(parsed);
      return true;
    }
    return false;
  } catch (e) {
    console.error('Failed to import user stats', e);
    return false;
  }
};
