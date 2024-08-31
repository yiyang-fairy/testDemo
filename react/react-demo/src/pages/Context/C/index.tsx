import { Button } from "antd";
import myContext from "../context";

const { Consumer } = myContext;

export default function C() {
  return (
    <Consumer>
      {(context) => {
        console.log(context, "context  C");
        return (
          <div className="bg-yellow-100 p-2">
            C<div>counter: {context?.counter}</div>
            <Button onClick={() => context?.setCounter(context.counter + 1)}>
              counter + 1
            </Button>
          </div>
        );
      }}
    </Consumer>
  );
}
