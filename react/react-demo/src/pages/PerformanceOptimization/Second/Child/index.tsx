import { memo } from "react";

function Child({ counter, setCounter }) {
  console.log("子组件渲染了");

  return (
    <div className=" p-3 bg-pink-100">
      Child
      <div>
        <button onClick={() => setCounter(counter + 1)}> + 1</button>
        <div>counter: {counter}</div>
      </div>
    </div>
  );
}

const arePropsEqual = (oldProps, newProps) => {
  console.log(oldProps, newProps, "oldProps,newProps");
  return true;
};
export default memo(Child, arePropsEqual);
