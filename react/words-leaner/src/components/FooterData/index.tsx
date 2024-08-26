import { Card } from "antd";
import { useTypingState } from "../../store/typingSate";

export default function FooterData() {
  const { typingState } = useTypingState();

  const handleTime = (n: number): string => {
    const seconds = n % 60;
    const minutes = Math.floor(n / 60);
    const secondsString = seconds < 10 ? "0" + seconds : seconds + "";
    const minutesString = minutes < 10 ? "0" + minutes : minutes + "";

    return `${minutesString}:${secondsString}`;
  };
  const time = handleTime(typingState.time);

  return (
    <Card style={{ width: 300, borderRadius: "10px" }} className="shadow-lg">
      <div className="flex justify-between items-center ">
        <div className="text-center">
          <div className="text-xl font-bold">{time}</div>
          <div className="text-gray-500">时间</div>
        </div>
        {/* <div className="text-center">
          <div className="text-3xl font-bold">36</div>
          <div className="text-gray-500">输入数</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">2</div>
          <div className="text-gray-500">WPM</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">35</div>
          <div className="text-gray-500">正确数</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">97</div>
          <div className="text-gray-500">正确率</div>
        </div> */}
      </div>
    </Card>
  );
}
