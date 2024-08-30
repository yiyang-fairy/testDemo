import { useState } from "react";
import A from "./A";
import B from "./B";
import withLog from "./withLog";

const NewA = withLog(A);
const NewB = withLog(B);

export default function HigherOrderComponent() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      {toggle ? <NewA age={18}></NewA> : <NewB name="小王"></NewB>}
    </div>
  );
}
