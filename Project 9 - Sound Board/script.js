const buttons = document.querySelectorAll(".btn");

console.log(buttons[0].innerText);
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playAudio(button.innerText);
  });
});

function playAudio(fileName) {
  var audio = new Audio("sounds/" + fileName + ".mp3");
  audio.play();
}
