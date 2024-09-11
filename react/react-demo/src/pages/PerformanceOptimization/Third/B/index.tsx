import { memo } from "react";

function B({ counter, setCounter, test }) {
  console.log("B组件渲染了");
  return (
    <div className="bg-blue-100 w-1/2 p-3 h-full">
      <div>B 组件</div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+ 1</button>
        <div>counter: {counter}</div>
      </div>
      <button onClick={() => test()}> test </button>
    </div>
  );
}

export default memo(B);
