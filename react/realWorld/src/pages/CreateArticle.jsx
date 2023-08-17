import { useState } from "react";
import { createArticle } from "../api/article";
export default function CreateArticle() {
  const [articleTitle, setArtitleTitle] = useState("");
  const [articleDescription, setArtitleDescription] = useState("");
  const [articleBody, setArtitleBody] = useState("");
  const [articleTag, setArtitleTag] = useState("");
  function publish() {
    createArticle({
      title: articleTitle,
      description: articleDescription,
      body: articleBody,
      tagList: articleTag,
    }).then((res) => {
      alert("发布成功！");
      location.href = "article?slut=" + res.article.slug;
    });
  }
  return (
    <div className="flex justify-center items-center">
      <div className="main px-16 mt-8">
        <p className="flex items-center border border-solid border-gray-300 p-4 mb-5 rounded-md font-blod">
          <input
            value={articleTitle}
            onChange={(e) => setArtitleTitle(e.target.value)}
            placeholder="Article Title"
            className=" w-full"
            type="text"
          />
        </p>
        <p className="flex items-center border border-solid border-gray-300 p-4 mb-5 rounded-md font-blod">
          <input
            value={articleDescription}
            onChange={(e) => setArtitleDescription(e.target.value)}
            placeholder="What's article about"
            className=" w-full"
            type="text"
          />
        </p>
        <p className="flex items-center border border-solid border-gray-300 p-4 mb-5 rounded-md font-blod">
          <textarea
            value={articleBody}
            onChange={(e) => setArtitleBody(e.target.value)}
            placeholder="Write your article(in markdown)"
            className=" w-full"
          />
        </p>
        <p className="flex items-center border border-solid border-gray-300 p-4 mb-5 rounded-md font-blod">
          <input
            value={articleTag}
            onChange={(e) => setArtitleTag(e.target.value)}
            placeholder="Enter tags"
            className=" w-full"
            type="text"
          />
        </p>
        <div className="flex justify-end">
          <button
            onClick={publish}
            className="main-bg px-8 py-3 text-white rounded-md "
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
