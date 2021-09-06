const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();
// using .then
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//    // Using fetch which is async with .then syntax kinda messy
//   fetch("https://icanhazdadjoke.com/", config)
//    // takes respons makes it to json which becomes the data from which we extract the joke
//     .then((res) => res.json())
//     .then((data) => {
//     //   console.log(data);
//       jokeEl.innerHTML = data.joke;
//     });
// }

// using await
// Must include async
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}
jokeBtn.addEventListener("click", generateJoke);
// Fetch returns an async promise thats why we must use await with the res and data
