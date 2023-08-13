export default function Tags(props) {
    const tags = props.tags.map((tag, index) => (
        <span key={index} className="text-white bg-gray-500/75 rounded-xl h-6 py-1 px-2 text-xs mr-1 truncate mb-1">
            {tag.name}
        </span>
    ))
    return (
        <div className="flex flex-wrap">
            {tags}
        </div>
    )
}