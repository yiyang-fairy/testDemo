//函数作为返回值
//返回的函数使用了外部变量，就是闭包

const fn = () => {
    const a = 100
    return () => {
        return a + 2
    }
}

const a = 1
console.log(fn()())

//函数作为参数传递
const fn2 = (fn) => {
    const a = 200
    fn()
}

const fn3 = () => {
    console.log(a + 2)
}

fn2(fn3)

//闭包： 自由变量的查找，是在函数定义的地方，向上级作用域查找
//不是在执行的地方
