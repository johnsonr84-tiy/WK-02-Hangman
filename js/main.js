var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"


// random integer function
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    var index = getRandomInt(0, commonWords.length);
    var word = commonWords[index];
// console.log (word);


// making blank spaces function
    function blanksFromAnswer(answerWord) {
      var result = "";
      for(var i= 0; i<answerWord.length; i++) {
       result = result + "_ "
      }
      return result;
    }
// console.log (blanksFromAnswer(word));


// random word chooser function
    function findRandomWord () {
    let number = getRandomInt(0, commonWords.length);
    .randomWord = commonWords[number];
    return gameStatus.randomWord
  }

    function makeTracker () {
    gameStatus.tracker = [];
    for (var i = 0; i < gameStatus.randomWord.length; i++) {
      gameStatus.tracker.push(' _');
    }
  }


    let gameStatus = {
      randomWord: "",
      guess: "",
      tracker: [],
      feedback: "",
      guessedLetters: [],
      mistakes: 8,
      mistakeMessage: "",
      head: 'hidden',
      neck: 'hidden',
      torso: 'hidden',
      arm1: 'hidden',
      arm2: 'hidden',
      leg1: 'hidden',
      leg2: 'hidden',
      hang: 'hidden',
      btn: 'visible'
    }
