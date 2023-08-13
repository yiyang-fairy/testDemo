import {likeArticle} from "../api/ariticle";
export default function AirticleList(props) {
  function clickLike() {
    likeArticle(1).then((res) => {
        console.log(res);
        console.log('点赞成功')
    });
  }
  const airticles = props.airticles.map((item, index) => (
    <div key={index} className="py-6">
      <div className="flex justify-between items-center">
        <div className="flex ">
          <div className=" w-12 h-12 rounded-full overflow-hidden mr-1">
            <img src="https://dummyimage.com/50x50/000/fff.png" alt="" />
          </div>
          <div className="flex flex-col">
            <div className="main-color">{item.name}</div>
            <div className="text-gray-400 font-thin text-sm">{item.date}</div>
          </div>
        </div>
        <div
          onClick={clickLike}
          className="flex justify-center items-center py-1 px-2 border-solid border-green-600/60 border rounded-md text-xs main-color"
        >
          <span className="">❤</span>
          <span>{item.likes}</span>
        </div>
      </div>
      <div onClick={() => {
            location.href = `/ariticle`;
      }} className="flex flex-col mt-5">
        <div className=" text-3xl font-bold">{item.title}</div>
        <div className="text-lg text-gray-400 font-thin">{item.detail}</div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 font-thin text-sm ">Read more...</span>
          <div>tags</div>
        </div>
      </div>
    </div>
  ));
  return <div>{airticles}</div>;
}
