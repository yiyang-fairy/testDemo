import SearchInput from "../component/searchInput.jsx";

import { Button, Space, Swiper, Toast } from "antd-mobile";
export default function Home() {
  const colors = ["https://unsplash.it/414/180/?random","https://unsplash.it/414/180/?random","https://unsplash.it/414/180/?random","https://unsplash.it/414/180/?random"];
  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        style={{
          backgroundImage: `url(${color})`,
          height: "180px",
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "48px",
          userSelect: "none",
        }}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ));
  
  return (
    <div>
      <img src="https://unsplash.it/414/180/?random" alt="" />
      <HeadSearchInput />
      <div className="w-full">
        <Swiper autoplay>{items}</Swiper>
      </div>
      <div>
        {

        }
      </div>
    </div>
  );
}

function HeadSearchInput() {
  return (
    <div className="">
      <div className="h-11 w-full fixed top-6 z-10 flex items-center justify-between px-5">
        <SearchInput children={<span>位置</span>} />
        <span>定位</span>
      </div>
    </div>
  );
}
