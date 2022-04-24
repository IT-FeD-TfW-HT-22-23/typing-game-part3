// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

// PART 1
// 1. getRandomWord
// 2. addWordToDOM
// 3. add event listener to text element
// 4. updateScore

// PART 2
// 5. get the cursor automatically in input
// 6. Counting down - timer
// 7. update time
// 8. gameOver
// 9. eventlistener => time += 5;

// PART 3
// 10. settings btn
// 11. settings select
// 12. pull from local storage
// 13. set difficulty select value
// 14. set time depending on difficulty in the eventlistener

// Initializing word
let randomWord;

// Initializing score
let score = 0;

// initializing time
let time = 10;

// focus text input at start
text.focus();

// COUNTING DOWN
const timeInterval = setInterval(updateTime, 1000);

// RANDOM WORD
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
  // floor will just round down
  // function to get a random word from our words array
}

// ADD WORD TO DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// UPDATE SCORE
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// UPDATE TIME
function updateTime() {
  //console.log(1);
  time--;

  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);

    gameOver();
  }
}

// GAME OVER
function gameOver() {
  endgameEl.innerHTML = `<h1>Time ran out!</h1> <p>Your final score is ${score}</p> <button onClick="location.reload()">Reload</button>`;

  endgameEl.style.display = "flex";
}

addWordToDOM();

text.addEventListener("input", (event) => {
  const insertedText = event.target.value;
  //console.log(insertedText);

  if (insertedText === randomWord) {
    addWordToDOM();

    updateScore();

    // clear input field
    event.target.value = "";

    // increment the time after correct input
    time += 5;
  }
});
