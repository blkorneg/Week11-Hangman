// require letter objects
var letter = require('./letter.js');

//contains methods that will check the letters guessed versus the random words selected.
function Word(word) {
  //propert to store the string word
  
  //collection of letter objects
  this.letters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //property is the word found?
  this.found = false;

  this.getLets = function() {
// populate the collection above with new Letter objects
  };
  
  //found the current word
  this.didWeFindTheWord = function() {
    //sets this.found in the word object to true or false if all letter objects have a true value in their appear property
    };

    return this.found;
  };

  //picks a random word from the wordList
  this.randomWord = function(wrd) {
    this.currentWord = this.WordList[(Math.floor(Math.random * wordList.length))];
  }
  //checks if it exists in random word and returns true(giving the index of the letter) or false
  this.checkLetters = function(guessedLetter) {

  // iterate through the collection of letter Objects

  // if guessLetter matches Letter property, the letter object should be shown
      return whatToReturn;
  };

  this.wordRender = function() {
  // render the word based on if letters are found or ot found
    return str;
  };

}

// export to use in main.js
module.exports = Word;



