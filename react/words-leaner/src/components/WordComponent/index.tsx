import { useCallback, useEffect, useMemo } from "react";
import { useImmer } from "use-immer";
import { Word } from "../../typings";
import Letter from "../Letter";
import { useTypingState } from "../../store/typingSate";

type WordComponentType = {
  word: Word;
  onWordComplete: () => void;
};

export function WordComponent({ word, onWordComplete }: WordComponentType) {
  const letters = useMemo(() => [...word.name], [word.name]);
  const { typingState } = useTypingState();

  const [state, updateState] = useImmer({
    inputWord: [] as string[],
    isComplete: false,
  });

  const getLetterVisible = useCallback(
    (index: number): boolean => state.inputWord[index] === letters[index],
    [state.inputWord, letters]
  );

  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      const char = e.key;
      updateState((draft) => {
        if (char === letters[draft.inputWord.length]) {
          draft.inputWord.push(char);
          if (draft.inputWord.length === letters.length) {
            draft.isComplete = true;
          }
        } else {
          draft.inputWord = [];
        }
      });
    },
    [letters, updateState]
  );

  useEffect(() => {
    if (state.isComplete) {
      setTimeout(() => {
        onWordComplete();
        updateState((draft) => {
          draft.inputWord = [];
          draft.isComplete = false;
        });
      }, 1000);
    }
  }, [state.isComplete, onWordComplete, updateState]);

  useEffect(() => {
    if (!typingState.isTyping) return;

    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [onKeydown, typingState.isTyping]);

  return (
    <>
      <div>
        <div className="flex">
          {letters.map((item, index) => (
            <Letter
              key={index}
              letter={item}
              visible={getLetterVisible(index)}
              correct={state.inputWord[index] === item ? true : ""}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-3">{word.phoneticSymbol}</div>
    </>
  );
}
