import { useEffect } from "react";
import FooterData from "../../components/FooterData";
import TypingSetting from "../../components/TypingSetting";
import WordPanel from "../../components/WordPanel";
import WordsList from "../../components/WordsList";
import { useTypingState } from "../../store/typingSate";
import "./index.css";

export default function Typing() {
  const { typingState, updateTypingState } = useTypingState();

  useEffect(() => {
    if (!typingState.isTyping) {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key !== "Enter" && !e.altKey && !e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          updateTypingState((draft) => {
            draft.isTyping = true;
          });
          console.log(" 开始拼写");
        }
      };
      window.addEventListener("keydown", onKeyDown);

      return () => window.removeEventListener("keydown", onKeyDown);
    }
  });

  useEffect(() => {
    // 启动计时器
    let intervalId: number;
    if (typingState.isTyping) {
      intervalId = window.setInterval(() => {
        updateTypingState((draft) => {
          draft.time += 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  });
  return (
    <div className="body">
      <div className="fixed left-0 top-[50%] hover:cursor-pointer">
        <WordsList></WordsList>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className=" text-red-600">title</h1>
          </div>
          <TypingSetting></TypingSetting>
        </div>
        <div className=" mt-10">
          <WordPanel></WordPanel>
        </div>
        <div className="flex justify-center mt-20">
          <FooterData></FooterData>
        </div>
      </div>
    </div>
  );
}
