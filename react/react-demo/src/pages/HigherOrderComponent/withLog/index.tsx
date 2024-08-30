import { ComponentType, useEffect } from "react";

export default function withLog<P extends object>(Com: ComponentType<P>) {
  return function NewCom(props: P) {
    useEffect(() => {
      console.log(`日志：组件${Com.name}已创建，时间为${Date.now()}`);

      return () => {
        console.log(`日志：组件${Com.name}已销毁，时间为${Date.now()}`);
      };
    }, []);
    return <Com {...props}></Com>;
  };
}
