import ArticleType from "./ArticleType";
import AirticleList from "./ArticleList";
import { getArticles } from "../api/article";
import { useEffect, useState } from "react";

export default function HomeArticle() {
    
useEffect(() => {   
    getArticles({
        limit: 10,
        offset: 0
    }).then((res) => {
        setAirticles(res.articles)
    })  
}, [])


    const [airticles, setAirticles] = useState([])
    return (
        <div>
           <ArticleType></ArticleType>
           <AirticleList airticles={airticles}></AirticleList>
           
        </div>
    )
}