import FooterData from "../../components/FooterData";
import TypingSetting from "../../components/TypingSetting";
import WordPanel from "../../components/WordPanel";
import WordsList from "../../components/WordsList";
import "./index.css";

export default function Typing() {
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
