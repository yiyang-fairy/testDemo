import { useEffect, useState } from "react";
import { getArticle } from "../api/article";
import { useLocation } from "react-router-dom";

function useAsycnEffectArticle() {
  const slut = useLocation().search.split("=")[1];
  const [article, setArticle] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getArticle(slut);
      console.log(res, "resss");
      setArticle(res.article);
    })();
  }, [slut]);

  return article;
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
            <div className="flex items-center">
              <div className=" w-12 h-12 rounded-full overflow-hidden mr-1">
                <img
                  className="w-full h-full"
                  src={article.author.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col text-white items-start justify-center font-thin text-xs mr-3">
                <div className="">{article.author.username}</div>
                <div className="">{article.createdAt}</div>
              </div>
              <div className="h-7 flex justify-center items-center px-3 border-solid border-white border rounded-sm text-xs mr-3">
                follow xxx
              </div>
              <div className="h-7 flex justify-center items-center px-3 border-solid border-white border rounded-sm text-xs ">
                ❤ Favorite Article({article.favoritesCount})
              </div>
            </div>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center  py-5">
        <div className="main  py-5">{article.body}</div>
        <div className=" border-t border-gray-500/30 border-solid main py-5 flex justify-center items-center">
          <p className="text-center text-2xl font-thin mt-4">
            <div className="flex items-center">
              <div className=" w-12 h-12 rounded-full overflow-hidden mr-1">
                <img
                  className="w-full h-full"
                  src={article.author.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col text-white items-start justify-center font-thin text-xs mr-3">
                <div className="">{article.author.username}</div>
                <div className="">{article.createdAt}</div>
              </div>
              <div className="h-7 flex justify-center items-center px-3 border-solid border-white border rounded-sm text-xs mr-3">
                follow xxx
              </div>
              <div className="h-7 flex justify-center items-center px-3 border-solid border-white border rounded-sm text-xs ">
                ❤ Favorite Article({article.favoritesCount})
              </div>
            </div>
          </p>
        </div>
        <div className="text-gray-400">
          Sign in or sign up to add comments on this article.
        </div>
      </div>
    </div>
  );
}
