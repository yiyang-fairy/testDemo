import { WordIndexProvider, WordsListProvider } from "./store/words";
import Typing from "./pages/Typing";
import { TypingStateProvider } from "./store/typingSate";

function App() {
  return (
    <WordsListProvider>
      <WordIndexProvider>
        <TypingStateProvider>
          <Typing></Typing>
        </TypingStateProvider>
      </WordIndexProvider>
    </WordsListProvider>
  );
}

export default App;
