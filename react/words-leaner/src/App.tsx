import { WordIndexProvider, WordsListProvider } from "./store/words";
import { TypingSettingProvider } from "./store/typingSetting";
import Typing from "./pages/Typing";
import { TypingStateProvider } from "./store/typingSate";

function App() {
  return (
    <WordsListProvider>
      <WordIndexProvider>
        <TypingSettingProvider>
          <TypingStateProvider>
            <Typing></Typing>
          </TypingStateProvider>
        </TypingSettingProvider>
      </WordIndexProvider>
    </WordsListProvider>
  );
}

export default App;
