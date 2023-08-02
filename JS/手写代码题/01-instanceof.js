const myInstanceof = (A, B) => {
    let protoA = A.__proto__
    while(protoA) {
        if(protoA === B.prototype) {
            return true
        }
        protoA = protoA.__proto__
    }
    return false
}

const a =  [1 ,2, 3]
console.log(a instanceof Object, myInstanceof(a, {a: 2}))