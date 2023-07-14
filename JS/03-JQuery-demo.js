class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length = result.length
        for (let i = 0; i < length; i++) {
            this[i] = result[i]
        }
        this.length = length
    }
    get(index) {
        return this[index]
    }
    each(fn) {
        for(let i = 0; i < this.length; i++) {
            fn(this[i])
        }
    }
}

console.log('hi')
const $p = new jQuery('p')
console.log($p.get(1))