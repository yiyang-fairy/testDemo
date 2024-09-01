import { Button } from "antd";
import { useState } from "react";
import Modal from "./Modal";

export default function Portals() {
  const [show, setShow] = useState(false);
  return (
    <div>
      Portals
      <Button onClick={() => setShow(!show)}>
        {" "}
        {show ? "hidden" : "show"} Modal
      </Button>
      {show ? <Modal></Modal> : null}
    </div>
  );
}
