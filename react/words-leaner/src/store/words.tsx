import { createContext, useState, useContext, ReactNode } from "react";
import { Word } from "../typings";

// 定义上下文的类型
interface WordsListContextType {
  wordsList: Word[];
  setWordsList: React.Dispatch<React.SetStateAction<Word[]>>;
}

const arr = [
  {
    name: "cancel",
    updateTime: new Date(),
    proficiency: 0.7, // 熟练度
    phoneticSymbol: "cancel 音标", //音标
    translation: "取消",
  },
  {
    name: "happy",
    updateTime: new Date(),
    proficiency: 0.5, // 熟练度
    phoneticSymbol: "happy 音标", //音标
    translation: "开心",
  },
  {
    name: "computer",
    updateTime: new Date(),
    proficiency: 0.5, // 熟练度
    phoneticSymbol: "computer 音标", //音标
    translation: "电脑",
  },
];
// 创建上下文
const WordsListContext = createContext<WordsListContextType | undefined>(
  undefined
);

// 创建一个 Provider 组件
export const WordsListProvider = ({ children }: { children: ReactNode }) => {
  const [wordsList, setWordsList] = useState<Word[]>(arr);

  return (
    <WordsListContext.Provider value={{ wordsList, setWordsList }}>
      {children}
    </WordsListContext.Provider>
  );
};

// 自定义 Hook，方便使用上下文
// eslint-disable-next-line react-refresh/only-export-components
export const useWordsList = () => {
  const context = useContext(WordsListContext);
  if (!context) {
    throw new Error("useWordsList must be used within a WordsListProvider");
  }
  return context;
};

interface WordIndexType {
  wordIndex: number;
  setWordIndex: React.Dispatch<React.SetStateAction<number>>;
}

const WordIndexContext = createContext<WordIndexType | undefined>(undefined);

export const WordIndexProvider = ({ children }: { children: ReactNode }) => {
  const [wordIndex, setWordIndex] = useState<number>(0);

  return (
    <WordIndexContext.Provider value={{ wordIndex, setWordIndex }}>
      {children}
    </WordIndexContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWordIndex = () => {
  const context = useContext(WordIndexContext);
  if (!context) {
    throw new Error("useWordsList must be used within a WordsListProvider");
  }
  return context;
};
