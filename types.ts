
export enum QuestionType {
  Single,
  Multiple,
}

export interface QuestionOption {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  questionText: string;
  options: QuestionOption[];
  type: QuestionType;
  recap: string;
}

export interface Chapter {
  chapterNumber: number;
  title: string;
  questions: Question[];
}

export interface PlayerScore {
  name: string;
  score: number;
}

export enum GameState {
  Welcome,
  Playing,
  HighScore,
}

export type FeedbackType = 'correct' | 'partially-correct' | 'incorrect';
