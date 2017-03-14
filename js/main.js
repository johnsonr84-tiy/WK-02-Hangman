// Objects

let gameStatus = {
    randomWord: " ",
    guess: " ",
    tracker: [],
    feedback: " ",
    guessedLetters: [],
    guessesRemaining: 10,
    mistakeMessage: " ",
    head: "not-visible",
    neck: "not-visible",
    torso: "not-visible",
    arm1: "not-visible",
    arm2: "not-visible",
    leg1: "not-visible",
    leg2: "not-visible",
    hang: "visible",
    btn: "not-visible",
}

document.getElementById("pick-letter").onclick = function() {pickLetter()};

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var commonWords = [ "them","cough","hand","actor","torque","finish","fish","youth","that","bait","help","wash","fort","only","garish","waste","with","history","they","island","batch","bet","thank","have","from","order","bone","had","butterfly","word","bunt","notch","what","ball","were","wet","when","your","scan","said","there","abuse","nanny","each","which","she","doe","how","their","cliff","will","puppy","other","about","out","many","then","them","these","son","some","hurt","would","make","like","him","into","time","hash","look","two","more","write","gonzo","see","number","note","way","could","people","max","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"]

let alphNode = document.querySelector("div#alphabet")
alphNode.textContent = alphabet.join(" ")

var chooseLetter=document.getElementById("chooseLetter");
// chooseLetter.addEventListener("input", display);


function pickLetter (){
var letter = prompt("Your choice of letter?");
console.log(letter);
}

function chooseWord() {
  let thing = commonWords[(Math.floor(Math.random() * commonWords.length))];
  return thing;
 }

var word = chooseWord()
console.log(word)


function drawUnderscores (word) {
  var result = "";
  for (var i = 0; i < word.length; i++) {
    result += "_ ";
    }
    return result;
}

var underscores = drawUnderscores(word)

function alterAt ( n, c, originalString ) {
  return originalString.substr(0,n) + c + originalString.substr(n+1);
}

function guessLetter (letter, shown, answer) {
  var checkIndex=0;
  checkIndex = answer.indexOf(letter);
  while (checkIndex >= 0){
    shown = alterAt (checkIndex, letter, shown);
    checkIndex = answer.indexOf(letter, checkIndex + 1)
  }
  return shown;
}

  // replaces correctly-guessed letter
function show (letter, shown, checkLetter) {
  let s = shown.substr(0,checkLetter) + letter + shown.substr(checkLetter+1, shown.length)
  return s;
}

document.getElementById("game-board").innerHTML = underscores;

document.getElementById("pick-letter").onclick = function() {pickLetter()};


var chooseLetter=document.getElementById("chooseLetter");
// chooseLetter.addEventListener("input", display);


function pickLetter (){
var letter = prompt("Your choice of letter?");
console.log(letter);
}

function chooseWord() {
  let thing = commonWords[(Math.floor(Math.random() * commonWords.length))];
  return thing;
 }

var word = chooseWord()
console.log(word)


function drawUnderscores (word) {
  var result = "";
  for (var i = 0; i < word.length; i++) {
    result += "_ ";
    }
    return result;
}

var underscores = drawUnderscores(word)

function alterAt ( n, c, originalString ) {
  return originalString.substr(0,n) + c + originalString.substr(n+1);
}

function guessLetter (letter, shown, answer) {
  var checkIndex=0;
  checkIndex = answer.indexOf(letter);
  while (checkIndex >= 0){
    shown = alterAt (checkIndex, letter, shown);
    checkIndex = answer.indexOf(letter, checkIndex + 1)
  }
  return shown;
}

  // replaces correctly-guessed letter
function show (letter, shown, checkLetter) {
  let s = shown.substr(0,checkLetter) + letter + shown.substr(checkLetter+1, shown.length)
  return s;
}

document.getElementById("game-board").innerHTML = underscores;

// // random array element
// function randomElement(array) {
//     var randomIndex = Math.floor(Math.random() * array.length);
//     var element = element[randomIndex];
//     return element;
// }
//
// // making blank spaces function
// function fillBlanks(word, guessedLetters) {
//     var result = "";
//     for (var i = 0; i < word.length; i++) {
//       var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//       //if letter is in letters guessed
//       //if we want to add the letter to the result
//       //else if this letter is a space, add a space to the result
//       //else add an "-"
//     }
//     return result;
// }
//
// function makeTracker() {
//     gameStatus.tracker = [];
//     for (var i = 0; i < gameStatus.randomWord.length; i++) {
//         gameStatus.tracker.push("_");
//     }
// }
//
// function guessTracker() {
//     for (var i = 0; i < gameStatus.guessedLetters.length; i++) {
//         if (' ' + gameStatus.guess === gameStatus.guessedLetters[i]) {
//             gameStatus.feedback = "You have previously selected that letter"
//             show(gameStatus);
//             return false;
//         }
//     }
//     gameStatus.guessedLetters.push(" " + gameStatus.guess);
// }
//
// function checkGuess() {
//     if (gameStatus.randomWord.indexOf(gameStatus.guess) === -1) {
//         gameStatus.guessesRemaing -= 1;
//         gameStatus.mistakeMessage = "You have " + gameStatus.guessesRemaing + " selections remaining."
//         gameStatus.feedback = "Try again";
//         if (gameStatus.guessesRemaining > -1) {
//             if (gameStatus.head === "not-visible") {
//                 gameStatus.head = "visible";
//             } else if (gameStatus.neck === "not-visible") {
//                 gameStatus.neck = "visible";
//             } else if (gameStatus.torso === "not-visible") {
//                 gameStatus.torso = "visible";
//             } else if (gameStatus.arm1 === "not-visible") {
//                 gameStatus.arm1 = "visible";
//             } else if (gameStatus.arm2 === "not-visible") {
//                 gameStatus.arm2 = "visible";
//             } else if (gameStatus.leg1 === "not-visible") {
//                 gameStatus.leg1 = "visible";
//             } else if (gameStatus.leg2 === "not-visible") {
//                 gameStatus.leg2 = "visible";
//             } else if (gameStatus.hang === "not-visible") {
//                 gameStatus.hang = "visible";
//             }
//         }
//
//
//     } else {
//         for (var i = 0; i < gameStatus.randomWord.length; i++) {
//             if (gameStatus.guess === gameStatus.randomWord[i]) {
//                 gameStatus.tracker[i] = gameStatus.guess;
//                 gameStatus.feedback = "Correct!";
//             }
//         }
//     }
//     show(gameStatus);
// }
//
//
// function playerInput() {
//     return document.querySelector("input").value;
// }
//
// //Player guess funtions with selection status
//
// function userGuess() {
//     gameStatus.guess = playerInput();
//     let check = checkGuess();
//     guessTracker();
//     if (gameStatus.tracker.join(" ") === gameStatus.randomWord) {
//         gameStatus.feedback = "Congrats! You win!\nThe correct word is: " + gameStatus.randomWord;
//     } else if (gameStatus.guessesRemaining === 0) {
//         gameStatus.feedback = "Incorrect. You Lose.\nThe correct word is: " + gameStatus.randomWord;
//         gameStatus.btn = "not-visible";
//     }
//     show(gameStatus);
//     return false;
// }
//
// function windowOnload() {
//     gameStatus.randomWord = randomElement(commonWords);
//     makeTracker();
//     show(gameStatus);
// }
//
// const reset = () => {
//     location.reload();
// }
//
//
//
// window.onload = function();
//
// document.querySelector(".btn").onclick = userGuess;
// document.querySelector(".reset").onclick = reset;
