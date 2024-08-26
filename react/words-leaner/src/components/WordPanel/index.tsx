import { useWordIndex, useWordsList } from "../../store/words";
import Translation from "../Translation";
import { WordComponent } from "../WordComponent";

export default function WordPanel() {
  const { wordIndex } = useWordIndex();
  const { wordsList } = useWordsList();
  const currentWord = wordsList[wordIndex];
  const nextWord = wordsList[wordIndex + 1] || null;
  const lastWord = wordsList[wordIndex - 1] || null;
  const state = {
    isTyping: true,
    timerData: {
      time: 1,
    },
  };
  return (
    <>
      <div className="container flex flex-grow flex-col items-center justify-center">
        {currentWord && (
          <div className="relative flex w-full justify-center">
            {!state.isTyping && (
              <div className="absolute flex h-full w-full justify-center">
                <div className="z-10 flex w-full items-center backdrop-blur-sm">
                  <p className="w-full select-none text-center text-xl text-gray-600 dark:text-gray-50">
                    按任意键{state.timerData.time ? "继续" : "开始"}
                  </p>
                </div>
              </div>
            )}
            {/* {state.isTyping && (
              <div>
                <div>{lastWord.name}</div>
                <div>{nextWord.name}</div>
              </div>
            )} */}
            <div className="relative">
              <WordComponent word={currentWord} />
              <Translation />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
