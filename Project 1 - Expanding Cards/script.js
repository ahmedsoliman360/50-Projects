// Select all the panel elements into an array
const panels = document.querySelectorAll(".panel");

// Add an eventListener for clicks to all the divs
// That performs
panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActiveClasses();
    // Adds active class to this specific panel div
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach(function (panel) {
    // removes active class from all divs(panels)
    panel.classList.remove("active");
  });
}
