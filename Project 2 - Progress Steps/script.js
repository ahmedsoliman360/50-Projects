const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
// number of circles active
var currentActive = 1;
// update the appearance of the circles
function update() {
  // pass in circle object and its index in the array
  circles.forEach(function (circle, idx) {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  //remember the percent as this is a css value
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});
prev.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});
