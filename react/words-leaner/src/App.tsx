import WordPanel from "./components/WordPanel";
import "./App.css";
import TypingSetting from "./components/TypingSetting";
import WordsList from "./components/WordsList";
import { WordsListProvider } from "./store/words";

function App() {
  return (
    <WordsListProvider>
      <div className="fixed left-0 top-[50%] hover:cursor-pointer">
        <WordsList></WordsList>
      </div>
      <div className="body">
        <div className="flex justify-between items-center">
          <div>
            <h1 className=" text-red-600">title</h1>
          </div>
          <TypingSetting></TypingSetting>
        </div>
        <div className=" mt-10">
          <WordPanel></WordPanel>
        </div>
        <div>footer</div>
      </div>
    </WordsListProvider>
  );
}

export default App;
