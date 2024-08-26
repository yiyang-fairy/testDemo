import { createContext, ReactNode, useContext, useState } from "react";
import { TypingState } from "../typings";

interface TypingStateType {
  typingState: TypingState;
  setTypingState: React.Dispatch<React.SetStateAction<TypingState>>;
}

const TypingStateContext = createContext<TypingStateType | undefined>(
  undefined
);

const obj = {
  isTyping: false,
  time: 0,
};

export const TypingStateProvider = ({ children }: { children: ReactNode }) => {
  const [typingState, setTypingState] = useState<TypingState>(obj);

  return (
    <TypingStateContext.Provider value={{ typingState, setTypingState }}>
      {children}
    </TypingStateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTypingState = () => {
  const context = useContext(TypingStateContext);
  if (!context) {
    throw new Error("useWordsList must be used within a WordsListProvider");
  }
  return context;
};
