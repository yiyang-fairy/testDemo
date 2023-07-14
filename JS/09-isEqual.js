const isObject = (obj) => {
    return typeof obj === "object" && obj !== null;
}
const isEquel = (a, b) => {
  if(!isObject(a) || !isObject(b)) return a === b;
  if(a === b) return true;
  const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  for (let key in a) {
    const res = isEquel(a[key], b[key]);
    if(!res) return false;
  }
  return true;
};

const one = {
    a: 1, 
    b: [1, 2, 3],
    c: "hi",
    d: {
        name: "John",
        age: 20,
        hobbies: ["football", "basketball", "baseball"]
    }
}
const two = {
    a: 1, 
    b: [1, 2, 3],
    c: "hi",
    d: {
        name: "John",
        age: 20,
        hobbies: ["football", "basketball", "baseball"]
    }
}
console.log(isEquel(one, two)); // false