import { useEffect, useRef, useState } from "react";

export default function Ref() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const timer = useRef<number>(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      console.log("触发了");
    }, 1000);
  }, []);

  const stop = () => {
    console.log(timer.current);
    clearInterval(timer.current);
  };
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>click</button>
      </div>
      <div>
        <div>{counter}</div>
        <button onClick={add}>+1</button>
        <button onClick={stop}>stop</button>
      </div>
    </div>
  );
}
