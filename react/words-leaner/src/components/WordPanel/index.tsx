import { useTypingState } from "../../store/typingSate";
import { useWordIndex, useWordsList } from "../../store/words";
import Translation from "../Translation";
import { WordComponent } from "../WordComponent";

export default function WordPanel() {
  const { wordIndex, setWordIndex } = useWordIndex();
  const { wordsList } = useWordsList();

  const currentWord = wordsList[wordIndex];
  const nextWord = wordsList[wordIndex + 1];
  const lastWord = wordsList[wordIndex - 1];

  const { typingState, updateTypingState } = useTypingState();

  const onWordComplete = () => {
    console.log("这个单词拼写完成");
    if (wordIndex === wordsList.length - 1) {
      setTimeout(() => {
        alert("恭喜你复习完所有单词");
      }, 500);
      updateTypingState((draft) => {
        draft.isTyping = false;
      });
    } else {
      changeWord("next");
    }
  };

  const changeWord = (type: string) => {
    if (type === "next" && wordIndex < wordsList.length) {
      setWordIndex(wordIndex + 1);
    } else if (type === "last" && wordIndex > 0) {
      setWordIndex(wordIndex - 1);
    }
  };
  return (
    <>
      <div className=" flex justify-between">
        {typingState.isTyping && (
          <>
            <div onClick={() => changeWord("last")}>
              {lastWord ? lastWord.name : "___"}
            </div>
            <div onClick={() => changeWord("next")}>
              {nextWord ? nextWord.name : "___"}
            </div>
          </>
        )}
      </div>
      <div className="container flex flex-grow flex-col items-center justify-center mt-5">
        {currentWord && (
          <div className="relative flex w-full justify-center">
            {!typingState.isTyping && (
              <div className="absolute flex h-full w-full justify-center">
                <div className="z-10 flex w-full items-center backdrop-blur-sm">
                  <p className="w-full select-none text-center text-xl text-gray-600 dark:text-gray-50">
                    按任意键{typingState.time ? "继续" : "开始"}
                  </p>
                </div>
              </div>
            )}

            <div className="relative">
              <WordComponent
                word={currentWord}
                onWordComplete={onWordComplete}
              />
              <Translation word={currentWord} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
