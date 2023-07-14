class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHi() {





        console.log('Hi, my name is ' + this.name + ' and I am ' + this.age)
    }
}

const XiaoMing = new Person('XiaoMing', 18)

XiaoMing.sayHi()


class Studen extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }
    // sayHi() {
    //     console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' and I am in grade ' + this.grade)
    // }
    study() {
        console.log(this.name + ' is studying')
    }
}

const ZhanSang = new Studen('ZhanSang', 18, 3)
ZhanSang.sayHi()
ZhanSang.study()
console.log(ZhanSang instanceof Person)
console.log(ZhanSang.__proto__ === Studen.prototype)
