Function.prototype.myApply = function(context, args) {
    if(typeof this !== "function") {
        return "not a function"
    }
    context = context === null ? window : Object(context)
    const fn = Symbol('fn')
    context[fn] = this
    const res = context[fn](...args)
    delete context[fn]
    return res
}

const obj1 = {
    name : 'obj1',
    getName: function(a, b) {
        console.log(this.name, a)
        return b
    }
}

const obj2 = {
    name:'obj2'
}

const getName = obj1.getName

console.log(getName.apply(obj2, [1, 'wohu']))

console.log(getName.myApply(obj2, ['hi', 'oooo']))

