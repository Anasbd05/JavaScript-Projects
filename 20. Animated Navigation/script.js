let navBar = document.getElementById("navBar");
let menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  if (navBar.classList.toggle("active")) {
    menu.src = "close.png";
  } else {
    menu.src = "menu.png";
  }
});
