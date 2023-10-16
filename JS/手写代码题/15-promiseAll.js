/*
Promise.all() 接受一个承诺的可迭代对象作为输入，并返回一个单一的 Promise 。
当输入的所有承诺都实现（包括传递空的可迭代对象）时，返回的承诺会实现，并包含实现值的数组。
当输入的任何承诺拒绝时，返回的承诺会拒绝，并带有第一个拒绝原因。
*/

const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("foo");
  }, 100);
});

Promise.all([p1, p2, p3])
  .then((values) => {
    console.log(values); // [3, 1337, "foo"]
  })
  .catch((err) => console.log(err, "err"));

const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const arr = Array.from(promises);
    const len = arr.length;
    const res = [];
    let count = 0;
    for (const p of arr) {
      Promise.resolve(p)
        .then((value) => {
          res.push(value);
          count++;
          if (count === len) {
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

promiseAll([p1, p2, p3])
  .then((value) => console.log(value, "value"))
  .catch((err) => console.log(err, "err"));
