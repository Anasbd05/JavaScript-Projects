let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false; // function started ? = NO

onscroll = function () {
  if (this.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}
