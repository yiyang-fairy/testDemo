import ArticleType from "./ArticleType";
import AirticleList from "./ArticleList";
import { getArticleFeed, getArticles } from "../api/article";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ArticleTypeContext } from "../utils/articleType";
export default function HomeArticle() {
  const { articleType } = useContext(ArticleTypeContext);
  useEffect(() => {
    if (articleType === 0) {
      getArticles({
        limit: 10,
        offset: 0,
      }).then((res) => {
        setAirticles(res.articles);
      });
    } else if (articleType === 1) {
      getArticleFeed({
        limit: 10,
        offset: 0,
      }).then((res) => {
        setAirticles(res.articles);
      });
    } else {
      getArticles({
        limit: 10,
        offset: 0,
        tag: articleType,
      }).then((res) => {
        setAirticles(res.articles);
      });
    }
  }, [articleType]);

  const [airticles, setAirticles] = useState([]);
  return (
    <div>
      <ArticleType></ArticleType>
      <AirticleList airticles={airticles}></AirticleList>
    </div>
  );
}
