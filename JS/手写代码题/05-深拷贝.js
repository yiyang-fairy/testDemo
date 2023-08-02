const obj = {
    a: 1,
    b: {
        c: 2,
        d: [0, 9 , 8]
    }
}


const myDeepClone = (obj) => {
    // const res = {}
    if(typeof obj !== "object") {
        return obj
    }
    const res = obj instanceof Array ? []: {}
    for(let key in obj) {
        if(typeof obj[key] === 'object' && obj[key] !== null) {
            res[key] = myDeepClone(obj[key])
        }
        else {
            res[key] = obj[key]
        }
    }
    return res
}

const aaa = myDeepClone(obj)
console.log(aaa)
aaa.b.c = 9999
console.log(obj.b.c, aaa.b.c)