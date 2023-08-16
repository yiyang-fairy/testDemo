import {favoriteArticle, unfavoriteArticle} from "../api/article";
import Tags from "./Tags";
import { useEffect, useState } from "react";
export default function AirticleList(props) {
  function clickLike(e, favorited) {
    const target = e.target
    if(favorited) {
      setFavorited(false)
      unfavoriteArticle().then((res) => {
        target.nextSibling.textContent = res.article.favoritesCount
      })
      
    }
    else {
      setFavorited(true)
      favoriteArticle().then((res) => { 
        target.nextSibling.textContent = res.article.favoritesCount
      })
    }
    console.log(e, favorited, 'oooooooooooo')
  }
  function toDetail(slut) {
    // getArticle(slut).then(res => {
    //   setArticle(res.article)
    // })
    location.href='article?slut=' + slut
  }
  const [favorited, setFavorited] = useState(false)
  const airticles = props.airticles.map((item, index) => (
    <div key={index} className="py-6">
      <div className="flex justify-between items-center">
        <div className="flex ">
          <div className=" w-12 h-12 rounded-full overflow-hidden mr-1">
            <img className="w-full h-full" src={item.author.image} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="main-color">{item.author.username}</div>
            <div className="text-gray-400 font-thin text-sm">{item.createdAt}</div>
          </div>
        </div>
        <div
          onClick={(e) => clickLike(e,favorited)}
          className="flex justify-center items-center py-1 px-2 border-solid border-green-600/60 border rounded-md text-xs main-color"
        >
          <span className="">❤</span>
          <span>{item.favoritesCount}</span>
        </div>
      </div>
      <div onClick={() => {
            toDetail(item.slug)
      }} className="flex flex-col mt-5">
        <div className=" text-lg font-medium">{item.title}</div>
        <div className="text-lg text-gray-400 font-thin">{item.description}</div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 font-thin text-sm ">Read more...</span>
          <div>
            <Tags tags={item.tagList} type={2}></Tags>
          </div>
        </div>
      </div>
    </div>
  ));
  return <div>{airticles}</div>;
}
