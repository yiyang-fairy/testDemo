import { Word } from "../../typings";

export default function Translation({ word }: { word: Word }) {
  return <div className=" text-center">{word.translation}</div>;
}
