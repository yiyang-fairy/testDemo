import { createContext, ReactNode, useContext } from "react";
import { useImmer } from "use-immer";
import { TypingState } from "../typings";

interface TypingStateType {
  typingState: TypingState;
  updateTypingState: (
    updater: (draft: TypingState) => void | TypingState
  ) => void;
}

const TypingStateContext = createContext<TypingStateType | undefined>(
  undefined
);

const initialState: TypingState = {
  isTyping: false,
  time: 0,
  dictionaryId: 123,
  dictionaryName: "ECT-4",
  chapter: "第一章",
  phoneticSymbol: "qqqqq",
};

export const TypingStateProvider = ({ children }: { children: ReactNode }) => {
  const [typingState, updateTypingState] = useImmer<TypingState>(initialState);

  return (
    <TypingStateContext.Provider value={{ typingState, updateTypingState }}>
      {children}
    </TypingStateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTypingState = () => {
  const context = useContext(TypingStateContext);
  if (!context) {
    throw new Error("useTypingState must be used within a TypingStateProvider");
  }
  return context;
};
