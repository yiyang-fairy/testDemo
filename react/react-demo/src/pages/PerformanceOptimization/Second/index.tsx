import { useState } from "react";
import Child from "./Child";

export default function Second() {
  const [counter, setCounter] = useState(1);
  const [counter1, setCounter1] = useState(1);

  console.log("父组件渲染了");
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+ 1</button>
      <div>counter: {counter}</div>
      <Child counter={counter1} setCounter={setCounter1} />
    </div>
  );
}
