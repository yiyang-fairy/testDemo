import { useState } from "react";
export default function Swiprt(props) {
  const swiperImgs = props.imgs.map((item, index) => (
    <div
      key={index}
      className="inline-block text-white bg-no-repeat"
      style={{
        background: `url(${item}) left top no-repeat`,
        height: "180px",
        color: "#ffffff",
        width: `${window.screen.width}px`,
      }}
    >
      {index}{" "}
    </div>
  ));
  const screenWidth = window.screen.width;
  const [index, setIndex] = useState(0);
  const translateX = -index * screenWidth;
  const changeImg = (index, type) => {
    if (type === "left") {
      if (index === 0) return;
      setIndex(index - 1);
    } else if (type === "right") {
      if (index === props.imgs.length - 1) return;
      setIndex(index + 1);
    }
  };

  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  const dragStart = (e) => {
    startPos = e.clientX;
    isDragging = true;
  };

  const dragEnd = (e) => {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100) {
      console.log(currentTranslate, "currentTranslate");
    }

    if (movedBy > 100) {
      console.log(currentTranslate, "currentTranslate");
    }
  };
  const drag = (e) => {
    if (isDragging) {
        const currentPosition = e.clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
      //   track.style.transform = `translateX(${currentTranslate}px)`;
      console.log(currentTranslate,'currentTranslate');
      }
  }
  return (
    <div
      className=" relative w-full overflow-hidden"
      style={{ height: "180px" }}
    >
      <div className="bg-pink-200 overflow-x-auto">
        <div
          draggable="true"
          className=""
          onMouseDown={(e) => {
            e.preventDefault();
            dragStart(e);
            // container.classList.add("grabbing");
          }}
          onMouseUp={(e) => {
            dragEnd(e);
          }}
          onMouseLeave={(e) => {
            dragEnd(e);
          }}
          onMouseMove={(e) => {
            drag(e);
          }}
          style={{ width: "3000px", transform: `translateX( ${translateX}px)` }}
        >
          {swiperImgs}
        </div>
      </div>
      <div className=" absolute bottom-2 left-0  h-6 w-full bg-purple-100">
        <div className=" h-full flex justify-center items-center">
          {props.imgs.map((item, index) => (
            <span
              className="w-2 h-2 rounded bg-red-500 inline-block"
              key={index}
            ></span>
          ))}
        </div>
      </div>
      <div
        onClick={() => {
          changeImg(index, "left");
        }}
        className="bg-blue-300 absolute left-0 top-1/2"
      >
        left
      </div>
      <div
        onClick={() => {
          changeImg(index, "right");
        }}
        className="bg-blue-300 absolute right-0 top-1/2"
      >
        right
      </div>
    </div>
  );
}
