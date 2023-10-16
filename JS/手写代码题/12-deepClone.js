const deepClone = (obj) => {
  const res = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      res[key] = deepClone(obj[key]);
    } else {
      res[key] = obj[key];
    }
  }
  return res;
};

const obj = {
  a: 1,
  b: {
    x: 11,
    y: 12,
    z: {
      m: 22,
      n: 23,
    },
  },
};

const a = deepClone(obj);
a.b.x = 9999;

console.log(obj, a);

JSON.parse(JSON.stringify({ a: 1 }));

const target = {
  field1: 1,
  field2: undefined,
  field3: "ConardLi",
  field4: {
    child: "child",
    child2: {
      child2: "child2",
    },
  },
};

function deepClone1(target) {
  if (typeof target === "object") {
    const cloneTarget = {};
    for (let key in target) {
      cloneTarget[key] = deepClone1(target[key]);
    }
    return cloneTarget;
  }
  return target;
}

const res = deepClone1(target);
res.field1 = 2;
console.log(res, target);
