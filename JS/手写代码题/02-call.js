Function.prototype.myCall = function(context, ...args) {


    if(typeof this !== "function") {
        return "not a function"
    }
    context = context === null?window:Object(context)
    const fn = Symbol('fn')
    context[fn] = this
    const res = context[fn](...args)
    delete context[fn]
    return res
}

const obj1 = {
    name : 'obj1',
    getName: function(a) {
        console.log(this.name, a)
        return 1
    }
}

const obj2 = {
    name:'obj2'
}

const getName = obj1.getName

console.log(getName.call(obj2, 2))

console.log(getName.myCall(obj2, 'hi'))

