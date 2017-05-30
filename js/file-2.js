function show(gameStatus) {
  showTracker(gameStatus);
  showFeedback(gameStatus);
  showGuessTracker(gameStatus);
  showMistakes(gameStatus);
  showHead(gameStatus);
  showNeck(gameStatus);
  showTorso(gameStatus);
  showArm1(gameStatus);
  showArm2(gameStatus);
  showLeg1(gameStatus);
  showLeg2(gameStatus);
  showHang(gameStatus);
  showHideButton(gameStatus);
}

function showTracker(gameStatus) {
  document.querySelector(".tracker").innerHTML = gameStatus.tracker.join(" ");
}

function showFeedback(gameStatus) {
  document.querySelector(".feedback").innerHTML = gameStatus.feedback;
}

function showGuessTracker(gameStatus) {
  document.querySelector(".guessedLetters").innerHTML =
    gameStatus.guessedLetters;
}

function showMistakes(gameStatus) {
  document.querySelector(".mistakes").innerHTML = gameStatus.mistakeMessage;
}

function showHead(gameStatus) {
  document.getElementById("head").style.visibility = gameStatus.head;
}

function showNeck(gameStatus) {
  document.getElementById("neck").style.visibility = gameStatus.neck;
}

function showTorso(gameStatus) {
  document.getElementById("torso").style.visibility = gameStatus.torso;
}
function showArm1(gameStatus) {
  document.getElementById("arm1").style.visibility = gameStatus.arm1;
}

function showArm2(gameStatus) {
  document.getElementById("arm2").style.visibility = gameStatus.arm2;
}

function showLeg1(gameStatus) {
  document.getElementById("leg1").style.visibility = gameStatus.leg1;
}

function showLeg2(gameStatus) {
  document.getElementById("leg2").style.visibility = gameStatus.leg2;
}

function showHang(gameStatus) {
  document.getElementById("hang").style.visibility = gameStatus.hang;
}

function showHideButton(gameStatus) {
  document.getElementById("btn").style.visibility = gameStatus.btn;
}
