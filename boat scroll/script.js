let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let montains3 = document.getElementById("montains3");
let montains4 = document.getElementById("montains4");
let rivers = document.getElementById("rivers");
let boat = document.getElementById("boat");
let logo = document.querySelector(".logo");

window.onscroll = function () {
  let value = scrollY;
  stars.style.right = value + "px";
  moon.style.top = value * 3 + "px";

  montains3.style.top = value * 1.5 + "px";

  montains4.style.top = value / 2 + "px";

  boat.style.left = value + "px";

  if (scrollY >= 70) {
    logo.style.fontSize = 67 + "px";
    logo.style.position = "fixed";
  }
  if (scrollY >= 342) {
    logo.style.display = "none";
  } else {
    logo.style.display = "block";
  }
  if (scrollY >= 108) {
    stars.style.display = "none";
    document.querySelector(".main").style.background =
      "linear-gradient( skyblue , lightblue)";
  } else {
    stars.style.display = "block";
    document.querySelector(".main").style.background =
      "linear-gradient(to top , #40002D , transparent)";
  }
};
