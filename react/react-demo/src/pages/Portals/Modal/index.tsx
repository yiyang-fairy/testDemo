import { createPortal } from "react-dom";

export default function Modal() {
  return createPortal(
    <div
      style={{
        width: "450px",
        height: "250px",
        border: "1px solid",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        lineHeight: "250px",
      }}
    >
      Modal
    </div>,
    document.body
  );
}
