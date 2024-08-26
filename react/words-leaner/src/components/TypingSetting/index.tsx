import React, { useState } from "react";
// import {
//   EyeFilled,
//   PieChartFilled,
//   RetweetOutlined,
//   SettingFilled,
//   SoundFilled,
//   SunFilled,
//   TabletFilled,
//   TranslationOutlined,
// } from "@ant-design/icons";
import { Dropdown, Button } from "antd";
import { useTypingState } from "../../store/typingSate";

export default function TypingSetting() {
  const [currentChapter, setCurrentChapter] = useState("第 1 章");

  const items = [
    { key: "第 1 章", label: "第 1 章" },
    { key: "第 2 章", label: "第 2 章" },
    { key: "第 3 章", label: "第 3 章" },
    { key: "第 4 章", label: "第 4 章" },
    { key: "第 5 章", label: "第 5 章" },
    { key: "第 6 章", label: "第 6 章" },
  ];

  const handleMenuClick = (e: { key: React.SetStateAction<string> }) => {
    setCurrentChapter(e.key);
  };

  const { typingState, updateTypingState } = useTypingState();

  const handleStart = () => {
    updateTypingState((draft) => {
      draft.isTyping = !draft.isTyping;
    });
  };

  return (
    <div className="flex items-center bg-white shadow-lg rounded-full p-4 space-x-4">
      {/* 左侧内容 */}
      <div className="flex items-center space-x-2">
        <span className="font-semibold">CET-4</span>
        {/* 章节选择 */}
        <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          trigger={["click"]}
        >
          <Button className="font-semibold">{currentChapter}</Button>
        </Dropdown>
        <span>美音</span>
      </div>

      {/* 图标按钮部分 */}
      {/* <div className="flex items-center space-x-3">
        <button className="text-gray-600 hover:text-blue-600">
          <SoundFilled />
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <RetweetOutlined />
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <EyeFilled />
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <TranslationOutlined />
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <TabletFilled />
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <PieChartFilled />
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <SunFilled />
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <SettingFilled />
        </button>
      </div> */}

      {/* 右侧按钮 */}
      <button
        onClick={handleStart}
        className="bg-blue-500 text-white font-semibold px-4 py-1 rounded-full shadow-md hover:bg-blue-600"
      >
        {typingState.isTyping ? "Pause" : "Start"}
      </button>
    </div>
  );
}
