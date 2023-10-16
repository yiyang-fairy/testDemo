console.log("xss");

let value = "";

const input = document.querySelector("#input");
const box = document.querySelector("#box");

input.addEventListener("blur", (e) => {
  value = e.target.value;
  console.log(value);
  box.innerText = encode(value);
});

const encode = (str) => {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
