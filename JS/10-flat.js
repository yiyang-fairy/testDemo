const flat = (arr) => {
  const res = Array.prototype.concat.apply([], arr);
  if (res.find((item) => item instanceof Array)) {
    return flat(res);
  } else {
    return res;
  }
};

const arr1 = [1, [2, 3, 4, [5, 6]], [7, [8, 9]], 10];

const arr2 = [1, 2, [3, 4]];
console.log(flat(arr1));
