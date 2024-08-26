import { createContext, useState, useContext, ReactNode } from "react";
import { TypingSetting } from "../typings";

// 创建 Context
const TypingSettingContext = createContext<
  | {
      typingSetting: TypingSetting | null;
      setTypingSetting: React.Dispatch<
        React.SetStateAction<TypingSetting | null>
      >;
    }
  | undefined
>(undefined);

const obj = {
  dictionaryId: 123,
  dictionaryName: "ECT-4",
  chapter: "第一章",
  phoneticSymbol: "qqqqq",
};

// 创建 Provider 组件
export const TypingSettingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [typingSetting, setTypingSetting] = useState<TypingSetting | null>(obj);

  return (
    <TypingSettingContext.Provider value={{ typingSetting, setTypingSetting }}>
      {children}
    </TypingSettingContext.Provider>
  );
};

// 自定义 Hook 以便更轻松地使用 Context
// eslint-disable-next-line react-refresh/only-export-components
export const useTypingSetting = () => {
  const context = useContext(TypingSettingContext);
  if (!context) {
    throw new Error(
      "useTypingSetting must be used within a TypingSettingProvider"
    );
  }
  return context;
};
