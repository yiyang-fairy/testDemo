import { useMemo, useState } from "react";

export default function Forth() {
  const [counter, setCounter] = useState(1);
  const [val, setVal] = useState("");

  const getCount = useMemo(() => {
    console.log("getCount 函数调用了");

    return counter + 100;
  }, [counter]);

  return (
    <div className="bg-blue-100 w-1/2 p-3">
      <div>
        <button onClick={() => setCounter(counter + 1)}>+ 1</button>
        <div>counter: {getCount}</div>
      </div>
      <div>
        <input
          value={val}
          type="text"
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
    </div>
  );
}
