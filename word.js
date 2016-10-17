//checks the letters versus the random word selected
// require letter objects
var letter = require('./letter.js');

function Word(wrd) {
  //store the string wrd
  this.word = wrd;
  //collection of letter objects
  this.letters = [];
  this.wordFound = 'false';

  this.getLets = function() {
    //populate the collection above with new Letter objects
  };

  //found the current word
  this.didWeFindTheWord = function() {
    //if there are no more '_' then set this.WordFound to true
    return this.found;
  };

  this.checkIfLetterFound = function(guessLetter) {
    //iterates through the collection of letter Objects.

    //if guessLetter matches Letter property, the letter object should be shown
    return whatToReturn;
  };

  this.wordRender = function() {
    //render the word based on if letters are found or not
    return display;
  };
}

module.exports = Word;

