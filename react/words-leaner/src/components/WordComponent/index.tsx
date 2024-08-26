import { Word } from "../../typings";
import Letter from "../Letter";

type WordComponentType = {
  word: Word;
};

export function WordComponent({ word }: WordComponentType) {
  const letters = [...word.name];

  return (
    <>
      <div>
        <div className="flex">
          {letters.map((item, index) => (
            <Letter
              key={index}
              letter={item}
              visible={true}
              correct={true}
            ></Letter>
          ))}
        </div>
      </div>
      <div>{word.proficiency}</div>
    </>
  );
}
