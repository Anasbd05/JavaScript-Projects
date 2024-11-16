let images = ["blade.jpg", "trent.jpeg", "madd.jpeg", "ocean.jpg"];

let index = 0;

setInterval(() => {
  document.body.style.backgroundImage = `url(${images[index]})`;

  if (images.length - 1 > index) {
    index++;
  } else {
    index = 0;
  }
}, 2000);
