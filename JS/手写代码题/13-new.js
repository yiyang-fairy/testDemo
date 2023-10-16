// const OpNew = (fn) => {
//   const obj = {};
//   obj.__proto__ = fn.prototype === null ?;
//   const res = fn.apply(obj, arguments);
//   return typeof res === "object" ? res : obj;
// };

function OpNew(constructor, ...args) {
  const newInstance = Object.create(constructor.prototype || Object.prototype);
  const res = constructor.apply(newInstance, args);
  if (typeof res === "object" && res !== null) {
    return res;
  }
  return newInstance;
}

function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log(this.name, this);
};

const p1 = new Person("1");
console.log("sedationh p1", p1);
p1.printName?.();

const p2 = OpNew(Person, 1);
console.log("sedationh p2", p2);
p2.printName?.();

function Person2(name) {
  this.name = name;
}

Person2.prototype = null;

const p3 = new Person2("22");
console.log("sedationh p3", Object.getPrototypeOf(p3));

const p4 = OpNew(Person2, "22");
console.log("sedationh p4", Object.getPrototypeOf(p4));
