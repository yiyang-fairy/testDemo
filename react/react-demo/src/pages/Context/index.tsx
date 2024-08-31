import { useState } from "react";
import A from "./A";
import myContext from "./context";

const { Provider } = myContext;

export default function Context() {
  const [counter, setCounter] = useState(1);
  return (
    <div className=" bg-pink-100 p-2">
      <Provider value={{ counter, setCounter }}>
        Context
        <A></A>
      </Provider>
    </div>
  );
}
