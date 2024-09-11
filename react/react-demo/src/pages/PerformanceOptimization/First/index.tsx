import A from "./A";
import B from "./B";

export default function First() {
  return (
    <div>
      <div>
        shouldComponentUpdate:
        <div>
          <A />
        </div>
        <hr />
        <div>
          <B></B>
        </div>
      </div>
    </div>
  );
}
