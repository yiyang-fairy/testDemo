export default function AriticleType() {
  function select(e) {
    const span = document.querySelectorAll(".ariticle span");
    span.forEach((item) => {
      item.classList.remove("border-b-2", "text-green-500");
      item.classList.add("hover:text-gray-500");
    });
    e.target.classList.add("border-b-2", "text-green-500");
    e.target.classList.remove("hover:text-gray-500");
  }
  function Yours() {
    if(localStorage.getItem("token")) {
        return (
            <span
          onClick={(e) => select(e)}
          className=" inline-block  border-green-500 border-solid h-8 px-4  text-lg hover:text-gray-500"
        >
          Your Feed
        </span>
        )
    }
  }
  return (
    <div className="ariticle border-b border-gray-300 border-solid h-8 text-gray-300">
      <Yours></Yours>
      <span
        onClick={(e) => select(e)}
        className=" text-green-500 border-b-2 inline-block  border-green-500 border-solid h-8 px-4 text-lg hover:text-gray-500"
      >
        Global Feed
      </span>
    </div>
  );
}
