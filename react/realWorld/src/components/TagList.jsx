import Tags from "./Tags"
import { getTags } from "../api/article"
import { useEffect, useState } from "react"
export default function TagList() {
    let tags = []
    useEffect(() => {
        getTags().then((res) => {
            setTagList(res.tags)
        })
    }, [])
    const [tagList, setTagList] = useState([])
    return (
        <div className=" bg-gray-100 p-3 rounded-lg w-64 ml-7">
           <div className="mb-2">
           Popular Tags
           </div>
           <Tags tags={tagList} type={1}></Tags>
        </div>
    )
}