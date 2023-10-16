//apply 使用给定的 this 和 数组形式的 参数 调用函数

Function.prototype.myApply = function (context, args) {
  context["fn"] = this;
  return context.fn(...args);
};

const obj1 = {
  name: "obj1",
  getName: function (a, b) {
    console.log(this.name, a);
    return b;
  },
};

const obj2 = {
  name: "obj2",
};

const getName = obj1.getName;

console.log(getName.apply(obj2, [1, "wohu"]));

console.log(getName.myApply(obj2, [1, "wohu"]), "my");
