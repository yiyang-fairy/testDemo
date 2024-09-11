import { useCallback, useState } from "react";
import A from "./A";
import B from "./B";

export default function Third() {
  const [counter, setCounter] = useState(1);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);

  const test = () => {
    console.log("test 触发了");
  };

  const newTest = useCallback(test, []);

  console.log("父组件渲染了");
  return (
    <div className="bg-pink-100 w-1/2 p-3 h-80 flex flex-col">
      <div>父组件</div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+ 1</button>
        <div>counter: {counter}</div>
      </div>
      <div className="flex justify-between flex-1">
        <A counter={counter1} setCounter={setCounter1} test={newTest}></A>
        <B counter={counter2} setCounter={setCounter2} test={newTest}></B>
      </div>
    </div>
  );
}
