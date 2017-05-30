"use strict";

let gameStatus = {
  randomWord: "",
  guess: "",
  tracker: [],
  feedback: "",
  guessedLetters: [],
  mistakes: 10,
  mistakeMessage: " ",
  head: "not-visible",
  neck: "not-visible",
  torso: "not-visible",
  arm1: "not-visible",
  arm2: "not-visible",
  leg1: "not-visible",
  leg2: "not-visible",
  hang: "not-visible",
  btn: "visible"
};

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// choose a random word from array commonWords

function findRandomWord() {
  let number = getRandomNumber(0, commonWords.length);
  gameStatus.randomWord = commonWords[number];
  console.log("randomWord:", gameStatus.randomWord);
  let xyz = gameStatus.randomWord;
  console.log(xyz);
  return xyz;
}

function makeTracker() {
  gameStatus.tracker = [];
  for (var i = 0; i < gameStatus.randomWord.length; i++) {
    gameStatus.tracker.push(" _");
  }
}

function guessTracker() {
  for (var i = 0; i < gameStatus.guessedLetters.length; i++) {
    if (" " + gameStatus.guess === gameStatus.guessedLetters[i]) {
      gameStatus.feedback = "You have already guessed that letter";
      show(gameStatus);
      return false;
    }
  }
  gameStatus.guessedLetters.push(" " + gameStatus.guess);
}

function checkGuess() {
  if (gameStatus.randomWord.indexOf(gameStatus.guess) === -1) {
    gameStatus.mistakes -= 1;
    gameStatus.mistakeMessage =
      "You have " + gameStatus.mistakes + " mistakes left.";
    gameStatus.feedback = "Try again";
    if (gameStatus.mistakes > -1) {
      if (gameStatus.head === "hidden") {
        gameStatus.head = "visible";
      } else if (gameStatus.neck === "hidden") {
        gameStatus.neck = "visible";
      } else if (gameStatus.torso === "hidden") {
        sgameStatus.torso = "visible";
      } else if (gameStatus.arm1 === "hidden") {
        gameStatus.arm1 = "visible";
      } else if (gameStatus.arm2 === "hidden") {
        gameStatus.arm2 = "visible";
      } else if (gameStatus.leg1 === "hidden") {
        gameStatus.leg1 = "visible";
      } else if (gameStatus.leg2 === "hidden") {
        gameStatus.leg2 = "visible";
      } else if (gameStatus.hang === "hidden") {
        gameStatus.hang = "visible";
      }
    }
  } else {
    for (var i = 0; i < gameStatus.randomWord.length; i++) {
      if (gameStatus.guess === gameStatus.randomWord[i]) {
        gameStatus.tracker[i] = gameStatus.guess;
        gameStatus.feedback = "Great guess!";
      }
    }
  }
  show(gameStatus);
}

function playerInput() {
  return document.querySelector("input").value;
}

//Start game
// debugger;
function userGuess() {
  console.log("hello world");
  gameStatus.guess = playerInput();
  let check = checkGuess();
  guessTracker();
  if (gameStatus.tracker.join("") === gameStatus.randomWord) {
    gameStatus.feedback = "You Win!\nThe word was: " + gameStatus.randomWord;
  } else if (gameStatus.mistakes === 0) {
    gameStatus.feedback =
      "Better Luck Next Time.\nThe word was: " + gameStatus.randomWord;
    gameStatus.btn = "hidden";
  }
  show(gameStatus);
  return false; //bypass form default
}

function windowOnload() {
  findRandomWord();
  makeTracker();
  show(gameStatus);
}

const reset = () => {
  location.reload();
};

window.onload = windowOnload();

document.querySelector(".btn").onclick = userGuess;
document.querySelector(".reset").onclick = reset;
