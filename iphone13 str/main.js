let main = document.querySelector(".main");
let gray = document.querySelector(".gray");
let red = document.querySelector(".red");
let skyblue = document.querySelector(".skyblue");
let lightyellow = document.querySelector(".lightyellow");
let gold = document.querySelector(".gold");

function phones(element) {
  main.src = element;
}

gray.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
});
red.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightcoral";
});
skyblue.addEventListener("click", () => {
  document.body.style.backgroundColor = "teal";
});
lightyellow.addEventListener("click", () => {
  document.body.style.backgroundColor = "#e1a95e";
});
gold.addEventListener("click", () => {
  document.body.style.backgroundColor = "brown";
});
