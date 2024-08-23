import { Button, Drawer } from "antd";
import { useState } from "react";
import { useWordsList } from "../../store/words";

export default function WordsList() {
  const { wordsList } = useWordsList();

  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="left"
        onClose={onClose}
        open={open}
      >
        {wordsList.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </Drawer>
    </div>
  );
}
