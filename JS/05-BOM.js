//只读Navigator.userAgent属性返回当前浏览器的用户代理字符串。
const ua = navigator.userAgent
const isChrome = ua.indexOf('Chrome')
console.log(isChrome) // 0

//screen

console.log(screen.width)
console.log(screen.height)