let spans = document.querySelectorAll(".progress span");
let section = document.querySelector(".three");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 150) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
