import HomeAriticle from "../components/HomeAriticle";
import TagList from "../components/TagList";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="w-full py-14 text-white flex items-center justify-center"
        style={{ backgroundColor: "#5CB85C", boxShadow: 'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)' }}
      >
        <div style={{ width: "50%" }}>
          <h1 className=" text-center text-5xl font-black">conduit</h1>
          <p className="text-center text-2xl font-thin">
            A place to share your knowledge.
          </p>
        </div>
      </div>
      <div className="main flex items-center justify-center mt-8">
        <div className="flex-1">
            <HomeAriticle></HomeAriticle>
        </div>
        <div className="">
            <TagList></TagList>
        </div>
      </div>
    </div>
  );
}
