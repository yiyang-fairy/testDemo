import { useContext, useEffect } from "react";
import { ArticleTypeContext } from "../utils/articleType";
export default function ArticleType() {
  const { articleType, updateArticleType } = useContext(ArticleTypeContext);
  useEffect(() => {
    if (typeof articleType === "string") {
      activeSpan(document.querySelector(".article .tag-feed"));
    }
  }, [articleType]);

  function activeSpan(element) {
    const span = document.querySelectorAll(".article span");
    span.forEach((item) => {
      item.classList.remove("border-b-2", "text-green-500");
      item.classList.add("hover:text-gray-500");
    });
    element.classList.add("border-b-2", "text-green-500");
    element.classList.remove("hover:text-gray-500");
  }
  function select(e) {
    activeSpan(e.target);
    if (e.target.innerText === "Your Feed") {
      updateArticleType(1);
    } else {
      updateArticleType(0);
    }
  }
  return (
    <div className="article border-b border-gray-300 border-solid h-8 text-gray-300">
      {localStorage.getItem("token") && (
        <span
          onClick={(e) => select(e)}
          className=" inline-block  border-green-500 border-solid h-8 px-4  text-lg hover:text-gray-500"
        >
          Your Feed
        </span>
      )}
      <span
        onClick={(e) => select(e)}
        className=" text-green-500 border-b-2 inline-block  border-green-500 border-solid h-8 px-4 text-lg hover:text-gray-500"
      >
        Global Feed
      </span>
      {typeof articleType === "string" && (
        <span className=" tag-feed text-green-500 border-b-2 inline-block  border-green-500 border-solid h-8 px-4 text-lg hover:text-gray-500">
          # {articleType}
        </span>
      )}
    </div>
  );
}
