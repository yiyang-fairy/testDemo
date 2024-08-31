import { createContext } from "react";

interface MyContextType {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const myContext = createContext<MyContextType | null>(null);

myContext.displayName = "HappyCat";

export default myContext;
