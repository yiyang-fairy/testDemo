import A from "./A";
import B from "./B";
import MouseMove from "./MouseMove";

export default function RenderProp() {
  return (
    <div className="flex gap-6 h-full">
      <MouseMove render={(props) => <A {...props} />}></MouseMove>
      <MouseMove render={(props) => <B {...props} />}></MouseMove>
    </div>
  );
}
