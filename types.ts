export enum QuestCategory {
  HOME = 'Дом',
  CITY = 'Город',
  HYBRID = 'Гибрид'
}

export interface Quest {
  id: number;
  day: number;
  title: string;
  description: string;
  category: QuestCategory;
  unlockCode: string; // The answer to the daily riddle
  clueLetter?: string; // The letter she receives upon completion
  rewardText: string;
  iconName: string;
}

export interface UserState {
  isAuthenticated: boolean;
  unlockedDay: number; // The highest day index (1-15) currently available
  completedDays: number[]; // Array of completed day IDs
}

export interface SecretClue {
  id: string;
  text: string;
  note?: string;
  codeToReveal?: string; // Optional: The final code to enter in the app
  nextLocation?: string; // Optional: Hint for the next QR code in the chain
}