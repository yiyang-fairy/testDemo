const A = {
    a: 1,
    b: {
        c: 2,
    }
}

const deepClone = (obj) => {
    const  newObj = {}
    if(typeof obj != 'object') {
        return obj
    }
    for(key in obj) {
        if(typeof obj[key] == 'object') {
            newObj[key] = deepClone(obj[key])
        }
        else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

const B = deepClone(A)
B.a = 5
console.log(A.a) 
console.log(B.a)