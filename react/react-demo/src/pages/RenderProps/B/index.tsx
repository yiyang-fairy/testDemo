import { RenderProps } from "../MouseMove";

export default function B({ pointer, handleMouse }: RenderProps) {
  return (
    <div
      className="bg-green-100 p-3 relative"
      style={{
        width: "400px",
        height: "400px",
      }}
      onMouseMove={(e) => {
        // Calculate position relative to this div
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        handleMouse({ x, y });
      }}
    >
      B
      <div
        className="size-3 bg-yellow-500 rounded absolute"
        style={{
          left: `${pointer.x}px`,
          top: `${pointer.y}px`,
          transform: "translate(-50%, -50%)", // Center the ball on the cursor
        }}
      ></div>
    </div>
  );
}
