import { useContext } from "react";
import myContext from "../context";
import { Button } from "antd";

export default function B() {
  const context = useContext(myContext);

  if (!context) {
    return <div>Context not available</div>;
  }

  const { counter, setCounter } = context;

  return (
    <div className="bg-green-100 p-2">
      B<div>counter: {counter}</div>
      <Button onClick={() => setCounter((prev) => prev - 1)}>
        counter - 1
      </Button>
    </div>
  );
}
