import { memo } from "react";

function A({ counter, setCounter, test }) {
  console.log("A组件渲染了");
  return (
    <div className="bg-green-100 w-1/2 p-3 h-full">
      <div>A 组件</div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+ 1</button>
        <div>counter: {counter}</div>
      </div>
      <button onClick={() => test()}> test </button>
    </div>
  );
}

export default memo(A);
