import { useState } from "react";

type PointerType = {
  x: number;
  y: number;
};

type HandleMouseType = (pointer: PointerType) => void;

export type RenderProps = {
  pointer: PointerType;
  handleMouse: HandleMouseType;
};

export default function MouseMove({
  render,
}: {
  render: (props: RenderProps) => React.ReactNode;
}) {
  const [pointer, setPointer] = useState<PointerType>({
    x: 0,
    y: 0,
  });

  const handleMouse: HandleMouseType = (pointer) => {
    setPointer({
      x: pointer.x,
      y: pointer.y,
    });
  };

  return render ? render({ pointer, handleMouse }) : null;
}
