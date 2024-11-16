// let buttons =document.querySelectorAll('button')
let boxes = document.querySelectorAll(".box");

boxes.forEach((element) => {
  let answer = element.querySelector(".answer");
  let quest = element.querySelector(".quest-btn");
  let toggleButton = element.querySelector(".toggle-icon");

  quest.addEventListener("click", () => {
    answer.classList.toggle("active");
    if (answer.classList.contains("active")) {
      toggleButton.textContent = "-";
    } else {
      toggleButton.textContent = "+";
    }
  });
});
