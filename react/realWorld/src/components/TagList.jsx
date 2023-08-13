import Tags from "./Tags"
export default function TagList() {
    const tags = [{
        name: "react"
    }, {
        name: "vue"
    }, {
        name :"angular"
    }, {
        name :"angular1111111111111111111"
    }]
    return (
        <div className=" bg-gray-100 p-3 rounded-lg w-64 ml-7">
           <div className="mb-2">
           Popular Tags
           </div>
           <Tags tags={tags}></Tags>
        </div>
    )
}