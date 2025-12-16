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
  unlockCode: string; // The code the user needs to enter to complete the quest
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
  note?: string; // Optional distinct note (e.g. "Part 1 of 5")
}