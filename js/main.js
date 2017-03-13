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
    hang: "not-visible",
    btn: "not-visible",
}

// random array element
function randomElement(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var element = element[randomIndex];
    return element;
}

// making blank spaces function
function fillBlanks(word, guessedLetters) {
    var result = "";
    for (var i = 0; i < word.length; i++) {
      var letter =
      //if letter is in letters guessed
      //if we want to add the letter to the result
      //else if this letter is a space, add a space to the result
      //else add an "-"
    }
    return result;
}

function makeTracker() {
    gameStatus.tracker = [];
    for (var i = 0; i < gameStatus.randomWord.length; i++) {
        gameStatus.tracker.push(" _");
    }
}

function guessTracker() {
    for (var i = 0; i < gameStatus.guessedLetters.length; i++) {
        if (' ' + gameStatus.guess === gameStatus.guessedLetters[i]) {
            gameStatus.feedback = "You have previously selected that letter"
            show(gameStatus);
            return false;
        }
    }
    gameStatus.guessedLetters.push(" " + gameStatus.guess);
}

function checkGuess() {
    if (gameStatus.randomWord.indexOf(gameStatus.guess) === -1) {
        gameStatus.guessesRemaing -= 1;
        gameStatus.mistakeMessage = "You have " + gameStatus.guessesRemaing + " selections remaining."
        gameStatus.feedback = "Try again";
        if (gameStatus.guessesRemaining > -1) {
            if (gameStatus.head === "not-visible") {
                gameStatus.head = "visible";
            } else if (gameStatus.neck === "not-visible") {
                gameStatus.neck = "visible";
            } else if (gameStatus.torso === "not-visible") {
                gameStatus.torso = "visible";
            } else if (gameStatus.arm1 === "not-visible") {
                gameStatus.arm1 = "visible";
            } else if (gameStatus.arm2 === "not-visible") {
                gameStatus.arm2 = "visible";
            } else if (gameStatus.leg1 === "not-visible") {
                gameStatus.leg1 = "visible";
            } else if (gameStatus.leg2 === "not-visible") {
                gameStatus.leg2 = "visible";
            } else if (gameStatus.hang === "not-visible") {
                gameStatus.hang = "visible";
            }
        }


    } else {
        for (var i = 0; i < gameStatus.randomWord.length; i++) {
            if (gameStatus.guess === gameStatus.randomWord[i]) {
                gameStatus.tracker[i] = gameStatus.guess;
                gameStatus.feedback = "Correct!";
            }
        }
    }
    show(gameStatus);
}


function playerInput() {
    return document.querySelector("input").value;
}

//Player guess funtions with selection status

function userGuess() {
    gameStatus.guess = playerInput();
    let check = checkGuess();
    guessTracker();
    if (gameStatus.tracker.join(" ") === gameStatus.randomWord) {
        gameStatus.feedback = "Congrats! You win!\nThe correct word is: " + gameStatus.randomWord;
    } else if (gameStatus.guessesRemaining === 0) {
        gameStatus.feedback = "Incorrect. You Lose.\nThe correct word is: " + gameStatus.randomWord;
        gameStatus.btn = "not-visible";
    }
    show(gameStatus);
    return false;
}

function windowOnload() {
    gameStatus.randomWord = randomElement(commonWords);
    makeTracker();
    show(gameStatus);
}

const reset = () => {
    location.reload();
}



window.onload = function();

document.querySelector(".btn").onclick = userGuess;
document.querySelector(".reset").onclick = reset;
