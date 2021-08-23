const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

var load = 0;
var int = setInterval(blurring, 50);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = 1 - load / 100;
  var blur = 30 * (1 - load / 100);
  console.log(blur);
  bg.style.filter = `blur(${blur}px)`;
}
