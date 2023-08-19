import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/user";
import ArticleType from "../components/ArticleType";
import ArticleList from "../components/ArticleList";
import { getArticles } from "../api/article";

export default function User() {
  const user = useContext(UserContext);
  const [articles, setArticles] = useState([]);
  function getFavoritedArticles() {
    getArticles({
      limit: 10,
      offset: 0,
      favorited: user.username,
    }).then((res) => {
      setArticles(res.articles);
    });
  }
  function getMyArticles() {
    getArticles({
      limit: 10,
      offset: 0,
      author: user.username,
    }).then((res) => {
      setArticles(res.articles);
    });
  }
  useEffect(() => {
    if (!user) {
      return;
    }
    getFavoritedArticles();
  }, [user]);
  if (user === null) {
    return null;
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full py-14  flex flex-col items-center justify-center bg-gray-200/50">
        <div
          className="flex flex-col justify-center items-center"
          style={{ width: "50%" }}
        >
          <div className=" w-24 h-24 rounded-full overflow-hidden">
            <img className="w-full h-full" src={user.image} alt="" />
          </div>
          <p className="text-center text-2xl font-thin mt-3">{user.username}</p>
          <p>{user.bio}</p>
        </div>
        <div className="main flex justify-end items-center px-12">
          <button
            onClick={() => {
              location.href = "/setting";
            }}
            className=" px-2 py-1 text-gray-400 rounded-md border border-gray-400 border-solid text-sm"
          >
            ⚙ Edit Profile Setting
          </button>
        </div>
      </div>
      <div className="main flex items-start justify-center mt-8">
        <div className="flex-1">
          <ArticleType
            mainType={{
              name: "Favorites Articles",
              type: 0,
              getList: getFavoritedArticles,
            }}
            otherType={{
              name: "My Articles",
              type: 1,
              getList: getMyArticles,
            }}
            articles={articles}
          ></ArticleType>
          <ArticleList articles={articles}></ArticleList>
        </div>
      </div>
    </div>
  );
}
