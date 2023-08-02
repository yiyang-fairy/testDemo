export default function MenuList() {
    return (
        <> 
        {
            [1,2,3,4,].map((item, index) => {
                return (
                    <div key={index}>菜单{item}</div>
                )
            })
        }
        <div>111</div>
        </>
    )
}