import { Tabs, TabsProps } from "antd";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Forth from "./Forth";

export default function PerformanceOptimization() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "shouldComponentUpdate 与 PureComponent",
      children: <First />,
    },
    {
      key: "2",
      label: "React.memo",
      children: <Second />,
    },
    {
      key: "3",
      label: "useCallback",
      children: <Third />,
    },
    {
      key: "4",
      label: "useMemo",
      children: <Forth />,
    },
  ];
  return (
    <div>
      <div>组件渲染性能优化</div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
