import {favoriteArticle, unfavoriteArticle} from "../api/article";
import Tags from "./Tags";
import { useEffect, useState } from "react";
export default function ArticleList(props) { 
  function clickLike(e, item) {
    console.log(item, e, 'item like')
    const target = e.target
    if(item.favorited) {
      unfavoriteArticle(item.slug).then((res, e) => {
        console.log(res, e, 'res')
        unLikeClass(e.target)
      })
      
    }
    else {
      favoriteArticle(item.slug).then((res, e) => { 
        console.log(res, e, 'res')
        likeClass(e.target)
      })
    }
  }
  function likeClass(element) {
    e.element.classList.add('bg-green-600/60 text-white')
  }
  function unLikeClass(element) {
    e.element.classList.remove('bg-green-600/60 text-white')
  }
  function toDetail(slug) {
    location.href='article?slut=' + slug
  }
  // const [favorited, setFavorited] = useState(false)

  if(!props.articles ) return (
    <div>
      no articles...
    </div>
  )
  return <div>{
    props.articles.map((item, index) => (
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
            onClick={(e) => clickLike(e,item)}
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
    ))
    }</div>;
}
