export type Word = {
  name: string;
  updateTime: Date;
  proficiency: number; // 熟练度
  phoneticSymbol: string; //音标
  translation: string;
};

export type TypingState = {
  isTyping: boolean;
  time: number;
  dictionaryId: number;
  dictionaryName: string;
  chapter: string;
  phoneticSymbol: string;
};
