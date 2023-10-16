const sleep = function (time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const delay = function (time, fn, ...args) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn(...args));
    }, time);
  });
};

const fn = (a) => {
  console.log(a + " hi");
};

console.log(delay(3000, fn, "wo"));
