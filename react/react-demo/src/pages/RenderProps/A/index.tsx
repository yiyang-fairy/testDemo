import { RenderProps } from "../MouseMove";

export default function A({ pointer, handleMouse }: RenderProps) {
  return (
    <div
      className="bg-pink-100 p-3"
      style={{
        width: "400px",
        height: "400px",
      }}
      onMouseMove={(e) =>
        handleMouse({
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      A
      <div>
        <p>x: {pointer.x}</p>
        <p>y: {pointer.y}</p>
      </div>
    </div>
  );
}
