import { useEffect, useState } from "react";
import { getArticle } from "../api/article";
import { useLocation } from "react-router-dom";

import Comments from "../components/Comments";

function useAsycnEffectArticle() {
  const slut = useLocation().search.split("=")[1];
  const [article, setArticle] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getArticle(slut);
      setArticle(res.article);
    })();
  }, [slut]);

  return article;
}
function Author({ article, footer }) {
  if (!article) {
    return null;
  }
  return (
    <div className="flex items-center">
      <div className=" w-12 h-12 rounded-full overflow-hidden mr-1">
        <img className="w-full h-full" src={article.author.image} alt="" />
      </div>
      <div className="flex flex-col text-white items-start justify-center font-thin text-xs mr-3">
        <div className={`text-base ${footer ? "main-color" : ""}`}>
          {article.author.username}
        </div>
        <div className=" text-gray-400">{article.createdAt}</div>
      </div>
      <div className="h-7 flex justify-center items-center px-3 border-solid border-gray-300 border rounded text-xs mr-2 ">
        + Follow {article.author.username}
      </div>
      <div
        className={`h-7 flex justify-center items-center px-3  border-solid border-green-600/60 border main-color rounded text-xs hover:bg-green-600/60 hover:text-white ${
          article.favorited ? "bg-green-600/60 text-white" : ""
        }`}
      >
        💗 Favorite Article({article.favoritesCount})
      </div>
    </div>
  );
}
function UnLogin() {
  return (
    <div className="text-gray-400">
      <span className="main-color">Sign in</span> or
      <span className="main-color mx-1">sign up</span>
      to add comments on this article.
    </div>
  );
}

export default function Article() {
  const article = useAsycnEffectArticle();

  if (!article) {
    return null;
  }

  return (
    <div>
      <div className="w-full py-14 text-white flex items-center justify-center bg-black/80">
        <div className="flex flex-col justify-start items-start main">
          <h1 className=" text-start text-4xl font-black">{article.title}</h1>
          <p className="text-center text-2xl font-thin mt-4">
            <Author article={article} />
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center  py-5">
        <div className="main  py-5">{article.body}</div>
        <div className=" border-t border-gray-500/30 border-solid main py-5 flex justify-center items-center">
          <p className="text-center text-2xl font-thin mt-4">
            <Author article={article} footer={true} />
          </p>
        </div>
        {/* <UnLogin/> */}
        <Comments slug={article.slug} />
      </div>
    </div>
  );
}
