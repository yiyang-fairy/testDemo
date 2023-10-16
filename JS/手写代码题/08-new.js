const mNew = (fn) => {
  const obj = {};
  obj.__proto__ = fn.prototype;
  const res = fn.apply(obj, arguments);
  return typeof res === "object" ? res : obj;
};
