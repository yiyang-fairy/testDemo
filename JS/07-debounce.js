const input = document.querySelector("input");

let timer = null;

const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
};

input.addEventListener(
  "keyup",
  debounce(() => {
    console.log(input.value);
  }, 500)
);
