export default function SearchInput({children}) {
    return (
        <div className="w-full bg-purple-200 flex items-center justify-center"> 
        {
        children ? children : <span>首页</span>
      }
            <input type="text" />
        </div>
    )
}