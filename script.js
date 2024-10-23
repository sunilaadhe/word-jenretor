let input = document.querySelector("#search-input");
let button = document.querySelector("#search-btn");

let word = async () => {
  let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
  } else {
    console.error('Error fetching word data:', response.statusText);
  }
}

button.addEventListener("click", (e) => {
  word();
});

console.log("hello");